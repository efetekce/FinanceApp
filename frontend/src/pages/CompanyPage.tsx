import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { CompanyProfile } from "../types";
import { getCompanyProfile } from "../hooks/useCompanySearch";
import Sidebar from "../components/Sidebar";
import CompanyDashboard from "../components/CompanyDashboard";
import CompanyTile from "../components/CompanyTile";

type Props = {};
const CompanyPage = (props: Props) => {
  let { ticker } = useParams();
  console.log(ticker);

  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfile = async (ticker: string) => {
      const result = await getCompanyProfile(ticker);
      console.log(result?.data[0]);
      setCompany(result?.data[0]);
    };

    getProfile(ticker!);
  }, []);
  return (
    <div>
      {company ? (
        <div className="relative flex w-full overflow-x-hidden ct-docs-disable-sidebar-content">
          <Sidebar />
          <CompanyDashboard>
            <CompanyTile title="Company Name" content={company.companyName} />
          </CompanyDashboard>
        </div>
      ) : (
        <div>company not found</div>
      )}
    </div>
  );
};
export default CompanyPage;
