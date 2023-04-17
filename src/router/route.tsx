import AboutUs from "pages/AboutUs/AboutUs";
import AccountLayout from "pages/Account/AccountLayout";
import BiddingDetail from "pages/Account/Detail/BiddingDetail/BiddingDetail";
import OfferDetail from "pages/Account/Detail/OfferDetail/OfferDetail";
import Offers from "pages/Account/Offers/Offers";
import Profile from "pages/Account/Profile";
import ContactUsPage from "pages/ContactUs";
import NotFoundPage from "pages/Error/NotFoundPage";
import FAQPage from "pages/FAQ";
import SignIn from "pages/SignInPage";
import SignUp from "pages/SignUpPage";
import SupportPage from "pages/Support";
import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../pages/HomePage";
import ProtectedRoutes from "./ProtectedRoutes";

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
                path: "offers",
                element: <Offers />,
              },
              {
                path: "offer-detail/:id",
                element: <OfferDetail />,
              },
              {
                path: "bidding/:id",
                element: <BiddingDetail />,
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
        path: "login",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

export default routes;
