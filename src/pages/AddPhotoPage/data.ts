import { MediaProps } from "apis/configs/types/common";
import {
  DashboardImage,
  DriverSideCornerImage,
  FrontTypeDriverSideImage,
  FrontTypePassengerSideImage,
  InteriorFrontImage,
  PassengerRearSideCorner2Image,
  PassengerRearSideCornerImage,
  PassengerSideCornerImage,
  RearTypeDriverSideImage,
  RearTypePassengerSideImage,
} from "assets/images";
export interface InputCarImage {
  carImage: string;
  description: string;
  className?: string;
  keyCar: keyof CarPhotoRequest;
  headText?: string;
}
export interface CarPhotoRequest {
  front_left: MediaProps;
  front_right: MediaProps;
  back_left: MediaProps;
  back_right: MediaProps;
  interior_front: MediaProps;
  speedometer: MediaProps;
  front_tyre_right?: string;
  front_tyre_left?: string;
  back_tyre_right?: string;
  damage?: string;
}
export const baseCarPhotoRequest: CarPhotoRequest = {
  front_left: { name: "", path: "" },
  front_right: { name: "", path: "" },
  back_left: { name: "", path: "" },
  back_right: { name: "", path: "" },
  interior_front: { name: "", path: "" },
  speedometer: { name: "", path: "" },
  // front_tyre_right: "",
  // front_tyre_left: "",
  // back_tyre_right: "",
  // damage: "",
};
export const listCarInput: InputCarImage[] = [
  // {
  //   carImage: DriverSideCornerImage,
  //   description: "Driver side corner",
  //   className: "tablet:col-span-2 tablet:row-span-2 tablet:min-h-[469px] tablet:max-w-[469px] tablet:gap-y-16",
  //   headText: "Click here to add photo",
  //   keyCar: "driverSideCorner",
  // },
  { carImage: PassengerSideCornerImage, description: "Passenger side corner", keyCar: "front_right" },
  {
    carImage: PassengerRearSideCornerImage,
    description: "Passenger rear side corner",
    keyCar: "back_left",
  },
  {
    carImage: PassengerRearSideCorner2Image,
    description: "Passenger rear side corner",
    keyCar: "back_right",
  },
  { carImage: InteriorFrontImage, description: "Interior font", keyCar: "interior_front" },
  { carImage: DashboardImage, description: "Dashboard", keyCar: "speedometer" },
];
export const listTyre: InputCarImage[] = [
  { carImage: FrontTypeDriverSideImage, description: "Front type driver side", keyCar: "front_tyre_left" },
  {
    carImage: FrontTypePassengerSideImage,
    description: "Front type passenger side",
    keyCar: "front_tyre_right",
  },
  { carImage: RearTypePassengerSideImage, description: "Rear type passenger side", keyCar: "back_tyre_right" },
  // { carImage: RearTypeDriverSideImage, description: "Rear type driver side", keyCar: "rearDriverTyre" },
];
