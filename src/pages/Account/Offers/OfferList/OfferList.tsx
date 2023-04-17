import { CarjamVehicleResponse } from "apis/carOffer/carOffer.model";
import ListItem from "pages/Account/Offers/components/ListItem";
import CarInformationModal from "pages/HomePage/components/CarInformationModal";
import { useGetCarInfo, useGetCarOfferList } from "queries/carOfferQueries";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { formatCurrency } from "utils/formatCurrency";

import PaginationComp from "../../components/Pagination";
import FilterButton from "../components/FilterButton";
import { createdAtOptionBtn, filterOfferBtn } from "../data";

function OfferList() {
  const navigate = useNavigate();
  const { data: offerList } = useGetCarOfferList();
  const [showCarOffer, setShowCarOffer] = useState(false);
  const { mutate: getCarInfo } = useGetCarInfo();
  const [carInfo, setCarInfo] = useState<CarjamVehicleResponse>();

  const handleNavigateDetailPage = (id?: string) => {
    navigate(`/account/offer-detail/${id}`);
  };

  const handleOfferCar = (vinId?: string) => {
    if (vinId) {
      getCarInfo(
        { vinId },
        {
          onSuccess: data => {
            setCarInfo(data);
            setShowCarOffer(true);
          },
          onError: () => {
            toast.error("Fail to get car offer api");
          },
        },
      );
    }
  };

  const handleFilterOfferByStatus = (type?: string) => {
    type = type?.toLocaleLowerCase();
  };

  const handleFilterOfferByTime = () => {};

  return (
    <div>
      <div className="">
        <div className="mt-8 mb-10 flex items-center justify-end tablet:my-10 ">
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
        {offerList &&
          offerList.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  if (item.status === "expired") {
                    handleOfferCar(item.vinId);
                  } else {
                    handleNavigateDetailPage(item.id);
                  }
                }}
              >
                <ListItem
                  name={item?.car?.name}
                  referenceNumber={item.code}
                  status={item.status}
                  price={formatCurrency(item.price ?? 0)}
                  expirationDate={item.expirationDate}
                />
              </div>
            );
          })}
      </div>
      {/* <div className="my-20 flex justify-center">
        <PaginationComp boundaryCount={0} siblingCount={1} />
      </div> */}
      {carInfo && <CarInformationModal isOpen={showCarOffer} setIsOpen={setShowCarOffer} carInfo={carInfo} />}
    </div>
  );
}

export default OfferList;
