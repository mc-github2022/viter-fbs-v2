import React from "react";
import useSingleUploadPhoto from "../../../custom-hooks/useSingleUploadPhoto";
import { StoreContext } from "../../../store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../helpers/queryData";
import { setError, setMessage, setSuccess } from "../../../store/StoreAction";
import * as Yup from "yup";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import {
  InputPhotoUpload,
  InputSelect,
  InputText,
  InputTextArea,
} from "../../../helpers/FormInputs";
import { MdOutlineFileUpload } from "react-icons/md";
import { apiVersion, devBaseImgUrl } from "../../../helpers/functions-general";
import { IoImageOutline } from "react-icons/io5";
import ModalAddWrapper from "../../../partials/dashboard/ModalAddWrapper";
import { GrFormClose } from "react-icons/gr";
import { Form, Formik } from "formik";

const ModalAddVidTestimonial = ({ setIsAdd, itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const { singleUploadPhoto, handleChangePhoto, photoSingle } =
    useSingleUploadPhoto(`${apiVersion}/upload-photo`, dispatch);

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
          ? `/v1/vid-testimonial/${itemEdit.vid_testimonial_aid}` // update
          : `/v1/vid-testimonial`, // create
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["vid-testimonial"] });
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
    vid_testimonial_aid: itemEdit ? itemEdit.vid_testimonial_aid : "",
    vid_testimonial_category: itemEdit ? itemEdit.vid_testimonial_category : "",
    vid_testimonial_vid_link: itemEdit ? itemEdit.vid_testimonial_vid_link : "",
    vid_testimonial_logo_img: itemEdit ? itemEdit.vid_testimonial_logo_img : "",
    vid_testimonial_course: itemEdit ? itemEdit.vid_testimonial_course : "",
    vid_testimonial_school: itemEdit ? itemEdit.vid_testimonial_school : "",
    vid_testimonial_message: itemEdit ? itemEdit.vid_testimonial_message : "",
    vid_testimonial_name: itemEdit ? itemEdit.vid_testimonial_name : "",
  };

  const yupSchema = Yup.object({
    vid_testimonial_category: Yup.string().required("Required"),
  });

  return (
    <ModalAddWrapper
      className={`transition-all ease-linear transform duration-200 max-h-[650px] max-w-[1000px]`}
      handleClose={handleClose}
    >
      <div className="modal-title">
        <h2 className="text-sm">
          {itemEdit ? "Edit" : "Add"} Video Testimonial
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
            const data = {
              ...values,
              vid_testimonial_logo_img: photoSingle
                ? photoSingle.name
                : itemEdit.vid_testimonial_logo_img,
            };
            if (photoSingle) {
              await singleUploadPhoto(); // to save the photo when submit
            }
            mutation.mutate(data);
          }}
        >
          {(props) => {
            return (
              <Form className="modal-form">
                <div className="form-input">
                  <div className="flex gap-4 justify-between">
                    <div className="w-[50%]">
                      <div className="mt-5">
                        <span className="top-20 px-2 text-dark text-xs">
                          School Logo
                        </span>
                        <div className="relative w-fit group">
                          {(itemEdit === null && photoSingle === null) ||
                          (photoSingle === "" && itemEdit === null) ? (
                            <div className="group-hover:opacity-20 mb-4 items-center gap-2 w-[200px] h-[100px] p-2 grid place-items-center duration-200">
                              <div className="">
                                <IoImageOutline className="text-[30px] text-[gray] mx-auto" />
                                <h1 className="mb-0 leading-tight text-[gray] text-[15px] text-center">
                                  Upload Image
                                </h1>
                              </div>
                            </div>
                          ) : (itemEdit &&
                              !itemEdit.vid_testimonial_logo_img &&
                              !photoSingle) ||
                            (!itemEdit && !photoSingle) ? (
                            <div className="group-hover:opacity-20 mb-4 grid place-items-center items-center gap-2 w-[200px] h-[100px] p-2 duration-200">
                              <div>
                                <IoImageOutline className="text-[30px] text-[gray] mx-auto" />
                                <h1 className="mb-0 leading-tight grid place-items-center text-[gray] text-sm text-center">
                                  Upload Image
                                </h1>
                              </div>
                            </div>
                          ) : (
                            <img
                              src={
                                photoSingle
                                  ? URL.createObjectURL(photoSingle) // preview
                                  : devBaseImgUrl +
                                    "/" +
                                    itemEdit.vid_testimonial_logo_img // check db
                              }
                              alt="Logo"
                              className="group-hover:opacity-30 duration-200 relative h-[100px]  object-contain object-[50%,50%] m-auto"
                            />
                          )}

                          <div className="btnImgUpload">
                            <button>
                              <MdOutlineFileUpload className="text-gray-900 text-[30px]" />
                              <InputPhotoUpload
                                name="photo"
                                type="file"
                                id="myFile"
                                accept="image/*"
                                title="Upload Image"
                                onChange={(e) =>
                                  handleChangePhoto(
                                    e,
                                    initVal.vid_testimonial_logo_img
                                  )
                                }
                                className="opacity-0 absolute right-0 top-0 h-full left-0 m-auto cursor-pointer z-[999]"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="input-wrapper">
                          <InputText
                            label="Name"
                            type="text"
                            name="vid_testimonial_name"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputText
                            label="Course"
                            type="text"
                            name="vid_testimonial_course"
                            disabled={mutation.isPending}
                          />
                        </div>

                        <div className="input-wrapper">
                          <InputText
                            label="School"
                            type="text"
                            name="vid_testimonial_school"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputText
                            label="Video Link"
                            type="text"
                            name="vid_testimonial_vid_link"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputSelect
                            label="*Category"
                            type="text"
                            name="vid_testimonial_category"
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
                      </div>
                    </div>
                    <div className="input-wrapper">
                      <InputTextArea
                        label="Message"
                        type="text"
                        name="vid_testimonial_message"
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
                        ((mutation.isPending || !props.dirty) &&
                          photoSingle === null) ||
                        photoSingle === "" ||
                        initVal.vid_testimonial_logo_img === photoSingle?.name
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

export default ModalAddVidTestimonial;
