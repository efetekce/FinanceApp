import { CompanySearch } from "../types";
import Card from "./Card";

interface Props {
  searchResult: CompanySearch[];
  onPortfolioCreate: (e: React.SyntheticEvent, result: CompanySearch) => void;
}
const CardList = ({ searchResult, onPortfolioCreate }: Props) => {
  return (
    <div className="flex flex-wrap gap-4">
      {/* <Card companyName="Apple" ticker="AAPL" price={200} />
      <Card companyName="Tesla" ticker="TSLA" price={200} />
      <Card companyName="Microsoft" ticker="MSFT" price={200} /> */}
      {searchResult.length > 0 ? (
        searchResult.map((result, index) => {
          return (
            <Card
              result={result}
              key={index}
              onPortfolioCreate={onPortfolioCreate}
            />
          );
        })
      ) : (
        <p>no results</p>
      )}
    </div>
  );
};
export default CardList;
