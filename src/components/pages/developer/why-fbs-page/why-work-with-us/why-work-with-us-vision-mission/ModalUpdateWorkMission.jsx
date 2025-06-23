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

const ModalUpdateWorkMission = ({ itemEdit, workVisionMissionData }) => {
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
        workVisionMissionData?.data?.length
          ? `${apiVersion}/work-vision-mission/${workVisionMissionData.data[0].work_vision_aid}` // update
          : `${apiVersion}/work-vision-mission`, // create
        workVisionMissionData?.data?.length ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["work-vision-mission"] });
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
    workVisionUpdate: itemEdit,
    work_vision_mission_title:
      workVisionMissionData?.data?.[0]?.work_vision_mission_title ?? "",
    work_vision_mission_desc:
      workVisionMissionData?.data?.[0]?.work_vision_mission_desc ?? "",
  };

  const yupSchema = Yup.object({});

  return (
    <>
      <ModalAddWrapper
        className={`transition-all ease-linear transform duration-200 ${animate}`}
        handleClose={handleClose}
      >
        <div className="modal-title">
          <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} Mission</h2>
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
                        label="Title"
                        type="text"
                        name="work_vision_mission_title"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputTextArea
                        label="Description"
                        type="text"
                        name="work_vision_mission_desc"
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

export default ModalUpdateWorkMission;
