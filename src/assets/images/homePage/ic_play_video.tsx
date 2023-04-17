import { IconModel } from "models";
function Icon({ width = 90, height = 104, color = "#ffffff" }: IconModel) {
  return (
    <svg width={width} height={height} viewBox="0 0 90 104" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M89.1113 52.1111L0.444659 103.303L0.444664 0.919384L89.1113 52.1111Z" fill={color} />
    </svg>
  );
}

export default Icon;
