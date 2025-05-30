import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { GrFormClose } from "react-icons/gr";
import * as Yup from "yup";
import { InputText, InputTextArea } from "../../../../../../helpers/FormInputs";
import { apiVersion } from "../../../../../../helpers/functions-general";
import { queryData } from "../../../../../../helpers/queryData";
import ModalAddWrapper from "../../../../../../partials/dashboard/ModalAddWrapper";
import ButtonSpinner from "../../../../../../partials/spinners/ButtonSpinner";
import {
  setError,
  setIsUpdateHome,
  setMessage,
  setSuccess,
} from "../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../store/StoreContext";

const ModalUpdateBookkeepingPackagesList = ({
  itemEdit,
  bookkeepingPackagesTitleData,
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
        bookkeepingPackagesTitleData?.data?.length
          ? `${apiVersion}/bookkeeping-packages-title/${bookkeepingPackagesTitleData.data[0].bookkeeping_title_aid}` // update
          : `${apiVersion}/bookkeeping-packages-title`, // create
        bookkeepingPackagesTitleData?.data?.length ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["bookkeeping-packages-title"],
      });
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
    isUpdateBookkeepingTitle: itemEdit,
    bookkeeping_scope_title:
      bookkeepingPackagesTitleData?.data?.[0]?.bookkeeping_scope_title ?? "",
    bookkeeping_services_title_a:
      bookkeepingPackagesTitleData?.data?.[0]?.bookkeeping_services_title_a ??
      "",
    bookkeeping_services_list_a:
      bookkeepingPackagesTitleData?.data?.[0]?.bookkeeping_services_list_a ??
      "",
    bookkeeping_services_title_b:
      bookkeepingPackagesTitleData?.data?.[0]?.bookkeeping_services_title_b ??
      "",
    bookkeeping_services_list_b:
      bookkeepingPackagesTitleData?.data?.[0]?.bookkeeping_services_list_b ??
      "",
    bookkeeping_services_title_c:
      bookkeepingPackagesTitleData?.data?.[0]?.bookkeeping_services_title_c ??
      "",
    bookkeeping_services_list_c:
      bookkeepingPackagesTitleData?.data?.[0]?.bookkeeping_services_list_c ??
      "",
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
            {itemEdit ? "Edit" : "Add"} Bookkeeping Packages List
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
                        label="Scope of Services"
                        type="text"
                        name="bookkeeping_scope_title"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Services Title A"
                        type="text"
                        name="bookkeeping_services_title_a"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputTextArea
                        label="Services List A"
                        type="text"
                        name="bookkeeping_services_list_a"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Services Title B"
                        type="text"
                        name="bookkeeping_services_title_b"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputTextArea
                        label="Services List B"
                        type="text"
                        name="bookkeeping_services_list_b"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Services Title C"
                        type="text"
                        name="bookkeeping_services_title_c"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputTextArea
                        label="Services List C"
                        type="text"
                        name="bookkeeping_services_list_c"
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

export default ModalUpdateBookkeepingPackagesList;
