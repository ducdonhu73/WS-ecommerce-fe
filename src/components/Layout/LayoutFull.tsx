import React from "react";
import { twMerge } from "tailwind-merge";

interface LayoutFullProps {
  className?: string;
  children: React.ReactNode;
}

const LayoutFull = ({ className, children }: LayoutFullProps) => {
  return (
    <div className={twMerge("layout-full", className)}>
      <div className="layout-padding">{children}</div>
    </div>
  );
};

export default LayoutFull;
