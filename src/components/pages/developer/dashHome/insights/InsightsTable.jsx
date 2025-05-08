import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdOutlineFileUpload } from "react-icons/md";
import useQueryData from "../../../../custom-hooks/useQueryData";
import {
  apiVersion,
  formatDate,
  getConvertStringToJSONparseData,
} from "../../../../helpers/functions-general";
import ModalDelete from "../../../../partials/modals/ModalDelete";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import NoData from "../../../../partials/spinners/NoData";
import ServerError from "../../../../partials/spinners/ServerError";
import TableLoading from "../../../../partials/spinners/TableLoading";
import TableSpinner from "../../../../partials/spinners/TableSpinner";
import {
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsRestore,
} from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import DraftStatusInsights from "./DraftStatusInsights";
import DraftStatusEventsAndActivities from "../../why-fbs-page/events-and-activities/DraftStatusEventsAndActivities";
import { RiDraftFill } from "react-icons/ri";
import ModalDraft from "../../why-fbs-page/events-and-activities/modals/ModalDraft";
import ModalUpload from "../../why-fbs-page/events-and-activities/modals/ModalUpload";

const InsightsTable = ({ setItemEdit}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setIsId] = React.useState("");
  const [isData, setIsData] = React.useState("");
  const [isArchiving, setIsArchiving] = React.useState(false);

  const {
    isFetching,
    error,
    isLoading,
    data: insightData,
  } = useQueryData(
    `${apiVersion}/insights`, // endpoint
    "get", // method
    "insights" // key
  );

  let counter = 1;

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setIsData(item.home_insights_title);
    setIsId(item.home_insights_aid);
  };

  const handleArchive = (item) => {
    dispatch(setIsArchive(true));
    setIsData(item.home_insights_title);
    setIsId(item.home_insights_aid);
    setIsArchiving(true);
    setIsRestore(false);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setIsData(item.home_insights_title);
    setIsId(item.home_insights_aid);
    setIsArchiving(false);
    setIsRestore(true);
  };

  return (
    <>
      <div className=" shadow-md rounded-md overflow-y-auto min-h-full md:min-h-[calc(100vh-30px)] lg:max-h-[calc(90vh-150px)] mb-10 lg:mb-0 lg:min-h-0 relative">
        {isFetching && !isLoading && <FetchingSpinner />}
        <table>
          <thead>
            <tr className="text-[black]">
              <th className="pl-2 w-[1rem]">#</th>
              <th>Status</th>
              <th>Category</th>
              <th>Title</th>
              <th className="w-[8rem]">Slug</th>
              <th className="w-[8rem]">Date</th>
              <th>Content</th>
              <th>CTA Enable</th>
              <th>Buttton Caption </th>
              <th>Form Selected</th>
              <th className="w-[8rem]">Image</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="relative">
            {(isLoading || insightData?.data.length === 0) && (
              <tr className="text-center">
                <td colSpan="100%" className="p-10">
                  {isLoading ? <TableLoading /> : <NoData />}
                </td>
              </tr>
            )}

            {error && (
              <tr className="text-center ">
                <td colSpan="100%" className="p-10">
                  <ServerError />
                </td>
              </tr>
            )}

            {insightData?.data.map((item, key) => {
              const insightsImages =
                getConvertStringToJSONparseData(item.home_insights_img) || [];
              return (
                <tr key={key} className="place-content-start text-[14px]">
                  <td className="pl-2 place-content-start">{counter++}</td>
                  <td className="place-content-start">
                    {item.home_insights_is_active === 1 ? (
                      <DraftStatusEventsAndActivities text="Active" />
                    ) : (
                      <DraftStatusEventsAndActivities text="Draft" />
                    )}
                  </td>
                  <td className="place-content-start">
                    {item.home_insights_category}
                  </td>
                  <td className="place-content-start">
                    <p className="line-clamp-5">{item.home_insights_title}</p>
                  </td>
                  <td className="place-content-start">
                    <p className="line-clamp-5">{item.home_insights_slug}</p>
                  </td>
                  <td className="place-content-start">
                    {formatDate(item.home_insights_date)}
                  </td>
                  <td className="place-content-start">
                    <p className="line-clamp-5">
                      {item.home_insights_paragraph_a}
                    </p>
                  </td>
                  <td>
                    {item.home_insights_cta_is_active === 1 ? "Yes" : "No"}
                  </td>
                  <td>{item.home_insights_cta_text}</td>
                  <td>{item.home_insights_form_selected}</td>
                  <td className="place-content-start">
                    {insightsImages.map((img, index) => (
                      <p key={index}>{img.name}</p>
                    ))}
                  </td>
                  <td className="flex items-center gap-3 justify-end mt-2 lg:mt-0">
                    {item.home_insights_is_active ? (
                      <>
                        <button
                          className="tooltip-action-table"
                          data-tooltip="Edit"
                          onClick={() => handleEdit(item)}
                        >
                          <FaEdit className="text-gray-600 text-[16px]" />
                        </button>
                        <button
                          className="tooltip-action-table"
                          data-tooltip="Draft"
                          onClick={() => handleArchive(item)}
                        >
                          <RiDraftFill className=" text-gray-600 text-[16px]" />
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="tooltip-action-table"
                          data-tooltip="Edit"
                          onClick={() => handleEdit(item)}
                        >
                          <FaEdit className="text-gray-600 text-[16px]" />
                        </button>
                        <button
                          className="tooltip-action-table"
                          data-tooltip="Publish"
                          onClick={() => handleRestore(item)}
                        >
                          <MdOutlineFileUpload className="text-gray-600 text-[18px]" />
                        </button>
                        <button
                          className="tooltip-action-table"
                          data-tooltip="Delete"
                          onClick={() => handleDelete(item)}
                        >
                          <MdDelete className="text-gray-600 text-[18px]" />
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {store.isDelete && (
        <ModalDelete
          setIsDelete={setIsDelete}
          queryKey={"insights"}
          mysqlEndpoint={`${apiVersion}/insights/${id}`}
          item={isData}
        />
      )}
      {store.isArchive && (
        <ModalDraft
          mysqlApiArchive={`${apiVersion}/insights/active/${id}`}
          msg={"Are you sure you want to draft this post?"}
          successMsg={"Draft succesfully."}
          queryKey={"insights"}
          setIsArchive={setIsArchive}
        />
      )}
      {store.isRestore && (
        <ModalUpload
          mysqlApiRestore={`${apiVersion}/insights/active/${id}`}
          msg={"Are you sure you want to publish this post?"}
          successMsg={"Upload succesfully."}
          queryKey={"insights"}
          setIsRestore={setIsRestore}
        />
      )}
    </>
  );
};

export default InsightsTable;
