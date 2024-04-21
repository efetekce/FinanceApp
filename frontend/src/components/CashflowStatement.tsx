import { useEffect, useState } from "react";
import Table from "./Table";
import { useOutletContext } from "react-router-dom";
import { CompanyCashFlow } from "../types";
import { getCashflow } from "../hooks/useCompanySearch";

type Props = {};
const config = [
  {
    label: "Date",
    render: (company: CompanyCashFlow) => company.date,
  },
  {
    label: "Operating Cashflow",
    render: (company: CompanyCashFlow) => company.operatingCashFlow,
  },
  {
    label: "Investing Cashflow",
    render: (company: CompanyCashFlow) =>
      company.netCashUsedForInvestingActivites,
  },
  {
    label: "Financing Cashflow",
    render: (company: CompanyCashFlow) =>
      company.netCashUsedProvidedByFinancingActivities,
  },
  {
    label: "Cash At End of Period",
    render: (company: CompanyCashFlow) => company.cashAtEndOfPeriod,
  },
  {
    label: "CapEX",
    render: (company: CompanyCashFlow) => company.capitalExpenditure,
  },
  {
    label: "Issuance Of Stock",
    render: (company: CompanyCashFlow) => company.commonStockIssued,
  },
  {
    label: "Free Cash Flow",
    render: (company: CompanyCashFlow) => company.freeCashFlow,
  },
];
const CashflowStatement = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [cashFlowData, setCashFlowData] = useState<CompanyCashFlow[]>();
  useEffect(() => {
    const fetchCashflow = async () => {
      const result = await getCashflow(ticker);
      setCashFlowData(result!.data);
    };
    fetchCashflow();
  }, []);

  return cashFlowData ? (
    <Table config={config} data={cashFlowData}></Table>
  ) : (
    // <Spinner />
    <p>sadf</p>
  );
};
export default CashflowStatement;
