import ListItem from "./components/ListItem/ListItem";
import FilterButton from "./components/FilterButton/FilterButton";
import { createdAtOptionBtn, filterOfferBtn } from "./data";
import { useState, useEffect } from "react";
import { PrimaryButton } from "components";
import { useNavigate } from "react-router";
import ReactPaginate from "react-paginate";
import { CategoryResponse } from "apis/categories/category.model";
import { useCategories } from "queries/categoryQueries";

function Category() {
  const [listCategory, setListCategory] = useState<CategoryResponse[]>([...Array<CategoryResponse>(5)]);
  const navigate = useNavigate();
  const { data: categories } = useCategories();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const pageCount = Math.ceil(listCategory.length / pageSize); // tính số trang cần phân trang
  const handlePageClick = (pageNumber: { selected: number }) => {
    setCurrentPage(pageNumber.selected + 1);
  };

  const displayedCategories = listCategory.slice((currentPage - 1) * pageSize, currentPage * pageSize); // lấy các sản phẩm tương ứng với trang hiện tại

  useEffect(() => {
    if (categories) setListCategory(categories);
  }, [categories]);

  const handleFilterOfferByStatus = (type?: string) => {
    type = type?.toLocaleLowerCase();
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
        {displayedCategories.map((item, index) => {
          return (
            <div key={index}>
              <ListItem category={item} />
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
      <PrimaryButton text="Add categpry" onClick={() => navigate("add")} className="mb-16" />
    </div>
  );
}

export default Category;
