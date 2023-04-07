import { Address } from "models";

export enum SellerStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  DELETED = 'deleted',
}
export interface User {
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  email?: string;
  password: string;
  status: SellerStatus;
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
}
