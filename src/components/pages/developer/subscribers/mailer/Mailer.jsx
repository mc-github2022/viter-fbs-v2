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

const Mailer = () => {
  // const [itemEdit, setItemEdit] = React.useState(null);
  // const [preview, setPreview] = React.useState(false);
  const [recipient, setRecipient] = React.useState("all");

  const [onRecipient, setOnRecipient] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [subscriberValue, setSubscriberValue] = React.useState("");
  const [subscriberId, setSubscriberId] = React.useState("");
  const [subscriber, setSubscriber] = React.useState("");

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

  // const activeSubscribers = subscriberData?.data.filter(
  //   (item) => item.subscriber_is_active === 1
  // );

  // const handlePreview = () => {
  //   setPreview(true);
  // };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(`${apiVersion}/sending-newsletter`, "post", values),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["sending-newsletter"] });
      if (data.success) {
        setPreview(false);
        dispatch(setSuccess(true));
        dispatch(setMessage(`Newsletter sucessfully sent.`));
      }
      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      }
    },
  });

  const handleClickRecipient = (item) => {
    setSubscriber(item.subscriber_email);
    setSubscriberValue(item.subscriber_email);
    setSubscriberId(item.subscriber_aid);
    setOnRecipient(false);
  };

  const handleOnChangeSubscriber = (e) => {
    setSubscriberValue(e.target.value);
    setLoading(true);
    setSubscriberId("");
    if (e.target.value === "") {
      setLoading(false);
    }

    let timeOut;

    timeOut = setTimeout(() => {
      clearTimeout(timeOut);
      let val = e.target.value;
      if (val === "") {
        setSubscriber(val);
        return;
      }
      setSubscriber(val);
      setLoading(false);
    }, 500); // debounce seconds to fetch
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
    subscriber_key: "",
  };

  const [formValues, setFormValues] = React.useState(initVal);

  const yupSchema = Yup.object({
    newsletter: Yup.string().required("Required"),
    newsletter_subject: Yup.string().required("Required"),
    subscriber_email: Yup.string().required("Required"),
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
                onSubmit={async (values) => {
                  // to set error message when the input of Subscriber doesnt have input or laman
                  if (subscriberId === "" || !subscriberId) {
                    dispatch(setError(true));
                    dispatch(setMessage("Subscriber is Required."));
                    return;
                  }
                  mutation.mutate(values);
                }}
              >
                {(props) => {
                  return (
                    <Form>
                      <div className="grid grid-cols-[_1.5fr_2fr] gap-5">
                        <div>
                          <div className="input-wrapper">
                            <InputText
                              label="Recipient"
                              type="text"
                              value={subscriberValue}
                              name="subscriber_email"
                              disabled={mutation.isPending}
                              onFocus={() => setOnRecipient(true)}
                              onChange={handleOnChangeSubscriber}
                              refVal={refSubscriber}
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
                                  subscriberData?.data.map((item, key) => (
                                    <div
                                      className="cursor-pointer hover:bg-gray-100 px-2"
                                      value={item.subscriber_aid}
                                      key={key}
                                      onClick={() => handleClickRecipient(item)}
                                    >
                                      {item.subscriber_email}
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
                              value={formValues.newsletter}
                              onChange={(e) =>
                                setFormValues({
                                  ...formValues,
                                  newsletter: e.target.value,
                                })
                              }
                              disabled={mutation.isPending}
                            />
                          </div>
                          <div className="form-action  bottom-0 w-full">
                            <div className="form-btn place-content-end">
                              <button
                                className="btn-modal-submit w-[200px]"
                                type="submit"
                              >
                                Send
                              </button>
                              {/* <button
                                className="btn-modal-cancel hover:bg-[#f3f3f3]  bg-[white] w-[200px]"
                                type="button"
                                onClick={handlePreview}
                              >
                                View Preview
                              </button> */}
                            </div>
                          </div>
                        </div>
                        <div className="Preview h-[600px] grid place-items-center overflow-y-auto">
                          <div className="newsletter-content">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: formValues.newsletter,
                              }}
                              className="newsletter-content"
                            />
                          </div>
                        </div>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </Dashboard>
      </section>
    </>
  );
};

export default Mailer;
