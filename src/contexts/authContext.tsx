import { useQueryClient } from "@tanstack/react-query";
import { ApiConfig } from "apis/configs/urlRequestConfig";
import { UserResponse } from "apis/user/user.model";
import { auth } from "../firebase";
import { useVerifyFirebaseToken, useGetCurrentUser } from "queries/sellerQueries";
import { ReactNode, createContext, useCallback, useEffect, useState } from "react";
import { FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";


type ContextType = {
  user: UserResponse | null;
  login: (token: string) => void;
  logout: () => void;
  isLoggedIn: boolean | undefined;
  signInFirebase: (provider: "gg"|"fb") => void;
};

const AuthContext = createContext<ContextType>({} as ContextType);

const AuthProvider = ({ children }: { children?: ReactNode }) => {
  const queryClient = useQueryClient();
  const [user, setUser] = useState<UserResponse | null>(null); // User này sẽ được sử dụng ở tất cả các màn
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
  const { data: userData } = useGetCurrentUser({ enabled: isLoggedIn != undefined && isLoggedIn });
  const { mutate: verify } = useVerifyFirebaseToken();

  useEffect(() => {
    // Lấy token từ local storage
    const token = localStorage.getItem("token");

    // Verify token
    if (!token) {
      setIsLoggedIn(false);
      return;
    }

    // Set access token vào từng API
    ApiConfig.getInstance().accessToken = token;
    setIsLoggedIn(true);
  }, []);

  useEffect(() => {
    // Gọi API User => Set user info để sử dụng ở tất cả các màn
    if (userData) {
      setUser(userData);
    }
  }, [userData]);

  const login = useCallback((token: string) => {
    localStorage.setItem("token", token);
    ApiConfig.getInstance().accessToken = token;
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(async () => {
    localStorage.removeItem("token");
    ApiConfig.getInstance().accessToken = null;
    setUser(null);
    setIsLoggedIn(false);
    await queryClient.invalidateQueries({ refetchType: "none" });
    await signOut(auth);
  }, []);

  const signInFirebase = useCallback(async (providerFirebase: 'gg'|'fb') => {
    let provider;
    if (providerFirebase === 'gg') provider = new GoogleAuthProvider();
    else provider = new FacebookAuthProvider();
    await signInWithPopup(auth, provider)
    // .then((result) => {
    //   const credential = providerFirebase === 'gg' ?
    //     GoogleAuthProvider.credentialFromResult(result)
    //     :
    //     FacebookAuthProvider.credentialFromResult(result)
    //   if (credential) {
    //     console.log(credential.idToken)
    //     verify(
    //       { token: credential.idToken as string + (credential.accessToken as string)},
    //       {
    //         onSuccess: data => {
    //           const token = data.accessToken;
    //           login(token);
    //         },
    //         onError: async () => {
    //           await signOut(auth);
    //         }
    //       },
    //     )
    //   }
    // })
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser && "accessToken" in currentUser) {
        verify(
          { token: currentUser.accessToken as string},
          {
            onSuccess: data => {
              const token = data.accessToken;
              login(token);
            },
            onError: async () => {
              await signOut(auth);
            }
          },
        )
      }
    });
    return () => {
      unsubscribe();
    };
  }, [onAuthStateChanged]);

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn, signInFirebase }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
