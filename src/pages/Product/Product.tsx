import { useProduct } from "queries/productQueries";
import { useEffect, useState } from "react";
import { ProductResponse } from "../../apis/products/product.model";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useAddToCart } from "queries/cartQueries";
import { toast } from "react-toastify";

export const Product = () => {
  const { mutate: getProduct } = useProduct();
  const [listProduct, setListProduct] = useState<ProductResponse[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { mutate: addCart } = useAddToCart();
  const pageSize = 6;

  const addToCart = (id: string) => {
    addCart(
      { p_id: id, quantity: 1 },
      {
        onSuccess: () => {
          toast("product has been added to cart");
        },
        onError: () => toast("fail"),
      },
    );
  };
  const pageCount = Math.ceil(listProduct.length / pageSize); // tính số trang cần phân trang
  const handlePageClick = (pageNumber: { selected: number }) => {
    setCurrentPage(pageNumber.selected + 1);
  };

  const displayedProducts = listProduct.slice((currentPage - 1) * pageSize, currentPage * pageSize); // lấy các sản phẩm tương ứng với trang hiện tại
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
          <label htmlFor="s" className="sr-only">
            Search
          </label>
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
            <input
              type="text"
              id="table-search"
              className="text-gray-900 border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border p-2 pl-10 text-sm dark:text-white"
              placeholder="Search for items"
              onChange={e => handleSreach(e.target.value)}
            />
          </div>
        </div>
        <div className="absolute left-10">
          <div className="mb-4 text-[40px]">Price</div>

          <ul className="text-gray-900 dark:bg-gray-700 dark:border-gray-600 w-72 rounded-lg bg-white text-[18px] font-medium dark:text-white">
            <li className="border-inherit dark:border-gray-600 w-full rounded-t-lg border-b pb-3">
              <div className="flex items-center pl-3">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  value=""
                  className="text-blue-600 bg-gray-100 focus:ring-blue-500 dark:focus:ring-blue-600  dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500 h-4 w-4 rounded focus:ring-2"
                />
                <label
                  htmlFor="s"
                  className="text-gray-900 dark:text-gray-300 ml-2 w-full py-3 text-[18px] font-medium"
                >
                  1000$-2000$
                </label>
              </div>
            </li>
            <li className="border-inherit dark:border-gray-600 w-full rounded-t-lg border-b pb-3">
              <div className="flex items-center pl-3">
                <input
                  id="react-checkbox"
                  type="checkbox"
                  value=""
                  className="text-blue-600 bg-gray-100 focus:ring-blue-500 dark:focus:ring-blue-600  dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500 h-4 w-4 rounded focus:ring-2"
                />
                <label
                  htmlFor="s"
                  className="text-gray-900 dark:text-gray-300 ml-2 w-full py-3 text-[18px] font-medium"
                >
                  2000$-3000$
                </label>
              </div>
            </li>
            <li className="border-inherit dark:border-gray-600 w-full rounded-t-lg border-b pb-3">
              <div className="flex items-center pl-3">
                <input
                  id="angular-checkbox"
                  type="checkbox"
                  value=""
                  className="text-blue-600 bg-gray-100 focus:ring-blue-500 dark:focus:ring-blue-600  dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500 h-4 w-4 rounded focus:ring-2"
                />
                <label
                  htmlFor="s"
                  className="text-gray-900 dark:text-gray-300 ml-2 w-full py-3 text-[18px] font-medium"
                >
                  4000$-5000$
                </label>
              </div>
            </li>
            <li className="border-inherit dark:border-gray-600 w-full rounded-t-lg border-b pb-3">
              <div className="flex items-center pl-3">
                <input
                  id="laravel-checkbox"
                  type="checkbox"
                  value=""
                  className="text-blue-600 bg-gray-100 focus:ring-blue-500 dark:focus:ring-blue-600  dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500 h-4 w-4 rounded focus:ring-2"
                />
                <label
                  htmlFor="s"
                  className="text-gray-900 dark:text-gray-300 ml-2 w-full py-3 text-[18px] font-medium"
                >
                  6000$-7000$
                </label>
              </div>
            </li>
            <li className="border-inherit dark:border-gray-600 w-full rounded-t-lg border-b pb-3">
              <div className="flex items-center pl-3">
                <input
                  id="laravel-checkbox"
                  type="checkbox"
                  value=""
                  className="text-blue-600 bg-gray-100 focus:ring-blue-500 dark:focus:ring-blue-600  dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500 h-4 w-4 rounded focus:ring-2"
                />
                <label htmlFor="s" className="text-md text-gray-900 dark:text-gray-300 ml-2 w-full py-3 font-medium">
                  6000$-7000$
                </label>
              </div>
            </li>
            <li className="border-inherit dark:border-gray-600 w-full rounded-t-lg border-b pb-3">
              <div className="flex items-center pl-3">
                <input
                  id="laravel-checkbox"
                  type="checkbox"
                  value=""
                  className="text-blue-600 bg-gray-100 focus:ring-blue-500 dark:focus:ring-blue-600  dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500 h-4 w-4 rounded focus:ring-2"
                />
                <label htmlFor="s" className="text-md text-gray-900 dark:text-gray-300 ml-2 w-full py-3 font-medium">
                  6000$-7000$
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap">
          {displayedProducts.map((item, index) => (
            <div className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md" key={index}>
              <Link to={item._id}>
                <img className="h-60 rounded-t-lg object-cover" src={item.image} alt="" />
              </Link>
              <div className="mt-4 px-5 pb-5">
                <Link to="#">
                  <h5 className="text-slate-900 hitespace-nowrap overflow-hidden text-ellipsis whitespace-nowrap text-xl font-semibold tracking-tight">
                    {item.product_name}
                  </h5>
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
                  <div
                    className="focus:ring-blue-300 flex items-center rounded-md bg-[#000] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[gray] focus:outline-none focus:ring-4"
                    onClick={() => addToCart(item._id)}
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
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageClassName={"bg-blue-500 rounded-full py-2 px-4 mx-2 mb-10"}
        previousClassName={"rounded-full py-2 px-4 mx-2"}
        nextClassName={"rounded-full py-2 px-4 mx-2"}
      />
    </div>
  );
};
