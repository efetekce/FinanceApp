import { useOutletContext } from "react-router-dom";
import { CompanyKeyMetrics } from "../types";
import { useEffect, useState } from "react";
import { getKeyMetrics } from "../hooks/useCompanySearch";
import RatioList from "./RatioList";

type Props = {};

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: CompanyKeyMetrics) => company.marketCapTTM,
  },
  {
    label: "Current Ratio",
    render: (company: CompanyKeyMetrics) => company.currentRatioTTM,
  },
  {
    label: "Return On Equity",
    render: (company: CompanyKeyMetrics) => company.roeTTM,
  },
  {
    label: "Cash Per Share",
    render: (company: CompanyKeyMetrics) => company.cashPerShareTTM,
  },
  {
    label: "Current Ratio",
    render: (company: CompanyKeyMetrics) => company.currentRatioTTM,
  },
  {
    label: "Return On Equity",
    render: (company: CompanyKeyMetrics) => company.roeTTM,
  },
];
const CompanyProfile = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [companyData, setCompanyData] = useState<CompanyKeyMetrics>();
  useEffect(() => {
    const getCompanyKeyMetrics = async () => {
      const value = await getKeyMetrics(ticker);
      setCompanyData(value?.data[0]);
    };
    getCompanyKeyMetrics();
  }, []);
  return (
    <div>
      {companyData ? (
        <RatioList data={companyData} config={tableConfig} />
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};
export default CompanyProfile;
