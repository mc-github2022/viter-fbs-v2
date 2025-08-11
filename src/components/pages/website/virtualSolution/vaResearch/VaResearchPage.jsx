import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import VaResearchBanner from "./VaResearchBanner";
import VaResearchOverview from "./VaResearchOverview";
import VaResearchPartnerWithUs from "./VaResearchPartnerWithUs";
import VaResearchPricing from "./VaResearchPricing";
import VaResearchPartners from "./VaResearchPartners";
import VaResearchPartnersSay from "./VaResearchPartnersSay";
import VaResearchServiceList from "./VaResearchServiceList";
import { StoreContext } from "../../../../store/StoreContext";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";
import { apiVersion, getUrlParam } from "../../../../helpers/functions-general";
import useQueryData from "../../../../custom-hooks/useQueryData";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import PageNotFound from "../../../../partials/PageNotFound";

const VaResearchPage = () => {
  const [pageName, setPageName] = React.useState("va-business-support");
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

  const { data: businessTitlesData } = useQueryData(
    `${apiVersion}/business-titles`, // endpoint
    "get", // method
    "business-titles", // key
    {},
    null,
    true
  );

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  const categoryUrl = "va-business-support";

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
      <Header pageName={pageName} services={"default"} />
      <VaResearchBanner pageName={pageName} />
      <VaResearchOverview />
      <VaResearchServiceList pageName={pageName} />
      <VaResearchPricing
        pageName={pageName}
        businessTitlesData={businessTitlesData}
      />
      <VaResearchPartners businessTitlesData={businessTitlesData} />
      <VaResearchPartnersSay businessTitlesData={businessTitlesData} />
      <Footer />
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default VaResearchPage;
