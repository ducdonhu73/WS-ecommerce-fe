interface Props {
  image: string;
  width?: string;
  height?: string;
}
function Avatar({ image, height = "48px", width = "48px" }: Props) {
  return <img className="rounded-full" alt="" src={image} style={{ height, width }}></img>;
}

export default Avatar;
