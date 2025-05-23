import React from "react";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";
import LcssPartners from "./LcssPartners";
import LcssPartnersWithUs from "./LcssPartnersWithUs";
import LcssServices from "./LcssServices";
import LcssApplyNow from "./LcssApplyNow";
import LcssTeam from "./LcssTeam";
import LcssVidTestimonials from "./LcssVidTestimonials";
import LcssPartnersSay from "./LcssPartnersSay";
import LcssBanner from "./LcssBanner";
import LcssBatches from "./LcssBatches";
import ModalSuccess from "../../../partials/modals/ModalSuccess";
import ModalError from "../../../partials/modals/ModalError";
import { StoreContext } from "../../../store/StoreContext";
import { apiVersion, getUrlParam } from "../../../helpers/functions-general";
import useQueryData from "../../../custom-hooks/useQueryData";
import FetchingSpinner from "../../../partials/spinners/FetchingSpinner";
import PageNotFound from "../../../partials/PageNotFound";

const LcssPage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [contactSubject, setContactSubject] =
    React.useState("Contact Form: LCSS");
  const [pageName, setPageName] = React.useState("College OJT");
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

  const categoryUrl = "college-ojt";

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
      <Header pageName={pageName} contactSubject={contactSubject} />
      <LcssBanner pageName={pageName} contactSubject={contactSubject} />
      <LcssPartners />
      <LcssPartnersWithUs pageName={pageName} contactSubject={contactSubject} />
      <LcssServices />
      <LcssApplyNow pageName={pageName} contactSubject={contactSubject} />
      <LcssTeam />
      <LcssBatches />
      <LcssVidTestimonials />
      <LcssPartnersSay />
      <Footer />
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default LcssPage;
