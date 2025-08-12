import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import ModalError from "../../../../partials/modals/ModalError";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import { StoreContext } from "../../../../store/StoreContext";
import SinglePageBanner from "./SinglePageBanner";
import SinglePageOverview from "./SinglePageOverview";
import SinglePagePartners from "./SinglePagePartners";
import SinglePagePricing from "./SinglePagePricing";
import SinglePageScope from "./SinglePageScope";
import { apiVersion, getUrlParam } from "../../../../helpers/functions-general";
import useQueryData from "../../../../custom-hooks/useQueryData";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import PageNotFound from "../../../../partials/PageNotFound";

const SinglePageWebsite = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [pageName, setPageName] = React.useState("singlePage Website");
  const id = getUrlParam().get("id");

  const { isLoading, data: packagesCategoryData } = useQueryData(
    `${apiVersion}/packages-category`, // endpoint
    "get", // method
    "packages-category", // key
    {},
    null,
    true
  );

  const { data: singlepageTitlesData } = useQueryData(
    `${apiVersion}/singlepage-titles`, // endpoint
    "get", // method
    "singlepage-titles", // key
    {},
    null,
    true
  );

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  const categoryUrl = "web-singlepage";

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
      <Header pageName={pageName} services={"web services"} page={"Single Page Website"}/>
      <SinglePageBanner pageName={pageName} />
      <SinglePageOverview pageName={pageName} />
      <SinglePageScope
        pageName={pageName}
        singlepageTitlesData={singlepageTitlesData}
      />
      <SinglePagePricing
        pageName={pageName}
        singlepageTitlesData={singlepageTitlesData}
      />
      <SinglePagePartners singlepageTitlesData={singlepageTitlesData} />
      {/* <SinglePagePartnersSay /> */}
      <Footer />
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default SinglePageWebsite;
