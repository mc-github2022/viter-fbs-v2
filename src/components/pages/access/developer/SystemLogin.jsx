import { InputText } from "@/components/helpers/FormInputs";
import React from "react";
import logo from "/img/logo.png";
import { Form, Formik } from "formik";

const SystemLogin = () => {
  return (
    <div className="h-screen w-full grid place-items-center">
      <div className="login w-full max-w-[380px] py-8 px-4 border translate-y-[clamp(5rem, 12vw, 8rem)] rounded-md ">
        <div className="theLogo">
          <img src={logo} alt="" className="mx-auto" />
        </div>
        <div className="mb-4">
          <h2 className="mb-0 mt-10 text-lg">DEVELOPER LOGIN</h2>
        </div>
        <Formik>
          <Form>
            <div className="input-wrapper">
              <InputText label="Name" type="text" name="user_system_email" />
            </div>
            <div className="input-wrapper">
              <InputText
                label="Password"
                type="text"
                name="user_system_email"
              />
            </div>
            <div className="flex items-center gap-1 pt-3 mb-4">
              <button
                type="submit"
                className="btn bg-disable text-light rounded-lg py-2  w-full relative"
              >
                login
              </button>
            </div>
            <div className="text-sm">
              <p>
                Did you forgot your password?{" "}
                <a href="#" className="text-primary">
                  Forgot Password
                </a>
              </p>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default SystemLogin;
