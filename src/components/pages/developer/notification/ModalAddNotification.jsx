import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import * as IoIcons from "react-icons/io";
import * as LuIcons from "react-icons/lu";
import * as PiIcons from "react-icons/pi";
import * as TiIcons from "react-icons/ti";
import * as Yup from "yup";
import { InputSelect, InputText } from "../../../helpers/FormInputs";
import { apiVersion } from "../../../helpers/functions-general";
import { queryData } from "../../../helpers/queryData";
import ModalAddWrapper from "../../../partials/dashboard/ModalAddWrapper";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import { setError, setMessage, setSuccess } from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";
import { purposeValue } from "./functions-notification";

const icons = {
  ...FaIcons,
  ...AiIcons,
  ...IoIcons,
  ...TiIcons,
  ...LuIcons,
  ...PiIcons,
};

const ModalAddNotification = ({ setIsAdd, itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleClose = () => {
    setTimeout(() => {
      dispatch(setIsAdd(false));
    }, 200);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${apiVersion}/notification-email/${itemEdit.notification_aid}` // update
          : `${apiVersion}/notification-email`, // create
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["notification-email"] });
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        dispatch(setSuccess(false));
      } else {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully ${itemEdit ? "Updated" : "Added"}.`));
      }
    },
  });

  const initVal = {
    notification_aid: itemEdit ? itemEdit.notification_aid : "",
    notification_name: itemEdit ? itemEdit.notification_name : "",
    notification_email: itemEdit ? itemEdit.notification_email : "",
    notification_phone_no: itemEdit ? itemEdit.notification_phone_no : "",
    notification_purpose: itemEdit ? itemEdit.notification_purpose : "",
    notification_name_old: itemEdit ? itemEdit.notification_name : "",
  };

  const yupSchema = Yup.object({
    notification_email: Yup.string()
      .required("Required")
      .email("Invalid email"),
    notification_name: Yup.string().required("Required"),
    notification_purpose: Yup.string().required("Required"),
  });

  return (
    <ModalAddWrapper
      className={`transition-all ease-linear transform duration-200 max-w-[30rem] max-h-[21.5rem]`}
      handleClose={handleClose}
    >
      <div className="modal-title">
        <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} Notification</h2>
        <button onClick={handleClose}>
          <GrFormClose className="text-[25px]" />
        </button>
      </div>
      <div className="modal-content">
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values) => {
            const data = {
              ...values,
            };
            mutation.mutate(data);
          }}
        >
          {(props) => {
            return (
              <Form>
                <div className="input-wrapper">
                  <InputText
                    label="Name"
                    type="text"
                    name="notification_name"
                    disabled={mutation.isPending}
                  />
                </div>
                <div className="input-wrapper">
                  <InputText
                    label="Email"
                    type="text"
                    name="notification_email"
                    disabled={mutation.isPending}
                  />
                </div>
                <div className="input-wrapper">
                  <InputText
                    label="Phone/Mobile no."
                    type="text"
                    name="notification_phone_no"
                    disabled={mutation.isPending}
                  />
                </div>

                <div className="input-wrapper">
                  <InputSelect
                    label="Purpose"
                    type="text"
                    name="notification_purpose"
                    disabled={mutation.isPending}
                  >
                    <optgroup label="Select Category">
                      <option value="" hidden>
                        --
                      </option>

                      {purposeValue()?.map((item, key) => (
                        <option key={key} value={item.code}>
                          {item.name}
                        </option>
                      ))}
                    </optgroup>
                  </InputSelect>
                </div>
                <div className="form-action">
                  <div className="form-btn">
                    <button
                      className="btn-modal-submit"
                      type="submit"
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending ? <ButtonSpinner /> : "Save"}
                    </button>
                    <button
                      className="btn-modal-cancel"
                      type="button"
                      onClick={handleClose}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </ModalAddWrapper>
  );
};

export default ModalAddNotification;
