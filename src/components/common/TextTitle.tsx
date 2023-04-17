import { twMerge } from "tailwind-merge";

interface Props {
  text?: string;
  variant: "h1" | "h2" | "h3" | "subtitle1" | "subtitle2";
  className?: string;
}

const TextTitle = ({ text, variant, className = "" }: Props) => {
  let textClass = "";
  switch (variant) {
    case "h1":
      textClass = "text-6xl font-bold";
      break;
    case "h2":
      textClass = "text-5xl font-bold";
      break;
    case "h3":
      textClass = "text-4xl font-semibold";
      break;
    case "subtitle1":
      textClass = "text-3xl font-semibold";
      break;
    case "subtitle2":
      textClass = "text-2xl font-semibold";
      break;
  }
  return <div className={twMerge(textClass, className)}>{text}</div>;
};

export default TextTitle;
