import { useMutation } from "@tanstack/react-query";
import { GetAllProductQuery, GetProductByIdRequest } from "apis/products/product.model";
import productRepository from "apis/products/productRepository";

export const useProduct = () =>
  useMutation(["product", "all"], (request: GetAllProductQuery) => productRepository.getAllProduct(request));

export const useProductId = () =>
  useMutation(["product", "id"], (request: GetProductByIdRequest) => productRepository.getProductById(request));
