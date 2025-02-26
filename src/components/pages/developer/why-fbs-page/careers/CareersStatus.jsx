import React from "react";

const CareersStatus = ({ text }) => {
  return (
    <>
      <span
        className={` ${
          text === "Ongoing"
            ? "bg-[#dcfce7] text-[#166534]  text-xs font-medium mr-2 px-2 py-0.5 rounded-md"
            : text === "Closed"
            ? "bg-red-100 text-[#ef4444]  text-xs font-medium mr-2 px-2 py-0.5 rounded-md"
            : ""
        }`}
      >
        {text}
      </span>
    </>
  );
};

export default CareersStatus;
