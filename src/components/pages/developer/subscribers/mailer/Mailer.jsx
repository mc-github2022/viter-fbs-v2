import React from "react";
import Navigation from "../../../../partials/dashboard/Navigation";
import Dashboard from "../../../../partials/dashboard/Dashboard";
import { Form, Formik } from "formik";
import {
  InputSelect,
  InputText,
  InputTextArea,
} from "../../../../helpers/FormInputs";
import { FaPlay } from "react-icons/fa";
import TableLoading from "../../../../partials/spinners/TableLoading";
import TableSpinner from "../../../../partials/spinners/TableSpinner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "../../../../store/StoreAction";
import { FaBedPulse } from "react-icons/fa6";
import * as Yup from "yup";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { apiVersion } from "../../../../helpers/functions-general";
import { queryData } from "../../../../helpers/queryData";
import ServerError from "../../../../partials/spinners/ServerError";
import NoData from "../../../../partials/spinners/NoData";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";
import { StoreContext } from "../../../../store/StoreContext";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ModalError from "../../../../partials/modals/ModalError";

const Mailer = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [onRecipient, setOnRecipient] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [subscriberValue, setSubscriberValue] = React.useState("");
  const [subscriber, setSubscriber] = React.useState("");
  const [filterValue, setFilterValue] = React.useState("");

  const {
    isFetching: subscriberDataIsFetching,
    error: subscriberDataError,
    data: subscriberData,
  } = useQueryData(
    `${apiVersion}/subscriber-search`, // endpoint
    "post", // method
    "subscriber-search", // key
    {
      searchValue: subscriber, // payload
    },
    {
      searchValue: subscriber, // id
    },
    true // refetchOnWindowFocus
  );

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(`${apiVersion}/sending-newsletter`, "post", values),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["sending-newsletter"] });
      // if (data.success) {
      //   dispatch(setSuccess(true));
      //   dispatch(setMessage(`Newsletter sucessfully sent.`));
      // }
      // // show error box
      // if (!data.success) {
      //   dispatch(setError(true));
      //   dispatch(setMessage(data.error));
      // }
    },
  });

  const handleClickRecipient = (item, setFieldValue, val) => {
    console.log("Selected Recipient:", item);
    setSubscriberValue(item);
    setFieldValue("subscriber_email", item);
    setFilterValue(val);
    setOnRecipient(false);
  };

  let timeOut;

  const handleOnChangeSubscriber = (e, setFieldValue) => {
    const newValue = e.target.value;
    setSubscriberValue(newValue);
    setLoading(true);

    clearTimeout(timeOut);

    timeOut = setTimeout(() => {
      setSubscriber(newValue);
      setLoading(false);

      setFieldValue("subscriber_email", newValue); // Set subscriber_email to the new value
    }, 500);
  };

  // to close the modal when clicking outside for Subscriber
  const refSubscriber = React.useRef();

  const clickOutsideRefSubscriber = (e) => {
    if (
      refSubscriber.current !== undefined &&
      refSubscriber.current !== null &&
      !refSubscriber.current?.contains(e.target)
    ) {
      setOnRecipient(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", clickOutsideRefSubscriber);
    return () => document.addEventListener("click", clickOutsideRefSubscriber);
  }, []);

  const initVal = {
    newsletter: "",
    newsletter_subject: "",
    subscriber_email: "",
  };

  const yupSchema = Yup.object({
    newsletter: Yup.string().required("Required"),
    newsletter_subject: Yup.string().required("Required"),
    subscriber_email: Yup.string()
      .test(
        "isValidRecipient",
        "Required",
        (value) => value === "All Recipients" || Boolean(value?.trim())
      )
      .required("Required"),
  });

  return (
    <>
      <section id="subscribers" className="bg-[#f5f5f3]">
        <Navigation menu="subscribers" submenu="mailer" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex justify-between ">
              <div className="text-sm text-[black] font-semibold">
                <h2>Newsletter Mailer</h2>
              </div>
            </div>
            <div className="pb-4">
              <Formik
                initialValues={initVal}
                validationSchema={yupSchema}
                onSubmit={async (values, { resetForm }) => {
                  // Validate the subscriber_email field
                  if (
                    !values.subscriber_email ||
                    values.subscriber_email.trim() === ""
                  ) {
                    dispatch(setError(true));
                    dispatch(setMessage("Subscriber is Required."));
                    return;
                  }

                  mutation.mutate(
                    { ...values, filterValue },
                    {
                      onSuccess: (data) => {
                        if (data.success) {
                          // Reset the form after successful submission
                          resetForm();
                          setSubscriberValue("");

                          dispatch(setSuccess(true));
                          dispatch(setMessage(`Newsletter successfully sent.`));
                        } else {
                          dispatch(setError(true));
                          dispatch(setMessage(data.error));
                        }
                      },
                    }
                  );
                }}
              >
                {({ setFieldValue, values, dirty }) => (
                  <Form>
                    <div className="grid grid-cols-[_1.5fr_2fr] gap-5">
                      <div>
                        <div className="input-wrapper">
                          <InputText
                            label="Recipient"
                            type="text"
                            value={subscriberValue}
                            name="subscriber_email"
                            onFocus={() => setOnRecipient(true)}
                            onChange={(e) =>
                              handleOnChangeSubscriber(e, setFieldValue)
                            }
                            refVal={refSubscriber}
                            disabled={mutation.isPending}
                          />
                          {onRecipient && (
                            <div className="w-full text-xs h-40 max-h-40 overflow-y-auto absolute top-[34px] bg-white shadow-md z-50 rounded-sm border border-gray-200 pt-1">
                              {loading || subscriberDataIsFetching ? (
                                <TableSpinner />
                              ) : subscriberDataError ? (
                                <div className="my-7">
                                  <ServerError />
                                </div>
                              ) : subscriberData?.count > 0 ? (
                                <>
                                  <div
                                    className="cursor-pointer hover:bg-gray-100 px-2"
                                    onClick={() =>
                                      handleClickRecipient(
                                        "All Recipients",
                                        setFieldValue,
                                        "all"
                                      )
                                    }
                                  >
                                    All Recipients
                                  </div>
                                  {subscriberData?.data.map((item, key) => (
                                    <div
                                      className="cursor-pointer hover:bg-gray-100 px-2"
                                      key={key}
                                      onClick={() =>
                                        handleClickRecipient(
                                          item.subscriber_email,
                                          setFieldValue,
                                          item.subscriber_email
                                        )
                                      }
                                    >
                                      {item.subscriber_email}
                                    </div>
                                  ))}
                                </>
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
                            label="Subject"
                            type="text"
                            name="newsletter_subject"
                            className="w-full"
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="input-wrapper ">
                          <InputTextArea
                            label="Paste Your HTML Code Here"
                            type="text"
                            name="newsletter"
                            className="h-[430px] bg-black text-white "
                            value={values.newsletter}
                            onChange={(e) =>
                              setFieldValue("newsletter", e.target.value)
                            }
                            disabled={mutation.isPending}
                          />
                        </div>
                        <div className="form-action  bottom-0 w-full">
                          <div className="form-btn place-content-end">
                            <button
                              className="btn-modal-submit w-[200px]"
                              type="submit"
                              disabled={mutation.isPending || !dirty}
                            >
                              {mutation.isPending ? <ButtonSpinner /> : "Send"}
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="Preview h-[600px]">
                        <div className="newsletter-content">
                          <iframe
                            srcDoc={values.newsletter}
                            style={{
                              width: "100%",
                              height: "600px",
                              border: "none",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </Dashboard>
      </section>

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Mailer;
