import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { IoMdClose } from "react-icons/io";
import * as Yup from "yup";
import { InputText } from "../helpers/FormInputs";
import { setMessage, setSuccess, setError } from "../store/StoreAction";
import { queryData } from "../helpers/queryData";
import { StoreContext } from "../store/StoreContext";
import ButtonSpinner from "./spinners/ButtonSpinner";
import { apiVersion, siteKey } from "../helpers/functions-general";
import ReCAPTCHA from "react-google-recaptcha";
import useQueryData from "../custom-hooks/useQueryData";

const Subscribe = ({ setSubscribe, notification_purpose = "subscribers" }) => {
  const recaptchaRef = React.useRef();

  const handleSubsClose = () => {
    setSubscribe(false);
  };
  const { store, dispatch } = React.useContext(StoreContext);
  const [check, setChecked] = React.useState(false);
  const handleCheckBox = (e) => {
    setChecked(e.target.checked);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      Promise.all(
        [`${apiVersion}/subscribe`, `${apiVersion}/subscribe/notif`].map(
          (endpoint) => queryData(endpoint, "post", values)
        )
      ),

    onSuccess: (results) => {
      queryClient.invalidateQueries({ queryKey: ["subscribe"] });

      if (results.every((result) => result.success)) {
        setSubscribe(false);
        dispatch(setSuccess(true));
        dispatch(setMessage("Subscribed, Thank you!"));
        sessionStorage.setItem("subscribed", JSON.stringify(true));
      } else {
        const errorMessage =
          results.find((result) => !result.success)?.error ||
          "An error occurred.";
        dispatch(setError(true));
        dispatch(setMessage(errorMessage));
        dispatch(setSuccess(false));
      }
    },
  });

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

  const defaultAudienceAid = audienceData?.data.filter(
    (item) => item.audience_code === "audience_is_client"
  )[0]["audience_aid"];

  const initVal = {
    subscriber_email: "",
    subscriber_is_agree: false,
    subscriber_audience_id: defaultAudienceAid,
    notification_purpose,
  };

  const yupSchema = Yup.object({
    subscriber_email: Yup.string().required("Required").email("Invalid email"),
  });

  const handleChange = (value) => {
    console.log(value);
    // setCaptcha(value);
  };

  return (
    <>
      <div className="grid place-items-center fixed w-full h-screen top-0 px-4 md:px-8 z-[999] backdrop-blur-lg">
        <div className="modalSubscribe bg-[#fafafc] px-6 py-10 lg:px-10 rounded-xl shadow-2xl shadow-primary relative">
          <h3 className="text-center lg:text-xl font-semibold mb-2">
            Subscribe to our newsletter
          </h3>
          <p className="text-sm text-center mb-8">
            Join our monthly newsletter for <br /> helpful tips on design and
            more.
          </p>
          <div
            onClick={handleSubsClose}
            className="absolute top-2 p-1 px right-2 cursor-pointer shadow-lg bg-primary text-light rounded-full hover:bg-secondary"
          >
            <IoMdClose className="text-lg  rounded-full " />
          </div>
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values) => {
              const captchaValue = recaptchaRef.current.getValue();
              console.log(captchaValue);
              if (captchaValue === "") {
                dispatch(setError(true));
                dispatch(
                  setMessage(
                    "Please verify that you are not a robot by completing the reCAPTCHA below."
                  )
                );
                return;
              }
              values.subscriber_is_agree = check;
              values.subscriber_audience_id = defaultAudienceAid;
              mutation.mutate({ ...values, captchaValue });
              recaptchaRef.current?.reset();
            }}
          >
            {(props) => {
              return (
                <Form>
                  <div className="input-wrapper">
                    <InputText
                      label="Your Email Address"
                      type="text"
                      name="subscriber_email"
                      className="w-full md:w-[300px] !h-[40px]"
                      disabled={mutation.isPending}
                      // onPaste={(e) => e.preventDefault()}
                      // onCut={(e) => e.preventDefault()}
                      // onCopy={(e) => e.preventDefault()}
                      // onDrag={(e) => e.preventDefault()}
                      // onDrop={(e) => e.preventDefault()}
                      // onSelect={(e) => e.preventDefault()}
                      // autoComplete="off"
                      // required
                    />
                  </div>
                  <div className="input-wrapper !m-0">
                    <div className="flex items-start gap-2 w-full sm:w-[300px]">
                      <div className="flex">
                        <input
                          type="checkbox"
                          name="subscriber_is_agree"
                          checked={check}
                          id="agree"
                          onChange={handleCheckBox}
                        />
                      </div>
                      <p className="text-xs mt-2.5">
                        I agree to receive this newsletter and subscribe at
                        anytime.
                      </p>
                    </div>
                  </div>
                  <div className="input-wrapper reCaptcha">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={siteKey}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="modal__action flex justify-center mt-6 gap-2">
                    {!check || mutation.isPending || !props.dirty ? (
                      <button
                        className="btn bg-primary text-light hover:text-light disabled:opacity-[0.5]"
                        type="button"
                        disabled={mutation.isPending || !props.dirty || !check}
                      >
                        <div className="flex items-center gap-2">
                          {mutation.isPending ? (
                            <div className="flex items-center gap-2">
                              <ButtonSpinner /> Subscribe
                            </div>
                          ) : (
                            "Subscribe"
                          )}
                        </div>
                      </button>
                    ) : (
                      <button
                        className="btn bg-primary text-light hover:text-light disabled:opacity-[0.5]"
                        type="submit"
                        disabled={mutation.isPending || !props.dirty || !check}
                      >
                        <div className="flex items-center gap-2">
                          {mutation.isPending ? (
                            <div className="flex items-center gap-2">
                              <ButtonSpinner /> Subscribe
                            </div>
                          ) : (
                            "Subscribe"
                          )}
                        </div>
                      </button>
                    )}
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
