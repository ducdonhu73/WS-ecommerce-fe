import { IconModel } from "models";
function Icon({ width = 32, height = 32, color = "#999" }: IconModel) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.3335 16.0002C1.3335 16.0002 6.66683 5.3335 16.0002 5.3335C25.3335 5.3335 30.6668 16.0002 30.6668 16.0002C30.6668 16.0002 25.3335 26.6668 16.0002 26.6668C6.66683 26.6668 1.3335 16.0002 1.3335 16.0002Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0002 20C18.2093 20 20.0002 18.2091 20.0002 16C20.0002 13.7909 18.2093 12 16.0002 12C13.791 12 12.0002 13.7909 12.0002 16C12.0002 18.2091 13.791 20 16.0002 20Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default Icon;
