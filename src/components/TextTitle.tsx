import { twMerge } from "tailwind-merge";

interface Props {
  text?: string;
  variant: "h1" | "h2" | "h3" | "subtitle1" | "subtitle2";
  className?: string;
}

const TextTitle = ({ text, variant, className = "font-primary" }: Props) => {
  let textClass = "";
  switch (variant) {
    case "h1":
      textClass = "font-primary text-6xl font-bold";
      break;
    case "h2":
      textClass = "font-primary text-5xl font-bold";
      break;
    case "h3":
      textClass = "font-primary text-4xl font-semibold";
      break;
    case "subtitle1":
      textClass = "font-primary text-3xl font-semibold";
      break;
    case "subtitle2":
      textClass = "font-primary text-2xl font-semibold";
      break;
  }
  return <div className={twMerge(textClass, className)}>{text}</div>;
};

export default TextTitle;
