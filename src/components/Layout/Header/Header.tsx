import breakPoints from "constants/breakPoints";
import useWindowDimensions from "hooks/useWindowDimensions";
import { Fragment, useEffect } from "react";
import { useLocation } from "react-router";

import HeaderDesktop from "./HeaderDesktop";
import HeaderMobileTablet from "./HeaderMobileTablet";

function Header() {
  const dimensions = useWindowDimensions();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return <Fragment>{dimensions.width < breakPoints.laptop ? <HeaderMobileTablet /> : <HeaderDesktop />}</Fragment>;
}
export default Header;
