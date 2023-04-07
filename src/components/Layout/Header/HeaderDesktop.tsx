import { ArrowDown, IconBell, IconChevronDown, Logo } from "assets/images";
import Avatar from "components/Avatar";
import PrimaryButton from "components/PrimaryButton";
import { useAuth } from "hooks/useAuth";
import { Fragment, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import { listMenu } from "./data";

function HeaderDesktop() {
  const { logout, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [isProfilePopoverVisible, setIsProfilePopoverVisible] = useState(false);

  return (
    <div className="header fixed top-0 left-0 z-10 flex w-full flex-wrap items-center justify-between bg-white py-4 px-9 shadow-[0_2_21_0_rgba(0,0,0,0.15)]">
      <Link to={"/"}>
        <Logo />
      </Link>
      <div className="flex flex-wrap gap-x-36 font-semibold">
        {listMenu.map(menu => {
          return (
            <Fragment key={menu.key}>
              {menu.path ? (
                <NavLink
                  to={menu.path}
                  className={({ isActive }) => twMerge("cursor-pointer hover:text-primary", isActive && "text-primary")}
                >
                  {menu.text}
                </NavLink>
              ) : (
                <div className={twMerge("group relative flex cursor-pointer gap-x-2")}>
                  <div>{menu.text}</div>
                  <div className="relative cursor-pointer px-1.5 py-2">
                    <IconChevronDown />
                    <div className="invisible absolute right-0 top-[calc(100%+12px)] min-w-[128px] overflow-hidden rounded-sm bg-white opacity-0 shadow-2xl transition-opacity group-hover:visible group-hover:opacity-100">
                      {menu.children?.map(child => (
                        <NavLink
                          to={child.path}
                          className={({ isActive }) =>
                            twMerge(
                              "mb-1 block w-full cursor-pointer px-7 py-4 last:mb-0 hover:bg-primary hover:text-white",
                              isActive && "bg-primary text-white",
                            )
                          }
                          key={child.key}
                        >
                          {child.text}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                  <div className="absolute top-[100%] right-0 h-3 w-full bg-transparent"></div>
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
      {!isLoggedIn ? (
        <div className="flex">
          <PrimaryButton
            text="Sign in"
            className="w-[132px] border-none bg-transparent px-8 text-text-5"
            onClick={() => navigate("/login")}
          />
          <PrimaryButton text="Sign up" className="w-[132px] px-8" onClick={() => navigate("/sign-up")} />
        </div>
      ) : (
        <div className="relative">
          <div onClick={() => setIsProfilePopoverVisible(prev => !prev)}>
            <div className="flex cursor-pointer select-none flex-row items-center gap-x-3">
              <Avatar image="http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQTBIkxproxJHBsj2ZOkeFr3CYyVJjrfW8qcovw9whTrkRjsqYnBRlprpmyAknfOsug43oiT9iqS9cJe6s" />
              <ArrowDown />
            </div>
            <div
              className={twMerge(
                "absolute right-[10%] top-[calc(100%+14px)] hidden w-[200px] rounded-md bg-white shadow-xl",
                isProfilePopoverVisible && "block",
              )}
            >
              <Link to={"/account/profile"}>
                <div className={twMerge("border-b-[1px] border-text-3 py-4 text-center")}>Profile</div>
              </Link>
              <div
                className={twMerge("cursor-pointer py-4 text-center")}
                onClick={() => {
                  navigate("/");
                  logout();
                }}
              >
                Log out
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default HeaderDesktop;
