import AboutUs from "pages/AboutUs/AboutUs";
import AccountLayout from "pages/Account/Account/AccountLayout";
import Profile from "pages/Account/Account/Profile/Profile";
import ContactUsPage from "pages/ContactUs";
import NotFoundPage from "pages/Error/NotFoundPage";
import FAQPage from "pages/FAQ";
import SignIn from "pages/SignInPage";
import SignUp from "pages/SignUpPage";
import SupportPage from "pages/Support";
import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../pages/HomePage";
import ProtectedRoutes, { ProtectedRoutesAdmin } from "./ProtectedRoutes";
import Product from "pages/Product";
import ProductDetail from "pages/ProductDetail";
import ProductAdmin from "pages/Admin/ProductAdmin";
import HistoryAdmin from "pages/Admin/HistoryAdmin/HistoryAdmin";
import OrderAdmin from "pages/Admin/OrderAdmin/OrderAdmin";
import ProductDetailAdmin from "pages/Admin/ProductDetailAdmin/ProductDetailAdmin";
import Test from "pages/test";
import Cart from "pages/Cart";

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
        path: "sell-my-car",
        element: <Home />,
      },
      {
        path: "test",
        element: <Test />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUsPage />,
      },
      {
        path: "faq",
        element: <FAQPage />,
      },
      {
        path: "support",
        element: <SupportPage />,
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
        children: [
          {
            path: "account",
            element: <AccountLayout />,
            children: [
              {
                index: true,
                element: <Profile />,
              },
              {
                index: true,
                path: "history",
                element: <HistoryAdmin />,
              },
            ],
          },
        ],
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "admin",
    element: <ProtectedRoutesAdmin />,
    children: [
      {
        path: "product",
        element: <ProductAdmin />,
      },
      {
        path: "product/:id",
        element: <ProductDetailAdmin />,
      },
      {
        path: "statistic",
        element: <HistoryAdmin />,
      },
      {
        path: "order",
        element: <OrderAdmin />,
      },
    ],
  },
]);

export default routes;
