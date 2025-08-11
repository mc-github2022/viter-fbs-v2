import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import ServiceInventoryBanner from "./ServiceInventoryBanner";
import ServiceInventoryPartners from "./ServiceInventoryPartners";
import ServiceInventoryOverview from "./ServiceInventoryOverview";
import ServiceInventoryScope from "./ServiceInventoryScope";
import ServiceInventoryPricing from "./ServiceInventoryPricing";
import ServiceInventoryPartnersSay from "./ServiceInventoryPartnersSay";
import { StoreContext } from "../../../../store/StoreContext";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";
import { apiVersion, getUrlParam } from "../../../../helpers/functions-general";
import useQueryData from "../../../../custom-hooks/useQueryData";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import PageNotFound from "../../../../partials/PageNotFound";

const ServiceInventoryPage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [pageName, setPageName] = React.useState("inventory");
  const id = getUrlParam().get("id");

  const { isLoading, data: packagesCategoryData } = useQueryData(
    `${apiVersion}/packages-category`, // endpoint
    "get", // method
    "packages-category", // key
    {},
    null,
    true
  );

  const { data: assetTitlesData } = useQueryData(
    `${apiVersion}/asset-titles`, // endpoint
    "get", // method
    "asset-titles", // key
    {},
    null,
    true
  );

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  const categoryUrl = "webapp-asset-inventory";

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
      <Header pageName={pageName} services={"default"} page={"Home"}/>
      <ServiceInventoryBanner pageName={pageName} />
      {/* <ServiceInventoryPartners /> */}
      <ServiceInventoryOverview pageName={pageName} />
      <ServiceInventoryScope
        pageName={pageName}
        assetTitlesData={assetTitlesData}
      />
      <ServiceInventoryPricing
        pageName={pageName}
        assetTitlesData={assetTitlesData}
      />
      {/* <ServiceInventoryPartnersSay /> */}
      <Footer />
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default ServiceInventoryPage;
