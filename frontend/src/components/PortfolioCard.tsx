import { CompanySearch } from "../types";

type Props = {
  item: CompanySearch;
};
const PortfolioCard = ({ item }: Props) => {
  return <div>{item.name}</div>;
};
export default PortfolioCard;
