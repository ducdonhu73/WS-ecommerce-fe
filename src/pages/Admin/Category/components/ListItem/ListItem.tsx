import { CategoryResponse } from "apis/categories/category.model";
import { DateFormat } from "constants/dateFormat";
import format from "date-fns/format";
import { useDeleteCategory } from "queries/categoryQueries";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

interface ItemProps {
  category: CategoryResponse;
}

function ListItem({ category }: ItemProps) {
  const navigate = useNavigate();
  const [display, setDisplay] = useState(true);
  const { mutate: deleteProduct } = useDeleteCategory();
  const _delete = (id: string) => {
    deleteProduct(
      { id },
      {
        onSuccess: () => {
          toast.success("success");
          setDisplay(false);
        },
        onError: err => {
          const e = err as { error: { message: string } };
          toast.error(e.error.message);
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
            <img className="h-[100px] max-w-[150px]" src={category?.image} alt="sss" />
          </div>
          <div className="flex items-center laptop:flex-col laptop:items-start laptop:gap-y-2">
            <span className="hidden font-semibold laptop:block laptop:text-2xl laptop:leading-7">
              {category?.category_name}
            </span>
          </div>
          <div className="ml-0 mt-3 flex flex-col justify-between laptop:ml-2 laptop:mt-0 laptop:items-end">
            <div className="flex justify-between laptop:justify-start">
              <p className="mr-2 text-base font-normal leading-6 text-text-6">Created at</p>
              <p className="text-base font-bold text-text-8">
                {status === "expired"
                  ? "Expired"
                  : format(new Date(category?.createdAt ?? "2022"), DateFormat.DATE_WITH_TEXT_MONTH)}
              </p>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div
                className="mr-5 font-medium leading-6 text-[var(--color-primary)] laptop:text-base"
                onClick={() => _delete(category.id)}
              >
                Delete
              </div>
              <div
                className="font-medium leading-6 text-[var(--color-primary)] laptop:text-base"
                onClick={() => navigate(category.id)}
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
