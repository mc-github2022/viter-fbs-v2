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

const ModalAddNewsletter = ({ itemEdit }) => {
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
          ? `${apiVersion}/newsletter/${itemEdit.newsletter_aid}` // update
          : `${apiVersion}/newsletter`, // create
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["newsletter"] });
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
    newsletter_aid: itemEdit ? itemEdit.newsletter_aid : "",
    newsletter_subject: itemEdit ? itemEdit.newsletter_subject : "",
    newsletter_content: itemEdit ? itemEdit.newsletter_content : "",
  };

  const yupSchema = Yup.object({
    newsletter_subject: Yup.string().required("Required"),
    newsletter_content: Yup.string().required("Required"),
  });

  return (
    <ModalAddWrapper
      className={`transition-all ease-linear transform duration-200 max-w-[1200px] ${animate}`}
      handleClose={handleClose}
    >
      <div className="modal-title">
        <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} Newsletter</h2>
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
                  <div className="w-[40%] flex flex-col justify-between">
                    <div>
                      <div className="input-wrapper">
                        <InputText
                          label="Subject"
                          type="text"
                          name="newsletter_subject"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="input-wrapper">
                        <InputTextArea
                          label="Content"
                          type="text"
                          name="newsletter_content"
                          value={values.newsletter_content}
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
                      {values.newsletter_content ? (
                        <div className="w-full">
                          <iframe
                            srcDoc={values.newsletter_content}
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

export default ModalAddNewsletter;
