import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as LuIcons from "react-icons/lu";
import * as PiIcons from "react-icons/pi";
import * as TiIcons from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import ModalDelete from "../../../../../../partials/modals/ModalDelete";
import FetchingSpinner from "../../../../../../partials/spinners/FetchingSpinner";
import NoData from "../../../../../../partials/spinners/NoData";
import ServerError from "../../../../../../partials/spinners/ServerError";
import TableLoading from "../../../../../../partials/spinners/TableLoading";
import {
  setIsDelete,
  setIsDeleteLcss,
  setIsUpdateHome,
} from "../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../store/StoreContext";

const icons = {
  ...FaIcons,
  ...AiIcons,
  ...IoIcons,
  ...TiIcons,
  ...LuIcons,
  ...PiIcons,
  ...BsIcons,
};

const ContinuingServices = ({
  handleUpdateContinuingServices,
  isFetchingServices,
  isLoadingServices,
  continuingServicesData,
  error,
  setItemEdit,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isData, setIsData] = React.useState("");
  const [id, setIsId] = React.useState("");

  const handleEdit = (item) => {
    dispatch(
      setIsUpdateHome({ modal: true, modalCode: "continuing-services" })
    );
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(
      setIsDeleteLcss({ modal: true, modalCode: "continuing-services" })
    );
    setIsData(item.continuing_services_title);
    setIsId(item.continuing_services_aid);
  };

  return (
    <>
      <section className="lcssServices py-20">
        <div className="customContainer relative">
          <a
            className="absolute cursor-pointer right-[6rem] -top-8"
            onClick={handleUpdateContinuingServices}
          >
            <span className=" bg-[#C7AC27] rounded-lg  w-[25px] h-[20px] px-[8px] border-[1px] text-black hover:underline text-base">
              Add
            </span>
          </a>
          {isFetchingServices && !isLoadingServices && <FetchingSpinner />}
          {(isLoadingServices ||
            continuingServicesData?.data?.length === 0) && (
            <div className="text-center">
              <div className="p-36">
                <NoData />
              </div>
            </div>
          )}
          {error && (
            <div className="text-center ">
              <div colSpan="100%" className="p-10">
                <ServerError />
              </div>
            </div>
          )}
          <div className="wrapper flex flex-wrap place-content-center gap-6 ">
            {isLoadingServices || isFetchingServices ? (
              <TableLoading cols={1} count={15} />
            ) : (
              continuingServicesData?.data.map((item, key) => {
                const SelectedIcon = item.continuing_services_icon
                  ? icons[item.continuing_services_icon]
                  : null;

                return (
                  <div
                    className="webDEv py-5 md:px-3 lg:px-0 w-[320px]"
                    key={key}
                  >
                    <div className="flex items-center place-self-end">
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
                    <div className="mb-10">
                      <p>{item.continuing_services_subtitle_a}</p>
                      <h3 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] md:w-full">
                        {item.continuing_services_title}
                      </h3>
                      <p>{item.continuing_services_subtitle_b}</p>
                      <p>{item.continuing_services_prerequisite}</p>
                    </div>
                    <ul className="servicesList [&>li]:flex [&>li]:flex-col [&>li]:gap-2 [&>li]:mb-2 ">
                      <li>
                        {item.continuing_services_list
                          .split("\n") // Split by new lines
                          .filter((list) => list.trim() !== "") // Remove empty lines
                          .map((list, index) => (
                            <div key={index} className="text-base flex gap-2 ">
                              <div className="text-2xl text-dark">
                                {SelectedIcon ? (
                                  <SelectedIcon />
                                ) : (
                                  "No icon selected"
                                )}
                              </div>
                              {list}
                            </div>
                          ))}
                      </li>
                    </ul>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {store.isDeleteLcss?.modal &&
        store.isDeleteLcss.modalCode === "continuing-services" && (
          <ModalDelete
            setIsDelete={setIsDeleteLcss}
            queryKey={"continuing-services"}
            mysqlEndpoint={`/v1/continuing-services/${id}`}
            item={isData}
          />
        )}
    </>
  );
};

export default ContinuingServices;
