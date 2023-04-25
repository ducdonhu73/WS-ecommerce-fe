import { useState } from "react";
import { IconFilter, IconSort } from "assets/images/offerList";
import { PrimaryButton } from "components";
import OutsideClickWrapper from "components/OutsideClickWrapper";
import Menu from "../Menu";

interface FilterButtonProps {
  title: string;
  className?: string;
  filterType: string;
  menu?: {
    title: string;
    id: string;
  }[];
  onClick?: (type?: string) => void;
}

function FilterButton({ title, menu, onClick, filterType, className }: FilterButtonProps) {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const hanldeShowMenu = () => {
    setShowMenu(pre => !pre);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const handleSelectItem = (type?: string) => {
    if (onClick) onClick(type);
    setShowMenu(false);
  };

  return (
    <div>
      <OutsideClickWrapper onClickOutside={handleCloseMenu}>
        <div className="relative z-[1]">
          <PrimaryButton
            className={`w-fit border-[var(--color-text-02)] px-4 text-[14px] hover:bg-[none] ${
              showMenu ? "bg-[var(--color-primary)] text-[var(--color-white)]" : "text-[var(--color-text-05)]"
            }`}
            buttonType="button"
            text={title}
            type="outline"
            icon={
              filterType === "category" ? (
                <IconFilter color={showMenu ? "#fff" : "#F37C7C"} />
              ) : (
                <IconSort color={showMenu ? "#fff" : "#F37C7C"} />
              )
            }
            onClick={() => hanldeShowMenu()}
          />
          {menu && showMenu && (
            <Menu
              onClick={handleSelectItem}
              menuItems={menu}
              className={`top-[48px] left-[-28px] w-[114px] ${className}`}
            />
          )}
        </div>
      </OutsideClickWrapper>
    </div>
  );
}

export default FilterButton;
