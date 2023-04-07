import { IconModel } from "models";
function Icon({ width = 14, height = 14, color = "#F37C7C" }: IconModel) {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_4365_200008)">
        <path
          d="M1.88724 3.11276L3.92358 1.07642M3.92358 1.07642L5.95993 3.11276M3.92358 1.07642L3.92358 8L3.92358 14.9236"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.9585 12.8091L11.9221 14.8455M11.9221 14.8455L9.88577 12.8091M11.9221 14.8455L11.9221 7.92187L11.9221 0.99829"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4365_200008">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
export default Icon;
