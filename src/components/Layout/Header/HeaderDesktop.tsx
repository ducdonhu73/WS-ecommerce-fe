import { ArrowDown, IconBell, IconCart, IconChevronDown } from "assets/images";
import PrimaryButton from "components/PrimaryButton";
import { useAuth } from "hooks/useAuth";
import initials from "initials";
import { Fragment, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import { listMenu } from "./data";
import Cart from "../Cart";

interface Props {
  admin?: boolean;
}

export const notificationMessages: { isRead: boolean; title: string }[] = [
  {
    isRead: true,
    title: "day la thong bao",
  },
  {
    isRead: true,
    title: "day la thong bao",
  },
  {
    isRead: true,
    title: "day la thong bao",
  },
  {
    isRead: true,
    title: "day la thong bao",
  },
  {
    isRead: true,
    title: "day la thong bao",
  },
  {
    isRead: true,
    title: "day la thong bao",
  },
  {
    isRead: true,
    title: "day la thong bao",
  },
  {
    isRead: true,
    title: "day la thong bao",
  },
];

function HeaderDesktop({ admin = false }: Props) {
  const { logout, isLoggedIn, user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [isProfilePopoverVisible, setIsProfilePopoverVisible] = useState(false);
  const [displayNotification, setDisplayNotification] = useState(false);
  const [displayCart, setDisplayCart] = useState(false);

  return (
    <div className="header fixed left-0 top-0 z-10 flex w-full flex-wrap items-center justify-between bg-white px-9 py-4 shadow-[0_2_21_0_rgba(0,0,0,0.15)]">
      <Link className="text-[32px] font-black text-[red]" to={"/"}>
        N7
      </Link>
      <div className="flex flex-wrap gap-x-[92px] font-medium text-text-5 ">
        {admin ? (
          <div></div>
        ) : (
          listMenu.map((menu, index) => {
            return (
              <Fragment key={menu.key}>
                {menu.scrollTo && (
                  <div
                    key={index}
                    className={twMerge("cursor-pointer hover:text-primary")}
                    onClick={async () => {
                      await navigate("/");
                      if (menu.scrollTo) {
                        const howGearWorksSection = document.querySelector(menu.scrollTo);
                        if (howGearWorksSection) {
                          howGearWorksSection.scrollIntoView({ behavior: "smooth" });
                        }
                      }
                    }}
                  >
                    {menu.text}
                  </div>
                )}
                {menu.path && (
                  <NavLink
                    to={menu.path}
                    className={({ isActive }) =>
                      twMerge("cursor-pointer hover:text-primary", isActive && "text-primary")
                    }
                  >
                    {menu.text}
                  </NavLink>
                )}
                {menu.children && (
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
                    <div className="absolute right-0 top-[100%] h-3 w-full bg-transparent"></div>
                  </div>
                )}
              </Fragment>
            );
          })
        )}
      </div>
      {!isLoggedIn ? (
        <div className="flex">
          <PrimaryButton
            text="Sign in"
            className="w-[132px] border-none bg-transparent px-8 text-text-5"
            onClick={() => navigate("/sign-in")}
          />
          <PrimaryButton text="Sign up" className="w-[132px] px-8" onClick={() => navigate("/sign-up")} />
        </div>
      ) : (
        <div className="relative flex">
          <div className="mr-1 translate-y-2">
            <div onClick={() => setDisplayCart(pre => !pre)}>
              {!admin && <img className="h-8" src={IconCart} alt="" />}
            </div>
            <div
              onClick={() => {
                navigate("/cart");
                setDisplayCart(false);
              }}
            >
              <Cart display={displayCart} />
            </div>
          </div>
          <div className="flex items-center text-center">
            <div className="mx-5 cursor-pointer text-[150px]" onClick={() => setDisplayNotification(pre => !pre)}>
              <IconBell />
              <div className="absolute right-[70%] h-[24px] w-12 bg-transparent"></div>
            </div>
            {displayNotification && (
              <div>
                <div className="absolute right-[57%] top-[80%] block border-[12px] border-[transparent] border-b-[#4D4C4C]"></div>
                <div className="scroll-bar absolute right-[27%] top-[calc(100%+14px)] h-96 w-[377px] flex-col overflow-y-scroll rounded-md bg-text-9 text-white">
                  {notificationMessages?.map((item, index) => (
                    <div
                      key={index}
                      className={twMerge(
                        "flex cursor-pointer items-center gap-4 border-t-[1px] border-[#666666] p-3 first:border-0 hover:bg-[#696868]",
                        !item.isRead && "bg-[#675C5C]",
                      )}
                    >
                      <div className="flex flex-col justify-between">
                        <p className="mb-4 text-sm">{item.title}</p>
                        <p className="text-xs text-text-5">2023</p>
                      </div>
                    </div>
                  ))}
                  {/* </ul> */}
                  <Link
                    to="/notification"
                    className="cursor-pointer border-t border-text-7 py-3 text-center text-xs text-primary"
                  >
                    View all notification
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div onClick={() => setIsProfilePopoverVisible(prev => !prev)}>
            <div className="flex cursor-pointer select-none flex-row items-center gap-x-3">
              <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[50%] bg-text-1">
                <span className="select-none text-lg font-bold uppercase text-primary">
                  {initials(`${user?.firstName} ${user?.lastName}`)}
                </span>
              </div>
              <ArrowDown />
            </div>
            <div
              className={twMerge(
                "absolute right-[10%] top-[calc(100%+14px)] hidden w-[200px] rounded-md bg-white shadow-xl",
                isProfilePopoverVisible && "block",
              )}
            >
              {isAdmin ? (
                <div>
                  <Link to={"/admin"}>
                    <div className={twMerge("border-b-[1px] border-text-3 py-4 text-center")}>Admin page</div>
                  </Link>
                  <Link to={"/account"}>
                    <div className={twMerge("border-b-[1px] border-text-3 py-4 text-center")}>Profile</div>
                  </Link>
                </div>
              ) : (
                <Link to={"/account"}>
                  <div className={twMerge("border-b-[1px] border-text-3 py-4 text-center")}>Profile</div>
                </Link>
              )}
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
