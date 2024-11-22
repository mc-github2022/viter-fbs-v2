import React from "react";
import { Navigate } from "react-router-dom";
import {
  setCredentials,
  setError,
  setMessage,
} from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";
import { devNavUrl } from "../../helpers/functions-general";
import { queryData } from "../../helpers/queryData";
import FetchingSpinner from "../../partials/spinners/FetchingSpinner";
import PageNotFound from "@/components/partials/PageNotFound";

const ProtectedRouteDeveloper = ({ children }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(true);
  const [isAuth, setIsAuth] = React.useState("");
  const localfbstoken = JSON.parse(localStorage.getItem("localfbstoken"));
  const [pageStatus, setPageStatus] = React.useState(false);

  React.useEffect(() => {
    const fetchLogin = async () => {
      const login = await queryData(`/v1/user-system/token`, "post", {
        token: localfbstoken.token,
      });

      console.log(login);

      const isUserKeyMatched =
        login.success &&
        login.data.user_other_key === login.data.user_other_system_password;

      // check if the password from database is matched
      // to the password used to login
      // if not, logout the user

      if (isUserKeyMatched === false) {
        setLoading(false);
        setIsAuth("456");
        localStorage.removeItem("localfbstoken");
        return;
      }

      if (typeof login === "undefined" || !login.success) {
        setLoading(false);
        setIsAuth("456");
      } else {
        dispatch(setCredentials(login.data));
        setIsAuth("123");
        setLoading(false);
        delete login.data.user_other_system_password;
        delete login.data.user_other_key;
        delete login.data.role_description;
        delete login.data.role_created;
        delete login.data.role_datetime;
        delete login.data.access_created;
        delete login.data.access_datetime;
      }

      if (
        !login.success ||
        login.data.role.toLowerCase() !== login.data.role_name.toLowerCase()
      ) {
        setPageStatus(true);
      }
    };

    if (localfbstoken !== null) {
      fetchLogin();
    } else {
      setLoading(false);
      localStorage.removeItem("localfbstoken");
      setIsAuth("456");
    }
  }, [dispatch]);

  if (pageStatus) {
    return <PageNotFound />;
  } else {
    return (
      <>
        {loading ? (
          <FetchingSpinner />
        ) : isAuth === "123" ? (
          children
        ) : isAuth === "456" ? (
          <Navigate to={`${devNavUrl}/developer/login`} />
        ) : (
          <p>API end point error / Page not found.</p>
        )}
      </>
    );
  }
};

export default ProtectedRouteDeveloper;
