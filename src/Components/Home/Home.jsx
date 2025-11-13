import React from "react";
import BannerContainer from "../Banners/BannerContainer";
import FearturedRealState from "../FearturedRealState/FearturedRealState";
import WhyChooseUS from "../WhyChooseUs/WhyChooseUS";
import Footer from "../Footer/Footer";
import TrustedByThousands from "../TrustedByThousands/TrustedByThousands";
// import Feature from "../Feature/Feature";

const Home = () => {
  return (
    <div className="">
      <BannerContainer></BannerContainer>
      {/* <Feature></Feature> */}
      <FearturedRealState></FearturedRealState>
      <TrustedByThousands></TrustedByThousands>
      <WhyChooseUS></WhyChooseUS>
    </div>
  );
};

export default Home;
