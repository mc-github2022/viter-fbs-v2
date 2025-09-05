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
import VaSocialMediaManagementBanner from "./VaSocialMediaManagementBanner";
import VaSocialMediaManagementOverview from "./VaSocialMediaManagementOverview";
import VaSocialMediaManagementPartners from "./VaSocialMediaManagementPartners";
import VaSocialMediaManagementPartnersSay from "./VaSocialMediaManagementPartnersSay";
import VaSocialMediaManagementPricing from "./VaSocialMediaManagementPricing";
import VaSocialMediaManagementServiceList from "./VaSocialMediaManagementServiceList";

const VaSocialMediaManagementPage = () => {
  const [pageName, setPageName] = React.useState("social-media-management");
  const { store, dispatch } = React.useContext(StoreContext);
  const id = getUrlParam().get("id");

  const { isLoading, data: packagesCategoryData } = useQueryData(
    `${apiVersion}/packages-category`, // endpoint
    "get", // method
    "packages-category", // key
    {},
    null,
    true
  );

  const { data: socialTitlesData } = useQueryData(
    `${apiVersion}/social-titles`, // endpoint
    "get", // method
    "social-titles", // key
    {},
    null,
    true
  );

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  const categoryUrl = "social-media-management";

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
      <Header pageName={pageName} services={"default"} page={"Home"} />
      <VaSocialMediaManagementBanner />
      <VaSocialMediaManagementOverview />
      <VaSocialMediaManagementServiceList pageName={pageName} />
      <VaSocialMediaManagementPricing socialTitlesData={socialTitlesData} />
      <VaSocialMediaManagementPartners socialTitlesData={socialTitlesData} />
      <VaSocialMediaManagementPartnersSay socialTitlesData={socialTitlesData} />
      <Footer />
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default VaSocialMediaManagementPage;
