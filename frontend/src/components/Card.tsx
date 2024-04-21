import { Link } from "react-router-dom";
import { CompanySearch } from "../types";
import AddPortfolio from "./AddPortfolio";

type Props = {
  result: CompanySearch;
  onPortfolioCreate: (e: React.SyntheticEvent, result: CompanySearch) => void;
};
const Card = ({ result, onPortfolioCreate }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center shadow-2xl p-4 rounded-xl w-1/3 text-center">
      <img
        src="https://react-typescript-cheatsheet.netlify.app/img/icon.png"
        className="w-20 h-20"
      />
      {result.name}
      <div className="details">
        <Link to={`/company/${result.symbol}/company-profile`}>
          <h2>{result.name}</h2>
          <p>{result.symbol}</p>
        </Link>
        <p>${result.currency}</p>
      </div>
      <p className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quod
        totam quae eveniet voluptatum ipsa facere excepturi animi, nihil
        exercitationem!
      </p>
      <AddPortfolio onPortfolioCreate={onPortfolioCreate} result={result} />
    </div>
  );
};
export default Card;
