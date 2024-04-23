import axios from "axios";
import { User } from "../types";

const useAuth = () => {
  const accountLogin = async (username: string, password: string) => {
    try {
      const response = await axios.post<User>(
        "http://localhost:5232/api/account/login",
        {
          username: username,
          password: password,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const accountRegister = async (
    username: string,
    email: string,
    password: string
  ) => {
    try {
      const response = await axios.post<User>(
        "http://localhost:5232/api/account/register",
        {
          username: username,
          email: email,
          password: password,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return { accountLogin, accountRegister };
};

export default useAuth;
