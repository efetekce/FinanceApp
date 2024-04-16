type Props = {
  companyName: string;
  ticker: string;
  price: number;
};
const Card = ({ companyName, ticker, price }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center shadow-2xl p-4 rounded-xl w-1/3 text-center">
      <img
        src="https://react-typescript-cheatsheet.netlify.app/img/icon.png"
        className="w-20 h-20"
      />
      This will be a card
      <div className="details">
        <h2>{companyName}</h2>
        <p>{ticker}</p>
        <p>${price}</p>
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
