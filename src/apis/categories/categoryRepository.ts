import axiosClient from "../configs/axiosClient";
import { HttpClient } from "../configs/httpClient";
import { CategoryApi } from "./category";
import {
  AddCategoryRequest,
  CategoryResponse,
  DeleteCategoryRequest,
  GetCategoryByIdRequest,
  UpdateCategoryRequest,
} from "./category.model";

class CategoryRepository {
  private categoryApi: CategoryApi;

  constructor(client: HttpClient) {
    this.categoryApi = new CategoryApi(client);
  }

  async getAllCategory(): Promise<CategoryResponse[]> {
    const response = await this.categoryApi.getAllCategory();
    return response.payload;
  }

  async deleteCategory(request: DeleteCategoryRequest): Promise<void> {
    await this.categoryApi.deleteCategory(request);
  }

  async updateCategory(request: UpdateCategoryRequest): Promise<CategoryResponse> {
    const res = await this.categoryApi.updateCategory(request);
    return res.payload;
  }

  async getCategoryById(request: GetCategoryByIdRequest): Promise<CategoryResponse> {
    const response = await this.categoryApi.getCategoryById(request);
    return response.payload;
  }

  async addCategory(request: AddCategoryRequest): Promise<void> {
    await this.categoryApi.addCategory(request);
  }
}

const categoryRepository = new CategoryRepository(axiosClient);
export default categoryRepository;
