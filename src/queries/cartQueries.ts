import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AddToCart, OrderRequest, RemoveFromCart } from "apis/carts/cart.model";
import cartRepository from "apis/carts/cartRepository";

export const useCarts = () => useQuery(["cart", "all"], () => cartRepository.getAllCart());

export const useAddToCart = () => {
  const queryClient = useQueryClient();
  return useMutation(["cart", "add"], (request: AddToCart) => cartRepository.addToCart(request), {
    onSuccess: () => {
      queryClient.invalidateQueries(["cart", "all"]);
    },
  });
};

export const useRemoveCart = () => {
  const queryClient = useQueryClient();
  return useMutation(["cart", "remove"], (request: RemoveFromCart) => cartRepository.removeFromCart(request), {
    onSuccess: () => {
      queryClient.invalidateQueries(["cart", "all"]);
    },
  });
};

export const useOrder = () => {
  const queryClient = useQueryClient();
  return useMutation(["order", "payment"], (request: OrderRequest) => cartRepository.order(request), {
    onSuccess: () => {
      queryClient.invalidateQueries(["cart", "all"]);
    },
  });
};
