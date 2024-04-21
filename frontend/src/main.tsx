import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import HomePage from "./pages/HomePage.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SearchPage from "./pages/SearchPage.tsx";
import CompanyPage from "./pages/CompanyPage.tsx";
import CompanyProfile from "./components/CompanyProfile.tsx";
import IncomeStatement from "./components/IncomeStatement.tsx";
import DesignPage from "./pages/DesignGuide.tsx";
import BalanceSheet from "./components/BalanceSheet.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "company/:ticker",
        element: <CompanyPage />,
        children: [
          { path: "company-profile", element: <CompanyProfile /> },
          { path: "income-statement", element: <IncomeStatement /> },
          { path: "balance-sheet", element: <BalanceSheet /> },
        ],
      },
      {
        path: "design",
        element: <DesignPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
