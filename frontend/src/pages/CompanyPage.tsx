import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { CompanyProfile } from "../types";
import { getCompanyProfile } from "../hooks/useCompanySearch";

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
        <div>{company.companyName}</div>
      ) : (
        <div>company not found</div>
      )}
    </div>
  );
};
export default CompanyPage;
