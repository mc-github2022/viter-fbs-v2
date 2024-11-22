import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { devNavUrl } from "../../../helpers/functions-general";
import logo from "/img/logo.png";

const CreatePasswordSuccess = () => {
  return (
    <div className="h-screen w-full flex justify-center">
      <div className="login w-full max-w-[380px] py-8 px-4 transYclamp rounded-md ">
        <div className="theLogo">
          <img src={logo} alt="" className="mx-auto" />
        </div>
        <div className="mb-4 mt-10">
          <FaCircleCheck className="mx-auto text-6xl text-primary" />
          <h2 className="mb-0 text-lg font-semibold text-center">Success!</h2>
        </div>
        <div className="text-sm mb-8">
          <p>
            Your password is set and your account is ready to use. Click the
            button below to continue login.
          </p>
        </div>
        <div className="text-xs flex justify-center">
          <p>
            <a
              href={`${devNavUrl}/system-login`}
              className="text-primary ml-1 underline"
            >
              Go to Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default CreatePasswordSuccess;
