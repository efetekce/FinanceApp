import { createContext, useEffect, useState } from "react";
import { UserProfile } from "../types";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";

type UserContextState = {
  user: UserProfile | null;
  token: string | null;
  registerUser: (email: string, username: string, password: string) => void;
  loginUser: (username: string, password: string) => void;
  logoutUser: () => void;
  isLoggedIn: () => boolean;
};

type Props = { children: React.ReactNode };

export const UserContext = createContext<UserContextState>(
  {} as UserContextState
);

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState(false);

  const { accountRegister, accountLogin } = useAuth();
  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (user && token) {
      setUser(JSON.parse(user));
      setToken(token);
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      // adds token to the request header to be used in every request.
    }

    setIsReady(true);
  }, []);

  const registerUser = async (
    email: string,
    username: string,
    password: string
  ) => {
    const user = await accountRegister(email, username, password);
    if (user) {
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      setToken(user?.token);
      localStorage.setItem("token", user?.token);
    } else setUser(null);

    alert("login succeeded.");
    navigate("/search");
  };
  const loginUser = async (username: string, password: string) => {
    const user = await accountLogin(username, password);
    if (user) {
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      setToken(user?.token);
      localStorage.setItem("token", user?.token);
    } else setUser(null);

    alert("login succeeded.");
    navigate("/search");
  };

  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
    navigate("/");
  };

  const isLoggedIn = () => {
    return !!user;
  };

  return (
    <UserContext.Provider
      value={{ loginUser, registerUser, user, token, logoutUser, isLoggedIn }}
    >
      {isReady && children}
    </UserContext.Provider>
  );
};
