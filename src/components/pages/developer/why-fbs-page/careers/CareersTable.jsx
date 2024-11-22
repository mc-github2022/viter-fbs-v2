import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useQueryData from "../../../../custom-hooks/useQueryData";
import ModalDelete from "../../../../partials/modals/ModalDelete";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import NoData from "../../../../partials/spinners/NoData";
import ServerError from "../../../../partials/spinners/ServerError";
import TableLoading from "../../../../partials/spinners/TableLoading";
import { setIsAdd, setIsDelete } from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";

const CareersTable = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setIsId] = React.useState("");
  const [isData, setIsData] = React.useState("");

  const {
    isFetching,
    error,
    isLoading,
    data: careersData,
  } = useQueryData(
    "/v1/careers", // endpoint
    "get", // method
    "careers" // key
  );

  let counter = 1;

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setIsData(item.careers_job_title);
    setIsId(item.careers_aid);
  };

  return (
    <>
      <div className=" shadow-md rounded-md overflow-y-auto min-h-full md:min-h-[calc(100vh-30px)] lg:max-h-[calc(100vh-250px)] mb-10 lg:mb-0 lg:min-h-0 relative">
        {isFetching && !isLoading && <FetchingSpinner />}
        <table>
          <thead>
            <tr className="text-[black]">
              <th className="pl-2 w-[1rem]">#</th>
              <th>Icon Name</th>
              <th>Job Title</th>
              <th>employee classification</th>
              <th>Mode of Work</th>
              <th>Job Status</th>
              <th className="w-[15rem]">Job Description</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="relative">
            {(isLoading || careersData?.data.length === 0) && (
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

            {careersData?.data.map((item, key) => (
              <tr key={key} className="place-content-start text-[14px]">
                <td className="pl-2 place-content-start">{counter++}</td>
                <td className="place-content-start">{item.careers_icon}</td>
                <td className="place-content-start">
                  {item.careers_job_title}
                </td>
                <td className="place-content-start">
                  {item.careers_job_classification}
                </td>
                <td className="place-content-start">{item.careers_job_mode}</td>
                <td className="place-content-start">
                  {item.careers_job_status}
                </td>
                <td>
                  <p className="line-clamp-5">{item.careers_job_description}</p>
                </td>

                <td className="flex items-center gap-3 justify-end mt-2 lg:mt-0">
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {store.isDelete && (
        <ModalDelete
          setIsDelete={setIsDelete}
          queryKey={"careers"}
          mysqlEndpoint={`/v1/careers/${id}`}
          item={isData}
        />
      )}
    </>
  );
};

export default CareersTable;
