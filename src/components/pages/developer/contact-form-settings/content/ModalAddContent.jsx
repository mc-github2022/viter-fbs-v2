import React from "react";
import { StoreContext } from "../../../../store/StoreContext";
import * as Yup from "yup";
import useUploadMultiplePhoto from "../../../../custom-hooks/useUploadMultiplePhoto";
import {
  apiVersion,
  getConvertStringToJSONparseData,
  googleHDViewLink,
  googleViewLink,
} from "../../../../helpers/functions-general";
import { setIsAdd } from "../../../../store/StoreAction";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../../helpers/queryData";
import ModalRemovedPhoto from "../../../../partials/modals/ModalRemovedPhoto";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";
import {
  InputFileUpload,
  InputText,
  InputTextArea,
} from "../../../../helpers/FormInputs";
import LoadImages from "../../../../partials/LoadImages";
import { FaCheckCircle, FaTrash } from "react-icons/fa";
import { Form, Formik } from "formik";
import { GrFormClose } from "react-icons/gr";
import ModalAddWrapper from "../../../../partials/dashboard/ModalAddWrapper";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { purposeValue } from "../../notification/functions-notification";

const ModalAddContent = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");
  const [withFile, setWithFile] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [fileData, setFileData] = React.useState(null);
  const [isRemovedPhoto, setIsRemovedPhoto] = React.useState(false);

  const [isCheck, setIsCheck] = React.useState(false);
  const [isCheckSubject, setIsCheckSubject] = React.useState(false);

  const [onFocusPackagesList, setOnFocusPackagesList] = React.useState(false);
  const [propertyPackageListValue, setPropertyPackageListValue] =
    React.useState(itemEdit ? `${itemEdit.packages_category_name}` : ""); // to get the data from table when update
  const [packageList, setPackageList] = React.useState(
    itemEdit ? itemEdit.packages_category_name : ""
  );
  const [packageListId, setPackageListId] = React.useState(
    itemEdit ? itemEdit.packages_list_category_name_id : ""
  );

  const {
    isFetching: packageListDataIsFetching,
    error: packageListDataError,
    data: packageListData,
  } = useQueryData(
    `${apiVersion}/packages-list/category-search`, // endpoint
    "post", // method
    "packages-list/category-search", // key
    {
      searchValue: packageList, // payload
    },
    {
      searchValue: packageList, // id
    },
    true // refetchOnWindowFocus
  );

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
      dispatch(setIsAdd(false));
    }, 200);
  };

  const handleCheckBox = (e) => {
    setIsCheck(e.target.checked);
  };

  const handleCheckBoxSubject = (e) => {
    setIsCheckSubject(e.target.checked);
  };

  const handleClickPackageList = (item) => {
    setPackageList(item.packages_category_name);
    setPropertyPackageListValue(`${item.packages_category_name}`);
    setPackageListId(item.packages_category_aid);
    setOnFocusPackagesList(false);
  };

  const handleOnChangePackageList = (e) => {
    setPropertyPackageListValue(e.target.value);
    setLoading(true);
    setPackageListId("");
    if (e.target.value === "") {
      setLoading(false);
    }

    let timeOut;

    timeOut = setTimeout(() => {
      clearTimeout(timeOut);
      let val = e.target.value;
      if (val === "") {
        setPackageList(val);
        return;
      }
      setPackageList(val);
      setLoading(false);
    }, 500); // debounce seconds to fetch
  };

  // to close the modal when clicking outside for Property type
  const refPackageList = React.useRef();

  const clickOutsideRefPackageList = (e) => {
    if (
      refPackageList.current !== undefined &&
      refPackageList.current !== null &&
      !refPackageList.current?.contains(e.target)
    ) {
      setOnFocusPackagesList(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", clickOutsideRefPackageList);
    return () => document.addEventListener("click", clickOutsideRefPackageList);
  }, []);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${apiVersion}/contactContent/${itemEdit.special_offers_aid}` // update
          : `${apiVersion}/contactContent`, // create
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["contactForm"] });
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
    if (itemEdit) {
      const photos = getConvertStringToJSONparseData(
        itemEdit.form_content_portfolio
      );
      setPhotoArrayList(photos);
    }
  }, []);

  React.useEffect(() => {
    setIsCheck(itemEdit ? itemEdit.form_content_is_upload_file : false);
    setIsCheckSubject(
      itemEdit ? itemEdit.form_content_is_subject_input : false
    );
  }, []);

  const initVal = {
    form_content_portfolio: itemEdit ? itemEdit.form_content_portfolio : "",
    form_content_page_id: itemEdit ? itemEdit.form_content_page_id : "",
    form_content_purpose: itemEdit ? itemEdit.form_content_purpose : "",
    form_content_title: itemEdit ? itemEdit.form_content_title : "",
    form_content_subtitle: itemEdit ? itemEdit.form_content_subtitle : "",
    form_content_is_upload_file: itemEdit
      ? itemEdit.form_content_is_upload_file
      : "",
    form_content_is_subject_input: itemEdit
      ? itemEdit.form_content_is_subject_input
      : "",
    form_content_details: itemEdit ? itemEdit.form_content_details : "",

    form_content_portfolio_old: itemEdit ? itemEdit.form_content_portfolio : "",
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
          <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} Form Contents</h2>
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
              if (packageListId === "" || !packageListId) {
                dispatch(setError(true));
                dispatch(setMessage("Category is Required."));
                return;
              }
              const data = {
                ...values,
                form_content_page_id: packageListId,
                form_content_is_upload_file: isCheck,
                form_content_is_subject_input: isCheckSubject,
                form_content_portfolio: Array.from(photoArrayList).map((item) =>
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
              mutation.mutate(data);
            }}
          >
            {(props) => {
              return (
                <Form className="modal-form">
                  <div className="form-input">
                    <div className=" input-wrapper">
                      <InputText
                        label="*Page"
                        type="text"
                        value={propertyPackageListValue}
                        name="form_content_page_id"
                        disabled={mutation.isPending}
                        onFocus={() => setOnFocusPackagesList(true)}
                        onChange={handleOnChangePackageList}
                        refVal={refPackageList}
                      />
                      {onFocusPackagesList && (
                        <div className="w-full h-40 max-h-40 overflow-y-auto absolute top-[33px] bg-white shadow-md z-50 rounded-sm border border-gray-200 pt-1">
                          {loading || packageListDataIsFetching ? (
                            <TableSpinner />
                          ) : packageListDataError ? (
                            <div className="my-7">
                              <ServerError />
                            </div>
                          ) : packageListData?.count > 0 ? (
                            packageListData?.data.map((item, key) => (
                              <div
                                className="cursor-pointer hover:bg-gray-100 h-7 p-1 text-xs text-dark"
                                value={item.packages_category_aid}
                                key={key}
                                onClick={() => handleClickPackageList(item)}
                              >
                                {item.packages_category_name}
                              </div>
                            ))
                          ) : (
                            <div className="my-7">
                              <NoData />
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="input-wrapper mb-2">
                      <label htmlFor="form_content_purpose">Purpose</label>
                      <select
                        id="form_content_purpose"
                        name="form_content_purpose"
                        disabled={mutation.isPending}
                        value={props.values.form_content_purpose}
                        onChange={props.handleChange}
                        className="input-select h-[32px]"
                      >
                        <optgroup label="Select Purpose">
                          <option value="" hidden>
                            --
                          </option>
                          {purposeValue()?.map((item, key) => (
                            <option key={key} value={item.code}>
                              {item.name}
                            </option>
                          ))}
                        </optgroup>
                      </select>

                      {props.values.form_content_purpose &&
                        purposeValue()?.map((item, key) => {
                          if (item.code === props.values.form_content_purpose) {
                            if (item.name === "Get started LCS page") {
                              return (
                                <span className="text-xs" key={key}>
                                  Note: This is specifically for the "Get
                                  Started" form on the LCS page.
                                </span>
                              );
                            }
                            if (item.name === "Get started Careers page") {
                              return (
                                <span className="text-xs" key={key}>
                                  Note: This is specifically for the "Get
                                  Started" form on the Careers page.
                                </span>
                              );
                            }
                            if (item.name === "Partner with us LCS page") {
                              return (
                                <span className="text-xs" key={key}>
                                  Note: This is specifically for the "Partner
                                  With Us" form on the LCS page.
                                </span>
                              );
                            }
                            if (item.name === "Apply now LCS page") {
                              return (
                                <span className="text-xs" key={key}>
                                  Note: This is specifically for the "Apply Now"
                                  form on the LCS page.
                                </span>
                              );
                            }
                            if (item.name === "Apply now Careers page") {
                              return (
                                <span className="text-xs" key={key}>
                                  Note: This is specifically for the "Apply Now"
                                  form on the Careers page.
                                </span>
                              );
                            }
                            if (item.name === "Default") {
                              return (
                                <span className="text-xs" key={key}>
                                  Note: This applies to the following pages.
                                  <ul className="ml-9">
                                    <li>-Home</li>
                                    <li>-Web Application</li>
                                    <li>-Accounting Solutions</li>
                                    <li>-VA Solutions</li>
                                    <li>-Web Design/Development </li>
                                  </ul>
                                </span>
                              );
                            }
                            if (item.name === "Subscribers") {
                              return (
                                <span className="text-xs" key={key}>
                                  This is specifically for the "Subscribe" form
                                  on the Insight section.
                                </span>
                              );
                            }
                            if (
                              item.name ===
                              "Learn more Web Design and Development page"
                            ) {
                              return (
                                <span className="text-xs" key={key}>
                                  Note: This applies to the following pages.
                                  <ul className="ml-9">
                                    <li>-WordPress CMS Website</li>
                                    <li>-Single Page Website</li>
                                    <li>-Accounting Solutions</li>
                                    <li>-Web Design</li>
                                    <li>-Graphic Design</li>
                                  </ul>
                                </span>
                              );
                            }
                          }
                          return null;
                        })}
                    </div>

                    <div className="input-wrapper">
                      <InputText
                        label="Title"
                        type="text"
                        name="form_content_title"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Subtitle"
                        type="text"
                        name="form_content_subtitle"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className=" flex items-center gap-2 py-2">
                      <input
                        name="form_content_is_upload_file"
                        type="checkbox"
                        className="w-3 h-3 cursor-pointer"
                        checked={isCheck}
                        // value={isCheck}
                        onChange={handleCheckBox}
                      />
                      {isCheck ? (
                        <p className="text-xs flex gap-2 items-center">
                          Has upload file input
                          <FaCheckCircle className="text-primary" />
                        </p>
                      ) : (
                        <p className="text-xs flex gap-2 items-center text-gray-500">
                          Has upload file input <FaCheckCircle />
                        </p>
                      )}
                    </div>

                    <div className=" flex items-center gap-2 py-2">
                      <input
                        name="form_content_is_subject_input"
                        type="checkbox"
                        className="w-3 h-3 cursor-pointer"
                        checked={isCheckSubject}
                        // value={isCheck}
                        onChange={handleCheckBoxSubject}
                      />
                      {isCheckSubject ? (
                        <p className="text-xs flex gap-2 items-center">
                          Has subject input
                          <FaCheckCircle className="text-primary" />
                        </p>
                      ) : (
                        <p className="text-xs flex gap-2 items-center text-gray-500">
                          Has subject input <FaCheckCircle />
                        </p>
                      )}
                    </div>

                    <div className="input-wrapper">
                      <InputTextArea
                        label="Details"
                        type="text"
                        name="form_content_details"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="mt-3">
                      <span className="top-20 px-2 text-dark text-xs">
                        Upload File
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
                          label="Upload Image"
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
                              "form_content_portfolio"
                            )
                          }
                          onDrop={(e) =>
                            handleChangeFileUpload(
                              e,
                              props,
                              setPhotoArrayList,
                              "form_content_portfolio"
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

export default ModalAddContent;
