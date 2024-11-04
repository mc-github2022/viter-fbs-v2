import React from "react";
import { StoreContext } from "../../../store/StoreContext";
import useQueryData from "../../../custom-hooks/useQueryData";
import { setIsAdd, setIsDelete } from "../../../store/StoreAction";
import ModalDelete from "../../../partials/modals/ModalDelete";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import TableSpinner from "../../../partials/spinners/TableSpinner";
import NoData from "../../../partials/spinners/NoData";
import TableLoading from "../../../partials/spinners/TableLoading";
import FetchingSpinner from "../../../partials/spinners/FetchingSpinner";

const IndustryTestimonialTable = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setIsId] = React.useState("");
  const [isData, setIsData] = React.useState("");

  const {
    isFetching,
    error,
    isLoading,
    status,
    data: IndtestimonialData,
  } = useQueryData(
    "/v1/indTestimonial", // endpoint
    "get", // method
    "indTestimonial" // key
  );

  let counter = 1;

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setIsData(item.industry_testimonial_name);
    setIsId(item.industry_testimonial_aid);
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
                <th>Name</th>
                <th>Position</th>
                <th>Company</th>
                <th>Category</th>
                <th className="w-[30rem]">Message</th>
                <th>Image</th>
                <th>Logo</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="relative">
              {isLoading && status !== "pending" && <TableSpinner />}
              {(status === "pending" ||
                IndtestimonialData?.data.length === 0) && (
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

              {IndtestimonialData?.data.map((item, key) => (
                <tr key={key} className="place-content-start text-[14px]">
                  <td className="pl-2 place-content-start">{counter++}</td>
                  <td className="place-content-start">
                    {item.industry_testimonial_name}
                  </td>
                  <td className="place-content-start">
                    {item.industry_testimonial_position}
                  </td>
                  <td className="place-content-start">
                    {item.industry_testimonial_company}
                  </td>
                  <td className="place-content-start">
                    {item.industry_testimonial_category}
                  </td>
                  <td className="place-content-start">
                    <p className="line-clamp-5">
                      {item.industry_testimonial_message}
                    </p>
                  </td>
                  <td>
                    <p>{item.industry_testimonial_img}</p>
                  </td>
                  <td className="place-content-start">
                    {item.industry_testimonial_logo}
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
          queryKey={"indTestimonial"}
          mysqlEndpoint={`/v1/indTestimonial/${id}`}
          item={isData}
        />
      )}
    </>
  );
};

export default IndustryTestimonialTable;
