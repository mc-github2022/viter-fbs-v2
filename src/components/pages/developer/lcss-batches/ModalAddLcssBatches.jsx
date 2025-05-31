import React from "react";
import useUploadPhoto from "../../../custom-hooks/useUploadPhoto";
import {
  apiVersion,
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
  googleViewLink,
} from "../../../helpers/functions-general";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../helpers/queryData";
import { setError, setMessage, setSuccess } from "../../../store/StoreAction";
import * as Yup from "yup";
import ModalAddWrapper from "../../../partials/dashboard/ModalAddWrapper";
import { GrFormClose } from "react-icons/gr";
import { Form, Formik } from "formik";
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";
import {
  InputFileUpload,
  InputPhotoUpload,
  InputSelect,
  InputText,
} from "../../../helpers/FormInputs";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import { StoreContext } from "../../../store/StoreContext";
import useUploadMultiplePhoto from "../../../custom-hooks/useUploadMultiplePhoto";
import { FaTrash } from "react-icons/fa";
import LoadImages from "../../../partials/LoadImages";
import ModalRemovedPhoto from "../../../partials/modals/ModalRemovedPhoto";

const ModalAddLcssBatches = ({ setIsAdd, itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");
  const [withFile, setWithFile] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [fileData, setFileData] = React.useState(null);
  const [isRemovedPhoto, setIsRemovedPhoto] = React.useState(false);

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
    handleChangeMultiplePhoto(e, 40);
    const files = e.target.files;
    if (files.length > 3) return e;
    let myFiles = Array.from(files);
    props.setFieldValue(fieldValue, myFiles);
    props.setFieldTouched(fieldValue, true, false); // Mark field as touched
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
          ? `/v1/lcssBatches/${itemEdit.lcss_batch_aid}` // update
          : `/v1/lcssBatches`, // create
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["lcssBatches"] });
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
    if (itemEdit) {
      const photos = getConvertStringToJSONparseData(itemEdit.lcss_batch_img);
      setPhotoArrayList(photos);
    }
  }, []);

  const initVal = {
    lcss_batch_aid: itemEdit ? itemEdit.lcss_batch_aid : "",
    lcss_batch_name: itemEdit ? itemEdit.lcss_batch_name : "",
    lcss_batch_category: itemEdit ? itemEdit.lcss_batch_category : "",
    lcss_batch_school: itemEdit ? itemEdit.lcss_batch_school : "",
    lcss_batch_course: itemEdit ? itemEdit.lcss_batch_course : "",
    lcss_batch_img: itemEdit ? itemEdit.lcss_batch_img : "",

    lcss_batch_name_old: itemEdit ? itemEdit.lcss_batch_name : "",
    lcss_batch_img_old: itemEdit ? itemEdit.lcss_batch_img : "",
    pendingDeleteFile: [],
  };

  const yupSchema = Yup.object({
    lcss_batch_category: Yup.string().required("Required"),
  });

  return (
    <>
      <ModalAddWrapper
        className={`transition-all ease-linear transform duration-200  max-w-[1000px] ${animate}`}
        handleClose={handleClose}
      >
        <div className="modal-title">
          <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} Batch</h2>
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
                lcss_batch_img: Array.from(photoArrayList).map((item) =>
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
              setLoading(false);
              mutation.mutate(data);
            }}
          >
            {(props) => {
              return (
                <Form className="modal-form">
                  <div className="form-input">
                    <div className="flex gap-4 justify-between">
                      <div className="w-[50%] relative">
                        <div className="input-wrapper">
                          <InputText
                            label="Batch"
                            type="text"
                            name="lcss_batch_name"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputSelect
                            label="*Category"
                            type="text"
                            name="lcss_batch_category"
                            disabled={mutation.isPending}
                          >
                            <option value="" disabled>
                              Select Category
                            </option>
                            <option value="College On-the-job Training">
                              College On-the-job Training
                            </option>
                            <option value="High School Work Immersion">
                              High School Work Immersion
                            </option>
                            <option value="Continuing Studies">
                              Continuing Studies
                            </option>
                          </InputSelect>
                        </div>
                        <div className="input-wrapper">
                          <InputText
                            label="School"
                            type="text"
                            name="lcss_batch_school"
                            disabled={mutation.isPending}
                          />
                        </div>

                        <div className="input-wrapper">
                          <InputText
                            label="Course"
                            type="text"
                            name="lcss_batch_course"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="form-action absolute bottom-0 w-full">
                          <div className="form-btn">
                            <button
                              className="btn-modal-submit"
                              type="submit"
                              disabled={
                                mutation.isPending || !props.dirty || loading
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
                      <div className="w-[50%] h-[93vh] overflow-auto">
                        <span className="top-20 px-2 text-dark text-[12px]">
                          Upload Images
                        </span>
                        <div
                          className={`relative mt-4 mb-4 border border-gray-300 rounded-md hover:border-primary hover:border-dashed w-[300px] text-xs ${
                            withFile && "border-primary border-dashed"
                          }`}
                          onDragOver={() => setWithFile(true)}
                          onDragLeave={() => setWithFile(false)}
                        >
                          <span className="min-h-16 flex items-center justify-center">
                            <span className="text-dark mr-1">Drag & Drop</span>{" "}
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
                            multiple
                            onChange={(e) =>
                              handleChangeFileUpload(
                                e,
                                props,
                                setPhotoArrayList,
                                "lcss_batch_img"
                              )
                            }
                            onDrop={(e) =>
                              handleChangeFileUpload(
                                e,
                                props,
                                setPhotoArrayList,
                                "lcss_batch_img"
                              )
                            }
                            disabled={mutation.isPending || loading}
                            className="opacity-0 absolute right-0 bottom-0 left-0 m-auto cursor-pointer h-full z-20"
                          />
                        </div>

                        <div className="relative mb-6  ">
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

export default ModalAddLcssBatches;
