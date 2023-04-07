import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  label?: string | ReactElement;
  iconLeft?: string | ReactElement;
  className?: string;
  isChecked?: boolean;
  onChange?: () => void;
}
function Checkbox({ label, className, isChecked, iconLeft, onChange }: Props) {
  return (
    <div className={twMerge("flex items-center gap-x-3 ", className)}>
      <input
        onChange={() => onChange && onChange()}
        type="checkbox"
        className="rounded border-text-5"
        checked={isChecked}
        readOnly
      />
      <div className="flex items-center gap-x-2">
        {iconLeft}
        {label}
      </div>
    </div>
  );
}

export default Checkbox;
