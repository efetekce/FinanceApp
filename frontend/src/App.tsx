import { useState } from "react";

import CardList from "./components/CardList";
import Search from "./components/Search";
import { CompanySearch } from "./types";
import { useCompanySearch } from "./hooks/useCompanySearch";

function App() {
  const [search, setSearch] = useState("");
  const searchResult = useCompanySearch(search);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const [serverError, setServerError] = useState("");

  const handleClick = async (e: React.SyntheticEvent) => {
    const result = await searchResult;

    console.log(result);
  };

  return (
    <>
      <Search search={search} onSearch={handleSearch} onClick={handleClick} />
      <CardList />
    </>
  );
}

export default App;
