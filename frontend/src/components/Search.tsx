import { useState } from "react";

type Props = {};
const Search = (props: Props) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };

  const handleClick = (e: React.MouseEvent) => {
    console.log(e);
  };
  return (
    <div>
      <input type="text" value={search} onChange={(e) => handleSearch(e)} />
      <button onClick={(e) => handleClick(e)}>button</button>
    </div>
  );
};
export default Search;
