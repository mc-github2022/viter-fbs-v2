import React from "react";
import * as Yup from "yup";
import { GrFormClose } from "react-icons/gr";
import {
  setError,
  setIsUpdateHome,
  setMessage,
  setSuccess,
} from "../../../../../store/StoreAction";
import { StoreContext } from "../../../../../store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../../../helpers/queryData";
import { apiVersion } from "../../../../../helpers/functions-general";
import ModalAddWrapper from "../../../../../partials/dashboard/ModalAddWrapper";
import { Form, Formik } from "formik";
import { InputText, InputTextArea } from "../../../../../helpers/FormInputs";
import ButtonSpinner from "../../../../../partials/spinners/ButtonSpinner";

const ModalUpdateTestimonialTitle = ({ itemEdit, homeTitlesData }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");

  const handleClose = () => {
    setAnimate("translate-x-full");
    setTimeout(() => {
      dispatch(setIsUpdateHome(false));
    }, 200);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        homeTitlesData?.data?.length
          ? `${apiVersion}/homeTitles/${homeTitlesData.data[0].title_aid}` // update
          : `${apiVersion}/homeTitles`, // create
        homeTitlesData?.data?.length ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["homeTitles"] });
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        dispatch(setSuccess(false));
      } else {
        console.log("Success");
        dispatch(setIsUpdateHome(false));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully ${itemEdit ? "Updated" : "Added"}.`));
      }
    },
  });

  React.useEffect(() => {
    setAnimate("");
  }, []);

  const initVal = {
    isUpdateHomeTitle: itemEdit,

    title_testimonial_a: homeTitlesData?.data?.[0]?.title_testimonial_a ?? "",
    title_testimonial_b: homeTitlesData?.data?.[0]?.title_testimonial_b ?? "",
    title_description: homeTitlesData?.data?.[0]?.title_description ?? "",
  };

  const yupSchema = Yup.object({});
  return (
    <ModalAddWrapper
      className={`transition-all ease-linear transform duration-200 ${animate}`}
      handleClose={handleClose}
    >
      <div className="modal-title">
        <h2 className="text-sm">
          {itemEdit ? "Edit" : "Add"} Testimonial Title
        </h2>
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
              <Form className="modal-form">
                <div className="form-input">
                  <div className="input-wrapper">
                    <InputText
                      label="Title A"
                      type="text"
                      name="title_testimonial_a"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="Title B"
                      type="text"
                      name="title_testimonial_b"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputTextArea
                      label="Description"
                      type="text"
                      name="title_description"
                      disabled={mutation.isPending}
                    />
                  </div>
                </div>
                <div className="form-action mb-1">
                  <div className="form-btn">
                    <button
                      className="btn-modal-submit"
                      type="submit"
                      disabled={mutation.isPending || !props.dirty}
                    >
                      {mutation.isPending ? (
                        <>
                          <ButtonSpinner /> Save
                        </>
                      ) : (
                        "Save"
                      )}
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

export default ModalUpdateTestimonialTitle;
