export interface CreateDiscountRequest {
  discountRate: number;
  limit: number;
  expireAt: Date;
}

export interface DeleteDiscountRequest {
  id: string;
}

export interface DiscountResponse {
  _id: string;
  discountRate: number;
  limit: number;
  expireAt: Date;
  createdAt: Date;
}
