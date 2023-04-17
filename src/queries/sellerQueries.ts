import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AuthorizationRequest, RegisterRequest, VerifyFirebaseRequest } from "apis/auth/auth.model";
import authRepository from "apis/auth/authRepository";
import { UpdateUserRequest } from "apis/user/user.model";
import userRepository from "apis/user/userRepository";

import { AppQueryOptions } from "./type";

export const useLogin = () =>
  useMutation(["user", "login"], (request: AuthorizationRequest) => authRepository.login(request));

export const useRegister = () =>
  useMutation(["user", "register"], (request: RegisterRequest) => authRepository.register(request));

export const useVerifyFirebaseToken = () =>
  useMutation(["user", "loginFirebase"], (request: VerifyFirebaseRequest) => authRepository.verify(request));

export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation(["user", "update"], (request: UpdateUserRequest) => userRepository.updateUser(request), {
    onSuccess: () => {
      queryClient.invalidateQueries(["user", "me"]);
    },
  });
};

// export const useChangePassword = () =>
//   useMutation(["dealer", "changePassword"], (request: ChangePasswordRequest) =>
//     authRepository.resetPassword(request),
//   );

// export const useUploadDocument = () => {
//   const queryClient = useQueryClient();
//   return useMutation(
//     ["dealer", "uploadDocument"],
//     (request: FormData) => authRepository.uploadDocument(request),
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries(["dealer", "me"]);
//       },
//     },
//   );
// };

export const useGetCurrentUser = (options?: AppQueryOptions) =>
  useQuery(["user", "me"], () => userRepository.getCurrentUser(), {
    ...options,
    staleTime: Infinity,
  });
