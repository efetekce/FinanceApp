import { CompanySearch } from "../types";

type Props = {
  item: CompanySearch;
  onPortfolioDelete: (item: CompanySearch) => void;
};
const PortfolioCard = ({ item, onPortfolioDelete }: Props) => {
  return (
    <div>
      {item.name}

      <button onClick={() => onPortfolioDelete(item)}>delete</button>
    </div>
  );
};
export default PortfolioCard;
