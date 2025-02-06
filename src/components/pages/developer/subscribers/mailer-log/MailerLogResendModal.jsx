import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import ModalAddWrapper from "../../../../partials/dashboard/ModalAddWrapper";
import { InputText, InputTextArea } from "../../../../helpers/FormInputs";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";
import { StoreContext } from "../../../../store/StoreContext";
import { GrFormClose } from "react-icons/gr";


const MailerLogResendModal = ({setIsResend}) => {
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
  
 
const handleClose = () => {
  setIsResend(false)
}

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
    <ModalAddWrapper
      handleClose={handleClose}>
      <section>
          <div className="mx-5 pt-2">
            <div className=" modal-title pb-3">
              <div className="text-sm text-[black] font-semibold">
                <h2>Resend Email</h2>
              </div>
              <button onClick={handleClose}>
                        <GrFormClose className="text-[25px]" />
                      </button>
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
                            label="Subject"
                            type="text"
                            name="newsletter_subject"
                            className="w-full"
                            disabled={isSendingLoading}
                          />
                        </div>
                        <div className="input-wrapper">
                          <span className="text-xs">
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
                   
                  </Form>
                )}
              </Formik>
            </div>
          </div>
       
      </section>
    </ModalAddWrapper>

      
    </>
  );
};

export default MailerLogResendModal;
