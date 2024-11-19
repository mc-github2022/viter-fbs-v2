import React from "react";

// local url
export const urlPathFBSMarketingWebsite =
  "http://localhost/react-vite/viter-fbs-v2";
export const imgUrlPathFBSMarketingWebsite =
  "http://localhost/react-vite/viter-fbs-v2/public/img";

// Online Demo url
// export const urlPathFBSMarketingWebsite =
//   "https://frontlinebusiness.com.ph/newsite";
// export const imgUrlPathFBSMarketingWebsite =
//   "https://frontlinebusiness.com.ph/newsite/img";

export const devApiUrl = `${urlPathFBSMarketingWebsite}/rest`;
export const devBaseUrl = `${urlPathFBSMarketingWebsite}`;
export const devBaseImgUrl = `${imgUrlPathFBSMarketingWebsite}`;
// export const devBaseMediaUrl = `${mediaUrlPathFBSMarketingWebsite}`;
// export const devNavUrl = "/newsite";
export const devNavUrl = "";
export const apiVersion = "/v1";

export const UrlDeveloper = "developer";

// dev key from thunder client
export const devKey =
  "$2a$12$47wDvbLInZif/PVS8B6P3.7WxyJvUpBzZAWCsnWJUKq3nrn4qgmeO";

// get focus on a button
export const GetFocus = (id) => {
  React.useEffect(() => {
    const obj = document.getElementById(id);
    obj.focus();
  }, []);
};

// get the id of specific data
export const getUrlParam = (id) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  // const param = urlParams.get(id);
  // return param;
  return urlParams;
};

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

//time format
export const getTimeFormat = (time) => {
  let result = "";

  if (typeof time !== "undefined" && time !== "") {
    let getTime = time.split(" ");
    let newTime = time;
    if (getTime?.length > 1) {
      newTime = getTime[1];
    }

    result = `${newTime} AM `;
    if (
      Number(newTime.split(":")[0]) >= 12 &&
      Number(newTime.split(":")[0]) !== 24
    ) {
      result = `${newTime} PM `;
    }
  }
  return result;
};

//rgb to hex
export const hexToRgb = (hex) => {
  let result = "";
  console.log(hex);
  if (typeof hex !== "undefined" && hex !== "") {
    result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    result = `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(
      result[3],
      16
    )} `;
  }

  return result;
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

// Function to calculate tenure
export const calculateTenure = (date) => {
  const currentDate = new Date();
  const hire = new Date(date);

  let years = currentDate.getFullYear() - hire.getFullYear();
  let months = currentDate.getMonth() - hire.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  if (currentDate.getDate() < hire.getDate()) {
    months--;
    if (months < 0) {
      years--;
      months += 12;
    }
  }

  return { years, months };
};
