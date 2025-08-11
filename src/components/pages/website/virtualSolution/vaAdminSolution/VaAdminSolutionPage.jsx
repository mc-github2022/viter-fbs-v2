import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import VaAdminSolutionBanner from "./VaAdminSolutionBanner";
import VaAdminSolutionOverview from "./VaAdminSolutionOverview";
import VaAdminSolutionPartners from "./VaAdminSolutionPartners";
import VaAdminSolutionPartnersSay from "./VaAdminSolutionPartnersSay";
import VaAdminSolutionPartnerWithUs from "./VaAdminSolutionPartnerWithUs";
import VaAdminSolutionPricing from "./VaAdminSolutionPricing";
import VaAdminServiceList from "./VaAdminServiceList";
import { StoreContext } from "../../../../store/StoreContext";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";
import { apiVersion, getUrlParam } from "../../../../helpers/functions-general";
import useQueryData from "../../../../custom-hooks/useQueryData";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import PageNotFound from "../../../../partials/PageNotFound";

const VaAdminSolutionPage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [pageName, setPageName] = React.useState("va-administrative");
  const id = getUrlParam().get("id");

  const { isLoading, data: packagesCategoryData } = useQueryData(
    `${apiVersion}/packages-category`, // endpoint
    "get", // method
    "packages-category", // key
    {},
    null,
    true
  );

  const { data: administrativeTitlesData } = useQueryData(
    `${apiVersion}/administrative-titles`, // endpoint
    "get", // method
    "administrative-titles", // key
    {},
    null,
    true
  );

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  const categoryUrl = "va-administrative";

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
      <VaAdminSolutionBanner pageName={pageName} />
      <VaAdminSolutionOverview />
      <VaAdminServiceList />
      {/* <VaAdminSolutionPartnerWithUs /> */}
      <VaAdminSolutionPricing pageName={pageName} administrativeTitlesData={administrativeTitlesData} />
      <VaAdminSolutionPartners administrativeTitlesData={administrativeTitlesData}/>
      <VaAdminSolutionPartnersSay administrativeTitlesData={administrativeTitlesData}/>
      <Footer />
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default VaAdminSolutionPage;
