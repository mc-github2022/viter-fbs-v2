import React from "react";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import BookkeepingBanner from "./BookkeepingBanner";
import BookkeepingOverview from "./BookkeepingOverview";
import BookkeepingServiceList from "./BookkeepingServiceList";
import BookkeepingPricing from "./BookkeepingPricing";
import BookkeepingPartners from "./BookkeepingPartners";
import BookkeepingPartnersSay from "./BookkeepingPartnersSay";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";
import { StoreContext } from "../../../../store/StoreContext";
import { apiVersion, getUrlParam } from "../../../../helpers/functions-general";
import useQueryData from "../../../../custom-hooks/useQueryData";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import PageNotFound from "../../../../partials/PageNotFound";

const BookkeepingPage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [pageName, setPageName] = React.useState("bookkeeping");
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

  const categoryUrl = "accounting-bookkeeping";

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
      <BookkeepingBanner pageName={pageName} />
      <BookkeepingOverview />
      {/* <BookkeepingServiceList /> */}
      <BookkeepingPricing pageName={pageName} />
      {/* <BookkeepingPartners />
      <BookkeepingPartnersSay /> */}
      <Footer />
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default BookkeepingPage;
