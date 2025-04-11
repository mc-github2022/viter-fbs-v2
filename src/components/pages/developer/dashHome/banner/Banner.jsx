import React from "react";
import { FaPlus } from "react-icons/fa";
import Dashboard from "../../../../partials/dashboard/Dashboard";
import Navigation from "../../../../partials/dashboard/Navigation";
import ModalError from "../../../../partials/modals/ModalError";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import { setIsAdd, setIsNavOpen } from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import BannerTable from "./BannerTable";
import ModalAddBanner from "./ModalAddBanner";

const Banner = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };


  React.useEffect(() => {
    dispatch(setIsNavOpen(false));
  }, []);

  return (
    <>
      <section id="home" className="bg-[#f5f5f3]">
        <Navigation menu="home" submenu="home-banner" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex justify-between ">
              <div className="text-sm text-[black] font-semibold">
                <h2>Banner Slider</h2>
              </div>
              <button
                className="flex items-center gap-1 text-[white] hover:underline py-1 px-2 bg-primary rounded-lg text-sm"
                onClick={handleAdd}>
                <FaPlus />
                Add
              </button>
            </div>
            <div className="pb-4">
              <BannerTable setItemEdit={setItemEdit} />
            </div>
          </div>
        </Dashboard>
      </section>

      {store.isAdd && (
        <ModalAddBanner setIsAdd={setIsAdd} itemEdit={itemEdit} />
      )}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Banner;
