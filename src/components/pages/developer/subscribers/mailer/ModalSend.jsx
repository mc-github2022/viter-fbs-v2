import React from "react";
import { IoIosSend } from "react-icons/io";
import { apiVersion } from "../../../../helpers/functions-general";
import { queryData } from "../../../../helpers/queryData";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";
import { setError, setMessage } from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";

const ModalSend = ({
  item,
  recipientList,
  setIsSend,
  setConfirmSend,
  setQueryCount,
  setIsSendingLoading,
  isSendingLoading,
  setIsSuccessSendingEmail,
  resetForm,
  setSubscriberValue,
  setQueryStatus,
}) => {
  const { dispatch } = React.useContext(StoreContext);
  let query;
  let count = 0;

  const handleYes = async () => {
    // // close the confirmation modal
    setIsSend(false);

    // show the status of sending email
    setConfirmSend(true);

    // add loading state
    // disabled all input field and button
    setIsSendingLoading(true);

    const queryCreateMailerLog = await queryData(
      `${apiVersion}/sending-newsletter/create`,
      "post",
      {
        recipientList: recipientList,
      }
    );

    if (queryCreateMailerLog?.success) {
      // loop through the list of recipient email
      for (let i = 0; i < recipientList?.count; i++) {
        let recipientEmail = recipientList?.data[i]["subscriber_email"];
        let recipientKey = recipientList?.data[i]["subscriber_key"];
        let recipientAudienceId =
          recipientList?.data[i]["subscriber_audience_id"];

        query = await queryData(`${apiVersion}/sending-newsletter`, "post", {
          newsletter: item.newsletter,
          newsletter_subject: item.newsletter_subject,
          subscriber_email: recipientEmail,
          subscriber_key: recipientKey,
          subscriber_audience_id: recipientAudienceId,
          recipientList: recipientList,
        });

        // increment count whenever there's a successful query
        if (query.success) {
          count++;
          setQueryStatus(query);
        }

        if (!query.success) {
          setConfirmSend(false);
          setIsSendingLoading(false);
          setIsSuccessSendingEmail(true);
          resetForm();
          setSubscriberValue("");
          setQueryStatus(query);
          return;
        }

        console.log(query);

        // update the counter state to be passed on Modal Sending Email Status
        setQueryCount(count);

        // if all query are successfull
        // close the Modal Sending Email Status after 1 second,
        // so that user could see the status for 1 second after the successfull query
        // set the loading state to false
        // show the sending email summary
        if (count === recipientList?.count) {
          setTimeout(() => {
            setConfirmSend(false);
            setIsSendingLoading(false);
            setIsSuccessSendingEmail(true);
            resetForm();
            setSubscriberValue("");
          }, 1000);
        }
      }
    } else {
      dispatch(setError(true));
      dispatch(setMessage(queryCreateMailerLog?.error));
      setConfirmSend(false);
      setIsSendingLoading(false);
      setIsSuccessSendingEmail(true);
      resetForm();
      setSubscriberValue("");
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
                Are you sure you want send this newsletter?
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
