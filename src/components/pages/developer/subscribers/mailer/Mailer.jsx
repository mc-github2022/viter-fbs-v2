import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { InputText, InputTextArea } from "../../../../helpers/FormInputs";
import { apiVersion, formatDate } from "../../../../helpers/functions-general";
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
import { setIsSubsOpen } from "../../../../store/StoreAction";
import useUploadFiles from "../../../../custom-hooks/useUploadFiles";

const Mailer = ({ itemEdit }) => {
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
  const [queryStatus, setQueryStatus] = React.useState(null);

  const [mailType, setMailType] = React.useState("Draft");
  const [sender, setSender] = React.useState("admin");

  const [onFocusNewsletter, setOnFocusNewsletter] = React.useState(false);
  const [propertyNewsletterValue, setPropertyNewsletterValue] = React.useState(
    itemEdit ? `${itemEdit.newsletter_subject}` : "",
  ); // to get the data from table when update
  const [newsletter, setNewsletter] = React.useState(
    itemEdit ? itemEdit.newsletter_subject : "",
  );
  const [newsletterContent, setNewsletterContent] = React.useState(
    itemEdit ? itemEdit.newsletter : "",
  );

  const { uploadFiles, handleChangeFiles, newfile } = useUploadFiles(
    `${apiVersion}/upload-files`,
    dispatch,
  );

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
    true, // refetchOnWindowFocus
  );

  const {
    isLoading: roleIsLoading,
    isFetching: roleIsFetching,
    error: roleError,
    data: audienceData,
  } = useQueryData(
    `${apiVersion}/audience`, // endpoint
    "get", // method
    "audience", // key
  );

  const {
    isFetching: newsletterDataIsFetching,
    error: newsletterDataError,
    data: newsletterData,
  } = useQueryData(
    `${apiVersion}/newsletter-search`, // endpoint
    "post", // method
    "newsletter-search", // key
    {
      searchValue: newsletter, // payload
    },
    {
      searchValue: newsletter, // id
    },
    true, // refetchOnWindowFocus
  );

  const firstnameProfile = store.credentials.data.first_name;
  const role = store.credentials.data.role_name;

  // Join subscriberData with audienceData to get audience_name
  const enrichedSubscribers = subscriberData?.data?.map((subscriber) => {
    const matchingAudience = audienceData?.data?.find(
      (audience) => audience.audience_aid === subscriber.subscriber_audience_id,
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
      ]),
    ).values(),
  ];

  const handleClickRecipient = (item, setFieldValue, val) => {
    console.log("Selected Recipient:", item, val);

    // Check if the selected item is "All Recipients"
    if (item === "All Recipients") {
      setSubscriberValue("All Recipients");
      setFieldValue("subscriber_email", item);
      setRecipientList(subscriberData);
      console.log("all-recipient");
      return;
    }

    if (val === "by-email") {
      let res = [];

      setSubscriberValue(item);
      setFieldValue("subscriber_email", item);
      setSubscriber(item);
      subscriberData?.count > 0 &&
        subscriberData?.data.filter((subsItem) => {
          if (subsItem.subscriber_email === item) {
            res.push(subsItem);
          }
        });

      setRecipientList({ data: res, count: res?.length });
      console.log("per email");
      return;
    }

    let res = [];
    setSubscriberValue(item); // Set the category name
    setFieldValue("subscriber_email", item);

    subscriberData?.count > 0 &&
      subscriberData?.data.filter((subsItem) => {
        if (subsItem.subscriber_audience_id === val) {
          res.push(subsItem);
        }
      });

    setRecipientList({ data: res, count: res?.length });
    console.log("per audience");

    setOnRecipient(false);
  };

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

  React.useEffect(() => {
    dispatch(setIsSubsOpen(false));
  }, []);

  const handleClickNewsletterList = (item, setFieldValue) => {
    setNewsletter(item.newsletter_subject);
    setPropertyNewsletterValue(`${item.newsletter_subject}`);
    setNewsletterContent(item.newsletter_content);
    setOnFocusNewsletter(false);

    // to update InputTextArea and iframe
    setFieldValue("newsletter", item.newsletter_content);
    setFieldValue("newsletter_subject", item.newsletter_subject);
  };

  const handleOnChangeNewsletterList = (e) => {
    setPropertyNewsletterValue(e.target.value);
    setLoading(true);
    setNewsletterContent("");
    if (e.target.value === "") {
      setLoading(false);
    }

    let timeOut;

    timeOut = setTimeout(() => {
      clearTimeout(timeOut);
      let val = e.target.value;
      if (val === "") {
        setNewsletter(val);
        return;
      }
      setNewsletter(val);
      setLoading(false);
    }, 500); // debounce seconds to fetch
  };

  // to close the modal when clicking outside for Subject
  const refNewsletter = React.useRef();

  const clickOutsideRefNewsletter = (e) => {
    if (
      refNewsletter.current !== undefined &&
      refNewsletter.current !== null &&
      !refNewsletter.current?.contains(e.target)
    ) {
      setOnFocusNewsletter(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", clickOutsideRefNewsletter);
    return () => document.addEventListener("click", clickOutsideRefNewsletter);
  }, []);

  const initVal = {
    newsletter: "",
    newsletter_subject: "",
    subscriber_email: "",
    sending_email_log_file: "",
    sender: "admin",
    firstname: firstnameProfile,
    role: role,
  };

  const yupSchema = Yup.object({
    newsletter: Yup.string().required("Required"),
    newsletter_subject: Yup.string().required("Required"),
    subscriber_email: Yup.string()
      .test(
        "isValidRecipient",
        "Required",
        (value) => value === "All Recipients" || Boolean(value?.trim()),
      )
      .required("Required"),
  });

  return (
    <>
      <section id="subscribers" className="bg-[#f5f5f3]">
        <Navigation menu="subscribers" submenu="mailer" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="pb-4">
              <Formik
                initialValues={initVal}
                validationSchema={yupSchema}
                onSubmit={async (values, { resetForm }) => {
                  setIsSend(true);
                }}
              >
                {({ setFieldValue, values, dirty, isValid, resetForm }) => {
                  // from Newsletter list to draft, clear the data
                  React.useEffect(() => {
                    if (mailType === "Draft") {
                      setFieldValue("subscriber_email", "");
                      setFieldValue("newsletter_subject", "");
                      setFieldValue("newsletter", "");
                      setFieldValue("sending_email_log_file", "");

                      // Clear external state
                      setSubscriberValue("");
                      setPropertyNewsletterValue("");
                    }
                  }, [mailType]);
                  return (
                    <Form>
                      <div className="grid grid-cols-[_1.5fr_2fr] gap-5 relative">
                        <div className="">
                          <div className="pt-5 flex flex-col gap-3">
                            <div className="text-sm text-[black] font-semibold">
                              <h2>Newsletter Mailer</h2>
                            </div>
                            <div className="flex gap-3 items-end">
                              {/* Mail Type */}
                              <div className="flex flex-col gap-1 relative">
                                <label className="text-xs">Mail Type</label>
                                <select
                                  value={mailType}
                                  onChange={(e) => setMailType(e.target.value)}
                                  className="w-[200px] h-[35px]"
                                >
                                  <option value="Draft">Draft</option>
                                  <option value="Newsletter List">
                                    Newsletter List
                                  </option>
                                </select>
                              </div>

                              {/* Sender */}
                              <div className="flex flex-col gap-1 relative">
                                <label className="text-xs">Sender</label>
                                <select
                                  value={values.sender}
                                  onChange={(e) =>
                                    setFieldValue("sender", e.target.value)
                                  }
                                  className="w-[280px] h-[35px]"
                                  disabled={isSendingLoading}
                                >
                                  <option value="admin">
                                    admin@frontlinebusiness.com.ph
                                  </option>

                                  <option value="zymon">
                                    jinuel.ramos@frontlinebusiness.com.ph
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="input-wrapper">
                            <InputText
                              label="Recipient"
                              type="search"
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
                                          "all",
                                        )
                                      }
                                    >
                                      All Recipients
                                    </div>

                                    <div className="">
                                      <div className="font-bold px-2 py-1 border-b-[1px]">
                                        By Audience
                                      </div>
                                      {subscriberCategories.map(
                                        (category, index) => (
                                          <div
                                            key={index}
                                            className="cursor-pointer hover:bg-gray-100 px-2 py-1 indent-3"
                                            onClick={() =>
                                              handleClickRecipient(
                                                category.audience_name,
                                                setFieldValue,
                                                category.subscriber_audience_id,
                                              )
                                            }
                                          >
                                            {category.audience_name}
                                          </div>
                                        ),
                                      )}
                                    </div>

                                    <div className="">
                                      <div className="font-bold px-2 py-1 border-b-[1px]">
                                        By Email
                                      </div>
                                      {subscriberData?.data.map((item, key) => (
                                        <div
                                          className="cursor-pointer hover:bg-gray-100 px-2 py-1 indent-3"
                                          key={key}
                                          onClick={() =>
                                            handleClickRecipient(
                                              item.subscriber_email,
                                              setFieldValue,
                                              "by-email",
                                            )
                                          }
                                        >
                                          {item.subscriber_email}
                                        </div>
                                      ))}
                                    </div>
                                  </>
                                ) : subscriber === "All Recipients" ||
                                  subscriber === "all recipients" ? (
                                  <div
                                    className="cursor-pointer hover:bg-gray-100 px-2 py-1"
                                    onClick={() =>
                                      handleClickRecipient(
                                        "All Recipients",
                                        setFieldValue,
                                        "all",
                                      )
                                    }
                                  >
                                    All Recipients
                                  </div>
                                ) : (
                                  <div className="my-7">
                                    <NoData />
                                  </div>
                                )}
                              </div>
                            )}
                          </div>

                          {mailType === "Draft" ? (
                            <div className="input-wrapper">
                              <InputText
                                label="Subject"
                                type="text"
                                name="newsletter_subject"
                                className="w-full"
                                disabled={isSendingLoading}
                              />
                            </div>
                          ) : (
                            <div className=" input-wrapper">
                              <InputText
                                label="Subject"
                                type="search"
                                value={propertyNewsletterValue}
                                name="newsletter_subject"
                                disabled={isSendingLoading}
                                onFocus={() => setOnFocusNewsletter(true)}
                                onChange={handleOnChangeNewsletterList}
                                refVal={refNewsletter}
                              />
                              {onFocusNewsletter && (
                                <div className="w-full h-40 max-h-40 overflow-y-auto absolute top-[36px] bg-white shadow-md z-50 rounded-sm border border-gray-200 pt-1">
                                  {loading || newsletterDataIsFetching ? (
                                    <TableSpinner />
                                  ) : newsletterDataError ? (
                                    <div className="my-7">
                                      <ServerError />
                                    </div>
                                  ) : newsletterData?.count > 0 ? (
                                    newsletterData?.data.map((item, key) => (
                                      <div
                                        className="cursor-pointer hover:bg-gray-100 h-7 p-1 text-xs text-dark"
                                        value={item.newsletter_aid}
                                        key={key}
                                        onClick={() =>
                                          handleClickNewsletterList(
                                            item,
                                            setFieldValue,
                                          )
                                        }
                                      >
                                        {item.newsletter_subject} (
                                        {formatDate(item.newsletter_created)})
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
                          )}

                          <div className="input-wrapper">
                            <span htmlFor="" className="text-xs">
                              Add Attachment (File Only (8mb))
                            </span>
                            <input
                              type="file"
                              name="sending_email_log_file"
                              accept="*"
                              id="myFile"
                              disabled={isSendingLoading}
                              onChange={(e) => handleChangeFiles(e)}
                            />
                          </div>
                          {mailType === "Draft" && (
                            <div className="input-wrapper">
                              <span className="text-xs bg-[#f5f5f3]">
                                Paste Your HTML Code Here
                              </span>
                              <InputTextArea
                                type="text"
                                name="newsletter"
                                className="newsletter bg-[#2b2b2b] text-white 
                                min-h-[300px]"
                                value={values.newsletter}
                                onChange={(e) =>
                                  setFieldValue("newsletter", e.target.value)
                                }
                                disabled={isSendingLoading}
                              />
                            </div>
                          )}
                          <div className="form-action  bottom-0 w-full">
                            <div className="form-btn place-content-end">
                              <button
                                className="btn-modal-submit w-[200px] "
                                type="submit"
                                disabled={isSendingLoading || !dirty}
                              >
                                {isSendingLoading ? <ButtonSpinner /> : "Send"}
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="pt-5">
                          <div className="Preview md:min-h-[calc(90vh-35px)] lg:max-h-[calc(100vh-150px)] w-full border-[2px] border-gray-200 flex justify-center items-center rounded-lg overflow-hidden">
                            {values.newsletter ? (
                              <div className="w-full">
                                <iframe
                                  srcDoc={values.newsletter}
                                  className="md:min-h-[calc(90vh-35px)] lg:max-h-[calc(90vh-150px)] border-none w-full"
                                />
                              </div>
                            ) : (
                              <p className="text-gray-400 text-xs">
                                No Preview Available
                              </p>
                            )}
                          </div>
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
                          setSubscriberValue={setSubscriberValue}
                          setPropertyNewsletterValue={
                            setPropertyNewsletterValue
                          }
                          setQueryStatus={setQueryStatus}
                          newfile={newfile}
                          uploadFiles={uploadFiles}
                        />
                      )}
                    </Form>
                  );
                }}
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
          setQueryCount={setQueryCount}
          queryStatus={queryStatus}
        />
      )}

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Mailer;
