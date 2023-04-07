export interface AuthorizationRequest {
  email: string;
  password: string;
}

export interface AuthorizationResponse {
  accessToken: string;
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  email: string;
}

export interface UpdateUserRequest {
  firstName?: string;
  lastName?: string;
  email?: string;
}

export interface VerifyFirebaseRequest {
  token: string;
}
