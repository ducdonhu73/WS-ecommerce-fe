import axiosClient from "../configs/axiosClient";
import { HttpClient } from "../configs/httpClient";
import { AuthorizationRequest, AuthorizationResponse, RegisterRequest, VerifyFirebaseRequest } from "./auth.model";
import { AuthApi } from "./authApi";

class AuthRepository {
  private authApi: AuthApi;

  constructor(client: HttpClient) {
    this.authApi = new AuthApi(client);
  }

  async login(request: AuthorizationRequest): Promise<AuthorizationResponse> {
    const response = await this.authApi.login(request);
    return response.payload;
  }

  async register(request: RegisterRequest): Promise<AuthorizationResponse> {
    const response = await this.authApi.register(request);
    return response.payload;
  }

  async verify(request: VerifyFirebaseRequest): Promise<AuthorizationResponse> {
    const response = await this.authApi.verify(request);
    return response.payload;
  }
}

const authRepository = new AuthRepository(axiosClient);
export default authRepository;
