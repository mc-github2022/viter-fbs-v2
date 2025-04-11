import React from "react";
import { FaPlus } from "react-icons/fa6";
import Dashboard from "../../../../partials/dashboard/Dashboard";
import Navigation from "../../../../partials/dashboard/Navigation";
import ModalError from "../../../../partials/modals/ModalError";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import {
  setIsAdd,
  setIswhyUsOpen
} from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import EventsAndActivitiesTable from "./EventsAndActivitiesTable";
import ModalAddEventsAndActivities from "./ModalAddEventsAndActivities";

const EventsAndActivities = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };
  React.useEffect(() => {
    dispatch(setIswhyUsOpen(false));
  }, []);

  return (
    <>
      <section id="whyFBS" className="bg-[#f5f5f3]">
        <Navigation menu="whyFBS" submenu="events-activities" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex justify-between ">
              <div className="text-sm text-[black] font-semibold">
                <h2>Events And Activities</h2>
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
              <EventsAndActivitiesTable setItemEdit={setItemEdit} />
            </div>
          </div>
        </Dashboard>
      </section>

      {store.isAdd && (
        <ModalAddEventsAndActivities setIsAdd={setIsAdd} itemEdit={itemEdit} />
      )}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default EventsAndActivities;
