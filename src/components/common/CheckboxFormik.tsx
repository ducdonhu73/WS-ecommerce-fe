import { ReactElement, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { useField } from "formik";
interface Props {
  keyInput?: string;
  label?: string | ReactElement;
  iconLeft?: string | ReactElement;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  isChecked?: boolean;
  name?: string;
  onChange?: (value: boolean, key: string) => void;
  value?: string;
}
function CheckboxFormik({
  label,
  className,
  labelClassName,
  inputClassName,
  isChecked,
  iconLeft,
  onChange,
  keyInput,
  name,
  value,
}: Props) {
  const [field] = useField(name ?? " ");
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.checked, keyInput ?? " ");
  };

  return (
    <div className={twMerge("flex items-center gap-x-3 ", className)}>
      <input
        {...field}
        onChange={onChange ? handleChangeInput : field.onChange}
        type="checkbox"
        className={twMerge("cursor-pointer rounded border-text-5", inputClassName)}
        checked={isChecked}
        readOnly
        id={keyInput}
        value={value}
        name={name}
      />
      <label htmlFor={keyInput} className={twMerge("flex cursor-pointer items-center gap-x-2", labelClassName)}>
        {iconLeft}
        {label}
      </label>
    </div>
  );
}

export default CheckboxFormik;
