import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import * as Yup from "yup";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { InputText, InputTextArea } from "../../../../helpers/FormInputs";
import { apiVersion } from "../../../../helpers/functions-general";
import { queryData } from "../../../../helpers/queryData";
import ModalAddWrapper from "../../../../partials/dashboard/ModalAddWrapper";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";
import NoData from "../../../../partials/spinners/NoData";
import ServerError from "../../../../partials/spinners/ServerError";
import TableSpinner from "../../../../partials/spinners/TableSpinner";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import { IoMdCloseCircle } from "react-icons/io";

const ModalAddDetails = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");
  const [loading, setLoading] = React.useState(false);
  const [isCheck, setIsCheck] = React.useState(false);
  const [isCheckClick, setIsCheckClick] = React.useState(false);

  const [onFocusPackagesList, setOnFocusPackagesList] = React.useState(false);
  const [propertyPackageListValue, setPropertyPackageListValue] =
    React.useState(
      itemEdit
        ? `${itemEdit.packages_category_name}, ${itemEdit.packages_list_title}`
        : ""
    ); // to get the data from table when update
  const [packageList, setPackageList] = React.useState(
    itemEdit ? itemEdit.packages_category_name : ""
  );
  const [packageListId, setPackageListId] = React.useState(
    itemEdit ? itemEdit.packages_details_list_id : ""
  );

  const handleClose = () => {
    setAnimate("translate-x-full");
    setTimeout(() => {
      dispatch(setIsAdd(false));
    }, 200);
  };

  const handleIsCheckClick = () => {
    setIsCheckClick(!isCheckClick);
    console.log(isCheckClick);
  };

  const handleCheckBox = (e) => {
    setIsCheck(e.target.checked);
    handleIsCheckClick();
  };

  const {
    isFetching: packageListDataIsFetching,
    error: packageListDataError,
    data: packageListData,
  } = useQueryData(
    `${apiVersion}/packages-details/list-search`, // endpoint
    "post", // method
    "packages-details/list-search", // key
    {
      searchValue: packageList, // payload
    },
    {
      searchValue: packageList, // id
    },
    true // refetchOnWindowFocus
  );

  // console.log(packageList);

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
          ? `${apiVersion}/packages-details/${itemEdit.packages_details_aid}` // update
          : `${apiVersion}/packages-details`, // create
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["packages-details"] });
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
  }, []);

  React.useEffect(() => {
    setIsCheck(itemEdit ? itemEdit.packages_details_is_highlighted : false);
  }, []);

  const initVal = {
    packages_details_list_id: itemEdit ? itemEdit.packages_details_list_id : "",
    packages_details_title: itemEdit ? itemEdit.packages_details_title : "",
    packages_details_list: itemEdit ? itemEdit.packages_details_list : "",
    packages_details_is_highlighted: itemEdit
      ? itemEdit.packages_details_is_highlighted
      : "",
  };

  const yupSchema = Yup.object({
    // packages_details_title: Yup.string().required("Required"),
  });

  return (
    <>
      <ModalAddWrapper
        className={`transition-all ease-linear transform duration-200 ${animate}`}
        handleClose={handleClose}
      >
        <div className="modal-title">
          <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} Details</h2>
          <button onClick={handleClose}>
            <GrFormClose className="text-[25px]" />
          </button>
        </div>
        <div className="modal-content">
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values) => {
              if (packageListId === "" || !packageListId) {
                dispatch(setError(true));
                dispatch(setMessage("Package is Required."));
                return;
              }
              const data = {
                ...values,
                packages_details_list_id: packageListId,
                packages_details_is_highlighted: isCheck,
              };

              mutation.mutate(data);
            }}
          >
            {(props) => {
              return (
                <Form className="modal-form">
                  <div className="form-input">
                    <div className=" ">
                      <div className=" input-wrapper">
                        <InputText
                          label="*Package"
                          type="text"
                          value={propertyPackageListValue}
                          name="packages_details_list_id"
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
                                  className="cursor-pointer hover:bg-gray-100 h-7 p-1 text-sm text-dark"
                                  value={item.packages_list_aid}
                                  key={key}
                                  onClick={() => handleClickPackageList(item)}
                                >
                                  {item.packages_category_name},
                                  {item.packages_list_title}
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

                      <div className="input-wrapper">
                        <InputText
                          label="*Title"
                          type="text"
                          name="packages_details_title"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="input-wrapper">
                        <InputTextArea
                          label="Details"
                          type="text"
                          name="packages_details_list"
                          disabled={mutation.isPending}
                        />
                      </div>

                      <div className=" flex items-center gap-2 py-2">
                        <input
                          name="packages_details_is_highlighted "
                          type="checkbox"
                          className="w-3 h-3 cursor-pointer"
                          checked={isCheck}
                          // value={isCheck}
                          onChange={handleCheckBox}
                        />
                        {isCheck ? (
                          <p className="text-xs flex gap-2 items-center">
                            Highlighted
                            <FaCheckCircle className="text-primary" />
                          </p>
                        ) : (
                          <p className="text-xs flex gap-2 items-center text-gray-500">
                            Highlighted <IoMdCloseCircle />
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="form-action bottom-0  w-full">
                    <div className="form-btn">
                      <button
                        className="btn-modal-submit"
                        type="submit"
                        disabled={mutation.isPending || !props.dirty}
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
    </>
  );
};

export default ModalAddDetails;
