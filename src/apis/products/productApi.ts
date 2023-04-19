import axiosClient from "../configs/axiosClient";
import { HttpClient } from "../configs/httpClient";
import { ApiResponse } from "../configs/types/apiResponse";
import { HttpMethod } from "../configs/types/httpMethod";
import { UrlRequestBuilder } from "../configs/urlRequestConfig";
import { GetAllProductQuery, GetProductByIdRequest, ProductResponse } from "./product.model";

export class ProductApi {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  async getAllProduct(query: GetAllProductQuery): Promise<ApiResponse<ProductResponse[]>> {
    const request = UrlRequestBuilder.defaultRequest({
      path: "products",
      method: HttpMethod.GET,
      params: query,
    });
    return await this.client.request(request);
  }

  async getProductById(req: GetProductByIdRequest): Promise<ApiResponse<ProductResponse>> {
    const { idProduct } = req;
    const request = UrlRequestBuilder.defaultRequest({
      path: "products/" + idProduct,
      method: HttpMethod.GET,
    });
    return await this.client.request(request);
  }
}

const productApi = new ProductApi(axiosClient);
export default productApi;
