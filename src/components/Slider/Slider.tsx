import SlickSlider, { CustomArrowProps, Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { twMerge } from "tailwind-merge";
import { ArrowLeftIcon as ArrowLeftIconDefault } from "assets/images";
interface SliderProps {
  children?: React.ReactNode; // TODO: Upgrade to React 18
  slidesToShow?: number;
  customSetting?: object;
  ArrowLeftIcon?: React.ReactNode;
  classNamePrevArrow?: string;
  classNameNextArrow?: string;
}

const Slider = ({
  children,
  slidesToShow = 1,
  ArrowLeftIcon = <ArrowLeftIconDefault />,
  customSetting,
  classNamePrevArrow = "",
  classNameNextArrow = "",
}: SliderProps) => {
  const PrevArrow = (props: CustomArrowProps) => {
    return (
      <div
        className={twMerge(
          "absolute top-[50%] left-0 z-[1] translate-y-[-50%] cursor-pointer hover:opacity-80",
          props?.className?.includes("slick-disabled") && "cursor-default select-none opacity-25 hover:opacity-25",
          classNamePrevArrow,
        )}
        onClick={props.onClick}
        style={props.style}
      >
        {ArrowLeftIcon}
      </div>
    );
  };

  const NextArrow = (props: CustomArrowProps) => {
    return (
      <div
        className={twMerge(
          "absolute top-[50%] right-0 z-[1] translate-y-[-50%] rotate-180 cursor-pointer hover:opacity-80",
          props?.className?.includes("slick-disabled") && "cursor-default select-none opacity-25 hover:opacity-25",
          classNameNextArrow,
        )}
        onClick={props.onClick}
        style={props.style}
      >
        {ArrowLeftIcon}
      </div>
    );
  };

  const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    className: "-mx-2",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return <SlickSlider {...{ ...settings, ...customSetting }}>{children}</SlickSlider>;
};

export default Slider;
