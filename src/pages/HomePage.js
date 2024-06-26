import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Quote from "../components/Quote";
import Layout from "../components/Layout";
// import AreaOfFocus from "../components/AreaOfFocus";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Quote />
      <Layout />
      {/* <AreaOfFocus /> */}
    </div>
  );
};

export default HomePage;
