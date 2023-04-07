import { IconModel } from "models";
function Icon({ width = 32, height = 32, color = "#4D4C4C" }: IconModel) {
  return (
    <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M25.3332 15.9976H6.6665M6.6665 15.9976L15.9998 25.3307M6.6665 15.9976L15.9998 6.66406"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default Icon;
