import Card from "./Card";

type Props = {};
const CardList = (props: Props) => {
  return (
    <div className="flex flex-wrap gap-4">
      <Card companyName="Apple" ticker="AAPL" price={200} />
      <Card companyName="Tesla" ticker="TSLA" price={200} />
      <Card companyName="Microsoft" ticker="MSFT" price={200} />
    </div>
  );
};
export default CardList;
