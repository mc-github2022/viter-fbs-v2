import React from "react";
import BreadCrumbs from "../../../../../partials/BreadCrumbs";
import Dashboard from "../../../../../partials/dashboard/Dashboard";
import Navigation from "../../../../../partials/dashboard/Navigation";
import Header from "../../../dashHome/Header";
import HrisBanner from "./hris-banner/HrisBanner";
import HrisOverview from "./hris-overview/HrisOverview";
import HrisPricing from "./hris-pricing/HrisPricing";
import HrisScope from "./hris-scope/HrisScope";
import ServiceHrPartners from "../../../../website/webapp/serviceHr/ServiceHrPartners";
import ServiceHrPartnersSay from "../../../../website/webapp/serviceHr/ServiceHrPartnersSay";
import { StoreContext } from "../../../../../store/StoreContext";
import useQueryData from "../../../../../custom-hooks/useQueryData";
import { apiVersion } from "../../../../../helpers/functions-general";
import { setIsUpdateHome } from "../../../../../store/StoreAction";
import Footer from "../../../footer/Footer";
import ModalUpdateQuickLinks from "../../../footer/ModalUpdateQuickLinks";
import ModalUpdateCopyright from "../../../footer/ModalUpdateCopyright";
import ModalSuccess from "../../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../../partials/modals/ModalError";
import ModalUpdateHrisBanner from "./hris-banner/ModalUpdateHrisBanner";

const HrInformationSystem = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState("");

  const { data: hrisData } = useQueryData(
    `${apiVersion}/hris`, // endpoint
    "get", // method
    "hris" // key
  );

  const { data: contactFormDefaultData } = useQueryData(
    `${apiVersion}/contactDefault`, // endpoint
    "get", // method
    "contactDefault" // key
  );

  const { data: footerData } = useQueryData(
    `${apiVersion}/footer`, // endpoint
    "get", // method
    "footer" // key
  );

  const handleUpdateHrisBanner = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "hris-banner" }));
    setItemEdit("hrisBannerUpdate");
  };

  const handleUpdateFooterQuicklinks = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "footer-quicklinks" }));
    setItemEdit("footerQuicklinksUpdate");
  };

  const handleUpdateFooterCopyright = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "footer-copyright" }));
    setItemEdit("footerCopyrightUpdate");
  };

  return (
    <>
      <section id="" className="bg-light">
        <Navigation menu="services" submenu="web-application" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex justify-between ">
              <BreadCrumbs param={location.search} />
              <div className="text-sm text-[black] font-semibold">
                <h2>HR Information System</h2>
              </div>
            </div>
            <div className=" pb-4 bg-light shadow-xl">
              <Header />
              <HrisBanner
                hrisData={hrisData}
                handleUpdateHrisBanner={handleUpdateHrisBanner}
              />
              <HrisOverview />
              <HrisScope />
              <HrisPricing />
              <ServiceHrPartners />
              <ServiceHrPartnersSay />
              <Footer
                handleUpdateFooterQuicklinks={handleUpdateFooterQuicklinks}
                handleUpdateFooterCopyright={handleUpdateFooterCopyright}
                footerData={footerData}
                contactFormDefaultData={contactFormDefaultData}
              />
            </div>
          </div>
        </Dashboard>
      </section>

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "hris-banner" && (
          <ModalUpdateHrisBanner itemEdit={itemEdit} hrisData={hrisData} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "footer-quicklinks" && (
          <ModalUpdateQuickLinks itemEdit={itemEdit} footerData={footerData} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "footer-copyright" && (
          <ModalUpdateCopyright itemEdit={itemEdit} footerData={footerData} />
        )}

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default HrInformationSystem;
