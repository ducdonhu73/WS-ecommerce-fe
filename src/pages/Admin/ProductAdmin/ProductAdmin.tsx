import ListItem from "./components/ListItem/ListItem";
import FilterButton from "./components/FilterButton/FilterButton";
import { createdAtOptionBtn } from "./data";
import { useState, useEffect } from "react";
import { useProduct } from "queries/productQueries";
import { ProductResponse } from "apis/products/product.model";
import { PrimaryButton } from "components";
import { useNavigate } from "react-router";
import ReactPaginate from "react-paginate";
import { useCategories } from "queries/categoryQueries";

function ProductAdmin() {
  const [listProduct, setListProduct] = useState<ProductResponse[]>([]);
  const [displayedProducts, setDisplayList] = useState<ProductResponse[]>([]);
  const navigate = useNavigate();
  const { mutate: getProduct } = useProduct();
  const { data: categories } = useCategories();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
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

  const pageCount = Math.ceil(listProduct.length / pageSize); // tính số trang cần phân trang
  const handlePageClick = (pageNumber: { selected: number }) => {
    setCurrentPage(pageNumber.selected + 1);
  };

  useEffect(() => {
    if (listProduct) setDisplayList(listProduct.slice((currentPage - 1) * pageSize, currentPage * pageSize));
  }, [listProduct]);

  useEffect(() => {
    getProduct(
      {},
      {
        onSuccess: data => setListProduct(data),
      },
    );
  }, []);

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

  return (
    <div>
      <div className="">
        <div className="mb-10 mt-8 flex items-center justify-end tablet:my-10 ">
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
      {/* list offer */}
      <div>
        {displayedProducts.map((item, index) => {
          return (
            <div key={index}>
              <ListItem product={item} />
            </div>
          );
        })}
        <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          onPageChange={handlePageClick}
          // containerClassName={'pagination'}
          // activeClassName={'active'}
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageClassName={"bg-blue-500 rounded-full py-2 px-4 mx-2 mb-10"}
          activeClassName={"bg-[gray] text-white"}
          containerClassName={"flex justify-center mt-4"}
          previousClassName={"rounded-full py-2 px-4 mx-2"}
          nextClassName={"rounded-full py-2 px-4 mx-2"}
        />
      </div>
      <PrimaryButton text="Add product" onClick={() => navigate("add")} className="mb-16" />
    </div>
  );
}

export default ProductAdmin;
