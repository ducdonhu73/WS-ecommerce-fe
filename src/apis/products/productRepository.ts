import { ApiResponse } from "apis/configs/types/apiResponse";
import axiosClient from "../configs/axiosClient";
import { HttpClient } from "../configs/httpClient";
import {
  GetAllProductQuery,
  GetProductByIdRequest,
  ProductResponse,
  ProductRequest,
  UpdateProductRequest,
  DeleteProductRequest,
  UploadResponse,
} from "./product.model";
import { ProductApi } from "./productApi";

class ProductRepository {
  private productApi: ProductApi;

  constructor(client: HttpClient) {
    this.productApi = new ProductApi(client);
  }

  async getAllProduct(query: GetAllProductQuery): Promise<ProductResponse[]> {
    const response = await this.productApi.getAllProduct(query);
    return response.payload;
  }

  async getProductById(request: GetProductByIdRequest): Promise<ProductResponse> {
    const response = await this.productApi.getProductById(request);
    return response.payload;
  }

  async addProduct(request: ProductRequest): Promise<ProductResponse> {
    const response = await this.productApi.addProduct(request);
    return response.payload;
  }

  async updateProduct(request: UpdateProductRequest): Promise<ProductResponse> {
    const response = await this.productApi.updateProduct(request);
    return response.payload;
  }

  async deleteProduct(request: DeleteProductRequest): Promise<ApiResponse<void>> {
    const response = await this.productApi.deleteProduct(request);
    return response;
  }

  async uploadImg(request: FormData): Promise<UploadResponse> {
    const response = await this.productApi.uploadImg(request);
    return response.payload[0];
  }
}

const productRepository = new ProductRepository(axiosClient);
export default productRepository;
