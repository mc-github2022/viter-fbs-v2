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
          ? `/v1/otheruser/${itemEdit.events_activities_aid}` // update
          : `/v1/otheruser`, // create
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["otheruser"] });
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

  // const activeRole = roleData?.data.filter(
  //   (role) =>
  //     role.user_role_is_active === 1 &&
  //     role.user_role_name.toLowerCase() !== "admin"
  // );

  const initVal = {
    events_activities_aid: itemEdit ? itemEdit.events_activities_aid : "",
    events_activities_category: itemEdit
      ? itemEdit.events_activities_category
      : "",
    events_activities_title: itemEdit ? itemEdit.events_activities_title : "",
    events_activities_slug: itemEdit ? itemEdit.events_activities_slug : "",
    events_activities_date: itemEdit ? itemEdit.events_activities_date : "",
    events_activities_description: itemEdit
      ? itemEdit.events_activities_description
      : "",
    events_activities_img: itemEdit ? itemEdit.events_activities_img : "",
  };

  const yupSchema = Yup.object({
    events_activities_slug: Yup.string().required("Required"),
  });

  return (
    <ModalAddWrapper
      className={`transition-all ease-linear transform duration-200 w-[30rem] h-[18rem]`}
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
                    label="Name"
                    type="text"
                    name="notification_name"
                    disabled={mutation.isPending}
                  />
                </div>
                <div className="input-wrapper">
                  <InputText
                    label="Email"
                    type="text"
                    name="notification_email"
                    disabled={mutation.isPending}
                  />
                </div>

                <div className="input-wrapper">
                  <InputSelect
                    label="Role"
                    type="text"
                    name="notification_purpose"
                    disabled={mutation.isPending}
                  >
                    <option hidden></option>
                    {/* {activeRole.length === 0 ? (
                      <option>No Data</option>
                    ) : (
                      activeRole?.map((item, key) => (
                        <option value={item.user_role_aid} key={key}>
                          {item.user_role_name}
                        </option>
                      ))
                    )} */}
                  </InputSelect>
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

export default ModalAddOtherUser;
