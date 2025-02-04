import React from "react";

const EmailLogStatus = ({ text }) => {
  return (
    <>
      <span
        className={` ${
          text === "Sent"
            ? "bg-[#dcfce7] text-[#166534]  border border-[#bbf7d0] text-xs font-medium mr-2 px-2 py-0.5 rounded-md"
            : text === "Failed"
            ? "bg-red-100 text-[#ef4444] border border-[#ef4444] text-xs font-medium mr-2 px-2 py-0.5 rounded-md"
            : ""
        }`}
      >
        {text}
      </span>
    </>
  );
};

export default EmailLogStatus;
