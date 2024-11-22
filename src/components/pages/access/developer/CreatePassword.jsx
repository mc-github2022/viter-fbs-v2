import { InputText } from "@/components/helpers/FormInputs";
import React from "react";
import logo from "/img/logo.png";
import { Form, Formik } from "formik";
import { devNavUrl } from "../../../helpers/functions-general";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import { FaCircleCheck } from "react-icons/fa6";

const CreatePassword = () => {
  return (
    <div className="h-screen w-full flex justify-center">
      <div className="login w-full max-w-[380px] py-8 px-4 transYclamp rounded-md ">
        <div className="theLogo">
          <img src={logo} alt="" className="mx-auto" />
        </div>
        <div className="mb-4">
          <h2 className="mb-0 mt-10 text-lg">CREATE PASSWORD</h2>
        </div>
        <Formik>
          <Form>
            <div className="input-wrapper">
              <InputText
                label="New Password"
                type="password"
                name="user_system_new_password"
              />
            </div>
            <div className="input-wrapper">
              <InputText
                label="Confirm Password"
                type="password"
                name="user_system_new_password_confirm"
              />
            </div>
            <div className="flex items-center gap-1 pt-3 mb-4">
              <button
                type="submit"
                className="btn bg-disable text-light rounded-lg py-2  text-sm w-full relative"
              >
                <div className="flex justify-center gap-1">
                  <ButtonSpinner /> Create Password
                </div>
              </button>
            </div>
            <div className="text-xs p-4">
              <p className="font-semibold mb-5">Password Requirement</p>
              <ul className="[&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-2">
                <li>
                  <FaCircleCheck className="text-disable" /> Must have 8
                  character
                </li>
                <li>
                  <FaCircleCheck className="text-disable" /> At least 1
                  uppercase
                </li>
                <li>
                  <FaCircleCheck className="text-disable" /> At least 1
                  lowercase
                </li>
                <li>
                  <FaCircleCheck className="text-disable" /> At least 1 number
                </li>
                <li>
                  <FaCircleCheck className="text-disable" /> At least 1 symbol
                </li>
              </ul>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
export default CreatePassword;
