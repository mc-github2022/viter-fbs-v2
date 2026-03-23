import React from "react";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { apiVersion, getUrlParam } from "../../../../helpers/functions-general";
import Footer from "../../../../partials/Footer";
import Header from "../../../../partials/Header";
import ModalError from "../../../../partials/modals/ModalError";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import PageNotFound from "../../../../partials/PageNotFound";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import { StoreContext } from "../../../../store/StoreContext";
import ServiceBookingBanner from "./ServiceBookingBanner";
import ServiceBookingOverview from "./ServiceBookingOverview";
import ServiceBookingPricing from "./ServiceBookingPricing";
import ServiceBookingScope from "./ServiceBookingScope";

const ServiceBookingPage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [pageName, setPageName] = React.useState("booking");
  const id = getUrlParam().get("id");

  const { isLoading, data: packagesCategoryData } = useQueryData(
    `${apiVersion}/packages-category`, // endpoint
    "get", // method
    "packages-category", // key
    {},
    null,
    true,
  );

  const { data: bookingTitlesData } = useQueryData(
    `${apiVersion}/booking-titles`, // endpoint
    "get", // method
    "booking-titles", // key
    {},
    null,
    true,
  );

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  const categoryUrl = "webapp-online-booking";

  if (isLoading || !packagesCategoryData) {
    return <FetchingSpinner />;
  }

  const matchingItem = packagesCategoryData.data.find(
    (item) =>
      item.packages_category_url === categoryUrl &&
      String(item.packages_category_aid) === String(id),
  );

  if (!matchingItem) {
    return <PageNotFound />;
  }

  return (
    <>
      <Header pageName={pageName} services={"default"} page={"Home"} />
      <ServiceBookingBanner pageName={pageName} />
      <ServiceBookingOverview pageName={pageName} />
      <ServiceBookingScope
        pageName={pageName}
        bookingTitlesData={bookingTitlesData}
      />
      <ServiceBookingPricing
        pageName={pageName}
        bookingTitlesData={bookingTitlesData}
      />
      <Footer />
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default ServiceBookingPage;
