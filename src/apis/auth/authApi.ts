import axiosClient from "../configs/axiosClient";
import { HttpClient } from "../configs/httpClient";
import { GearSellerApiResponse } from "../configs/types/apiResponse";
import { HttpMethod } from "../configs/types/httpMethod";
import { UrlRequestBuilder } from "../configs/urlRequestConfig";
import { AuthorizationRequest, AuthorizationResponse, RegisterRequest, VerifyFirebaseRequest } from "./auth.model";

export class AuthApi {
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client;
  }

  async login(requestBody: AuthorizationRequest): Promise<GearSellerApiResponse<AuthorizationResponse>> {
    const request = UrlRequestBuilder.defaultRequest({
      path: "sellers/login",
      method: HttpMethod.POST,
      body: requestBody,
    });
    return await this.client.request(request);
  }

  async register(requestBody: RegisterRequest): Promise<GearSellerApiResponse<AuthorizationResponse>> {
    const request = UrlRequestBuilder.defaultRequest({
      path: "sellers/register",
      method: HttpMethod.POST,
      body: requestBody,
    });
    return await this.client.request(request);
  }

  async verify(requestBody: VerifyFirebaseRequest): Promise<GearSellerApiResponse<AuthorizationResponse>> {
    const request = UrlRequestBuilder.defaultRequest({
      path: "sellers/login-firebase",
      method: HttpMethod.POST,
      body: requestBody,
    });
    return await this.client.request(request);
  }
}

const authApi = new AuthApi(axiosClient);
export default authApi;
