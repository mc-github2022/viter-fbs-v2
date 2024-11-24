import { devNavUrl } from "./functions-general";

export const checkLocalStorage = () => {
  let localfbstoken = null;
  try {
    localfbstoken = JSON.parse(localStorage.getItem("localfbstoken"));
    // console.log(localfbstoken);
  } catch (error) {
    localfbstoken = null;
  }

  return localfbstoken;
};

export const checkRoleToRedirect = (navigate, data) => {
  {
    data.role_code === "role_is_admin"
      ? navigate(`${devNavUrl}/home-banner`)
      : navigate(
          `${devNavUrl}/${data.role_name
            .toLowerCase()
            .replaceAll(" ", "-")}/home-banner`
        );
  }
  // data.role_is_developer === 1
  //   ? navigate(`${devNavUrl}/${data.role_name.toLowerCase()}/time`)
  //   : data.role_is_admin === 1
  //   ? navigate(`${devNavUrl}/${data.role_name.toLowerCase()}/time`)
  //   : navigate(`${devNavUrl}/${data.role_name.toLowerCase()}/time`);
};
