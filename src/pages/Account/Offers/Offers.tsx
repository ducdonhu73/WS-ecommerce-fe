import OfferList from "./OfferList";
import BiddingList from "./BiddingList";
import Header from "../components/HeaderOffer";
import { headerOffer } from "../Offers/data";
import { useCallback, useState } from "react";

function Offers() {
  const [showContent, setShowContent] = useState(0);

  const handleSetShowContent = useCallback(
    (content: number) => {
      setShowContent(content);
    },
    [showContent],
  );

  return (
    <div className="mt-[225px] tablet:mt-36 ">
      <Header listTitle={headerOffer} changeContent={handleSetShowContent} />
      {showContent === 0 ? <OfferList /> : <BiddingList />}
    </div>
  );
}

export default Offers;
