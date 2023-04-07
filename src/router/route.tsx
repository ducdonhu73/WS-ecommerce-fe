import CarValuationPage from "pages/CarValuation/CarValuationPage";
import NotFoundPage from "pages/Error/NotFoundPage";
import SignIn from "pages/SignInPage";
import SignUp from "pages/SignUpPage";
import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../pages/HomePage";
import ProtectedRoutes from "./ProtectedRoutes";
import AccountInfo from "pages/AccountInfo";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "car-valuation",
        element: <CarValuationPage />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        element: <ProtectedRoutes />,
        children: [],
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
      {
        path: "login",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp/>
      },
      {
        path: "account",
        children: [
          {
            path: "profile",
            element: <AccountInfo />
          }
        ]
      },
    ],
  },
]);

export default routes;
