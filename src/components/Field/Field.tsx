import { FieldProps, Field as FormikField } from "formik";
import { ReactElement, useState } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps {
  type?: "input" | "textarea" | "select";
  inputType?: string;
  name: string;
  label?: string;
  // placeholder?: string;
  icon?: ReactElement;
  onIconClicked?: () => void;
  disabled?: boolean;
  size?: "small" | "medium";
  children?: React.ReactNode;
}

const Field = ({ inputType = "text", name, label, disabled, size = "medium", icon, onIconClicked }: InputProps) => {
  let height = 56;
  switch (size) {
    case "small":
      height = 40;
      break;
    case "medium":
    default:
      height = 56;
      break;
  }

  return (
    <FormikField
      id={name}
      name={name}
      type="password"
      // component={type === "input" ? FormikInput : type === "textarea" ? FormikTextArea : "select"}
    >
      {({ field, form, meta }: FieldProps) => {
        const isError = meta.touched && meta.error;
        return (
          <div>
            <div className="relative z-0 mt-6">
              <input
                {...field}
                type={inputType}
                placeholder={label}
                className={twMerge(
                  "peer w-full appearance-none rounded border-black/[0.23] bg-transparent text-black/[0.87] placeholder:text-transparent",
                  "focus:border-secondary-3 focus:outline-none",
                  "hover:border-black",
                  "disabled:text-black/[0.38] disabled:hover:border-black/[0.23]",
                  isError && "border-error hover:border-error focus:border-error",
                  `h-[${height}px]`,
                )}
                disabled={disabled}
              />
              <label
                htmlFor={name}
                className={twMerge(
                  "absolute left-0 top-1/2 z-10 ml-2 transform bg-white px-1 text-sm leading-3 text-black/60 duration-100 ease-linear",
                  "peer-placeholder-shown:-z-10 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base",
                  "peer-focus:z-10 peer-focus:ml-2 peer-focus:px-1 peer-focus:text-sm peer-focus:leading-3 peer-focus:text-secondary-3",
                  "peer-hover:text-secondary-4 peer-disabled:text-black/[0.38]",
                  isError && "text-error peer-hover:text-error peer-focus:text-error",
                  size === "medium" && `-translate-y-[34px] peer-focus:-translate-y-[34px]`,
                  size === "small" && `-translate-y-[26px] peer-focus:-translate-y-[26px]`,
                )}
              >
                {label}
              </label>
              <div className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3" onClick={onIconClicked}>
                {icon}
              </div>
            </div>
            {isError && <p className="m-1 text-xs text-error">{meta.error}</p>}
          </div>
        );
      }}
      {/* {type === "select" && children} */}
    </FormikField>
  );
};

export default Field;
