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
import useUploadPhoto from "../../../../custom-hooks/useUploadPhoto";

const ModalAddTestimonial = ({ setIsAdd, itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto(
    `${apiVersion}/upload-photo`,
    dispatch
  );

  // Separate states to hold the client and logo image files
  const [clientImage, setClientImage] = React.useState(null);
  const [logoImage, setLogoImage] = React.useState(null);

  const handleClose = () => {
    setTimeout(() => {
      dispatch(setIsAdd(false));
    }, 200);
  };

  // Handlers for client and logo images
  const handleClientImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setClientImage(file); // Store client image file
      uploadPhoto((prev) => [
        ...prev.filter((photo) => photo.field !== "client"),
        { file, field: "client" },
      ]);
    }
  };

  const handleLogoImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogoImage(file); // Store logo image file
      uploadPhoto((prev) => [
        ...prev.filter((photo) => photo.field !== "logo"),
        { file, field: "logo" },
      ]);
    }
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
  console.log("photo:", photo);

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
                clientImage?.name || itemEdit.home_testimonial_client_img,
              home_testimonial_logo_img:
                logoImage?.name || itemEdit.home_testimonial_logo_img,
            };

            // Upload photos if they exist
            if (clientImage) await uploadPhoto(clientImage);
            if (logoImage) await uploadPhoto(logoImage);

            mutation.mutate(data); // Mutate form data
          }}
        >
          {(props) => {
            return (
              <Form className="modal-form">
                <div className="form-input">
                  <div className="flex gap-4 justify-between">
                    <div className="w-[500px]">
                      <div className="relative w-fit m-auto group">
                        {/* Display images or placeholders */}
                        <div className="flex flex-row justify-between items-center">
                          {clientImage ? (
                            <img
                              src={URL.createObjectURL(clientImage)}
                              alt="Client Preview"
                              className="w-48 h-34 object-cover rounded-md"
                            />
                          ) : itemEdit?.home_testimonial_client_img ? (
                            <img
                              src={`${devBaseImgUrl}/${itemEdit.home_testimonial_client_img}`}
                              alt="Client Testimonial Image"
                              className="w-48 h-34 object-cover rounded-md"
                            />
                          ) : (
                            ""
                          )}

                          {logoImage ? (
                            <img
                              src={URL.createObjectURL(logoImage)}
                              alt="Logo Preview"
                              className="w-48 h-34 object-cover rounded-md"
                            />
                          ) : itemEdit?.home_testimonial_logo_img ? (
                            <img
                              src={`${devBaseImgUrl}/${itemEdit.home_testimonial_logo_img}`}
                              alt="Logo Testimonial Image"
                              className="w-48 h-34 object-cover rounded-md"
                            />
                          ) : (
                            ""
                          )}
                        </div>

                        {/* Separate input fields for client and logo images */}
                        <div className="flex items-center gap-4 mt-4">
                          <div className="relative">
                            <input
                              type="file"
                              accept="image/*"
                              className="h-10 my-1"
                              onChange={handleClientImageUpload}
                            />
                            <label className="absolute top-[20px]">
                              Client Image
                            </label>
                          </div>

                          <div className="relative">
                            <input
                              type="file"
                              accept="image/*"
                              className="h-10 my-1"
                              onChange={handleLogoImageUpload}
                            />
                            <label className="absolute top-[20px]">
                              Logo Image
                            </label>
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
                      </div>
                    </div>
                    <div className="input-wrapper">
                      <InputTextArea
                        label="Message"
                        type="text"
                        name="home_testimonial_message"
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
                        mutation.isPending ||
                        (!props.dirty && !clientImage && !logoImage) || // Check if no new image is selected
                        (clientImage &&
                          initVal.home_testimonial_client_img ===
                            clientImage.name) ||
                        (logoImage &&
                          initVal.home_testimonial_logo_img === logoImage.name)
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
