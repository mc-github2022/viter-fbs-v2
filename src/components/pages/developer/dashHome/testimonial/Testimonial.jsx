import React from "react";
import Navigation from "../../../../partials/dashboard/Navigation";
import { FaPlus } from "react-icons/fa";
import TestimonialTable from "./TestimonialTable";
import Dashboard from "../../../../partials/dashboard/Dashboard";
import ModalAddTestimonial from "./ModalAddTestimonial";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";
import { StoreContext } from "../../../../store/StoreContext";
import { setIsAdd, setIsHome } from "../../../../store/StoreAction";

const Testimonial = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  React.useEffect(() => {
    dispatch(setIsHome(true));
  }, []);

  return (
    <>
      <section id="home" className="bg-[#f5f5f3]">
        <Navigation menu="home" submenu="home-testimonial" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex justify-between ">
              <div className="text-sm text-[black] font-semibold">
                <h2>Testimonials</h2>
              </div>
              <button
                className="flex items-center gap-1 text-[white] hover:underline bg-[black] py-1 px-2 rounded-lg"
                onClick={handleAdd}
              >
                <FaPlus />
                Add
              </button>
            </div>
            <div className="pb-4">
              <TestimonialTable setItemEdit={setItemEdit} />
            </div>
          </div>
        </Dashboard>
      </section>

      {store.isAdd && (
        <ModalAddTestimonial setIsAdd={setIsAdd} itemEdit={itemEdit} />
      )}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Testimonial;
