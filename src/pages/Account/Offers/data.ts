const filterOptionBtn = {
  title: "Filter",
  filterType: "category",
  menu: [{ title: "All" }, { title: "Sold" }, { title: "Processing" }, { title: "Bidding" }],
  className: "left-[-28px] w-[114px]",
};

const createdAtOptionBtn = {
  title: "Recently created",
  filterType: "time",
  menu: [{ title: "Recently created" }, { title: "Lastly created" }],
  className: "left-0 w-full",
};

const headerOffer = [{ title: "Offer" }, { title: "Bid" }];

const headerOfferDetail = [{ title: "Thông tin xe" }, { title: "Ảnh xe" }];

const headerBiddingDetail = [{ title: "Thông tin người mua" }, { title: "Thông tin xe" }, { title: "Ảnh xe" }];

export { filterOptionBtn, createdAtOptionBtn, headerOffer, headerBiddingDetail, headerOfferDetail };
