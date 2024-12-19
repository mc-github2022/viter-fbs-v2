import React from "react";
import Header from "./Header";
import { Form, Formik } from "formik";

const Unsubscribe = () => {
  return (
    <>
      <Header />
      <div className="unsubscibe">
        <div className="customContainer">
          <div className="text-left w-[650px] m-auto">
            <div className="sadMailImage pt-[176px] mb-4">
              <img
                className="m-auto w-full md:w-[400px]"
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
                    <p className="text-xs mt-2.5">Emails are too frequent</p>
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
                    <p className="text-xs mt-2.5">Emails are in appropriate</p>
                  </div>
                </div>

                <div className="modal__action flex justify-center mt-6 gap-2">
                  <button
                    className="btn bg-white border border-primary hover:text-primary disabled:opacity-[0.5]"
                    type="submit">
                    Submit and Unsubscribe
                  </button>
                  <button
                    className="btn bg-primary text-light hover:bg-secondary hover:text-light disabled:opacity-[0.5]"
                    type="submit">
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
