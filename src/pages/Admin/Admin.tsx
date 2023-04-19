import { Outlet } from "react-router";
import NavAdmin from "./components/NavAdmin/NavAdmin";
import { TextTitle } from "components";
import HeaderDesktop from "components/Layout/Header/HeaderDesktop";

export const Admin = () => {
  return (
    <div className="mr-12">
      <HeaderDesktop admin />
      <div className="">
        <div className="fixed top-0 col-span-1 h-screen min-w-[240px] bg-[#1f2938] pt-20">
          <TextTitle variant="h2" text="Admin" className="mb-10 ml-5 mt-10 text-white" />
          <NavAdmin />
        </div>
        <div className="ml-[300px] mt-28">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
