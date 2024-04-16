type Props = {};
const Card = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center p-4 text-center">
      <img
        src="https://react-typescript-cheatsheet.netlify.app/img/icon.png"
        className="w-20 h-20"
      />
      This will be a card
      <div className="details">
        <h2>aapl</h2>
        <p>$110</p>
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
