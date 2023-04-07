import { AlertCircle, RunningTime } from "assets/images";
import TextTitle from "components/common/TextTitle";
import { twMerge } from "tailwind-merge";

interface CarOfferProps {
  className?: string;
}

const CarOffer = ({ className }: CarOfferProps) => {
  return (
    <div className={twMerge("h-fit w-[486px] rounded-xl px-8 py-10 shadow-lg", className)}>
      <TextTitle text="Your offer" variant="subtitle2" />
      <p className="text-[85px] font-black text-text-9">10,000$</p>
      <div className="mb-5 flex gap-6">
        <div className="w-[30px]">
          <RunningTime />
        </div>
        <p className="text-text-7">Expires on Jul 14, 2022</p>
      </div>
      <div className="flex gap-6">
        <div className="w-[30px]">
          <AlertCircle />
        </div>
        <p className="text-text-7">This offer is firm as long as vehicle’s condition and history are as described</p>
      </div>
      <div className="my-8" style={{ borderBottom: "1px dashed #CCCCCC" }} />
      <p className="mb-4 text-lg font-medium">Your Toyota Yaris details</p>
      <TextTitle text="2011 Volkswagen Tiguan 4D Utility 4Motion" variant="subtitle2" className="text-secondary-4" />
    </div>
  );
};

export default CarOffer;
