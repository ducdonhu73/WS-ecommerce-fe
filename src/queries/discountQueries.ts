import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CreateDiscountRequest, DeleteDiscountRequest } from "apis/discounts/discount.model";
import discountRepository from "apis/discounts/discountRepository";

export const useDiscounts = () => useQuery(["discount", "all"], () => discountRepository.getAllDiscount());

export const useDiscountM = () => useMutation(["discountM", "all"], () => discountRepository.getAllDiscount());

export const useDiscount = () =>
  useMutation(["discount", "id"], (request: DeleteDiscountRequest) => discountRepository.getDiscount(request));

export const useCreateDiscount = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ["discount", "add"],
    (request: CreateDiscountRequest) => discountRepository.createDiscount(request),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["discount", "all"]);
      },
    },
  );
};

export const useDeleteDiscount = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ["discount", "remove"],
    (request: DeleteDiscountRequest) => discountRepository.deleteDiscount(request),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["discount", "all"]);
      },
    },
  );
};
