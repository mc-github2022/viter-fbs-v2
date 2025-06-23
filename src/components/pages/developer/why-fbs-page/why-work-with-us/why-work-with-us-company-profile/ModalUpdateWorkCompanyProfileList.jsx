import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { GrFormClose } from "react-icons/gr";
import * as Yup from "yup";
import { StoreContext } from "../../../../../store/StoreContext";
import {
  setError,
  setIsUpdateHome,
  setMessage,
  setSuccess,
} from "../../../../../store/StoreAction";
import { queryData } from "../../../../../helpers/queryData";
import { apiVersion } from "../../../../../helpers/functions-general";
import ModalAddWrapper from "../../../../../partials/dashboard/ModalAddWrapper";
import { InputText, InputTextArea } from "../../../../../helpers/FormInputs";
import ButtonSpinner from "../../../../../partials/spinners/ButtonSpinner";

const ModalUpdateWorkCompanyProfileList = ({
  itemEdit,
  workCompanyProfileData,
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
        workCompanyProfileData?.data?.length
          ? `${apiVersion}/work-company-profile/${workCompanyProfileData.data[0].work_profile_aid}` // update
          : `${apiVersion}/work-company-profile`, // create
        workCompanyProfileData?.data?.length ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["work-company-profile"] });
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
    workProfileUpdate: itemEdit,
    work_profile_list_title_bold_a:
      workCompanyProfileData?.data?.[0]?.work_profile_list_title_bold_a ?? "",
    work_profile_list_title_a:
      workCompanyProfileData?.data?.[0]?.work_profile_list_title_a ?? "",
    work_profile_list_description_a:
      workCompanyProfileData?.data?.[0]?.work_profile_list_description_a ?? "",
    work_profile_list_title_bold_b:
      workCompanyProfileData?.data?.[0]?.work_profile_list_title_bold_b ?? "",
    work_profile_list_title_b:
      workCompanyProfileData?.data?.[0]?.work_profile_list_title_b ?? "",
    work_profile_list_description_b:
      workCompanyProfileData?.data?.[0]?.work_profile_list_description_b ?? "",
    work_profile_list_title_bold_c:
      workCompanyProfileData?.data?.[0]?.work_profile_list_title_bold_c ?? "",
    work_profile_list_title_c:
      workCompanyProfileData?.data?.[0]?.work_profile_list_title_c ?? "",
    work_profile_list_description_c:
      workCompanyProfileData?.data?.[0]?.work_profile_list_description_c ?? "",
    work_profile_list_title_bold_d:
      workCompanyProfileData?.data?.[0]?.work_profile_list_title_bold_d ?? "",
    work_profile_list_title_d:
      workCompanyProfileData?.data?.[0]?.work_profile_list_title_d ?? "",
    work_profile_list_description_d:
      workCompanyProfileData?.data?.[0]?.work_profile_list_description_d ?? "",
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
            {itemEdit ? "Edit" : "Add"} Company Profile
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
                        label="Title Bold A"
                        type="text"
                        name="work_profile_list_title_bold_a"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Title A"
                        type="text"
                        name="work_profile_list_title_a"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputTextArea
                        label="Description A"
                        type="text"
                        name="work_profile_list_description_a"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Title Bold B"
                        type="text"
                        name="work_profile_list_title_bold_b"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Title B"
                        type="text"
                        name="work_profile_list_title_b"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputTextArea
                        label="Description B"
                        type="text"
                        name="work_profile_list_description_b"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Title Bold C"
                        type="text"
                        name="work_profile_list_title_bold_c"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Title C"
                        type="text"
                        name="work_profile_list_title_c"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputTextArea
                        label="Description C"
                        type="text"
                        name="work_profile_list_description_c"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Title Bold D"
                        type="text"
                        name="work_profile_list_title_bold_d"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Title D"
                        type="text"
                        name="work_profile_list_title_d"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputTextArea
                        label="Description D"
                        type="text"
                        name="work_profile_list_description_d"
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

export default ModalUpdateWorkCompanyProfileList;
