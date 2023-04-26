import axiosClient from "../configs/axiosClient";
import { HttpClient } from "../configs/httpClient";
import { ApiResponse } from "../configs/types/apiResponse";
import { HttpMethod } from "../configs/types/httpMethod";
import { UrlRequestBuilder } from "../configs/urlRequestConfig";
import { CreateDiscountRequest, DeleteDiscountRequest, DiscountResponse } from "./discount.model";

export class DiscountApi {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  async getAllDiscount(): Promise<ApiResponse<DiscountResponse[]>> {
    const request = UrlRequestBuilder.defaultRequest({
      path: "discounts",
      method: HttpMethod.GET,
    });
    return await this.client.request(request);
  }

  async getDiscount(req: DeleteDiscountRequest): Promise<ApiResponse<DiscountResponse>> {
    const request = UrlRequestBuilder.defaultRequest({
      path: "discounts/" + req.id,
      method: HttpMethod.GET,
    });
    return await this.client.request(request);
  }

  async createDiscount(body: CreateDiscountRequest): Promise<ApiResponse<DiscountResponse>> {
    const request = UrlRequestBuilder.defaultRequest({
      path: "discounts",
      method: HttpMethod.POST,
      body,
    });
    return await this.client.request(request);
  }

  async deleteDiscount(req: DeleteDiscountRequest): Promise<ApiResponse<void>> {
    const request = UrlRequestBuilder.defaultRequest({
      path: "discounts/" + req.id,
      method: HttpMethod.DELETE,
    });
    return await this.client.request(request);
  }
}

const discountApi = new DiscountApi(axiosClient);
export default discountApi;
