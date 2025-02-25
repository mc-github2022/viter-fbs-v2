import React from "react";
import { StoreContext } from "../../../store/StoreContext";
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
import {
  InputFileUpload,
  InputSelect,
  InputText,
  InputTextArea,
} from "../../../helpers/FormInputs";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import useUploadMultiplePhoto from "../../../custom-hooks/useUploadMultiplePhoto";
import ModalRemovedPhoto from "../../../partials/modals/ModalRemovedPhoto";
import { FaTrash } from "react-icons/fa";
import LoadImages from "../../../partials/LoadImages";

const ModalAddIndustryTestimonial = ({ setIsAdd, itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
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
    setTimeout(() => {
      dispatch(setIsAdd(false));
    }, 200);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `/v1/indTestimonial/${itemEdit.industry_testimonial_aid}` // update
          : `/v1/indTestimonial`, // create
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["indTestimonial"] });
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
      const clientPhotos = getConvertStringToJSONparseData(
        itemEdit.industry_testimonial_img
      );
      setClientImages(clientPhotos);
    }
    if (itemEdit) {
      const logoPhotos = getConvertStringToJSONparseData(
        itemEdit.industry_testimonial_logo
      );
      setLogoImages(logoPhotos);
    }
  }, []);

  const initVal = {
    industry_testimonial_aid: itemEdit ? itemEdit.industry_testimonial_aid : "",
    industry_testimonial_message: itemEdit
      ? itemEdit.industry_testimonial_message
      : "",
    industry_testimonial_name: itemEdit
      ? itemEdit.industry_testimonial_name
      : "",
    industry_testimonial_position: itemEdit
      ? itemEdit.industry_testimonial_position
      : "",
    industry_testimonial_category: itemEdit
      ? itemEdit.industry_testimonial_category
      : "",
    industry_testimonial_company: itemEdit
      ? itemEdit.industry_testimonial_company
      : "",
    industry_testimonial_img: itemEdit ? itemEdit.industry_testimonial_img : "",
    industry_testimonial_logo: itemEdit
      ? itemEdit.industry_testimonial_logo
      : "",

    industry_testimonial_img_old: itemEdit
      ? itemEdit.industry_testimonial_img
      : "",
    industry_testimonial_logo_old: itemEdit
      ? itemEdit.industry_testimonial_logo
      : "",
    pendingDeleteFile: [],
  };

  const yupSchema = Yup.object({
    industry_testimonial_category: Yup.string().required("Required"),
  });

  return (
    <>
      <ModalAddWrapper
        className={`transition-all ease-linear transform duration-200 max-h-[600px] max-w-[1050px]`}
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
                industry_testimonial_img: clientImages.map((item) =>
                  JSON.stringify({
                    name: item.name,
                    id: item?.id || "",
                  })
                ),
                industry_testimonial_logo: logoImages.map((item) =>
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
                    <div className="flex gap-4 justify-between ">
                      <div className="w-[50%] relative">
                        <div className="flex gap-8 mt-1">
                          <div className="">
                            <label className=" top-[35px] text-dark text-xs">
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
                                onChange={handleChangeClientImages}
                                onDrop={(e) => handleChangeClientImages(e)}
                                disabled={mutation.isPending || loading}
                                className="opacity-0 absolute right-0 bottom-0 left-0 m-auto cursor-pointer h-full z-20"
                              />
                            </div>

                            <div className="relative w-[230px] ">
                              <ol className="flex flex-wrap gap-5 justify-center bg-gray-300 ">
                                {clientImages.length > 0 &&
                                  clientImages.map((item, key) => {
                                    const fileLink =
                                      item instanceof File ||
                                      item instanceof Blob
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
                          <div className="">
                            <label className=" top-[35px] ml-[265px] text-dark text-xs">
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
                                onChange={handleChangeLogoImages}
                                onDrop={(e) => handleChangeLogoImages(e)}
                                disabled={mutation.isPending || loading}
                                className="opacity-0 absolute right-0 bottom-0 left-0 m-auto cursor-pointer h-full z-20"
                              />
                            </div>

                            <div className="relative w-[230px] ">
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
                        <div>
                          <div className="input-wrapper">
                            <InputText
                              label="Name"
                              type="text"
                              name="industry_testimonial_name"
                              disabled={mutation.isPending}
                            />
                          </div>
                          <div className="input-wrapper">
                            <InputText
                              label="Position"
                              type="text"
                              name="industry_testimonial_position"
                              disabled={mutation.isPending}
                            />
                          </div>
                          <div className="input-wrapper">
                            <InputText
                              label="Company"
                              type="text"
                              name="industry_testimonial_company"
                              disabled={mutation.isPending}
                            />
                          </div>
                          <div className="input-wrapper">
                            <InputSelect
                              label="*Category"
                              type="text"
                              name="industry_testimonial_category"
                              disabled={mutation.isPending}
                            >
                              <option value="" disabled>
                                Select Category
                              </option>
                              <option value="HR Information System">
                                HR Information System
                              </option>
                              <option value="Online Payroll System">
                                Online Payroll System
                              </option>
                              <option value="School Enrollment System">
                                School Enrollment System
                              </option>
                              <option value="Online Payment Integration">
                                Online Payment Integration
                              </option>
                              <option value="Online Donation System">
                                Online Donation System
                              </option>
                              <option value="Asset Inventory System">
                                Asset Inventory System
                              </option>
                              <option value="Business Registration">
                                Business Registration
                              </option>
                              <option value="Bookkeeping / Compliance">
                                Bookkeeping / Compliance
                              </option>
                              <option value="Administrative">
                                Administrative
                              </option>
                              <option value="Business Support">
                                Business Support
                              </option>
                              <option value="Marketing">Marketing</option>
                              <option value="College On-the-job- Training">
                                College On-the-job- Training
                              </option>
                              <option value="High School Work Immersion">
                                High School Work Immersion
                              </option>
                              <option value="Continuing Studies">
                                Continuing Studies
                              </option>
                              <option value="WordPress CMS Website">
                                WordPress CMS Website
                              </option>
                              <option value="Single Page Website">
                                Single Page Website
                              </option>
                              <option value="Web Design">Web Design</option>
                            </InputSelect>
                          </div>
                          <div className="form-action absolute bottom-0 w-full mb-2">
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
                                {mutation.isPending ? (
                                  <ButtonSpinner />
                                ) : (
                                  "Save"
                                )}
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
                      </div>
                      <div className="input-wrapper">
                        <InputTextArea
                          label="Message"
                          type="text"
                          name="industry_testimonial_message"
                          className="h-[506px] w-[478px]"
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

export default ModalAddIndustryTestimonial;
