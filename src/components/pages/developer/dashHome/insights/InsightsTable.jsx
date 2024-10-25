import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useQueryData from "../../../../custom-hooks/useQueryData";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import TableSpinner from "../../../../partials/spinners/TableSpinner";
import TableLoading from "../../../../partials/spinners/TableLoading";
import NoData from "../../../../partials/spinners/NoData";
import ServerError from "../../../../partials/spinners/ServerError";
import { StoreContext } from "../../../../store/StoreContext";
import { setIsAdd, setIsDelete } from "../../../../store/StoreAction";
import ModalDelete from "../../../../partials/modals/ModalDelete";

const InsightsTable = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setIsId] = React.useState("");
  const [isData, setIsData] = React.useState("");

  const {
    isFetching,
    error,
    isLoading,
    status,
    data: insightData,
  } = useQueryData(
    "/v1/insights", // endpoint
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

  return (
    <>
      <div className=" shadow-md rounded-md overflow-y-auto min-h-full md:min-h-[calc(100vh-30px)] lg:max-h-[calc(100vh-250px)] mb-10 lg:mb-0 lg:min-h-0 relative">
        {isFetching ? (
          <FetchingSpinner />
        ) : (
          <table>
            <thead>
              <tr>
                <th className="pl-2 w-[1rem]">#</th>
                <th className="w-[1rem]">Category</th>
                <th>Title</th>
                <th>Slug</th>
                <th>Date</th>
                <th>Content</th>
                <th>Image</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="relative">
              {isLoading && status !== "pending" && <TableSpinner />}
              {(status === "pending" || insightData?.data.length === 0) && (
                <tr className="text-center">
                  <td colSpan="100%" className="p-10">
                    {status === "pending" ? <TableLoading /> : <NoData />}
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

              {insightData?.data.map((item, key) => (
                <tr key={key}>
                  <td className="pl-2">{counter++}</td>
                  <td>{item.home_insights_category}</td>
                  <td>{item.home_insights_title}</td>
                  <td>{item.home_insights_slug}</td>
                  <td>{item.home_insights_date}</td>
                  <td className="line-clamp-2">
                    {item.home_insights_paragraph_a}
                    {item.home_insights_paragraph_b}
                    {item.home_insights_paragraph_c}
                  </td>
                  <td>{item.home_insights_img}</td>
                  <td className="flex items-center gap-3 justify-end mt-2 lg:mt-0">
                    <button
                      className="tooltip-action-table"
                      data-tooltip="Edit"
                      onClick={() => handleEdit(item)}
                    >
                      <FaEdit className="text-gray-600" />
                    </button>
                    <button
                      className="tooltip-action-table"
                      data-tooltip="Delete"
                      onClick={() => handleDelete(item)}
                    >
                      <MdDelete className="text-gray-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {store.isDelete && (
        <ModalDelete
          setIsDelete={setIsDelete}
          queryKey={"insights"}
          mysqlEndpoint={`/v1/insights/${id}`}
          item={isData}
        />
      )}
    </>
  );
};

export default InsightsTable;
