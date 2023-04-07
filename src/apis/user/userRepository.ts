import axiosClient from "../configs/axiosClient";
import { HttpClient } from "../configs/httpClient";
import { UserResponse } from "./user.model";
import { UserApi } from "./userApi";

class UserRepository {
  private userApi: UserApi;

  constructor(client: HttpClient) {
    this.userApi = new UserApi(client);
  }

  async getCurrentUser(): Promise<UserResponse> {
    const response = await this.userApi.getCurrentUser();
    return response.payload;
  }
}

const userRepository = new UserRepository(axiosClient);
export default userRepository;
