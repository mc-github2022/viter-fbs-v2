import React from "react";
import logo from "/img/logo.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiSolidDownArrow } from "react-icons/bi";
import MegaMenu from "./MegaMenu";
import ModalContact from "./ModalContact";
import { Link } from "react-router-dom";

const Header = () => {
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

  return (
    <>
      <section
        id="header"
        className="header py-2 md:py-0 text-[15x] bg-light fixed w-full z-[99] lg:z-[999] shadow-md"
      >
        <div
          className={`${toggleNav ? "overflow-y-hidden" : ""} customContainer`}
        >
          <div className="wrapper flex justify-between items-center">
            <div className="theLogo">
              <img src={logo} alt="" className="w-[80%] md:w-full" />
            </div>
            <div
              className={`${
                toggleNav ? "active" : ""
              } theNav flex justify-end md:justify-between items-center `}
            >
              <ul className="md:flex  [&>li]:flex [&>li]:items-center md:ml-auto lg:m-0 h-screen md:h-[96px]">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a
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
                  </a>
                </li>
                <li className="relative ">
                  <a
                    href="#"
                    className={`${
                      toggleWhyUs ? "text-primary" : ""
                    } flex items-center gap-2`}
                    onClick={handdleWhyUs}
                  >
                    Why FBS?
                    <BiSolidDownArrow
                      className={`${
                        toggleWhyUs ? "!rotate-180 transition-all" : ""
                      } transition-all -rotate-90 md:rotate-0 md:block`}
                    />
                  </a>
                  <ul
                    className={`${
                      toggleWhyUs
                        ? "md:!absolute md:!top-[96px] md:!w-[180px] md:addShadow !bg-customGray [&>li]:my-2 lg:[&>li]:my-2 py-0 md:p-[20px]  !top-12 pl-20 md:pl-[20px] transition-all md:!bg-light"
                        : "hidden"
                    } left-0  text-sm p-5 md:rounded-bl-xl md:rounded-br-xl`}
                  >
                    <li>
                      <Link className="!p-0 hover:text-primary" to="/whyus">
                        Why Work With Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="!p-0 hover:text-primary"
                        to="/events-and-activities"
                      >
                        Events & Activities
                      </Link>
                    </li>
                    <li>
                      <Link className="!p-0 hover:text-primary" to="/career">
                        Career
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="w-[200px] lg:flex justify-center hidden">
              <a
                href="#"
                onClick={handleModalContact}
                className="btn bg-gradient-to-r hover:duration-500 hover:bg-gradient-to-r text-light my-5  lg:block rounded-full  from-secondary to-secondary hover:to-primary "
              >
                Get Started
              </a>
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
        <MegaMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      )}
      {modalContact && (
        <ModalContact
          setModalContact={setModalContact}
          modalContact={modalContact}
          setToggleMenu={setToggleMenu}
        />
      )}
    </>
  );
};

export default Header;
