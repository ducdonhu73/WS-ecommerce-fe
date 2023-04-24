import { useMutation } from "@tanstack/react-query";
import { OrderRequest } from "apis/orders/order.model";
import orderRepository from "apis/orders/orderRepository";

export const useOrder = () => {
  return useMutation(["order", "all"], () => orderRepository.getAllOrder());
};

export const useAcceptOrder = () => {
  return useMutation(["order", "accept"], (request: OrderRequest) => orderRepository.acceptOrder(request));
};

export const useRejectOrder = () => {
  return useMutation(["order", "reject"], (request: OrderRequest) => orderRepository.rejectOrder(request));
};
