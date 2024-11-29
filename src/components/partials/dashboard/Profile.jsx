import React from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { StoreContext } from "../../store/StoreContext";
import ModalLogout from "../modals/ModalLogout";
import { apiVersion } from "../../helpers/functions-general";

const Profile = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setIsId] = React.useState("");
  const [isData, setIsData] = React.useState("");
  const [isArchiving, setIsArchiving] = React.useState(false);
  const [isLogout, setIsLogout] = React.useState(false);

  const handleLogout = (item) => {
    setIsLogout(!isLogout);
    setIsData(item.user_other_email);
    setIsId(item.user_other_aid);
    setIsArchiving(true);
  };

  const email = store.credentials.data.user_developer_email;
  const firstname = store.credentials.data.first_name;
  const lastname = store.credentials.data.last_name;
  const role = store.credentials.data.role_name;

  return (
    <>
      <div className="absolute top-[70px] right-[40px] z-[10] bg-white p-4 rounded-lg shadow-lg">
        <ul className="text-xs [&>li]:mb-1 [&>li]:flex [&>li]:items-center [&>li]:gap-1">
          <li className="text-sm font-semibold">
            {`${firstname} ${lastname}`}
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

export default Profile;
