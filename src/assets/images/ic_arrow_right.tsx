import { IconModel } from "models";
function Icon({ width = 25, height = 25, color = "#EF4B4B" }: IconModel) {
  return (
    <svg width={width} height={height} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.5 12.2169H19.5M19.5 12.2169L12.5 5.2168M19.5 12.2169L12.5 19.2168"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Icon;
