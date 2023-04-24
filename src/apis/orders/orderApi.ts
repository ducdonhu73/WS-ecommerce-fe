import axiosClient from "../configs/axiosClient";
import { HttpClient } from "../configs/httpClient";
import { ApiResponse } from "../configs/types/apiResponse";
import { HttpMethod } from "../configs/types/httpMethod";
import { UrlRequestBuilder } from "../configs/urlRequestConfig";
import { OrderRequest, OrderResponse } from "./order.model";

export class OrderApi {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  async getAllOrder(): Promise<ApiResponse<OrderResponse[]>> {
    const request = UrlRequestBuilder.defaultRequest({
      path: "orders",
      method: HttpMethod.GET,
    });
    return await this.client.request(request);
  }

  async acceptOrder(body: OrderRequest): Promise<ApiResponse<void>> {
    const request = UrlRequestBuilder.defaultRequest({
      path: "orders/aprrove",
      method: HttpMethod.POST,
      body,
    });
    return await this.client.request(request);
  }

  async rejectOrder(body: OrderRequest): Promise<ApiResponse<void>> {
    const request = UrlRequestBuilder.defaultRequest({
      path: "orders/reject",
      method: HttpMethod.POST,
      body,
    });
    return await this.client.request(request);
  }
}

const orderApi = new OrderApi(axiosClient);
export default orderApi;
