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

const ModalAddRole = ({ setIsAdd, itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  // const [roleName, setRoleName] = React.useState(
  //   itemEdit ? itemEdit.user_role_name : ""
  // );

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
          ? `/v1/role/${itemEdit.user_role_aid}` // update
          : `/v1/role`, // create
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
    user_role_aid: itemEdit ? itemEdit.user_role_aid : "",
    user_role_name: itemEdit ? itemEdit.user_role_name : "",
    user_role_description: itemEdit ? itemEdit.user_role_description : "",
    user_role_code: itemEdit ? itemEdit.user_role_code : "",
  };

  const yupSchema = Yup.object({
    user_role_name: Yup.string().required("Required"),
  });

  return (
    <ModalAddWrapper
      className={`transition-all ease-linear transform duration-200 w-[30rem] h-[20rem]`}
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
            const { user_role_name } = values;
            const formattedRoleName = user_role_name // lowercase the role name and replace the space to underscore.
              .toLowerCase()
              .replace(/ /g, "_");
            const data = {
              ...values,
              user_role_code: `role_is_${formattedRoleName}`,
            };
            console.log(data);
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
                    name="user_role_name"
                    disabled={mutation.isPending}
                  />
                </div>
                <div className="input-wrapper">
                  <InputTextArea
                    label="Role Description"
                    type="text"
                    name="user_role_description"
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
