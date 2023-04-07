import { ArrowDown, Logo, IconBar, IconClose, IconChevronDown } from "assets/images";
import Avatar from "components/Avatar";
import OutsideClickWrapper from "components/OutsideClickWrapper";
import { useAuth } from "hooks/useAuth";
import { Fragment, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import { listMenuMobileWithoutLogin } from "./data";

const HeaderMobileTablet = () => {
  const { logout, isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [isProfilePopoverVisible, setIsProfilePopoverVisible] = useState(false);
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState<{
    [key: string]: boolean;
  }>({
    more: false,
  });

  const listMenuMobile = listMenuMobileWithoutLogin.filter(menu =>
    !isLoggedIn ? true : menu.key !== "signIn" && menu.key !== "signUp",
  );

  return (
    <div className="header fixed top-0 left-0 z-10 flex h-[68px] w-full flex-wrap items-center justify-between bg-white py-2.5 px-6 shadow-[0_2_21_0_rgba(0,0,0,0.15)]">
      <div className="cursor-pointer">
        <div onClick={() => setShowMenuMobile(true)}>
          <IconBar />
        </div>
      </div>
      <div className="fixed">
        <OutsideClickWrapper onClickOutside={() => setShowMenuMobile(false)}>
          <div
            className={twMerge(
              "fixed top-0 left-0 z-50 min-h-screen w-[292px] translate-x-[-100%] bg-white pt-5 shadow-2xl transition-all duration-300 ease-in-out",
              showMenuMobile && "translate-x-0",
            )}
          >
            <div className="mx-6 flex items-center justify-between">
              <div className="inline-block cursor-pointer p-1" onClick={() => setShowMenuMobile(false)}>
                <IconClose />
              </div>
              <div>
                <Logo />
              </div>
            </div>
            <div className="mx-6 my-8 border-b border-text-5"></div>
            <div className="flex flex-col">
              {listMenuMobile.map(menu => {
                return (
                  <Fragment key={menu.key}>
                    {menu.path ? (
                      <NavLink
                        to={menu.path}
                        className={({ isActive }) =>
                          twMerge("cursor-pointer py-4 px-6 text-lg", isActive && "bg-primary text-white")
                        }
                        onClick={() => setShowMenuMobile(false)}
                      >
                        {menu.text}
                      </NavLink>
                    ) : (
                      <div
                        className={twMerge("cursor-pointer py-4 px-6 text-lg")}
                        onClick={() =>
                          setShowSubMenu({
                            ...showSubMenu,
                            [menu.key]: !showSubMenu[menu.key],
                          })
                        }
                      >
                        <div className="flex items-center justify-between">
                          <div>{menu.text}</div>
                          <div className={twMerge("rotate-0 transition-all", showSubMenu[menu.key] && "rotate-180")}>
                            <IconChevronDown color={showSubMenu[menu.key] ? "#ef4b4b" : undefined} />
                          </div>
                        </div>
                        <div
                          className={twMerge(
                            "invisible max-h-[0px] opacity-0 transition-all duration-300",
                            showSubMenu[menu.key] &&
                              "visible max-h-[1000px] pt-8 opacity-100 transition-all duration-300",
                          )}
                        >
                          {menu.children?.map(child => (
                            <Link
                              key={child.key}
                              to={child.path}
                              className="block border-l-2 border-text-3 py-4 pl-10 pr-6 text-lg"
                              onClick={() => {
                                setShowSubMenu({
                                  ...showSubMenu,
                                  [menu.key]: false,
                                });
                                setShowMenuMobile(false);
                              }}
                            >
                              {child.text}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </Fragment>
                );
              })}
            </div>
          </div>
        </OutsideClickWrapper>
        <div
          className={twMerge(
            "invisible fixed top-0 bottom-0 left-0 right-0 z-[20] bg-[rgba(0,0,0,0.5)] opacity-0 transition-opacity duration-300 ease-in-out",
            showMenuMobile && "visible opacity-100",
          )}
          onClick={() => setShowMenuMobile(false)}
        ></div>
      </div>
      <Link to={"/"}>
        <Logo />
      </Link>
      {!isLoggedIn ? (
        <div></div>
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
};

export default HeaderMobileTablet;
