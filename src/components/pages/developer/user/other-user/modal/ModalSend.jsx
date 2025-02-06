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

  let query;
  let count = 0;

  // const handleYes = async () => {

  //   // // close the confirmation modal
  //   setIsSend(false);

  //   // show the status of sending email
  //   setConfirmSend(true);

  //   // add loading state
  //   // disabled all input field and button
  //   setIsSendingLoading(true);

  //   const queryCreateOtherUser = await queryData(
  //     itemEdit
  //       ? `${apiVersion}/user-other/${itemEdit.user_other_aid}`
  //       : `${apiVersion}/user-other`,
  //     itemEdit ? "put" : "post",
  //     payloadData // Ensure this contains valid data
  //   );

  //   if (queryCreateOtherUser?.success) {
  //     // loop through the list of recipient email
  //     for (let i = 0; i < payloadData?.count; i++) {
  //       let user_other_email = payloadData?.data[i]["user_other_email"];

  //       query = await queryData(`${apiVersion}/user-other`, "post", {
  //         user_other_fname: itemEdit ? itemEdit.user_other_fname : "",
  //         user_other_email: user_other_email,
  //         user_other_key: user_other_key,
  //       });

  //       // increment count whenever there's a successful query
  //       if (query.success) {
  //         count++;
  //         setQueryStatus(query);
  //       }

  //       if (!query.success) {
  //         setConfirmSend(false);
  //         setIsSendingLoading(false);
  //         setIsSuccessSendingEmail(true);
  //         setQueryStatus(query);
  //         return;
  //       }

  //       console.log(query);

  //       // update the counter state to be passed on Modal Sending Email Status
  //       setQueryCount(count);

  //       // if all query are successfull
  //       // close the Modal Sending Email Status after 1 second,
  //       // so that user could see the status for 1 second after the successfull query
  //       // set the loading state to false
  //       // show the sending email summary
  //       if (count === payloadData?.count) {
  //         setTimeout(() => {
  //           setConfirmSend(false);
  //           setIsSendingLoading(false);
  //           setIsSuccessSendingEmail(true);
  //         }, 1000);
  //       }
  //     }
  //   } else {
  //     dispatch(setError(true));
  //     dispatch(setMessage(queryCreateOtherUser?.error));
  //     setConfirmSend(false);
  //     setIsSendingLoading(false);
  //     setIsSuccessSendingEmail(true);
  //     return;
  //   }
  // };

  const handleYes = async () => {
    setIsSend(false);
    setConfirmSend(true);
    setIsSendingLoading(true);

    const queryCreateOtherUser = await queryData(
      itemEdit
        ? `${apiVersion}/user-other/${itemEdit.user_other_aid}`
        : `${apiVersion}/user-other`,
      itemEdit ? "put" : "post",
      payloadData
    );

    if (queryCreateOtherUser?.success) {
      let count = 0;

      // Get all emails from payloadData
      const emailList = Array.isArray(payloadData.user_other_email)
        ? payloadData.user_other_email
        : [payloadData.user_other_email];

      for (const email of emailList) {
        const query = await queryData(`${apiVersion}/user-other`, "post", {
          user_other_fname: itemEdit ? itemEdit.user_other_fname : "",
          user_other_lname: itemEdit ? itemEdit.user_other_lname : "",
          user_other_email: email,
        });

        if (query.success) {
          count++;
          setQueryStatus(query);

          // Calculate percentage after every successful email
          const percentage = Math.round((count / emailList.length) * 100);
          console.log("Email Count:", emailList.length);
          setQueryCount(count);
          setSendingPercentage(percentage); // Track progress
        } else {
          setConfirmSend(false);
          setIsSendingLoading(false);
          setIsSuccessSendingEmail(true);
          setQueryStatus(query);
          return;
        }

        if (count === emailList.length) {
          setTimeout(() => {
            setConfirmSend(false);
            setIsSendingLoading(false);
            setIsSuccessSendingEmail(true);
          }, 1000);
        }
      }
    } else {
      dispatch(setError(true));
      dispatch(setMessage(queryCreateOtherUser?.error));
      setConfirmSend(false);
      setIsSendingLoading(false);
      setIsSuccessSendingEmail(true);
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
              // disabled={mutation.isPending}
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
