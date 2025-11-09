import React from "react";
import BannerContainer from "../Banners/BannerContainer";
import FearturedRealState from "../FearturedRealState/FearturedRealState";
import WhyChooseUS from "../WhyChooseUs/WhyChooseUS";
import Footer from "../Footer/Footer";
// import Feature from "../Feature/Feature";

const Home = () => {
  return (
    <div className="w-full">
      <BannerContainer></BannerContainer>
      {/* <Feature></Feature> */}
      <FearturedRealState></FearturedRealState>
      <WhyChooseUS></WhyChooseUS>
      <Footer></Footer>
    </div>
  );
};

export default Home;
