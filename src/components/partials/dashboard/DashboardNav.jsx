import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { apiVersion, devNavUrl } from "../../helpers/functions-general";
import { StoreContext } from "../../store/StoreContext";
import ModalLogout from "../modals/ModalLogout";

const DashboardNav = ({ menu }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isLogout, setIsLogout] = React.useState(false);
  const [id, setIsId] = React.useState("");
  const [isData, setIsData] = React.useState("");
  const [isArchiving, setIsArchiving] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleLogout = () => {
    setIsLogout(!isLogout);
    setIsData(item.user_other_email);
    setIsId(item.user_other_aid);
    setIsArchiving(true);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const firstname = store.credentials.data.first_name.substring(0, 1);

  const lastname = store.credentials.data.last_name.substring(0, 1);

  const email = store.credentials.data.user_developer_email
    ? store.credentials.data.user_developer_email
    : store.credentials.data.user_other_email;
  const firstnameProfile = store.credentials.data.first_name;
  const lastnameProfile = store.credentials.data.last_name;
  const role = store.credentials.data.role_name;
  // console.log(store.credentials.data);
  // to close the modal when clicking outside
  const ref = React.useRef();

  const clickOutsideRef = (e) => {
    if (!ref.current?.contains(e.target)) {
      setOpen(false);
    }
  };
  React.useEffect(() => {
    document.addEventListener("click", clickOutsideRef);
    return () => document.addEventListener("click", clickOutsideRef);
  }, []);

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
                onClick={handleOpen}
                ref={ref}
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

      {open && (
        <div className="absolute top-[70px] right-[40px] z-[10] bg-white p-4 rounded-lg shadow-lg">
          <ul className="text-xs [&>li]:mb-2 [&>li]:flex [&>li]:items-center [&>li]:gap-1">
            <li className="text-sm font-semibold">
              {`${firstnameProfile} ${lastnameProfile}`}
            </li>
            <li>
              <MdOutlineMailOutline />
              {email}
            </li>
            <li className="uppercase">
              <LuUser2 />
              {role}
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 hover:text-primary uppercase"
              >
                <IoLogOutOutline />
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}

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
