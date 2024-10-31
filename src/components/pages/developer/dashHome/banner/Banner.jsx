import React from "react";
import Navigation from "../../../../partials/dashboard/Navigation";
import Dashboard from "../../../../partials/dashboard/Dashboard";
import { FaPlus } from "react-icons/fa";
import BannerTable from "./BannerTable";
import ModalAddBanner from "./ModalAddBanner";
import { StoreContext } from "../../../../store/StoreContext";
import { setIsAdd, setIsHome } from "../../../../store/StoreAction";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";

const Banner = () => {
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
        <Navigation menu="home" submenu="home-banner" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex justify-between ">
              <div className="text-[18px] text-[black] font-semibold">
                <h2>Banner Slider</h2>
              </div>
              <button
                className="flex items-center gap-1 text-[white] hover:underline px-2 bg-[black] rounded-lg"
                onClick={handleAdd}
              >
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
