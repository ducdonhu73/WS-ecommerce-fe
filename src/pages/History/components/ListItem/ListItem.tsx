import { OrderResponse } from "apis/orders/order.model";
import { DateFormat } from "constants/dateFormat";
import format from "date-fns/format";

interface ItemProps {
  order: OrderResponse;
}

function ListItem({ order }: ItemProps) {
  return (
    <div>
      <div
        style={{
          boxShadow:
            "0px 15.375px 18.0882px rgba(0, 0, 0, 0.0456112), 0px 2.30969px 2.71728px rgba(0, 0, 0, 0.0243888)",
        }}
        className="relative mb-5 justify-between gap-5 rounded-lg border-2 border-text-2 p-[22px] px-10 py-[22px]"
      >
        <div className="col-span-2 ml-4 flex items-center gap-y-6">
          <div className="w-[150px]">
            {<img className="h-[100px] max-w-[150px]" src={order.product.image} alt="sss" />}
          </div>
          <div className="flex flex-col">
            <p className="text-base font-medium text-text-8 laptop:text-lg laptop:leading-6 ">
              {order.product.product_name}
            </p>
            <span className="hidden laptop:block laptop:text-[15px] laptop:leading-7">Quantity: {order.quantity}</span>
            <span className="hidden font-semibold laptop:block laptop:text-2xl laptop:leading-7">
              Total: {order.total}đ
            </span>
          </div>
        </div>
        <div className="absolute bottom-6 right-5">
          <span className="text-base font-normal leading-6 text-text-6">Date bought: </span>
          <span className="text-base font-bold text-text-8">
            {format(new Date(order.createdAt), DateFormat.DATE_WITH_TEXT_MONTH)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
