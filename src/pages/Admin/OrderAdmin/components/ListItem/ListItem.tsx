import { OrderResponse } from "apis/orders/order.model";
import { DateFormat } from "constants/dateFormat";
import format from "date-fns/format";
import { useAcceptOrder, useRejectOrder } from "queries/orderQueries";
import { useState } from "react";
import { toast } from "react-toastify";

interface ItemProps {
  order: OrderResponse;
  callback: (o: OrderResponse) => void;
}

function ListItem({ order, callback }: ItemProps) {
  const [display, setDisplay] = useState(true);
  const { mutate: acceptOrder } = useAcceptOrder();
  const { mutate: rejectOrder } = useRejectOrder();

  const handldAccept = () => {
    callback(order);
    acceptOrder(
      { orderId: order._id },
      {
        onSuccess: () => {
          toast.success("accept success");
          setDisplay(false);
        },
        onError: () => toast.error("fail"),
      },
    );
  };

  const handleReject = () => {
    callback(order);
    rejectOrder(
      { orderId: order._id },
      {
        onSuccess: () => {
          toast.success("reject success");
          setDisplay(false);
        },
        onError: () => toast.error("fail"),
      },
    );
  };

  return (
    <div>
      {display && (
        <div
          style={{
            boxShadow:
              "0px 15.375px 18.0882px rgba(0, 0, 0, 0.0456112), 0px 2.30969px 2.71728px rgba(0, 0, 0, 0.0243888)",
          }}
          className="gap-5justify-between relative mb-5 grid grid-cols-5 rounded-lg border-2 border-text-2 p-[22px] px-10 py-[22px]"
        >
          <div className="col-span-2 ml-4 flex items-center gap-y-6">
            <div className="w-[150px]">
              {<img className="h-[100px] max-w-[150px]" src={order.product.image} alt="sss" />}
            </div>
            <div className="flex flex-col">
              <p className="text-base font-medium text-text-8 laptop:text-lg laptop:leading-6 ">
                {order.product.product_name}
              </p>
              <span className="hidden laptop:block laptop:text-[15px] laptop:leading-7">
                Quantity: {order.quantity}
              </span>
              <span className="hidden font-semibold laptop:block laptop:text-2xl laptop:leading-7">
                Total: {order.total}đ
              </span>
            </div>
          </div>
          <div className="ml-4 mt-2 flex flex-col">
            <span className="mr-10 text-xl font-semibold">
              Buyer: <br />
              {order.user.lastName + " " + order.user.firstName}
            </span>
            <p className="mr-10 text-[14px] font-semibold">ID:{order.user.id}</p>
          </div>
          <div className="absolute bottom-6 right-5">
            <span className="text-base font-normal leading-6 text-text-6">Date order: </span>
            <span className="text-base font-bold text-text-8">
              {format(new Date(order.createdAt), DateFormat.DATE_WITH_TIME)}
            </span>
            <div className="absolute right-5 top-[-50px] flex">
              <div
                className="mr-5 cursor-pointer font-medium leading-6 text-[var(--color-primary)]"
                onClick={handldAccept}
              >
                Accept
              </div>
              <div className="cursor-pointer font-medium leading-6 text-[var(--color-primary)]" onClick={handleReject}>
                Reject
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListItem;
