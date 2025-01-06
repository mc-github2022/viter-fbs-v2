import React from "react";
import { StoreContext } from "../../../store/StoreContext";
import Navigation from "../../../partials/dashboard/Navigation";
import { FaPlus } from "react-icons/fa";
import Dashboard from "../../../partials/dashboard/Dashboard";
import SubscribersTable from "./SubscribersTable";
import ModalSuccess from "../../../partials/modals/ModalSuccess";
import ModalError from "../../../partials/modals/ModalError";
import ModalAddSubscribers from "./ModalAddSubscribers";
import { setIsAdd } from "../../../store/StoreAction";
import Mailer from "./mailer/Mailer";

const Subscribers = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  return (
    <>
      <section id="subscribers" className="bg-[#f5f5f3]">
        <Navigation menu="subscribers" submenu="subscribers" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex justify-between ">
              <div className="text-sm text-[black] font-semibold">
                <h2>Subscribers</h2>
              </div>
              <button
                className="flex items-center gap-1 text-[white] hover:underline bg-primary py-1 px-2 rounded-lg text-sm"
                onClick={handleAdd}
              >
                <FaPlus />
                Add
              </button>
            </div>
            <div className="pb-4">
              <SubscribersTable setItemEdit={setItemEdit} />
            </div>
          </div>
        </Dashboard>
      </section>

      {store.isAdd && <ModalAddSubscribers itemEdit={itemEdit} />}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Subscribers;
