import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import ModalAddWrapper from "../dashboard/ModalAddWrapper";
import ButtonSpinner from "../spinners/ButtonSpinner";

const ModalSentEmailSummary = ({
  queryCount,
  recipientList,
  setIsSuccessSendingEmail,
}) => {
  let sucessCount = queryCount;
  let totalCount = recipientList?.count;

  return (
    <ModalAddWrapper className={"max-w-[20rem] h-fit p-5"}>
      <div className="">
        <div className="flex flex-col items-center gap-7 my-6">
          <div className="inline-flex items-center justify-center flex-shrink-0">
            <FaCheckCircle className="fill-[#22c55e] h-16 w-16" />
          </div>

          <h3 className="text-sm">Email successfully sent!</h3>

          <span className="text-sm">
            {sucessCount} of {totalCount}
          </span>
          <button
            className="inline-block rounded-md w-full px-5 py-2 bg-[#e5e7eb] text-[#1f2937]"
            onClick={() => setIsSuccessSendingEmail(false)}
          >
            Close
          </button>
        </div>
      </div>
    </ModalAddWrapper>
  );
};

export default ModalSentEmailSummary;
