import axiosClient from "../configs/axiosClient";
import { HttpClient } from "../configs/httpClient";
import { CartApi } from "./cartApi";
import { AddToCart, RemoveFromCart, CartResponse, OrderRequest } from "./cart.model";

class CartRepository {
  private cartApi: CartApi;

  constructor(client: HttpClient) {
    this.cartApi = new CartApi(client);
  }

  async getAllCart(): Promise<CartResponse[]> {
    const response = await this.cartApi.getAllCart();
    return response.payload;
  }

  async removeFromCart(request: RemoveFromCart): Promise<boolean> {
    const response = await this.cartApi.removeFromCart(request);
    return response.success;
  }

  async addToCart(request: AddToCart): Promise<boolean> {
    const response = await this.cartApi.addToCart(request);
    return response.success;
  }

  async order(request: OrderRequest): Promise<boolean> {
    const response = await this.cartApi.order(request);
    return response.success;
  }
}

const cartRepository = new CartRepository(axiosClient);
export default cartRepository;
