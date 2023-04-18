import { useMutation } from "@tanstack/react-query";
import { GetAllProductQuery } from "apis/products/product.model";
import productRepository from "apis/products/productRepository";

export const useProduct = () =>
  useMutation(["product", "all"], (request: GetAllProductQuery) => productRepository.getAllProduct(request));
