import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  listNav: string[];
  className?: string;
  indexActive?: number;
}

export const NavAccount = ({listNav, className, indexActive=0}: Props) => {
  const [active, setActive] = useState(indexActive-1);
  return (
    <div className={twMerge("h-[188px] border-[1px] border-[#CCCCCC] rounded-md grid grid-rows-3", className)}>
      {
        listNav.map((item, index) => 
          <div key={index} 
            className={twMerge("flex items-center hover:bg-primary-1 my-[5px]",active===index&&"border-l-8 border-[#EF4B4B] bg-[#F7F7F7]")}
            onClick={() => setActive(index)}
          >
            <div className="items-center ml-8">
              {item}
            </div>
          </div>
        )
      }
    </div>
  )
}