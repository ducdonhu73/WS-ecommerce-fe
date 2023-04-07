import { IconModel } from "models";
function Icon({ width = 20, height = 20, color = "#999" }: IconModel) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 20"
    >
      <g clipPath="url(#clip0_3729_57443)">
        <path
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M11.767 11.765a2.498 2.498 0 01-4.147-.768 2.5 2.5 0 01.613-2.765m-7.4-7.4l18.334 18.333M14.95 14.95A8.392 8.392 0 0110 16.665C4.167 16.665.833 10 .833 10a15.375 15.375 0 014.217-4.95l9.9 9.9zM8.25 3.532a7.6 7.6 0 011.75-.2c5.834 0 9.167 6.667 9.167 6.667a15.412 15.412 0 01-1.8 2.658L8.25 3.532z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3729_57443">
          <path fill={color} d="M0 0H20V20H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}
export default Icon;
