import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { IconChevronDown } from "assets/images";

interface FAQSectionProps {
  title: string;
  children: string;
}

const FAQSection = ({ title, children }: FAQSectionProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-5 border-b-[0.5px] border-text-3 pb-5">
      <div className="flex cursor-pointer items-center justify-between gap-9" onClick={() => setOpen(pre => !pre)}>
        <span className="text-lg font-semibold leading-7 text-text-9">{title}</span>
        <div className={twMerge("rotate-0 transition-all duration-300", open && "rotate-180")}>
          <IconChevronDown color={open ? "#ef4b4b" : "#090A0A"} />
        </div>
      </div>
      <div
        className={twMerge(
          "invisible mt-0 max-h-0 overflow-hidden text-text-9 opacity-0 transition-all duration-300",
          open && "visible mt-4 max-h-[500px] opacity-100",
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default FAQSection;
