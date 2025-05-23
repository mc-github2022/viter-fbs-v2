import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import VaMarketingBanner from "./VaMarketingBanner";
import VaMarketingOverview from "./VaMarketingOverview";
import VaMarketingPartnerWithUs from "./VaMarketingPartnerWithUs";
import VaMarketingPricing from "./VaMarketingPricing";
import VaMarketingPartners from "./VaMarketingPartners";
import VaMarketingPartnersSay from "./VaMarketingPartnersSay";
import VaMarketingServiceList from "./VaMarketingServiceList";
import { StoreContext } from "../../../../store/StoreContext";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";
import { apiVersion, getUrlParam } from "../../../../helpers/functions-general";
import useQueryData from "../../../../custom-hooks/useQueryData";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import PageNotFound from "../../../../partials/PageNotFound";

const VaMarketingPage = () => {
  const [pageName, setPageName] = React.useState("va-marketing");
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

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  const categoryUrl = "va-marketing";

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
      <VaMarketingBanner pageName={pageName} />
      <VaMarketingOverview />
      <VaMarketingServiceList pageName={pageName} />
      <VaMarketingPricing pageName={pageName} />
      <VaMarketingPartners />
      <VaMarketingPartnersSay />
      <Footer />
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default VaMarketingPage;
