import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { GrFormClose } from "react-icons/gr";
import * as Yup from "yup";
import { InputText, InputTextArea } from "../../../../helpers/FormInputs";
import ModalAddWrapper from "../../../../partials/dashboard/ModalAddWrapper";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";
import {
  setError,
  setMessage,
  setSuccess,
} from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import { queryData } from "../../../../helpers/queryData";
import { apiVersion } from "@/components/helpers/functions-general";

const ModalAddRole = ({ setIsAdd, itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleClose = () => {
    setTimeout(() => {
      dispatch(setIsAdd(false));
    }, 200);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${apiVersion}/role/${itemEdit.role_aid}` // update
          : `${apiVersion}/role`, // create
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["role"] });
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        dispatch(setSuccess(false));
      } else {
        console.log("Success");
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully ${itemEdit ? "Updated" : "Added"}.`));
      }
    },
  });

  const initVal = {
    role_aid: itemEdit ? itemEdit.role_aid : "",
    role_name: itemEdit ? itemEdit.role_name : "",
    role_description: itemEdit ? itemEdit.role_description : "",
    role_code: itemEdit ? itemEdit.role_code : "",

    role_name_old: itemEdit ? itemEdit.role_name : "",
  };

  const yupSchema = Yup.object({
    role_name: Yup.string().required("Required"),
  });

  return (
    <ModalAddWrapper
      className={`transition-all ease-linear transform duration-200 max-w-[30rem] max-h-[20rem]`}
      handleClose={handleClose}
    >
      <div className="modal-title">
        <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} Role</h2>
        <button onClick={handleClose}>
          <GrFormClose className="text-[25px]" />
        </button>
      </div>
      <div className="modal-content">
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values) => {
            const { role_name } = values;
            // lowercase the role name and replace the space to underscore.
            const formattedRoleName = role_name
              .toLowerCase()
              .replace(/ /g, "_");
            const data = {
              ...values,
              role_code: `role_is_${formattedRoleName}`,
            };
            mutation.mutate(data);
          }}
        >
          {(props) => {
            return (
              <Form>
                <div className="input-wrapper">
                  <InputText
                    label="Role Name"
                    type="text"
                    name="role_name"
                    disabled={mutation.isPending}
                  />
                </div>
                <div className="input-wrapper">
                  <InputTextArea
                    label="Role Description"
                    type="text"
                    name="role_description"
                    disabled={mutation.isPending}
                  />
                </div>

                <div className="form-action">
                  <div className="form-btn">
                    <button
                      className="btn-modal-submit"
                      type="submit"
                      disabled={mutation.isPending}
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
  );
};

export default ModalAddRole;
