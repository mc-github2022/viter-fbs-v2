import React from "react";

import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as LuIcons from "react-icons/lu";
import * as PiIcons from "react-icons/pi";
import * as TiIcons from "react-icons/ti";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { apiVersion } from "../../../../helpers/functions-general";
import ModalContact from "../../../../partials/ModalContact";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import TableLoading from "../../../../partials/spinners/TableLoading";

const icons = {
  ...FaIcons,
  ...AiIcons,
  ...IoIcons,
  ...TiIcons,
  ...LuIcons,
  ...PiIcons,
  ...BsIcons,
};

const VaAdminServiceList = ({ pageName }) => {
  const [modalContact, setModalContact] = React.useState(false);
  const [contactForm, setContactForm] = React.useState(false);

  const {
    isFetchingServices,
    isLoadingServices,
    error,
    data: administrativeServicesData,
  } = useQueryData(
    `${apiVersion}/administrative-services-list`, // endpoint
    "get", // method
    "administrative-services-list" // key
  );

  const { data: administrativeServicesTitleData } = useQueryData(
    `${apiVersion}/administrative-services-title`, // endpoint
    "get", // method
    "administrative-services-title" // key
  );

  const handleForm = () => {
    setContactForm(!contactForm);
  };
  return (
    <>
      <section className="serviceList pt-0 pb-20 lg:pt-10">
        <div className="customContainer">
          <div className="sectionDesc text-center md:w-[70%] mx-auto mb-14">
            <h2 className="text-[clamp(20px,6vw,40px)] leading-[1.1] font-semibold mb-10">
              {administrativeServicesTitleData?.data?.[0]
                ?.administrative_services_title_black_a || ""}{" "}
              <span className="text-primary">
                {administrativeServicesTitleData?.data?.[0]
                  ?.administrative_services_title_highlighted || ""}{" "}
              </span>{" "}
              {administrativeServicesTitleData?.data?.[0]
                ?.administrative_services_title_black_b || ""}
            </h2>
            <p className="subDesc mb-10">
              {administrativeServicesTitleData?.data?.[0]
                ?.administrative_services_title_description || ""}
            </p>
            <button
              onClick={handleForm}
              className="btn bg-primary text-light font-light hover:bg-secondary transition-all"
            >
              {administrativeServicesTitleData?.data?.[0]
                ?.administrative_services_title_button_text || ""}
            </button>
          </div>
          {isFetchingServices && !isLoadingServices && <FetchingSpinner />}
          <ul className="serviceInclusion grid md:grid-cols-2 gap-6">
            {isLoadingServices || isFetchingServices ? (
              <TableLoading cols={1} count={15} />
            ) : (
              administrativeServicesData?.data.map((item, key) => {
                const SelectedIcon = item.administrative_services_list_icon
                  ? icons[item.administrative_services_list_icon]
                  : null;

                return (
                  <li className="flex items-center gap-7" key={key}>
                    {item.administrative_services_list_title
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
                  </li>
                );
              })
            )}
          </ul>
        </div>
      </section>
      {contactForm && (
        <ModalContact
          setModalContact={setModalContact}
          thePageName={pageName}
          contactForm={contactForm}
          setContactForm={setContactForm}
          modalContact={modalContact}
          contactSubject={""}
          notification_purpose={"default-receiver"}
          emailSubject={"GET STARTED / Administrative - "}
        />
      )}
    </>
  );
};

export default VaAdminServiceList;
