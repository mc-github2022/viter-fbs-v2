import React from "react";
import * as Yup from "yup";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "../../../../store/StoreAction";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiVersion } from "../../../../helpers/functions-general";
import { queryData } from "../../../../helpers/queryData";
import ModalAddWrapper from "../../../../partials/dashboard/ModalAddWrapper";
import { GrFormClose } from "react-icons/gr";
import { Form, Formik } from "formik";
import { InputText, InputTextArea } from "../../../../helpers/FormInputs";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";
import { StoreContext } from "../../../../store/StoreContext";
import useQueryData from "../../../../custom-hooks/useQueryData";

const ModalAddAudience = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [animate, setAnimate] = React.useState("translate-x-full");

  const [onFocusReplyTo, setOnFocusReplyTo] = React.useState(false);
  const [propertyReplyToValue, setPropertyReplyToValue] = React.useState(
    itemEdit ? `${itemEdit.packages_category_name}` : ""
  ); // to get the data from table when update
  const [replyTo, setReplyTo] = React.useState(
    itemEdit ? itemEdit.packages_category_name : ""
  );
  const [replyToId, setReplyToId] = React.useState(
    itemEdit ? itemEdit.packages_list_category_name_id : ""
  );

  const handleClose = () => {
    setAnimate("translate-x-full");
    setTimeout(() => {
      dispatch(setIsAdd(false));
    }, 200);
  };

  const {
    isFetching: replyToDataIsFetching,
    error: replyToDataError,
    data: replyToData,
  } = useQueryData(
    `${apiVersion}/packages-list/category-search`, // endpoint
    "post", // method
    "packages-list/category-search", // key
    {
      searchValue: replyTo, // payload
    },
    {
      searchValue: replyTo, // id
    },
    true // refetchOnWindowFocus
  );

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${apiVersion}/audience/${itemEdit.audience_aid}` // update
          : `${apiVersion}/audience`, // create
        itemEdit ? "put" : "post",
        values
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["audience"] });
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

  const handleClickreplyTo = (item) => {
    setReplyTo(item.packages_category_name);
    setPropertyReplyToValue(`${item.packages_category_name}`);
    setReplyToId(item.packages_category_aid);
    setOnFocusReplyTo(false);
  };

  const handleOnChangereplyTo = (e) => {
    setPropertyReplyToValue(e.target.value);
    setLoading(true);
    setReplyToId("");
    if (e.target.value === "") {
      setLoading(false);
    }

    let timeOut;

    timeOut = setTimeout(() => {
      clearTimeout(timeOut);
      let val = e.target.value;
      if (val === "") {
        setReplyTo(val);
        return;
      }
      setReplyTo(val);
      setLoading(false);
    }, 500); // debounce seconds to fetch
  };

  // to close the modal when clicking outside for Property type
  const refreplyTo = React.useRef();

  const clickOutsideRefreplyTo = (e) => {
    if (
      refreplyTo.current !== undefined &&
      refreplyTo.current !== null &&
      !refreplyTo.current?.contains(e.target)
    ) {
      setOnFocusReplyTo(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", clickOutsideRefreplyTo);
    return () => document.addEventListener("click", clickOutsideRefreplyTo);
  }, []);

  React.useEffect(() => {
    setAnimate("");
  }, []);

  const initVal = {
    audience_aid: itemEdit ? itemEdit.audience_aid : "",
    audience_name: itemEdit ? itemEdit.audience_name : "",
    audience_description: itemEdit ? itemEdit.audience_description : "",
    audience_code: itemEdit ? itemEdit.audience_code : "",

    audience_name_old: itemEdit ? itemEdit.audience_name : "",
  };

  const yupSchema = Yup.object({
    audience_name: Yup.string().required("Required"),
  });

  return (
    <ModalAddWrapper
      className={`transition-all ease-linear transform duration-200 ${animate}`}
      handleClose={handleClose}
    >
      <div className="modal-title">
        <h2 className="text-sm">{itemEdit ? "Edit" : "Add"} Audience</h2>
        <button onClick={handleClose}>
          <GrFormClose className="text-[25px]" />
        </button>
      </div>
      <div className="modal-content">
        <Formik
          initialValues={initVal}
          validationSchema={yupSchema}
          onSubmit={async (values) => {
            if (replyToId === "" || !replyToId) {
              dispatch(setError(true));
              dispatch(setMessage("Reply to is Required."));
              return;
            }
            const { audience_name } = values;
            // lowercase the role name and replace the space to underscore.
            const formattedAudienceName = audience_name
              .toLowerCase()
              .replace(/ /g, "_");
            const data = {
              ...values,
              audience_code: `audience_is_${formattedAudienceName}`,
            };
            mutation.mutate(data);
          }}
        >
          {(props) => {
            return (
              <Form className="modal-form">
                <div className="form-input">
                  <div className="input-wrapper">
                    <InputText
                      label="Audience Name"
                      type="text"
                      name="audience_name"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className="input-wrapper">
                    <InputTextArea
                      label="Audience Description"
                      type="text"
                      name="audience_description"
                      disabled={mutation.isPending}
                    />
                  </div>
                  <div className=" input-wrapper">
                    <InputText
                      label="Reply To"
                      type="text"
                      value={propertyReplyToValue}
                      name="packages_list_category_name_id"
                      disabled={mutation.isPending}
                      onFocus={() => setOnFocusReplyTo(true)}
                      onChange={handleOnChangereplyTo}
                      refVal={refreplyTo}
                    />
                    {onFocusReplyTo && (
                      <div className="w-full h-40 max-h-40 overflow-y-auto absolute top-[33px] bg-white shadow-md z-50 rounded-sm border border-gray-200 pt-1">
                        {loading || replyToDataIsFetching ? (
                          <TableSpinner />
                        ) : replyToDataError ? (
                          <div className="my-7">
                            <ServerError />
                          </div>
                        ) : replyToData?.count > 0 ? (
                          replyToData?.data.map((item, key) => (
                            <div
                              className="cursor-pointer hover:bg-gray-100 h-7 p-1 text-xs text-dark"
                              value={item.packages_category_aid}
                              key={key}
                              onClick={() => handleClickreplyTo(item)}
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
                </div>

                <div className="form-action">
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
  );
};

export default ModalAddAudience;
