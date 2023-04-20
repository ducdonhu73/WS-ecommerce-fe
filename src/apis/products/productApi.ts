import axiosClient from "../configs/axiosClient";
import { HttpClient } from "../configs/httpClient";
import { ApiResponse } from "../configs/types/apiResponse";
import { HttpMethod } from "../configs/types/httpMethod";
import { UrlRequestBuilder } from "../configs/urlRequestConfig";
import {
  DeleteProductRequest,
  GetAllProductQuery,
  GetProductByIdRequest,
  ProductRequest,
  ProductResponse,
  UpdateProductRequest,
  UploadResponse,
} from "./product.model";

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

  async updateProduct(req: UpdateProductRequest): Promise<ApiResponse<ProductResponse>> {
    const { product, productId } = req;
    const request = UrlRequestBuilder.defaultRequest({
      path: "products/update/" + productId,
      method: HttpMethod.PUT,
      body: product,
    });
    return await this.client.request(request);
  }

  async addProduct(req: ProductRequest): Promise<ApiResponse<ProductResponse>> {
    const request = UrlRequestBuilder.defaultRequest({
      path: "products/add",
      method: HttpMethod.POST,
      body: req,
    });
    return await this.client.request(request);
  }

  async deleteProduct(req: DeleteProductRequest): Promise<ApiResponse<void>> {
    const { productId } = req;
    const request = UrlRequestBuilder.defaultRequest({
      path: "products/delete/" + productId,
      method: HttpMethod.DELETE,
    });
    return await this.client.request(request);
  }

  async uploadImg(body: FormData): Promise<ApiResponse<UploadResponse[]>> {
    const request = UrlRequestBuilder.defaultRequest({
      path: "s3/upload",
      method: HttpMethod.POST,
      headers: { "Content-type": "multipart/form-data" },
      body,
    });
    return await this.client.request(request);
  }
}

const productApi = new ProductApi(axiosClient);
export default productApi;
