import React from "react";
import { StoreContext } from "../../../../store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  setError,
  setMessage,
  setSuccess,
} from "../../../../store/StoreAction";
import * as Yup from "yup";
import ModalAddWrapper from "../../../../partials/dashboard/ModalAddWrapper";
import { GrFormClose } from "react-icons/gr";
import { Form, Formik } from "formik";
import { InputSelect, InputText } from "../../../../helpers/FormInputs";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";
import { queryData } from "../../../../helpers/queryData";
import { apiVersion } from "../../../../helpers/functions-general";
import ModalSend from "./modal/ModalSend";
import ModalSendingEmailStatus from "./modal/ModalSendingEmailStatus";

const ModalAddOtherUser = ({ setIsAdd, itemEdit, roleData }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isSend, setIsSend] = React.useState(false);
  const [isSendingLoading, setIsSendingLoading] = React.useState(false);
  const [queryCount, setQueryCount] = React.useState(0);
  const [emailCount, setEmailCount] = React.useState(0);
  const [confirmSend, setConfirmSend] = React.useState(false);
  const [isSuccessSendingEmail, setIsSuccessSendingEmail] =
    React.useState(false);
  const [queryStatus, setQueryStatus] = React.useState(null);
  const [payloadData, setPayloadData] = React.useState(null); // Store form values
  const [sendingPercentage, setSendingPercentage] = React.useState(0);


  const handleClose = () => {
    setTimeout(() => {
      dispatch(setIsAdd(false));
    }, 200);
  };

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        `${apiVersion}/user-other/${itemEdit.user_other_aid}`, // update
        "put",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user-other"] });
      if (!data.success) {
        console.log("error");
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        dispatch(setSuccess(false));
      } else {
        console.log("Success");
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully ${itemEdit ? "Updated" : "Added"}.`));
      }
    },
  });

  const handleSubmit = (values) => {
    if (itemEdit) {
      mutation.mutate(values);
    } else {
      setPayloadData(values);

      // Ensure `user_other_email` is an array or single email
      const recipientEmails = Array.isArray(values.user_other_email)
        ? values.user_other_email
        : values.user_other_email
        ? [values.user_other_email]
        : [];

      setEmailCount(recipientEmails.length); // Store total number of emails
      setIsSend(true);
      console.log(recipientEmails);
    }
  };

  const defaultRoleAid = roleData?.data.filter(
    (role) => role.role_code === "role_is_admin"
  )[0]["role_aid"];

  const initVal = {
    user_other_fname: itemEdit ? itemEdit.user_other_fname : "",
    user_other_lname: itemEdit ? itemEdit.user_other_lname : "",
    user_other_email: itemEdit ? itemEdit.user_other_email : "",
    user_other_role_id: itemEdit ? itemEdit.user_other_role_id : defaultRoleAid,
    user_other_email_old: itemEdit ? itemEdit.user_other_email : "",
  };

  const yupSchema = Yup.object({
    user_other_lname: Yup.string().required("Required"),
    user_other_fname: Yup.string().required("Required"),
    user_other_role_id: Yup.string().required("Required"),
    user_other_email: Yup.string().required("Required").email("Invalid email"),
  });

  return (
    <ModalAddWrapper
      className={`transition-all ease-linear transform duration-200 max-w-[30rem] max-h-[21.5rem]`}
      handleClose={handleClose}
    >
      <div className="modal-title">
        <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} Other User</h2>
        <button onClick={handleClose}>
          <GrFormClose className="text-[25px]" />
        </button>
      </div>
      <div className="modal-content">
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          // onSubmit={async (values) => {
          //   handleSubmit(values);

          // }}
          onSubmit={handleSubmit} // Use the modified handleSubmit
        >
          {(props, values) => {
            return (
              <Form>
                <div className="input-wrapper">
                  <InputText
                    label="First Name"
                    type="text"
                    name="user_other_fname"
                    disabled={mutation.isPending}
                  />
                </div>
                <div className="input-wrapper">
                  <InputText
                    label="Last Name"
                    type="text"
                    name="user_other_lname"
                    disabled={mutation.isPending}
                  />
                </div>
                <div className="input-wrapper">
                  <InputText
                    label="Email"
                    type="text"
                    name="user_other_email"
                    disabled={mutation.isPending}
                  />
                </div>

                <div className="input-wrapper">
                  <InputSelect
                    label="Role"
                    type="text"
                    name="user_other_role_id"
                    disabled={mutation.isPending}
                  >
                    <option hidden>--</option>
                    <optgroup label="Select Role">
                      {roleData?.count === 0 ? (
                        <option>No Data</option>
                      ) : (
                        roleData?.data.map((item, key) => (
                          <option value={item.role_aid} key={key}>
                            {item.role_name}
                          </option>
                        ))
                      )}
                    </optgroup>
                  </InputSelect>
                </div>
                <div className="form-action">
                  <div className="form-btn">
                    <button
                      className="text-sm btn-modal-submit"
                      type="submit"
                      disabled={mutation.isPending || !props.dirty}
                    >
                      {mutation.isPending ? <ButtonSpinner /> : "Save"}
                    </button>
                    <button
                      className="text-sm btn-modal-cancel"
                      type="button"
                      onClick={handleClose}
                    >
                      Cancel
                    </button>
                  </div>
                </div>

                {!itemEdit && isSend && (
                  <ModalSend
                    payloadData={payloadData}
                    itemEdit={itemEdit}
                    item={values}
                    emailCount={emailCount} // <-- Pass the email count
                    defaultRoleAid={defaultRoleAid}
                    setIsSend={setIsSend}
                    setConfirmSend={setConfirmSend}
                    setQueryCount={setQueryCount}
                    setIsSendingLoading={setIsSendingLoading}
                    isSendingLoading={isSendingLoading}
                    setIsSuccessSendingEmail={setIsSuccessSendingEmail}
                    setQueryStatus={setQueryStatus}
                    setSendingPercentage={setSendingPercentage}
                  />
                )}

                {confirmSend && (
                  <ModalSendingEmailStatus
                    queryCount={queryCount}
                    emailCount={emailCount} // <-- Pass total emails
                    payloadData={payloadData}
                    sendingPercentage={sendingPercentage}
                  />
                )}

                {/* {isSuccessSendingEmail && (
                  <ModalSentEmailSummary
                    queryCount={queryCount}
                    recipientList={recipientList}
                    setIsSuccessSendingEmail={setIsSuccessSendingEmail}
                    setQueryCount={setQueryCount}
                    queryStatus={queryStatus}
                    payloadData={payloadData}
                  />
                )} */}
              </Form>
            );
          }}
        </Formik>
      </div>
    </ModalAddWrapper>
  );
};

export default ModalAddOtherUser;
