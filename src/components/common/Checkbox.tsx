import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  keyInput?: string;
  label?: string | ReactElement;
  iconLeft?: string | ReactElement;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  isChecked?: boolean;
  onChange?: (value: boolean, key: string) => void;
}
function Checkbox({
  label,
  className,
  labelClassName,
  inputClassName,
  isChecked,
  iconLeft,
  onChange,
  keyInput,
}: Props) {
  return (
    <div className={twMerge("flex items-center gap-x-3 ", className)}>
      <input
        onChange={e => onChange && onChange(e.target.checked, keyInput ?? "")}
        type="checkbox"
        className={twMerge("cursor-pointer rounded border-text-5", inputClassName)}
        checked={isChecked}
        readOnly
        id={keyInput}
      />
      <label htmlFor={keyInput} className={twMerge("flex cursor-pointer items-center gap-x-2", labelClassName)}>
        {iconLeft}
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
