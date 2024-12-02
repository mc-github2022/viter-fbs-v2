import React from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { devNavUrl } from "../helpers/functions-general";
import ModalSuccess from "./modals/ModalSuccess";
import ModalError from "./modals/ModalError";
import { StoreContext } from "../store/StoreContext";
import ModalContact from "./ModalContact";
import logo from "/img/logo.png";
import MegaMenu from "./MegaMenu";

const Header = ({ pageName }) => {
  const [contactForm, setContactForm] = React.useState(false);
  const [subjectNotif, setSubjectNotif] = React.useState("get-started-home");
  const { store, dispatch } = React.useContext(StoreContext);
  const [toggleNav, setToggleNav] = React.useState(false);

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
            <div className="theLogo">
              <Link to={`${devNavUrl}/`}>
                <img
                  src={logo}
                  alt="Frontline Business Solutions Logo"
                  className="w-[80%] md:w-[90%]"
                />
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
                    <Link
                      to={`${devNavUrl}/`}
                      className={`${
                        pageName === "home"
                          ? "text-primary !cursor-default"
                          : ""
                      }`}
                    >
                      Home
                    </Link>
                  </button>
                </li>
                <li>
                  <button
                    href="#"
                    onClick={handleToggleMenu}
                    className={`${
                      toggleMenu ? "text-primary" : ""
                    } flex items-center gap-2`}
                  >
                    Services
                    <BiSolidDownArrow
                      className={`${
                        toggleMenu ? "!rotate-180 transition-all" : ""
                      } transition-all -rotate-90 md:rotate-0 md:block`}
                    />
                  </button>
                </li>
                <li className="relative ">
                  <button
                    href="#"
                    className={`${
                      toggleWhyUs ? "text-primary" : ""
                    } flex items-center gap-2`}
                    onClick={handdleWhyUs}
                    ref={ref}
                  >
                    Why FBS?
                    <BiSolidDownArrow
                      className={`${
                        toggleWhyUs ? "!rotate-180 transition-all" : ""
                      } transition-all -rotate-90 md:rotate-0 md:block`}
                    />
                  </button>
                  <ul
                    className={`${
                      toggleWhyUs
                        ? "md:!absolute md:!top-[96px] md:!w-[180px] md:addShadow !bg-customGray [&>li]:my-2 lg:[&>li]:my-2 py-0 md:p-[20px]  !top-12 pl-[2.75rem] md:pl-[20px] transition-all md:!bg-light"
                        : "hidden"
                    } left-0  text-sm p-5 md:rounded-bl-xl md:rounded-br-xl`}
                  >
                    <li>
                      <Link
                        // className="!p-0 hover:text-primary"
                        to={`${devNavUrl}/why-work-with-us`}
                        className={`${
                          pageName === "whyWorkWithUs"
                            ? "!p-0 text-primary !cursor-default"
                            : "!p-0 hover:text-primary"
                        }`}
                      >
                        Why Work With Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`${devNavUrl}/events-and-activities`}
                        className={`${
                          pageName === "events&Activities"
                            ? "!p-0 text-primary !cursor-default"
                            : "!p-0 hover:text-primary"
                        }`}
                      >
                        Events & Activities
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`${devNavUrl}/career`}
                        className={`${
                          pageName === "career"
                            ? "!p-0 text-primary !cursor-default"
                            : "!p-0 hover:text-primary"
                        }`}
                      >
                        Career
                      </Link>
                    </li>
                  </ul>
                </li>
                <div className="w-[200px] justify-center mt-9 md:hidden mx-[44px]">
                  <a
                    href="#"
                    onClick={handleModalContact}
                    className="btn bg-gradient-to-r hover:duration-500 hover:bg-gradient-to-r text-light rounded-full  from-secondary to-secondary hover:to-primary "
                  >
                    GET STARTED
                  </a>
                </div>
              </ul>
            </div>
            <div className="lg:w-[200px] lg:flex justify-center hidden md:block">
              <button
                onClick={handleModalContact}
                className="btn bg-gradient-to-r hover:duration-500 hover:bg-gradient-to-r text-light my-5  lg:block rounded-full  from-secondary to-secondary hover:to-primary "
              >
                GET STARTED
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
