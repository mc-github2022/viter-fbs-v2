import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import * as Yup from "yup";
import { StoreContext } from "../../../../../store/StoreContext";
import useUploadMultiplePhoto from "../../../../../custom-hooks/useUploadMultiplePhoto";
import {
  apiVersion,
  getConvertStringToJSONparseData,
  googleHDViewLink,
  googleViewLink,
} from "../../../../../helpers/functions-general";
import {
  setError,
  setIsUpdateHome,
  setMessage,
  setSuccess,
} from "../../../../../store/StoreAction";
import { queryData } from "../../../../../helpers/queryData";
import ModalAddWrapper from "../../../../../partials/dashboard/ModalAddWrapper";
import { InputFileUpload, InputText } from "../../../../../helpers/FormInputs";
import LoadImages from "../../../../../partials/LoadImages";
import ButtonSpinner from "../../../../../partials/spinners/ButtonSpinner";
import ModalRemovedPhoto from "../../../../../partials/modals/ModalRemovedPhoto";

const ModalUpdateWorkCompanyProfile = ({
  itemEdit,
  workCompanyProfileData,
}) => {
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

  // multiple files
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
    handleChangeLogoImages(e, 1);
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
      dispatch(setIsUpdateHome(false));
    }, 200);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        workCompanyProfileData?.data?.length
          ? `${apiVersion}/work-company-profile/${workCompanyProfileData.data[0].work_profile_aid}` // update
          : `${apiVersion}/work-company-profile`, // create
        workCompanyProfileData?.data?.length ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["work-company-profile"] });
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
    if (workCompanyProfileData) {
      const clientPhotos = getConvertStringToJSONparseData(
        workCompanyProfileData?.data?.[0]?.work_profile_file
      );
      setClientImages(clientPhotos);
    }
    if (workCompanyProfileData) {
      const logoPhotos = getConvertStringToJSONparseData(
        workCompanyProfileData?.data?.[0]?.work_profile_img
      );
      setLogoImages(logoPhotos);
    }
  }, []);

  const initVal = {
    workProfileUpdate: itemEdit,
    work_profile_subtitle:
      workCompanyProfileData?.data?.[0]?.work_profile_subtitle ?? "",
    work_profile_title:
      workCompanyProfileData?.data?.[0]?.work_profile_title ?? "",
    work_profile_button_text:
      workCompanyProfileData?.data?.[0]?.work_profile_button_text ?? "",
    work_profile_img: workCompanyProfileData?.data?.[0]?.work_profile_img ?? "",
    work_profile_file:
      workCompanyProfileData?.data?.[0]?.work_profile_file ?? "",

    work_profile_img_old:
      workCompanyProfileData?.data?.[0]?.work_profile_img ?? "",
    work_profile_file_old:
      workCompanyProfileData?.data?.[0]?.work_profile_file ?? "",
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
          <h2 className="text-sm">
            {itemEdit ? "Edit" : "Add"} Company Profile
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
                work_profile_img: logoImages.map((item) =>
                  JSON.stringify({
                    name: item.name,
                    id: item?.id || "",
                  })
                ),
                work_profile_file: clientImages.map((item) =>
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
                  <div className="form-input ">
                    <div className="flex flex-col gap-8 mt-1">
                      <div className="relative">
                        <label className=" top-[32px] text-dark text-xs">
                          Upload File
                        </label>
                        <div
                          className={`relative mt-4 mb-4 border border-gray-300 rounded-md hover:border-primary hover:border-dashed w-[230px] text-xs ${
                            withFile && "border-primary border-dashed"
                          }`}
                          onDragOver={() => setWithFile(true)}
                          onDragLeave={() => setWithFile(false)}
                        >
                          <span className="min-h-16 flex items-center justify-center">
                            <span className="text-dark mr-1">Drag & Drop</span>{" "}
                            File here or{" "}
                            <span className="text-dark ml-1">Browse</span>
                          </span>

                          <InputFileUpload
                            label="Upload file"
                            name="File"
                            type="file"
                            id="myFile"
                            accept="*"
                            title="Upload file"
                            onChange={(e) =>
                              handleChangeFileUploadClient(
                                e,
                                props,
                                setClientImages,
                                "work_profile_file"
                              )
                            }
                            onDrop={(e) =>
                              handleChangeFileUploadClient(
                                e,
                                props,
                                setClientImages,
                                "work_profile_file"
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
                        <label className=" top-[32px] text-dark text-xs">
                          Upload Image
                        </label>
                        <div
                          className={`relative mt-4 mb-4 border border-gray-300 rounded-md hover:border-primary hover:border-dashed w-[230px] text-xs ${
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
                            label="Upload Image"
                            name="File"
                            type="file"
                            id="myFile"
                            accept="*"
                            title="Upload Image"
                            onChange={(e) =>
                              handleChangeFileUploadLogo(
                                e,
                                props,
                                setLogoImages,
                                "work_profile_img"
                              )
                            }
                            onDrop={(e) =>
                              handleChangeFileUploadLogo(
                                e,
                                props,
                                setLogoImages,
                                "work_profile_img"
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

                    <div className="input-wrapper">
                      <InputText
                        label="Subtitle"
                        type="text"
                        name="work_profile_subtitle"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Title"
                        type="text"
                        name="work_profile_title"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Button"
                        type="text"
                        name="work_profile_button_text"
                        disabled={mutation.isPending}
                      />
                    </div>
                  </div>
                  <div className="form-action mb-2 ">
                    <div className="form-btn">
                      <button
                        className="btn-modal-submit"
                        type="submit"
                        disabled={mutation.isPending || !props.dirty || loading}
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

export default ModalUpdateWorkCompanyProfile;
