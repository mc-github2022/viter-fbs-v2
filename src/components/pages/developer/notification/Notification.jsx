import React from "react";
import { FaPlus } from "react-icons/fa6";
import ModalAddNotification from "./ModalAddNotification";
import NotificationTable from "./NotificationTable";
import { StoreContext } from "../../../store/StoreContext";
import {
  setIsAdd,
  setIsNotifOpen,
  setIsWhyFBS,
} from "../../../store/StoreAction";
import Navigation from "../../../partials/dashboard/Navigation";
import Dashboard from "../../../partials/dashboard/Dashboard";
import ModalSuccess from "../../../partials/modals/ModalSuccess";
import ModalError from "../../../partials/modals/ModalError";

const Notification = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  React.useEffect(() => {
    dispatch(setIsNotifOpen(true));
  }, []);

  return (
    <>
      <section id="notification-receiver" className="bg-[#f5f5f3]">
        <Navigation menu="notification" submenu="notification-receiver" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex justify-between ">
              <div className="text-sm text-[black] font-semibold">
                <h2>Notification</h2>
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
              <NotificationTable setItemEdit={setItemEdit} />
            </div>
          </div>
        </Dashboard>
      </section>

      {store.isAdd && (
        <ModalAddNotification setIsAdd={setIsAdd} itemEdit={itemEdit} />
      )}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Notification;
