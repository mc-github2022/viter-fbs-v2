import React from "react";
import Header from "../../../../partials/Header";
import Footer from "../../../../partials/Footer";
import ServiceEnrollmentBanner from "./ServiceEnrollmentBanner";
import ServiceEnrollmentPartners from "./ServiceEnrollmentPartners";
import ServiceEnrollmentOverview from "./ServiceEnrollmentOverview";
import ServiceEnrollmentScope from "./ServiceEnrollmentScope";
import ServiceEnrollmentPricing from "./ServiceEnrollmentPricing";
import ServiceEnrollmentPartnersSay from "./ServiceEnrollmentPartnersSay";
import { StoreContext } from "../../../../store/StoreContext";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";
import { apiVersion, getUrlParam } from "../../../../helpers/functions-general";
import useQueryData from "../../../../custom-hooks/useQueryData";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import PageNotFound from "../../../../partials/PageNotFound";

const ServiceEnrollmentPage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [pageName, setPageName] = React.useState("enrollment");
  const id = getUrlParam().get("id");

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  const { isLoading, data: packagesCategoryData } = useQueryData(
    `${apiVersion}/packages-category`, // endpoint
    "get", // method
    "packages-category", // key
    {},
    null,
    true
  );

  const { data: enrollmentTitlesData } = useQueryData(
    `${apiVersion}/enrollment-titles`, // endpoint
    "get", // method
    "enrollment-titles", // key
    {},
    null,
    true
  );

  const categoryUrl = "webapp-enrollment";

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
      <ServiceEnrollmentBanner pageName={pageName} />
      <ServiceEnrollmentOverview pageName={pageName} />
      <ServiceEnrollmentScope
        pageName={pageName}
        enrollmentTitlesData={enrollmentTitlesData}
      />
      <ServiceEnrollmentPricing
        pageName={pageName}
        enrollmentTitlesData={enrollmentTitlesData}
      />
      {/* <ServiceEnrollmentPartners /> */}
      <ServiceEnrollmentPartnersSay  enrollmentTitlesData={enrollmentTitlesData}/>
      <Footer />
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default ServiceEnrollmentPage;
