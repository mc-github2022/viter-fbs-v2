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
  InputFileUpload,
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
  getConvertStringToJSONparseData,
  googleHDViewLink,
  googleViewLink,
} from "../../../../helpers/functions-general";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoImageOutline } from "react-icons/io5";
import useUploadMultiplePhoto from "../../../../custom-hooks/useUploadMultiplePhoto";
import LoadImages from "../../../../partials/LoadImages";
import ModalRemovedPhoto from "../../../../partials/modals/ModalRemovedPhoto";

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
  const [animate, setAnimate] = React.useState("translate-x-full");
  const [searchTerm, setSearchTerm] = React.useState(
    itemEdit ? itemEdit.careers_icon : ""
  );
  const [onFocusSearch, setOnFocusSearch] = React.useState(false);
  const [selectedIcon, setSelectedIcon] = React.useState(
    itemEdit ? itemEdit.careers_icon : ""
  );
  const [itemsLimit, setItemsLimit] = React.useState(20);
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
    setAnimate("translate-x-full");
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

  React.useEffect(() => {
    setAnimate("");
    if (itemEdit) {
      const photos = getConvertStringToJSONparseData(itemEdit.careers_img);
      setPhotoArrayList(photos);
    }
  }, []);

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

    careers_img_old: itemEdit ? itemEdit.careers_img : "",
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
              setLoading(true);
              const data = {
                ...values,
                careers_img: Array.from(photoArrayList).map((item) =>
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
                      <div className="mt-3">
                        <span className="top-20 px-2 text-dark text-xs">
                          Image
                        </span>
                        <div
                          className={`relative mt-4 mb-4 border border-gray-300 rounded-md hover:border-primary hover:border-dashed w-[300px] text-xs ${
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
                            label="Upload Banner Image"
                            name="File"
                            type="file"
                            id="myFile"
                            accept="*"
                            title="Upload File"
                            onChange={(e) =>
                              handleChangeFileUpload(
                                e,
                                props,
                                setPhotoArrayList,
                                "careers_img"
                              )
                            }
                            onDrop={(e) =>
                              handleChangeFileUpload(
                                e,
                                props,
                                setPhotoArrayList,
                                "careers_img"
                              )
                            }
                            disabled={mutation.isPending || loading}
                            className="opacity-0 absolute right-0 bottom-0 left-0 m-auto cursor-pointer h-full z-20"
                          />
                        </div>

                        <div className="relative mb-6 w-[300px] ">
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
                                        className={`relative z-20 w-full h-full object-cover object-center`}
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
                                              <FaIcons.FaTrash />
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
                      <div className="input-wrapper" ref={refSearch}>
                        <InputText
                          label="Search Icon"
                          type="text"
                          name="careers_icon"
                          placeholder="Type to search icons..."
                          value={searchTerm}
                          onChange={(e) => {
                            const value = e.target.value;
                            setSearchTerm(value);
                            props.setFieldValue("careers_icon", value);
                          }}
                          onFocus={() => setOnFocusSearch(true)}
                          className="border p-2 w-full"
                        />
                        {onFocusSearch && (
                          <div className="w-full h-40 max-h-40 overflow-y-auto absolute top-[34px] bg-white shadow-md z-50 rounded-sm border border-gray-200 pt-1">
                            {limitedIcons.map((iconKey) => {
                              const IconComponent = icons[iconKey];
                              return (
                                <div
                                  key={iconKey}
                                  className="icon-item cursor-pointer flex items-center gap-2 px-2 py-1 hover:bg-gray-100"
                                  onClick={() => {
                                    handleIconSelect(iconKey);
                                    props.setFieldValue(
                                      "careers_icon",
                                      iconKey
                                    );
                                    setOnFocusSearch(false);
                                  }}
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
                    </div>
                    <div>
                      <div className="input-wrapper">
                        <InputTextArea
                          label="Job Overview"
                          type="text"
                          name="careers_job_overview"
                          className="h-[290px] "
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="input-wrapper">
                        <InputTextArea
                          label="Job Description"
                          type="text"
                          name="careers_job_description"
                          className="h-[290px] "
                          disabled={mutation.isPending}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-action mb-1">
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

export default ModalAddCareers;
