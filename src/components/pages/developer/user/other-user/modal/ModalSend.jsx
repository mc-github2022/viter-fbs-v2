import React from "react";
import { IoIosSend } from "react-icons/io";
import { apiVersion } from "../../../../../helpers/functions-general";
import { queryData } from "../../../../../helpers/queryData";
import { setError, setMessage } from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import ButtonSpinner from "../../../../../partials/spinners/ButtonSpinner";

const ModalSend = ({
  item,
  recipientList,
  setIsSend,
  setConfirmSend,
  setQueryCount,
  setIsSendingLoading,
  isSendingLoading,
  setIsSuccessSendingEmail,
  setQueryStatus,
  defaultRoleAid,
  itemEdit,
  payloadData,
  setSendingPercentage,
}) => {
  const { dispatch } = React.useContext(StoreContext);

  const handleYes = async () => {
      // // close the confirmation modal
      setIsSend(false);
  
      // show the status of sending email
      setConfirmSend(true);
  
      // add loading state
      // disabled all input field and button
      setIsSendingLoading(true);
  
      const queryCreateMailerLog = await queryData(
        `${apiVersion}/user-other`,
        "post",
        payloadData,
      );
      console.log("Query: ", queryCreateMailerLog)
      if (queryCreateMailerLog?.success) {
        // loop through the list of recipient email
        
        for (let i = 0; i <= recipientList.length; i++) {
          /* const recipientData = recipientList?.data[i];
          
          const user_other_fname = itemEdit ? itemEdit.user_other_fname : "";
          const user_other_lname = itemEdit ? itemEdit.user_other_lname : "";
          const user_other_email = itemEdit ? itemEdit.user_other_email : "";
          const user_other_role_id = itemEdit ? itemEdit.user_other_role_id : defaultRoleAid;
          const user_other_email_old = itemEdit ? itemEdit.user_other_email : "";
      
          // Construct the payload for the API call
          const payload = {
            user_other_fname: user_other_fname,
            user_other_lname: user_other_lname,
            user_other_email: user_other_email,
            user_other_role_id: user_other_role_id,
            user_other_email_old: user_other_email_old
          }; */
      
          try {
            /* const query = await queryData(`${apiVersion}/user-other`, "post", payload); */
            if (queryCreateMailerLog?.success) {
              setQueryStatus(queryCreateMailerLog);
              setQueryCount(i); // Update the counter *after* a successful query.
            } else {
              // Handle failure immediately
              setConfirmSend(false);
              setIsSendingLoading(false);
              setIsSuccessSendingEmail(true);
              setQueryStatus(queryCreateMailerLog); // Important to set the status even on failure
              return; // Exit the loop on the first failure.  No point in continuing.
            }
      
            /* console.log(query); */ // Keep the logging for debugging.
      
            // Check for completion *inside* the loop *after* the query:
            if (i === recipientList.length) {
              setTimeout(() => {
                setConfirmSend(false);
                setIsSendingLoading(false);
                setIsSuccessSendingEmail(true);
                /* resetForm(); */
                /* setSubscriberValue(""); */
              }, 1000);
            }
      
          } catch (error) {
            // Handle errors from queryData (e.g., network errors, JSON parsing issues)
            console.error("Error sending newsletter:", error);
            setConfirmSend(false);
            setIsSendingLoading(false);
            setIsSuccessSendingEmail(true); // Consider a different state for a true error.
            setQueryStatus({ success: false, message: "An error occurred during sending." }); // Set an appropriate error message.
            return; // Exit the loop.
          }
        }
      } else {
        dispatch(setError(true));
        dispatch(setMessage(queryCreateMailerLog?.error));
        setConfirmSend(false);
        setIsSendingLoading(false);
        setIsSuccessSendingEmail(true);
        /* resetForm(); */
        /* setSubscriberValue(""); */
        return;
      }
    };

  const handleClose = () => {
    setIsSend(false);
  };

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

              <h3 className="mb-8 text-sm font-normal text-dark">
                Are you sure you want to send validation email?
              </h3>
              <div className="flex gap-2">
                <button
                  className="text-sm btn-modal-submit"
                  onClick={handleYes}
                  disabled={isSendingLoading}
                >
                  {isSendingLoading ? <ButtonSpinner /> : "Yes"}
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