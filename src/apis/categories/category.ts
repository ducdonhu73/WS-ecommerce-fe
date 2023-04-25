import axiosClient from "../configs/axiosClient";
import { HttpClient } from "../configs/httpClient";
import { ApiResponse } from "../configs/types/apiResponse";
import { HttpMethod } from "../configs/types/httpMethod";
import { UrlRequestBuilder } from "../configs/urlRequestConfig";
import {
  AddCategoryRequest,
  CategoryResponse,
  DeleteCategoryRequest,
  GetCategoryByIdRequest,
  UpdateCategoryRequest,
} from "./category.model";

export class CategoryApi {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  async getAllCategory(): Promise<ApiResponse<CategoryResponse[]>> {
    const request = UrlRequestBuilder.defaultRequest({
      path: "categories/all",
      method: HttpMethod.GET,
    });
    return await this.client.request(request);
  }

  async addCategory(body: AddCategoryRequest): Promise<ApiResponse<void>> {
    const request = UrlRequestBuilder.defaultRequest({
      path: "categories/add",
      method: HttpMethod.POST,
      body,
    });
    return await this.client.request(request);
  }

  async updateCategory(req: UpdateCategoryRequest): Promise<ApiResponse<CategoryResponse>> {
    const { body, id } = req;
    const request = UrlRequestBuilder.defaultRequest({
      path: "categories/update/" + id,
      method: HttpMethod.PUT,
      body,
    });
    return await this.client.request(request);
  }

  async deleteCategory(req: DeleteCategoryRequest): Promise<ApiResponse<void>> {
    const { id } = req;
    const request = UrlRequestBuilder.defaultRequest({
      path: "categories/delete/" + id,
      method: HttpMethod.DELETE,
    });
    return await this.client.request(request);
  }

  async getCategoryById(req: GetCategoryByIdRequest): Promise<ApiResponse<CategoryResponse>> {
    const { id } = req;
    const request = UrlRequestBuilder.defaultRequest({
      path: "categories/" + id,
      method: HttpMethod.GET,
    });
    return await this.client.request(request);
  }
}

const categoryApi = new CategoryApi(axiosClient);
export default categoryApi;
