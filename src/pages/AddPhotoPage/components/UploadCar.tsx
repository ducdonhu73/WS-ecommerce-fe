import { Trash2Icon } from "assets/images";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

import { CarPhotoRequest, InputCarImage } from "../data";

interface Props extends InputCarImage {
  value?: string;
  onChange?: (url: string, keyCar: keyof CarPhotoRequest, name: string) => void;
  onDelete?: (keyCar: keyof CarPhotoRequest) => void;
}
function UploadCar({ carImage, className, description, headText, onChange, onDelete, keyCar }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string>();
  const handleClick = () => {
    inputRef.current?.click();
  };
  const handleChangeInputFile = (e?: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      !!onChange && onChange(url, keyCar, file.name);
    }
  };
  const handleDeleteImage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setImageUrl("");
    !!onDelete && onDelete(keyCar);
    e.stopPropagation();
  };
  return (
    <div
      className={twMerge(
        "relative flex min-h-[215px] cursor-pointer flex-col items-center justify-center gap-y-4 rounded-lg border border-dashed border-text-3 px-7 tablet:max-w-[215px]",
        className,
      )}
      onClick={handleClick}
    >
      {imageUrl ? (
        <img src={imageUrl} alt="" />
      ) : (
        <>
          {headText && <div className="text-lg">{headText}</div>}
          {carImage && <img className="w-[162px] tablet:w-full" src={carImage} alt="" />}
          <div className="whitespace-nowrap text-sm text-text-6">{description}</div>
        </>
      )}
      {imageUrl && (
        <button className="absolute -bottom-4 -right-4" onClick={handleDeleteImage}>
          <img src={Trash2Icon} alt="" />
        </button>
      )}
      <input
        className="hidden"
        type="file"
        ref={inputRef}
        onChange={handleChangeInputFile}
        accept="image/png, image/pdf, image/jpeg"
      />
    </div>
  );
}

export default UploadCar;
