import { IconModel } from "models";
function Icon({ width = 15, height = 14, color = "#000000" }: IconModel) {
  return (
    <svg width={width} height={height} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.2773 1L1.27734 13M1.27734 1L13.2773 13"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default Icon;
