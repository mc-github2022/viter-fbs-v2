import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { GrFormClose } from "react-icons/gr";
import * as Yup from "yup";
import { StoreContext } from "../../../../store/StoreContext";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "../../../../store/StoreAction";
import { apiVersion } from "../../../../helpers/functions-general";
import { queryData } from "../../../../helpers/queryData";
import ModalAddWrapper from "../../../../partials/dashboard/ModalAddWrapper";
import { InputText, InputTextArea } from "../../../../helpers/FormInputs";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";

const ModalAddMailerLog = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");

  const handleClose = () => {
    setAnimate("translate-x-full");
    setTimeout(() => {
      dispatch(setIsAdd(false));
    }, 200);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${apiVersion}/mailer-log/update-mailer-subject-content/${itemEdit.sending_email_log_aid}` // update
          : `${apiVersion}/sending-newsletter/create`, // create
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["mailer-log"] });
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

  React.useEffect(() => {
    setAnimate("");
  }, []);

  const initVal = {
    sending_email_log_aid: itemEdit ? itemEdit.sending_email_log_aid : "",
    sending_email_log_subject: itemEdit
      ? itemEdit.sending_email_log_subject
      : "",
    sending_email_log_content: itemEdit
      ? itemEdit.sending_email_log_content
      : "",
  };

  const yupSchema = Yup.object({
    sending_email_log_subject: Yup.string().required("Required"),
    sending_email_log_content: Yup.string().required("Required"),
  });

  return (
    <ModalAddWrapper
      className={`transition-all ease-linear transform duration-200 max-w-[1300px] ${animate}`}
      handleClose={handleClose}
    >
      <div className="modal-title">
        <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} Email Message</h2>
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
          {({ props, values, dirty }) => {
            return (
              <Form>
                <div className="flex gap-10 ">
                  <div className="w-[50%] flex flex-col justify-between">
                    <div>
                      <div className="input-wrapper">
                        <InputText
                          label="Subject"
                          type="text"
                          name="sending_email_log_subject"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="input-wrapper">
                        <InputTextArea
                          label="Message"
                          type="text"
                          name="sending_email_log_content"
                          value={values.sending_email_log_content}
                          className="min-h-[calc(80vh-55px)]"
                          disabled={mutation.isPending}
                        />
                      </div>
                    </div>

                    <div className="form-action bottom-0 w-full">
                      <div className="form-btn">
                        <button
                          className="btn-modal-submit"
                          type="submit"
                          disabled={mutation.isPending || !dirty}
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
                  </div>
                  <div className="w-[75%]">
                    <div className="Preview md:min-h-[calc(96vh-55px)] lg:max-h-[calc(100vh-150px)] w-full border-[2px] border-gray-200 flex justify-center items-center rounded-lg mt-3 overflow-hidden">
                      {values.sending_email_log_content ? (
                        <div className="w-full">
                          <iframe
                            srcDoc={values.sending_email_log_content}
                            className="md:min-h-[calc(93vh-35px)] lg:max-h-[calc(90vh-150px)] border-none w-full"
                          />
                        </div>
                      ) : (
                        <p className="text-gray-400 text-xs">
                          No Preview Available
                        </p>
                      )}
                    </div>
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

export default ModalAddMailerLog;
