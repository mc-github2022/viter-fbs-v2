import React from "react";

const ModalAddWrapper = ({ children, className, handleClose }) => {
  return (
    <div className="fixed top-0 left-0 h-full w-full flex justify-end z-[99999]">
      <div
        className={`backdrop  bg-[black] opacity-70 h-full w-full absolute top-0 left-0 z-[-1]`}
        onClick={handleClose}
      ></div>
      <div className={`modal-wrapper ${className}`}>{children}</div>
    </div>
  );
};

export default ModalAddWrapper;
