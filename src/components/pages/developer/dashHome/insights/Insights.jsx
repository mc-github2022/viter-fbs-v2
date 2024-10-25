import React from "react";
import Dashboard from "../../../../partials/dashboard/Dashboard";
import Navigation from "../../../../partials/dashboard/Navigation";
import InsightsTable from "./InsightsTable";
import { FaPlus } from "react-icons/fa";
import { StoreContext } from "../../../../store/StoreContext";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";
import ModalAddInsights from "./ModalAddInsights";
import { setIsAdd } from "../../../../store/StoreAction";

const Insights = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  return (
    <>
      <section id="home">
        <Navigation menu="home" submenu="home-insights" />
        <Dashboard>
          <div className="mx-6 py-6">
            <div className="py-6 flex justify-between ">
              <div className="text-[24px]">
                <h2>Insights</h2>
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
              <InsightsTable setItemEdit={setItemEdit}/>
            </div>
          </div>
        </Dashboard>
      </section>

      {store.isAdd && <ModalAddInsights setIsAdd={setIsAdd} itemEdit={itemEdit} />}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Insights;
