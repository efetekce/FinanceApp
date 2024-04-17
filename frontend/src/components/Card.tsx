import { CompanySearch } from "../types";

type Props = {
  result: CompanySearch;
};
const Card = ({ result }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center shadow-2xl p-4 rounded-xl w-1/3 text-center">
      <img
        src="https://react-typescript-cheatsheet.netlify.app/img/icon.png"
        className="w-20 h-20"
      />
      {result.name}
      <div className="details">
        <h2>{result.name}</h2>
        <p>{result.symbol}</p>
        <p>${result.currency}</p>
      </div>
      <p className="info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quod
        totam quae eveniet voluptatum ipsa facere excepturi animi, nihil
        exercitationem!
      </p>
    </div>
  );
};
export default Card;
