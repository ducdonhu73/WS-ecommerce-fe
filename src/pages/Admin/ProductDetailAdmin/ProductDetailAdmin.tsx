import { useAddProduct, useDeleteProduct, useProductId, useUpdateLoad, useUpdateProduct } from "queries/productQueries";
import { useNavigate, useParams } from "react-router";
import { BaseSyntheticEvent, useEffect, useRef, useState } from "react";
import { ProductResponse } from "apis/products/product.model";
import { InputType, PrimaryButton, TextTitle } from "components";
import { InputTypeModel } from "models";
import { toast } from "react-toastify";

const listInput: InputTypeModel[] = [
  { type: "inputText", label: "name", typeInput: "text" },
  { type: "inputText", label: "price", typeInput: "text" },
  { type: "inputText", label: "category", typeInput: "text" },
  { type: "inputText", label: "amount", typeInput: "text" },
  { type: "inputText", label: "description", typeInput: "text" },
  { type: "inputText", label: "provider", typeInput: "text" },
  { type: "inputText", label: "date of manufacture", typeInput: "text" },
  { type: "inputText", label: "expiration date", typeInput: "text" },
];

const ProductDetailAdmin = () => {
  const { id } = useParams();
  const { mutate: getProduct } = useProductId();
  const { mutate: updateProduct } = useUpdateProduct();
  const { mutate: deleteProduct } = useDeleteProduct();
  const { mutate: addProduct } = useAddProduct();
  const { mutate: uploadImg } = useUpdateLoad();
  const up = useRef<HTMLInputElement>(null);
  const [product, setProduct] = useState<ProductResponse>();
  const [add, setAdd] = useState(false);
  const [loaddingAdd, setLoaddingAdd] = useState(false);
  const [value, setValue] = useState<string[]>([...Array<string>(9)]);
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      getProduct(
        { idProduct: id },
        {
          onSuccess: data => {
            setProduct(data);
            _setValue(data);
          },
        },
      );
    }
  }, []);

  const change = (i: number, e: BaseSyntheticEvent) => {
    const input = e.currentTarget as HTMLInputElement;
    const v = [...value];
    v[i] = input.value;
    setValue(v);
    setAdd(true);
  };

  const update = () => {
    updateProduct(
      {
        product: {
          product_name: value[0],
          price: Number.parseInt(value[1]),
          category_name: value[2],
          amount: Number.parseInt(value[3]),
          description: value[4],
          nhasx: value[5],
          ngaysx: new Date(value[6]),
          hsd: new Date(value[7]),
          image: value[8],
        },
        productId: id as string,
      },
      {
        onSuccess: data => {
          toast("update success");
          setProduct(data);
        },
        onError: err => {
          const e = err as { error: { message: string } };
          toast(e.error.message);
        },
      },
    );
  };

  const _delete = () => {
    deleteProduct(
      { productId: id as string },
      {
        onSuccess: () => {
          toast("delete success");
          navigate("/admin/product");
        },
        onError: err => {
          const e = err as { error: { message: string } };
          toast(e.error.message);
        },
      },
    );
  };

  const cancel = () => {
    if (id === "add" || add === false) navigate("/admin/product");
    setAdd(false);
    if (product) _setValue(product);
  };

  const _add = () => {
    setLoaddingAdd(true);
    const formData = new FormData();
    if (up.current?.files) formData.append("image", up.current?.files[0]);
    else {
      toast("didn't find image");
      return;
    }
    uploadImg(formData, {
      onSuccess: data => {
        const v = [...value];
        v[8] = data.link;
        // toast("upload image success");
        setValue(v);
        _addP(data.link);
      },
    });
  };

  const _addP = (image: string) => {
    addProduct(
      {
        product_name: value[0],
        price: Number.parseInt(value[1]),
        category_name: value[2],
        amount: Number.parseInt(value[3]),
        description: value[4],
        nhasx: value[5],
        ngaysx: new Date(value[6]),
        hsd: new Date(value[7]),
        image,
      },
      {
        onSuccess: data => {
          setProduct(data);
          toast("add success");
          setLoaddingAdd(false);
          setTimeout(() => {
            if (data._id) navigate("/admin/product/" + data._id);
            console.log(data._id);
          }, 3000);
        },
        onError: err => {
          const e = err as { error: { message: string } };
          toast(e.error.message ?? "add fail");
          setLoaddingAdd(false);
        },
        onSettled: (data, err) => {
          const e = err as { error: { message: string[] | string } };
          console.log(err);
          toast(e.error.message[0]);
          setLoaddingAdd(false);
        },
      },
    );
  };

  const _setValue = (product: ProductResponse) => {
    setValue([
      product.product_name,
      product.price.toString(),
      product.category_name,
      product.amount.toString(),
      product.description ?? "",
      product.nhasx,
      product.ngaysx.toDateString(),
      product.hsd.toDateString(),
      product.image ?? "",
    ]);
  };

  return (
    <div className="mb-[88px] mt-10 w-full tablet:mt-0">
      <div>
        <div>
          <div className="mt-10 tablet:mt-[52px]">
            <form
              onSubmit={e => {
                e.preventDefault();
                if (id === "add") _add();
                else update();
              }}
            >
              <div>
                <div>
                  <TextTitle variant="subtitle2" text="Product information" className="text-[18px]" />
                  <div className="mt-[30px]">
                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        {listInput.map((item, index) => (
                          <InputType key={index} data={item} value={value[index]} onChange={change} index={index} />
                        ))}
                      </div>
                      <div className="ml-20 mt-5">
                        <img className="h-[400px] min-w-[300px] max-w-[400px]" src={product?.image} alt="sss" />
                        <input type="file" id="file" name="file" required={id === "add"} ref={up}></input>
                        <button type="button">Upload</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mr-[8%] mt-[52px] flex justify-end">
                <div className="ml-5 w-28">
                  <PrimaryButton
                    className="bg-[#ccc] text-black"
                    buttonType="button"
                    onClick={cancel}
                    text={add ? "Cancel" : "Back"}
                    loading={false}
                  />
                </div>
                {id !== "add" && (
                  <div className="ml-5 w-28">
                    <PrimaryButton
                      className="bg-[#ccc] text-black"
                      text="Delete"
                      buttonType="button"
                      onClick={_delete}
                      loading={false}
                    />
                  </div>
                )}
                {id === "add" ? (
                  <div className="ml-5 w-28">
                    <PrimaryButton text="Add" buttonType="submit" loading={loaddingAdd} />
                  </div>
                ) : (
                  <div className="ml-5 w-28">
                    <PrimaryButton text="Edit" buttonType="submit" loading={false} />
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailAdmin;
