export enum SellerStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  DELETED = "deleted",
}

export enum Role {
  ADMIN = "admin",
  USER = "user",
}

export interface Address {
  address?: string;
  city?: string;
  country?: string;
  province?: string;
  postalCode?: string;
}

export interface UserResponse {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  email?: string;
  address?: Address;
  updatedAt: Date;
  createdAt: Date;
  role: Role;
}

export interface UpdateUserRequest {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  address?: Address;
}
