import axiosClient from "../configs/axiosClient";
import { HttpClient } from "../configs/httpClient";
import { OrderRequest, OrderResponse } from "./order.model";
import { OrderApi } from "./orderApi";

class OrderRepository {
  private orderApi: OrderApi;

  constructor(client: HttpClient) {
    this.orderApi = new OrderApi(client);
  }

  async getAllOrder(): Promise<OrderResponse[]> {
    const response = await this.orderApi.getAllOrder();
    return response.payload;
  }

  async acceptOrder(request: OrderRequest): Promise<void> {
    await this.orderApi.acceptOrder(request);
  }

  async rejectOrder(request: OrderRequest): Promise<void> {
    await this.orderApi.rejectOrder(request);
  }
}

const orderRepository = new OrderRepository(axiosClient);
export default orderRepository;
