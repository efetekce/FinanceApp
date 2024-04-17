type Props = {
  onPortfolioCreate: (e: React.SyntheticEvent) => void;
};
const AddPortfolio = ({ onPortfolioCreate }: Props) => {
  return <button onClick={onPortfolioCreate}>AddPortfolio</button>;
};
export default AddPortfolio;
