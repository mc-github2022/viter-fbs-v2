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
import ModalSuccess from "../../../partials/modals/ModalSuccess";
import ModalError from "../../../partials/modals/ModalError";
import { StoreContext } from "../../../store/StoreContext";

const Home = () => {
  const [pageName, setPageName] = React.useState("home");
  const { store, dispatch } = React.useContext(StoreContext);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

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
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Home;
