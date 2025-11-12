import React from "react";
import BannerContainer from "../Banners/BannerContainer";
import FearturedRealState from "../FearturedRealState/FearturedRealState";
import WhyChooseUS from "../WhyChooseUs/WhyChooseUS";
import Footer from "../Footer/Footer";
// import Feature from "../Feature/Feature";

const Home = () => {
  return (
    <div className="">
      <BannerContainer></BannerContainer>
      {/* <Feature></Feature> */}
      <FearturedRealState></FearturedRealState>
      <WhyChooseUS></WhyChooseUS>
    </div>
  );
};

export default Home;
