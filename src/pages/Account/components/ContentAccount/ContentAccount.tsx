import React from "react";
import SubNav from "components/SubNav";
import { NavAccount } from "pages/Account/components/NavAccount";
import { SubNavModel } from "models";
import { listNavAccount } from "pages/Account/data";

interface ContentAccountProps {
  children?: React.ReactElement;
  subnav?: SubNavModel[];
  navSelected?: number;
  hideNav?: boolean;
}

function ContentAccount({ children, subnav, hideNav = false, navSelected = 0 }: ContentAccountProps) {
  return (
    <div>
      {subnav && <SubNav listNav={subnav} />}
      <div className="layout-full tablet:layout-padding flex flex-col tablet:mt-20 tablet:flex-row">
        {!hideNav && (
          <div className="m-0 w-full tablet:mr-[80px] tablet:min-w-[200px] tablet:max-w-[200px]">
            <NavAccount listNav={listNavAccount} indexActive={navSelected} />
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

export default ContentAccount;
