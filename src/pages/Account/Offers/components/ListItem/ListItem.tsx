import { DateFormat } from "constants/dateFormat";
import format from "date-fns/format";

interface ItemProps {
  id?: string;
  vinId?: string;
  name?: string;
  referenceNumber?: string;
  expirationDate?: Date;
  price?: string;
  status?: string;
  type?: string;
}

function ListItem({ name, type = "offer", referenceNumber, expirationDate, price, status }: ItemProps) {
  return (
    <div>
      <div
        style={{
          boxShadow:
            "0px 15.375px 18.0882px rgba(0, 0, 0, 0.0456112), 0px 2.30969px 2.71728px rgba(0, 0, 0, 0.0243888)",
        }}
        className="mb-5 flex cursor-pointer flex-col justify-between rounded-lg border-0 p-[22px] laptop:grid laptop:grid-cols-3 laptop:flex-row laptop:border-2 laptop:border-text-2 laptop:px-10 laptop:py-[22px]"
      >
        <div className="flex items-center laptop:flex-col laptop:items-start laptop:gap-y-6">
          <p className="text-base font-medium text-text-8 laptop:text-lg laptop:leading-6 ">{name}</p>
          <span className="hidden font-semibold laptop:block laptop:text-2xl laptop:leading-7">{price}</span>
        </div>
        <div className="ml-0 mt-3 flex items-center gap-x-2 laptop:mt-0 laptop:ml-2 laptop:flex-col laptop:items-center laptop:gap-y-6">
          <p className="flex-1 text-base font-normal leading-6 text-text-8 laptop:flex-auto">Reference Number</p>
          <span className="text-base font-normal leading-6 text-text-6">{referenceNumber}</span>
        </div>
        <div className="ml-0 mt-3 flex flex-col justify-between laptop:mt-0 laptop:ml-2 laptop:items-end">
          <div className="flex justify-between laptop:justify-start">
            <p className="mr-2 text-base font-normal leading-6 text-text-6">Valid until</p>
            <p className="text-base font-bold text-text-8">
              {status === "expired" ? "Expired" : format(expirationDate ?? new Date(), DateFormat.DATE_WITH_TEXT_MONTH)}
            </p>
          </div>
          <div className="mt-3 flex items-center justify-between laptop:mt-0 laptop:flex-col laptop:items-start">
            <span className="text-2xl font-semibold laptop:hidden laptop:leading-7">{price}</span>
            {type === "offer" ? (
              <p className="font-medium leading-6 text-[var(--color-primary)] laptop:text-base ">
                {status === "expired" ? "Re-valuate" : "View offer"}
              </p>
            ) : (
              <p
                className={`text-base font-medium leading-6 ${status === "Bidding" && "text-[var(--color-primary)]"} ${
                  status === "Sold" && "text-[#3AC922]"
                } ${status === "Processing" && "text-[var(--color-secondary-03)]"} `}
              >
                {status}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
