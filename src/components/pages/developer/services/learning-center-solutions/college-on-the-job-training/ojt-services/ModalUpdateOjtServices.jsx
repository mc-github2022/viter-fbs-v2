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

const ModalUpdateOjtServices = ({ itemEdit, ojtServicesData }) => {
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
        ojtServicesData?.data?.length
          ? `${apiVersion}/ojt-services/${ojtServicesData.data[0].ojt_services_aid}` // update
          : `${apiVersion}/ojt-services`, // create
        ojtServicesData?.data?.length ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["ojt-services"] });
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
    isUpdateOjtServices: itemEdit,
    ojt_services_subtitle_a:
      ojtServicesData?.data?.[0]?.ojt_services_subtitle_a ?? "",
    ojt_services_subtitle_b:
      ojtServicesData?.data?.[0]?.ojt_services_subtitle_b ?? "",
    ojt_services_title: ojtServicesData?.data?.[0]?.ojt_services_title ?? "",
    ojt_services_list: ojtServicesData?.data?.[0]?.ojt_services_list ?? "",
  };

  const yupSchema = Yup.object({});

  return (
    <>
      <ModalAddWrapper
        className={`transition-all ease-linear transform duration-200 ${animate}`}
        handleClose={handleClose}
      >
        <div className="modal-title">
          <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} OJT Services</h2>
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
                        label="Subtitle A"
                        type="text"
                        name="ojt_services_subtitle_a"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Title"
                        type="text"
                        name="ojt_services_title"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Subtitle B"
                        type="text"
                        name="ojt_services_subtitle_b"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputTextArea
                        label="Services List"
                        type="text"
                        name="ojt_services_list"
                        className="h-[400px]"
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

export default ModalUpdateOjtServices;
