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

const ModalAddDeveloper = ({ setIsAdd, itemEdit, roleData }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");

  const handleClose = () => {
    setAnimate("translate-x-full");
    setTimeout(() => {
      dispatch(setIsAdd(false));
    }, 200);
  };

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${apiVersion}/user-developer/${itemEdit.user_developer_aid}` // update
          : `${apiVersion}/user-developer`, // create
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["user-developer"] });
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
    (role) => role.role_code === "role_is_developer"
  )[0]["role_aid"];

  React.useEffect(() => {
    setAnimate("");
  }, []);

  const initVal = {
    user_developer_fname: itemEdit ? itemEdit.user_developer_fname : "",
    user_developer_lname: itemEdit ? itemEdit.user_developer_lname : "",
    user_developer_email: itemEdit ? itemEdit.user_developer_email : "",
    user_developer_role_id: defaultRoleAid,
    user_developer_email_old: itemEdit ? itemEdit.user_developer_email : "",
  };

  const yupSchema = Yup.object({
    user_developer_lname: Yup.string().required("Required"),
    user_developer_fname: Yup.string().required("Required"),
    user_developer_email: Yup.string()
      .required("Required")
      .email("Invalid email"),
  });

  return (
    <ModalAddWrapper
      className={`transition-all ease-linear transform duration-200 ${animate}`}
      handleClose={handleClose}
    >
      <div className="modal-title">
        <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} Developer</h2>
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
                      label="First Name"
                      type="text"
                      name="user_developer_fname"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="Last Name"
                      type="text"
                      name="user_developer_lname"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="Email"
                      type="text"
                      name="user_developer_email"
                      disabled={mutation.isPending}
                    />
                  </div>
                </div>

                <div className="form-action">
                  <div className="form-btn">
                    <button
                      className="text-sm btn-modal-submit"
                      type="submit"
                      disabled={mutation.isPending || !props.dirty}
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

export default ModalAddDeveloper;
