import React from "react";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import TableSpinner from "../../../../partials/spinners/TableSpinner";
import TableLoading from "../../../../partials/spinners/TableLoading";
import NoData from "../../../../partials/spinners/NoData";
import ServerError from "../../../../partials/spinners/ServerError";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ModalDelete from "../../../../partials/modals/ModalDelete";
import { setIsAdd, setIsDelete } from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import useQueryData from "../../../../custom-hooks/useQueryData";

const BannerTable = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setIsId] = React.useState("");
  const [isData, setIsData] = React.useState("");

  const {
    isFetching,
    error,
    isLoading,
    status,
    data: bannerData,
  } = useQueryData(
    "/v1/banner", // endpoint
    "get", // method
    "banner" // key
  );

  let counter = 1;

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setIsData(item.home_banner_title);
    setIsId(item.home_banner_aid);
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
                <th className="w-[10rem]">Sub-Title</th>
                <th className="w-[15rem]">Title</th>
                <th>Description</th>
                <th className="w-[8rem]">Button</th>
                <th className="w-[8rem]">Image</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="relative">
              {isLoading && status !== "pending" && <TableSpinner />}
              {(status === "pending" || bannerData?.data.length === 0) && (
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

              {bannerData?.data.map((item, key) => (
                <tr key={key} className="place-content-start text-[14px]">
                  <td className="pl-2 place-content-start">{counter++}</td>
                  <td className="place-content-start">
                    {item.home_banner_sub_title}
                  </td>
                  <td className="place-content-start">
                    {item.home_banner_title}
                  </td>
                  <td className="place-content-start">
                    <p className="line-clamp-5">
                      {item.home_banner_description}
                    </p>
                  </td>
                  <td className="place-content-start">
                    {item.home_banner_button_text}
                  </td>
                  <td className="place-content-start">
                    {item.home_banner_img}
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
          queryKey={"banner"}
          mysqlEndpoint={`/v1/banner/${id}`}
          item={isData}
        />
      )}
    </>
  );
};

export default BannerTable;
