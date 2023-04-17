import { twMerge } from "tailwind-merge";

interface SectionPrivacyContentProps {
  title: string;
  children: React.ReactNode | string;
  isTopTitle?: boolean;
  className?: string;
}

const SectionPrivacyContent = ({ title, children, isTopTitle = false, className = "" }: SectionPrivacyContentProps) => {
  return (
    <div className={className}>
      <p
        className={twMerge(
          "mb-3 text-base font-bold text-text-10 laptop:text-lg",
          isTopTitle && "text-2xl font-semibold text-text-9",
        )}
      >
        {title}
      </p>
      <div className="mb-3 text-sm text-text-8 laptop:mb-5 laptop:text-base">{children}</div>
    </div>
  );
};

export default SectionPrivacyContent;
