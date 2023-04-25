import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AddCategoryRequest, DeleteCategoryRequest, GetCategoryByIdRequest, UpdateCategoryRequest } from "apis/categories/category.model";
import categoryRepository from "apis/categories/categoryRepository";

export const useCategories = () => useQuery(["category", "all"], () => categoryRepository.getAllCategory());

export const useAddCategory = () => {
  const queryClient = useQueryClient();
  return useMutation(["category", "add"], (request: AddCategoryRequest) => categoryRepository.addCategory(request), {
    onSuccess: () => {
      queryClient.invalidateQueries(["category", "all"]);
    },
  });
};

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ["category", "delete"],
    (request: DeleteCategoryRequest) => categoryRepository.deleteCategory(request),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["category", "all"]);
      },
    },
  );
};

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation(["category", "update"], (request: UpdateCategoryRequest) => categoryRepository.updateCategory(request), {
    onSuccess: () => {
      queryClient.invalidateQueries(["category", "all"]);
    },
  });
};

export const useCategoryId = () => {
  const queryClient = useQueryClient();
  return useMutation(["category", "id"], (request: GetCategoryByIdRequest) => categoryRepository.getCategoryById(request), {
    onSuccess: () => {
      queryClient.invalidateQueries(["category", "all"]);
    },
  });
};

