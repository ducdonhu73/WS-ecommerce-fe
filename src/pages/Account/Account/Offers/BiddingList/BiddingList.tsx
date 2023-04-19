import ListItem from "pages/Account/Offers/components/ListItem";
import { useNavigate } from "react-router";

import PaginationComp from "../../components/Pagination";
import FilterButton from "../components/FilterButton";
import { createdAtOptionBtn, filterBiddingBtn } from "../data";

const bidList = [
  {
    name: "2022 BMW X3 xDrive30i 000000",
    price: "$43.000",
    referenceNumber: "P-KWA78BCG",
    expirationDate: new Date(),
    status: "Processing",
  },
  {
    name: "2022 BMW X3 xDrive30i",
    price: "$43.000",
    referenceNumber: "P-KWA78BCG",
    expirationDate: new Date(),
    status: "Sold",
  },
  {
    name: "2022 BMW X3 xDrive30i",
    price: "$43.000",
    referenceNumber: "P-KWA78BCG",
    expirationDate: new Date(),
    status: "Processing",
  },
  {
    name: "2022 BMW X3 xDrive30i",
    price: "$43.000",
    referenceNumber: "P-KWA78BCG",
    expirationDate: new Date(),
    status: "Bidding",
  },
  {
    name: "2022 BMW X3 xDrive30i",
    price: "$43.000",
    referenceNumber: "P-KWA78BCG",
    expirationDate: new Date(),
    status: "Processing",
  },
];

function BiddingList() {
  const navigate = useNavigate();

  const handleNavigateBiddingDetailPage = () => {
    navigate("/account/bidding/detail");
  };

  return (
    <div>
      <div>
        <div className="mt-8 mb-10 flex items-center justify-end tablet:my-10 ">
          <div>
            <FilterButton
              title={filterBiddingBtn.title}
              filterType={filterBiddingBtn.filterType}
              menu={filterBiddingBtn.menu}
              className={filterBiddingBtn.className}
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
          <div key={index} onClick={handleNavigateBiddingDetailPage}>
            <ListItem
              name={item.name}
              price={item.price}
              status={item.status}
              referenceNumber={item.referenceNumber}
              type="bidding"
              expirationDate={item.expirationDate}
            />
          </div>
        ))}
      </div>
      {/* <div className="my-20 flex justify-center">
        <PaginationComp boundaryCount={0} siblingCount={1} />
      </div> */}
    </div>
  );
}

export default BiddingList;
