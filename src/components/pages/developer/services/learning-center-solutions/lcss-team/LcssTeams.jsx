import React from "react";
import {
  apiVersion,
  devBaseImgUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../../helpers/functions-general";
import { HiPencil } from "react-icons/hi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useQueryData from "../../../../../custom-hooks/useQueryData";
import { StoreContext } from "../../../../../store/StoreContext";
import { setIsDelete, setIsUpdateHome } from "../../../../../store/StoreAction";
import ModalDelete from "../../../../../partials/modals/ModalDelete";
import FetchingSpinner from "../../../../../partials/spinners/FetchingSpinner";
import NoData from "../../../../../partials/spinners/NoData";
import ServerError from "../../../../../partials/spinners/ServerError";
import TableLoading from "../../../../../partials/spinners/TableLoading";
import LoadImages from "../../../../../partials/LoadImages";

const LcssTeams = ({
  lcssTeamsData,
  handleUpdateLcssTeams,
  isFetchingLcssTeams,
  isLoadingLcssTeams,
  errorLcssTeams,
  setItemEdit,
  lcssTeamTitleData,
  handleUpdateLcssTeamsTitle,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isData, setIsData] = React.useState("");
  const [id, setIsId] = React.useState("");

  const handleEdit = (item) => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "lcss-teams" }));
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setIsData(item.lcss_teams_name);
    setIsId(item.lcss_teams_aid);
  };

  return (
    <>
      <div className="theTeam md:py-40">
        <div className="customContainer relative">
          <div
            className="mb-12
             "
          >
            <p>
              {lcssTeamTitleData?.data?.length > 0 &&
              lcssTeamTitleData.data[0]?.teams_title_substitle_a
                ? lcssTeamTitleData?.data[0].teams_title_substitle_a
                : "Subtitle"}
            </p>
            <h3 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1]">
              {lcssTeamTitleData?.data?.length > 0 &&
              lcssTeamTitleData.data[0]?.teams_title_title
                ? lcssTeamTitleData?.data[0].teams_title_title
                : "Title"}
            </h3>
            <p>
              {lcssTeamTitleData?.data?.length > 0 &&
              lcssTeamTitleData.data[0]?.teams_title_substitle_b
                ? lcssTeamTitleData?.data[0].teams_title_substitle_b
                : "Subtitle"}
            </p>
          </div>
          <a
            className="absolute cursor-pointer tooltip-btn left-[32rem] -top-5 "
            data-tooltip="Edit contents"
            onClick={handleUpdateLcssTeamsTitle}
          >
            <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
          </a>
          <a
            className="absolute cursor-pointer right-[6rem] -top-5"
            onClick={handleUpdateLcssTeams}
          >
            <span className=" bg-[#C7AC27] rounded-lg  w-[25px] h-[20px] px-[8px] border-[1px] text-black hover:underline text-base">
              Add
            </span>
          </a>
          {isFetchingLcssTeams && !isLoadingLcssTeams && <FetchingSpinner />}
          {(isLoadingLcssTeams || lcssTeamsData?.data?.length === 0) && (
            <div className="text-center">
              <div className="p-36">
                <NoData />
              </div>
            </div>
          )}
          {errorLcssTeams && (
            <div className="text-center ">
              <div colSpan="100%" className="p-10">
                <ServerError />
              </div>
            </div>
          )}
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
                    <div className="absolute right-16 top-0 flex items-center">
                      <button
                        className="tooltip-action-table"
                        data-tooltip="Edit"
                        onClick={() => handleEdit(item)}
                      >
                        <FaEdit className="text-gray-600 text-[16px]" />
                      </button>
                      <button
                        className="tooltip-action-table"
                        data-tooltip="Delete"
                        onClick={() => handleDelete(item)}
                      >
                        <MdDelete className="text-gray-600 text-[18px]" />
                      </button>
                    </div>
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

      {store.isDelete && (
        <ModalDelete
          setIsDelete={setIsDelete}
          queryKey={"lcss-teams"}
          mysqlEndpoint={`/v1/lcss-teams/${id}`}
          item={isData}
        />
      )}
    </>
  );
};

export default LcssTeams;
