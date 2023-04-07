import { IconModel } from "models";
function Icon({ width = 32, height = 33 }: IconModel) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <rect width="32" height="32" y="0.289" fill="#fff" rx="4"></rect>
      <path
        fill="#666"
        d="M24.995 25.29l.005-.002v-6.601c0-3.23-.695-5.717-4.47-5.717-1.816 0-3.034.996-3.531 1.94h-.052V13.27h-3.58v12.017h3.727v-5.95c0-1.567.297-3.082 2.237-3.082 1.912 0 1.94 1.788 1.94 3.182v5.851h3.724zM7.297 13.272h3.732v12.017H7.297V13.272zM9.162 7.29A2.162 2.162 0 007 9.45c0 1.194.968 2.182 2.162 2.182 1.193 0 2.161-.988 2.161-2.181a2.163 2.163 0 00-2.162-2.162z"
      ></path>
    </svg>
  );
}
export default Icon;
