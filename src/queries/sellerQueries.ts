import { useMutation, useQuery } from "@tanstack/react-query";
import {
  AuthorizationRequest,
  RegisterRequest,
  VerifyFirebaseRequest,
} from "apis/auth/auth.model";
import authRepository from "apis/auth/authRepository";
import userRepository from "apis/user/userRepository";

import { AppQueryOptions } from "./type";

export const useLogin = () =>
  useMutation(["seller", "login"], (request: AuthorizationRequest) =>
    authRepository.login(request),
  );

export const useRegister = () =>
  useMutation(["seller", "register"], (request: RegisterRequest) =>
    authRepository.register(request),
  );

export const useVerifyFirebaseToken = () => 
  useMutation(["seller", "loginFirebase"], (request: VerifyFirebaseRequest) => 
    authRepository.verify(request),
  );

// export const useUpdateUser = () =>
//   useMutation(["dealer", "update"], (request: UpdateUserRequest) =>
//     authRepository.updateUser(request),
//   );

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
  useQuery(["seller", "me"], () => userRepository.getCurrentUser(), {
    ...options,
    staleTime: Infinity,
  });
