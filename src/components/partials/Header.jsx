import React from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import {
  apiVersion,
  devNavUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../helpers/functions-general";
import ModalSuccess from "./modals/ModalSuccess";
import ModalError from "./modals/ModalError";
import { StoreContext } from "../store/StoreContext";
import ModalContact from "./ModalContact";
import logo from "/img/logo.png";
import MegaMenu from "./MegaMenu";
import useQueryData from "../custom-hooks/useQueryData";
import LoadImages from "./LoadImages";
import TableLoading from "./spinners/TableLoading";
import FbsLogoLg from "../svg/FbsLogoLg";
import FbsLogoMd from "../svg/FbsLogoMd";

const Header = ({ pageName, services, page }) => {
  const [contactForm, setContactForm] = React.useState(false);
  const [subjectNotif, setSubjectNotif] = React.useState("get-started-home");
  const { store, dispatch } = React.useContext(StoreContext);
  const [toggleNav, setToggleNav] = React.useState(false);
  const currentPath = location.pathname.split("/").pop(); // to get the last segment or url for active state

  const navigate = useNavigate();

  const handleGoToPage = (item) => {
    navigate(
      `${devNavUrl}/${item.packages_category_url}?id=${item.packages_category_aid}`
    );
  };

  const { data: packagesCatgeoryData } = useQueryData(
    `${apiVersion}/packages-category`, // endpoint
    "get", // method
    "packages-category", // key
    {},
    null,
    true
  );

  const {
    isLoading,
    isFetching,
    data: headerData,
  } = useQueryData(
    `${apiVersion}/header`, // endpoint
    "get", // method
    "header", // key
    {},
    null,
    true
  );

  const headerLogoImg = getConvertStringToJSONparseData(
    headerData?.data?.[0]?.header_logo_img
  );

  const handdleToggle = () => {
    setToggleNav(!toggleNav);
    setToggleMenu(false);
  };

  const [toggleWhyUs, setToggleWhyUs] = React.useState(false);
  const handdleWhyUs = () => {
    setToggleWhyUs(!toggleWhyUs);
    setToggleMenu(false);
  };

  const [toggleMenu, setToggleMenu] = React.useState(false);
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
    setToggleWhyUs(false);
  };

  const [modalContact, setModalContact] = React.useState(false);
  const handleModalContact = () => {
    setModalContact(!modalContact);
  };

  const ref = React.useRef();
  const clickOutsideRef = (e) => {
    if (!ref.current?.contains(e.target)) {
      setToggleWhyUs(false);
    }
  };

  React.useEffect(() => {
    let pathName = location.pathname.replaceAll(`${devNavUrl}/`, "");
    if (pathName === "career") {
      setSubjectNotif("get-started-careers");
    } else if (
      pathName === "college-ojt" ||
      pathName === "work-immersion" ||
      pathName === "continuing-studies"
    ) {
      setSubjectNotif("get-started-lcs");
    } else {
      setSubjectNotif("default-receiver");
    }
    document.addEventListener("click", clickOutsideRef);
    return () => document.addEventListener("click", clickOutsideRef);
  }, []);

  return (
    <>
      <section
        id="header"
        className="header py-2 md:py-0 bg-light fixed w-full z-[99] lg:z-[999] shadow-md"
      >
        <div
          className={`${toggleNav ? "overflow-y-hidden" : ""} customContainer`}
        >
          <div className="wrapper flex justify-between items-center">
            <div className="theLogo relative">
                  <Link
                    to={`${devNavUrl}/`}
                    aria-label="Frontline Business Solutions logo"
                  >
                    <FbsLogoMd />
                  </Link>
            </div>

            <div
              className={`${
                toggleNav ? "active" : ""
              } theNav flex justify-end md:justify-between items-center `}
            >
              <ul className="md:flex  [&>li]:flex [&>li]:items-center md:ml-auto lg:m-0 h-screen md:h-[96px]">
                <li>
                  <button className="text-left">
                    {isLoading || isFetching ? (
                      <div className="w-[80px]">
                        <TableLoading cols={1} count={1} />
                      </div>
                    ) : (
                      <Link
                        to={`${devNavUrl}/`}
                        className={`${
                          pageName === "home"
                            ? "text-primary !cursor-default"
                            : ""
                        }`}
                      >
                        {headerData?.data?.[0]?.header_home || ""}
                      </Link>
                    )}
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleToggleMenu}
                    className={`${
                      toggleMenu ? "text-primary" : ""
                    } flex items-center gap-2`}
                  >
                    {isLoading || isFetching ? (
                      <div className="w-[100px]">
                        <TableLoading cols={1} count={1} />
                      </div>
                    ) : (
                      <>
                        {headerData?.data?.[0]?.header_services || ""}
                        <BiSolidDownArrow
                          className={`${
                            toggleMenu ? "!rotate-180 transition-all" : ""
                          } transition-all -rotate-90 md:rotate-0 md:block`}
                        />
                      </>
                    )}
                  </button>
                </li>
                <li className="relative ">
                  <button
                    onClick={handdleWhyUs}
                    className={`${
                      toggleWhyUs ? "text-primary" : ""
                    } flex items-center gap-2`}
                    ref={ref}
                  >
                    {isLoading || isFetching ? (
                      <div className="w-[100px]">
                        <TableLoading cols={1} count={1} />
                      </div>
                    ) : (
                      <>
                        {headerData?.data?.[0]?.header_whyfbs || ""}
                        <BiSolidDownArrow
                          className={`${
                            toggleWhyUs ? "!rotate-180 transition-all" : ""
                          } transition-all -rotate-90 md:rotate-0 md:block`}
                        />
                      </>
                    )}
                  </button>
                  <ul
                    className={`${
                      toggleWhyUs
                        ? "md:!absolute md:!top-[96px] md:!w-[180px] md:addShadow !bg-customGray [&>li]:my-2 lg:[&>li]:my-2 py-0 md:p-[20px]  !top-12 pl-[2.75rem] md:pl-[20px] transition-all md:!bg-light"
                        : "hidden"
                    } left-0  text-sm p-5 md:rounded-bl-xl md:rounded-br-xl`}
                  >
                    {packagesCatgeoryData?.data.map((item, key) => {
                      if (item.packages_category_list_name === "WHY FBS") {
                        return (
                          <li key={key}>
                            <a
                              href={`${devNavUrl}/${item.packages_category_url}`}
                              className={`${
                                currentPath === item.packages_category_url
                                  ? "text-primary !cursor-default"
                                  : ""
                              }`}
                              onClick={() => handleGoToPage(item)}
                            >
                              {item.packages_category_name}
                            </a>
                          </li>
                        );
                      }
                    })}
                  </ul>
                </li>
                <li>
                  <button className="text-left">
                    {isLoading || isFetching ? (
                      <div className="w-[100px]">
                        <TableLoading cols={1} count={1} />
                      </div>
                    ) : (
                      headerData?.data.map((item, key) => (
                        <a href={item.header_payment_link || "#"} key={key}>
                          {item.header_payment}
                        </a>
                      ))
                    )}
                  </button>
                </li>
                <li>
                  <span className="w-[200px] justify-center mt-9 md:hidden mx-[44px]">
                    {isLoading || isFetching ? (
                      <div className="w-[100px]">
                        <TableLoading cols={1} count={1} />
                      </div>
                    ) : (
                      <a
                        href="#"
                        onClick={handleModalContact}
                        className="btn bg-gradient-to-r hover:duration-500 hover:bg-gradient-to-r text-light rounded-full from-secondary to-secondary hover:to-primary uppercase"
                      >
                        {headerData?.data?.[0]?.header_button_text || ""}
                      </a>
                    )}
                  </span>
                </li>
              </ul>
            </div>
            <div className="lg:w-[200px] lg:flex justify-center hidden md:block">
              <button
                onClick={handleModalContact}
                className="btn bg-gradient-to-r hover:duration-500 hover:bg-gradient-to-r text-light my-5 lg:block rounded-full from-secondary to-secondary hover:to-primary uppercase"
              >
                {isLoading || isFetching ? (
                  <div className="flex justify-center items-center w-full">
                    <div className="w-[100px]">
                      <TableLoading cols={1} count={1} />
                    </div>
                  </div>
                ) : (
                  headerData?.data?.[0]?.header_button_text || ""
                )}
              </button>
            </div>

            <button
              onClick={handdleToggle}
              className={`${
                toggleNav ? "active" : ""
              } toggleNav block md:hidden relative w-[20px] h-[20px] ml-auto`}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </section>

      {toggleMenu && (
        <MegaMenu
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
          pageName={pageName}
        />
      )}
      {modalContact && (
        <ModalContact
          thePageName={pageName}
          setModalContact={setModalContact}
          modalContact={modalContact}
          setToggleMenu={setToggleMenu}
          setContactForm={setContactForm}
          contactForm={contactForm}
          contactSubject={""}
          services={services}
          page={page}
          notification_purpose={subjectNotif}
          emailSubject={`GET STARTED ${
            pageName === "College OJT"
              ? "/ College On-The-Job Training"
              : "" || pageName === "Continuing Study"
              ? "/ Continuing Studies"
              : "" || pageName === "Work Immersion"
              ? "/ High School Work Immersion"
              : "" || pageName === "career"
              ? "/ Career"
              : "" || pageName === "wordpress"
              ? "/ Wordpress"
              : ""
          } -  `}
        />
      )}

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default Header;
