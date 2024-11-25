import React from "react";
import {
  copyrightYear,
  devNavUrl,
} from "@/components/helpers/functions-general";

const LoginFooter = () => {
  return (
    <>
      <div className="text-xs mt-12 grid place-items-center ">
        <ul className="flex items-center mb-2 [&>li]:px-2">
          <li>
            <a
              className="hover:text-primary transition ease-linear duration-200"
              href={`${devNavUrl}/privacy-policy`}
              // href="https://frontlinebusiness.com.ph/privacy-policy/"
            >
              Privacy Policy
            </a>
          </li>
          <li className="border-x border-dark">
            <a
              className="hover:text-primary transition ease-linear duration-200"
              href={`${devNavUrl}/terms-of-service`}
              // href="https://frontlinebusiness.com.ph/terms-of-service/"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              className="hover:text-primary transition ease-linear duration-200"
              href={`${devNavUrl}/eula`}
              // href="https://frontlinebusiness.com.ph/eula/"
            >
              EULA
            </a>
          </li>
        </ul>
        <p className="text-center ">
          &copy; {copyrightYear()} Frontline Business Solutions, Inc.
          <br /> All rights reserved.
        </p>
      </div>
    </>
  );
};

export default LoginFooter;
