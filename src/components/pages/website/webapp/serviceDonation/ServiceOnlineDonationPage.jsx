import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import ServiceOnlineDonationBanner from "./ServiceOnlineDonationBanner";
import ServiceOnlineDonationPartners from "./ServiceOnlineDonationPartners";
import ServiceOnlineDonationOverview from "./ServiceOnlineDonationOverview";
import ServiceOnlineDonationScope from "./ServiceOnlineDonationScope";
import ServiceOnlineDonationPricing from "./ServiceOnlineDonationPricing";
import ServiceOnlineDonationPartnersSay from "./ServiceOnlineDonationPartnersSay";
import { StoreContext } from "../../../../store/StoreContext";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";
import { apiVersion, getUrlParam } from "../../../../helpers/functions-general";
import useQueryData from "../../../../custom-hooks/useQueryData";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import PageNotFound from "../../../../partials/PageNotFound";

const ServiceOnlineDonationPage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [pageName, setPageName] = React.useState("donation");
  const id = getUrlParam().get("id");

  const { isLoading, data: packagesCategoryData } = useQueryData(
    `${apiVersion}/packages-category`, // endpoint
    "get", // method
    "packages-category", // key
    {},
    null,
    true
  );

  const { data: donationTitlesData } = useQueryData(
    `${apiVersion}/donation-titles`, // endpoint
    "get", // method
    "donation-titles", // key
    {},
    null,
    true
  );


  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  const categoryUrl = "webapp-onlinedonation";

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
      <ServiceOnlineDonationBanner pageName={pageName} />
      <ServiceOnlineDonationOverview pageName={pageName} />
      <ServiceOnlineDonationScope pageName={pageName} donationTitlesData={donationTitlesData}/>
      <ServiceOnlineDonationPricing pageName={pageName} donationTitlesData={donationTitlesData}/>
      {/* <ServiceOnlineDonationPartners /> */}
      <ServiceOnlineDonationPartnersSay donationTitlesData={donationTitlesData}/>
      <Footer />
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default ServiceOnlineDonationPage;
