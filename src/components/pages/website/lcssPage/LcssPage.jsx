import React from "react";
import useQueryData from "../../../custom-hooks/useQueryData";
import { apiVersion, getUrlParam } from "../../../helpers/functions-general";
import Footer from "../../../partials/Footer";
import Header from "../../../partials/Header";
import PageNotFound from "../../../partials/PageNotFound";
import FetchingSpinner from "../../../partials/spinners/FetchingSpinner";
import { StoreContext } from "../../../store/StoreContext";
import LcssApplyNow from "./LcssApplyNow";
import LcssBanner from "./LcssBanner";
import LcssBatches from "./LcssBatches";
import LcssPartners from "./LcssPartners";
import LcssPartnersSay from "./LcssPartnersSay";
import LcssPartnersWithUs from "./LcssPartnersWithUs";
import LcssServices from "./LcssServices";
import LcssTeam from "./LcssTeam";
import LcssVidTestimonials from "./LcssVidTestimonials";

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

  const { data: ojtTitlesData } = useQueryData(
    `${apiVersion}/ojt-titles`, // endpoint
    "get", // method
    "ojt-titles", // key
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
      <Header
        pageName={pageName}
        contactSubject={contactSubject}
        services={"lcss services"}
      />
      <LcssBanner pageName={pageName} contactSubject={contactSubject} />
      <LcssPartners ojtTitlesData={ojtTitlesData} />
      <LcssPartnersWithUs
        pageName={pageName}
        contactSubject={contactSubject}
        services={"lcss services"}
      />
      <LcssServices />
      <LcssApplyNow pageName={pageName} contactSubject={contactSubject} />
      <LcssTeam />
      <LcssBatches ojtTitlesData={ojtTitlesData} />
      <LcssVidTestimonials ojtTitlesData={ojtTitlesData} />
      <LcssPartnersSay ojtTitlesData={ojtTitlesData} />
      <Footer />
    </>
  );
};

export default LcssPage;
