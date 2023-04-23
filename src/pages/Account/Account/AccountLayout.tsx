import { Outlet } from "react-router";
import ContentAccount from "./components/ContentAccount/ContentAccount";
import { listSubNav } from "./data";

function AccountLayout() {
  return (
    <div className="mt-28 tablet:mb-32 tablet:mt-32">
      <div className="mt-10 flex-1 tablet:mt-0">
        <ContentAccount subnav={listSubNav}>
          <Outlet />
        </ContentAccount>
      </div>
    </div>
  );
}

export default AccountLayout;
