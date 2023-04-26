import { useProduct } from "queries/productQueries";
import { useEffect, useRef, useState } from "react";
import { ProductResponse } from "../../apis/products/product.model";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useAddToCart } from "queries/cartQueries";
import { toast } from "react-toastify";
import FilterButton from "pages/Admin/ProductAdmin/components/FilterButton/FilterButton";
import { useCategories } from "queries/categoryQueries";
import { createdAtOptionBtn } from "pages/Admin/ProductAdmin/data";
import { PrimaryButton } from "components";

export const Product = () => {
  const { mutate: getProduct } = useProduct();
  const { data: categories } = useCategories();
  const [listProduct, setListProduct] = useState<ProductResponse[]>([]);
  const [displayedProducts, setListDisplay] = useState<ProductResponse[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { mutate: addCart } = useAddToCart();
  const pageSize = 6;
  const ref = useRef<HTMLInputElement>(null);
  const refsd = useRef<HTMLInputElement>(null);
  const refed = useRef<HTMLInputElement>(null);
  const refmax = useRef<HTMLInputElement>(null);
  const refmin = useRef<HTMLInputElement>(null);

  const [filterOfferBtn, setFilter] = useState({
    title: "Category",
    filterType: "category",
    menu: [{ title: "All", id: "" }],
    className: "left-[-28px] w-[114px]",
  });

  useEffect(() => {
    if (categories)
      setFilter({
        title: "Category",
        filterType: "category",
        menu: categories.map(c => {
          return { title: c.category_name, id: c.id };
        }),
        className: "left-[-28px] w-[114px]",
      });
  }, [categories]);

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

  useEffect(() => {
    setListDisplay(listProduct.slice((currentPage - 1) * pageSize, currentPage * pageSize));
  }, [listProduct]);

  useEffect(() => {
    getProduct(
      {},
      {
        onSuccess: data => {
          setListProduct(data);
        },
      },
    );
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

  const handleFilterOfferByStatus = (id?: string) => {
    getProduct(
      { category: id },
      {
        onSuccess: data => setListProduct(data),
      },
    );
  };

  const handleFilterOfferByTime = () => {
    console.log("");
  };

  const handleDate = () => {
    // const filter = {};
    // if (refsd.current?.value && refed.current?.value)
    getProduct(
      {
        startDate: refsd.current?.value ? new Date(refsd.current?.value) : undefined,
        endDate: refed.current?.value ? new Date(refed.current?.value) : undefined,
        maxPrice: refmax.current?.value ? Number.parseInt(refmax.current?.value) : undefined,
        minPrice: refmin.current?.value ? Number.parseInt(refmin.current?.value) : undefined,
      },
      {
        onSuccess: data => setListProduct(data),
      },
    );
  };

  return (
    <div>
      <div className="mt-32">
        <div className="dark:bg-gray-900 bg-white pb-4">
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
                if (ref.current?.value) handleSreach(ref.current?.value);
              }}
            >
              <input
                type="text"
                id="table-search"
                className="border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-80 rounded-lg border p-2 pl-10 text-sm text-black"
                placeholder="Search for items"
                onChange={e => handleSreach(e.target.value)}
                ref={ref}
              />
            </form>
          </div>
          <div className="">
            <div className="mb-10 mt-8 flex items-center justify-end tablet:my-10 ">
              <form
                className="mr-5 grid grid-cols-9 gap-5"
                onSubmit={e => {
                  e.preventDefault();
                  handleDate();
                }}
              >
                <input ref={refsd} type="datetime-local" placeholder="start date" className="col-span-2 rounded" />
                <input ref={refed} type="datetime-local" placeholder="end date" className="col-span-2 rounded" />
                <input ref={refmin} type="text" placeholder="min price" className="col-span-2 rounded" />
                <input ref={refmax} type="text" placeholder="max price" className="col-span-2 rounded" />
                <PrimaryButton text="Filter"></PrimaryButton>
              </form>
              <div>
                <FilterButton
                  title={filterOfferBtn.title}
                  filterType={filterOfferBtn.filterType}
                  menu={filterOfferBtn.menu}
                  className={filterOfferBtn.className}
                  onClick={handleFilterOfferByStatus}
                />
              </div>
              <div className="ml-2.5">
                <FilterButton
                  title={createdAtOptionBtn.title}
                  filterType={createdAtOptionBtn.filterType}
                  menu={createdAtOptionBtn.menu}
                  className={createdAtOptionBtn.className}
                  onClick={handleFilterOfferByTime}
                />
              </div>
            </div>
          </div>
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
                    <span className="text-slate-900 text-2xl font-bold">{item.price}đ</span>
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
        // containerClassName={"pagination"}
        // activeClassName={"active"}
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageClassName={"bg-blue-500 rounded-full py-2 px-4 mx-2 mb-10"}
        activeClassName={"bg-[gray] text-white"}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        containerClassName={"flex justify-center mt-4"}
        previousClassName={"rounded-full py-2 px-4 mx-2"}
        nextClassName={"rounded-full py-2 px-4 mx-2"}
      />
    </div>
  );
};
