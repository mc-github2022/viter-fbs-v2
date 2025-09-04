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

const ModalUpdateSocialMediaOverviewList = ({
  itemEdit,
  socialOverviewData,
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
        socialOverviewData?.data?.length
          ? `${apiVersion}/social-overview/${socialOverviewData.data[0].social_overview_aid}` // update
          : `${apiVersion}/social-overview`, // create
        socialOverviewData?.data?.length ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["social-overview"] });
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
    socialOverviewUpdate: itemEdit,
    social_overview_list_title_a:
      socialOverviewData?.data?.[0]?.social_overview_list_title_a ?? "",
    social_overview_list_description_a:
      socialOverviewData?.data?.[0]?.social_overview_list_description_a ?? "",
    social_overview_list_title_b:
      socialOverviewData?.data?.[0]?.social_overview_list_title_b ?? "",
    social_overview_list_description_b:
      socialOverviewData?.data?.[0]?.social_overview_list_description_b ?? "",
    social_overview_list_title_c:
      socialOverviewData?.data?.[0]?.social_overview_list_title_c ?? "",
    social_overview_list_description_c:
      socialOverviewData?.data?.[0]?.social_overview_list_description_c ?? "",
    social_overview_list_title_d:
      socialOverviewData?.data?.[0]?.social_overview_list_title_d ?? "",
    social_overview_list_description_d:
      socialOverviewData?.data?.[0]?.social_overview_list_description_d ?? "",
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
            {itemEdit ? "Edit" : "Add"} Social Media Management Overview
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
                        label="Title A"
                        type="text"
                        name="social_overview_list_title_a"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputTextArea
                        label="Description A"
                        type="text"
                        name="social_overview_list_description_a"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Title B"
                        type="text"
                        name="social_overview_list_title_b"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputTextArea
                        label="Description B"
                        type="text"
                        name="social_overview_list_description_b"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Title C"
                        type="text"
                        name="social_overview_list_title_c"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputTextArea
                        label="Description C"
                        type="text"
                        name="social_overview_list_description_c"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Title D"
                        type="text"
                        name="social_overview_list_title_d"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputTextArea
                        label="Description D"
                        type="text"
                        name="social_overview_list_description_d"
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

export default ModalUpdateSocialMediaOverviewList;
