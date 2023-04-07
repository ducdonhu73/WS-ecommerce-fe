import { IconModel } from "models";
function Icon({ width = 14, height = 14, color = "#F37C7C" }: IconModel) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 14" fill="none">
      <path
        d="M14.6667 1H1.33337L6.66671 7.30667V11.6667L9.33337 13V7.30667L14.6667 1Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default Icon;
