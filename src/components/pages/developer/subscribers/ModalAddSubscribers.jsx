import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { GrFormClose } from "react-icons/gr";
import * as Yup from "yup";
import { InputText } from "../../../helpers/FormInputs";
import { apiVersion } from "../../../helpers/functions-general";
import { queryData } from "../../../helpers/queryData";
import ModalAddWrapper from "../../../partials/dashboard/ModalAddWrapper";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";

const ModalAddSubscribers = ({ itemEdit }) => {
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
          ? `${apiVersion}/subscribe/${itemEdit.subscriber_aid}` // update
          : `${apiVersion}/subscribe/create-subscriber`, // create
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["subscribe"] });
      if (!data.success) {
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

  const initVal = {
    subscriber_aid: itemEdit ? itemEdit.subscriber_aid : "",
    subscriber_email: itemEdit ? itemEdit.subscriber_email : "",

    subscriber_email_old: itemEdit ? itemEdit.subscriber_email : "",
  };

  const yupSchema = Yup.object({
    subscriber_email: Yup.string().required("Required").email("Invalid Email"),
  });
  return (
    <ModalAddWrapper
      className={`transition-all ease-linear transform duration-200 max-w-[30rem] max-h-[19.5rem]`}
      handleClose={handleClose}
    >
      <div className="modal-title">
        <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} Subscriber</h2>
        <button onClick={handleClose}>
          <GrFormClose className="text-[25px]" />
        </button>
      </div>
      <div className="modal-content relative">
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values) => {
            mutation.mutate(values);
          }}
        >
          {(props) => {
            return (
              <Form>
                <div className="input-wrapper">
                  <InputText
                    label="Email"
                    type="text"
                    name="subscriber_email"
                    disabled={mutation.isPending}
                  />
                </div>

                <div className="form-action absolute bottom-0 w-full">
                  <div className="form-btn">
                    <button
                      className="btn-modal-submit"
                      type="submit"
                      disabled={mutation.isPending || !props.dirty}
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

export default ModalAddSubscribers;
