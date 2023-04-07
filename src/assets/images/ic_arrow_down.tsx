import { IconModel } from "models";
function Icon({ width = 24, height = 24, color = "#666666" }: IconModel) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 24 24">
      <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 9L12 15L18 9"></path>
    </svg>
  );
}

export default Icon;
