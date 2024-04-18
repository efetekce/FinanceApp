import { useState } from "react";

import CardList from "./components/CardList";
import Search from "./components/Search";
import { CompanySearch } from "./types";
import { useCompanySearch } from "./hooks/useCompanySearch";
import axios from "axios";
import PortfolioList from "./components/PortfolioList";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  const [search, setSearch] = useState("");
  const [portfolio, setPortfolio] = useState<CompanySearch[]>([]);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const companySearch = async (query: string) => {
    try {
      const response = await axios.get<CompanySearch[]>(
        `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${
          import.meta.env.VITE_API_KEY_2
        }`
      );
      console.log(response);
      setSearchResult(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error: ", error.message);
      } else console.log("unexpected error");
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const [serverError, setServerError] = useState("");

  const handleSearchSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    // console.log(result);
    companySearch(search);
  };

  const onPortfolioCreate = (
    e: React.SyntheticEvent,
    result: CompanySearch
  ) => {
    // console.log(e);

    if (!portfolio.find((item) => item.name === result.name)) {
      setPortfolio([...portfolio, result]);
    }
    console.log(portfolio);
  };

  const handlePortfolioDelete = (item: CompanySearch) => {
    setPortfolio(
      portfolio.filter((element) => {
        return element.name !== item.name;
      })
    );
  };

  return (
    <>
      <Navbar />

      <Search
        search={search}
        onSearchSubmit={handleSearchSubmit}
        onSearchChange={handleSearchChange}
      />
      <CardList
        searchResult={searchResult}
        onPortfolioCreate={onPortfolioCreate}
      />

      {portfolio.length > 0 && (
        <PortfolioList
          portfolio={portfolio}
          onPortfolioDelete={handlePortfolioDelete}
        />
      )}
    </>
  );
}

export default App;
