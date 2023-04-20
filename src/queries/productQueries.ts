import { useMutation } from "@tanstack/react-query";
import {
  DeleteProductRequest,
  GetAllProductQuery,
  GetProductByIdRequest,
  ProductRequest,
  UpdateProductRequest,
} from "apis/products/product.model";
import productRepository from "apis/products/productRepository";

export const useProduct = () =>
  useMutation(["product", "all"], (request: GetAllProductQuery) => productRepository.getAllProduct(request));

export const useProductId = () =>
  useMutation(["product", "id"], (request: GetProductByIdRequest) => productRepository.getProductById(request));

export const useAddProduct = () =>
  useMutation(["product", "add"], (request: ProductRequest) => productRepository.addProduct(request));

export const useDeleteProduct = () =>
  useMutation(["product", "delete"], (request: DeleteProductRequest) => productRepository.deleteProduct(request));

export const useUpdateProduct = () =>
  useMutation(["product", "update"], (request: UpdateProductRequest) => productRepository.updateProduct(request));

export const useUpdateLoad = () =>
  useMutation(["s3", "upload"], (request: FormData) => productRepository.uploadImg(request));
