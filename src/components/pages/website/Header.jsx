import React from "react";
import logo from "/img/logo.png";
import { IoMdArrowDropdown } from "react-icons/io";
import MegaMenu from "../../partials/MegaMenu";
import { BiSolidDownArrow } from "react-icons/bi";

const Header = () => {
  const [toggleNav, setToggleNav] = React.useState(true);
  const handdleToggle = () => {
    setToggleNav(!toggleNav);
  };

  const [toggleMenu, setToggleMenu] = React.useState(false);
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <section id="header" className="header text-[15x] py-2 bg-light">
        <div className="customContainer">
          <div className="wrapper flex justify-between items-center">
            <div className="theLogo">
              <img src={logo} alt="" />
            </div>
            <div
              className={`${
                toggleNav ? "active" : ""
              } theNav flex justify-end md:justify-between items-center`}
            >
              <ul className="flex [&>li]:py-5 [&>li]:px-5 [&>li]:flex [&>li]:items-center  md:ml-auto lg:m-0">
                <li>Home</li>
                <li>
                  <button
                    onClick={handleToggleMenu}
                    className={`${
                      toggleMenu ? "text-primary " : ""
                    } flex items-center gap-2`}
                  >
                    Services
                    <BiSolidDownArrow
                      className={`${
                        toggleMenu ? "-rotate-180 transition-all" : ""
                      } transition-all`}
                    />
                  </button>
                </li>
                <li>Why Us?</li>
              </ul>
            </div>
            <div className="w-[200px] flex justify-center">
              <a
                href="#"
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
      {toggleMenu && <MegaMenu />}
    </>
  );
};

export default Header;
