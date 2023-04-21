import { useProduct } from "queries/productQueries";
import { useEffect, useState } from "react";
import { ProductResponse } from "../../apis/products/product.model";
import { Link } from "react-router-dom";

export const Product = () => {
  const [listProduct, setListProduct] = useState<ProductResponse[]>([]);
  const { mutate: getProduct } = useProduct();
  const abc = [
    {
      _id: "64400e237178e194b25d6e76",
      category_id: "64400d377178e194b25d6e73",
      product_name: "Sữa rửa mặt Hadalabo dưỡng",
      amount: 1000,
      price: 74000,
      image:
        "https://firebasestorage.googleapis.com/v0/b/btl-ws-n7.appspot.com/o/hadalaboxanh.png?alt=media&token=164c8e07-1c30-41fc-8cce-33f55fcfae1f",
      ngaysx: "2022-12-12T00:00:00.000Z",
      hsd: "2025-05-16T00:00:00.000Z",
      nhasx: "Hadalabo",
      createdAt: "2023-04-19T15:52:03.782Z",
      updatedAt: "2023-04-19T16:00:29.907Z",
      __v: 0,
    },
    {
      _id: "64400f8f6aedd46690c4f260",
      category_id: "64400d377178e194b25d6e73",
      product_name: "Sữa rửa mặt Simple",
      amount: 1000,
      price: 76000,
      image:
        "https://firebasestorage.googleapis.com/v0/b/btl-ws-n7.appspot.com/o/sua-rua-mat-simple-giup-da-sach-thoang-150ml-1.jpg?alt=media&token=c137d094-65d3-4165-bddd-c0af61210469",
      ngaysx: "2022-04-05T00:00:00.000Z",
      hsd: "2024-01-29T00:00:00.000Z",
      nhasx: "Simple",
      createdAt: "2023-04-19T15:58:07.779Z",
      updatedAt: "2023-04-19T15:58:07.779Z",
      __v: 0,
    },
    {
      _id: "64401676aced66a13f577ba6",
      category_id: "64400d377178e194b25d6e73",
      product_name: "Sữa rửa mặt Hadalabo White",
      amount: 737,
      price: 68000,
      image:
        "https://firebasestorage.googleapis.com/v0/b/btl-ws-n7.appspot.com/o/hadalaboTrang.png?alt=media&token=2f1d0bac-2e61-418d-b481-722041e2bb7a",
      ngaysx: "2022-03-09T00:00:00.000Z",
      hsd: "2024-02-27T00:00:00.000Z",
      nhasx: "Hadalabo",
      createdAt: "2023-04-19T16:27:34.728Z",
      updatedAt: "2023-04-19T16:27:34.728Z",
      __v: 0,
    },
    {
      _id: "64401757aced66a13f577ba9",
      category_id: "64400d377178e194b25d6e73",
      product_name: "Sữa rửa mặt Hadalabo Red",
      amount: 737,
      price: 57000,
      image:
        "https://firebasestorage.googleapis.com/v0/b/btl-ws-n7.appspot.com/o/hadalaboRed.jpg?alt=media&token=68fd98c3-3c64-453d-82bd-129b47c8cc88",
      ngaysx: "2023-02-01T00:00:00.000Z",
      hsd: "2025-12-20T00:00:00.000Z",
      nhasx: "Hadalabo",
      createdAt: "2023-04-19T16:31:19.121Z",
      updatedAt: "2023-04-19T16:31:19.121Z",
      __v: 0,
    },
    {
      _id: "6440191baced66a13f577bac",
      category_id: "64400d377178e194b25d6e73",
      product_name: "Sữa rửa mặt Cetaphil 500ml",
      amount: 500,
      price: 269000,
      image:
        "https://firebasestorage.googleapis.com/v0/b/btl-ws-n7.appspot.com/o/cetaphil500.jpg?alt=media&token=6a4b335f-92ec-4555-a942-7b522d20a98c",
      ngaysx: "2023-03-25T00:00:00.000Z",
      hsd: "2025-12-28T00:00:00.000Z",
      nhasx: "Cetaphil",
      createdAt: "2023-04-19T16:38:51.250Z",
      updatedAt: "2023-04-19T16:38:51.250Z",
      __v: 0,
    },
    {
      _id: "644019eaaced66a13f577baf",
      category_id: "64400d377178e194b25d6e73",
      product_name: "Sữa rửa mặt Oxy Deep Wash",
      amount: 500,
      price: 80000,
      description:
        " sữa rửa mặt Oxy Deep Wash có thành phần chính được làm từ nguyên liệu than tre với cấu trúc tổ ong siêu xốp giúp hấp thu dầu thừa và bụi bẩn sâu tận lỗ chân lông, giúp nam giới kiểm soát nhờn, dầu trong thời gian dài suốt cả ngày. Than vỏ trấu với công nghệ Triporous độc quyền tối ưu hóa khả năng làm sạch nhờ cơ chế hấp thu đa dạng các tạp chất. Ngoài ra, sản phẩm còn được bổ sung thêm vitamin B3 cùng chiết xuát tảo biển giúp tăng cường độ ẩm cho làn da nam giới tút da lại sáng mịn hơn.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/btl-ws-n7.appspot.com/o/oxyden.jpg?alt=media&token=405454d7-9395-4741-b687-514b97755d5b",
      ngaysx: "2023-01-25T00:00:00.000Z",
      hsd: "2025-08-09T00:00:00.000Z",
      nhasx: "Oxy",
      createdAt: "2023-04-19T16:42:18.793Z",
      updatedAt: "2023-04-19T16:42:18.793Z",
      __v: 0,
    },
  ];
  useEffect(() => {
    getProduct(
      {},
      {
        onSuccess: data => {
          data.push(...data);
          console.log(data);
          setListProduct(data);
        },
      },
    );
    // setListProduct(abc);
  }, []);

  const handleSreach = (key: string) => {
    getProduct(
      { product_name: key },
      {
        onSuccess: data => {
          setListProduct(data);
        },
      },
    );
  };

  return (
    <div>
      <div className="mt-32">
        <div className="dark:bg-gray-900 bg-white pb-4">
          <label className="sr-only">Search</label>
          <div className="relative mt-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="text-gray-500 dark:text-gray-400 h-5 w-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <form
              onSubmit={e => {
                e.preventDefault();
                handleSreach((e.currentTarget.firstChild as HTMLInputElement).value);
              }}
            >
              <input
                type="text"
                id="table-search"
                className="text-gray-900 border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border p-2 pl-10 text-sm dark:text-white"
                placeholder="Search for items"
              />
            </form>
          </div>
        </div>
        <div className="flex flex-wrap">
          {listProduct.map((item, index) => (
            <div className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md" key={index}>
              <Link to={item._id}>
                <img className="h-60 rounded-t-lg object-cover" src={item.image ?? ""} />
              </Link>
              <div className="mt-4 px-5 pb-5">
                <Link to="#">
                  <h5 className="text-slate-900 text-xl font-semibold tracking-tight">{item.product_name}</h5>
                </Link>
                <div className="mb-5 mt-2.5 flex items-center">
                  <span className="mr-2 rounded bg-[#fde047] px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-[#fde047]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-[#fde047]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-[#fde047]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-[#fde047]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-[#fde047]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <p>
                    <span className="text-slate-900 text-2xl font-bold">{`$` + item.price}</span>
                  </p>
                  <Link
                    to={item._id}
                    className="focus:ring-blue-300 flex items-center rounded-md bg-[#000] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[gray] focus:outline-none focus:ring-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Add to cart
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
