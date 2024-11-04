import React from "react";
import { StoreContext } from "../../../store/StoreContext";
import useUploadPhoto from "../../../custom-hooks/useUploadPhoto";
import { apiVersion, devBaseImgUrl } from "../../../helpers/functions-general";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../helpers/queryData";
import { setError, setMessage, setSuccess } from "../../../store/StoreAction";
import * as Yup from "yup";
import ModalAddWrapper from "../../../partials/dashboard/ModalAddWrapper";
import { GrFormClose } from "react-icons/gr";
import { Form, Formik } from "formik";
import { InputSelect, InputText, InputTextArea } from "../../../helpers/FormInputs";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";

const ModalAddIndustryTestimonial = ({ setIsAdd, itemEdit }) => {
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
    industry_testimonial_img: itemEdit ? itemEdit.industry_testimonial_img : "",
    industry_testimonial_logo: itemEdit
      ? itemEdit.industry_testimonial_logo
      : "",
  };

  const yupSchema = Yup.object({});

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
              industry_testimonial_img:
                clientImage?.name || itemEdit.industry_testimonial_img,
              industry_testimonial_logo:
                logoImage?.name || itemEdit.industry_testimonial_logo,
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
                    <div className="w-[50%]">
                      <div className="relative w-fit m-auto group">
                        {/* Display images or placeholders */}
                        <div className="flex flex-row justify-between items-center">
                          {clientImage ? (
                            <img
                              src={URL.createObjectURL(clientImage)}
                              alt="Client Preview"
                              className="w-48 h-34 object-cover rounded-md"
                            />
                          ) : itemEdit?.industry_testimonial_img ? (
                            <img
                              src={`${devBaseImgUrl}/${itemEdit.industry_testimonial_img}`}
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
                          ) : itemEdit?.industry_testimonial_logo ? (
                            <img
                              src={`${devBaseImgUrl}/${itemEdit.industry_testimonial_logo}`}
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
                              className=" my-1"
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
                              className=" my-1"
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
                      </div>
                    </div>
                    <div className="input-wrapper">
                      <InputTextArea
                        label="Message"
                        type="text"
                        name="industry_testimonial_message"
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
                          initVal.industry_testimonial_img ===
                            clientImage.name) ||
                        (logoImage &&
                          initVal.industry_testimonial_logo === logoImage.name)
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

export default ModalAddIndustryTestimonial;
