import { useQueryClient } from "@tanstack/react-query";
import { ApiConfig } from "apis/configs/urlRequestConfig";
import { Role, UserResponse } from "apis/user/user.model";
import { auth } from "../firebase";
import { useVerifyFirebaseToken, useGetCurrentUser } from "queries/sellerQueries";
import { ReactNode, createContext, useCallback, useEffect, useState } from "react";
import {
  AuthCredential,
  AuthError,
  FacebookAuthProvider,
  GoogleAuthProvider,
  fetchSignInMethodsForEmail,
  linkWithCredential,
  onAuthStateChanged,
  signInWithCredential,
  signInWithPopup,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";

type ContextType = {
  user: UserResponse | null;
  login: (token: string) => void;
  logout: () => void;
  isLoggedIn: boolean | undefined;
  signInFirebase: (provider: "gg" | "fb") => void;
  isAdmin: boolean;
};

interface Error {
  error: { message: string };
}

const AuthContext = createContext<ContextType>({} as ContextType);

const AuthProvider = ({ children }: { children?: ReactNode }) => {
  const queryClient = useQueryClient();
  const [user, setUser] = useState<UserResponse | null>(null); // User này sẽ được sử dụng ở tất cả các màn
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
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
    if (userData?.role === Role.ADMIN) setIsAdmin(true);
    if (userData?.role === Role.USER || !isLoggedIn) setIsAdmin(false);
  }, [userData, isLoggedIn]);

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

  const signInFirebase = useCallback(async (providerFirebase: "gg" | "fb") => {
    let provider;
    if (providerFirebase === "gg") provider = new GoogleAuthProvider();
    else {
      provider = new FacebookAuthProvider();
    }
    await signInWithPopup(auth, provider).catch((error: AuthError) => {
      const email = error.customData.email;
      const credential = FacebookAuthProvider.credentialFromError(error);
      if (error.code === "auth/account-exists-with-different-credential" && email && credential) {
        signInWithPopup(auth, new GoogleAuthProvider()).then(user => {
          linkWithCredential(user.user, credential);
        });
      }
    });
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      if (currentUser && "accessToken" in currentUser) {
        verify(
          { token: currentUser.accessToken as string },
          {
            onSuccess: data => {
              const token = data.accessToken;
              login(token);
            },
            onError: async error => {
              await signOut(auth);
              toast((error as Error).error.message);
            },
          },
        );
      }
    });
    return () => {
      unsubscribe();
    };
  }, [onAuthStateChanged]);

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn, signInFirebase, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
