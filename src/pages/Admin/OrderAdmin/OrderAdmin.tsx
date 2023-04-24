import { useOrder } from "queries/orderQueries";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import FilterButton from "./components/FilterButton/FilterButton";
import { createdAtOptionBtn, filterOfferBtn } from "./data";
import { OrderResponse } from "apis/orders/order.model";
import ListItem from "./components/ListItem/ListItem";

const OrderAdmin = () => {
  const { mutate: getOrders } = useOrder();
  const [listOrder, setListOrder] = useState<OrderResponse[]>([]);
  useEffect(() => {
    getOrders(undefined, {
      onSuccess: data => {
        setListOrder(data);
      },
      onError: () => toast("fail"),
    });
  }, []);

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
      </div>
      {/* list offer */}
      <div>
        {listOrder.map((item, index) => {
          return (
            <div key={index}>
              <ListItem order={item} />
            </div>
          );
        })}
      </div>
      {/* <PrimaryButton text="Add product" onClick={() => navigate("add")} className="mb-16" /> */}
    </div>
  );
};

export default OrderAdmin;
