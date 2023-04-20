import { EyeIcon, EyeOff } from "assets/images";
import { InputTypeModel } from "models";
import { BaseSyntheticEvent, useCallback, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export interface PropsInput {
  data: InputTypeModel;
  backgroundColor?: string;
  containerClassName?: string;
  className?: string;
  isRequired?: boolean;
  onIcon?: () => void;
  onChange?: (index: number, e: BaseSyntheticEvent) => void;
  onBlur?: (e: BaseSyntheticEvent, data: InputTypeModel, index: number) => void;
  value?: string | number;
  defaultValue?: string | number;
  disabled?: boolean;
  err?: string;
  index?: number;
}

function InputType({
  data,
  backgroundColor = "var(--color-background)",
  containerClassName,
  className,
  isRequired = true,
  onIcon,
  onChange,
  onBlur,
  value,
  defaultValue,
  disabled,
  err = "",
  index = -1,
}: PropsInput) {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const { isPassword, label, id, icon, max, min } = data;

  const _onIcon = useCallback(() => {
    onIcon && onIcon();
    isPassword && setShow(prev => !prev);
  }, [onIcon, isPassword]);

  useEffect(() => {
    setError(err);
  }, [err]);

  return (
    <div className={containerClassName}>
      <fieldset
        className={twMerge(
          "flex h-14 items-center rounded border border-text-5 text-text-3",
          className,
          error && "border-[red]",
        )}
      >
        <legend className={twMerge("ml-3 px-1 text-[17px]", error && "text-[#F40202]")}>{label}</legend>
        <div className={twMerge("flex w-full pr-3", error && "text-[#F40202]")}>
          <input
            disabled={disabled}
            defaultValue={defaultValue}
            value={value}
            onChange={e => onChange && onChange(index, e)}
            required={isRequired}
            id={id}
            className="w-full rounded border-0 pb-2  pl-4 pr-1 pt-0 text-[#4D4C4C]"
            type={!show && isPassword ? "password" : data.typeInput}
            style={{ backgroundColor }}
            onInvalid={e => onBlur && onBlur(e, data, index)}
            onBlur={e => onBlur && onBlur(e, data, index)}
            maxLength={max}
            minLength={min}
          />
          <div onClick={_onIcon}>
            {icon ??
              (isPassword &&
                (show ? (
                  <EyeOff color={"#F40202"} />
                ) : (
                  <EyeIcon color={error ? "#F40202" : ""} width={20} height={20} />
                )))}
          </div>
        </div>
      </fieldset>
      {error && <div className="ml-4 text-[14px] text-[#F40202]">{error}</div>}
    </div>
  );
}

export default InputType;
