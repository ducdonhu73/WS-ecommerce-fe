import { twMerge } from "tailwind-merge";
import { useField } from "formik";
import { useState, useEffect, useRef } from "react";
import { useFormikContext } from "formik";
interface Props {
  label: string;
  id?: string;
  className?: string;
  isChecked?: boolean;
  name?: string;
  value?: string | number | boolean;
  onChange?: () => void;
}
function RadioFormik({ className, label, id, isChecked, onChange, name, value }: Props) {
  const [field] = useField(name ?? " ");

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <label
        htmlFor={id}
        className={twMerge("flex cursor-pointer items-center gap-x-2", className)}
        onClick={onChange && onChange}
        aria-hidden="true"
      >
        <input
          type="radio"
          className="cursor-pointer rounded-full border-2 border-text-5 p-2 "
          value={value?.toString()}
          readOnly
          checked={isChecked}
          onClick={() => inputRef.current?.click()}
        />
        <input
          ref={inputRef}
          className="hidden"
          {...field}
          id={id}
          type="radio"
          name={name}
          value={value?.toString()}
        />
        <div className={"cursor-pointer " + (isChecked ? "text-primary" : "text-text-6")}>{label}</div>
      </label>
    </>
  );
}

export default RadioFormik;
