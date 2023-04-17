import { CarImg, IconBackArrow } from "assets/images/offerList";
import useWindowDimensions from "hooks/useWindowDimensions";
import ContentAccount from "pages/Account/components/ContentAccount";
import Header from "pages/Account/components/HeaderOffer";
import { offerListDetailNav } from "pages/Account/data";
import { headerOfferDetail } from "pages/Account/Offers/data";
import { useGetCarOfferDetail } from "queries/carOfferQueries";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dateReviver } from "utils/reviver";

import CarDetail from "../components/CarDetail/CarDetail";
import CarImages from "../components/CarImages/CarImages";

// const carDetail = [
//   {
//     title: "About car",
//     attributes: [
//       { key: "Seat material:", value: "4" },
//       { key: "Number of keys:", value: "2" },
//       { key: "Number of keys:", value: "2" },
//       { key: "Tool pack:", value: "No" },
//       { key: "Smoking:", value: "No" },
//     ],
//   },
//   {
//     title: "Vehicle feature",
//     content: "Air con, Towbar, Sat nav, Alloys, Cruise control, Privacy glass, Cruise control",
//   },
//   {
//     title: "Condution & History",
//     attributes: [
//       { key: "Driving or mechanical:", value: "Yes" },
//       { key: "Warning lights displayed:", value: "Yes" },
//       { key: "Damage on the windscreen:", value: "No" },
//       { key: "Damage to the roof:", value: "No" },
//       { key: "File docs: ", value: "docshistory.pdf", link: true },
//     ],
//   },
//   {
//     title: "About ownership",
//     attributes: [
//       { key: "Location:", value: " 6 Malrborough Crescent, London W4 1HF" },
//       { key: "Private plat:", value: "Yes" },
//       { key: "Number of vehicle owner:", value: "1" },
//       { key: "Finance:", value: "NO" },
//     ],
//   },
// ];

const carImages = [
  {
    title: "Exterior & Interior",
    listImages: [{ img: CarImg }, { img: CarImg }, { img: CarImg }, { img: CarImg }, { img: CarImg }, { img: CarImg }],
  },
  {
    title: "Exterior & Interior",
    listImages: [{ img: CarImg }, { img: CarImg }, { img: CarImg }, { img: CarImg }, { img: CarImg }, { img: CarImg }],
  },
];

function OfferDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [contentToShow, setContentToShow] = useState<number>(0);
  const { data: carOffer } = useGetCarOfferDetail(id ?? "", { enabled: !!id });
  const { width } = useWindowDimensions();
  // console.log(params);

  const car = carOffer?.car;

  // useEffect(() => {
  //   // console.log(data);
  //   if (data) {
  //     const { car } = data;
  //     if (car) setCarInfo(car);
  //   }
  // }, [data]);

  const handleSetContentToShow = useCallback((type: number) => {
    setContentToShow(type);
  }, []);

  const handleBackToOfferList = () => {
    navigate(-1);
  };

  return (
    <div>
      <ContentAccount hideNav={width < 640 ? true : false} subnav={offerListDetailNav} navSelected={1}>
        <div className="w-full">
          <div className="layout-padding tablet:layout-full mb-6 mt-8 tablet:mt-0">
            <div className="flex tablet:items-center ">
              <span className="cursor-pointer" onClick={handleBackToOfferList}>
                <IconBackArrow />
              </span>
              <div className="ml-3 flex flex-col tablet:flex-row tablet:items-center">
                <h3 className="mr-6 text-[32px] font-bold leading-[44px] tablet:text-[40px] tablet:leading-[48px] ">
                  {car?.vinId}
                </h3>
                {/* <p className="text-base font-normal leading-6 text-text-8">16 July 2020, 14:58</p> */}
              </div>
            </div>
          </div>
          <Header listTitle={headerOfferDetail} changeContent={handleSetContentToShow} />
          <div className="layout-padding tablet:layout-full">
            {contentToShow === 0 && (
              <div>
                <CarDetail car={car} />
              </div>
            )}
            {contentToShow === 1 && (
              <div>
                <CarImages list={carImages} />
              </div>
            )}
          </div>
        </div>
      </ContentAccount>
    </div>
  );
}

export default OfferDetail;
