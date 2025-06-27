import React from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { GrFormClose } from "react-icons/gr";
import * as Yup from "yup";
import { InputText } from "../../../helpers/FormInputs";
import { apiVersion } from "../../../helpers/functions-general";
import { queryData } from "../../../helpers/queryData";
import ModalAddWrapper from "../../../partials/dashboard/ModalAddWrapper";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import {
  setError,
  setIsUpdateHome,
  setMessage,
  setSuccess,
} from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";

const ModalUpdateContactFormCareers = ({
  itemEdit,
  contactFormCareersData,
}) => {
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
        contactFormCareersData?.data?.length
          ? `${apiVersion}/contactCareers/${contactFormCareersData.data[0].form_careers_aid}` // update
          : `${apiVersion}/contactCareers`, // create
        contactFormCareersData?.data?.length ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["contactCareers"] });
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
    isUpdateContactFormCareers: itemEdit,
    form_careers_subtitle:
      contactFormCareersData?.data?.[0]?.form_careers_subtitle ?? "",
    form_careers_title:
      contactFormCareersData?.data?.[0]?.form_careers_title ?? "",
    form_careers_telephone:
      contactFormCareersData?.data?.[0]?.form_careers_telephone ?? "",
    form_careers_phone:
      contactFormCareersData?.data?.[0]?.form_careers_phone ?? "",
    form_careers_position_a:
      contactFormCareersData?.data?.[0]?.form_careers_position_a ?? "",
    form_careers_name_a:
      contactFormCareersData?.data?.[0]?.form_careers_name_a ?? "",
    form_careers_email_a:
      contactFormCareersData?.data?.[0]?.form_careers_email_a ?? "",
    form_careers_position_b:
      contactFormCareersData?.data?.[0]?.form_careers_position_b ?? "",
    form_careers_name_b:
      contactFormCareersData?.data?.[0]?.form_careers_name_b ?? "",
    form_careers_email_b:
      contactFormCareersData?.data?.[0]?.form_careers_email_b ?? "",
  };

  const yupSchema = Yup.object({});

  return (
    <>
      <ModalAddWrapper
        className={`transition-all ease-linear transform duration-200 ${animate}`}
        handleClose={handleClose}
      >
        <div className="modal-title">
          <h2 className="text-sm">
            {itemEdit ? "Edit" : "Add"} Contact Form (Careers)
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
                        label="Subtitle"
                        type="text"
                        name="form_careers_subtitle"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Title"
                        type="text"
                        name="form_careers_title"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Telephone No."
                        type="text"
                        name="form_careers_telephone"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Phone No."
                        type="text"
                        name="form_careers_phone"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="input-wrapper">
                      <InputText
                        label="Human Resource Title"
                        type="text"
                        name="form_careers_position_a"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Name"
                        type="text"
                        name="form_careers_name_a"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Email"
                        type="text"
                        name="form_careers_email_a"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Human Resource Staff Title"
                        type="text"
                        name="form_careers_position_b"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Name"
                        type="text"
                        name="form_careers_name_b"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Email"
                        type="text"
                        name="form_careers_email_b"
                        disabled={mutation.isPending}
                      />
                    </div>
                  </div>
                  <div className="form-action  w-full mb-2">
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
    </>
  );
};

export default ModalUpdateContactFormCareers;
