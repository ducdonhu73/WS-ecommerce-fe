import { IconModel } from "models";
function Icon({ width = 20, height = 20, color = "#000000" }: IconModel) {
  return (
    <svg
      className="cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M13.73 21a2 2 0 01-3.46 0M18 8A6 6 0 106 8c0 7-3 9-3 9h18s-3-2-3-9z"
      />
    </svg>
  );
}
export default Icon;
