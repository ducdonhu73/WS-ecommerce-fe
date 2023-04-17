import axiosClient from "../configs/axiosClient";
import { HttpClient } from "../configs/httpClient";
import { CarFeatureResponse } from "./car.model";
import { CarApi } from "./carApi";

class CarRepository {
  private carApi: CarApi;

  constructor(client: HttpClient) {
    this.carApi = new CarApi(client);
  }

  async getCarFeature(): Promise<CarFeatureResponse[]> {
    const response = await this.carApi.getCarFeatures();
    return response.payload;
  }
}

const carRepository = new CarRepository(axiosClient);
export default carRepository;
