import { OrderResponse } from "apis/orders/order.model";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import FilterButton from "./components/FilterButton/FilterButton";
import ListItem from "./components/ListItem/ListItem";
import { useStatisticUser } from "queries/statisticQueries";
import { createdAtOptionBtn, filterOfferBtn } from "pages/Admin/ProductAdmin/data";

const History = () => {
  const { mutate: getOrders } = useStatisticUser();
  const [listOrder, setListOrder] = useState<OrderResponse[]>([]);
  useEffect(() => {
    getOrders(undefined, {
      onSuccess: data => {
        setListOrder(data);
      },
      onError: () => toast("dont find any history"),
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
    </div>
  );
};

export default History;
