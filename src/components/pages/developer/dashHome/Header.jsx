import React from "react";
import { Link } from "react-router-dom";
import logo from "/img/logo.png";
import { BiSolidDownArrow } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <section
        id=""
        className="header py-2 md:py-0 bg-light  w-full  lg:z-[999] shadow-md"
      >
        <div className={`customContainer`}>
          <div className="wrapper flex justify-between items-center">
            <div className="theLogo">
              <Link to={`#`}>
                <img
                  src={logo}
                  alt="Frontline Business Solutions Logo"
                  className="w-[80%] md:w-[90%]"
                />
              </Link>
            </div>
            <div
              className={` theNav flex justify-end md:justify-between items-center `}
            >
              <ul className="md:flex  [&>li]:flex [&>li]:items-center md:ml-auto lg:m-0 h-screen md:h-[96px]">
                <li>
                  <button className="text-left">
                    <Link to={`#`} className={``}>
                      Home
                    </Link>
                  </button>
                </li>
                <li>
                  <button href="#" className={`flex items-center gap-2`}>
                    Services
                    <BiSolidDownArrow
                      className={` transition-all -rotate-90 md:rotate-0 md:block`}
                    />
                  </button>
                </li>
                <li className="relative ">
                  <button href="#" className={` flex items-center gap-2`}>
                    Why FBS?
                    <BiSolidDownArrow
                      className={`transition-all -rotate-90 md:rotate-0 md:block`}
                    />
                  </button>
                </li>
                <li>
                  <button className="text-left">
                    <a href="https://frontlinebusiness.com.ph/payment/">
                      Payment
                    </a>
                  </button>
                </li>
                <div className="w-[200px] justify-center mt-9 md:hidden mx-[44px]">
                  <a
                    href="#"
                    className="btn bg-gradient-to-r hover:duration-500 hover:bg-gradient-to-r text-light rounded-full  from-secondary to-secondary hover:to-primary "
                  >
                    GET STARTED
                  </a>
                </div>
              </ul>
            </div>
            <div className="lg:w-[200px] lg:flex justify-center hidden md:block">
              <button className="btn bg-gradient-to-r hover:duration-500 hover:bg-gradient-to-r text-light my-5  lg:block rounded-full  from-secondary to-secondary hover:to-primary">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
