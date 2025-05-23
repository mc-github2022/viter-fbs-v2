import React from "react";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { apiVersion, getUrlParam } from "../../../../helpers/functions-general";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import ModalError from "../../../../partials/modals/ModalError";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import PageNotFound from "../../../../partials/PageNotFound";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import { StoreContext } from "../../../../store/StoreContext";
import GraphicDesignBanner from "./GraphicDesignBanner";
import GraphicDesignOverview from "./GraphicDesignOverview";
import GraphicDesignPartners from "./GraphicDesignPartners";
import GraphicDesignPartnersSay from "./GraphicDesignPartnersSay";
import GraphicDesignPortfolio from "./GraphicDesignPortfolio";
import GraphicDesignPricing from "./GraphicDesignPricing";
import GraphicDesignScope from "./GraphicDesignScope";

const GraphicDesignPage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [pageName, setPageName] = React.useState("graphic-design");
  const id = getUrlParam().get("id");

  const { isLoading, data: packagesCategoryData } = useQueryData(
    `${apiVersion}/packages-category`, // endpoint
    "get", // method
    "packages-category", // key
    {},
    null,
    true
  );

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  const categoryUrl = "graphic-design";

  if (isLoading || !packagesCategoryData) {
    return <FetchingSpinner />;
  }

  const matchingItem = packagesCategoryData.data.find(
    (item) =>
      item.packages_category_url === categoryUrl &&
      String(item.packages_category_aid) === String(id)
  );

  if (!matchingItem) {
    return <PageNotFound />;
  }

  return (
    <>
      <Header pageName={pageName} />
      <GraphicDesignBanner pageName={pageName} />
      <GraphicDesignOverview pageName={pageName} />
      <GraphicDesignScope pageName={pageName} />
      <GraphicDesignPricing pageName={pageName} />
      <GraphicDesignPortfolio />
      <GraphicDesignPartners />
      <GraphicDesignPartnersSay />
      <Footer />
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default GraphicDesignPage;
