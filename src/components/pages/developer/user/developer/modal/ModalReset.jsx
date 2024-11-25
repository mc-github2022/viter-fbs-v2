import { handleEscape } from "@/components/helpers/functions-general";
import { queryData } from "@/components/helpers/queryData";
import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import {
  setError,
  setMessage,
  setSuccess,
} from "@/components/store/StoreAction";
import { StoreContext } from "@/components/store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { FaKey } from "react-icons/fa";
const ModalReset = ({
  mysqlApiReset,
  msg,
  successMsg,
  queryKey,
  setIsReset,
  dataItem,
}) => {
  const { dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) => queryData(mysqlApiReset, "put", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [queryKey] });
      setIsReset(false);

      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        dispatch(setSuccess(true));
        dispatch(setMessage(successMsg));
      }
    },
  });

  const handleYes = async () => {
    // mutate data
    mutation.mutate({
      email: dataItem.user_developer_email,
    });
  };

  const handleClose = () => {
    setIsReset(false);
  };

  handleEscape(() => handleClose());

  return (
    <>
      <div className="bg-dark/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 bottom-0 left-0 z-[99] flex justify-center items-center w-full md:inset-0 max-h-full">
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow">
            <button
              type="button"
              className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              data-modal-hide="popup-modal"
              onClick={handleClose}
              disabled={mutation.isPending}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5 text-center">
              <FaKey className="mx-auto mb-8 text-warning w-12 h-12" />

              <h3 className="mb-8 text-sm font-normal text-dark">{msg}</h3>
              <div className="text-sm flex gap-2">
                <button
                  type="submit"
                  className="text-sm btn-modal-submit"
                  onClick={handleYes}
                  disabled={mutation.isPending}
                >
                  {mutation.isPending && <ButtonSpinner />} Yes, confirm
                </button>
                <button
                  type="reset"
                  className="text-sm btn-modal-cancel"
                  onClick={handleClose}
                  disabled={mutation.isLoading}
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalReset;
