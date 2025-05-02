import React from "react";
import ModalAddWrapper from "../dashboard/ModalAddWrapper";
import ButtonSpinner from "../spinners/ButtonSpinner";

const ModalSendingEmailStatus = ({ queryCount, recipientList }) => {
  let sucessCount = queryCount;
  let totalCount = recipientList?.count;
  let percentageValue = (sucessCount / totalCount) * 100;
  console.log("success count", sucessCount);
  console.log("total count", totalCount);
  console.log("percentage", percentageValue);

  return (
    <ModalAddWrapper
      className={"max-w-[20rem] h-fit p-5 "}
      center={`justify-center`}
      placeItemsCenter={`place-items-center`}
    >
      <div className="">
        <div className="flex flex-col items-center gap-7 my-6">
          <h3 className="text-sm">Sending, please wait...</h3>
          {/* <ButtonSpinner color="text-black" /> */}
          <div className="loader"></div>
          {totalCount > 1 && (
            <span className="text-sm">
              {sucessCount} of {totalCount}
            </span>
          )}
          <div className="w-full bg-gray-200 rounded-sm dark:bg-gray-400 h-5 relative z-[]">
            <div
              className="bg-green-700 text-xs text-gray-200 font-medium h-full rounded-sm duration-500 ease-linear flex items-center justify-center absolute left-0"
              style={{ width: `${percentageValue}%` }}
            >
              {Math.floor(percentageValue)}%
            </div>
          </div>
        </div>
      </div>
    </ModalAddWrapper>
  );
};

export default ModalSendingEmailStatus;
