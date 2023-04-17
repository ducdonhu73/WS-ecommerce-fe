import { GearSellerApiResponse } from "apis/configs/types/apiResponse";

import axiosClient from "../configs/axiosClient";
import { HttpClient } from "../configs/httpClient";
import { HttpMethod } from "../configs/types/httpMethod";
import { UrlRequestBuilder } from "../configs/urlRequestConfig";
import { CarFeatureResponse } from "./car.model";

export class CarApi {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }
  async getCarFeatures(): Promise<GearSellerApiResponse<CarFeatureResponse[]>> {
    const request = UrlRequestBuilder.defaultRequest({
      path: "cars/features",
      method: HttpMethod.GET,
    });
    return await this.client.request(request);
  }
}

const carApi = new CarApi(axiosClient);
export default carApi;
