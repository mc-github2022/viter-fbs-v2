import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { InputText, InputTextArea } from "../../../../helpers/FormInputs";
import { apiVersion } from "../../../../helpers/functions-general";
import Dashboard from "../../../../partials/dashboard/Dashboard";
import Navigation from "../../../../partials/dashboard/Navigation";
import ModalError from "../../../../partials/modals/ModalError";
import ModalSendingEmailStatus from "../../../../partials/modals/ModalSendingEmailStatus";
import ModalSentEmailSummary from "../../../../partials/modals/ModalSentEmailSummary";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";
import NoData from "../../../../partials/spinners/NoData";
import ServerError from "../../../../partials/spinners/ServerError";
import TableSpinner from "../../../../partials/spinners/TableSpinner";
import { StoreContext } from "../../../../store/StoreContext";
import ModalSend from "./ModalSend";

const Mailer = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [onRecipient, setOnRecipient] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [subscriberValue, setSubscriberValue] = React.useState("");
  const [subscriber, setSubscriber] = React.useState("");
  const [isSend, setIsSend] = React.useState(false);
  const [recipientList, setRecipientList] = React.useState([]);
  const [queryCount, setQueryCount] = React.useState(0);
  const [confirmSend, setConfirmSend] = React.useState(false);
  const [isSendingLoading, setIsSendingLoading] = React.useState(false);
  const [isSuccessSendingEmail, setIsSuccessSendingEmail] =
    React.useState(false);
  // let queryCount = 0;
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

  const {
    isLoading: roleIsLoading,
    isFetching: roleIsFetching,
    error: roleError,
    data: audienceData,
  } = useQueryData(
    `${apiVersion}/audience`, // endpoint
    "get", // method
    "audience" // key
  );

  // Join subscriberData with audienceData to get audience_name
  const enrichedSubscribers = subscriberData?.data?.map((subscriber) => {
    const matchingAudience = audienceData?.data?.find(
      (audience) => audience.audience_aid === subscriber.subscriber_audience_id
    );
    return {
      ...subscriber,
      audience_name: matchingAudience
        ? matchingAudience.audience_name
        : "Unknown",
    };
  });

  const subscriberCategories = [
    ...new Map(
      enrichedSubscribers?.map((sub) => [
        sub.subscriber_audience_id,
        {
          subscriber_audience_id: sub.subscriber_audience_id,
          audience_name: sub.audience_name,
        },
      ])
    ).values(),
  ];

  // const handleClickRecipient = (item, setFieldValue, val) => {
  //   console.log("Selected Recipient:", item);

  //   // Check if the selected item is "All Recipients"
  //   if (item === "All Recipients") {
  //     setSubscriberValue("All Recipients");
  //     setFieldValue("subscriber_email", item);
  //   } else {
  //     // show only the selected individual email
  //     setSubscriberValue(item);
  //     setFieldValue("subscriber_email", item);
  //     setSubscriber(item);
  //   }

  //   setOnRecipient(false);
  // };

  const handleClickRecipient = (item, setFieldValue, val) => {
    console.log("Selected Recipient:", item, val);

    // Check if the selected item is "All Recipients"
    if (item === "All Recipients") {
      setSubscriberValue("All Recipients");
      setFieldValue("subscriber_email", item);
      setRecipientList(subscriberData);
    }

    if (
      subscriberCategories.filter((category) =>
        category.audience_name.toLowerCase().includes(item)
      )
    ) {
      let res = [];
      setSubscriberValue(item); // Set the category name
      setFieldValue("subscriber_email", item);

      subscriberData?.count > 0 &&
        subscriberData?.data.map((item) => {
          if (item.subscriber_audience_id === val) {
            res.push(item);
          }
        });

      setRecipientList(res);
    }

    //  if (
    //   subscriberCategories.filter((category) =>
    //     category.audience_name.toLowerCase().includes(item)
    //   )
    // ) {
    //   setSubscriberValue(item); // Set the category name
    //   setFieldValue("subscriber_email", item);
    //   console.log("Category:", item);
    // } else {
    //   // Single email selection
    //   setSubscriberValue(item);
    //   setFieldValue("subscriber_email", item);
    // }

    setOnRecipient(false);
  };

  console.log(recipientList);

  let timeOut;

  const handleOnChangeSubscriber = (e, setFieldValue) => {
    const newValue = e.target.value;
    setSubscriberValue(newValue);
    setLoading(true);
    setSubscriber(newValue);

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
                  setIsSend(true);
                }}
              >
                {({ setFieldValue, values, dirty, isValid, resetForm }) => (
                  <Form>
                    <div className="grid grid-cols-[_1.5fr_2fr] gap-5 ">
                      <div className="">
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
                            disabled={isSendingLoading}
                          />
                          {onRecipient && (
                            <div className="w-full text-xs h-40 max-h-40 overflow-y-auto absolute top-[34px] bg-white shadow-md z-50 rounded-sm border border-gray-200">
                              {loading || subscriberDataIsFetching ? (
                                <TableSpinner />
                              ) : subscriberDataError ? (
                                <div className="my-7">
                                  <ServerError />
                                </div>
                              ) : subscriberData?.count > 0 ? (
                                <>
                                  <div
                                    className="cursor-pointer hover:bg-gray-100 px-2 py-1"
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

                                  <span className="font-bold px-2 py-1">
                                    By Audience
                                  </span>
                                  {subscriberCategories.map(
                                    (category, index) => (
                                      <div
                                        key={index}
                                        className="cursor-pointer hover:bg-gray-100 px-2 py-1"
                                        onClick={() =>
                                          handleClickRecipient(
                                            category.audience_name,
                                            setFieldValue,
                                            category.subscriber_audience_id
                                          )
                                        }
                                      >
                                        {category.audience_name}
                                      </div>
                                    )
                                  )}

                                  <span className="font-bold px-2 py-1">
                                    By Email
                                  </span>
                                  {subscriberData?.data.map((item, key) => (
                                    <div
                                      className="cursor-pointer hover:bg-gray-100 px-2 py-1"
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
                            disabled={isSendingLoading}
                          />
                        </div>
                        <div className="input-wrapper">
                          <span className="text-xs bg-[#f5f5f3]">
                            Paste Your HTML Code Here
                          </span>
                          <InputTextArea
                            type="text"
                            name="newsletter"
                            className="newsletter bg-[#2b2b2b] text-white h-[445px]"
                            value={values.newsletter}
                            onChange={(e) =>
                              setFieldValue("newsletter", e.target.value)
                            }
                            disabled={isSendingLoading}
                          />
                        </div>
                        <div className="form-action  bottom-0 w-full">
                          <div className="form-btn place-content-end">
                            <button
                              className="btn-modal-submit w-[200px]"
                              type="submit"
                              disabled={isSendingLoading || !dirty}
                            >
                              {isSendingLoading ? <ButtonSpinner /> : "Send"}
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="Preview md:min-h-[calc(75vh-35px)] lg:max-h-[calc(100vh-150px)] w-full border-[2px] border-gray-200 flex justify-center items-center rounded-lg">
                        {values.newsletter ? (
                          <div className="w-full">
                            <iframe
                              srcDoc={values.newsletter}
                              className="md:min-h-[calc(78vh-35px)] lg:max-h-[calc(90vh-150px)] border-none w-full"
                            />
                          </div>
                        ) : (
                          <p className="text-gray-400 text-xs">
                            No Preview Available
                          </p>
                        )}
                      </div>
                    </div>
                    {isSend && (
                      <ModalSend
                        item={values}
                        recipientList={recipientList}
                        setIsSend={setIsSend}
                        setConfirmSend={setConfirmSend}
                        setQueryCount={setQueryCount}
                        setIsSendingLoading={setIsSendingLoading}
                        isSendingLoading={isSendingLoading}
                        setIsSuccessSendingEmail={setIsSuccessSendingEmail}
                        resetForm={resetForm}
                      />
                    )}
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </Dashboard>
      </section>

      {confirmSend && (
        <ModalSendingEmailStatus
          queryCount={queryCount}
          recipientList={recipientList}
        />
      )}

      {isSuccessSendingEmail && (
        <ModalSentEmailSummary
          queryCount={queryCount}
          recipientList={recipientList}
          setIsSuccessSendingEmail={setIsSuccessSendingEmail}
        />
      )}

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Mailer;
