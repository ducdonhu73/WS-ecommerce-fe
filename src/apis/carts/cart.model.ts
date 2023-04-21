import { ProductResponse } from "apis/products/product.model";
import { UserResponse } from "apis/user/user.model";

export interface GetAllCartQuery {
  id?: string;
}

export interface AddToCart {
  p_id: string;
  quantity: number;
}

export interface RemoveFromCart {
  cartId: string;
}

export interface CartResponse {
  _id: string;
  user: UserResponse;
  product: ProductResponse;
  quantity: number;
}
