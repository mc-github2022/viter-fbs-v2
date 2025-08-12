import React from "react";
import { StoreContext } from "../../../../store/StoreContext";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "../../../../store/StoreAction";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../../helpers/queryData";
import { apiVersion } from "../../../../helpers/functions-general";
import * as Yup from "yup";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";
import { InputSelect, InputText } from "../../../../helpers/FormInputs";
import { Form, Formik } from "formik";
import { GrFormClose } from "react-icons/gr";
import ModalAddWrapper from "../../../../partials/dashboard/ModalAddWrapper";

const ModalAddCategory = ({ itemEdit }) => {
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
          ? `${apiVersion}/packages-category/${itemEdit.packages_category_aid}` // update
          : `${apiVersion}/packages-category`, // create
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["packages-category"] });
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

  React.useEffect(() => {
    setAnimate("");
  }, []);

  const initVal = {
    packages_category_list_name: itemEdit
      ? itemEdit.packages_category_list_name
      : "",
    packages_category_name: itemEdit ? itemEdit.packages_category_name : "",
    packages_category_url: itemEdit ? itemEdit.packages_category_url : "",

    packages_category_name_old: itemEdit ? itemEdit.packages_category_name : "",
  };

  const yupSchema = Yup.object({
    packages_category_list_name: Yup.string().required("Required"),
    packages_category_name: Yup.string().required("Required"),
    packages_category_url: Yup.string().required("Required"),
  });

  return (
    <>
      <ModalAddWrapper
        className={`transition-all ease-linear transform duration-200 ${animate}`}
        handleClose={handleClose}
      >
        <div className="modal-title">
          <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} Category</h2>
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
                    <div className=" ">
                      <div className="input-wrapper">
                        <InputSelect
                          label="*Category"
                          type="text"
                          name="packages_category_list_name"
                          disabled={mutation.isPending}
                        >
                          <option value="" disabled>
                            Select Category
                          </option>
                          <option value="HOME">HOME</option>
                          <option value="WEB APPLICATIONS">
                            WEB APPLICATIONS
                          </option>
                          <option value="LEARNING CENTER SOLUTIONS">
                            LEARNING CENTER SOLUTIONS
                          </option>
                          <option value="ACCOUNTING SOLUTIONS">
                            ACCOUNTING SOLUTIONS
                          </option>
                          <option value="VIRTUAL ASSISTANT SOLUTIONS">
                            VIRTUAL ASSISTANT SOLUTIONS
                          </option>
                          <option value="WEB DESIGN AND DEVELOPMENT">
                            WEB DESIGN AND DEVELOPMENT
                          </option>
                          <option value="WHY FBS">WHY FBS</option>
                        </InputSelect>
                      </div>
                      <div className="input-wrapper">
                        <InputText
                          label="Page Name"
                          type="text"
                          name="packages_category_name"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="input-wrapper">
                        <InputText
                          label="URL"
                          type="text"
                          name="packages_category_url"
                          disabled={mutation.isPending}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-action bottom-0  w-full">
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

export default ModalAddCategory;
