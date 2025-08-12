import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import WebDesignBanner from "./WebDesignBanner";
import WebDesignOverview from "./WebDesignOverview";
import WebDesignPartners from "./WebDesignPartners";
import WebDesignPartnersSay from "./WebDesignPartnersSay";
import WebDesignPricing from "./WebDesignPricing";
import WebDesignScope from "./WebDesignScope";
import { StoreContext } from "../../../../store/StoreContext";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";
import { apiVersion, getUrlParam } from "../../../../helpers/functions-general";
import useQueryData from "../../../../custom-hooks/useQueryData";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import PageNotFound from "../../../../partials/PageNotFound";

const WebDesignPage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [pageName, setPageName] = React.useState("web-design");
  const id = getUrlParam().get("id");

  const { isLoading, data: packagesCategoryData } = useQueryData(
    `${apiVersion}/packages-category`, // endpoint
    "get", // method
    "packages-category", // key
    {},
    null,
    true
  );

  const { data: websiteTitlesData } = useQueryData(
    `${apiVersion}/website-titles`, // endpoint
    "get", // method
    "website-titles", // key
    {},
    null,
    true
  );

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  const categoryUrl = "web-design";

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
      <Header pageName={pageName} services={"web services"} page={"Web Design"}/>
      <WebDesignBanner pageName={pageName} />
      <WebDesignOverview pageName={pageName} />
      <WebDesignScope pageName={pageName} websiteTitlesData={websiteTitlesData}/>
      <WebDesignPricing pageName={pageName} websiteTitlesData={websiteTitlesData}/>
      <WebDesignPartners websiteTitlesData={websiteTitlesData}/>
      <WebDesignPartnersSay websiteTitlesData={websiteTitlesData}/>
      <Footer />
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default WebDesignPage;
