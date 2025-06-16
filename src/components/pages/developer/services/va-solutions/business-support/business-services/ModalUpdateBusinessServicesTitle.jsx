import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { GrFormClose } from "react-icons/gr";
import * as Yup from "yup";
import { InputText, InputTextArea } from "../../../../../../helpers/FormInputs";
import { apiVersion } from "../../../../../../helpers/functions-general";
import { queryData } from "../../../../../../helpers/queryData";
import ModalAddWrapper from "../../../../../../partials/dashboard/ModalAddWrapper";
import ButtonSpinner from "../../../../../../partials/spinners/ButtonSpinner";
import {
  setError,
  setIsUpdateHome,
  setMessage,
  setSuccess,
} from "../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../store/StoreContext";

const ModalUpdateBusinessServicesTitle = ({
  itemEdit,
  businessServicesTitleData,
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
        businessServicesTitleData?.data?.length
          ? `${apiVersion}/business-services-title/${businessServicesTitleData.data[0].business_services_title_aid}` // update
          : `${apiVersion}/business-services-title`, // create
        businessServicesTitleData?.data?.length ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["business-services-title"],
      });
      if (!data.success) {
        console.log("Error");
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
    businessServicesTitleUpdate: itemEdit,
    business_services_title_black_a:
      businessServicesTitleData?.data?.[0]
        ?.business_services_title_black_a ?? "",
    business_services_title_highlighted:
      businessServicesTitleData?.data?.[0]
        ?.business_services_title_highlighted ?? "",
    business_services_title_black_b:
      businessServicesTitleData?.data?.[0]
        ?.business_services_title_black_b ?? "",
    business_services_title_description:
      businessServicesTitleData?.data?.[0]
        ?.business_services_title_description ?? "",
    business_services_title_button_text:
      businessServicesTitleData?.data?.[0]
        ?.business_services_title_button_text ?? "",
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
            {itemEdit ? "Edit" : "Add"} Business Services Title
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
                  <div className="form-input ">
                    <div className="input-wrapper">
                      <InputText
                        label="Title Black"
                        type="text"
                        name="business_services_title_black_a"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Title Highlighted"
                        type="text"
                        name="business_services_title_highlighted"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Title Black"
                        type="text"
                        name="business_services_title_black_b"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputTextArea
                        label="Description"
                        type="text"
                        name="business_services_title_description"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Button"
                        type="text"
                        name="business_services_title_button_text"
                        disabled={mutation.isPending}
                      />
                    </div>
                  </div>
                  <div className="form-action mb-2 ">
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

export default ModalUpdateBusinessServicesTitle;
