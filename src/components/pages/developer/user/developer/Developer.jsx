import React from "react";
import { StoreContext } from "../../../../store/StoreContext";
import { setIsAdd, setIsUserOpen } from "../../../../store/StoreAction";
import Navigation from "../../../../partials/dashboard/Navigation";
import Dashboard from "../../../../partials/dashboard/Dashboard";
import { FaPlus } from "react-icons/fa";
import DeveloperTable from "./DeveloperTable";
import ModalAddDeveloper from "./ModalAddDeveloper";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";
import useQueryData from "../../../../custom-hooks/useQueryData";

const Developer = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  const {
    isFetching,
    error,
    isLoading,
    data: roleData,
  } = useQueryData(
    "/v1/role", // endpoint
    "get", // method
    "role" // key
  );

  React.useEffect(() => {
    dispatch(setIsUserOpen(false));
  }, []);
  
  return (
    <>
      <section id="user" className="bg-[#f5f5f3]">
        <Navigation menu="user" submenu="user-developer" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex justify-between ">
              <div className="text-sm text-[black] font-semibold">
                <h2>Developer</h2>
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
              <DeveloperTable setItemEdit={setItemEdit} />
            </div>
          </div>
        </Dashboard>
      </section>

      {store.isAdd && (
        <ModalAddDeveloper
          setIsAdd={setIsAdd}
          itemEdit={itemEdit}
          roleData={roleData}
        />
      )}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Developer;
