export interface GetAllProductQuery {
  category?: string;
  product_name?: string;
  limit?: number;
  page?: number;
}

export interface ProductResponse {
  _id: string;
  category_id: string;
  category_name: string;
  product_name: string;
  amount: number;
  price: number;
  description?: string;
  image?: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface GetProductByIdRequest {
  idProduct: string;
}
