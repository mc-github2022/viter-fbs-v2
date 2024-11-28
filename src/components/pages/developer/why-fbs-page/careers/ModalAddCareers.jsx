import React from "react";
import * as Yup from "yup";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as TiIcons from "react-icons/ti";
import * as LuIcons from "react-icons/lu";
import * as PiIcons from "react-icons/pi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../../helpers/queryData";
import {
  setError,
  setMessage,
  setSuccess,
} from "../../../../store/StoreAction";
import ModalAddWrapper from "../../../../partials/dashboard/ModalAddWrapper";
import { GrFormClose } from "react-icons/gr";
import { Form, Formik } from "formik";
import {
  InputPhotoUpload,
  InputSelect,
  InputText,
  InputTextArea,
} from "../../../../helpers/FormInputs";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";
import { StoreContext } from "../../../../store/StoreContext";
import useSingleUploadPhoto from "../../../../custom-hooks/useSingleUploadPhoto";
import {
  apiVersion,
  devBaseImgUrl,
} from "../../../../helpers/functions-general";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoImageOutline } from "react-icons/io5";

const icons = {
  ...FaIcons,
  ...AiIcons,
  ...IoIcons,
  ...TiIcons,
  ...LuIcons,
  ...PiIcons,
};

const ModalAddCareers = ({ setIsAdd, itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [searchTerm, setSearchTerm] = React.useState(
    itemEdit ? itemEdit.careers_icon : ""
  );
  const [onFocusSearch, setOnFocusSearch] = React.useState(false);
  const [selectedIcon, setSelectedIcon] = React.useState(
    itemEdit ? itemEdit.careers_icon : ""
  );
  const [itemsLimit, setItemsLimit] = React.useState(20);

  const { singleUploadPhoto, handleChangePhoto, photoSingle } =
    useSingleUploadPhoto(`${apiVersion}/upload-photo`, dispatch);

  const SelectedIcon = selectedIcon ? icons[selectedIcon] : null;

  const filteredIcons = Object.keys(icons).filter((iconKey) =>
    iconKey.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Limit the number of icons displayed
  const limitedIcons = filteredIcons.slice(0, itemsLimit);

  // sets the limit of icons being show
  const handleShowMore = () => {
    setItemsLimit(itemsLimit + 20);
  };

  const refSearch = React.useRef();

  const clickOutsideRefSearch = (e) => {
    if (refSearch.current && !refSearch.current.contains(e.target)) {
      setOnFocusSearch(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", clickOutsideRefSearch);
    return () => document.removeEventListener("click", clickOutsideRefSearch);
  }, []);

  const handleIconSelect = (iconKey) => {
    setSelectedIcon(iconKey);
    setSearchTerm(iconKey);
    setOnFocusSearch(false);
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
          ? `/v1/careers/${itemEdit.careers_aid}` // update
          : `/v1/careers`, // create
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["careers"] });
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
    careers_aid: itemEdit ? itemEdit.careers_aid : "",
    careers_job_title: itemEdit ? itemEdit.careers_job_title : "",
    careers_job_classification: itemEdit
      ? itemEdit.careers_job_classification
      : "",
    careers_job_mode: itemEdit ? itemEdit.careers_job_mode : "",
    careers_job_status: itemEdit ? itemEdit.careers_job_status : "",
    careers_job_description: itemEdit ? itemEdit.careers_job_description : "",
    careers_icon: itemEdit ? itemEdit.careers_icon : "",
    careers_img: itemEdit ? itemEdit.careers_img : "",
    careers_job_overview: itemEdit ? itemEdit.careers_job_overview : "",
  };

  const yupSchema = Yup.object({});

  return (
    <ModalAddWrapper
      className={`transition-all ease-linear transform duration-200 max-h-[635px] max-w-[1000px]`}
      handleClose={handleClose}
    >
      <div className="modal-title">
        <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} Career</h2>
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
              careers_icon: selectedIcon,
              careers_img: photoSingle
                ? photoSingle.name
                : itemEdit.careers_img,
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
                    <div className="w-[50%] relative">
                      <div className="mt-5">
                        <span className="top-20 px-2 text-dark text-xs">
                          Image
                        </span>
                        <div className="relative w-fit group">
                          {(itemEdit === null && photoSingle === null) ||
                          (photoSingle === "" && itemEdit === null) ? (
                            <div className="group-hover:opacity-20 mb-4 items-center gap-2 w-[200px] h-[100px] p-2 grid place-items-center duration-200">
                              <div className="">
                                <IoImageOutline className="text-[25px] text-[gray] mx-auto" />
                                <h1 className="mb-0 leading-tight text-[gray] text-sm text-center">
                                  Upload Image
                                </h1>
                              </div>
                            </div>
                          ) : (itemEdit &&
                              !itemEdit.careers_img &&
                              !photoSingle) ||
                            (!itemEdit && !photoSingle) ? (
                            <div className="group-hover:opacity-20 mb-4 grid place-items-center items-center gap-2 w-[200px] h-[100px] p-2 duration-200">
                              <div>
                                <IoImageOutline className="text-[25px] text-[gray] mx-auto" />
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
                                  : devBaseImgUrl + "/" + itemEdit.careers_img // check db
                              }
                              alt="Logo"
                              className="group-hover:opacity-20 duration-200 relative h-[100px]  object-contain object-[50%,50%] m-auto"
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
                                  handleChangePhoto(e, initVal.careers_img)
                                }
                                className="opacity-0 absolute right-0 top-0 h-full left-0 m-auto cursor-pointer z-[999]"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="input-wrapper" ref={refSearch}>
                        <label htmlFor="icon-search">Search Icon</label>
                        <input
                          id="icon-search"
                          type="text"
                          placeholder="Type to search icons..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="border p-2 w-full"
                          onFocus={() => setOnFocusSearch(true)}
                        />
                        {onFocusSearch && (
                          <div className="w-full h-40 max-h-40 overflow-y-auto absolute top-[34px] bg-white shadow-md z-50 rounded-sm border border-gray-200 pt-1">
                            {limitedIcons.map((iconKey) => {
                              const IconComponent = icons[iconKey];
                              return (
                                <div
                                  key={iconKey}
                                  className="icon-item cursor-pointer flex items-center gap-2 px-2 py-1 hover:bg-gray-100"
                                  onClick={() => handleIconSelect(iconKey)}
                                >
                                  <IconComponent />
                                  <span>{iconKey}</span>
                                </div>
                              );
                            })}
                            {filteredIcons.length > itemsLimit && (
                              <div className="load-more">
                                <button
                                  type="button"
                                  onClick={handleShowMore}
                                  className="text-primary p-1 ml-1.5 rounded"
                                >
                                  Show More Icons ...
                                </button>
                              </div>
                            )}
                          </div>
                        )}
                        {selectedIcon ? (
                          <div className="flex items-center gap-4 ml-3 text-xs">
                            Selected icon: <SelectedIcon />
                          </div>
                        ) : (
                          <div className="text-xs ml-3">No icon selected</div>
                        )}
                      </div>
                      <div className="input-wrapper">
                        <InputText
                          label="Job Title"
                          type="text"
                          name="careers_job_title"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="input-wrapper">
                        <InputSelect
                          label="Employee Classification"
                          type="text"
                          name="careers_job_classification"
                          disabled={mutation.isPending}
                        >
                          <option value="" disabled>
                            Select Employee Classification
                          </option>
                          <option value="Full-time">Full-time</option>
                          <option value="Part-time">Part-time</option>
                        </InputSelect>
                      </div>
                      <div className="input-wrapper">
                        <InputSelect
                          label="Mode of Work"
                          type="text"
                          name="careers_job_mode"
                          disabled={mutation.isPending}
                        >
                          <option value="" disabled>
                            Select Mode of Work
                          </option>
                          <option value="On-site">On-site</option>
                          <option value="Remote">Remote</option>
                          <option value="Hybrid">Hybrid</option>
                        </InputSelect>
                      </div>
                      <div className="input-wrapper">
                        <InputSelect
                          label="Job Status"
                          type="text"
                          name="careers_job_status"
                          disabled={mutation.isPending}
                        >
                          <option value="" disabled>
                            Select Job Status
                          </option>
                          <option value="Ongoing">Ongoing</option>
                          <option value="Closed">Closed</option>
                        </InputSelect>
                      </div>
                      <div className="form-action absolute bottom-0 w-full mb-2">
                        <div className="form-btn">
                          <button
                            className="btn-modal-submit"
                            type="submit"
                            disabled={
                              mutation.isPending ||
                              (!props.dirty &&
                                photoSingle === null &&
                                !selectedIcon) ||
                              (photoSingle === "" && !selectedIcon) ||
                              (initVal.careers_img === photoSingle?.name &&
                                !selectedIcon)
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
                    <div>
                      <div className="input-wrapper textAreaWrapper">
                        <InputTextArea
                          label="Job Overview"
                          type="text"
                          name="careers_job_overview"
                          className="h-[260px] w-[478px]"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="input-wrapper textAreaWrapper">
                        <InputTextArea
                          label="Job Description"
                          type="text"
                          name="careers_job_description"
                          className="h-[260px] w-[478px]"
                          disabled={mutation.isPending}
                        />
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

export default ModalAddCareers;
