import { OrderResponse } from "apis/orders/order.model";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import FilterButton from "./components/FilterButton/FilterButton";
import { createdAtOptionBtn, filterOfferBtn } from "../OrderAdmin/data";
import ListItem from "./components/ListItem/ListItem";
import { useStatistic } from "queries/statisticQueries";
import ReactPaginate from "react-paginate";
import { PrimaryButton, TextTitle } from "components";

const HistoryAdmin = () => {
  const { mutate: getOrders } = useStatistic();
  const [listOrder, setListOrder] = useState<OrderResponse[]>([]);
  const [displayedCategories, setDisplayList] = useState<OrderResponse[]>([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const refsd = useRef<HTMLInputElement>(null);
  const refed = useRef<HTMLInputElement>(null);
  const refmax = useRef<HTMLInputElement>(null);
  const refmin = useRef<HTMLInputElement>(null);
  const handleDate = () => {
    // const filter = {};
    // if (refsd.current?.value && refed.current?.value)
    getOrders(
      {
        startDate: refsd.current?.value ? new Date(refsd.current?.value) : undefined,
        endDate: refed.current?.value ? new Date(refed.current?.value) : undefined,
        maxPrice: refmax.current?.value ? Number.parseInt(refmax.current?.value) : undefined,
        minPrice: refmin.current?.value ? Number.parseInt(refmin.current?.value) : undefined,
      },
      {
        onSuccess: data => setListOrder(data),
      },
    );
  };

  const pageCount = Math.ceil(listOrder.length / pageSize); // tính số trang cần phân trang
  const handlePageClick = (pageNumber: { selected: number }) => {
    setCurrentPage(pageNumber.selected + 1);
  };

  // useEffect(() => {
  //   setTotal(displayedCategories.reduce((total, item) => total + item.total, 0));
  // }, [displayedCategories]);

  useEffect(() => {
    setDisplayList(listOrder.slice((currentPage - 1) * pageSize, currentPage * pageSize));
    setTotal(listOrder.reduce((total, item) => total + item.total, 0));
  }, [listOrder, currentPage]);

  useEffect(() => {
    getOrders(
      {},
      {
        onSuccess: data => {
          setListOrder(data);
        },
        onError: () => toast.error("something went wrong"),
      },
    );
  }, []);

  const callbackU = (userId: string) => {
    getOrders(
      { userId },
      {
        onSuccess: data => {
          setListOrder(data);
        },
        onError: () => toast.error("something went wrong"),
      },
    );
  };

  const callbackP = (productId: string) => {
    getOrders(
      { productId },
      {
        onSuccess: data => {
          setListOrder(data);
        },
        onError: () => toast.error("something went wrong"),
      },
    );
  };

  const handleFilter = (t?: string) => {
    if (t === "All") {
      getOrders(
        {},
        {
          onSuccess: data => {
            setListOrder(data);
          },
          onError: () => toast.error("something went wrong"),
        },
      );
    }
  };

  return (
    <div>
      <div className="">
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
        <div className="mb-10 mt-8 flex items-center justify-end tablet:my-10 ">
          <div>
            <FilterButton
              title={filterOfferBtn.title}
              filterType={filterOfferBtn.filterType}
              menu={filterOfferBtn.menu}
              className={filterOfferBtn.className}
              onClick={handleFilter}
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
        {displayedCategories.map((item, index) => {
          return (
            <div key={index}>
              <ListItem order={item} callbackP={callbackP} callbackU={callbackU} />
            </div>
          );
        })}
      </div>
      <TextTitle text={"Total : " + total + "đ"} variant="subtitle2" />
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

export default HistoryAdmin;
