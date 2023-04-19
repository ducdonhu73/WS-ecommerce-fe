import OfferList from "./OfferList";
import BiddingList from "./BiddingList";
import Header from "../components/HeaderOffer";
import { headerOffer } from "../Offers/data";
import { useCallback, useState } from "react";
import { offerListNav } from "pages/Account/data";
import ContentAccount from "pages/Account/components/ContentAccount";

function Offers() {
  const [showContent, setShowContent] = useState(0);

  const handleSetShowContent = useCallback(
    (content: number) => {
      setShowContent(content);
    },
    [showContent],
  );

  return (
    <div>
      <ContentAccount subnav={offerListNav} navSelected={1}>
        <div className=" mt-[30px] w-full tablet:mt-0">
          <Header listTitle={headerOffer} changeContent={handleSetShowContent} />
          <div className="layout-padding tablet:layout-full">{showContent === 0 ? <OfferList /> : <BiddingList />}</div>
        </div>
      </ContentAccount>
    </div>
  );
}

export default Offers;
