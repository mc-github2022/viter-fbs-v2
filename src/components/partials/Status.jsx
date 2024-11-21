import React from "react";

const Status = ({ status = 0 }) => {
  return (
    <span
      className={`${
        Number(status) === 0 ? "!opacity-[0.50] " : "text-green-700"
      } font-bold capitalize`}
    >
      {Number(status) === 1 ? "active" : "inactive"}
    </span>
  );
};

export default Status;
