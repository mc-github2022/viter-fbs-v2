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
import ServicePayrollBanner from "./ServicePayrollBanner";
import ServicePayrollOverview from "./ServicePayrollOverview";
import ServicePayrollPartners from "./ServicePayrollPartners";
import ServicePayrollPartnersSay from "./ServicePayrollPartnersSay";
import ServicePayrollPricing from "./ServicePayrollPricing";
import ServicePayrollScope from "./ServicePayrollScope";

const ServicePayrollPage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [pageName, setPageName] = React.useState("payroll");
  const id = getUrlParam().get("id");

  const { isLoading, data: packagesCategoryData } = useQueryData(
    `${apiVersion}/packages-category`, // endpoint
    "get", // method
    "packages-category" // key
  );

  const { data: payrollData } = useQueryData(
    `${apiVersion}/payroll`, // endpoint
    "get", // method
    "payroll" // key
  );

  const { data: payrollTitlesData } = useQueryData(
    `${apiVersion}/payroll-titles`, // endpoint
    "get", // method
    "payroll-titles" // key
  );

  const categoryUrl = "webapp-payroll";

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (isLoading || !packagesCategoryData) {
    return <FetchingSpinner />;
  }

  const matchingItem = packagesCategoryData?.data.find(
    (item) =>
      item.packages_category_url === categoryUrl &&
      String(item.packages_category_aid) === String(id)
  );

  if (!matchingItem) {
    return <PageNotFound />;
  }

  return (
    <>
      <Header pageName={pageName} services={"default"}/>
      <ServicePayrollBanner payrollData={payrollData}/>
      <ServicePayrollOverview payrollData={payrollData}/>
      <ServicePayrollScope payrollTitlesData={payrollTitlesData} payrollData={payrollData}/>
      <ServicePayrollPricing payrollTitlesData={payrollTitlesData} pageName={pageName} />
      <ServicePayrollPartners payrollTitlesData={payrollTitlesData}/>
      <ServicePayrollPartnersSay payrollTitlesData={payrollTitlesData}/>
      <Footer />
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default ServicePayrollPage;
