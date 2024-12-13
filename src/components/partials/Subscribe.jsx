import { Form, Formik } from "formik";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { InputCheckbox, InputText } from "../helpers/FormInputs";

const Subscribe = ({ setSubscribe }) => {
  const handleSubsClose = () => {
    setSubscribe(false);
  };
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
          <Formik>
            <Form>
              <div className="input-wrapper">
                <InputText
                  label="Your Email Address"
                  type="text"
                  name="email"
                  className="w-full md:w-[300px]"
                />
              </div>
              <div className="input-wrapper">
                <InputCheckbox
                  type="checkbox"
                  name="agree"
                  label="agree"
                  id="agree"
                />
              </div>
              <div className="modal__action flex justify-center mt-6 gap-2">
                <button
                  className="btn bg-primary text-light hover:text-light disabled:opacity-[0.5]"
                  type="submit"
                >
                  <div className="flex items-center gap-2">Subscribe</div>
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
