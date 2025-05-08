import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { GrFormClose } from "react-icons/gr";
import * as Yup from "yup";
import useUploadPhoto from "../../../../custom-hooks/useUploadPhoto";
import {
  InputFileUpload,
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
import useUploadMultiplePhoto from "../../../../custom-hooks/useUploadMultiplePhoto";
import ModalRemovedPhoto from "../../../../partials/modals/ModalRemovedPhoto";
import { FaTrash } from "react-icons/fa";
import LoadImages from "../../../../partials/LoadImages";

const ModalAddTestimonial = ({ setIsAdd, itemEdit }) => {
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

  const handleClickViewSlideshow = (photos, key) => {
    if (mutation.isPending || loading) return;
    const link =
      photos[key] instanceof Blob || photos[key] instanceof File
        ? URL.createObjectURL(photos[key])
        : `${googleViewLink}${photos[key]?.id}`;
    window.open(link, "_blank");
  };

  // delete the file in the server (public)
  const handleRemovePhoto = (photos, key, props, type) => {
    if (mutation.isPending || loading) return;
    setFileData({ images: photos, itemKey: key, props, type });
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
          ? `/v1/testimonials/${itemEdit.home_testimonial_aid}` // update
          : `/v1/testimonials`, // create
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["testimonials"] });
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
      const clientPhotos = getConvertStringToJSONparseData(
        itemEdit.home_testimonial_client_img
      );
      setClientImages(clientPhotos);
    }
    if (itemEdit) {
      const logoPhotos = getConvertStringToJSONparseData(
        itemEdit.home_testimonial_logo_img
      );
      setLogoImages(logoPhotos);
    }
  }, []);

  const initVal = {
    home_testimonial_aid: itemEdit ? itemEdit.home_testimonial_aid : "",
    home_testimonial_message: itemEdit ? itemEdit.home_testimonial_message : "",
    home_testimonial_name: itemEdit ? itemEdit.home_testimonial_name : "",
    home_testimonial_position: itemEdit
      ? itemEdit.home_testimonial_position
      : "",
    home_testimonial_client_img: itemEdit
      ? itemEdit.home_testimonial_client_img
      : "",
    home_testimonial_logo_img: itemEdit
      ? itemEdit.home_testimonial_logo_img
      : "",

    home_testimonial_logo_img_old: itemEdit
      ? itemEdit.home_testimonial_logo_img
      : "",
    home_testimonial_client_img_old: itemEdit
      ? itemEdit.home_testimonial_client_img
      : "",
    pendingDeleteFile: [],
  };

  const yupSchema = Yup.object({});

  return (
    <>
      <ModalAddWrapper
        className={`transition-all ease-linear transform duration-200 ${animate}`}
        handleClose={handleClose}
      >
        <div className="modal-title">
          <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} Testimonial</h2>
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
                home_testimonial_client_img: clientImages.map((item) =>
                  JSON.stringify({
                    name: item.name,
                    id: item?.id || "",
                  })
                ),
                home_testimonial_logo_img: logoImages.map((item) =>
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
                    <div className=" relative">
                      <div className="flex flex-col gap-2 mt-1">
                        <div className="relative">
                          <label className=" top-[32px] text-dark text-xs">
                            Client Image
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
                              title="Upload Image"
                              onChange={(e) =>
                                handleChangeFileUploadClient(
                                  e,
                                  props,
                                  setClientImages,
                                  "home_testimonial_client_img"
                                )
                              }
                              onDrop={(e) =>
                                handleChangeFileUploadClient(
                                  e,
                                  props,
                                  setClientImages,
                                  "home_testimonial_client_img"
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
                        <div className="relative">
                          <label className=" top-[32px]  text-dark text-xs">
                            Logo
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
                              onChange={(e) =>
                                handleChangeFileUploadLogo(
                                  e,
                                  props,
                                  setLogoImages,
                                  "home_testimonial_logo_img"
                                )
                              }
                              onDrop={(e) =>
                                handleChangeFileUploadLogo(
                                  e,
                                  props,
                                  setLogoImages,
                                  "home_testimonial_logo_img"
                                )
                              }
                              disabled={mutation.isPending || loading}
                              className="opacity-0 absolute right-0 bottom-0 left-0 m-auto cursor-pointer h-full z-20"
                            />
                          </div>

                          <div className="relative w-[230px] ">
                            <ol className="flex flex-wrap gap-5 justify-center bg-gray-300 ">
                              {logoImages.length > 0 &&
                                logoImages.map((item, key) => {
                                  const fileLink =
                                    item instanceof File || item instanceof Blob
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
                      <div>
                        <div className="input-wrapper">
                          <InputText
                            label="Name"
                            type="text"
                            name="home_testimonial_name"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputText
                            label="Position"
                            type="text"
                            name="home_testimonial_position"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper ">
                          <InputTextArea
                            label="Message"
                            type="text"
                            name="home_testimonial_message"
                            className="h-[300px] "
                            disabled={mutation.isPending}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-action mb-1">
                    <div className="form-btn">
                      <button
                        className="btn-modal-submit"
                        type="submit"
                        disabled={
                          mutation.isPending ||
                          !props.dirty ||
                          loading ||
                          (!clientImages?.length && !logoImages?.length)
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

export default ModalAddTestimonial;
