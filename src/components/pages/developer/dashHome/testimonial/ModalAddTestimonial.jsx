import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { GrFormClose } from "react-icons/gr";
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";
import * as Yup from "yup";
import useUploadMultiplePhoto from "../../../../custom-hooks/useUploadMultiplePhoto";
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

const ModalAddTestimonial = ({ setIsAdd, itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const {
    uploadMultiplePhoto,
    handleChangeMultiplePhoto,
    setPhotoArrayList,
    photoArrayList,
  } = useUploadMultiplePhoto(`${apiVersion}/upload-multiple-photo`, dispatch);

  const handleClose = () => {
    setTimeout(() => {
      dispatch(setIsAdd(false));
    }, 200);
  };

  // const handleClientImageUpload = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setPhotoArrayList((prev) => [
  //       ...prev.filter((photo) => photo.field !== "client"),
  //       { file, field: "client" },
  //     ]);
  //   }
  // };

  // const handleLogoImageUpload = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setPhotoArrayList((prev) => [
  //       ...prev.filter((photo) => photo.field !== "logo"),
  //       { file, field: "logo" },
  //     ]);
  //   }
  // };

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
  };

  const yupSchema = Yup.object({});

  console.log("itemEdit:", itemEdit);
  console.log("photoArrayList:", photoArrayList);

  return (
    <ModalAddWrapper
      className={`transition-all ease-linear transform duration-200`}
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
            const data = {
              ...values,
              home_testimonial_client_img:
                photoArrayList[0]?.name || itemEdit.home_testimonial_client_img,
              home_testimonial_logo_img:
                photoArrayList[1]?.name || itemEdit.home_testimonial_logo_img,
            };
            uploadMultiplePhoto(); // to save the photo when submit
            mutation.mutate(data);
          }}
        >
          {(props) => {
            return (
              <Form className="modal-form">
                <div className="form-input">
                  <div className="mt-5">
                    <span className="top-20 px-2 text-dark">
                      Upload Client and Logo Images
                    </span>
                    <div className="relative w-fit m-auto group">
                      {!photoArrayList?.length &&
                      !itemEdit?.home_testimonial_client_img &&
                      !itemEdit?.home_testimonial_logo_img ? (
                        // Placeholder if no image is available
                        <div className="group-hover:opacity-20 bg-dashAccent mb-4 items-center gap-2 w-[200px] h-[100px] border rounded-md p-2 grid place-items-center">
                          <IoImageOutline className="text-[30px] text-[gray] mx-auto" />
                          <h1 className="mb-0 leading-tight text-[gray] text-[15px] text-center">
                            Upload Image
                          </h1>
                        </div>
                      ) : (
                        // Image display block
                        <div>
                          {photoArrayList && photoArrayList.length > 0 ? (
                            <div className="flex flex-row gap-3">
                              {photoArrayList.map((file, index) => (
                                <img
                                  key={index}
                                  src={URL.createObjectURL(file)}
                                  alt="Uploaded Preview"
                                  className="w-48 h-[150px] object-contain rounded-md"
                                />
                              ))}
                            </div>
                          ) : (
                            // Display existing images if available
                            <div className="flex flex-row gap-3">
                              {itemEdit && (
                                <>
                                  {itemEdit.home_testimonial_client_img && (
                                    <img
                                      src={`${devBaseImgUrl}/${itemEdit.home_testimonial_client_img}`}
                                      alt="Client Testimonial Image"
                                      className="w-48 h-[150px] object-contain rounded-md"
                                    />
                                  )}
                                  {itemEdit.home_testimonial_logo_img && (
                                    <img
                                      src={`${devBaseImgUrl}/${itemEdit.home_testimonial_logo_img}`}
                                      alt="Logo Testimonial Image"
                                      className="w-48 h-24 object-cover rounded-md"
                                    />
                                  )}
                                </>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                      <div className="btnImgUpload">
                        <button>
                          <MdOutlineFileUpload />
                          <InputPhotoUpload
                            name="photo"
                            type="file"
                            id="myFile"
                            accept="image/*"
                            title="Upload image"
                            multiple
                            onChange={(e) =>
                              handleChangeMultiplePhoto(e, 2, true)
                            }
                            className="opacity-0 absolute right-0 top-0 left-0 m-auto cursor-pointer z-[999] h-[100px]"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
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
                  <div className="input-wrapper">
                    <InputTextArea
                      label="Message"
                      type="text"
                      name="home_testimonial_message"
                      disabled={mutation.isPending}
                    />
                  </div>
                </div>
                <div className="form-action">
                  <div className="form-btn">
                    <button
                      className="btn-modal-submit"
                      type="submit"
                      disabled={
                        ((mutation.isPending || !props.dirty) &&
                          photoArrayList === null) ||
                        photoArrayList === "" ||
                        initVal.home_testimonial_client_img ===
                          photoArrayList?.name ||
                        initVal.home_testimonial_logo_img ===
                          photoArrayList?.name
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

export default ModalAddTestimonial;
