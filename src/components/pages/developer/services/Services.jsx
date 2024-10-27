import React from "react";
import Navigation from "../../../partials/dashboard/Navigation";
import Dashboard from "../../../partials/dashboard/Dashboard";
import { FaPlus } from "react-icons/fa";
import ServicesTable from "./ServicesTable";
import ModalAddServices from "./ModalAddServices";
import ModalSuccess from "../../../partials/modals/ModalSuccess";
import ModalError from "../../../partials/modals/ModalError";
import { StoreContext } from "../../../store/StoreContext";
import { setIsAdd } from "../../../store/StoreAction";

const Services = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  return (
    <>
      <section id="home" className="bg-[#f5f5f3]">
        <Navigation menu="services" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex justify-between ">
              <div className="text-[24px] text-primary">
                <h2>Services</h2>
              </div>
              <button
                className="flex items-center gap-1 text-primary hover:underline"
                onClick={handleAdd}
              >
                <FaPlus />
                Add
              </button>
            </div>
            <div className="pb-4">
              <ServicesTable setItemEdit={setItemEdit} />
            </div>
          </div>
        </Dashboard>
      </section>

      {store.isAdd && (
        <ModalAddServices setIsAdd={setIsAdd} itemEdit={itemEdit} />
      )}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Services;
