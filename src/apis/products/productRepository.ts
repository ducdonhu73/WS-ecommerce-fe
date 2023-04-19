import axiosClient from "../configs/axiosClient";
import { HttpClient } from "../configs/httpClient";
import { GetAllProductQuery, GetProductByIdRequest, ProductResponse } from "./product.model";
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
}

const productRepository = new ProductRepository(axiosClient);
export default productRepository;
