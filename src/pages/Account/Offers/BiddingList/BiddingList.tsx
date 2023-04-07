import PaginationComp from "../../components/Pagination";
import Header from "../../components/HeaderOffer";
import FilterButton from "../components/FilterButton";
import { createdAtOptionBtn, filterOptionBtn } from "../data";

const bidList = [
  {
    name: "2022 BMW X3 xDrive30i",
    price: "$43.000",
    referenceNumber: "P-KWA78BCG",
    validUntil: "June 10",
    status: "Processing",
  },
  {
    name: "2022 BMW X3 xDrive30i",
    price: "$43.000",
    referenceNumber: "P-KWA78BCG",
    validUntil: "Expired",
    status: "Sold",
  },
  {
    name: "2022 BMW X3 xDrive30i",
    price: "$43.000",
    referenceNumber: "P-KWA78BCG",
    validUntil: "June 10",
    status: "Processing",
  },
  {
    name: "2022 BMW X3 xDrive30i",
    price: "$43.000",
    referenceNumber: "P-KWA78BCG",
    validUntil: "June 10",
    status: "Bidding",
  },
  {
    name: "2022 BMW X3 xDrive30i",
    price: "$43.000",
    referenceNumber: "P-KWA78BCG",
    validUntil: "June 10",
    status: "Processing",
  },
];

function BidList() {
  return (
    <div>
      <div>
        <div className="mt-8 mb-10 flex items-center justify-end tablet:my-10 ">
          <div>
            <FilterButton
              title={filterOptionBtn.title}
              filterType={filterOptionBtn.filterType}
              menu={filterOptionBtn.menu}
              className={filterOptionBtn.className}
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
        {bidList.map((item, index) => (
          <div
            key={index}
            className="mb-5 flex cursor-pointer flex-col justify-between rounded-lg border-2 border-[var(--color-text-02)] p-[22px] tablet:flex-row tablet:px-10 tablet:py-[22px]"
          >
            <div className="flex gap-x-[46px] tablet:grid tablet:grid-cols-1 tablet:gap-y-6">
              <p className="text-base font-medium text-[var(--color-text-08)] tablet:text-lg tablet:leading-6 ">
                {item.name}
              </p>
              <span className="hidden font-semibold tablet:block tablet:text-2xl tablet:leading-7">{item.price}</span>
            </div>
            <div className="mt-3 flex justify-between tablet:grid tablet:grid-cols-1 tablet:gap-y-6">
              <p className="text-base font-normal leading-6 text-[var(--color-text-08)] ">Reference Number</p>
              <span className="text-base font-normal leading-6 text-[var(--color-text-06)]">
                {item.referenceNumber}
              </span>
            </div>
            <div className="mt-3 grid grid-cols-1 gap-x-[46px] tablet:gap-y-6">
              <div className="flex justify-between">
                <p className="mr-2 text-base font-normal leading-6 text-[var(--color-text-06)]">Valid until</p>
                <p className="text-base font-bold text-[var(--color-text-08)]">{item.validUntil}</p>
              </div>
              <div className="mt-3 flex justify-between tablet:block">
                <span className="text-2xl font-semibold tablet:hidden tablet:leading-7">{item.price}</span>
                <p
                  className={`text-base font-medium leading-6 ${
                    item.status === "Bidding" && "text-[var(--color-primary)]"
                  } ${item.status === "Sold" && "text-[#3AC922]"} ${
                    item.status === "Processing" && "text-[var(--color-secondary-03)]"
                  } `}
                >
                  {item.status}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="my-20 flex justify-center">
        <PaginationComp />
      </div>
    </div>
  );
}

export default BidList;
