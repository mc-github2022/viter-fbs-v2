import React from "react";
import { StoreContext } from "../../../../store/StoreContext";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { apiVersion } from "../../../../helpers/functions-general";
import {
  setIsContactFormOpen,
  setIsUpdateHome,
} from "../../../../store/StoreAction";
import Dashboard from "../../../../partials/dashboard/Dashboard";
import Navigation from "../../../../partials/dashboard/Navigation";
import FormTable from "./FormTable";
import ModalUpdateForm from "./ModalUpdateForm";

const Form = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const { data: contactFormData } = useQueryData(
    `${apiVersion}/contactForm`, // endpoint
    "get", // method
    "contactForm" // key
  );

  // const { data: contactFormDefaultData } = useQueryData(
  //   `${apiVersion}/contactDefault`, // endpoint
  //   "get", // method
  //   "contactDefault" // key
  // );

  React.useEffect(() => {
    dispatch(setIsContactFormOpen(false));
  }, []);

  const handleUpdateContactForm = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "contact-form" }));
    setItemEdit("contactFormUpdate");
  };

  return (
    <>
      <section className="bg-light">
        <Navigation menu="contact-form" submenu="form" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="text-sm text-[black] font-semibold py-5">
              <h2>Contact Form</h2>
            </div>
            <div className=" pb-4 bg-light shadow-xl">
              <FormTable contactFormData={contactFormData} handleUpdateContactForm={handleUpdateContactForm}/>
            </div>
          </div>
        </Dashboard>
      </section>

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "contact-form" && (
          <ModalUpdateForm
            itemEdit={itemEdit}
            contactFormData={contactFormData}
          />
        )}
    </>
  );
};

export default Form;
