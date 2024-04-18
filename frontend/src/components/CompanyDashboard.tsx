import { Outlet } from "react-router-dom";
import CompanyTile from "./CompanyTile";

type Props = { children: React.ReactNode };
const CompanyDashboard = ({ children }: Props) => {
  return (
    <div className="relative bg-blueGray-100 md:ml-64 w-full">
      <div className="relative bg-lightBlue-500 pt-20 pb-32">
        <div className="mx-auto px-4 md:px-6 w-full">
          <div>
            <div className="flex flex-wrap">{children}</div>
            <div className="flex flex-wrap">
              {<Outlet />}
              {/* <CompanyTile />

              <CompanyTile />

              <CompanyTile /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompanyDashboard;
