import axios from "axios";

export const CompanySearch = async (query: string) => {
  try {
    const data = await axios.get(
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
