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
              <Process handleUpdateProcessTitle={handleUpdateProcessTitle} />
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
      {/* {store.isAdd && (
        <ModalAddBanner setIsAdd={setIsAdd} itemEdit={itemEdit} />
      )}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />} */}
    </>
  );
};

export default Home;
