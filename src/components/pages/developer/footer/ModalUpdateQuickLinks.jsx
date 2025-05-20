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

const ModalUpdateQuickLinks = ({ itemEdit, footerData }) => {
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

  React.useEffect(() => {
    setAnimate("");
  }, []);

  const initVal = {
    isUpdateFooter: itemEdit,

    footer_quicklink_a: footerData?.data?.[0]?.footer_quicklink_a ?? "",
    footer_quicklink_link_a:
      footerData?.data?.[0]?.footer_quicklink_link_a ?? "",
    footer_quicklink_b: footerData?.data?.[0]?.footer_quicklink_b ?? "",
    footer_quicklink_link_b:
      footerData?.data?.[0]?.footer_quicklink_link_b ?? "",
    footer_quicklink_c: footerData?.data?.[0]?.footer_quicklink_c ?? "",
    footer_quicklink_link_c:
      footerData?.data?.[0]?.footer_quicklink_link_c ?? "",
    footer_quicklink_d: footerData?.data?.[0]?.footer_quicklink_d ?? "",
    footer_quicklink_link_d:
      footerData?.data?.[0]?.footer_quicklink_link_d ?? "",
    footer_quicklink_e: footerData?.data?.[0]?.footer_quicklink_e ?? "",
    footer_quicklink_link_e:
      footerData?.data?.[0]?.footer_quicklink_link_e ?? "",
  };

  const yupSchema = Yup.object({});
  return (
    <ModalAddWrapper
      className={`transition-all ease-linear transform duration-200 ${animate}`}
      handleClose={handleClose}
    >
      <div className="modal-title">
        <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} Quicklinks</h2>
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
                      label="Quicklink Name A"
                      type="text"
                      name="footer_quicklink_a"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="Quicklink Link A"
                      type="text"
                      name="footer_quicklink_link_a"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="Quicklink Name B"
                      type="text"
                      name="footer_quicklink_b"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="Quicklink Link B"
                      type="text"
                      name="footer_quicklink_link_b"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="Quicklink Name C"
                      type="text"
                      name="footer_quicklink_c"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="Quicklink Link C"
                      type="text"
                      name="footer_quicklink_link_c"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="Quicklink Name D"
                      type="text"
                      name="footer_quicklink_d"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="Quicklink Link D"
                      type="text"
                      name="footer_quicklink_link_d"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="Quicklink Name E"
                      type="text"
                      name="footer_quicklink_e"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="Quicklink Link E"
                      type="text"
                      name="footer_quicklink_link_e"
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

export default ModalUpdateQuickLinks;
