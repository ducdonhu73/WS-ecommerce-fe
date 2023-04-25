export interface CategoryResponse {
  id: string;
  category_name: string;
  description?: string;
  image?: string;
  updatedAt: Date;
  createdAt: Date;
}

export interface AddCategoryRequest {
  category_name?: string;
  description?: string;
  image?: string;
}

export interface UpdateCategoryRequest {
  id: string;
  body: {
    category_name: string;
    description: string;
    image: string;
  };
}

export interface DeleteCategoryRequest {
  id: string;
}

export interface GetCategoryByIdRequest {
  id: string;
}
