import { twMerge } from "tailwind-merge";
interface MenuProps {
  className?: string;
  menuItems: { title: string; id: string }[];
  onClick?: (type: string) => void;
}

function Menu({ className, menuItems, onClick }: MenuProps) {
  const handleSelectItem = (type: string) => {
    if (onClick) onClick(type);
  };

  return (
    <ul
      className={twMerge(
        "absolute left-0 rounded bg-[var(--color-white)] shadow-lg before:absolute before:top-[-15px] before:z-0 before:h-[30px] before:w-full before:bg-[transperent] before:content-['']",
        className,
      )}
    >
      {menuItems.map((item, index) => (
        <li
          key={index}
          className="relative z-[2] w-full cursor-pointer py-2 px-4 text-sm font-normal text-[var(--color-text-07)] hover:bg-[rgba(0,0,0,0.04)]"
          role="menuitem"
          onClick={() => handleSelectItem(item.id)}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
}

export default Menu;
