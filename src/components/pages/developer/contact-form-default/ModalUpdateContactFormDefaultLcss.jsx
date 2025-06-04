import React from "react";

import * as Yup from "yup";
import { GrFormClose } from "react-icons/gr";
import { FaTrash } from "react-icons/fa";
import useUploadMultiplePhoto from "../../../custom-hooks/useUploadMultiplePhoto";
import {
  apiVersion,
  getConvertStringToJSONparseData,
  googleHDViewLink,
  googleViewLink,
} from "../../../helpers/functions-general";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../helpers/queryData";
import {
  setError,
  setIsUpdateHome,
  setMessage,
  setSuccess,
} from "../../../store/StoreAction";
import ModalAddWrapper from "../../../partials/dashboard/ModalAddWrapper";
import { Form, Formik } from "formik";
import {
  InputFileUpload,
  InputText,
  InputTextArea,
} from "../../../helpers/FormInputs";
import LoadImages from "../../../partials/LoadImages";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import ModalRemovedPhoto from "../../../partials/modals/ModalRemovedPhoto";
import { StoreContext } from "../../../store/StoreContext";

const ModalUpdateContactFormDefaultLcss = ({
  itemEdit,
  contactFormLcssData,
}) => {
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
    setAnimate("translate-x-full");
    setTimeout(() => {
      dispatch(setIsUpdateHome(false));
    }, 200);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        contactFormLcssData?.data?.length
          ? `${apiVersion}/contactLcss/${contactFormLcssData.data[0].form_lcss_aid}` // update
          : `${apiVersion}/contactLcss`, // create
        contactFormLcssData?.data?.length ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["contactLcss"] });
      if (!data.success) {
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
    if (contactFormLcssData) {
      const photos = getConvertStringToJSONparseData(
        contactFormLcssData?.data?.[0]?.form_lcss_file
      );
      setPhotoArrayList(photos);
    }
  }, []);

  const initVal = {
    isUpdateContactFormLcss: itemEdit,
    form_lcss_file: contactFormLcssData?.data?.[0]?.form_lcss_file ?? "",
    form_lcss_subtitle:
      contactFormLcssData?.data?.[0]?.form_lcss_subtitle ?? "",
    form_lcss_title: contactFormLcssData?.data?.[0]?.form_lcss_title ?? "",
    form_lcss_telephone:
      contactFormLcssData?.data?.[0]?.form_lcss_telephone ?? "",
    form_lcss_phone: contactFormLcssData?.data?.[0]?.form_lcss_phone ?? "",
    form_lcss_computer_title:
      contactFormLcssData?.data?.[0]?.form_lcss_computer_title ?? "",
    form_lcss_computer_name:
      contactFormLcssData?.data?.[0]?.form_lcss_computer_name ?? "",
    form_lcss_computer_email:
      contactFormLcssData?.data?.[0]?.form_lcss_computer_email ?? "",
    form_lcss_accounting_title:
      contactFormLcssData?.data?.[0]?.form_lcss_accounting_title ?? "",
    form_lcss_accounting_name:
      contactFormLcssData?.data?.[0]?.form_lcss_accounting_name ?? "",
    form_lcss_accounting_email:
      contactFormLcssData?.data?.[0]?.form_lcss_accounting_email ?? "",

    form_lcss_file_old: contactFormLcssData?.data?.[0]?.form_lcss_file ?? "",
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
            {itemEdit ? "Edit" : "Add"} Contact Form (LCSS)
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
                form_lcss_file: Array.from(photoArrayList).map((item) =>
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
                    <div className="relative">
                      <label className="  text-dark text-xs">Upload File</label>
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
                            handleChangeFileUpload(
                              e,
                              props,
                              setPhotoArrayList,
                              "form_lcss_file"
                            )
                          }
                          onDrop={(e) =>
                            handleChangeFileUpload(
                              e,
                              props,
                              setPhotoArrayList,
                              "form_lcss_file"
                            )
                          }
                          disabled={mutation.isPending || loading}
                          className="opacity-0 absolute right-0 bottom-0 left-0 m-auto cursor-pointer h-full z-20"
                        />
                      </div>

                      <div className="relative w-[230px] ">
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

                    <div className="input-wrapper">
                      <InputText
                        label="Subtitle"
                        type="text"
                        name="form_lcss_subtitle"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Title"
                        type="text"
                        name="form_lcss_title"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Telephone No."
                        type="text"
                        name="form_lcss_telephone"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Phone No."
                        type="text"
                        name="form_lcss_phone"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className="input-wrapper">
                      <InputText
                        label="Computer Title"
                        type="text"
                        name="form_lcss_computer_title"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Name"
                        type="text"
                        name="form_lcss_computer_name"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Email"
                        type="text"
                        name="form_lcss_computer_email"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Accounting Title"
                        type="text"
                        name="form_lcss_accounting_title"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Name"
                        type="text"
                        name="form_lcss_accounting_name"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Email"
                        type="text"
                        name="form_lcss_accounting_email"
                        disabled={mutation.isPending}
                      />
                    </div>
                  </div>
                  <div className="form-action  w-full mb-2">
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
          setNewFile={setPhotoArrayList}
        />
      )}
    </>
  );
};

export default ModalUpdateContactFormDefaultLcss;
