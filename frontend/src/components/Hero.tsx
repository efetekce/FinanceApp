type Props = {};
import { Link } from "react-router-dom";

const Hero = (props: Props) => {
  return (
    <section id="hero">
      <div className="flex lg:flex-row flex-col-reverse mx-auto p-8 container">
        <div className="flex flex-col space-y-10 m-10 lg:m-10 xl:m-20 mb-44 lg:mt:16 xl:mb-52 lg:w-1/2">
          <h1 className="lg:max-w-md font-bold text-5xl text-center lg:text-6xl lg:text-left">
            Financial data with no news.
          </h1>
          <p className="lg:max-w-md text-2xl text-center text-gray-400 lg:text-left">
            Search relevant financial documents without fear mongering and fake
            news.
          </p>
          <div className="mx-auto lg:mx-0">
            <Link
              to={"/search"}
              className="bg-lightGreen hover:opacity-70 px-10 py-5 lg:py-4 rounded font-bold text-2xl text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="mx-auto mb-24 lg:mb-0 md:px-10 md:w-180 lg:w-1/2">
          <img src="/currency.png" alt="" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
