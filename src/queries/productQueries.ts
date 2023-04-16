import { useMutation, useQuery } from "@tanstack/react-query";
import {
  AuthorizationRequest,
  RegisterRequest,
  VerifyFirebaseRequest,
} from "apis/auth/auth.model";
import authRepository from "apis/auth/authRepository";
import userRepository from "apis/user/userRepository";

import { AppQueryOptions } from "./type";
import { GetAllProductQuery } from "apis/products/product.model";
import productRepository from "apis/products/productRepository";

export const useProduct = () =>
  useMutation(["product", "all"], (request: GetAllProductQuery) =>
    productRepository.getAllProduct(request),
  );

