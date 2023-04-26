import { useEffect, useRef, useState } from "react";
import FilterButton from "./components/FilterButton/FilterButton";
import ListItem from "./components/ListItem/ListItem";
import ReactPaginate from "react-paginate";
import { useCreateDiscount, useDiscountM, useDiscounts } from "queries/discountQueries";
import { createdAtOptionBtn, filterOfferBtn } from "../ProductAdmin/data";
import { DiscountResponse } from "apis/discounts/discount.model";
import { Modal, PrimaryButton } from "components";
import { toast } from "react-toastify";

const Discount = () => {
  const { data: discounts } = useDiscounts();
  const { mutate: createDiscount } = useCreateDiscount();
  const { mutate: getDiscount } = useDiscountM();
  const [displayedCategories, setDisplayList] = useState<DiscountResponse[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [loadding, setLoadding] = useState(false);
  const [inte, setInte] = useState(true);
  const pageSize = 5;
  const refRate = useRef<HTMLInputElement>(null);
  const refLimit = useRef<HTMLInputElement>(null);
  const refExpire = useRef<HTMLInputElement>(null);

  const handlePageClick = (pageNumber: { selected: number }) => {
    setCurrentPage(pageNumber.selected + 1);
  };

  useEffect(() => {
    if (inte)
      setInterval(() => {
        console.log("get discount");
        getDiscount(undefined, {
          onSuccess: data => {
            setPageCount(Math.ceil(data.length / pageSize));
            setDisplayList(data.slice((currentPage - 1) * pageSize, currentPage * pageSize));
          },
        });
      }, 30000);
    else setInte(false);
  }, []);

  useEffect(() => {
    if (discounts) {
      setPageCount(Math.ceil(discounts.length / pageSize));
      setDisplayList(discounts.slice((currentPage - 1) * pageSize, currentPage * pageSize));
    }
  }, [discounts]);

  const handleCreate = () => {
    console.log(refRate.current?.value, refExpire.current?.value, refLimit.current?.value);
    if (refRate.current?.value && refExpire.current?.value && refLimit.current?.value) {
      setLoadding(true);
      createDiscount(
        {
          discountRate: Number.parseInt(refRate.current?.value),
          expireAt: new Date(refExpire.current?.value),
          limit: Number.parseInt(refLimit.current?.value),
        },
        {
          onSuccess: () => {
            toast.success("success");
            setIsOpen(false);
            setLoadding(false);
          },
          onError: () => {
            toast.error("fail");
            setIsOpen(false);
            setLoadding(false);
          },
        },
      );
    }
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
        <PrimaryButton text="Add discount" onClick={() => setIsOpen(true)} className="mb-10" />
      </div>
      <div>
        {displayedCategories.map((item, index) => {
          return (
            <div key={index}>
              <ListItem discount={item} />
            </div>
          );
        })}
      </div>
      <ReactPaginate
        pageCount={pageCount}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageClassName={"bg-blue-500 rounded-full py-2 px-4 mx-2 mb-10"}
        activeClassName={"bg-[gray] text-white"}
        containerClassName={"flex justify-center mt-4"}
        previousClassName={"rounded-full py-2 px-4 mx-2"}
        nextClassName={"rounded-full py-2 px-4 mx-2"}
      />
      <Modal isOpen={isOpen} setOpen={setIsOpen}>
        <form
          className="flex flex-col gap-y-5"
          onSubmit={e => {
            e.preventDefault();
            handleCreate();
          }}
        >
          <input type="text" placeholder="discount rate (number)" ref={refRate} required />
          <input type="text" placeholder="limit (number)" ref={refLimit} required />
          <input type="datetime-local" placeholder="discount rate (number)" ref={refExpire} required />
          <PrimaryButton text="Create" loading={loadding} />
        </form>
      </Modal>
    </div>
  );
};

export default Discount;
