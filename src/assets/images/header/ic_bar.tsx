import { IconModel } from "models";
function Icon({ width = 21, height = 14, color = "#000000" }: IconModel) {
  return (
    <svg width={width} height={height} viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.2773 5H1.27734M19.2773 1H1.27734M19.2773 9H1.27734M15.2773 13H1.27734"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default Icon;
