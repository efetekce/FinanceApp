import { Link } from "react-router-dom";
import { CompanySearch } from "../types";

type Props = {
  item: CompanySearch;
  onPortfolioDelete: (item: CompanySearch) => void;
};
const PortfolioCard = ({ item, onPortfolioDelete }: Props) => {
  return (
    <div>
      <Link to={`company/${item.symbol}`}>{item.name}</Link>

      <button onClick={() => onPortfolioDelete(item)}>delete</button>
    </div>
  );
};
export default PortfolioCard;
