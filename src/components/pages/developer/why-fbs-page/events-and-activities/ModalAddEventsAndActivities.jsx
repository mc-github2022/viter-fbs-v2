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
  devNavUrl,
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
import useUploadMultiplePhoto from "../../../../custom-hooks/useUploadMultiplePhoto";

const ModalAddEventsAndActivities = ({ setIsAdd, itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const { singleUploadPhoto, handleChangePhoto, photoSingle } =
    useSingleUploadPhoto(`${apiVersion}/upload-photo`, dispatch);
  const {
    uploadMultiplePhoto,
    handleChangeMultiplePhoto,
    setPhotoArrayList,
    photoArrayList,
  } = useUploadMultiplePhoto(`${apiVersion}/upload-multiple-photo`, dispatch);

  const [activeTab, setActiveTab] = React.useState("text");
  const [eventsImage, setEventsImage] = React.useState(false);
  const [isDraft, setIsDraft] = React.useState(false);

  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const handleIsSubmitted = () => {
    setIsSubmitted(!isSubmitted);
  };

  // const [isCheck, setIsCheck] = React.useState(false);

  // const handleCheckBox = (e) => {
  //   setIsCheck(e.target.checked);
  // };

  const handleEventsImage = (tabName) => {
    setEventsImage(true);
    setActiveTab(tabName);
  };
  const eventsImageClose = (tabName) => {
    setEventsImage(false);
    setActiveTab(tabName);
  };

  const handleClose = () => {
    setTimeout(() => {
      dispatch(setIsAdd(false));
    }, 200);
  };

  const handlePreview = () => {
    const previewSlug = initVal.events_activities_slug || "default-slug";
    window.open(`/preview/eventsAndActivities/${previewSlug}`);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${apiVersion}/eventsAndAct/${itemEdit.events_activities_aid}` // update
          : `${apiVersion}/eventsAndAct`, // create
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
        dispatch(
          setMessage(`Successfully ${isDraft ? "added to draft" : "Publish"}.`)
        );
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
    events_activities_img_list: itemEdit
      ? itemEdit.events_activities_img_list
      : "",
    events_activities_is_active: itemEdit
      ? itemEdit.events_activities_is_active
      : "",
  };

  const yupSchema = Yup.object({
    events_activities_slug: Yup.string().required("Required"),
  });

  const imageList =
    itemEdit && itemEdit.events_activities_img_list
      ? itemEdit.events_activities_img_list.split(",")
      : [];

  return (
    <ModalAddWrapper
      className={`transition-all ease-linear transform duration-200 max-h-[550px] max-w-[1000px]`}
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
              events_activities_is_active: isDraft ? 0 : 1,
              events_activities_img: photoSingle
                ? photoSingle.name
                : itemEdit.events_activities_img,
              events_activities_img_list:
                photoArrayList.length > 0
                  ? photoArrayList.map((file) => file.name).join(", ")
                  : itemEdit.events_activities_img_list || "",
            };
            if (photoSingle) {
              await singleUploadPhoto();
            }
            if (photoArrayList.length > 0) {
              await uploadMultiplePhoto();
            }
            mutation.mutate(data);
          }}
        >
          {(props) => {
            return (
              <Form className="modal-form">
                <div className="form-input">
                  <div className="grid grid-cols-2 gap-4 relative overflow-hidden">
                    <div className=" relative">
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
                              !itemEdit.events_activities_img &&
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
                                    itemEdit.events_activities_img // check db
                              }
                              alt="Logo"
                              className="group-hover:opacity-30 duration-200 relative h-[100px]  object-contain object-[50%,50%] m-auto"
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
                        {/* <div className="input-wrapper !m-0">
                          <div className="flex items-start gap-2 w-full sm:w-[300px]">
                            <div className="flex">
                              <input
                                type="checkbox"
                                name="subscriber_is_agree"
                                id="agree"
                                onChange={handleCheckBox}
                                checked={isCheck}
                              />
                            </div>
                            <p className="text-xs mt-2.5">
                              Schedule Date and Time of posting
                            </p>
                          </div>
                        </div>
                        {!isCheck ? (
                          ""
                        ) : (
                          <div className="flex gap-5">
                            <div className="input-wrapper">
                              <InputText
                                label="Date"
                                type="date"
                                name="events_activities_schedule_date"
                                disabled={mutation.isPending}
                              />
                            </div>
                            <div className="input-wrapper">
                              <InputText
                                label="Time"
                                type="time"
                                name="events_activities_schedule_time"
                                disabled={mutation.isPending}
                              />
                            </div>
                          </div>
                        )} */}
                      </div>
                      <div className="form-action place-content-end absolute bottom-0 w-full mb-2">
                        <div className="form-btn">
                          <button
                            className="btn-modal-submit bg-white text-primary"
                            type="submit"
                            disabled={
                              mutation.isPending ||
                              (!props.dirty &&
                                !photoSingle &&
                                (!photoArrayList ||
                                  photoArrayList.length === 0)) ||
                              (initVal.events_activities_img ===
                                photoSingle?.name &&
                                (!initVal.events_activities_img_list ||
                                  initVal.events_activities_img_list ===
                                    photoArrayList?.name))
                            }
                            onClick={() => setIsDraft(true)}
                          >
                            {mutation.isPending ? (
                              <ButtonSpinner />
                            ) : (
                              "Save as Draft"
                            )}
                          </button>
                          <button
                            className={`${
                              isSubmitted
                                ? "pointer-events-none bg-gray-600"
                                : ""
                            } "btn-modal-submit"`}
                            type="submit"
                            disabled={
                              mutation.isPending ||
                              (!props.dirty &&
                                !photoSingle &&
                                (!photoArrayList ||
                                  photoArrayList.length === 0)) ||
                              (initVal.events_activities_img ===
                                photoSingle?.name &&
                                (!initVal.events_activities_img_list ||
                                  initVal.events_activities_img_list ===
                                    photoArrayList?.name))
                            }
                            onClick={handleIsSubmitted}
                            // disabled={
                            //   ((mutation.isPending || !props.dirty) &&
                            //     photoSingle === null) ||
                            //   photoSingle === "" ||
                            //   initVal.events_activities_img ===
                            //     photoSingle?.name
                            // }
                          >
                            {mutation.isPending ? <ButtonSpinner /> : "Publish"}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="px-1 rounded-lg">
                      <div className="absolute">
                        {itemEdit ? (
                          <a
                            className="text-xs hover:bg- border hover:bg-secondary border-gray-400 rounded-md py-1 px-3 bg-primary text-white block"
                            onClick={handlePreview}
                            role="button"
                          >
                            Preview
                          </a>
                        ) : (
                          ""
                        )}
                      </div>
                      <ul className="text-sm flex [&>li]:px-2 [&>li]:cursor-pointer justify-end">
                        <li
                          className={`${
                            activeTab === "text"
                              ? "border-b border-primary"
                              : "text-gray-400"
                          }`}
                          onClick={() => eventsImageClose("text")}
                        >
                          Add Text
                        </li>
                        <li
                          className={`${
                            activeTab === "image"
                              ? "border-b border-primary"
                              : "text-gray-400"
                          }`}
                          onClick={() => handleEventsImage("image")}
                        >
                          Add Image
                        </li>
                      </ul>
                      <div className="input-wrapper textAreaWrapper mt-8">
                        <InputTextArea
                          label="Description"
                          type="text"
                          name="events_activities_description"
                          className="h-[420px] py-3"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div
                        className={`h-[445px] overflow-auto absolute ${
                          eventsImage ? "top-7" : "bottom-[100%]"
                        }  bg-white z-20 w-[464px]`}
                      >
                        <span className="top-20 px-2 text-dark text-[12px]">
                          Upload Images
                        </span>
                        <div className="relative w-fit m-auto group mt-3">
                          {!itemEdit && !photoArrayList.length ? (
                            <div className="group-hover:opacity-20 mb-4 items-center gap-2 w-[350px] h-[180px] p-2 place-content-center">
                              <IoImageOutline className="text-[30px] text-[gray] mx-auto" />
                              <h1 className="mb-0 leading-tight text-[gray] text-[15px] text-center">
                                Upload Image
                              </h1>
                            </div>
                          ) : photoArrayList.length > 0 ? (
                            <div className="grid grid-cols-4 gap-2">
                              {photoArrayList.map((file, index) => (
                                <img
                                  key={index}
                                  src={URL.createObjectURL(file)}
                                  alt="Uploaded Preview"
                                  className="w-[350px] h-[180px] object-cover"
                                />
                              ))}
                            </div>
                          ) : itemEdit &&
                            itemEdit.events_activities_img_list ? (
                            <div className="grid grid-cols-4 gap-2">
                              {imageList.map((img, index) => (
                                <img
                                  key={index}
                                  src={`${devBaseImgUrl}/${img.trim()}`}
                                  alt={`Existing Image ${index + 1}`}
                                  className="w-[350px] h-[180px] object-cover"
                                />
                              ))}
                            </div>
                          ) : (
                            <div className="group-hover:opacity-20 mb-4 items-center gap-2 w-[350px] h-[180px] p-2 place-content-center">
                              <IoImageOutline className="text-[30px] text-[gray] mx-auto" />
                              <h1 className="mb-0 leading-tight text-[gray] text-[15px] text-center">
                                No Images Available
                              </h1>
                            </div>
                          )}

                          <div className="btnImgUpload">
                            <button>
                              <MdOutlineFileUpload className="text-gray-900 text-[30px]" />
                              <InputPhotoUpload
                                name="photo"
                                type="file"
                                id="myFile"
                                accept="image/*"
                                title="Upload Images"
                                multiple
                                onChange={(e) =>
                                  handleChangeMultiplePhoto(e, 50, true)
                                }
                                className="opacity-0 absolute right-0 top-0 h-full left-0 m-auto cursor-pointer z-[999]"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
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

export default ModalAddEventsAndActivities;
