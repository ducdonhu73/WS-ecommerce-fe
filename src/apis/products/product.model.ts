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
  nhasx: string;
  hsd: Date;
  ngaysx: Date;
  updatedAt: Date;
  createdAt?: Date;
}

export interface GetProductByIdRequest {
  idProduct: string;
}

export interface ProductRequest {
  category_name: string;
  product_name: string;
  amount: number;
  price: number;
  description?: string;
  image: string;
  nhasx: string;
  hsd: Date;
  ngaysx: Date;
}

export interface UpdateProductRequest {
  productId: string;
  product: ProductRequest;
}

export interface DeleteProductRequest {
  productId: string;
}

export interface UploadResponse {
  link: string;
}
