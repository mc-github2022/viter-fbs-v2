import React from "react";
import Banner from "./Banner";
import Services from "./Services";
import PartnerWithUs from "./PartnerWithUs";
import Testimonials from "./Testimonials";
import Partners from "./Partners";
import Insights from "./Insights";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Services />
      <PartnerWithUs />
      <Testimonials />
      <Partners />
      <Insights />
      <Footer />
    </>
  );
};

export default Home;
