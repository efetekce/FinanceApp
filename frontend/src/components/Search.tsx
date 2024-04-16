import { useState } from "react";

type Props = {};
const Search = (props: Props) => {
  const [search, setSearch] = useState("");

  const onClick = (e) => {
    setSearch(e.target.value);
    console.log(e);
  };
  return (
    <div>
      <input type="text" value={search} onChange={(e) => onClick(e)} />
    </div>
  );
};
export default Search;
