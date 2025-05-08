import React from "react";
import { FaPlus } from "react-icons/fa";
import useQueryData from "../../../custom-hooks/useQueryData";
import { apiVersion } from "../../../helpers/functions-general";
import Dashboard from "../../../partials/dashboard/Dashboard";
import Navigation from "../../../partials/dashboard/Navigation";
import ModalError from "../../../partials/modals/ModalError";
import ModalSuccess from "../../../partials/modals/ModalSuccess";
import { setIsAdd, setIsSubsOpen } from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";
import ModalAddSubscribers from "./ModalAddSubscribers";
import SubscribersTable from "./SubscribersTable";
import { FaFileExport } from "react-icons/fa";
import { handleExportSubscribers } from "./function-subscribers";

const Subscribers = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  React.useEffect(() => {
    dispatch(setIsSubsOpen(false));
  }, []);

  const {
    isLoading: isLoading,
    isFetching: isFetching,
    error: error,
    data: audienceData,
  } = useQueryData(
    `${apiVersion}/audience`, // endpoint
    "get", // method
    "audience" // key
  );

  const { data: subscribeData } = useQueryData(
    `${apiVersion}/subscribe`, // endpoint
    "get", // method
    "subscribe" // key
  );

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
              <div className="flex items-center gap-6 print:invisible">
                <button
                  type="button"
                  className="flex items-center text-primary gap-2 text-sm"
                  onClick={() => handleExportSubscribers(subscribeData?.data)}
                >
                  <FaFileExport />
                  <span className="hover:underline ">Export</span>
                </button>
                <button
                  className="flex items-center gap-1 text-[white] hover:underline bg-primary py-1 px-2 rounded-lg text-sm"
                  onClick={handleAdd}
                >
                  <FaPlus />
                  Add
                </button>
              </div>
            </div>
            <div className="pb-4">
              <SubscribersTable
                setItemEdit={setItemEdit}
                subscribeData={subscribeData}
                audienceData={audienceData}
              />
            </div>
          </div>
        </Dashboard>
      </section>

      {store.isAdd && (
        <ModalAddSubscribers itemEdit={itemEdit} audienceData={audienceData} />
      )}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Subscribers;
