import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { apiVersion, devNavUrl } from "../../helpers/functions-general";
import { StoreContext } from "../../store/StoreContext";
import ModalLogout from "../modals/ModalLogout";

const DashboardNav = ({ menu }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setIsId] = React.useState("");
  const [isData, setIsData] = React.useState("");
  const [isArchiving, setIsArchiving] = React.useState(false);
  const [isLogout, setIsLogout] = React.useState(false);

  const handleLogout = (item) => {
    setIsLogout(true);
    setIsData(item.user_other_email);
    setIsId(item.user_other_aid);
    setIsArchiving(true);
  };

  const firstname = store.credentials.data.first_name.substring(0, 1);

  const lastname = store.credentials.data.last_name.substring(0, 1);

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
                <div className="bg-[gray] p-[5px] rounded-full ">
                  <span className=" rounded-full text-white flex justify-center">
                    {firstname}
                    {lastname}
                  </span>
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
        />
      )}
    </>
  );
};

export default DashboardNav;
