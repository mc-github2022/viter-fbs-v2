import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { GrFormClose } from "react-icons/gr";
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";
import * as Yup from "yup";
import useSingleUploadPhoto from "../../../../custom-hooks/useSingleUploadPhoto";
import {
  InputPhotoUpload,
  InputText,
  InputTextArea,
} from "../../../../helpers/FormInputs";
import {
  apiVersion,
  devBaseImgUrl,
} from "../../../../helpers/functions-general";
import { queryData } from "../../../../helpers/queryData";
import ModalAddWrapper from "../../../../partials/dashboard/ModalAddWrapper";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";
import {
  setError,
  setMessage,
  setSuccess,
} from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";

const ModalAddInsights = ({ setIsAdd, itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const { singleUploadPhoto, handleChangePhoto, photoSingle } =
    useSingleUploadPhoto(`${apiVersion}/upload-photo`, dispatch);

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
      className={`transition-all ease-linear transform duration-200 max-h-[550px] max-w-[1000px]`}
      handleClose={handleClose}
    >
      <div className="modal-title">
        <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} Insights</h2>
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
              home_insights_img: photoSingle
                ? photoSingle.name
                : itemEdit.home_insights_img,
            };
            if (photoSingle) {
              await singleUploadPhoto(); // to save the photo when submit
            }
            mutation.mutate(data);
          }}
        >
          {(props) => {
            return (
              <Form className="modal-form">
                <div className="form-input">
                  <div className="flex gap-4 justify-between">
                    <div className="w-[50%] relative">
                      <div className="mt-5">
                        <span className="top-20 px-2 text-dark text-xs">
                          Image
                        </span>
                        <div className="relative w-fit group">
                          {(itemEdit === null && photoSingle === null) ||
                          (photoSingle === "" && itemEdit === null) ? (
                            <div className="group-hover:opacity-20 mb-4 items-center gap-2 w-[200px] h-[100px] p-2 grid place-items-center duration-200">
                              <div className="">
                                <IoImageOutline className="text-[25px] text-[gray] mx-auto" />
                                <h1 className="mb-0 leading-tight text-[gray] text-sm text-center">
                                  Upload Image
                                </h1>
                              </div>
                            </div>
                          ) : (itemEdit &&
                              !itemEdit.home_insights_img &&
                              !photoSingle) ||
                            (!itemEdit && !photoSingle) ? (
                            <div className="group-hover:opacity-20 mb-4 grid place-items-center items-center gap-2 w-[200px] h-[100px] p-2 duration-200">
                              <div>
                                <IoImageOutline className="text-[25px] text-[gray] mx-auto" />
                                <h1 className="mb-0 leading-tight grid place-items-center text-[gray] text-sm text-center">
                                  Upload Image
                                </h1>
                              </div>
                            </div>
                          ) : (
                            <img
                              src={
                                photoSingle
                                  ? URL.createObjectURL(photoSingle) // preview
                                  : devBaseImgUrl +
                                    "/" +
                                    itemEdit.home_insights_img // check db
                              }
                              alt="Logo"
                              className="group-hover:opacity-20 duration-200 relative h-[100px] object-contain object-[50%,50%] m-auto"
                            />
                          )}

                          <div className="btnImgUpload">
                            <button>
                              <MdOutlineFileUpload className="text-gray-900 text-[30px]" />
                              <InputPhotoUpload
                                name="photo"
                                type="file"
                                id="myFile"
                                accept="image/*"
                                title="Upload Image"
                                onChange={(e) =>
                                  handleChangePhoto(
                                    e,
                                    initVal.home_insights_img
                                  )
                                }
                                className="opacity-0 absolute right-0 top-0 h-full left-0 m-auto cursor-pointer z-[999]"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="input-wrapper">
                          <InputText
                            label="Category"
                            type="text"
                            name="home_insights_category"
                            disabled={mutation.isPending}
                          />
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
                      <div className="form-action absolute w-full bottom-0 mb-2">
                        <div className="form-btn">
                          <button
                            className="btn-modal-submit"
                            type="submit"
                            disabled={
                              ((mutation.isPending || !props.dirty) &&
                                photoSingle === null) ||
                              photoSingle === "" ||
                              initVal.home_insights_img === photoSingle?.name
                            }
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
                    </div>
                    <div className="input-wrapper h-[450px] w-[478px]">
                      <InputTextArea
                        label="Description"
                        type="text"
                        name="home_insights_paragraph_a"
                        className="h-[450px] w-[478px]"
                        disabled={mutation.isPending}
                      />
                    </div>
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

export default ModalAddInsights;
