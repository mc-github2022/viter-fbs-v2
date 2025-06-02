import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
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
  devNavUrl,
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
import useUploadMultiplePhoto from "../../../../custom-hooks/useUploadMultiplePhoto";
import { FaTrash } from "react-icons/fa";
import LoadImages from "../../../../partials/LoadImages";
import ModalRemovedPhoto from "../../../../partials/modals/ModalRemovedPhoto";

const ModalAddEventsAndActivities = ({ setIsAdd, itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");
  const [withFile, setWithFile] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [fileData, setFileData] = React.useState({
    images: [],
    itemKey: null,
    props: null,
    type: "", // 'client' or 'logo'
  });
  const [isRemovedPhoto, setIsRemovedPhoto] = React.useState(false);

  const [activeTab, setActiveTab] = React.useState("text");
  const [eventsImage, setEventsImage] = React.useState(false);
  const [isDraft, setIsDraft] = React.useState(false);

  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const handleIsSubmitted = () => {
    setIsSubmitted(!isSubmitted);
  };

  const {
    uploadMultiplePhoto: uploadClientImages,
    handleChangeMultiplePhoto: handleChangeClientImages,
    setPhotoArrayList: setClientImages,
    photoArrayList: clientImages,
  } = useUploadMultiplePhoto(`${apiVersion}/upload-multiple-photo`, dispatch);

  const {
    uploadMultiplePhoto: uploadLogoImages,
    handleChangeMultiplePhoto: handleChangeLogoImages,
    setPhotoArrayList: setLogoImages,
    photoArrayList: logoImages,
  } = useUploadMultiplePhoto(`${apiVersion}/upload-multiple-photo`, dispatch);

  const handleClickViewSlideshow = (photos, key) => {
    if (mutation.isPending || loading) return;
    const link =
      photos[key] instanceof Blob || photos[key] instanceof File
        ? URL.createObjectURL(photos[key])
        : `${googleViewLink}${photos[key]?.id}`;
    window.open(link, "_blank");
  };

  // handle for file upload Client
  const handleChangeFileUploadClient = (
    e,
    props,
    setClientImages,
    fieldValue = ""
  ) => {
    handleChangeClientImages(e, 1);
    const files = e.target.files;
    if (files.length > 3) return e;
    let myFiles = Array.from(files);
    props.setFieldValue(fieldValue, myFiles);
    const oldFiles = clientImages?.length > 0 ? clientImages : [];
    setClientImages([...oldFiles, ...myFiles]);
  };

  // handle for file upload Client
  const handleChangeFileUploadLogo = (
    e,
    props,
    setLogoImages,
    fieldValue = ""
  ) => {
    handleChangeLogoImages(e, 20);
    const files = e.target.files;
    if (files.length > 3) return e;
    let myFiles = Array.from(files);
    props.setFieldValue(fieldValue, myFiles);
    const oldFiles = logoImages?.length > 0 ? logoImages : [];
    setLogoImages([...oldFiles, ...myFiles]);
  };

  // delete the file in the server (public)
  const handleRemovePhoto = (photos, key, props, type) => {
    if (mutation.isPending || loading) return;
    setFileData({ images: photos, itemKey: key, props, type });
    setIsRemovedPhoto(true);
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
    setAnimate("translate-x-full");
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

  React.useEffect(() => {
    setAnimate("");
    if (itemEdit) {
      const clientPhotos = getConvertStringToJSONparseData(
        itemEdit.events_activities_img
      );
      setClientImages(clientPhotos);
    }
    if (itemEdit) {
      const logoPhotos = getConvertStringToJSONparseData(
        itemEdit.events_activities_img_list
      );
      setLogoImages(logoPhotos);
    }
  }, []);

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

    events_activities_img_old: itemEdit ? itemEdit.events_activities_img : "",
    events_activities_img_list_old: itemEdit
      ? itemEdit.events_activities_img_list
      : "",

    pendingDeleteFile: [],
  };

  const yupSchema = Yup.object({
    events_activities_slug: Yup.string().required("Required"),
  });

  const imageList =
    itemEdit && itemEdit.events_activities_img_list
      ? itemEdit.events_activities_img_list.split(",")
      : [];

  return (
    <>
      <ModalAddWrapper
        className={`transition-all ease-linear transform duration-200 ${animate}`}
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
              setLoading(true);
              const data = {
                ...values,
                events_activities_is_active: isDraft ? 0 : 1,
                events_activities_img: clientImages.map((item) =>
                  JSON.stringify({
                    name: item.name,
                    id: item?.id || "",
                  })
                ),
                events_activities_img_list: logoImages.map((item) =>
                  JSON.stringify({
                    name: item.name,
                    id: item?.id || "",
                  })
                ),
              };
              // Upload separately
              const clientPhotoUpload = await uploadClientImages(clientImages);
              const logoPhotoUpload = await uploadLogoImages(logoImages);

              if (clientPhotoUpload?.success || logoPhotoUpload?.success) {
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
                    <div className="gap-4 relative overflow-hidden">
                      <div className=" relative">
                        <div className="relative">
                          <label className=" text-dark text-xs">Image</label>
                          <div
                            className={`relative mt-9 mb-4 border border-gray-300 rounded-md hover:border-primary hover:border-dashed w-[230px] text-xs ${
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
                              label="Upload Image"
                              name="File"
                              type="file"
                              id="myFile"
                              accept="*"
                              title="Upload Image"
                              onChange={(e) =>
                                handleChangeFileUploadClient(
                                  e,
                                  props,
                                  setClientImages,
                                  "events_activities_img"
                                )
                              }
                              onDrop={(e) =>
                                handleChangeFileUploadClient(
                                  e,
                                  props,
                                  setClientImages,
                                  "events_activities_img"
                                )
                              }
                              disabled={mutation.isPending || loading}
                              className="opacity-0 absolute right-0 bottom-0 left-0 m-auto cursor-pointer h-full z-20"
                            />
                          </div>

                          <div className="relative w-[230px] ">
                            <ol className="flex flex-wrap gap-5 justify-center bg-gray-300 ">
                              {clientImages.length > 0 &&
                                clientImages.map((item, key) => {
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
                                          className="relative z-20 w-full h-full object-cover object-center"
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
                                                    clientImages,
                                                    key,
                                                    props,
                                                    "client"
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
                          <div className="input-wrapper textAreaWrapper mt-8">
                            <InputTextArea
                              label="Description"
                              type="text"
                              name="events_activities_description"
                              className="h-[460px] py-3"
                              disabled={mutation.isPending}
                            />
                          </div>

                          <div className="my-8">
                            <div className="relative ">
                              <label className=" text-dark text-xs">
                                Slider Image
                              </label>
                              <div
                                className={`relative mt-4 mb-4 border border-gray-300 rounded-md hover:border-primary hover:border-dashed w-[230px] text-xs ${
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
                                  label="Upload Image"
                                  name="File"
                                  type="file"
                                  id="myFile"
                                  accept="*"
                                  title="Upload File"
                                  multiple
                                  onChange={(e) =>
                                    handleChangeFileUploadLogo(
                                      e,
                                      props,
                                      setLogoImages,
                                      "events_activities_img_list"
                                    )
                                  }
                                  onDrop={(e) =>
                                    handleChangeFileUploadLogo(
                                      e,
                                      props,
                                      setLogoImages,
                                      "events_activities_img_list"
                                    )
                                  }
                                  disabled={mutation.isPending || loading}
                                  className="opacity-0 absolute right-0 bottom-0 left-0 m-auto cursor-pointer h-full z-20"
                                />
                              </div>

                              <div className=" w-[300px] relative mb-6 ">
                                <ol className="flex flex-wrap gap-5 justify-center bg-gray-300 ">
                                  {logoImages.length > 0 &&
                                    logoImages.map((item, key) => {
                                      const fileLink =
                                        item instanceof File ||
                                        item instanceof Blob
                                          ? URL.createObjectURL(item)
                                          : `${googleHDViewLink}${item?.id}`;

                                      return (
                                        <React.Fragment key={key}>
                                          <li
                                            className="relative z-10 h-32 w-48 group cursor-pointer overflow-hidden"
                                            onClick={() =>
                                              handleClickViewSlideshow(
                                                logoImages,
                                                key
                                              )
                                            }
                                          >
                                            <LoadImages
                                              url={fileLink}
                                              className="relative z-20 w-full h-full object-cover object-center"
                                            />
                                            {(!mutation.isPending ||
                                              !loading) && (
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
                                                      mutation.isPending ||
                                                      loading
                                                    }
                                                    onClick={() =>
                                                      handleRemovePhoto(
                                                        logoImages,
                                                        key,
                                                        props,
                                                        "logo"
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
                      </div>
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
                    </div>
                  </div>
                  <div className="form-action mb-1">
                    <div className="form-btn">
                      <button
                        className="btn-modal-submit bg-white text-primary"
                        type="submit"
                        disabled={
                          mutation.isPending ||
                          !props.dirty ||
                          loading ||
                          (!clientImages?.length && !logoImages?.length)
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
                          isSubmitted ? "pointer-events-none bg-gray-600" : ""
                        } btn-modal-submit`}
                        type="submit"
                        disabled={
                          mutation.isPending ||
                          !props.dirty ||
                          loading ||
                          (!clientImages?.length && !logoImages?.length)
                        }
                        onClick={handleIsSubmitted}
                      >
                        {mutation.isPending ? <ButtonSpinner /> : "Publish"}
                      </button>
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
          setNewFile={
            fileData.type === "client" ? setClientImages : setLogoImages
          }
        />
      )}
    </>
  );
};

export default ModalAddEventsAndActivities;
