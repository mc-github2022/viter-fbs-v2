import React from "react";
import Banner from "./Banner";
import Services from "./Services";
import PartnerWithUs from "./PartnerWithUs";
import Testimonials from "./Testimonials";
import Partners from "./Partners";
import Insights from "./Insights";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";
import Process from "./Process";

const Home = () => {
  const [pageName, setPageName] = React.useState("home");
  return (
    <>
      <Header pageName={pageName} />
      <Banner />
      <Process />
      <Services />
      <PartnerWithUs pageName={pageName} />
      <Testimonials />
      <Partners />
      <Insights />
      <Footer />
    </>
  );
};

export default Home;
