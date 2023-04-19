import { CarImg, IconBackArrow } from "assets/images/offerList";
import Header from "pages/Account/components/HeaderOffer";
import { headerBiddingDetail } from "pages/Account/Offers/data";
import { useCallback, useState } from "react";
import BuyerDetail from "../components/BuyerDetail/BuyerDetail";
import CarDetail from "../components/CarDetail/CarDetail";
import CarImages from "../components/CarImages/CarImages";
import { biddingListDetailNav } from "pages/Account/data";
import ContentAccount from "pages/Account/components/ContentAccount";
import { useNavigate } from "react-router";

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
//     title: "Condition & History",
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

const buyerDetail = [
  {
    title: "About car",
    attributes: [
      { key: "Seat material:", value: "4" },
      { key: "Number of keys:", value: "2" },
      { key: "Number of keys:", value: "2" },
      { key: "Tool pack:", value: "No" },
      { key: "Smoking:", value: "No", link: false },
    ],
    content: "",
  },
];

function BiddingDetail() {
  const navigate = useNavigate();
  const [contentToShow, setContentToShow] = useState<number>(0);

  const handleSetContentToShow = useCallback((type: number) => {
    setContentToShow(type);
  }, []);

  const handleBackToOfferList = () => {
    navigate(-1);
  };

  return (
    <div>
      <ContentAccount subnav={biddingListDetailNav} navSelected={1}>
        <div className="w-full">
          <div className="mb-4">
            <div className="flex items-center">
              <span className="cursor-pointer" onClick={handleBackToOfferList}>
                <IconBackArrow />
              </span>
              <h3 className="ml-3 mr-6 font-[--font-family-secondary] text-[40px] font-bold leading-[48px] ">
                395-9823
              </h3>
              <p className="text-base font-normal leading-6 text-[var(--color-text-08)]">16 July 2020, 14:58</p>
            </div>
          </div>
          <Header listTitle={headerBiddingDetail} changeContent={handleSetContentToShow} />
          <div className="offer_detail mt-4">
            {contentToShow === 0 && (
              <div>
                <BuyerDetail list={buyerDetail} />
              </div>
            )}
            {contentToShow === 1 && (
              <div>
                <CarDetail />
              </div>
            )}
            {contentToShow === 2 && (
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

export default BiddingDetail;
