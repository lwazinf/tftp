import type { NextPage } from "next";
import DC01_ from "../components/DC01_";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center lg:w-[1200px] md:w-[600px] min-h-screen relative">
      <DC01_/>
    </div>
  );
};

export default Home;