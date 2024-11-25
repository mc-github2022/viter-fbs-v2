import React, { useContext } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import { Link } from "react-router-dom";
import { apiVersion, devNavUrl } from "../../helpers/functions-general";
import useQueryData from "../../custom-hooks/useQueryData";
import { setIsArchive } from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";
import ModalLogout from "../modals/ModalLogout";

const DashboardNav = ({ menu }) => {
  const ref = React.useRef();
  const { store, dispatch } = React.useContext(StoreContext);
  const [isOpen, setIsOpen] = React.useState(false);
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

  const handleOpen = () => {
    setIsOpen(!isOpen);
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
                className={`p-px rounded-full border-2 hover:border-primary/50 border-transparent cursor-pointer relative w-10  ${
                  isOpen && "!border-primary"
                }`}
                onClick={handleLogout}
              >
                <div className="bg-[white] p-1.5 rounded-full ">
                  <span className=" p-1 rounded-full ">LR</span>
                </div>
                {/* {isOpen && (
                  <div className="absolute top-10 -left-[160px] bg-[white] shadow-md flex flex-col gap-2 p-3 min-w-[180px]">
                    <h6 className="text-white font-[inter-regular] text-[15px]">
                      Louren Rubico
                    </h6>
                    <a>
                      <span className="text-white text-sm">
                        louren@gmail.com
                      </span>
                    </a>
                    <Link to={`${devNavUrl}/changePass`}>
                      <span className="text-white text-sm">
                        Change Password
                      </span>
                    </Link>
                    <div className="flex flex-row gap-4 items-center">
                      <Link>
                        <button className=" text-white text-sm">Users</button>
                      </Link>
                    </div>
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {isLogout && (
        <ModalLogout
          setIsLogout={setIsLogout}
          queryKey={"user-other"}
          mysqlEndpoint={`${apiVersion}/user-other/active/${id}`}
          item={isData}
          archive={isArchiving}
        />
      )}
    </>
  );
};

export default DashboardNav;
