import React, { useEffect, useState } from "react";
import { CompanyProfile } from "../types";
import { useParams } from "react-router-dom";
import { getCompanyProfile } from "../hooks/useCompanySearch";
import CompanyDashboard from "../components/CompanyDashboard";
import Sidebar from "../components/Sidebar";
import CompanyTile from "../components/CompanyTile";
import Spinner from "../components/Spinner";

interface Props {}

const CompanyPage = (props: Props) => {
  let { ticker } = useParams();

  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    };
    getProfileInit();
  }, []);

  return (
    <>
      {company ? (
        <div className="relative flex w-full overflow-x-auto ct-docs-disable-sidebar-content">
          <Sidebar />
          <CompanyDashboard ticker={ticker!}>
            <CompanyTile title="Company Name" subTitle={company.companyName} />
            <CompanyTile title="Price" subTitle={company.price.toString()} />
            <CompanyTile title="Sector" subTitle={company.sector} />
            <CompanyTile title="Description" subTitle={company.description} />
            <CompanyTile title="DCF" subTitle={company.dcf.toString()} />
          </CompanyDashboard>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CompanyPage;
