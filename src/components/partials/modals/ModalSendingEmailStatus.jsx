import React from "react";
import ModalAddWrapper from "../dashboard/ModalAddWrapper";
import ButtonSpinner from "../spinners/ButtonSpinner";

const ModalSendingEmailStatus = () => {
  return (
    <ModalAddWrapper className={"max-w-[20rem] h-fit p-5"}>
      <div className="">
        <div className="flex flex-col items-center gap-7 my-6">
          <h3 className="text-sm">Sending, please wait...</h3>
          <ButtonSpinner color="text-black" />
          <span className="text-sm">2 of 2</span>
          <div class="w-full bg-gray-200 rounded-sm dark:bg-gray-400">
            <div
              className="bg-green-700 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-sm"
              style={{ width: "45%" }}
            >
              45%
            </div>
          </div>
        </div>
      </div>
    </ModalAddWrapper>
  );
};

export default ModalSendingEmailStatus;
