import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import * as IoIcons from "react-icons/io";
import * as LuIcons from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import * as PiIcons from "react-icons/pi";
import * as TiIcons from "react-icons/ti";
import ModalDelete from "../../../../../../partials/modals/ModalDelete";
import FetchingSpinner from "../../../../../../partials/spinners/FetchingSpinner";
import NoData from "../../../../../../partials/spinners/NoData";
import ServerError from "../../../../../../partials/spinners/ServerError";
import TableLoading from "../../../../../../partials/spinners/TableLoading";
import {
    setIsDelete,
    setIsUpdateHome,
} from "../../../../../../store/StoreAction";
import { StoreContext } from "../../../../../../store/StoreContext";
import ContactFormDefault from "../../../../contact-form-default/ContactFormDefault";

const icons = {
  ...FaIcons,
  ...AiIcons,
  ...IoIcons,
  ...TiIcons,
  ...LuIcons,
  ...PiIcons,
  ...BsIcons,
};

const AdministrativeServices = ({
  contactFormDefaultData,
  handleUpdateContactFormDefault,
  pageName,
  handleUpdateAdministrativeServicesTitle,
  handleUpdateAdministrativeServicesList,
  isFetchingServices,
  isLoadingServices,
  error,
  setItemEdit,
  administrativeServicesData,
}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [isContactDefaultOpen, setIsContactDefaultOpen] = React.useState(false);

  const handleOpen = () => {
    setIsContactDefaultOpen(true);
  };

  const handleEdit = (item) => {
    dispatch(setIsUpdateHome(true));
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setIsData(item.administrative_services_title);
    setIsId(item.administrative_services_aid);
  };

  return (
    <>
      <section className="serviceList pt-0 pb-20 lg:pt-10">
        <div className="customContainer relative">
          <div className="sectionDesc text-center md:w-[70%] mx-auto mb-14">
            <h2 className="text-[clamp(20px,6vw,40px)] leading-[1.1] font-semibold mb-10">
              {administrativeServicesData?.data?.[0]
                ?.administrative_services_title_black_a || "Title"}{" "}
              <span className="text-primary">
                {administrativeServicesData?.data?.[0]
                  ?.administrative_services_title_highlighted || "Title"}{" "}
              </span>{" "}
              {administrativeServicesData?.data?.[0]
                ?.administrative_services_title_black_b || "Title"}
            </h2>
            <p className="subDesc mb-10">
              {administrativeServicesData?.data?.[0]
                ?.administrative_services_description || "Description"}
            </p>
            <button
              onClick={handleOpen}
              className="btn bg-primary text-light font-light hover:bg-secondary transition-all"
            >
              {administrativeServicesData?.data?.[0]
                ?.administrative_services_button_text || "Button"}
            </button>
            <a
              className="absolute cursor-pointer tooltip-btn right-[10rem] -top-6 "
              data-tooltip="Edit contents"
              onClick={handleUpdateAdministrativeServicesTitle}
            >
              <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
            </a>
          </div>
          <a
            className="absolute cursor-pointer right-[6rem] top-[13rem]"
            onClick={handleUpdateAdministrativeServicesList}
          >
            <span className=" bg-[#C7AC27] rounded-lg  w-[25px] h-[20px] px-[8px] border-[1px] text-black hover:underline text-base">
              Add
            </span>
          </a>
          {isFetchingServices && !isLoadingServices && <FetchingSpinner />}
          {(isLoadingServices ||
            administrativeServicesData?.data?.length === 0) && (
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
          <ul className="serviceInclusion grid md:grid-cols-2 gap-6">
            {isLoadingServices || isFetchingServices ? (
              <TableLoading cols={1} count={15} />
            ) : (
              administrativeServicesData?.data.map((item, key) => {
                const SelectedIcon = item.administrative_services_icon
                  ? icons[item.administrative_services_icon]
                  : null;

                return (
                  <li className="flex items-center gap-7" key={key}>
                    {item.administrative_services_title
                      .split("\n") // Split by new lines
                      .filter((list) => list.trim() !== "") // Remove empty lines
                      .map((list, index) => (
                        <div key={index} className="flex items-center gap-7">
                          <div className="bg-customGray rounded-lg addShadow">
                            <div className="w-16 h-16 grid place-items-center">
                              <div size={28} className="text-3xl text-primary">
                                {SelectedIcon ? (
                                  <SelectedIcon />
                                ) : (
                                  "No icon selected"
                                )}
                              </div>
                            </div>
                          </div>
                          <p className="font-semibold text-xl lg:text-2xl">
                            {list}
                          </p>
                        </div>
                      ))}
                    <div className="flex items-center place-self-start ">
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
                  </li>
                );
              })
            )}

            {/* <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <BsDatabaseCheck className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Data Management and Organization
              </p>
            </li>
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <Headset size={28} className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Communication and Coordination
              </p>
            </li>
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <HandCoins size={28} className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Financial and Billing Tasks
              </p>
            </li>
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <FolderSearch size={28} className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Project and Research Support
              </p>
            </li>
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <IoFileTrayStackedOutline className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Specialized Document Handling
              </p>
            </li> */}
          </ul>
        </div>
      </section>

      {isContactDefaultOpen && (
        <ContactFormDefault
          thePageName={pageName}
          setIsContactDefaultOpen={setIsContactDefaultOpen}
          handleUpdateContactFormDefault={handleUpdateContactFormDefault}
          contactFormDefaultData={contactFormDefaultData}
        />
      )}

      {store.isDelete?.modal && (
        <ModalDelete
          setIsDelete={setIsDelete}
          queryKey={"administrative-services"}
          mysqlEndpoint={`/v1/administrative-services/${id}`}
          item={isData}
        />
      )}
    </>
  );
};

export default AdministrativeServices;
