import { useQuery } from "@tanstack/react-query";
import carRepository from "apis/car/carRepository";

export const useGetCarFeatures = () => useQuery(["car", "features"], () => carRepository.getCarFeature());
