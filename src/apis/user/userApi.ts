import { GearSellerApiResponse } from "apis/configs/types/apiResponse";
import { HttpMethod } from "apis/configs/types/httpMethod";
import { UrlRequestBuilder } from "apis/configs/urlRequestConfig";

import axiosClient from "../configs/axiosClient";
import { HttpClient } from "../configs/httpClient";
import { UserResponse } from "./user.model";

export class UserApi {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  async getCurrentUser(): Promise<GearSellerApiResponse<UserResponse>> {
    const request = UrlRequestBuilder.defaultRequest({
      path: "/sellers/me",
      method: HttpMethod.GET,
    });
    return await this.client.request(request);
  }
}

const userApi = new UserApi(axiosClient);
export default userApi;
