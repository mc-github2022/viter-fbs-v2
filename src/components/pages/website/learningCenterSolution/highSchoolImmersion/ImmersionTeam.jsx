import React from "react";
import {
  apiVersion,
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../helpers/functions-general";
import useQueryData from "../../../../custom-hooks/useQueryData";
import LoadImages from "../../../../partials/LoadImages";
import TableLoading from "../../../../partials/spinners/TableLoading";

const ImmersionTeam = () => {
  const {
    isFetching: isFetchingLcssTeams,
    isLoading: isLoadingLcssTeams,
    error: errorLcssTeams,
    data: lcssTeamsData,
  } = useQueryData(
    `${apiVersion}/lcss-teams`, // endpoint
    "get", // method
    "lcss-teams", // key
    {},
    null,
    true
  );

  const { data: lcssTeamTitleData } = useQueryData(
    `${apiVersion}/lcss-teams-title`, // endpoint
    "get", // method
    "lcss-teams-title", // key
    {},
    null,
    true
  );

  return (
    <>
      <div className="ImmersionTeam md:py-40">
        <div className="customContainer">
          <div
            className="mb-12
          "
          >
            <p>{lcssTeamTitleData?.data?.[0]?.teams_title_substitle_a || ""}</p>
            <h3 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1]">
              {lcssTeamTitleData?.data?.[0]?.teams_title_title || ""}
            </h3>
            <p>{lcssTeamTitleData?.data?.[0]?.teams_title_substitle_b || ""}</p>
          </div>
          <div className="wrapper flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-10">
            {isLoadingLcssTeams || isFetchingLcssTeams ? (
              <TableLoading cols={1} count={15} />
            ) : (
              lcssTeamsData?.data.map((item, key) => {
                const teamImage = getConvertStringToJSONparseData(
                  item.lcss_teams_img
                );
                return (
                  <div
                    className="teamItem flex flex-col text-center lg:flex lg:flex-row lg:text-left items-center gap-4 relative"
                    key={key}
                  >
                    {teamImage.map((img, index) => (
                      <LoadImages
                        className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]"
                        url={`${googleHDViewLink}${img?.id}`}
                        alt={item.lcss_teams_name}
                        key={index}
                      />
                    ))}

                    <div>
                      <p className="font-semibold text-xl">
                        {item.lcss_teams_name}
                      </p>
                      <p>{item.lcss_teams_role}</p>
                      <p>{item.lcss_teams_position}</p>
                      <p className="text-sm">{item.lcss_teams_email}</p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImmersionTeam;
