import React from "react";
import Navigation from "../../../partials/dashboard/Navigation";
import Dashboard from "../../../partials/dashboard/Dashboard";
import { FaPlus } from "react-icons/fa";
import ServicesTable from "./SpecialOffersTable";
import ModalAddServices from "./ModalAddSpecialOffers";
import ModalSuccess from "../../../partials/modals/ModalSuccess";
import ModalError from "../../../partials/modals/ModalError";
import { StoreContext } from "../../../store/StoreContext";
import { setIsAdd } from "../../../store/StoreAction";
import SpecialOffersTable from "./SpecialOffersTable";
import ModalAddSpecialOffers from "./ModalAddSpecialOffers";

const SpecialOffers = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  return (
    <>
      <section id="specialOffer" className="bg-[#f5f5f3]">
        <Navigation menu="special-offers" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex justify-between ">
              <div className="text-sm text-[black] font-semibold">
                <h2>Special Offers</h2>
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
              <SpecialOffersTable setItemEdit={setItemEdit} />
            </div>
          </div>
        </Dashboard>
      </section>

      {store.isAdd && (
        <ModalAddSpecialOffers setIsAdd={setIsAdd} itemEdit={itemEdit} />
      )}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default SpecialOffers;
