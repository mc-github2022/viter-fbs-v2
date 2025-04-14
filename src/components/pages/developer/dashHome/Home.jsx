import React from "react";
import Navigation from "../../../partials/dashboard/Navigation";
import Dashboard from "../../../partials/dashboard/Dashboard";
import Header from "./Header";
import Banner from "./Banner";
import Process from "./process/Process";
import Services from "./Services";
import PartnerWithUs from "./PartnerWithUs";
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

const Home = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState("");

  const { data: processData } = useQueryData(
    `${apiVersion}/process`, // endpoint
    "get", // method
    "process" // key
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

  return (
    <>
      <section id="" className="bg-light">
        <Navigation menu="home" submenu="" />
        <Dashboard>
          <div className="mx-5 pt-2 ">
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
              <Services />
              <PartnerWithUs />
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

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Home;
