import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { FaCheckCircle, FaTrash } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import { IoMdCloseCircle } from "react-icons/io";
import * as Yup from "yup";
import useUploadMultiplePhoto from "../../../custom-hooks/useUploadMultiplePhoto";
import {
  InputFileUpload,
  InputSelect,
  InputText,
  InputTextArea,
} from "../../../helpers/FormInputs";
import {
  apiVersion,
  getConvertStringToJSONparseData,
  googleHDViewLink,
  googleViewLink,
} from "../../../helpers/functions-general";
import { queryData } from "../../../helpers/queryData";
import ModalAddWrapper from "../../../partials/dashboard/ModalAddWrapper";
import LoadImages from "../../../partials/LoadImages";
import ModalRemovedPhoto from "../../../partials/modals/ModalRemovedPhoto";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import { setError, setIsAdd, setMessage, setSuccess } from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";

const ModalAddContactFormSettings = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");
  const [withFile, setWithFile] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [fileData, setFileData] = React.useState({
    images: [],
    itemKey: null,
    props: null,
    type: "", // 'client' or 'logo'
  });
  const [isRemovedPhoto, setIsRemovedPhoto] = React.useState(false);
  const [isCheck, setIsCheck] = React.useState(false);
  const [isCheckPortfolio, setIsCheckPortfolio] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState(false);

  // const [onFocusPackagesList, setOnFocusPackagesList] = React.useState(false);
  // const [propertyPackageListValue, setPropertyPackageListValue] =
  //   React.useState(itemEdit ? `${itemEdit.packages_category_name}` : ""); // to get the data from table when update
  // const [packageList, setPackageList] = React.useState(
  //   itemEdit ? itemEdit.packages_category_name : ""
  // );
  // const [packageListId, setPackageListId] = React.useState(
  //   itemEdit ? itemEdit.form_page_id : ""
  // );

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

  const {
    uploadMultiplePhoto: uploadOJTProposalImages,
    handleChangeMultiplePhoto: handleChangeOJTProposalImages,
    setPhotoArrayList: setOJTProposalImages,
    photoArrayList: ojtProposalImages,
  } = useUploadMultiplePhoto(`${apiVersion}/upload-multiple-photo`, dispatch);

  const {
    uploadMultiplePhoto: uploadWorkImmersionImages,
    handleChangeMultiplePhoto: handleChangeWorkImmersionImages,
    setPhotoArrayList: setWorkImmersionImages,
    photoArrayList: workImmersionImages,
  } = useUploadMultiplePhoto(`${apiVersion}/upload-multiple-photo`, dispatch);

  const {
    uploadMultiplePhoto: uploadWebDesignImages,
    handleChangeMultiplePhoto: handleChangeWebDesignImages,
    setPhotoArrayList: setWebDesignImages,
    photoArrayList: webDesignImages,
  } = useUploadMultiplePhoto(`${apiVersion}/upload-multiple-photo`, dispatch);

  const {
    uploadMultiplePhoto: uploadGraphicDesignImages,
    handleChangeMultiplePhoto: handleChangeGraphicDesignImages,
    setPhotoArrayList: setGraphicDesignImages,
    photoArrayList: graphicDesignImages,
  } = useUploadMultiplePhoto(`${apiVersion}/upload-multiple-photo`, dispatch);

  // handle for file upload Image
  const handleChangeFileUploadClient = (
    e,
    props,
    setClientImages,
    fieldValue = ""
  ) => {
    handleChangeClientImages(e, 1);
    const files = e.target.files;
    if (files.length > 3) return e;
    let myFiles = Array.from(files);
    props.setFieldValue(fieldValue, myFiles);
    const oldFiles = clientImages?.length > 0 ? clientImages : [];
    setClientImages([...oldFiles, ...myFiles]);
  };

  // handle for file upload FBS Brochure
  const handleChangeFileUploadLogo = (
    e,
    props,
    setLogoImages,
    fieldValue = ""
  ) => {
    handleChangeLogoImages(e, 20);
    const files = e.target.files;
    if (files.length > 3) return e;
    let myFiles = Array.from(files);
    props.setFieldValue(fieldValue, myFiles);
    const oldFiles = logoImages?.length > 0 ? logoImages : [];
    setLogoImages([...oldFiles, ...myFiles]);
  };

  // handle for file upload OJT Proposal
  const handleChangeFileUploadOJTProposal = (
    e,
    props,
    setOJTProposalImages,
    fieldValue = ""
  ) => {
    handleChangeOJTProposalImages(e, 20);
    const files = e.target.files;
    if (files.length > 3) return e;
    let myFiles = Array.from(files);
    props.setFieldValue(fieldValue, myFiles);
    const oldFiles = ojtProposalImages?.length > 0 ? ojtProposalImages : [];
    setOJTProposalImages([...oldFiles, ...myFiles]);
  };

  // handle for file upload Work Immersion
  const handleChangeFileUploadWorkImmersion = (
    e,
    props,
    setWorkImmersionImages,
    fieldValue = ""
  ) => {
    handleChangeWorkImmersionImages(e, 20);
    const files = e.target.files;
    if (files.length > 3) return e;
    let myFiles = Array.from(files);
    props.setFieldValue(fieldValue, myFiles);
    const oldFiles = workImmersionImages?.length > 0 ? workImmersionImages : [];
    setWorkImmersionImages([...oldFiles, ...myFiles]);
  };

  // handle for file upload Web design
  const handleChangeFileUploadWebDesign = (
    e,
    props,
    setWebDesignImages,
    fieldValue = ""
  ) => {
    handleChangeWebDesignImages(e, 20);
    const files = e.target.files;
    if (files.length > 3) return e;
    let myFiles = Array.from(files);
    props.setFieldValue(fieldValue, myFiles);
    const oldFiles = webDesignImages?.length > 0 ? webDesignImages : [];
    setWebDesignImages([...oldFiles, ...myFiles]);
  };

  // handle for file upload Graphic design
  const handleChangeFileUploadGraphicDesign = (
    e,
    props,
    setGraphicDesignImages,
    fieldValue = ""
  ) => {
    handleChangeGraphicDesignImages(e, 20);
    const files = e.target.files;
    if (files.length > 3) return e;
    let myFiles = Array.from(files);
    props.setFieldValue(fieldValue, myFiles);
    const oldFiles = graphicDesignImages?.length > 0 ? graphicDesignImages : [];
    setGraphicDesignImages([...oldFiles, ...myFiles]);
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
  const handleRemovePhoto = (photos, key, props, type) => {
    if (mutation.isPending || loading) return;
    setFileData({ images: photos, itemKey: key, props, type });
    setIsRemovedPhoto(true);
  };

  const handleClose = () => {
    setAnimate("translate-x-full");
    setTimeout(() => {
      dispatch(setIsAdd(false));
    }, 200);
  };

  React.useEffect(() => {
    setIsCheck(itemEdit ? itemEdit.form_is_upload_input : false);
    setIsCheckPortfolio(itemEdit ? itemEdit.form_is_upload_file : false);
  }, []);

  // const {
  //   isFetching: packageListDataIsFetching,
  //   error: packageListDataError,
  //   data: packageListData,
  // } = useQueryData(
  //   `${apiVersion}/packages-list/category-search`, // endpoint
  //   "post", // method
  //   "packages-list/category-search", // key
  //   {
  //     searchValue: packageList, // payload
  //   },
  //   {
  //     searchValue: packageList, // id
  //   },
  //   true // refetchOnWindowFocus
  // );

  // // console.log(packageList);

  // const handleClickPackageList = (item) => {
  //   setPackageList(item.packages_category_name);
  //   setPropertyPackageListValue(`${item.packages_category_name}`);
  //   setPackageListId(item.packages_category_aid);
  //   setOnFocusPackagesList(false);
  // };

  // const handleOnChangePackageList = (e) => {
  //   setPropertyPackageListValue(e.target.value);
  //   setLoading(true);
  //   setPackageListId("");
  //   if (e.target.value === "") {
  //     setLoading(false);
  //   }

  //   let timeOut;

  //   timeOut = setTimeout(() => {
  //     clearTimeout(timeOut);
  //     let val = e.target.value;
  //     if (val === "") {
  //       setPackageList(val);
  //       return;
  //     }
  //     setPackageList(val);
  //     setLoading(false);
  //   }, 500); // debounce seconds to fetch
  // };

  // // to close the modal when clicking outside for Property type
  // const refPackageList = React.useRef();

  // const clickOutsideRefPackageList = (e) => {
  //   if (
  //     refPackageList.current !== undefined &&
  //     refPackageList.current !== null &&
  //     !refPackageList.current?.contains(e.target)
  //   ) {
  //     setOnFocusPackagesList(false);
  //   }
  // };

  // React.useEffect(() => {
  //   document.addEventListener("click", clickOutsideRefPackageList);
  //   return () => document.addEventListener("click", clickOutsideRefPackageList);
  // }, []);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${apiVersion}/contactForm/${itemEdit.form_aid}` // update
          : `${apiVersion}/contactForm`, // create
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
        dispatch(setIsAdd(false));
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully ${itemEdit ? "Updated" : "Added"}.`));
      }
    },
  });

  React.useEffect(() => {
    setAnimate("");
    if (itemEdit) {
      const clientPhotos = getConvertStringToJSONparseData(itemEdit.form_img);
      setClientImages(clientPhotos);
    }
    if (itemEdit) {
      const logoPhotos = getConvertStringToJSONparseData(
        itemEdit.form_fbs_brochure
      );
      setLogoImages(logoPhotos);
    }
    if (itemEdit) {
      const ojtProposalPhotos = getConvertStringToJSONparseData(
        itemEdit.form_ojt_proposal
      );
      setOJTProposalImages(ojtProposalPhotos);
    }
    if (itemEdit) {
      const workImmersionPhotos = getConvertStringToJSONparseData(
        itemEdit.form_work_immersion
      );
      setWorkImmersionImages(workImmersionPhotos);
    }
    if (itemEdit) {
      const webDesignPhotos = getConvertStringToJSONparseData(
        itemEdit.form_website_design
      );
      setWebDesignImages(webDesignPhotos);
    }
    if (itemEdit) {
      const graphicDesignPhotos = getConvertStringToJSONparseData(
        itemEdit.form_graphic_design
      );
      setGraphicDesignImages(graphicDesignPhotos);
    }
  }, []);

  React.useEffect(() => {
    if (itemEdit?.form_services) {
      setSelectedService(itemEdit.form_services);
    }
  }, [itemEdit]);

  const initVal = {
    form_fbs_brochure: itemEdit ? itemEdit.form_fbs_brochure : "",
    form_ojt_proposal: itemEdit ? itemEdit.form_ojt_proposal : "",
    form_work_immersion: itemEdit ? itemEdit.form_work_immersion : "",
    form_website_design: itemEdit ? itemEdit.form_website_design : "",
    form_graphic_design: itemEdit ? itemEdit.form_graphic_design : "",
    form_img: itemEdit ? itemEdit.form_img : "",
    form_name: itemEdit ? itemEdit.form_name : "",
    form_title: itemEdit ? itemEdit.form_title : "",
    form_subtitle: itemEdit ? itemEdit.form_subtitle : "",
    form_address: itemEdit ? itemEdit.form_address : "",
    form_accounting_no: itemEdit ? itemEdit.form_accounting_no : "",
    form_company_no: itemEdit ? itemEdit.form_company_no : "",
    form_web_no: itemEdit ? itemEdit.form_web_no : "",
    form_services: itemEdit ? itemEdit.form_services : "",
    form_facebook_link: itemEdit ? itemEdit.form_facebook_link : "",
    form_linkedin_link: itemEdit ? itemEdit.form_linkedin_link : "",
    form_youtube_link: itemEdit ? itemEdit.form_youtube_link : "",
    form_instagram_link: itemEdit ? itemEdit.form_instagram_link : "",
    form_tiktok_link: itemEdit ? itemEdit.form_tiktok_link : "",
    form_is_upload_file: itemEdit ? itemEdit.form_is_upload_file : "",
    form_is_upload_input: itemEdit ? itemEdit.form_is_upload_input : "",

    form_default_email: itemEdit ? itemEdit.form_default_email : "",
    form_web_role: itemEdit ? itemEdit.form_web_role : "",
    form_web_name: itemEdit ? itemEdit.form_web_name : "",
    form_web_email: itemEdit ? itemEdit.form_web_email : "",
    form_computer_role: itemEdit ? itemEdit.form_computer_role : "",
    form_computer_name: itemEdit ? itemEdit.form_computer_name : "",
    form_computer_email: itemEdit ? itemEdit.form_computer_email : "",
    form_accounting_role: itemEdit ? itemEdit.form_accounting_role : "",
    form_accounting_name: itemEdit ? itemEdit.form_accounting_name : "",
    form_accounting_email: itemEdit ? itemEdit.form_accounting_email : "",
    form_hr_manager_role: itemEdit ? itemEdit.form_hr_manager_role : "",
    form_hr_manager_name: itemEdit ? itemEdit.form_hr_manager_name : "",
    form_hr_manager_email: itemEdit ? itemEdit.form_hr_manager_email : "",
    form_hr_staff_role: itemEdit ? itemEdit.form_hr_staff_role : "",
    form_hr_staff_name: itemEdit ? itemEdit.form_hr_staff_name : "",
    form_hr_staff_email: itemEdit ? itemEdit.form_hr_staff_email : "",

    form_fbs_brochure_old: itemEdit ? itemEdit.form_fbs_brochure : "",
    form_ojt_proposal_old: itemEdit ? itemEdit.form_ojt_proposal : "",
    form_work_immersion_old: itemEdit ? itemEdit.form_work_immersion : "",
    form_website_design_old: itemEdit ? itemEdit.form_website_design : "",
    form_graphic_design_old: itemEdit ? itemEdit.form_graphic_design : "",
    form_img_old: itemEdit ? itemEdit.form_img : "",
    pendingDeleteFile: [],
  };

  const yupSchema = Yup.object({
    form_name: Yup.string().required("Required"),
    form_services: Yup.string().required("Required"),
  });

  return (
    <>
      <ModalAddWrapper
        className={`transition-all ease-linear transform duration-200 ${animate}`}
        handleClose={handleClose}
      >
        <div className="modal-title">
          <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} Contact Form</h2>
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
                form_is_upload_input: isCheck,
                form_is_upload_file: isCheckPortfolio,
                form_img: clientImages.map((item) =>
                  JSON.stringify({
                    name: item.name,
                    id: item?.id || "",
                  })
                ),
                form_fbs_brochure: logoImages.map((item) =>
                  JSON.stringify({
                    name: item.name,
                    id: item?.id || "",
                  })
                ),
                form_ojt_proposal: ojtProposalImages.map((item) =>
                  JSON.stringify({
                    name: item.name,
                    id: item?.id || "",
                  })
                ),
                form_work_immersion: workImmersionImages.map((item) =>
                  JSON.stringify({
                    name: item.name,
                    id: item?.id || "",
                  })
                ),
                form_website_design: webDesignImages.map((item) =>
                  JSON.stringify({
                    name: item.name,
                    id: item?.id || "",
                  })
                ),
                form_graphic_design: graphicDesignImages.map((item) =>
                  JSON.stringify({
                    name: item.name,
                    id: item?.id || "",
                  })
                ),
              };

              // Upload separately
              const clientPhotoUpload = await uploadClientImages(clientImages);
              const logoPhotoUpload = await uploadLogoImages(logoImages);
              const ojtProposalPhotoUpload = await uploadOJTProposalImages(
                ojtProposalImages
              );
              const workImmersionPhotoUpload = await uploadWorkImmersionImages(
                workImmersionImages
              );
              const webDesignPhotoUpload = await uploadWebDesignImages(
                webDesignImages
              );
              const graphicDesignPhotoUpload = await uploadGraphicDesignImages(
                graphicDesignImages
              );

              if (
                clientPhotoUpload?.success ||
                logoPhotoUpload?.success ||
                ojtProposalPhotoUpload?.success ||
                workImmersionPhotoUpload?.success ||
                webDesignPhotoUpload?.success ||
                graphicDesignPhotoUpload?.success
              ) {
                setLoading(false);
              }

              if (!loading) console.log(data);
              mutation.mutate(data);
            }}
          >
            {(props) => {
              const handleCheckBox = (e) => {
                setIsCheck(e.target.checked);
                props.setFieldValue("form_is_upload_input", e.target.checked);
              };

              const handleCheckBoxPortfolio = (e) => {
                setIsCheckPortfolio(e.target.checked);
                props.setFieldValue("form_is_upload_file", e.target.checked);
              };
              return (
                <Form className="modal-form">
                  <div className="form-input">
                    <div className="relative">
                      <label className=" top-[16px] text-dark text-xs">
                        Upload Image
                      </label>
                      <div
                        className={`relative mt-4 mb-4 border border-gray-300 rounded-md hover:border-primary hover:border-dashed text-xs ${
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
                          title="Upload Image"
                          onChange={(e) =>
                            handleChangeFileUploadClient(
                              e,
                              props,
                              setClientImages,
                              "form_img"
                            )
                          }
                          onDrop={(e) =>
                            handleChangeFileUploadClient(
                              e,
                              props,
                              setClientImages,
                              "form_img"
                            )
                          }
                          disabled={mutation.isPending || loading}
                          className="opacity-0 absolute right-0 bottom-0 left-0 m-auto cursor-pointer h-full z-20"
                        />
                      </div>

                      <div className="relative ">
                        <ol className="flex flex-wrap gap-5 justify-center bg-gray-300 ">
                          {clientImages.length > 0 &&
                            clientImages.map((item, key) => {
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
                                        clientImages,
                                        key
                                      );
                                    }}
                                  >
                                    <LoadImages
                                      url={fileLink}
                                      className="relative z-20 w-full h-full object-cover object-center"
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
                    {/* <div className=" input-wrapper">
                      <InputText
                        label="*Page"
                        type="text"
                        value={propertyPackageListValue}
                        name="form_page_id"
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
                    </div> */}
                    <div className="input-wrapper">
                      <InputText
                        label="*Form Name"
                        type="text"
                        name="form_name"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Title"
                        type="text"
                        name="form_title"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Subtitle"
                        type="text"
                        name="form_subtitle"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputTextArea
                        label="Address"
                        type="text"
                        name="form_address"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Main & Accounting No."
                        type="text"
                        name="form_accounting_no"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Company No."
                        type="text"
                        name="form_company_no"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Web Office No."
                        type="text"
                        name="form_web_no"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputSelect
                        label="Services"
                        type="text"
                        name="form_services"
                        disabled={mutation.isPending}
                        onChange={(e) => setSelectedService(e.target.value)}
                      >
                        <option value="" disabled>
                          Select Services
                        </option>
                        <option value="default">Default</option>
                        <option value="web services">Web Services</option>
                        <option value="lcss services">LCSS Services</option>
                        <option value="career">Career</option>
                      </InputSelect>
                    </div>
                    {selectedService === "default" ? (
                      <div className="input-wrapper">
                        <InputText
                          label="Email"
                          type="text"
                          name="form_default_email"
                          disabled={mutation.isPending}
                        />
                      </div>
                    ) : selectedService === "web services" ? (
                      <>
                        <div className="input-wrapper">
                          <InputText
                            label="Role"
                            type="text"
                            name="form_web_role"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputText
                            label="Name"
                            type="text"
                            name="form_web_name"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputText
                            label="Email"
                            type="text"
                            name="form_web_email"
                            disabled={mutation.isPending}
                          />
                        </div>
                      </>
                    ) : selectedService === "lcss services" ? (
                      <>
                        <div className="input-wrapper">
                          <InputText
                            label="IT Instructor Role"
                            type="text"
                            name="form_computer_role"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputText
                            label="IT Instructor Name"
                            type="text"
                            name="form_computer_name"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputText
                            label="IT Instructor Email"
                            type="text"
                            name="form_computer_email"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputText
                            label="Accounting Instructor Role"
                            type="text"
                            name="form_accounting_role"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputText
                            label="Accounting Instructor Name"
                            type="text"
                            name="form_accounting_name"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputText
                            label="Accounting Instructor Email"
                            type="text"
                            name="form_accounting_email"
                            disabled={mutation.isPending}
                          />
                        </div>
                      </>
                    ) : selectedService === "career" ? (
                      <>
                        <div className="input-wrapper">
                          <InputText
                            label="HR Manager Role"
                            type="text"
                            name="form_hr_manager_role"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputText
                            label="HR Manager Name"
                            type="text"
                            name="form_hr_manager_name"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputText
                            label="HR Manager Email"
                            type="text"
                            name="form_hr_manager_email"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputText
                            label="HR Staff Role"
                            type="text"
                            name="form_hr_staff_role"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputText
                            label="HR Staff Name"
                            type="text"
                            name="form_hr_staff_name"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper">
                          <InputText
                            label="HR Staff Email"
                            type="text"
                            name="form_hr_staff_email"
                            disabled={mutation.isPending}
                          />
                        </div>
                      </>
                    ) : (
                      ""
                    )}

                    <div className="input-wrapper">
                      <InputText
                        label="Facebook Link"
                        type="text"
                        name="form_facebook_link"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="LinkedIn Link"
                        type="text"
                        name="form_linkedin_link"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Youtube Link"
                        type="text"
                        name="form_youtube_link"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Instagram Link"
                        type="text"
                        name="form_instagram_link"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="input-wrapper">
                      <InputText
                        label="Tiktok Link"
                        type="text"
                        name="form_tiktok_link"
                        disabled={mutation.isPending}
                      />
                    </div>

                    <div className=" flex items-center gap-2 py-2">
                      <input
                        name="form_is_upload_input"
                        type="checkbox"
                        className="w-3 h-3 cursor-pointer"
                        checked={isCheck}
                        // value={isCheck}
                        onChange={handleCheckBox}
                      />
                      {isCheck ? (
                        <p className="text-xs flex gap-2 items-center">
                          Use uploading file
                          <FaCheckCircle className="text-primary" />
                        </p>
                      ) : (
                        <p className="text-xs flex gap-2 items-center text-gray-500">
                          Use uploading file <IoMdCloseCircle />
                        </p>
                      )}
                    </div>

                    <div className=" flex items-center gap-2 py-2">
                      <input
                        name="form_is_upload_input"
                        type="checkbox"
                        className="w-3 h-3 cursor-pointer"
                        checked={isCheckPortfolio}
                        // value={isCheckPortfolio}
                        onChange={handleCheckBoxPortfolio}
                      />
                      {isCheckPortfolio ? (
                        <p className="text-xs flex gap-2 items-center">
                          Use download file
                          <FaCheckCircle className="text-primary" />
                        </p>
                      ) : (
                        <p className="text-xs flex gap-2 items-center text-gray-500">
                          Use download file <IoMdCloseCircle />
                        </p>
                      )}
                    </div>

                    {isCheckPortfolio ? (
                      <>
                        <div className="flex flex-col gap-2 mt-1">
                          {/* FBS Brochure */}
                          <div className="relative">
                            <label className=" top-[32px]  text-dark text-xs">
                              Upload FBS Brochure
                            </label>
                            <div
                              className={`relative mt-4 mb-4 border border-gray-300 rounded-md hover:border-primary hover:border-dashed text-xs ${
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
                                onChange={(e) =>
                                  handleChangeFileUploadLogo(
                                    e,
                                    props,
                                    setLogoImages,
                                    "form_fbs_brochure"
                                  )
                                }
                                onDrop={(e) =>
                                  handleChangeFileUploadLogo(
                                    e,
                                    props,
                                    setLogoImages,
                                    "form_fbs_brochure"
                                  )
                                }
                                disabled={mutation.isPending || loading}
                                className="opacity-0 absolute right-0 bottom-0 left-0 m-auto cursor-pointer h-full z-20"
                              />
                            </div>

                            <div className="relative ">
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

                          {/* OJT Proposal */}
                          <div className="relative">
                            <label className=" top-[32px]  text-dark text-xs">
                              Upload OJT Proposal
                            </label>
                            <div
                              className={`relative mt-4 mb-4 border border-gray-300 rounded-md hover:border-primary hover:border-dashed text-xs ${
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
                                onChange={(e) =>
                                  handleChangeFileUploadOJTProposal(
                                    e,
                                    props,
                                    setOJTProposalImages,
                                    "form_ojt_proposal"
                                  )
                                }
                                onDrop={(e) =>
                                  handleChangeFileUploadOJTProposal(
                                    e,
                                    props,
                                    setOJTProposalImages,
                                    "form_ojt_proposal"
                                  )
                                }
                                disabled={mutation.isPending || loading}
                                className="opacity-0 absolute right-0 bottom-0 left-0 m-auto cursor-pointer h-full z-20"
                              />
                            </div>

                            <div className="relative ">
                              <ol className="flex flex-wrap gap-5 justify-center bg-gray-300 ">
                                {ojtProposalImages.length > 0 &&
                                  ojtProposalImages.map((item, key) => {
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
                                              ojtProposalImages,
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
                                                      ojtProposalImages,
                                                      key,
                                                      props,
                                                      "ojt proposal"
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

                          {/* Work Immersion */}
                          <div className="relative">
                            <label className=" top-[32px]  text-dark text-xs">
                              Upload Work Immersion Proposal
                            </label>
                            <div
                              className={`relative mt-4 mb-4 border border-gray-300 rounded-md hover:border-primary hover:border-dashed text-xs ${
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
                                onChange={(e) =>
                                  handleChangeFileUploadWorkImmersion(
                                    e,
                                    props,
                                    setWorkImmersionImages,
                                    "form_work_immersion"
                                  )
                                }
                                onDrop={(e) =>
                                  handleChangeFileUploadWorkImmersion(
                                    e,
                                    props,
                                    setWorkImmersionImages,
                                    "form_work_immersion"
                                  )
                                }
                                disabled={mutation.isPending || loading}
                                className="opacity-0 absolute right-0 bottom-0 left-0 m-auto cursor-pointer h-full z-20"
                              />
                            </div>

                            <div className="relative ">
                              <ol className="flex flex-wrap gap-5 justify-center bg-gray-300 ">
                                {workImmersionImages.length > 0 &&
                                  workImmersionImages.map((item, key) => {
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
                                              workImmersionImages,
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
                                                      workImmersionImages,
                                                      key,
                                                      props,
                                                      "work immersion"
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

                          {/* Web Design */}
                          <div className="relative">
                            <label className=" top-[32px]  text-dark text-xs">
                              Upload Web Design and Development Portfolio
                            </label>
                            <div
                              className={`relative mt-4 mb-4 border border-gray-300 rounded-md hover:border-primary hover:border-dashed text-xs ${
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
                                onChange={(e) =>
                                  handleChangeFileUploadWebDesign(
                                    e,
                                    props,
                                    setWebDesignImages,
                                    "form_website_design"
                                  )
                                }
                                onDrop={(e) =>
                                  handleChangeFileUploadWebDesign(
                                    e,
                                    props,
                                    setWebDesignImages,
                                    "form_website_design"
                                  )
                                }
                                disabled={mutation.isPending || loading}
                                className="opacity-0 absolute right-0 bottom-0 left-0 m-auto cursor-pointer h-full z-20"
                              />
                            </div>

                            <div className="relative ">
                              <ol className="flex flex-wrap gap-5 justify-center bg-gray-300 ">
                                {webDesignImages.length > 0 &&
                                  webDesignImages.map((item, key) => {
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
                                              webDesignImages,
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
                                                      webDesignImages,
                                                      key,
                                                      props,
                                                      "web design"
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

                          {/* Graphic Design */}
                          <div className="relative">
                            <label className=" top-[32px]  text-dark text-xs">
                              Upload Graphic Design Portfolio
                            </label>
                            <div
                              className={`relative mt-4 mb-4 border border-gray-300 rounded-md hover:border-primary hover:border-dashed text-xs ${
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
                                onChange={(e) =>
                                  handleChangeFileUploadGraphicDesign(
                                    e,
                                    props,
                                    setGraphicDesignImages,
                                    "form_graphic_design"
                                  )
                                }
                                onDrop={(e) =>
                                  handleChangeFileUploadGraphicDesign(
                                    e,
                                    props,
                                    setGraphicDesignImages,
                                    "form_graphic_design"
                                  )
                                }
                                disabled={mutation.isPending || loading}
                                className="opacity-0 absolute right-0 bottom-0 left-0 m-auto cursor-pointer h-full z-20"
                              />
                            </div>

                            <div className="relative ">
                              <ol className="flex flex-wrap gap-5 justify-center bg-gray-300 ">
                                {graphicDesignImages.length > 0 &&
                                  graphicDesignImages.map((item, key) => {
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
                                              graphicDesignImages,
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
                                                      graphicDesignImages,
                                                      key,
                                                      props,
                                                      "graphic design"
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
                      </>
                    ) : (
                      ""
                    )}
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
          setNewFile={
            fileData.type === "client"
              ? setClientImages
              : fileData.type === "ojt proposal"
              ? setOJTProposalImages
              : fileData.type === "work immersion"
              ? setWorkImmersionImages
              : fileData.type === "web design"
              ? setWebDesignImages
              : fileData.type === "graphic design"
              ? setGraphicDesignImages
              : setLogoImages
          }
        />
      )}
    </>
  );
};

export default ModalAddContactFormSettings;
