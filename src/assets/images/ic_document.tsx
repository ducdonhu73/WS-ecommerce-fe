import { IconModel } from "models";
function Icon({ width = 18, height = 20, color = "#EF4B4B" }: IconModel) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 18 22">
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.336"
        d="M5.571 11h6.858M5.57 15.444h6.858M14.714 21H3.286C2.023 21 1 20.005 1 18.778V3.222C1 1.995 2.023 1 3.286 1h6.383c.304 0 .594.117.809.325l6.187 6.016c.215.209.335.491.335.786v10.65C17 20.006 15.977 21 14.714 21z"
      ></path>
    </svg>
  );
}
export default Icon;
