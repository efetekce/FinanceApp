import { FaAirFreshener, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

type Props = {};
const Sidebar = (props: Props) => {
  return (
    <nav className="block top-0 bottom-0 left-0 z-9999 md:z-10 absolute flex-row flex-nowrap bg-white shadow-xl px-6 py-4 w-64 transform transition-all -translate-x-full md:translate-x-0 duration-300 ease-in-out">
      <button className="top-1/2 -right-24-px z-9998 absolute flex justify-center items-center md:hidden bg-white border border-t border-transparent border-r border-b border-blueGray-100 border-l-0 border-solid border-solid rounded-r w-6 h-10 text-blueGray-700 text-xl leading-none cursor-pointer focus:outline-none">
        <i className="fa-ellipsis-v fas"></i>
      </button>

      <div className="flex flex-col flex-wrap justify-between items-center mx-auto px-0 w-full min-h-full overflow-x-hidden overflow-y-auto">
        <div className="relative z-40 flex flex-col flex-1 items-center items-stretch bg-white opacity-100 mt-4 rounded w-full h-auto overflow-x-hidden overflow-y-auto">
          <div className="flex flex-col md:flex-col md:min-w-full list-none">
            <Link
              to="company-profile"
              className="flex pt-1 pb-4 md:min-w-full font-bold text-blueGray-500 text-xs no-underline uppercase"
            >
              <FaHome />
              <h6 className="ml-3">Company Profile</h6>
            </Link>
            <Link
              to="income-statement"
              className="flex pt-1 pb-4 md:min-w-full font-bold text-blueGray-500 text-xs no-underline uppercase"
            >
              <FaHome />
              <h6 className="ml-3">Income Statement</h6>
            </Link>
            <Link
              to="balance-sheet"
              className="flex pt-1 pb-4 md:min-w-full font-bold text-blueGray-500 text-xs no-underline uppercase"
            >
              <FaAirFreshener />
              <h6 className="ml-3">Balance Sheet</h6>
            </Link>
            <Link
              to="cashflow-statement"
              className="flex pt-1 pb-4 md:min-w-full font-bold text-blueGray-500 text-xs no-underline uppercase"
            >
              <FaAirFreshener />
              <h6 className="ml-3">Cashflow Statement</h6>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Sidebar;
