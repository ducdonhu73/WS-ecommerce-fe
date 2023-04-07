import { Outlet, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";

function Layout() {
  const listHidenFooter = ["signUp", "login"];
  const path = useLocation().pathname.split("/")[1];

  const isShowFooter = () => {
    return !listHidenFooter.includes(path);
  };
  const isHomePage = path === "";
  return (
    <>
      <Header />
      <div className={twMerge("layout-padding min-h-screen bg-[#fff]")}>
        <Outlet />
      </div>
      {isShowFooter() && <Footer />}
    </>
  );
}
export default Layout;
