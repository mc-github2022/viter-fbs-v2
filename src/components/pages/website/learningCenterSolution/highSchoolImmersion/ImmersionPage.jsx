import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import ImmersionApplyNow from "./ImmersionApplyNow";
import ImmersionBanner from "./ImmersionBanner";
import ImmersionBatches from "./ImmersionBatches";
import ImmersionPartners from "./ImmersionPartners";
import ImmersionPartnersSay from "./ImmersionPartnersSay";
import ImmersionPartnersWithUs from "./ImmersionPartnersWithUs";
import ImmersionServices from "./ImmersionServices";
import ImmersionTeam from "./ImmersionTeam";
import ImmersionVidTestimonials from "./ImmersionVidTestimonials";
import { StoreContext } from "../../../../store/StoreContext";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";
import { apiVersion, getUrlParam } from "../../../../helpers/functions-general";
import useQueryData from "../../../../custom-hooks/useQueryData";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import PageNotFound from "../../../../partials/PageNotFound";

const ImmersionPage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [pageName, setPageName] = React.useState("Work Immersion");
  const id = getUrlParam().get("id");

  const { isLoading, data: packagesCategoryData } = useQueryData(
    `${apiVersion}/packages-category`, // endpoint
    "get", // method
    "packages-category", // key
    {},
    null,
    true
  );

  const { data: immersionTitlesData } = useQueryData(
    `${apiVersion}/immersion-titles`, // endpoint
    "get", // method
    "immersion-titles", // key
    {},
    null,
    true
  );

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  const categoryUrl = "work-immersion";

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
      <ImmersionBanner pageName={pageName} />
      <ImmersionPartners immersionTitlesData={immersionTitlesData}/>
      <ImmersionPartnersWithUs pageName={pageName} />
      <ImmersionServices />
      <ImmersionApplyNow pageName={pageName} />
      <ImmersionTeam />
      <ImmersionBatches immersionTitlesData={immersionTitlesData}/>
      <ImmersionVidTestimonials immersionTitlesData={immersionTitlesData}/>
      <ImmersionPartnersSay immersionTitlesData={immersionTitlesData}/>
      <Footer />
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default ImmersionPage;
