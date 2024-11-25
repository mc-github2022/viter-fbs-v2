import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link, Navigate } from "react-router-dom";
import useQueryData from "../../custom-hooks/useQueryData";
import { apiVersion, devNavUrl } from "../../helpers/functions-general";
import ModalLogout from "../modals/ModalLogout";
import { queryData } from "../../helpers/queryData";
import FetchingSpinner from "../spinners/FetchingSpinner";
import PageNotFound from "@/components/partials/PageNotFound";
import { StoreContext } from "../../store/StoreContext";
import { setCredentials } from "../../store/StoreAction";

const DashboardNav = ({ menu }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setIsId] = React.useState("");
  const [isData, setIsData] = React.useState("");
  const [isArchiving, setIsArchiving] = React.useState(false);
  const [isLogout, setIsLogout] = React.useState(false);

  const {
    isFetching,
    error,
    isLoading,
    data: userOtherData,
  } = useQueryData(
    `${apiVersion}/user-other`, // endpoint
    "get", // method
    "user-other" // key
  );

  const handleLogout = (item) => {
    setIsLogout(true);
    setIsData(item.user_other_email);
    setIsId(item.user_other_aid);
    setIsArchiving(true);
  };

  return (
    <>
      <div className="profileHeader px-4 addShadow border-none bg-dashSecondary h-[58px] rounded-tl-lg rounded-tr-lg fixed top-[20px] w-[calc(100%_-_240px)] grid items-center z-[10]">
        <div className="flex justify-between  items-center ">
          <p className="font-semibold text-sm text-[black]">Dashboard</p>
          <div className="flex items-center gap-4">
            <div>
              <Link
                to={`${devNavUrl}/`}
                className="tooltip-phone"
                data-tooltip="Go to Webpage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsBoxArrowUpRight
                  className={`hover:text-black size-4 ${
                    menu === "webpage" ? "text-black" : "text- hover:text-black"
                  }`}
                />
              </Link>
            </div>
            <div>
              <div
                className={`p-px rounded-full border-2 hover:border-primary/50 border-transparent cursor-pointer relative w-10 `}
                onClick={handleLogout}
              >
                <div className="bg-[white] p-1.5 rounded-full ">
                  <span className=" p-1 rounded-full ">LR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isLogout && (
        <ModalLogout
          setIsLogout={setIsLogout}
          queryKey={"user-other"}
          mysqlEndpoint={`${apiVersion}/user-other/${id}`}
          item={isData}
          archive={isArchiving}
          isLogout={isLogout}
        />
      )}
    </>
  );
};

export default DashboardNav;
