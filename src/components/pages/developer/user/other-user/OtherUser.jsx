import React from "react";
import { StoreContext } from "../../../../store/StoreContext";
import { setIsAdd } from "../../../../store/StoreAction";
import { FaPlus } from "react-icons/fa";
import OtherUserTable from "./OtherUserTable";
import Dashboard from "../../../../partials/dashboard/Dashboard";
import ModalAddOtherUser from "./ModalAddOtherUser";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";
import Navigation from "../../../../partials/dashboard/Navigation";
import useQueryData from "../../../../custom-hooks/useQueryData";

const OtherUser = () => {
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

  return (
    <>
      <section id="user" className="bg-[#f5f5f3]">
        <Navigation menu="user" submenu="other-user" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex justify-between ">
              <div className="text-sm text-[black] font-semibold">
                <h2>Other User</h2>
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
              <OtherUserTable setItemEdit={setItemEdit} />
            </div>
          </div>
        </Dashboard>
      </section>

      {store.isAdd && (
        <ModalAddOtherUser setIsAdd={setIsAdd} itemEdit={itemEdit} roleData={roleData}/>
      )}
      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default OtherUser;
