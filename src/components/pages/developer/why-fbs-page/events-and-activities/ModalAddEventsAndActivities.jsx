import React from "react";
import * as Yup from "yup";
import useUploadPhoto from "../../../../custom-hooks/useUploadPhoto";
import {
  apiVersion,
  devBaseImgUrl,
} from "../../../../helpers/functions-general";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../../helpers/queryData";
import {
  setError,
  setMessage,
  setSuccess,
} from "../../../../store/StoreAction";
import ModalAddWrapper from "../../../../partials/dashboard/ModalAddWrapper";
import { GrFormClose } from "react-icons/gr";
import { Form, Formik } from "formik";
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";
import {
  InputPhotoUpload,
  InputText,
  InputTextArea,
} from "../../../../helpers/FormInputs";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";
import { StoreContext } from "../../../../store/StoreContext";

const ModalAddEventsAndActivities = ({ setIsAdd, itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto(
    `${apiVersion}/upload-photo`,
    dispatch
  );

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
          ? `/v1/eventsAndAct/${itemEdit.events_activities_aid}` // update
          : `/v1/eventsAndAct`, // create
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["eventsAndAct"] });
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
      className={`transition-all ease-linear transform duration-200`}
      handleClose={handleClose}
    >
      <div className="modal-title">
        <h2 className="text-sm">
          {itemEdit ? "Edit" : "Add"} Events & Activities
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
              events_activities_img: photo
                ? photo.name
                : itemEdit.events_activities_img,
            };
            if (photo) {
              await uploadPhoto(); // to save the photo when submit
            }
            mutation.mutate(data);
          }}
        >
          {(props) => {
            return (
              <Form className="modal-form">
                <div className="form-input">
                  <div className="flex gap-4 justify-between">
                    <div className="w-[500px]">
                      <div className="mt-5">
                        <span className="top-20 px-2 text-dark">Image</span>
                        <div className="relative w-fit m-auto group">
                          {(itemEdit === null && photo === null) ||
                          (photo === "" && itemEdit === null) ? (
                            <div className="group-hover:opacity-20 bg-dashAccent mb-4 items-center gap-2 w-[200px] h-[100px] border rounded-md p-2 grid place-items-center">
                              <div className="">
                                <IoImageOutline className="text-[30px] text-[gray] mx-auto" />
                                <h1 className="mb-0 leading-tight text-[gray] text-[15px] text-center">
                                  Upload Image
                                </h1>
                              </div>
                            </div>
                          ) : (itemEdit &&
                              !itemEdit.events_activities_img &&
                              !photo) ||
                            (!itemEdit && !photo) ? (
                            <div className="group-hover:opacity-20 mb-4 bg-dashAccent grid place-items-center items-center gap-2 w-[200px] h-[100px] p-2">
                              <div>
                                <IoImageOutline className="text-[30px] text-[gray] mx-auto" />
                                <h1 className="mb-0 leading-tight grid place-items-center text-[gray] text-sm text-center">
                                  Upload Image
                                </h1>
                              </div>
                            </div>
                          ) : (
                            <img
                              src={
                                photo
                                  ? URL.createObjectURL(photo) // preview
                                  : devBaseImgUrl +
                                    "/" +
                                    itemEdit.events_activities_img // check db
                              }
                              alt="Logo"
                              className="group-hover:opacity-30 duration-200 relative h-[100px]  object-contain object-[50%,50%] m-auto"
                            />
                          )}

                          <div className="btnImgUpload">
                            <button>
                              <MdOutlineFileUpload />
                              <InputPhotoUpload
                                name="photo"
                                type="file"
                                id="myFile"
                                accept="image/*"
                                title="Upload Logo"
                                onChange={(e) =>
                                  handleChangePhoto(
                                    e,
                                    initVal.events_activities_img
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
                            name="events_activities_category"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputText
                            label="Title"
                            type="text"
                            name="events_activities_title"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputText
                            label="*Slug"
                            type="text"
                            name="events_activities_slug"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputText
                            label="Date"
                            type="date"
                            name="events_activities_date"
                            disabled={mutation.isPending}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="input-wrapper">
                      <InputTextArea
                        label="Description"
                        type="text"
                        name="events_activities_description"
                        className="h-[500px] w-[478px]"
                        disabled={mutation.isPending}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-action">
                  <div className="form-btn">
                    <button
                      className="btn-modal-submit"
                      type="submit"
                      disabled={
                        ((mutation.isPending || !props.dirty) &&
                          photo === null) ||
                        photo === "" ||
                        initVal.events_activities_img === photo?.name
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
              </Form>
            );
          }}
        </Formik>
      </div>
    </ModalAddWrapper>
  );
};

export default ModalAddEventsAndActivities;
