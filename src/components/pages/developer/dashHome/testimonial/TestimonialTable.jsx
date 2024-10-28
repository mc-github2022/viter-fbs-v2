import React from "react";
import { StoreContext } from "../../../../store/StoreContext";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { setIsAdd, setIsDelete } from "../../../../store/StoreAction";
import ModalDelete from "../../../../partials/modals/ModalDelete";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import TableSpinner from "../../../../partials/spinners/TableSpinner";
import TableLoading from "../../../../partials/spinners/TableLoading";
import NoData from "../../../../partials/spinners/NoData";
import ServerError from "../../../../partials/spinners/ServerError";
import { MdDelete } from "react-icons/md";

const TestimonialTable = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setIsId] = React.useState("");
  const [isData, setIsData] = React.useState("");

  const {
    isFetching,
    error,
    isLoading,
    status,
    data: testimonialData,
  } = useQueryData(
    "/v1/testimonial", // endpoint
    "get", // method
    "testimonial" // key
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
              <tr className="text-[black]">
                <th className="pl-2 w-[1rem]">#</th>
                <th>Category</th>
                <th className="w-[10rem]">Title</th>
                <th className="w-[10rem]">Slug</th>
                <th className="w-[8rem]">Date</th>
                <th>Content</th>
                <th className="w-[8rem]">Image</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="relative">
              {isLoading && status !== "pending" && <TableSpinner />}
              {(status === "pending" || testimonialData?.data.length === 0) && (
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

              {testimonialData?.data.map((item, key) => (
                <tr key={key} className="place-content-start text-[14px]">
                  <td className="pl-2 place-content-start">{counter++}</td>
                  <td className="place-content-start">
                    {item.home_insights_category}
                  </td>
                  <td className="place-content-start">
                    {item.home_insights_title}
                  </td>
                  <td className="place-content-start">
                    {item.home_insights_slug}
                  </td>
                  <td className="place-content-start">
                    {formatDate(item.home_insights_date)}
                  </td>
                  <td>
                    <p>{item.home_insights_paragraph_a}</p>
                  </td>
                  <td className="place-content-start">
                    {item.home_insights_img}
                  </td>
                  <td className="flex items-center gap-3 justify-end mt-2 lg:mt-0">
                    <button
                      className="tooltip-action-table"
                      data-tooltip="Edit"
                      onClick={() => handleEdit(item)}
                    >
                      <FaEdit className="text-gray-600 text-[18px]" />
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
        )}
      </div>

      {store.isDelete && (
        <ModalDelete
          setIsDelete={setIsDelete}
          queryKey={"testimonial"}
          mysqlEndpoint={`/v1/testimonial/${id}`}
          item={isData}
        />
      )}
    </>
  );
};

export default TestimonialTable;
