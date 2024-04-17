import { CompanySearch } from "../types";
import PortfolioCard from "./PortfolioCard";

type Props = {
  portfolio: CompanySearch[];
  onPortfolioDelete: (item: CompanySearch) => void;
};
const PortfolioList = ({ portfolio, onPortfolioDelete }: Props) => {
  return (
    <div>
      <h2>My Portfolio</h2>
      <ul>
        {portfolio &&
          portfolio.map((item, index) => {
            return (
              <PortfolioCard
                item={item}
                key={index}
                onPortfolioDelete={onPortfolioDelete}
              />
            );
          })}
      </ul>
    </div>
  );
};
export default PortfolioList;
