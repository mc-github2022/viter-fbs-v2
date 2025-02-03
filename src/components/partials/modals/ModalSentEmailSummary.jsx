import React from "react";
import ModalAddWrapper from "../dashboard/ModalAddWrapper";
import ButtonSpinner from "../spinners/ButtonSpinner";

const ModalSentEmailSummary = () => {
  return (
    <ModalAddWrapper className={"max-w-[20rem] h-fit p-5"}>
      <div className="">
        <div className="flex flex-col items-center gap-7 my-6">
          <h3 className="text-sm">Successfully Email Sent.</h3>
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-[#22c55e]">
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
          </div>
          <span className="text-sm">2 of 2</span>
          <button
            className="inline-block rounded-md w-full px-5 py-2 bg-[#e5e7eb] text-[#1f2937]"
            // onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </ModalAddWrapper>
  );
};

export default ModalSentEmailSummary;
