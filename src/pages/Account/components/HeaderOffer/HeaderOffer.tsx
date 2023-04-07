import { useState, useCallback } from "react";

interface HeaderProps {
  listTitle: { title: string }[];
  changeContent?: (type: number) => void;
}

function Header({ listTitle, changeContent }: HeaderProps) {
  const [selectTab, setSelectTab] = useState<number>(0);

  const handleChangeTab = useCallback(
    (type: number) => {
      if (changeContent) changeContent(type);
      setSelectTab(type);
    },
    [selectTab],
  );

  return (
    <div className="flex w-full">
      {listTitle.map((item, index) => {
        return (
          <div
            key={index}
            className={`flex flex-1 justify-center border-b-[1px] border-solid border-[var(--color-text-04)] pb-[15px]
            ${selectTab === index ? "border-b-[var(--color-primary)] " : ""}`}
          >
            <span
              onClick={() => handleChangeTab(index)}
              className={`w-full cursor-pointer text-center text-[var(${
                selectTab === index ? "--color-primary" : ""
              })] `}
            >
              {item.title}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Header;
