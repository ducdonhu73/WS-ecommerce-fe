import axiosClient from "../configs/axiosClient";
import { HttpClient } from "../configs/httpClient";
import { ApiResponse } from "../configs/types/apiResponse";
import { HttpMethod } from "../configs/types/httpMethod";
import { UrlRequestBuilder } from "../configs/urlRequestConfig";
import { AddToCart, CartResponse, GetAllCartQuery, RemoveFromCart } from "./cart.model";

export class CartApi {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  async getAllCart(): Promise<ApiResponse<CartResponse[]>> {
    const request = UrlRequestBuilder.defaultRequest({
      path: "carts",
      method: HttpMethod.GET,
    });
    return await this.client.request(request);
  }

  async addToCart(body: AddToCart): Promise<ApiResponse<void>> {
    const request = UrlRequestBuilder.defaultRequest({
      path: "carts/add-to-cart",
      method: HttpMethod.POST,
      body,
    });
    return await this.client.request(request);
  }

  async removeFromCart(body: RemoveFromCart): Promise<ApiResponse<void>> {
    const request = UrlRequestBuilder.defaultRequest({
      path: "carts/remove",
      method: HttpMethod.DELETE,
      body,
    });
    return await this.client.request(request);
  }
}

const cartApi = new CartApi(axiosClient);
export default cartApi;
