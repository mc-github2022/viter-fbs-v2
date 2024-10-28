import React from "react";
import { StoreContext } from "../../../store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../helpers/queryData";
import { setError, setMessage, setSuccess } from "../../../store/StoreAction";
import ModalAddWrapper from "../../../partials/dashboard/ModalAddWrapper";
import { GrFormClose } from "react-icons/gr";
import { Form, Formik } from "formik";
import { InputSelect, InputText } from "../../../helpers/FormInputs";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import * as Yup from "yup";
import * as icons from "react-icons/fa";

const ModalAddSpecialOffers = ({ setIsAdd, itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [icon, setIcon] = React.useState("");
  const Icon = icon ? icons[icon] : null;

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
          ? `/v1/insights/${itemEdit.home_insights_aid}` // update
          : `/v1/insights`, // create
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["insights"] });
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
    home_insights_aid: itemEdit ? itemEdit.home_insights_aid : "",
    home_insights_category: itemEdit ? itemEdit.home_insights_category : "",
    home_insights_title: itemEdit ? itemEdit.home_insights_title : "",
    home_insights_slug: itemEdit ? itemEdit.home_insights_slug : "",
    home_insights_date: itemEdit ? itemEdit.home_insights_date : "",
    home_insights_paragraph_a: itemEdit
      ? itemEdit.home_insights_paragraph_a
      : "",
    home_insights_paragraph_b: itemEdit
      ? itemEdit.home_insights_paragraph_b
      : "",
    home_insights_paragraph_c: itemEdit
      ? itemEdit.home_insights_paragraph_c
      : "",
    home_insights_img: itemEdit ? itemEdit.home_insights_img : "",
  };

  const yupSchema = Yup.object({
    home_insights_slug: Yup.string().required("Required"),
  });

  return (
    <ModalAddWrapper
      className={`transition-all ease-linear transform duration-200`}
      handleClose={handleClose}
    >
      <div className="modal-title">
        <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} Special Offers</h2>
        <button onClick={handleClose}>
          <GrFormClose className="text-[25px]" />
        </button>
      </div>
      <div className="modal-content">
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values) => {
            mutation.mutate(values);
          }}
        >
          {(props) => {
            return (
              <Form className="modal-form">
                <div className="form-input">
                  <div className="input-wrapper">
                    <InputSelect
                      label="Icon"
                      type="text"
                      name="home_insights_category"
                      disabled={mutation.isPending}
                      onChange={(e) => setIcon(e.target.value)}
                    >
                      {Object.keys(icons).map((icon) => (
                        <option className="text-sm">{icon}</option>
                      ))}
                      {icon ? (
                        <div>
                          Selected icon: <Icon />
                        </div>
                      ) : (
                        "No icon selected"
                      )}
                    </InputSelect>
                    {icon ? (
                      <div className="flex items-center gap-4">
                        Selected icon: <Icon />
                      </div>
                    ) : (
                      "No icon selected"
                    )}
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="Title"
                      type="text"
                      name="home_insights_title"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="*Slug"
                      type="text"
                      name="home_insights_slug"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputText
                      label="Date"
                      type="date"
                      name="home_insights_date"
                      disabled={mutation.isPending}
                    />
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

export default ModalAddSpecialOffers;
