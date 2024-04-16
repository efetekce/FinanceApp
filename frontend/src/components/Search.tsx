import { useEffect } from "react";
import { CompanySearch } from "./Api";
const apiKey = import.meta.env.VITE_API_KEY;
console.log(apiKey);

interface Props {
  search: string | undefined;
  onClick: (e: React.SyntheticEvent) => void;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Search = ({ onClick, onSearch, search }: Props) => {
  useEffect(() => {
    CompanySearch("tsla");
  }, []);

  return (
    <div>
      <input type="text" value={search} onChange={(e) => onSearch(e)} />
      <button onClick={(e) => onClick(e)}>button</button>
    </div>
  );
};
export default Search;
