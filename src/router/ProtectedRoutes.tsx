import { useAuth } from "hooks/useAuth";
import Admin from "pages/Admin";
import NotFoundPage from "pages/Error/NotFoundPage";
import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
  const auth = useAuth();

  return auth.isLoggedIn === undefined || auth.isLoggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};

export const ProtectedRoutesAdmin = () => {
  const { isAdmin } = useAuth();
  return isAdmin ? <Admin /> : <NotFoundPage />;
};

export default ProtectedRoutes;
