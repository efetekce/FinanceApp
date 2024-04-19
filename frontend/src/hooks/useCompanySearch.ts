import axios, { AxiosResponse } from "axios";
import { CompanyKeyMetrics, CompanyProfile, CompanySearch } from "../types";
import { useEffect, useState } from "react";

// interface SearchResponse {
//   data: CompanySearch[];
// }

export const useCompanySearch = async (query: string) => {
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get(
          `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${
            import.meta.env.VITE_API_KEY_2
          }`
        );
        setSearchResult(response.data);

        // console.log(response);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log("error: ", error.message);
        } else console.log("unexpected error");

        // if (typeof result === "string") {
        //   setServerError(result);
        // } else if (Array.isArray(result?.data)) {
        //   setSearchResult(result.data);
        // }
      }
    };
    fetchCompanies();
  }, [query]);

  return { searchResult };
};

export const getCompanyProfile = async (companyName: string | null) => {
  try {
    const response = await axios.get<CompanyProfile[]>(
      `https://financialmodelingprep.com/api/v3/profile/${companyName}?apikey=${
        import.meta.env.VITE_API_KEY_2
      }`
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log("error: ", error);
  }
};

export const getKeyMetrics = async (symbol: string | null) => {
  try {
    const response = await axios.get<CompanyKeyMetrics[]>(
      `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${symbol}?apikey=${
        import.meta.env.VITE_API_KEY_2
      }`
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log("error: ", error);
  }
};
