import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import ConStudApplyNow from "./ConStudApplyNow";
import ConStudBanner from "./ConStudBanner";
import ConStudBatches from "./ConStudBatches";
import ConStudPartners from "./ConStudPartners";
import ConStudPartnersSay from "./ConStudPartnersSay";
import ConStudPartnersWithUs from "./ConStudPartnersWithUs";
import ConStudServices from "./ConStudServices";
import ConStudTeam from "./ConStudTeam";
import ConStudVidTestimonials from "./ConStudVidTestimonials";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";
import { StoreContext } from "../../../../store/StoreContext";
import { apiVersion, getUrlParam } from "../../../../helpers/functions-general";
import useQueryData from "../../../../custom-hooks/useQueryData";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import PageNotFound from "../../../../partials/PageNotFound";

const ConStudPage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [pageName, setPageName] = React.useState("Continuing Study");
  const id = getUrlParam().get("id");

  const { isLoading, data: packagesCategoryData } = useQueryData(
    `${apiVersion}/packages-category`, // endpoint
    "get", // method
    "packages-category" // key
  );

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  const categoryUrl = "continuing-studies";

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
      <ConStudBanner pageName={pageName} />
      {/* <ConStudPartners /> */}
      <ConStudPartnersWithUs pageName={pageName} />
      <ConStudServices />
      <ConStudApplyNow pageName={pageName} />
      <ConStudTeam />
      <ConStudBatches />
      <ConStudVidTestimonials />
      <ConStudPartnersSay />
      <Footer />

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default ConStudPage;
