import React from "react";
import { StoreContext } from "../../../store/StoreContext";
import { setIsAdd } from "../../../store/StoreAction";
import Navigation from "../../../partials/dashboard/Navigation";
import Dashboard from "../../../partials/dashboard/Dashboard";
import { FaPlus } from "react-icons/fa6";
import PricingTable from "./PricingTable";
import ModalAddPricing from "./ModalAddPricing";
import ModalSuccess from "../../../partials/modals/ModalSuccess";
import ModalError from "../../../partials/modals/ModalError";

const Pricing = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  return (
    <>
      <section id="pricing" className="bg-[#f5f5f3]">
        <Navigation menu="pricing" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex justify-between ">
              <div className="text-sm text-[black] font-semibold">
                <h2>Pricing</h2>
              </div>
              <button
                className="flex items-center gap-1 text-[white] hover:underline py-1 px-2 bg-[black] rounded-lg text-sm"
                onClick={handleAdd}
              >
                <FaPlus />
                Add
              </button>
            </div>
            <div className="pb-4">
              <PricingTable setItemEdit={setItemEdit} />
            </div>
          </div>
        </Dashboard>
      </section>

      {store.isAdd && (
        <ModalAddPricing
          setIsAdd={setIsAdd}
          itemEdit={itemEdit}
          setItemEdit={setItemEdit}
        />
      )}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Pricing;
