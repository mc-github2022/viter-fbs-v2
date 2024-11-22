import React from "react";
import { Navigate } from "react-router-dom";
import { StoreContext } from "../../../store/StoreContext";
import { devNavUrl, hexToRgb } from "../../helpers/functions-general";
import { queryData } from "../../helpers/queryData";
import FetchingSpinner from "../../partials/spinners/FetchingSpinner";
import PageNotFound from "@/components/partials/PageNotFound";

const ProtectedRouteOther = ({ children }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [loading, setLoading] = React.useState(true);
  const [isAuth, setIsAuth] = React.useState("");
  const localhristoken = JSON.parse(localStorage.getItem("localhristoken"));
  const [pageStatus, setPageStatus] = React.useState(false);

  // console.log(currentPath);

  React.useEffect(() => {
    const fetchLogin = async () => {
      const login = await queryData(`/v1/user-other/token`, "post", {
        token: localhristoken.token,
      });

      const isUserKeyMatched =
        login.success &&
        login.data.user_other_key === login.data.user_other_other_password;

      // check if the password from database is matched
      // to the password used to login
      // if not, logout the user

      if (isUserKeyMatched === false) {
        setLoading(false);
        setIsAuth("456");
        localStorage.removeItem("localhristoken");
        return;
      }

      if (typeof login === "undefined" || !login.success) {
        setLoading(false);
        setIsAuth("456");
      } else {
        dispatch(
          setCredentials({
            ...login.data,
          })
        );

        console.log({ ...login.data });

        setIsAuth("123");
        setLoading(false);
        delete login.data.user_other_other_password;
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

    if (localhristoken !== null) {
      fetchLogin();
    } else {
      setLoading(false);
      localStorage.removeItem("localhristoken");
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
          <Navigate to={`${devNavUrl}/login`} />
        ) : (
          <p>API end point error / Page not found.</p>
        )}
      </>
    );
  }
};

export default ProtectedRouteOther;
