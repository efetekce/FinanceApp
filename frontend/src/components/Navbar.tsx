import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="relative mx-auto p-6 container">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-20">
          <Link to="/">
            <img src="./currency.png" alt="" />
          </Link>
          <div className="lg:flex hidden font-bold">
            <Link to={"/search"} className="text-black hover:text-darkBlue">
              Search
            </Link>
          </div>
        </div>
        <div className="lg:flex items-center space-x-6 hidden text-back">
          <div className="hover:text-darkBlue">Login</div>
          <a
            href=""
            className="bg-lightGreen hover:opacity-70 px-8 py-3 rounded font-bold text-white"
          >
            Signup
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
