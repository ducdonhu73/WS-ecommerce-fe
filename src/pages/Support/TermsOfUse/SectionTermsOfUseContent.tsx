import { twMerge } from "tailwind-merge";

interface SectionTermsOfUseContentProps {
  title: string;
  children: React.ReactNode | string;
  className?: string;
}

const SectionTermsOfUseContent = ({ title, children, className = "" }: SectionTermsOfUseContentProps) => {
  return (
    <div className={className}>
      <p className={twMerge("mb-2.5 text-base font-bold text-text-9 laptop:text-lg")}>{title}</p>
      <div className="mb-5 text-sm text-text-9 tablet:mb-8 laptop:mb-10 laptop:text-base">{children}</div>
    </div>
  );
};

export default SectionTermsOfUseContent;
