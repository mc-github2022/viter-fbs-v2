import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import WordPressBanner from "./WordPressBanner";
import WordPressOverview from "./WordPressOverview";
import WordPressScope from "./WordPressScope";
import WordPressPricing from "./WordPressPricing";
import WordPressPartners from "./WordPressPartners";
import WordPressPartnersSay from "./WordPressPartnersSay";
import WordPressPortfolio from "./WordPressPortfolio";
import { StoreContext } from "../../../../store/StoreContext";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";

const WordPressPage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [pageName, setPageName] = React.useState("cms");

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <>
      <Header pageName={pageName} />
      <WordPressBanner pageName={pageName} />
      <WordPressOverview pageName={pageName} />
      <WordPressScope pageName={pageName} />
      <WordPressPricing pageName={pageName} />
      <WordPressPortfolio />
      <WordPressPartners />
      <WordPressPartnersSay />
      <Footer />
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default WordPressPage;
