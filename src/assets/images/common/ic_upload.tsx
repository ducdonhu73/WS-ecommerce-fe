import { IconModel } from "models";
function Icon({ width = 24, height = 24, color = "#B3B3B3" }: IconModel) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4805 43.0158V71.6683C14.4805 73.5681 15.2352 75.39 16.5785 76.7334C17.9218 78.0767 19.7438 78.8314 21.6436 78.8314H64.6223C66.5221 78.8314 68.3441 78.0767 69.6874 76.7334C71.0307 75.39 71.7854 73.5681 71.7854 71.6683V43.0158M57.4592 21.5264L43.1329 7.2002M43.1329 7.2002L28.8067 21.5264M43.1329 7.2002V53.7605"
        stroke={color}
        strokeWidth="5.37234"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Icon;
