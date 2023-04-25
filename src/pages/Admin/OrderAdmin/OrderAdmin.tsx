import { useOrder } from "queries/orderQueries";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import FilterButton from "./components/FilterButton/FilterButton";
import { createdAtOptionBtn, filterOfferBtn } from "./data";
import { OrderResponse } from "apis/orders/order.model";
import ListItem from "./components/ListItem/ListItem";
import ReactPaginate from "react-paginate";

const OrderAdmin = () => {
  const { mutate: getOrders } = useOrder();
  const [displayedOrder, setListDisplay] = useState<OrderResponse[]>([]);
  const [list, setList] = useState<OrderResponse[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const pageCount = Math.ceil(displayedOrder.length / pageSize); // tính số trang cần phân trang
  const handlePageClick = (pageNumber: { selected: number }) => {
    setCurrentPage(pageNumber.selected + 1);
  };

  useEffect(() => {
    getOrders(undefined, {
      onSuccess: data => {
        setList(data);
        setListDisplay(data.slice((currentPage - 1) * pageSize, currentPage * pageSize));
      },
      onError: () => toast("fail"),
    });
  }, []);

  const callback = (o: OrderResponse) => {
    setList(pre => pre.filter(p => p._id !== o._id));
    setListDisplay(list.filter(p => p._id !== o._id).slice((currentPage - 1) * pageSize, currentPage * pageSize));
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
            />
          </div>
          <div className="ml-2.5">
            <FilterButton
              title={createdAtOptionBtn.title}
              filterType={createdAtOptionBtn.filterType}
              menu={createdAtOptionBtn.menu}
              className={createdAtOptionBtn.className}
            />
          </div>
        </div>
      </div>
      {/* list offer */}
      <div>
        {displayedOrder.map((item, index) => {
          return (
            <div key={index}>
              <ListItem order={item} callback={callback} />
            </div>
          );
        })}
      </div>
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
  );
};

export default OrderAdmin;
