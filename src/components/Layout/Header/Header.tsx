import { breakPoints } from "components/constants";
import useWindowDimensions from "hooks/useWindowDimensions";
import { Fragment } from "react";

import HeaderDesktop from "./HeaderDesktop";
import HeaderMobileTablet from "./HeaderMobileTablet";

function Header() {
  const dimensions = useWindowDimensions();
  return <Fragment>{dimensions.width < breakPoints.laptop ? <HeaderMobileTablet /> : <HeaderDesktop />}</Fragment>;
}
export default Header;
