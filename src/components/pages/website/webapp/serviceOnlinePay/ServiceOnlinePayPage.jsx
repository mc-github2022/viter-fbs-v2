import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import ServiceOnlinePayBanner from "./ServiceOnlinePayBanner";
import ServiceOnlinePayPartners from "./ServiceOnlinePayPartners";
import ServiceOnlinePayOverview from "./ServiceOnlinePayOverview";
import ServiceOnlinePayScope from "./ServiceOnlinePayScope";
import ServiceOnlinePayPricing from "./ServiceOnlinePayPricing";
import ServiceOnlinePayPartnersSay from "./ServiceOnlinePayPartnersSay";
import { StoreContext } from "../../../../store/StoreContext";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";
import { apiVersion, getUrlParam } from "../../../../helpers/functions-general";
import useQueryData from "../../../../custom-hooks/useQueryData";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import PageNotFound from "../../../../partials/PageNotFound";

const ServiceOnlinePayPage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [pageName, setPageName] = React.useState("online-payment");
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

  const categoryUrl = "webapp-onlinepayment";

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
      <ServiceOnlinePayBanner pageName={pageName} />
      <ServiceOnlinePayOverview pageName={pageName} />
      <ServiceOnlinePayScope pageName={pageName} />
      <ServiceOnlinePayPricing pageName={pageName} />
      {/* <ServiceOnlinePayPartners /> */}
      {/* <ServiceOnlinePayPartnersSay /> */}
      <Footer />

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default ServiceOnlinePayPage;
