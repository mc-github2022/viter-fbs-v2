import React from "react";
import * as Yup from "yup";
import { GrFormClose } from "react-icons/gr";
import {
  setError,
  setIsUpdateHome,
  setMessage,
  setSuccess,
} from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../helpers/queryData";
import { apiVersion } from "../../../helpers/functions-general";
import ModalAddWrapper from "../../../partials/dashboard/ModalAddWrapper";
import { Form, Formik } from "formik";
import { InputText } from "../../../helpers/FormInputs";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";

const ModalUpdateCopyright = ({ itemEdit, footerData }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleClose = () => {
    setTimeout(() => {
      dispatch(setIsUpdateHome(false));
    }, 200);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        footerData?.data?.length
          ? `${apiVersion}/footer/${footerData.data[0].footer_aid}` // update
          : `${apiVersion}/footer`, // create
        footerData?.data?.length ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["footer"] });
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

  const initVal = {
    isUpdateFooter: itemEdit,

    footer_copyright: footerData?.data?.[0]?.footer_copyright ?? "",
    footer_privacy_text: footerData?.data?.[0]?.footer_privacy_text ?? "",
    footer_privacy_link: footerData?.data?.[0]?.footer_privacy_link ?? "",
    footer_terms_text: footerData?.data?.[0]?.footer_terms_text ?? "",
    footer_terms_link: footerData?.data?.[0]?.footer_terms_link ?? "",
    footer_eula_text: footerData?.data?.[0]?.footer_eula_text ?? "",
    footer_eula_link: footerData?.data?.[0]?.footer_eula_link ?? "",
  };

  const yupSchema = Yup.object({});
  return (
    <ModalAddWrapper
      className={`transition-all ease-linear transform duration-200 max-h-[450px] max-w-[500px]`}
      handleClose={handleClose}
    >
      <div className="modal-title">
        <h2 className="text-sm">
          {itemEdit ? "Edit" : "Add"} Copyright and Links
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
                      label="Copyright"
                      type="text"
                      name="footer_copyright"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="Privacy Policy Title"
                      type="text"
                      name="footer_privacy_text"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="Privacy Policy Link"
                      type="text"
                      name="footer_privacy_link"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="Terms Title"
                      type="text"
                      name="footer_terms_text"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="Terms Link"
                      type="text"
                      name="footer_terms_link"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="EULA Title"
                      type="text"
                      name="footer_eula_text"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="EULA Link"
                      type="text"
                      name="footer_eula_link"
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

export default ModalUpdateCopyright;
