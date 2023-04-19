import { useState } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface Props {
  listNav?: {
    title: string;
    href: string;
  }[];
  className?: string;
  indexActive?: number;
}

export const NavAccount = ({ listNav, className, indexActive = 0 }: Props) => {
  const [active, setActive] = useState(indexActive);
  return (
    <div
      className={twMerge(
        "mt-7 flex justify-evenly overflow-hidden tablet:mt-0 tablet:w-full tablet:flex-col tablet:rounded-md tablet:border-[1px] tablet:border-[#CCCCCC]",
        className,
      )}
    >
      {listNav &&
        listNav.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className={twMerge(
              " flex rounded border border-text-4 py-[6px] px-2 tablet:w-full tablet:items-center tablet:rounded-none tablet:border-[#fff] tablet:py-[14px] tablet:pl-2 tablet:hover:bg-primary-1",
              active === index &&
                "border-l bg-primary active:bg-primary tablet:border-l-8 tablet:border-l-primary tablet:bg-[#F7F7F7] tablet:bg-none tablet:pl-0",
            )}
            onClick={() => setActive(index)}
          >
            <div
              className={twMerge(
                "items-center text-sm font-normal text-text-4 tablet:ml-8 tablet:text-base tablet:text-black",
                active === index && "text-white",
              )}
            >
              {item.title}
            </div>
          </Link>
        ))}
    </div>
  );
};
