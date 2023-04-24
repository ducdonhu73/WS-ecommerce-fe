import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

export const listNav = [
  {
    title: "Product",
    href: "product",
  },
  {
    title: "Statistic",
    href: "statistic",
  },
  {
    title: "Order",
    href: "order",
  },
];

const NavAdmin = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="">
      {listNav.map((item, index) => (
        <Link
          key={index}
          to={item.href}
          className={twMerge(
            " flex w-full items-center rounded border-[#fff]  px-2 py-[14px] pl-2 hover:bg-[#364666]",
            active === index && "bg-[#364151]",
          )}
          onClick={() => setActive(index)}
        >
          <div className={twMerge("ml-8 items-center text-base font-normal text-white")}>{item.title}</div>
        </Link>
      ))}
    </div>
  );
};

export default NavAdmin;
