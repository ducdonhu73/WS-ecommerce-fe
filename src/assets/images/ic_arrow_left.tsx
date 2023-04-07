import { IconModel } from "models";
function Icon({ width = 49, height = 48, color = "#EF4B4B" }: IconModel) {
  return (
    <svg width={width} height={height} viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x={1} y="0.5" width={47} height={47} rx="23.5" fill="white" />
      <path
        d="M28.5 16L20.5 24L28.5 32"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x={1} y="0.5" width={47} height={47} rx="23.5" stroke={color} />
    </svg>
  );
}

export default Icon;
