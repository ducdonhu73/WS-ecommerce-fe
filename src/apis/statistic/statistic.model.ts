import { ProductResponse } from "apis/products/product.model";
import { UserResponse } from "apis/user/user.model";

export interface StatisticResponse {
  _id: string;
  user: UserResponse;
  product: ProductResponse;
  quantity: number;
  total: number;
  createdAt: Date;
}

export interface StatisticQuery {
  userId?: string;
  productId?: string;
  startDate?: Date | undefined;
  endDate?: Date | undefined;
  maxPrice?: number | undefined;
  minPrice?: number | undefined;
}
