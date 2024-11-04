import React from "react";
import { StoreContext } from "../../../store/StoreContext";
import { setIsAdd } from "../../../store/StoreAction";
import ModalAddIndustryTestimonial from "./ModalAddIndustryTestimonial";
import IndustryTestimonialTable from "./IndustryTestimonialTable";
import ModalSuccess from "../../../partials/modals/ModalSuccess";
import ModalError from "../../../partials/modals/ModalError";
import { FaPlus } from "react-icons/fa";
import Dashboard from "../../../partials/dashboard/Dashboard";
import Navigation from "../../../partials/dashboard/Navigation";

const IndustryTestimonial = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  return (
    <>
      <section id="industryTestimonial" className="bg-[#f5f5f3]">
        <Navigation menu="industry-testimonial" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex justify-between ">
              <div className="text-sm text-[black] font-semibold">
                <h2>Industry Testimonials</h2>
              </div>
              <button
                className="flex items-center gap-1 text-[white] hover:underline bg-[black] py-1 px-2 rounded-lg text-sm"
                onClick={handleAdd}
              >
                <FaPlus />
                Add
              </button>
            </div>
            <div className="pb-4">
              <IndustryTestimonialTable setItemEdit={setItemEdit} />
            </div>
          </div>
        </Dashboard>
      </section>

      {store.isAdd && (
        <ModalAddIndustryTestimonial setIsAdd={setIsAdd} itemEdit={itemEdit} />
      )}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default IndustryTestimonial;
