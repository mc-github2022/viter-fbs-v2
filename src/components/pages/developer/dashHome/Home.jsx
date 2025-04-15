import React from "react";
import Navigation from "../../../partials/dashboard/Navigation";
import Dashboard from "../../../partials/dashboard/Dashboard";
import Header from "./Header";
import Banner from "./Banner";
import Process from "./process/Process";
import Testimonial from "./Testimonial";
import Partners from "./Partners";
import Insights from "./Insights";
import Footer from "./Footer";
import { StoreContext } from "../../../store/StoreContext";
import { setIsUpdateHome } from "../../../store/StoreAction";
import ModalUpdateProcessTitle from "./process/ModalUpdateProcessTitle";
import { apiVersion } from "../../../helpers/functions-general";
import useQueryData from "../../../custom-hooks/useQueryData";
import ModalSuccess from "../../../partials/modals/ModalSuccess";
import ModalError from "../../../partials/modals/ModalError";
import ModalUpdateProcessA from "./process/ModalUpdateProcessA";
import ModalUpdateProcessB from "./process/ModalUpdateProcessB";
import ModalUpdateProcessC from "./process/ModalUpdateProcessC";
import ModalUpdateProcessD from "./process/ModalUpdateProcessD";
import Services from "./services/Services";
import ModalUpdateServicesTitle from "./services/ModalUpdateServicesTitle";
import ModalUpdateServicesA from "./services/ModalUpdateServicesA";
import ModalUpdateServicesB from "./services/ModalUpdateServicesB";
import ModalUpdateServicesC from "./services/ModalUpdateServicesC";
import ModalUpdateServicesD from "./services/ModalUpdateServicesD";
import PartnerWithUs from "./partner-with-us/PartnerWithUs";
import ModalUpdatePartnerWithUs from "./partner-with-us/ModalUpdatePartnerWithUs";
import ModalUpdateContactFormDefault from "../contact-form-default/ModalUpdateContactFormDefault";

const Home = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState("");

  const { data: processData } = useQueryData(
    `${apiVersion}/process`, // endpoint
    "get", // method
    "process" // key
  );

  const { data: servicesData } = useQueryData(
    `${apiVersion}/services`, // endpoint
    "get", // method
    "services" // key
  );

  const { data: partnerWithUsData } = useQueryData(
    `${apiVersion}/partnerWithUs`, // endpoint
    "get", // method
    "partnerWithUs" // key
  );

  const { data: contactFormDefaultData } = useQueryData(
    `${apiVersion}/contactDefault`, // endpoint
    "get", // method
    "contactDefault" // key
  );

  const handleUpdateProcessTitle = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "process-title" }));
    setItemEdit("processTitleUpdate");
  };

  const handleUpdateProcessA = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "process-a" }));
    setItemEdit("processAUpdate");
  };

  const handleUpdateProcessB = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "process-b" }));
    setItemEdit("processBUpdate");
  };

  const handleUpdateProcessC = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "process-c" }));
    setItemEdit("processCUpdate");
  };

  const handleUpdateProcessD = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "process-d" }));
    setItemEdit("processDUpdate");
  };

  const handleUpdateServicesTitle = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "services-title" }));
    setItemEdit("servicesTitleUpdate");
  };

  const handleUpdateServicesA = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "services-a" }));
    setItemEdit("servicesAUpdate");
  };

  const handleUpdateServicesB = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "services-b" }));
    setItemEdit("servicesBUpdate");
  };

  const handleUpdateServicesC = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "services-c" }));
    setItemEdit("servicesCUpdate");
  };

  const handleUpdateServicesD = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "services-d" }));
    setItemEdit("servicesDUpdate");
  };

  const handleUpdatePartnerWithUs = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "partner-with-us" }));
    setItemEdit("partnerWithUsUpdate");
  };

  const handleUpdateContactFormDefault = () => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "contact-form-default" })
    );
    setItemEdit("contactFormDefaultUpdate");
  };

  return (
    <>
      <section id="" className="bg-light">
        <Navigation menu="home" submenu="" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex justify-between ">
              <div className="text-sm text-[black] font-semibold">
                <h2>Home Page</h2>
              </div>
            </div>
            <div className=" pb-4 bg-light shadow-xl">
              <Header />
              <Banner />
              <Process
                handleUpdateProcessTitle={handleUpdateProcessTitle}
                handleUpdateProcessA={handleUpdateProcessA}
                handleUpdateProcessB={handleUpdateProcessB}
                handleUpdateProcessC={handleUpdateProcessC}
                handleUpdateProcessD={handleUpdateProcessD}
                processData={processData}
              />
              <Services
                servicesData={servicesData}
                handleUpdateServicesTitle={handleUpdateServicesTitle}
                handleUpdateServicesA={handleUpdateServicesA}
                handleUpdateServicesB={handleUpdateServicesB}
                handleUpdateServicesC={handleUpdateServicesC}
                handleUpdateServicesD={handleUpdateServicesD}
              />
              <PartnerWithUs
                partnerWithUsData={partnerWithUsData}
                contactFormDefaultData={contactFormDefaultData}
                handleUpdatePartnerWithUs={handleUpdatePartnerWithUs}
                handleUpdateContactFormDefault={handleUpdateContactFormDefault}
              />
              <Testimonial />
              <Partners />
              <Insights />
              <Footer />
            </div>
          </div>
        </Dashboard>
      </section>

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "process-title" && (
          <ModalUpdateProcessTitle
            itemEdit={itemEdit}
            processData={processData}
          />
        )}
      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "process-a" && (
          <ModalUpdateProcessA itemEdit={itemEdit} processData={processData} />
        )}
      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "process-b" && (
          <ModalUpdateProcessB itemEdit={itemEdit} processData={processData} />
        )}
      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "process-c" && (
          <ModalUpdateProcessC itemEdit={itemEdit} processData={processData} />
        )}
      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "process-d" && (
          <ModalUpdateProcessD itemEdit={itemEdit} processData={processData} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "services-title" && (
          <ModalUpdateServicesTitle
            itemEdit={itemEdit}
            servicesData={servicesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "services-a" && (
          <ModalUpdateServicesA
            itemEdit={itemEdit}
            servicesData={servicesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "services-b" && (
          <ModalUpdateServicesB
            itemEdit={itemEdit}
            servicesData={servicesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "services-c" && (
          <ModalUpdateServicesC
            itemEdit={itemEdit}
            servicesData={servicesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "services-d" && (
          <ModalUpdateServicesD
            itemEdit={itemEdit}
            servicesData={servicesData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "partner-with-us" && (
          <ModalUpdatePartnerWithUs
            itemEdit={itemEdit}
            partnerWithUsData={partnerWithUsData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "contact-form-default" && (
          <ModalUpdateContactFormDefault
            itemEdit={itemEdit}
            contactFormDefaultData={contactFormDefaultData}
          />
        )}

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Home;
