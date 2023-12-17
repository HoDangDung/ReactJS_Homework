import React from "react";
import Banner from "./Banner/Banner";
import Intro from "./Intro/Intro";
import Showing from "./Showing/Showing";

const Home = () => {
  return (
    <div>
      <Intro />
      {/* <Banner /> */}
      <Showing />
    </div>
  );
};

export default Home;
