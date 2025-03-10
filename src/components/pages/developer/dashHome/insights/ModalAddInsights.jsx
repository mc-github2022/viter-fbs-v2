import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";
import * as Yup from "yup";
import useSingleUploadPhoto from "../../../../custom-hooks/useSingleUploadPhoto";
import {
  InputFileUpload,
  InputPhotoUpload,
  InputText,
  InputTextArea,
} from "../../../../helpers/FormInputs";
import {
  apiVersion,
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
  googleViewLink,
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
import PreviewPage from "./PreviewPage";
import useUploadMultiplePhoto from "../../../../custom-hooks/useUploadMultiplePhoto";
import ModalRemovedPhoto from "../../../../partials/modals/ModalRemovedPhoto";
import { FaTrash } from "react-icons/fa";
import LoadImages from "../../../../partials/LoadImages";
import { purposeValue } from "./cta-form";

const ModalAddInsights = ({ setIsAdd, itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isDraft, setIsDraft] = React.useState(false);
  const [withFile, setWithFile] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [fileData, setFileData] = React.useState(null);
  const [isRemovedPhoto, setIsRemovedPhoto] = React.useState(false);
  const [isCheck, setIsCheck] = React.useState(false);
  const [isCheckClick, setIsCheckClick] = useState(false);

  const handleIsCheckClick = () => {
    setIsCheckClick(!isCheckClick);
    console.log(isCheckClick);
  };

  const handleCheckBox = (e) => {
    setIsCheck(e.target.checked);
    handleIsCheckClick();
  };

  useEffect(() => {
    setIsCheck(itemEdit ? itemEdit.home_insights_cta_is_active : false);
  }, []);

  // multiple files
  const {
    uploadMultiplePhoto,
    handleChangeMultiplePhoto,
    setPhotoArrayList,
    photoArrayList,
  } = useUploadMultiplePhoto(`${apiVersion}/upload-multiple-photo`, dispatch);

  // handle for file upload
  const handleChangeFileUpload = (
    e,
    props,
    setPhotoArrayList,
    fieldValue = ""
  ) => {
    handleChangeMultiplePhoto(e, 1);
    const files = e.target.files;
    if (files.length > 3) return e;
    let myFiles = Array.from(files);
    props.setFieldValue(fieldValue, myFiles);
    const oldFiles = photoArrayList?.length > 0 ? photoArrayList : [];
    setPhotoArrayList([...oldFiles, ...myFiles]);
  };

  const handleClickViewSlideshow = (photos, key) => {
    if (mutation.isPending || loading) return;
    const link =
      photos[key] instanceof Blob || photos[key] instanceof File
        ? URL.createObjectURL(photos[key])
        : `${googleViewLink}${photos[key]?.id}`;
    window.open(link, "_blank");
  };

  // delete the file in the server (public)
  const handleRemovePhoto = (photos, key, props) => {
    if (mutation.isPending || loading) return;
    setFileData({ images: photos, itemKey: key, props });
    setIsRemovedPhoto(true);
  };

  const handleClose = () => {
    setTimeout(() => {
      dispatch(setIsAdd(false));
    }, 200);
  };

  const handlePreview = () => {
    const previewSlug = initVal.home_insights_slug || "default-slug";
    window.open(`/preview/${previewSlug}`);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${apiVersion}/insights/${itemEdit.home_insights_aid}` // update
          : `${apiVersion}/insights`, // create
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

  React.useEffect(() => {
    if (itemEdit) {
      const photos = getConvertStringToJSONparseData(
        itemEdit.home_insights_img
      );
      setPhotoArrayList(photos);
    }
  }, []);

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
    home_insights_cta_is_active: itemEdit
      ? itemEdit.home_insights_cta_is_active
      : "",
    home_insights_cta_text: itemEdit ? itemEdit.home_insights_cta_text : "",
    home_insights_form_selected: itemEdit
      ? itemEdit.home_insights_form_selected
      : "",
    home_insights_img: itemEdit ? itemEdit.home_insights_img : "",
    home_insights_is_active: itemEdit ? itemEdit.home_insights_is_active : "",

    home_insights_img_old: itemEdit ? itemEdit.home_insights_img : "",
    pendingDeleteFile: [],
  };

  const yupSchema = Yup.object({
    home_insights_slug: Yup.string().required("Required"),
  });

  return (
    <>
      <ModalAddWrapper
        className={`transition-all ease-linear transform duration-200 max-h-[715px] max-w-[1000px]`}
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
              setLoading(true);

              const data = {
                ...values,
                home_insights_cta_is_active: isCheck,
                home_insights_is_active: isDraft ? 0 : 1,
                home_insights_img: Array.from(photoArrayList).map((item) =>
                  JSON.stringify({
                    name: item.name,
                    id: item?.id || "",
                  })
                ),
              };

              const photoUpload = await uploadMultiplePhoto();
              if (photoUpload?.success || !photoUpload?.success) {
                setLoading(false);
              }
              if (!loading) console.log(data);
              mutation.mutate(data);
            }}
          >
            {(props) => {
              return (
                <Form className="modal-form">
                  <div className="form-input">
                    <div className="flex gap-4 justify-between h-[650px]">
                      <div className="w-[50%] relative">
                        <div className="mt-5">
                          <span className="top-20 px-2 text-dark text-xs">
                            Image
                          </span>
                          <div
                            className={`relative mt-4 mb-4 border border-gray-300 rounded-md hover:border-primary hover:border-dashed w-[300px] text-xs ${
                              withFile && "border-primary border-dashed"
                            }`}
                            onDragOver={() => setWithFile(true)}
                            onDragLeave={() => setWithFile(false)}
                          >
                            <span className="min-h-16 flex items-center justify-center">
                              <span className="text-dark mr-1">
                                Drag & Drop
                              </span>{" "}
                              Photo here or{" "}
                              <span className="text-dark ml-1">Browse</span>
                            </span>

                            <InputFileUpload
                              label="Upload Banner Image"
                              name="File"
                              type="file"
                              id="myFile"
                              accept="*"
                              title="Upload File"
                              onChange={(e) =>
                                handleChangeFileUpload(
                                  e,
                                  props,
                                  setPhotoArrayList,
                                  "home_insights_img"
                                )
                              }
                              onDrop={(e) =>
                                handleChangeFileUpload(
                                  e,
                                  props,
                                  setPhotoArrayList,
                                  "home_insights_img"
                                )
                              }
                              disabled={mutation.isPending || loading}
                              className="opacity-0 absolute right-0 bottom-0 left-0 m-auto cursor-pointer h-full z-20"
                            />
                          </div>

                          <div className="relative mb-6 w-[300px] ">
                            <ol className="flex flex-wrap gap-5 justify-center bg-gray-300 ">
                              {photoArrayList?.length > 0 &&
                                Array.from(photoArrayList).map((item, key) => {
                                  const fileLink =
                                    item instanceof File || item instanceof Blob
                                      ? URL.createObjectURL(item)
                                      : `${googleHDViewLink}${item?.id}`;

                                  return (
                                    <React.Fragment key={key}>
                                      <li
                                        className={`relative z-10 h-32 w-48 group cursor-pointer overflow-hidden ${
                                          (mutation.isPending || loading) &&
                                          `!cursor-not-allowed`
                                        }`}
                                        onClick={() => {
                                          handleClickViewSlideshow(
                                            photoArrayList,
                                            key
                                          );
                                        }}
                                      >
                                        <LoadImages
                                          url={fileLink}
                                          className={`relative z-20 w-full h-full object-cover object-center`}
                                        />
                                        {(!mutation.isPending || !loading) && (
                                          <div className="hidden group-hover:inline-flex absolute top-0 z-30 w-full h-full bg-black/40 items-center justify-center text-white text-center text-xs">
                                            <span>
                                              Click to View <br />
                                              {key + 1}. {item.name}
                                            </span>

                                            <div
                                              className="absolute bottom-0 right-0 flex items-center gap-2"
                                              onClick={(e) => {
                                                e.stopPropagation();
                                              }}
                                            >
                                              <button
                                                type="button"
                                                className="text-red-600 p-20 mr-2 tooltip-action-table text-lg disabled:bg-transparent disabled:cursor-not-allowed disabled:text-red-400"
                                                data-tooltip={`Delete`}
                                                disabled={
                                                  mutation.isPending || loading
                                                }
                                                onClick={() =>
                                                  handleRemovePhoto(
                                                    photoArrayList,
                                                    key,
                                                    props
                                                  )
                                                }
                                              >
                                                <FaTrash />
                                              </button>
                                            </div>
                                          </div>
                                        )}
                                      </li>
                                    </React.Fragment>
                                  );
                                })}
                            </ol>
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
                          <div className="input-wrapper mb-4">
                            <InputText
                              label="Date"
                              type="date"
                              name="home_insights_date"
                              disabled={mutation.isPending}
                            />
                          </div>
                          <div className=" flex items-center gap-1">
                            <input
                              name="home_insights_cta_is_active "
                              type="checkbox"
                              className="w-3 h-3 cursor-pointer"
                              checked={isCheck}
                              // value={isCheck}
                              onChange={handleCheckBox}
                            />
                            <p className="text-xs">Enable CTA</p>
                          </div>
                          <div className="input-wrapper grid grid-cols-[_2fr_1fr] gap-2">
                            <div>
                              <label htmlFor="notification_purpose">
                                Select Form
                              </label>
                              <select
                                id="notification_purpose"
                                name="home_insights_form_selected"
                                disabled={mutation.isPending || !isCheck}
                                value={props.values.home_insights_form_selected}
                                onChange={props.handleChange}
                                className="input-select"
                              >
                                <optgroup label="Select Form">
                                  {purposeValue()?.map((item, key) => (
                                    <option key={key} value={item.code}>
                                      {item.name}
                                    </option>
                                  ))}
                                </optgroup>
                              </select>
                            </div>
                            <div className="input-wrapper m-0">
                              <InputText
                                label="Button Caption"
                                className="!h-[36px]"
                                type="text"
                                name="home_insights_cta_text"
                                disabled={mutation.isPending || !isCheck}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-action absolute w-full bottom-0 mb-2">
                          <div className="form-btn">
                            <button
                              className="btn-modal-submit bg-white text-primary"
                              type="submit"
                              disabled={
                                (mutation.isPending &&
                                  !props.dirty &&
                                  loading) ||
                                (!isCheckClick && !props.dirty)
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
                              className="btn-modal-submit"
                              type="submit"
                              disabled={
                                (mutation.isPending &&
                                  !props.dirty &&
                                  loading) ||
                                (!isCheckClick && !props.dirty)
                              }
                            >
                              {mutation.isPending ? (
                                <ButtonSpinner />
                              ) : (
                                "Publish"
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="h-[30px]  relative w-full">
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
                        </div>

                        <div className="flex flex-col items-end">
                          <div className="input-wrapper textAreaWrapper ">
                            <InputTextArea
                              label="Description"
                              type="text"
                              name="home_insights_paragraph_a"
                              className="h-[592px] w-[478px]"
                              disabled={mutation.isPending}
                            />
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

      {isRemovedPhoto && (
        <ModalRemovedPhoto
          fileData={fileData.images}
          itemKey={fileData.itemKey}
          itemProps={fileData.props}
          msg="Are you sure you want to remove this file?"
          setIsModalShow={setIsRemovedPhoto}
          setNewFile={setPhotoArrayList}
        />
      )}
    </>
  );
};

export default ModalAddInsights;
