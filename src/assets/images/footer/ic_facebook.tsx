import { IconModel } from "models";
function Icon({ width = 32, height = 33 }: IconModel) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 32 33" fill="none">
      <rect y="0.289062" width="32" height="32" rx="4" fill="white" />
      <path
        d="M19.8092 8.78375H22V5.44475C21.622 5.39925 20.3221 5.29688 18.8083 5.29688C15.6495 5.29688 13.4857 7.0355 13.4857 10.231V13.1719H10V16.9046H13.4857V26.2969H17.7594V16.9055H21.1041L21.635 13.1728H17.7584V10.6011C17.7594 9.52225 18.0913 8.78375 19.8092 8.78375Z"
        fill="#666666"
      />
    </svg>
  );
}
export default Icon;
