import { MouseEventHandler, ReactElement } from "react";
import { twMerge } from "tailwind-merge";
interface Props {
  text?: string;
  type?: "primary" | "disabled-primary" | "outline-secondary" | "secondary" | "outline";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: ReactElement;
  className?: string;
  disabled?: boolean;
  buttonType?: "submit" | "reset" | "button" | undefined;
  form?: string;
}
function PrimaryButton({ text = "", onClick, type = "primary", icon, className, disabled, form, buttonType }: Props) {
  let buttonStyle = "";
  let disabledStyle = "";
  switch (type) {
    case "primary":
      buttonStyle = "border-0 bg-primary hover:bg-primary-4 text-white hover:text-white";
      disabledStyle = disabled ? "pointer-events-none bg-text-2 border-0 text-text-4" : "";
      break;
    case "outline":
      buttonStyle = "border-primary-3 bg-transparent text-primary hover:bg-primary-1";
      break;
    case "secondary":
      buttonStyle = "border-0 bg-[#404040] ";
      break;
    case "outline-secondary":
      buttonStyle = "border-text-5 bg-transparent hover:bg";
      break;
  }
  return (
    <button
      form={form}
      className={twMerge(
        "flex w-full items-center justify-center gap-x-1 rounded border py-2 ",
        buttonStyle,
        disabledStyle,
        className,
      )}
      onClick={onClick}
      disabled={disabled}
      type={buttonType}
    >
      {icon}
      {text}
    </button>
  );
}
export default PrimaryButton;
