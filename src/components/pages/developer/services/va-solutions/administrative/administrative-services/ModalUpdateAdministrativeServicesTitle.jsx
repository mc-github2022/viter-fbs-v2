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

const ModalUpdateAdministrativeServicesTitle = ({
  itemEdit,
  administrativeServicesTitleData,
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
        administrativeServicesTitleData?.data?.length
          ? `${apiVersion}/administrative-services-title/${administrativeServicesTitleData.data[0].administrative_services_title_aid}` // update
          : `${apiVersion}/administrative-services-title`, // create
        administrativeServicesTitleData?.data?.length ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["administrative-services-title"],
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
    administrativeServicesTitleUpdate: itemEdit,
    administrative_services_title_black_a:
      administrativeServicesTitleData?.data?.[0]
        ?.administrative_services_title_black_a ?? "",
    administrative_services_title_highlighted:
      administrativeServicesTitleData?.data?.[0]
        ?.administrative_services_title_highlighted ?? "",
    administrative_services_title_black_b:
      administrativeServicesTitleData?.data?.[0]
        ?.administrative_services_title_black_b ?? "",
    administrative_services_title_description:
      administrativeServicesTitleData?.data?.[0]
        ?.administrative_services_title_description ?? "",
    administrative_services_title_button_text:
      administrativeServicesTitleData?.data?.[0]
        ?.administrative_services_title_button_text ?? "",
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
            {itemEdit ? "Edit" : "Add"} Administrative Services Title
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
                        name="administrative_services_title_black_a"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Title Highlighted"
                        type="text"
                        name="administrative_services_title_highlighted"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Title Black"
                        type="text"
                        name="administrative_services_title_black_b"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputTextArea
                        label="Description"
                        type="text"
                        name="administrative_services_title_description"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Button"
                        type="text"
                        name="administrative_services_title_button_text"
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

export default ModalUpdateAdministrativeServicesTitle;
