import React from "react";
import { Outlet } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  ticker: string;
}

const CompanyDashboard = ({ children, ticker }: Props) => {
  return (
    <div className="relative bg-blueGray-100 md:ml-64 w-full">
      <div className="relative bg-lightBlue-500 pt-20 pb-32">
        <div className="mx-auto px-4 md:px-6 w-full">
          <div>
            <div className="flex flex-wrap">{children}</div>
            <div className="flex flex-wrap">{<Outlet context={ticker} />}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
