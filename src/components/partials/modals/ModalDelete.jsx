import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { MdDelete } from "react-icons/md";
import { GrFormClose } from "react-icons/gr";
import { queryData } from "../../helpers/queryData";
import { StoreContext } from "../../store/StoreContext";
import ButtonSpinner from "../spinners/ButtonSpinner";
import { setError, setMessage, setSuccess } from "../../store/StoreAction";

const ModalDelete = ({ setIsDelete, mysqlEndpoint, queryKey, item }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleClose = () => {
    dispatch(setIsDelete(false));
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) => queryData(mysqlEndpoint, "delete", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [queryKey] });
      dispatch(setIsDelete(false));

      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        dispatch(setSuccess(false));
        console.log("May error!");
      } else {
        setIsDelete(false);
        console.log("Naysuu! HAHAHAHAHAHA");
        dispatch(setSuccess(true));
        dispatch(setMessage("Successfully Deleted!"));
      }
    },
  });

  const handleYes = () => {
    mutation.mutate({
      item: item,
    });
  };

  return (
    <div className=" fixed top-0 left-0 h-screen w-full flex justify-center items-center z-[9999999]">
      <div
        className=" backdrop bg-[black] opacity-50 h-full w-full absolute top-0 left-0 z-[-1]"
        onClick={handleClose}
      ></div>
      <div className="max-w-[450px] w-full bg-[white] rounded-md">
        <div className="flex justify-between p-4 pb-2 ">
          <div></div>
          <h2 className="translate-y-2 items-center">
            <MdDelete className="text-[35px] text-[#ef4444]" />
          </h2>
          <button onClick={handleClose}>
            <GrFormClose className="text-[25px]" />
          </button>
        </div>
        <div className="p-5 text-center">
          <h3 className="text-sm pb-2 text-[black]">
            Are you sure you want to delete {item}?
          </h3>
          <div className="flex justify-center mt-5 gap-2">
            <button
              className="inline-block rounded-md w-full px-5 py-2 text-[white] bg-[#ef4444]"
              onClick={handleYes}
              disabled={mutation.isPending}
            >
              {mutation.isPending ? <ButtonSpinner /> : "Delete"}
            </button>
            <button
              className="inline-block rounded-md w-full px-5 py-2 bg-[#e5e7eb] text-[#1f2937]"
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
