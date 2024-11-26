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

  // console.log("Item Edit Data:", itemEdit);
  // console.log("Photo Array List Length:", photoArrayList.length);

  const imageList =
    itemEdit && itemEdit.lcss_batch_img
      ? itemEdit.lcss_batch_img.split(",")
      : [];

  return (
    <ModalAddWrapper
      className={`transition-all ease-linear transform duration-200 max-h-[550px] max-w-[1000px]`}
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
            await uploadMultiplePhoto(); // Ensure upload completes
            const data = {
              ...values,
              lcss_batch_img:
                photoArrayList.length > 0
                  ? photoArrayList.map((file) => file.name).join(", ")
                  : itemEdit.lcss_batch_img || "",
            };
            mutation.mutate(data);
          }}
        >
          {(props) => {
            return (
              <Form className="modal-form">
                <div className="form-input">
                  <div className="flex gap-4 justify-between">
                    <div className="w-[50%] relative">
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
                      <div className="form-action absolute bottom-0 w-full">
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
                    </div>
                    <div className="w-[50%] h-[475px] overflow-auto">
                      <span className="top-20 px-2 text-dark text-[12px]">
                        Upload Images
                      </span>
                      <div className="relative w-fit m-auto group mt-3">
                        {/* Conditional Rendering Based on Image Availability */}
                        {!itemEdit && !photoArrayList.length ? (
                          <div className="group-hover:opacity-20 mb-4 items-center gap-2 w-[350px] h-[180px] p-2 place-content-center">
                            <IoImageOutline className="text-[30px] text-[gray] mx-auto" />
                            <h1 className="mb-0 leading-tight text-[gray] text-[15px] text-center">
                              Upload Image
                            </h1>
                          </div>
                        ) : photoArrayList.length > 0 ? (
                          <div className="grid grid-cols-4 gap-2">
                            {photoArrayList.map((file, index) => (
                              <img
                                key={index}
                                src={URL.createObjectURL(file)}
                                alt="Uploaded Preview"
                                className="w-[350px] h-[180px] object-cover"
                              />
                            ))}
                          </div>
                        ) : itemEdit && itemEdit.lcss_batch_img ? (
                          <div className="grid grid-cols-4 gap-2">
                            {imageList.map((img, index) => (
                              <img
                                key={index}
                                src={`${devBaseImgUrl}/${img.trim()}`} // Use trim to remove any accidental whitespace
                                alt={`Existing Batch Image ${index + 1}`}
                                className="w-[350px] h-[180px] object-cover"
                              />
                            ))}
                          </div>
                        ) : (
                          <div className="group-hover:opacity-20  mb-4 items-center gap-2 w-[115px] h-[37px] p-2 grid place-items-center">
                            <IoImageOutline className="text-[30px] text-[gray] mx-auto" />
                            <h1 className="mb-0 leading-tight text-[gray] text-[15px] text-center">
                              No Images Available
                            </h1>
                          </div>
                        )}

                        {/* Upload Button */}
                        <div className="btnImgUpload">
                          <button>
                            <MdOutlineFileUpload className="text-gray-900 text-[30px]" />
                            <InputPhotoUpload
                              name="photo"
                              type="file"
                              id="myFile"
                              accept="image/*"
                              title="Upload Images"
                              multiple
                              onChange={(e) =>
                                handleChangeMultiplePhoto(e, 50, true)
                              }
                              className="opacity-0 absolute right-0 top-0 h-full left-0 m-auto cursor-pointer z-[999]"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
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
