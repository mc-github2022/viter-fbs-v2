import React from "react";
import { StoreContext } from "../../../../store/StoreContext";
import { setIsAdd, setIsUserOpen } from "../../../../store/StoreAction";
import { FaPlus } from "react-icons/fa";
import OtherUserTable from "./OtherUserTable";
import Dashboard from "../../../../partials/dashboard/Dashboard";
import ModalAddOtherUser from "./ModalAddOtherUser";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";
import Navigation from "../../../../partials/dashboard/Navigation";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { apiVersion } from "../../../../helpers/functions-general";
import ModalSend from "./modal/ModalSend";
import ModalSendingEmailStatus from "./modal/ModalSendingEmailStatus";
import ModalSentEmailSummary from "./modal/ModalSentEmailSummary";

const OtherUser = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [isSend, setIsSend] = React.useState(false);
  const [isSendingLoading, setIsSendingLoading] = React.useState(false);
  const [queryCount, setQueryCount] = React.useState(0);
  const [emailCount, setEmailCount] = React.useState(0);
  const [confirmSend, setConfirmSend] = React.useState(false);
  const [recipientList, setRecipientList] = React.useState([]);
  const [isSuccessSendingEmail, setIsSuccessSendingEmail] =
    React.useState(false);
  const [queryStatus, setQueryStatus] = React.useState(null);
  const [payloadData, setPayloadData] = React.useState(null); // Store form values

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  const { data: roleData } = useQueryData(
    `${apiVersion}/user-other/role`, // endpoint
    "post", // method
    "user-other-role", // key
    { role_code: "role_is_developer" }
  );

  React.useEffect(() => {
    dispatch(setIsUserOpen(false));
  }, []);

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
                className="flex items-center gap-1 text-[white] hover:underline bg-primary py-1 px-2 rounded-lg text-sm"
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
        <ModalAddOtherUser
          setIsAdd={setIsAdd}
          itemEdit={itemEdit}
          roleData={roleData}
          setRecipientList={setRecipientList}
          setPayloadData={setPayloadData}
          setEmailCount={setEmailCount}
          setIsSend={setIsSend}
        />
      )}

      {!itemEdit && isSend && (
        <ModalSend
          recipientList={recipientList}
          payloadData={payloadData}
          setIsSend={setIsSend}
          setConfirmSend={setConfirmSend}
          setQueryCount={setQueryCount}
          setIsSendingLoading={setIsSendingLoading}
          isSendingLoading={isSendingLoading}
          setIsSuccessSendingEmail={setIsSuccessSendingEmail}
          setQueryStatus={setQueryStatus}
          msg={`Are you sure you want to add this user and send a validation
                email?`}
          mysqlEndpoint={`${apiVersion}/user-other`}
          queryKey={`user-other`}
        />
      )}

      {confirmSend && (
        <ModalSendingEmailStatus
          recipientList={recipientList}
          queryCount={queryCount}
        />
      )}

      {isSuccessSendingEmail && (
        <ModalSentEmailSummary
          queryCount={queryCount}
          recipientList={recipientList}
          setIsSuccessSendingEmail={setIsSuccessSendingEmail}
          setQueryCount={setQueryCount}
          queryStatus={queryStatus}
          message={"Email successfully sent!"}
        />
      )}

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default OtherUser;
