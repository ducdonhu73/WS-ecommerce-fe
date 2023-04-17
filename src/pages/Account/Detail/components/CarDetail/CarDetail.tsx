import { CarResponse } from "apis/car/car.model";

interface carDetailProps {
  car?: Partial<CarResponse>;
}

function CarDetail({ car }: carDetailProps) {
  // console.log(car);
  return (
    <div>
      <div className="mb-6 mt-[30px] py-[14px] ">
        <h3 className="mb-6 text-lg font-bold leading-6 text-secondary-4 ">About Car</h3>
        <div className="mt-3 flex">
          <p className="text-base font-medium leading-6 text-text-9">Seat material:</p>
          <span className={`ml-1 text-base font-normal leading-6 text-text-8`}>{car?.vinId}</span>
        </div>
        <div className="mt-3 flex">
          <p className="text-base font-medium leading-6 text-text-9">Name:</p>
          <span className={`ml-1 text-base font-normal leading-6 text-text-8`}>{car?.name}</span>
        </div>
        <div className="mt-3 flex">
          <p className="text-base font-medium leading-6 text-text-9">License plate:</p>
          <span className={`ml-1 text-base font-normal leading-6 text-text-8`}>{car?.licensePlate}</span>
        </div>
        <div className="mt-3 flex">
          <p className="text-base font-medium leading-6 text-text-9">Fuel type:</p>
          <span className={`ml-1 text-base font-normal leading-6 text-text-8`}>{car?.fuelType?.name}</span>
        </div>
        <div className="mt-3 flex">
          <p className="text-base font-medium leading-6 text-text-9">Seats:</p>
          <span className={`ml-1 text-base font-normal leading-6 text-text-8`}>{car?.seats}</span>
        </div>
        <div className="mt-3 flex">
          <p className="text-base font-medium leading-6 text-text-9">Model:</p>
          <span className={`ml-1 text-base font-normal leading-6 text-text-8`}>{car?.model?.name}</span>
        </div>
        <div className="mt-3 flex">
          <p className="text-base font-medium leading-6 text-text-9">Year:</p>
          <span className={`ml-1 text-base font-normal leading-6 text-text-8`}>{car?.year}</span>
        </div>
        <div className="mt-3 flex">
          <p className="text-base font-medium leading-6 text-text-9">Mileage:</p>
          <span className={`ml-1 text-base font-normal leading-6 text-text-8`}>{car?.mileage}</span>
        </div>
      </div>
      <div className="mb-6 py-[14px] ">
        <h3 className="mb-6 text-lg font-bold leading-6 text-secondary-4 ">Vehicle feature</h3>
      </div>
    </div>
  );
}

export default CarDetail;
