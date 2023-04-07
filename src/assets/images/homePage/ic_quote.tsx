import { IconModel } from "models";
function Icon({ width = 52, height = 32, color = "#EF4B4B" }: IconModel) {
  return (
    <svg width={width} height={height} viewBox="0 0 52 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.500002 0L23.3022 1.99343e-06L23.3022 17.7351L14.4347 31.6698L3.03358 31.6698L8.10074 19.0019L0.5 19.0019L0.500002 0ZM28.3694 2.43642e-06L51.1716 4.42985e-06V17.7351L42.3041 31.6698L30.903 31.6698L35.9701 19.0019L28.3694 19.0019V2.43642e-06Z"
        fill={color}
      />
    </svg>
  );
}

export default Icon;
