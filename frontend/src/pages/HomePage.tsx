import { useEffect } from "react";
import Hero from "../components/Hero";
import useAuth from "../hooks/useAuth";

type Props = {};
const HomePage = (props: Props) => {
  const { accountLogin } = useAuth();

  useEffect(() => {
    accountLogin("kahveciiii", "$tarBucks111.");
  }, []);

  return (
    <div>
      <Hero />
    </div>
  );
};
export default HomePage;
