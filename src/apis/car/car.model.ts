import { MediaProps } from "apis/configs/types/common";

export interface CarMakeResponse {
  id: string;
  name: string;
}

export interface CarModelResponse {
  id: string;
  name: string;
}

export interface CarTrimResponse {
  id: string;
  name: string;
}

export interface CarColorResponse {
  id: string;
  name: string;
  code: string;
}

export interface FuelTypeResponse {
  id: string;
  name: string;
}

export interface BodyTypeResponse {
  id: string;
  name: string;
  code: string;
}

export interface TransmissionResponse {
  id: string;
  name: string;
}

export interface CarFeatureResponse {
  id: string;
  name: string;
}

export interface CarOwnerResponse {
  address: string;
  name: string;
  phoneNumber: string;
}

export interface CarResponse {
  id: string;
  name: string;
  images: MediaProps[];
  vinId: string;
  licensePlate: string;
  makeId: string;
  make?: CarMakeResponse;
  modelId: string;
  model?: CarModelResponse;
  trimId: string;
  trim: CarTrimResponse;
  exteriorColor?: CarColorResponse;
  interiorColor?: CarColorResponse;
  fuelType?: FuelTypeResponse;
  transmission?: TransmissionResponse;
  year: number;
  doors: number;
  seats: number;
  numberOfOwners: number;
  mileage: number;
  power: number; // kW
  co2Value?: number; // g/km
  numberOfKeys?: number;
  features: CarFeatureResponse[];
  // seller?: SellerResponse;
  owner?: CarOwnerResponse;
}
