import { twMerge } from "tailwind-merge";

interface Props {
  label: string;
  id?: string;
  className?: string;
  isChecked?: boolean;
  onChange?: () => void;
}
function Radio({ className, label, id, isChecked, onChange }: Props) {
  return (
    <div
      className={twMerge("flex cursor-pointer items-center gap-x-2", className)}
      onClick={onChange && onChange}
      aria-hidden="true"
    >
      <input
        type="radio"
        id={id}
        className="cursor-pointer rounded-full border-2 border-text-5 p-2"
        checked={isChecked}
        readOnly
      />
      <div className={isChecked ? "text-primary" : "text-text-6"}>{label}</div>
    </div>
  );
}

export default Radio;
