import { CompanySearch } from "../types";
import PortfolioCard from "./PortfolioCard";

type Props = {
  portfolio: CompanySearch[];
};
const PortfolioList = ({ portfolio }: Props) => {
  return (
    <div>
      <h2>My Portfolio</h2>
      <ul>
        {portfolio &&
          portfolio.map((item) => {
            return <PortfolioCard item={item} />;
          })}
      </ul>
    </div>
  );
};
export default PortfolioList;
