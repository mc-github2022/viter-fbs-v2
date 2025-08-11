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
import ServiceHrBanner from "./ServiceHrBanner";
import ServiceHrOverview from "./ServiceHrOverview";
import ServiceHrPartners from "./ServiceHrPartners";
import ServiceHrPartnersSay from "./ServiceHrPartnersSay";
import ServiceHrPricing from "./ServiceHrPricing";
import ServiceHrScope from "./ServiceHrScope";

const ServiceHrPage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [pageName, setPageName] = React.useState("hris");
  const id = getUrlParam().get("id");

  const { isLoading, data: packagesCategoryData } = useQueryData(
    `${apiVersion}/packages-category`, // endpoint
    "get", // method
    "packages-category", // key
    {},
    null,
    true
  );

  const { data: hrisData } = useQueryData(
    `${apiVersion}/hris`, // endpoint
    "get", // method
    "hris", // key
    {},
    null,
    true
  );

  const { data: hrisTitlesData } = useQueryData(
    `${apiVersion}/hris-titles`, // endpoint
    "get", // method
    "hris-titles", // key
    {},
    null,
    true
  );

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  const categoryUrl = "webapp-hris";

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
      <Header pageName={pageName} services={"default"}/>
      <ServiceHrBanner hrisData={hrisData} />
      <ServiceHrOverview hrisData={hrisData} />
      <ServiceHrScope hrisData={hrisData} hrisTitlesData={hrisTitlesData} />
      <ServiceHrPricing pageName={pageName} hrisTitlesData={hrisTitlesData} />
      <ServiceHrPartners hrisTitlesData={hrisTitlesData} />
      <ServiceHrPartnersSay hrisTitlesData={hrisTitlesData} />
      <Footer />
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default ServiceHrPage;
