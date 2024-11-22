import { InputText } from "@/components/helpers/FormInputs";
import React from "react";
import logo from "/img/logo.png";
import { Form, Formik } from "formik";
import { devNavUrl } from "../../../helpers/functions-general";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";

const ForgetPassword = () => {
  return (
    <div className="h-screen w-full flex justify-center">
      <div className="login w-full max-w-[380px] py-8 px-4 transYclamp rounded-md ">
        <div className="theLogo">
          <img src={logo} alt="" className="mx-auto" />
        </div>
        <div className="mb-4">
          <h2 className="mb-0 mt-10 text-lg">DEVELOPER LOGIN</h2>
        </div>
        <Formik>
          <Form>
            <div className="input-wrapper">
              <InputText
                label="Email"
                type="Email"
                name="user_other_system_email"
              />
            </div>
            <div className="flex items-center gap-1 pt-3 mb-4">
              <button
                type="submit"
                className="btn bg-disable text-light rounded-lg py-2  text-sm w-full relative"
              >
                <div className="flex justify-center gap-1">
                  <ButtonSpinner /> Submit
                </div>
              </button>
            </div>
            <div className="text-xs">
              <p>
                Go back to
                <a
                  href={`${devNavUrl}/system-login`}
                  className="text-primary ml-1"
                >
                  Login
                </a>
              </p>
            </div>
          </Form>
        </Formik>
        <div className="text-xs mt-12 grid place-items-center ">
          <div className="mb-2">
            <ul className="flex items-center [&>li]:px-2">
              <li>Privacy Policy</li>
              <li className="border-x border-dark">Terms of Service</li>
              <li>EULA</li>
            </ul>
          </div>
          <p className="text-center">
            &copy; 2024 Frontline Business Solutions, Inc. <br /> All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ForgetPassword;
