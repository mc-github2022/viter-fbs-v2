import React from "react";
import { BsCalculator } from "react-icons/bs";
import { FaEdit, FaLaptop } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { StoreContext } from "../../../../../../store/StoreContext";
import {
  setIsDelete,
  setIsUpdateHome,
} from "../../../../../../store/StoreAction";
import FetchingSpinner from "../../../../../../partials/spinners/FetchingSpinner";
import NoData from "../../../../../../partials/spinners/NoData";
import TableLoading from "../../../../../../partials/spinners/TableLoading";
import ServerError from "../../../../../../partials/spinners/ServerError";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as LuIcons from "react-icons/lu";
import * as PiIcons from "react-icons/pi";
import * as TiIcons from "react-icons/ti";
import * as BsIcons from "react-icons/bs";
import ModalDelete from "../../../../../../partials/modals/ModalDelete";

const icons = {
  ...FaIcons,
  ...AiIcons,
  ...IoIcons,
  ...TiIcons,
  ...LuIcons,
  ...PiIcons,
  ...BsIcons,
};

const OjtServices = ({
  handleUpdateOjtServices,
  isFetchingServices,
  isLoadingServices,
  ojtServicesData,
  error,
  setItemEdit,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isData, setIsData] = React.useState("");
  const [id, setIsId] = React.useState("");

  const handleEdit = (item) => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "ojt-services" }));
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setIsData(item.ojt_services_title);
    setIsId(item.ojt_services_aid);
  };

  return (
    <>
      <section className="lcssServices py-20">
        <div className="customContainer relative">
          <a
            className="absolute cursor-pointer right-[6rem] -top-8"
            onClick={handleUpdateOjtServices}
          >
            <span className=" bg-[#C7AC27] rounded-lg  w-[25px] h-[20px] px-[8px] border-[1px] text-black hover:underline text-base">
              Add
            </span>
          </a>
          {isFetchingServices && !isLoadingServices && <FetchingSpinner />}
          {(isLoadingServices || ojtServicesData?.data?.length === 0) && (
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
          <div className="wrapper flex flex-wrap place-content-center md:grid md:grid-cols-2">
            {isLoadingServices || isFetchingServices ? (
              <TableLoading cols={1} count={15} />
            ) : (
              ojtServicesData?.data.map((item, key) => {
                const SelectedIcon = item.ojt_services_icon
                  ? icons[item.ojt_services_icon]
                  : null;

                return (
                  <div
                    className="webDEv w-[387px] py-5 md:px-3 lg:px-0"
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
                      <p>{item.ojt_services_subtitle_a}</p>
                      <h3 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] md:w-[357px]">
                        {item.ojt_services_title}
                      </h3>
                      <p>{item.ojt_services_subtitle_b}</p>
                    </div>
                    <ul className="servicesList [&>li]:flex [&>li]:flex-col [&>li]:gap-2 [&>li]:mb-2 ">
                      <li>
                        {item.ojt_services_list
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

      {store.isDelete && (
        <ModalDelete
          setIsDelete={setIsDelete}
          queryKey={"ojt-services"}
          mysqlEndpoint={`/v1/ojt-services/${id}`}
          item={isData}
        />
      )}
    </>
  );
};

export default OjtServices;
