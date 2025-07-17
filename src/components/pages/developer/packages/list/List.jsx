import React from "react";
import { FaPlus } from "react-icons/fa";
import Dashboard from "../../../../partials/dashboard/Dashboard";
import Navigation from "../../../../partials/dashboard/Navigation";
import ModalError from "../../../../partials/modals/ModalError";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import { setIsAdd, setIsPackagesOpen } from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import ListTable from "./ListTable";
import ModalAddList from "./ModalAddList";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { apiVersion } from "../../../../helpers/functions-general";

const List = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const { data: packagesCategoryData } = useQueryData(
    `${apiVersion}/packages-category`, // endpoint
    "get", // method
    "packages-category" // key
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
        <Navigation menu="packages" submenu="list" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex justify-between ">
              <div className="text-sm text-[black] font-semibold">
                <h2>Package List</h2>
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
              <ListTable
                setItemEdit={setItemEdit}
                packagesCategoryData={packagesCategoryData}
              />
            </div>
          </div>
        </Dashboard>
      </section>

      {store.isAdd && <ModalAddList itemEdit={itemEdit} />}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default List;
