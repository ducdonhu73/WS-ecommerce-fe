import { ArrowDownFilled } from "assets/images";
import OutsideClickWrapper from "components/OutsideClickWrapper";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
interface Props {
  keyOptionLabel?: string;
  keyOptionValue?: string;
  placeholder?: string;
  options: Record<string, string | number>[];
  id?: string;
  onChange?: (id?: string, text?: string | number) => void;
  value?: string | number;
}
function SelectFieldset({
  id,
  keyOptionLabel = "label",
  keyOptionValue = "value",
  placeholder,
  options,
  onChange,
  value,
}: Props) {
  const [isShowOption, setIsShowOption] = useState(false);
  const handleClickOutside = () => {
    setIsShowOption(false);
  };
  const [selected, setSelected] = useState<Record<string, string | number> | undefined>(
    value && options ? options.find(o => o[keyOptionValue] === value) : undefined,
  );

  return (
    <div className="relative w-full cursor-pointer">
      <OutsideClickWrapper onClickOutside={handleClickOutside}>
        <div>
          <input id={id} value={selected && selected[keyOptionValue]} className="hidden" readOnly />
          <div
            className="flex items-center justify-between px-4 pb-2 pt-0"
            onClick={() => setIsShowOption(!isShowOption)}
            aria-hidden="true"
          >
            <div className={twMerge(!selected && "text-text-5")}>
              {(selected && (selected[keyOptionLabel] ?? selected[keyOptionValue])) ?? placeholder}
            </div>
            <ArrowDownFilled />
          </div>
          {isShowOption && (
            <div
              className="absolute  left-0 top-8 z-10 w-full rounded border bg-background"
              onClick={() => setIsShowOption(!isShowOption)}
              aria-hidden="true"
            >
              <div
                onClick={() => {
                  setSelected(undefined);
                  onChange && onChange(id, undefined);
                }}
                className="px-4 py-2 hover:bg-primary hover:text-white "
              >
                {placeholder}
              </div>
              {options.map(option => (
                <div
                  onClick={() => {
                    setSelected(option);
                    onChange && onChange(id, option[keyOptionValue]);
                  }}
                  key={option[keyOptionValue]}
                  className="px-4 py-2 hover:bg-primary hover:text-white "
                >
                  {option[keyOptionLabel] ?? option[keyOptionValue]}
                </div>
              ))}
            </div>
          )}
        </div>
      </OutsideClickWrapper>
    </div>
  );
}

export default SelectFieldset;
