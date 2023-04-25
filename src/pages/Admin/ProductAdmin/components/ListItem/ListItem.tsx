import { ProductResponse } from "apis/products/product.model";
import { DateFormat } from "constants/dateFormat";
import format from "date-fns/format";
import { useDeleteProduct } from "queries/productQueries";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

interface ItemProps {
  product: ProductResponse;
}

function ListItem({ product }: ItemProps) {
  const navigate = useNavigate();
  const [display, setDisplay] = useState(true);
  const { mutate: deleteProduct } = useDeleteProduct();
  const _delete = (id: string) => {
    deleteProduct(
      { productId: id },
      {
        onSuccess: () => {
          toast("success");
          setDisplay(false);
        },
        onError: err => {
          const e = err as { error: { message: string } };
          toast(e.error.message);
        },
      },
    );
  };
  return (
    <div>
      {display && (
        <div
          style={{
            boxShadow:
              "0px 15.375px 18.0882px rgba(0, 0, 0, 0.0456112), 0px 2.30969px 2.71728px rgba(0, 0, 0, 0.0243888)",
          }}
          className="mb-5 flex cursor-pointer flex-col justify-between rounded-lg border-0 p-[22px] laptop:grid laptop:grid-cols-3 laptop:flex-row laptop:border-2 laptop:border-text-2 laptop:px-10 laptop:py-[22px]"
        >
          <div className="">
            <img className="h-[100px] max-w-[150px]" src={product?.image} alt="sss" />
          </div>
          <div className="flex flex-col items-start gap-y-1">
            <p className="text-base font-medium text-text-8 laptop:text-lg laptop:leading-6 ">
              {product?.product_name}
            </p>
            <span className="block text-[14px] leading-7">Category: {product?.category_name}</span>
            <span className="block text-[14px] leading-7">Amount: {product?.amount}</span>
            <span className="block text-[16px] font-semibold leading-7">{product?.price}đ</span>
          </div>
          <div className="ml-0 mt-3 flex flex-col justify-between laptop:ml-2 laptop:mt-0 laptop:items-end">
            <div className="flex justify-between laptop:justify-start">
              <p className="mr-2 text-base font-normal leading-6 text-text-6">Valid until</p>
              <p className="text-base font-bold text-text-8">
                {status === "expired"
                  ? "Expired"
                  : format(new Date(product?.createdAt ?? "2022"), DateFormat.DATE_WITH_TEXT_MONTH)}
              </p>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-2xl font-semibold laptop:hidden laptop:leading-7">{product?.price}đ</span>
              <div
                className="mr-5 font-medium leading-6 text-[var(--color-primary)] laptop:text-base"
                onClick={() => _delete(product._id)}
              >
                Delete
              </div>
              <div
                className="font-medium leading-6 text-[var(--color-primary)] laptop:text-base"
                onClick={() => navigate(product._id)}
              >
                Edit
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListItem;
