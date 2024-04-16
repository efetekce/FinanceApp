import { useState } from "react";

import CardList from "./components/CardList";
import Search from "./components/Search";

function App() {
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };

  const handleClick = (e: React.SyntheticEvent) => {
    console.log(e);
  };
  return (
    <>
      <Search search={search} onSearch={handleSearch} onClick={handleClick} />
      <CardList />
    </>
  );
}

export default App;
