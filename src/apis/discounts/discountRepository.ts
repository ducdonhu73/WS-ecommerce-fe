import axiosClient from "../configs/axiosClient";
import { HttpClient } from "../configs/httpClient";
import { DiscountApi } from "./discountApi";
import { DiscountResponse, DeleteDiscountRequest, CreateDiscountRequest } from "./discount.model";

class DiscountRepository {
  private discountApi: DiscountApi;

  constructor(client: HttpClient) {
    this.discountApi = new DiscountApi(client);
  }

  async getAllDiscount(): Promise<DiscountResponse[]> {
    const response = await this.discountApi.getAllDiscount();
    return response.payload;
  }

  async deleteDiscount(request: DeleteDiscountRequest): Promise<void> {
    await this.discountApi.deleteDiscount(request);
  }

  async createDiscount(request: CreateDiscountRequest): Promise<DiscountResponse> {
    const response = await this.discountApi.createDiscount(request);
    return response.payload;
  }

  async getDiscount(request: DeleteDiscountRequest): Promise<DiscountResponse> {
    const response = await this.discountApi.getDiscount(request);
    return response.payload;
  }
}

const discountRepository = new DiscountRepository(axiosClient);
export default discountRepository;
