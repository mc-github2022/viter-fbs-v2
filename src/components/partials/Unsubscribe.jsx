import React, { useContext } from "react";
import Header from "./Header";
import { Form, Formik } from "formik";
import {
  apiVersion,
  devNavUrl,
  getUrlParam,
} from "../helpers/functions-general";
import useQueryData from "../custom-hooks/useQueryData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { setError, setMessage, setSuccess } from "../store/StoreAction";
import * as Yup from "yup";
import PageNotFound from "@/components/partials/PageNotFound";
import { InputText, InputTextArea } from "../helpers/FormInputs";
import { queryData } from "../helpers/queryData";
import ButtonSpinner from "./spinners/ButtonSpinner";
import { Link, useNavigate } from "react-router-dom";
import ModalSuccess from "./modals/ModalSuccess";
import { StoreContext } from "../store/StoreContext";

const Unsubscribe = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const paramKey = getUrlParam().get("key");
  const navigate = useNavigate();

  const {
    isLoading,
    error,
    isFetching,
    data: subscriberKey,
  } = useQueryData(
    `${apiVersion}/subscribe/key/${paramKey}`, // endpoint
    "get", // method
    "subscriber-key" // key
  );

  const [feedback, setFeedback] = React.useState([]);
  const [textFeedback, setTextFeedback] = React.useState("");

  const feedbackOptions = [
    "I no longer want to receive these emails",
    "Emails are too frequent",
    "I never signed up to receive this emails.",
    "Emails are inappropriate",
  ];

  const handleCheckboxChange = (event, option) => {
    if (event.target.checked) {
      setFeedback((prev) => [...prev, option]);
    } else {
      setFeedback((prev) => prev.filter((item) => item !== option));
    }
  };

  const handleTextChange = (event) => {
    const value = event.target.value;
    setTextFeedback(value);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        `${apiVersion}/subscribe/unsubscribe/${paramKey}`,
        "put",
        values
      ),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["subscribe"] });

      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        dispatch(setSuccess(false));
      } else {
        dispatch(setSuccess(true));
        dispatch(setMessage("You are now unsubscribed. Thank you!"));

        setTimeout(() => {
          navigate("*");
        }, 2000);
      }
    },
  });

  const initVal = {
    subscriber_feedback: "",
    key: paramKey,
    isActive: "0",
  };

  const yupSchema = Yup.object({});

  return (
    <>
      {subscriberKey?.count === 0 ? (
        <PageNotFound />
      ) : (
        <>
          <Header />
          <div className="unsubscibe pb-[56px]">
            <div className="customContainer">
              <div className="text-left md:w-[650px] m-auto">
                <div className="sadMailImage pt-[70px] md:pt-[152px] mb-4">
                  <img
                    className="m-auto w-[450px] xs:w-[400px] lg:w-[400px]"
                    src="https://lh3.googleusercontent.com/pw/AP1GczNODh0erMDN3ufWLI5vUtQZD-U8tE5vnwLwKUMem38E591ciKK0AZDGTOCGnCGXL9gafpUSlblVKsdlpn1A-Ir2IuUko-OXfg71KKh7adklFYZzqjQcfgvT6W-w5otfEHJ6TwgxeeEE968OtkrSMOc3=w698-h406-s-no-gm?authuser=0"
                    alt=""
                  />
                </div>
                <h2 className="font-bold text-center text-lg mb-4">
                  You are about to unsubscibe to FBS newsletter
                </h2>
                <p className="mb-4">
                  If you have a moment, please let us know why:
                </p>
                <Formik
                  initialValues={initVal}
                  validationSchema={yupSchema}
                  onSubmit={async (values, { setSubmitting, resetForm }) => {
                    const data = {
                      ...values,
                      subscriber_feedback: textFeedback
                        ? [...feedback, `Others: ${textFeedback}`]
                        : feedback,
                    };
                    mutation.mutate(data);
                  }}
                >
                  {(props) => {
                    return (
                      <Form>
                        <div className="md:flex justify-between">
                          <div className="feedbackCheckboxes">
                            {feedbackOptions.map((option, index) => (
                              <div className="input-wrapper !m-0" key={index}>
                                <div className="flex items-start gap-2 w-full">
                                  <div className="flex">
                                    <input
                                      type="checkbox"
                                      name="subscriber_feedback"
                                      id={`feedback-${index}`}
                                      onChange={(e) =>
                                        handleCheckboxChange(e, option)
                                      }
                                    />
                                  </div>
                                  <p className="text-xs mt-2.5">{option}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="othersMessage mt-2.5 md:grid md:place-items-center">
                            <div className="input-wrapper m-0">
                              <div className="flex items-start gap-2 w-full">
                                <textarea
                                  name="subscriber_feedback"
                                  className="w-full md:w-[300px] !h-[20px]"
                                  placeholder="Add your reasons or recommendation here"
                                  onChange={handleTextChange}
                                />
                                <label>Others</label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="modal__action  sm:flex justify-center text-center mt-12 gap-2 text-xs">
                          <button
                            className="btn bg-white border w-[80%] md:w-[unset] border-primary hover:text-primary disabled:opacity-[0.5] mb-4"
                            type="submit"
                          >
                            {mutation.isPending ? (
                              <div className="flex items-center gap-2">
                                <ButtonSpinner /> Unsubscribe
                              </div>
                            ) : (
                              "Unsubscribe"
                            )}
                          </button>
                          <Link
                            className="btn bg-primary text-light w-[80%] md:w-[unset]  hover:bg-secondary hover:text-light disabled:opacity-[0.5] mb-4"
                            to={`${devNavUrl}/`}
                            type="button"
                          >
                            I'd rather stay
                          </Link>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </>
      )}
      {store.success && <ModalSuccess />}
    </>
  );
};

export default Unsubscribe;
