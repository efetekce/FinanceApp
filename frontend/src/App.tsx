import { useState } from "react";

import CardList from "./components/CardList";
import Search from "./components/Search";
import { CompanySearch } from "./types";
import { companySearch } from "./components/Api";

function App() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };
  const [serverError, setServerError] = useState("");

  const handleClick = async (e: React.SyntheticEvent) => {
    const result = await companySearch(search);
    if (typeof result === "string") {
      setServerError(result);
    } else if (Array.isArray(result?.data)) {
      setSearchResult(result.data);
    }
  };
  return (
    <>
      <Search search={search} onSearch={handleSearch} onClick={handleClick} />
      <CardList />
    </>
  );
}

export default App;
