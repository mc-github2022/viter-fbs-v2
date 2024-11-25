import React from "react";
import { FaArchive } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import { queryData } from "../../helpers/queryData";
import { StoreContext } from "../../store/StoreContext";
import { setError, setMessage, setSuccess } from "../../store/StoreAction";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ButtonSpinner from "../spinners/ButtonSpinner";
import { IoLogOut } from "react-icons/io5";
import { Navigate, useNavigate } from "react-router-dom";
import { devNavUrl, UrlDeveloper } from "../../helpers/functions-general";
import FetchingSpinner from "../spinners/FetchingSpinner";
import TableSpinner from "../spinners/TableSpinner";
import { checkLocalStorage } from "../../helpers/login-functions";

const ModalLogout = ({
  setIsLogout,
  mysqlEndpoint,
  queryKey,
  item,
  isLogout,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsLogout(false);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) => queryData(mysqlEndpoint, "put", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [queryKey] });
      // dispatch(setIsDelete(false));

      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
        dispatch(setSuccess(false));
      } else {
        setIsLogout(false);

        dispatch(setSuccess(true));
        dispatch(setMessage("Logout Successfully"));
      }
    },
  });

  // const handleYes = async () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     if (checkLocalStorage() !== null) {
  //       localStorage.removeItem("localfbstoken");
  //       store.credentials.data.role_code === "role_is_developer"
  //         ? window.location.replace(`${devNavUrl}/${UrlDeveloper}/login`)
  //         : store.credentials.data.role_code === "role_is_admin"
  //         ? window.location.replace(`${devNavUrl}/login`)
  //         : "";
  //       return;
  //     }
  //     setLoading(false);
  //   }, 1500);
  // };

  const handleYes = async () => {
    setLoading(true);

    setTimeout(() => {
      const token = localStorage.getItem("localfbstoken");
      console.log("Token in localStorage:", token);

      if (token !== null) {
        console.log("Removing localfbstoken and redirecting...");
        localStorage.removeItem("localfbstoken");

        const roleCode = store.credentials?.data?.role_code;
        console.log("Role code:", roleCode);

        if (roleCode === "role_is_developer") {
          window.location.replace(`${devNavUrl}/${UrlDeveloper}/login`);
        } else if (roleCode === "role_is_admin") {
          window.location.replace(`${devNavUrl}/login`);
        } else {
          console.warn("Unhandled role code:", roleCode);
        }
      } else {
        console.log("Token is missing. Redirecting to default login.");
        window.location.replace(`${devNavUrl}/login`);
      }
    }, 1500);
  };

  return (
    <>
      {loading && <TableSpinner />}
      <div className=" fixed top-0 left-0 h-screen w-full flex justify-center items-center z-[999]">
        <div
          className=" backdrop bg-[black] opacity-50 h-full w-full absolute top-0 left-0 z-[-1] "
          onClick={handleClose}
        ></div>
        <div className="max-w-[450px] w-full bg-[white] rounded-md">
          <div className="flex items-center justify-between p-4 pb-2 relative">
            <div></div>

            <button
              onClick={handleClose}
              className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            >
              <GrFormClose className="text-[35px]" />
            </button>
          </div>

          <div className="p-4 md:p-5 text-center">
            <h2 className="">
              <IoLogOut className="mx-auto mb-8 text-warning w-12 h-12" />
            </h2>
            <h3 className="text-sm pb-2">
              Are you sure you want to logout {item}?
            </h3>
            <div className="flex justify-center mt-5 gap-2">
              <button
                className="inline-block rounded-md w-full px-5 py-2 bg-primary text-[white]"
                onClick={() =>
                  handleYes(localStorage.removeItem("localfbstoken"))
                }
                disabled={mutation.isPending}
              >
                {mutation.isPending ? <ButtonSpinner /> : "Yes"}
              </button>
              <button
                className="inline-block rounded-md w-full px-5 py-2 bg-[#e5e7eb] text-[#1f2937]"
                onClick={handleClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      {console.log(loading)}
    </>
  );
};

export default ModalLogout;
