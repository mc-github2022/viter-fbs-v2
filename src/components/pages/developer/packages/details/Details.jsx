import React from "react";
import { FaPlus } from "react-icons/fa";
import Dashboard from "../../../../partials/dashboard/Dashboard";
import Navigation from "../../../../partials/dashboard/Navigation";
import ModalError from "../../../../partials/modals/ModalError";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import { setIsAdd, setIsPackagesOpen } from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import DetailsTable from "./DetailsTable";
import ModalAddDetails from "./ModalAddDetails";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { apiVersion } from "../../../../helpers/functions-general";

const Details = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const { data: packagesListData } = useQueryData(
    `${apiVersion}/packages-list`, // endpoint
    "get", // method
    "packages-list" // key
  );

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };
  React.useEffect(() => {
    dispatch(setIsPackagesOpen(false));
  }, []);

  return (
    <>
      <section id="packages" className="bg-[#f5f5f3]">
        <Navigation menu="packages" submenu="details" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex justify-between ">
              <div className="text-sm text-[black] font-semibold">
                <h2>Package Details</h2>
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
              <DetailsTable setItemEdit={setItemEdit} packagesListData={packagesListData} />
            </div>
          </div>
        </Dashboard>
      </section>

      {store.isAdd && <ModalAddDetails itemEdit={itemEdit} />}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Details;
