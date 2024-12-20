import React from "react";
import Header from "./Header";
import { Form, Formik } from "formik";
import { InputTextArea } from "../helpers/FormInputs";

const Unsubscribe = () => {
  return (
    <>
      <Header />
      <div className="unsubscibe pb-[56px]">
        <div className="customContainer">
          <div className="text-left md:w-[650px] m-auto">
            <div className="sadMailImage pt-[70px] md:pt-[152px] mb-4">
              <img
                className="m-auto w-full xs:w-[400px] lg:w-[400px]"
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
            <Formik>
              <Form>
                <div className="md:flex justify-between">
                  <div className="feedbackCheckboxes">
                    <div className="input-wrapper !m-0">
                      <div className="flex items-start gap-2 w-full">
                        <div className="flex">
                          <input type="checkbox" name="agree" id="agree" />
                        </div>
                        <p className="text-xs mt-2.5">
                          I no longer want to receive these emails
                        </p>
                      </div>
                    </div>
                    <div className="input-wrapper !m-0">
                      <div className="flex items-start gap-2 w-full">
                        <div className="flex">
                          <input type="checkbox" name="agree" id="agree" />
                        </div>
                        <p className="text-xs mt-2.5">
                          Emails are too frequent
                        </p>
                      </div>
                    </div>
                    <div className="input-wrapper !m-0">
                      <div className="flex items-start gap-2 w-full">
                        <div className="flex">
                          <input type="checkbox" name="agree" id="agree" />
                        </div>
                        <p className="text-xs mt-2.5">
                          I never signed up to receive this emails.
                        </p>
                      </div>
                    </div>
                    <div className="input-wrapper !m-0">
                      <div className="flex items-start gap-2 w-full">
                        <div className="flex">
                          <input type="checkbox" name="agree" id="agree" />
                        </div>
                        <p className="text-xs mt-2.5">
                          Emails are in appropriate
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="othersMessage mt-2.5 md:grid md:place-items-center">
                    <div className="input-wrapper m-0">
                      <div className="flex items-start gap-2 w-full">
                        <InputTextArea
                          label="Others"
                          type="text"
                          name="home_banner_description"
                          className="w-full md:w-[300px] !h-[20px]"
                          placeholder="Add your reasons or recommendation here"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal__action  sm:flex justify-center text-center mt-12 gap-2 text-xs">
                  <button
                    className="btn bg-white border w-[80%] md:w-[unset] border-primary hover:text-primary disabled:opacity-[0.5] mb-4"
                    type="submit"
                  >
                    Unsubscribe
                  </button>
                  <button
                    className="btn bg-primary text-light w-[80%] md:w-[unset]  hover:bg-secondary hover:text-light disabled:opacity-[0.5] mb-4"
                    type="submit"
                  >
                    I'd rather stay
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Unsubscribe;
