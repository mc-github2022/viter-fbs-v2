import React from "react";
import { StoreContext } from "../../../../store/StoreContext";
import { setIsAdd, setIsWhyFBS } from "../../../../store/StoreAction";
import Navigation from "../../../../partials/dashboard/Navigation";
import Dashboard from "../../../../partials/dashboard/Dashboard";
import { FaPlus } from "react-icons/fa6";
import CareersTable from "./CareersTable";
import ModalAddCareers from "./ModalAddCareers";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";

const Careers = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  React.useEffect(() => {
    dispatch(setIsWhyFBS(true));
  }, []);

  return (
    <>
      <section id="whyFBS" className="bg-[#f5f5f3]">
        <Navigation menu="whyFBS" submenu="whyFBS-careers" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex justify-between ">
              <div className="text-[24px] text-[black]">
                <h2>Careers</h2>
              </div>
              <button
                className="flex items-center gap-1 text-[white] hover:underline bg-[black] px-2 rounded-lg"
                onClick={handleAdd}
              >
                <FaPlus />
                Add
              </button>
            </div>
            <div className="pb-4">
              <CareersTable setItemEdit={setItemEdit} />
            </div>
          </div>
        </Dashboard>
      </section>

      {store.isAdd && (
        <ModalAddCareers setIsAdd={setIsAdd} itemEdit={itemEdit} />
      )}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Careers;
