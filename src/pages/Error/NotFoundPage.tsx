import { useAuth } from "hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const NotFoundPage = () => {
  const { isAdmin } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAdmin) navigate("/admin");
  }, [isAdmin]);
  return <div className="flex items-center justify-center pt-44 text-center text-primary">404 Not Found</div>;
};

export default NotFoundPage;
