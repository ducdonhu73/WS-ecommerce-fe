import { IconModel } from "models";
function Icon({ width = 24, height = 24, color = "#ccc" }: IconModel) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 24 24">
      <path fill={color} d="M7 9.5l5 5 5-5H7z"></path>
    </svg>
  );
}
export default Icon;
