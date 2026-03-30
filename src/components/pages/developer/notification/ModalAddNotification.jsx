import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { GrFormClose } from "react-icons/gr";
import * as Yup from "yup";
import { InputText } from "../../../helpers/FormInputs";
import { apiVersion } from "../../../helpers/functions-general";
import { queryData } from "../../../helpers/queryData";
import ModalAddWrapper from "../../../partials/dashboard/ModalAddWrapper";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import { setError, setMessage, setSuccess } from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";
import { purposeValue } from "./functions-notification";

const ModalAddNotification = ({ setIsAdd, itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");
  const [selectedValue, setSelectedValue] = React.useState(
    itemEdit ? itemEdit.notification_purpose : "",
  );

  const handleClose = () => {
    setAnimate("translate-x-full");
    setTimeout(() => {
      dispatch(setIsAdd(false));
    }, 200);
  };

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${apiVersion}/notification-email/${itemEdit.notification_aid}` // update
          : `${apiVersion}/notification-email`, // create
        itemEdit ? "put" : "post",
        values,
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["notification-email"] });
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        dispatch(setSuccess(false));
      } else {
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully ${itemEdit ? "Updated" : "Added"}.`));
      }
    },
  });

  React.useEffect(() => {
    setAnimate("");
  }, []);

  const initVal = {
    notification_aid: itemEdit ? itemEdit.notification_aid : "",
    notification_name: itemEdit ? itemEdit.notification_name : "",
    notification_email: itemEdit ? itemEdit.notification_email : "",
    notification_phone_no: itemEdit ? itemEdit.notification_phone_no : "",
    notification_purpose: itemEdit ? itemEdit.notification_purpose : "",
    notification_name_old: itemEdit ? itemEdit.notification_name : "",
  };

  const yupSchema = Yup.object({
    notification_email: Yup.string()
      .required("Required")
      .email("Invalid email"),
    notification_name: Yup.string().required("Required"),
    notification_purpose: Yup.string().required("Required"),
  });

  return (
    <ModalAddWrapper
      className={`transition-all ease-linear transform duration-200 ${animate}`}
      handleClose={handleClose}
    >
      <div className="modal-title">
        <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} Notification</h2>
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
                    <InputText
                      label="Phone/Mobile no."
                      type="text"
                      name="notification_phone_no"
                      disabled={mutation.isPending}
                    />
                  </div>

                  <div className="input-wrapper mb-2">
                    <label htmlFor="notification_purpose">Purpose</label>
                    <select
                      id="notification_purpose"
                      name="notification_purpose"
                      disabled={mutation.isPending}
                      value={props.values.notification_purpose}
                      onChange={props.handleChange}
                      className="input-select"
                    >
                      <optgroup label="Select Category">
                        <option value="" hidden>
                          --
                        </option>
                        {purposeValue()?.map((item, key) => (
                          <option key={key} value={item.code}>
                            {item.name}
                          </option>
                        ))}
                      </optgroup>
                    </select>

                    {props.values.notification_purpose &&
                      purposeValue()?.map((item, key) => {
                        if (item.code === props.values.notification_purpose) {
                          if (item.name === "Get started LCS page") {
                            return (
                              <span className="text-xs" key={key}>
                                Note: This is specifically for the "Get Started"
                                form on the LCS page.
                              </span>
                            );
                          }
                          if (item.name === "Get started Careers page") {
                            return (
                              <span className="text-xs" key={key}>
                                Note: This is specifically for the "Get Started"
                                form on the Careers page.
                              </span>
                            );
                          }
                          if (item.name === "Partner with us LCS page") {
                            return (
                              <span className="text-xs" key={key}>
                                Note: This is specifically for the "Partner With
                                Us" form on the LCS page.
                              </span>
                            );
                          }
                          if (item.name === "Apply now LCS page") {
                            return (
                              <span className="text-xs" key={key}>
                                Note: This is specifically for the "Apply Now"
                                form on the LCS page.
                              </span>
                            );
                          }
                          if (item.name === "Apply now Careers page") {
                            return (
                              <span className="text-xs" key={key}>
                                Note: This is specifically for the "Apply Now"
                                form on the Careers page.
                              </span>
                            );
                          }
                          if (item.name === "Default") {
                            return (
                              <span className="text-xs" key={key}>
                                Note: This applies to the following pages.
                                <ul className="ml-9">
                                  <li>-Home</li>
                                  <li>-Web Application</li>
                                  <li>-Accounting Solutions</li>
                                  <li>-VA Solutions</li>
                                  <li>-Web Design/Development </li>
                                </ul>
                              </span>
                            );
                          }
                          if (item.name === "Subscribers") {
                            return (
                              <span className="text-xs" key={key}>
                                This is specifically for the "Subscribe" form on
                                the Insight section.
                              </span>
                            );
                          }
                          if (
                            item.name ===
                            "Learn more Web Design and Development page"
                          ) {
                            return (
                              <span className="text-xs" key={key}>
                                Note: This applies to the following pages.
                                <ul className="ml-9">
                                  <li>-HR Information System</li>
                                  <li>-Online Payroll System</li>
                                  <li>-School Enrollment System</li>
                                  <li>-Online Payment Integration</li>
                                  <li>-Online Donation System</li>
                                  <li>-Asset Inventory System</li>
                                  <li>-Online Booking System</li>
                                  <li>-WordPress CMS Website</li>
                                  <li>-Single Page Website</li>
                                  <li>-Accounting Solutions</li>
                                  <li>-Web Design</li>
                                  <li>-Graphic Design</li>
                                </ul>
                              </span>
                            );
                          }
                        }
                        return null;
                      })}
                  </div>
                </div>

                <div className="form-action">
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
  );
};

export default ModalAddNotification;
