import React from "react";
import useUploadPhoto from "../../../custom-hooks/useUploadPhoto";
import { apiVersion, devBaseImgUrl } from "../../../helpers/functions-general";
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
  InputPhotoUpload,
  InputSelect,
  InputText,
} from "../../../helpers/FormInputs";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import { StoreContext } from "../../../store/StoreContext";
import useUploadMultiplePhoto from "../../../custom-hooks/useUploadMultiplePhoto";

const ModalAddLcssBatches = ({ setIsAdd, itemEdit }) => {
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

  const initVal = {
    lcss_batch_aid: itemEdit ? itemEdit.lcss_batch_aid : "",
    lcss_batch_name: itemEdit ? itemEdit.lcss_batch_name : "",
    lcss_batch_category: itemEdit ? itemEdit.lcss_batch_category : "",
    lcss_batch_school: itemEdit ? itemEdit.lcss_batch_school : "",
    lcss_batch_course: itemEdit ? itemEdit.lcss_batch_course : "",
    lcss_batch_img: itemEdit ? itemEdit.lcss_batch_img : "",

    lcss_batch_name_old: itemEdit ? itemEdit.lcss_batch_name : "",
  };

  const yupSchema = Yup.object({
    lcss_batch_category: Yup.string().required("Required"),
  });

  return (
    <ModalAddWrapper
      className={`transition-all ease-linear transform duration-200 w-[600px]`}
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
            const data = {
              ...values,
              lcss_batch_img:
                photoArrayList?.name || itemEdit?.data[0].lcss_batch_img,
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
                    <span className="top-20 px-2 text-dark text-sm">
                      Images
                    </span>
                    <div className="relative w-fit m-auto group">
                      {itemEdit === null && photoArrayList === null ? (
                        <div className="group-hover:opacity-20 bg-dashAccent mb-4 items-center gap-2 w-[115px] h-[37px] border rounded-md p-2 grid place-items-center">
                          <div className="">
                            <IoImageOutline className="text-[30px] text-[gray] mx-auto" />
                            <h1 className="mb-0 leading-tight text-[gray] text-[15px] text-center">
                              Upload Image
                            </h1>
                          </div>
                        </div>
                      ) : (itemEdit?.data[0].lcss_batch_img === "" &&
                          photoArrayList === null) ||
                        photoArrayList === "" ? (
                        <div className="group-hover:opacity-20 mb-4 bg-dashAccent grid place-items-center items-center gap-2 h-[180px] w-[350px] p-2">
                          <div>
                            <IoImageOutline className="text-[30px] text-[gray] mx-auto" />
                            <h1 className="mb-0 leading-tight grid place-items-center text-gray text-[gray] text-sm text-center mt-5">
                              Upload Image
                            </h1>
                          </div>
                        </div>
                      ) : (
                        <div>
                          {photoArrayList && photoArrayList.length > 0 ? (
                            // Display uploaded images from photoArrayList
                            <div className="flex flex-col gap-3">
                              {photoArrayList.map((file, index) => (
                                <img
                                  key={index}
                                  src={
                                    photoArrayList
                                      ? URL.createObjectURL(file) // preview
                                      : devBaseImgUrl +
                                        "/" +
                                        itemEdit.lcss_batch_img // check db
                                  }
                                  alt="Uploaded Preview"
                                />
                              ))}
                            </div>
                          ) : (
                            // If no uploaded images, show images from itemEdit
                            itemEdit &&
                            itemEdit.data &&
                            itemEdit.data.map((item, index) => (
                              <div key={index}>
                                <img
                                  src={
                                    initVal.lcss_batch_img
                                      ? `${devBaseImgUrl}/${initVal.lcss_batch_img}`
                                      : ""
                                  }
                                  alt="Batch Image"
                                />
                              </div>
                            ))
                          )}

                          {/* <img
                            src={
                              photoArrayList
                                ? URL.createObjectURL(photoArrayList) // preview
                                : devBaseImgUrl +
                                  "/" +
                                  itemEdit?.data[0].lcss_batch_img // check db
                            }
                            alt="image1"
                            className="group-hover:opacity-30 duration-200 relative h-[180px]  object-contain object-[50%,50%] m-auto"
                          /> */}
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
                            title="Upload Logo"
                            multiple
                            onChange={(e) =>
                              handleChangeMultiplePhoto(e, 3, true)
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
                        initVal.lcss_batch_img === photoArrayList?.name
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

export default ModalAddLcssBatches;
