import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useQueryData from "../../../custom-hooks/useQueryData";
import {
  apiVersion,
  devNavUrl,
  getConvertStringToJSONparseData,
  UrlDeveloper,
} from "../../../helpers/functions-general";
import ModalDelete from "../../../partials/modals/ModalDelete";
import FetchingSpinner from "../../../partials/spinners/FetchingSpinner";
import NoData from "../../../partials/spinners/NoData";
import ServerError from "../../../partials/spinners/ServerError";
import TableLoading from "../../../partials/spinners/TableLoading";
import { setIsAdd, setIsDelete } from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";
import { useNavigate } from "react-router-dom";

const ContactFormSettingsTable = ({ setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [id, setIsId] = React.useState("");
  const [isData, setIsData] = React.useState("");
  const navigate = useNavigate();

  const handleGoToPage = (item) => {
    const url =
      store.credentials.data.role_code === "role_is_developer"
        ? `${devNavUrl}/${UrlDeveloper}/contact-form/view?contactformid=${item.form_aid}`
        : `${devNavUrl}/contact-form/view?contactformid=${item.form_aid}`;

    navigate(url);
  };

  const {
    isFetching,
    error,
    isLoading,
    data: contentFormData,
  } = useQueryData(
    `${apiVersion}/contactForm`, // endpoint
    "get", // method
    "contactForm" // key
  );

  let counter = 1;

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setIsData(item.form_name);
    setIsId(item.form_aid);
  };

  console.log(contentFormData);

  return (
    <>
      <div className=" shadow-md rounded-md overflow-y-auto min-h-full md:min-h-[calc(100vh-30px)] lg:max-h-[calc(90vh-150px)] mb-10 lg:mb-0 lg:min-h-0 relative">
        {isFetching && !isLoading && <FetchingSpinner />}
        <table>
          <thead>
            <tr className="text-[black]">
              <th className="pl-2 w-[1rem]">#</th>
              <th className="min-w-[6rem]">Form Name</th>
              <th className="min-w-[6rem]">Subtitle</th>
              <th className="min-w-[6rem]">Title</th>
              <th className="min-w-[5rem]">Address</th>
              <th className="min-w-[6rem]">Services</th>
              <th className="min-w-[6rem]">Image</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="relative">
            {(isLoading || contentFormData?.data.length === 0) && (
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

            {contentFormData?.data.map((item, key) => {
              const image =
                getConvertStringToJSONparseData(item.form_img) || [];
              return (
                <tr key={key} className="place-content-start text-[14px]">
                  <td className="pl-2 place-content-start">{counter++}.</td>
                  <td
                    className="place-content-start hover:cursor-pointer hover:underline hover:text-primary"
                    onClick={() => handleGoToPage(item)}
                  >
                    {item.form_name}
                  </td>
                  <td className="place-content-start">{item.form_subtitle}</td>
                  <td className="place-content-start">{item.form_title}</td>
                  <td className="place-content-start">{item.form_address}</td>
                  <td className="place-content-start capitalize">
                    {item.form_services}
                  </td>

                  <td className="place-content-start">
                    {image.map((img, index) => (
                      <p key={index}>{img.name}</p>
                    ))}
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
              );
            })}
          </tbody>
        </table>
      </div>

      {store.isDelete && (
        <ModalDelete
          setIsDelete={setIsDelete}
          queryKey={"contactForm"}
          mysqlEndpoint={`${apiVersion}/contactForm/${id}`}
          item={isData}
        />
      )}
    </>
  );
};

export default ContactFormSettingsTable;
