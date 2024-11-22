import { InputText } from "@/components/helpers/FormInputs";
import React from "react";
import logo from "/img/logo.png";
import { Form, Formik } from "formik";
import { devNavUrl } from "../../../helpers/functions-general";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import { FaCheck } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";

const ForgotPasswordSuccess = () => {
  return (
    <div className="h-screen w-full flex justify-center">
      <div className="login w-full max-w-[380px] py-8 px-4 transYclamp rounded-md ">
        <div className="theLogo">
          <img src={logo} alt="" className="mx-auto" />
        </div>
        <div className="mb-4 mt-10">
          <MdMarkEmailRead className="mx-auto text-6xl text-primary" />
          <h2 className="mb-0 text-lg font-semibold text-center">
            Email Sent!
          </h2>
        </div>
        <div className="text-sm mb-8">
          <p>
            We have successfully sent an instruction to reset your password. If
            you haven't received any email, please also check your spam/junk
            folder.
          </p>
        </div>
        <div className="text-xs flex justify-center">
          <p>
            <a
              href={`${devNavUrl}/system-login`}
              className="text-primary ml-1 underline"
            >
              Back to Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default ForgotPasswordSuccess;
