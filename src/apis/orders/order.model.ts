import { ProductResponse } from "apis/products/product.model";
import { UserResponse } from "apis/user/user.model";

export interface OrderResponse {
  _id: string;
  user: UserResponse;
  product: ProductResponse;
  quantity: number;
  total: number;
  createdAt: Date;
}

export interface OrderRequest {
  orderId: string;
}
