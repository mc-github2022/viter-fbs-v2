import React from "react";
import { StoreContext } from "../../../../store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  setError,
  setMessage,
  setSuccess,
} from "../../../../store/StoreAction";
import * as Yup from "yup";
import ModalAddWrapper from "../../../../partials/dashboard/ModalAddWrapper";
import { GrFormClose } from "react-icons/gr";
import { Form, Formik } from "formik";
import { InputSelect, InputText } from "../../../../helpers/FormInputs";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";
import { queryData } from "../../../../helpers/queryData";
import { apiVersion } from "../../../../helpers/functions-general";

const ModalAddOtherUser = ({ setIsAdd, itemEdit, roleData }) => {
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
          ? `/${apiVersion}/user-other/${itemEdit.user_other_aid}` // update
          : `/${apiVersion}/user-other`, // create
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user-other"] });
      if (!data.success) {
        console.log("error");
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

  const defaultRoleAid = roleData?.data.filter(
    (role) => role.role_code === "role_is_admin"
  )[0]["role_aid"];

  const initVal = {
    user_other_fname: itemEdit ? itemEdit.user_other_fname : "",
    user_other_lname: itemEdit ? itemEdit.user_other_lname : "",
    user_other_email: itemEdit ? itemEdit.user_other_email : "",
    user_other_role_id: itemEdit ? itemEdit.user_other_role_id : defaultRoleAid,
    user_other_email_old: itemEdit ? itemEdit.user_other_email : "",
  };

  const yupSchema = Yup.object({
    user_other_lname: Yup.string().required("Required"),
    user_other_fname: Yup.string().required("Required"),
    user_other_role_id: Yup.string().required("Required"),
    user_other_email: Yup.string().required("Required").email("Invalid email"),
  });

  return (
    <ModalAddWrapper
      className={`transition-all ease-linear transform duration-200 w-[45dvh] h-[37dvh]`}
      handleClose={handleClose}
    >
      <div className="modal-title">
        <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} Other User</h2>
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
              <Form>
                <div className="input-wrapper">
                  <InputText
                    label="First Name"
                    type="text"
                    name="user_other_fname"
                    disabled={mutation.isPending}
                  />
                </div>
                <div className="input-wrapper">
                  <InputText
                    label="Last Name"
                    type="text"
                    name="user_other_lname"
                    disabled={mutation.isPending}
                  />
                </div>
                <div className="input-wrapper">
                  <InputText
                    label="Email"
                    type="text"
                    name="user_other_email"
                    disabled={mutation.isPending}
                  />
                </div>

                <div className="input-wrapper">
                  <InputSelect
                    label="Role"
                    type="text"
                    name="user_other_role_id"
                    disabled={mutation.isPending}
                  >
                    <option hidden>--</option>
                    <optgroup label="Select Role">
                      {roleData?.count === 0 ? (
                        <option>No Data</option>
                      ) : (
                        roleData?.data.map((item, key) => (
                          <option value={item.role_aid} key={key}>
                            {item.role_name}
                          </option>
                        ))
                      )}
                    </optgroup>
                  </InputSelect>
                </div>
                <div className="form-action">
                  <div className="form-btn">
                    <button
                      className="text-sm btn-modal-submit"
                      type="submit"
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending ? <ButtonSpinner /> : "Save"}
                    </button>
                    <button
                      className="text-sm btn-modal-cancel"
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

export default ModalAddOtherUser;
