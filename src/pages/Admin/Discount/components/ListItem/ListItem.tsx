import { DiscountResponse } from "apis/discounts/discount.model";
import { DateFormat } from "constants/dateFormat";
import format from "date-fns/format";

interface ItemProps {
  discount: DiscountResponse;
}

function ListItem({ discount }: ItemProps) {
  return (
    <div>
      <div
        style={{
          boxShadow:
            "0px 15.375px 18.0882px rgba(0, 0, 0, 0.0456112), 0px 2.30969px 2.71728px rgba(0, 0, 0, 0.0243888)",
        }}
        className="bdiscount-2 bdiscount-text-2 relative mb-5 grid grid-cols-3 justify-between gap-5 rounded-lg p-[22px] px-10 py-[22px]"
      >
        <div className="ml-4 flex cursor-pointer flex-col">
          <span className="mr-10 text-xl font-semibold">Rate: {discount.discountRate}%</span>
          <p className="mr-10 text-[14px] font-semibold">Limit: {discount.limit}</p>
        </div>
        <div className="">Code: {discount._id}</div>
        <div className="absolute bottom-6 right-5">
          <span className="text-base font-normal leading-6 text-text-6">Expire at: </span>
          <span className="text-base font-bold text-text-8">
            {format(new Date(discount.expireAt), DateFormat.DATE_WITH_TIME)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
