import { useAuth } from "hooks/useAuth";
import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
  const auth = useAuth();

  return auth.isLoggedIn === undefined || auth.isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
