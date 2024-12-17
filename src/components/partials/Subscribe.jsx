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

const Subscribe = ({ setSubscribe }) => {
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
    mutationFn: (values) => queryData(`/v1/subscribe`, "post", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["subscribe"] });
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        dispatch(setSuccess(false));
      } else {
        setSubscribe(false);
        dispatch(setSuccess(true));
        dispatch(setMessage(`Subscribed, Thank you!`));
        sessionStorage.setItem("subscribed", JSON.stringify(true));
      }
    },
  });

  const initVal = {
    subscriber_email: "",
  };

  const yupSchema = Yup.object({
    subscriber_email: Yup.string().required("Required").email("Invalid email"),
  });

  return (
    <>
      <div className="grid place-items-center fixed w-full h-screen top-0 z-[999] backdrop-blur-md">
        <div className="modalSubscribe bg-[#fafafc] p-10 rounded-md shadow-xl relative">
          <h3 className="text-center text-xl font-semibold mb-2">
            Enjoyed the read?
          </h3>
          <p className="text-sm text-center mb-8">
            Join our monthly newsletter for <br /> helpful tips on design and
            more.
          </p>
          <div
            onClick={handleSubsClose}
            className="absolute top-2 p-1 px right-2 cursor-pointer shadow-lg rounded-full hover:bg-slate-300"
          >
            <IoMdClose className="text-2xl  rounded-full " />
          </div>
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              // console.log(values);
              mutation.mutate(values);
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
                      className="w-full md:w-[300px]"
                    />
                  </div>
                  <div className="input-wrapper !m-0">
                    <div className="flex items-start gap-2 w-[300px]">
                      <div className="flex">
                        <input
                          type="checkbox"
                          name="agree"
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
                  <div className="modal__action flex justify-center mt-6 gap-2">
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
