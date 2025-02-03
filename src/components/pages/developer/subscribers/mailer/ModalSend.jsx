import ButtonSpinner from "@/components/partials/spinners/ButtonSpinner";
import { StoreContext } from "@/components/store/StoreContext";
import React from "react";
import { IoIosSend } from "react-icons/io";

const ModalSend = ({ msg, item, handleClose, mutation, resetForm }) => {
  const { dispatch } = React.useContext(StoreContext);

  const handleYes = async () => {
    resetForm();
    // Mutate data
    mutation.mutate({
      newsletter: item.newsletter,
      newsletter_subject: item.newsletter_subject,
      subscriber_email: item.subscriber_email,
      filterValue: item.filterValue,
    });
  };

  return (
    <>
      <div
        className="bg-dark/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 bottom-0 left-0 z-[99] flex justify-center items-center w-full md:inset-0 max-h-full"
        onClick={handleClose}
      >
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
              <IoIosSend className="mx-auto mb-8 text-warning w-12 h-12" />

              <h3 className="mb-8 text-sm font-normal text-dark">{msg}</h3>
              <div className="flex gap-2">
                <button
                  className="text-sm btn-modal-submit"
                  onClick={handleYes}
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? <ButtonSpinner /> : "Yes"}
                </button>

                <button
                  className="text-sm btn-modal-cancel"
                  onClick={handleClose}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSend;
