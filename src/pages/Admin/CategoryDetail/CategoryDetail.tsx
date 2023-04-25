import { useUpdateLoad } from "queries/productQueries";
import { useNavigate, useParams } from "react-router";
import { BaseSyntheticEvent, useEffect, useRef, useState } from "react";
import { InputType, PrimaryButton, TextTitle } from "components";
import { InputTypeModel } from "models";
import { toast } from "react-toastify";
import { useAddCategory, useCategoryId, useDeleteCategory, useUpdateCategory } from "queries/categoryQueries";
import { CategoryResponse } from "apis/categories/category.model";

const listInput: InputTypeModel[] = [
  { type: "inputText", label: "name", typeInput: "text" },
  // { type: "inputText", label: "price", typeInput: "text" },
  // { type: "inputText", label: "category", typeInput: "text" },
  // { type: "inputText", label: "amount", typeInput: "text" },
  { type: "inputText", label: "description", typeInput: "text" },
  // { type: "inputText", label: "provider", typeInput: "text" },
  // { type: "inputText", label: "date of manufacture", typeInput: "text" },
];

const CategoryDetail = () => {
  const { id } = useParams();
  const { mutate: getCategory } = useCategoryId();
  const { mutate: updateCategory } = useUpdateCategory();
  const { mutate: deleteCategory } = useDeleteCategory();
  const { mutate: addCategory } = useAddCategory();
  const { mutate: uploadImg } = useUpdateLoad();
  const up = useRef<HTMLInputElement>(null);
  const [category, setCategory] = useState<CategoryResponse>();
  const [add, setAdd] = useState(false);
  const [loaddingAdd, setLoaddingAdd] = useState(false);
  const [value, setValue] = useState<string[]>([...Array<string>(3)]);
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      getCategory(
        { id },
        {
          onSuccess: data => {
            setCategory(data);
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
    updateCategory(
      {
        body: {
          category_name: value[0],
          description: value[1],
          image: value[2],
        },
        id: id as string,
      },
      {
        onSuccess: data => {
          toast.success("update success");
          setCategory(data);
        },
        onError: err => {
          const e = err as { error: { message: string } };
          toast.error(e.error.message);
        },
      },
    );
  };

  const _delete = () => {
    deleteCategory(
      { id: id as string },
      {
        onSuccess: () => {
          toast.error("delete success");
          navigate("/admin/category");
        },
        onError: err => {
          const e = err as { error: { message: string } };
          toast.error(e.error.message);
        },
      },
    );
  };

  const cancel = () => {
    if (id === "add" || add === false) navigate("/admin/category");
    setAdd(false);
    if (category) _setValue(category);
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
        v[3] = data.link;
        // toast("upload image success");
        setValue(v);
        _addP(data.link);
      },
    });
  };

  const _addP = (image: string) => {
    addCategory(
      {
        category_name: value[0],
        description: value[1],
        image: image,
      },
      {
        onSuccess: () => {
          toast("add success");
          setLoaddingAdd(false);
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

  const _setValue = (category: CategoryResponse) => {
    setValue([category.category_name, category.description as string, category.image as string]);
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
                  <TextTitle variant="subtitle2" text="Category information" className="text-[18px]" />
                  <div className="mt-[30px]">
                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        {listInput.map((item, index) => (
                          <InputType key={index} data={item} value={value[index]} onChange={change} index={index} />
                        ))}
                      </div>
                      <div className="ml-20 mt-5">
                        <img
                          className="h-[400px] min-w-[300px] max-w-[400px]"
                          src={category?.image ?? value[3]}
                          alt="category"
                        />
                        <input type="file" id="file" name="file" required={id === "add"} ref={up}></input>
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

export default CategoryDetail;
