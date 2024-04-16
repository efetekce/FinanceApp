import axios from "axios";
import { CompanySearch } from "../types";

interface SearchResponse {
  data: CompanySearch[];
}

export const companySearch = async (query: string) => {
  try {
    const data = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    console.log(data);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error: ", error.message);
    } else console.log("unexpected error");
  }
};
