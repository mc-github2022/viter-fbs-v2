import React from "react";
import { StoreContext } from "../store/StoreContext";

// local url
export const urlPathFBSMarketingWebsite =
  "http://localhost/react-vite/viter-fbs-v2";
export const imgUrlPathFBSMarketingWebsite =
  "http://localhost/react-vite/viter-fbs-v2/public/img";

// Online Demo url
// export const urlPathFBSMarketingWebsite =
//   "https://frontlinebusiness.com.ph/newsite";
// export const imgUrlPathFBSMarketingWebsite =
//   "http://localhost/react-vite/viter-fbs-v2/public/img";

// // Online Demo url
// export const urlPathFBSMarketingWebsite = "https://frontlinebusiness.com.ph";
// export const imgUrlPathFBSMarketingWebsite =
//   "http://frontlinebusiness.com.ph/img";

export const devApiUrl = `${urlPathFBSMarketingWebsite}/rest`;
export const devBaseUrl = `${urlPathFBSMarketingWebsite}`;
export const devBaseImgUrl = `${imgUrlPathFBSMarketingWebsite}`;
export const devNavUrl = "";
// export const devNavUrl = "";
export const apiVersion = "/v1";

export const UrlDeveloper = "developer";

// dev key from thunder client
export const devKey =
  "$2a$12$47wDvbLInZif/PVS8B6P3.7WxyJvUpBzZAWCsnWJUKq3nrn4qgmeO";

//reCAPTCHA site key TEST
// export const siteKey = "6LeUuBgqAAAAAKDIsrmFwuV8ocqZusI7fB_69Gva";

// reCAPTCHA site key PRODUCTION
export const siteKey = "";

// formatting date and time
export const setTimeZone = "Asia/Taipei";

export const formatDate = (dateVal, val = "", format = "") => {
  const formatedDate = val;
  if (typeof dateVal !== "undefined" && dateVal !== "") {
    // formatting date
    const event = new Date(dateVal);

    return event.toLocaleString("en", options(format));
  }
  return formatedDate;
};

export const options = (format) => {
  const options =
    format === "with-weeks"
      ? {
          timeZone: setTimeZone,
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }
      : format === "timezone-name"
      ? {
          timeZoneName: "short",
        }
      : format === "weeks"
      ? {
          timeZone: setTimeZone,
          weekday: "long",
        }
      : format === "no-year-with-weeks"
      ? {
          timeZone: setTimeZone,
          weekday: "long",
          month: "long",
          day: "numeric",
        }
      : format === "no-year"
      ? {
          timeZone: setTimeZone,
          month: "long",
          day: "numeric",
        }
      : format === "date-time-with-weeks"
      ? {
          timeZone: setTimeZone,
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        }
      : format === "plain-date"
      ? {
          timeZone: setTimeZone,
        }
      : format === "numeric-week"
      ? {
          timeZone: setTimeZone,
          weekday: "numeric",
        }
      : format === "year"
      ? {
          timeZone: setTimeZone,
          year: "numeric",
        }
      : format === "month-short-year"
      ? {
          timeZone: setTimeZone,
          month: "short",
          year: "numeric",
        }
      : {
          timeZone: setTimeZone,
          month: "long",
          day: "numeric",
          year: "numeric",
        };

  return options;
};

// fetch for uploading photo or file
export const fetchFormData = async (url, fd = {}) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: fd,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response; // Return response for further processing
  } catch (error) {
    console.error("API endpoint error:", error);
    return null; // Return null to indicate failure
  }
};

// get the url id parameter
export const getUrlParam = (id) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  // const param = urlParams.get(id);
  // return param;
  return urlParams;
};

export const getDateNow = () => {
  return new Date().toISOString("en", options("plain-date")).split("T")[0];
};

// Copyright year
export const copyrightYear = () => {
  return getDateNow().split("-")[0];
};

// storage after login
export function setStorageRoute(jwt, isDev) {
  localStorage.setItem("localfbstoken", JSON.stringify({ token: jwt, isDev }));
}

export const handleEscape = (handleClose) => {
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.keyCode === 27) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  });
};

// get user type
export const getUserType = () => {
  const { store } = React.useContext(StoreContext);

  let link =
    store.credentials.data?.role_code === "role_is_admin" ||
    store.credentials.data?.role_code === "role_is_marketing"
      ? ``
      : `/${store.credentials.data?.role.toLowerCase().replaceAll(" ", "-")}`;

  return link;
};
