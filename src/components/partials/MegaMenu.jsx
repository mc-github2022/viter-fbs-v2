import React, { useEffect, useRef } from "react";
import { CgSmileMouthOpen } from "react-icons/cg";
import { Globe, Calculator, Headset, GraduationCap } from "lucide-react";
import {
  FaAddressCard,
  FaBriefcase,
  FaGlobe,
  FaMoneyBill,
  FaSmile,
} from "react-icons/fa";
import { TbArrowBackUp } from "react-icons/tb";
import { TiArrowBackOutline, TiGift } from "react-icons/ti";
import { Link } from "react-router-dom";

const MegaMenu = ({ toggleMenu, setToggleMenu }) => {
  const [serviceDropdown, serServiceDropdown] = React.useState(false);

  const [menuIdentifier, setMenuIdentifier] = React.useState("");

  const handleClose = () => {
    setToggleMenu(false);
    console.log("clicked");
  };

  const [specialOffer, setSpecialOffer] = React.useState(false);
  const handleSpecialOffer = () => {
    setSpecialOffer(!specialOffer);
    console.log("click");
  };

  const handleServiceDropdown = (item) => {
    serServiceDropdown(false);
    serServiceDropdown(true);
    setMenuIdentifier(item);
    console.log(item);
  };

  return (
    <>
      <div
        onClick={handleClose}
        className="bg-dark bg-opacity-25 fixed left-0 w-full h-screen z-[99] backdrop-blur-lg"
      >
        <div className={`${toggleMenu ? "active" : ""} megaMenu`}>
          <div className="holder w-full 2xl:w-[1286px] mx-auto  bg-light rounded-br-xl rounded-bl-xl shadow-2xl">
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="pt-8 px-8 pb-8 rounded-br-xl rounded-bl-xl"
            >
              <div className="backArrow absolute top-2 right-9 md:hidden">
                <button>
                  <TiArrowBackOutline
                    className="text-2xl text-[gray] "
                    onClick={handleClose}
                  />
                </button>
              </div>
              <div className="wrapper md:flex flex-wrap gap-y-0 gap-x-10 justify-start lg:justify-between mb-8">
                <div className="menuItem mb-3">
                  <h2
                    className="font-semibold mb-2 cursor-pointer lg:cursor-default flex text-primary"
                    onClick={() => handleServiceDropdown("webapp")}
                  >
                    <Globe className="text-primary" />{" "}
                    <span className="mx-2">WEB APPLICATIONS</span>
                  </h2>
                  <ul
                    className={`${
                      serviceDropdown && menuIdentifier === "webapp"
                        ? "h-auto bg-customGray ml-0 p-4 text-[#615d5d]"
                        : "h-0"
                    } ml-0  md:ml-3 text-sm md:h-auto [&>li]:!mb-3 
                    [&>li]:lg:!mb-2`}
                  >
                    <li>
                      <Link to="/webapp-hris">HR Information System</Link>
                    </li>
                    <li>
                      <Link to="/webapp-payroll">Online Payroll System</Link>
                    </li>
                    <li>
                      <Link to="/webapp-enrollment">
                        School Enrollment System
                      </Link>
                    </li>
                    <li>
                      <Link to="/webapp-onlinepayment">
                        Online Payment Integration
                      </Link>
                    </li>
                    <li>
                      <Link to="/webapp-onlinedonation">
                        Online Donation System
                      </Link>
                    </li>
                    <li>
                      <Link to="/webapp-inventory">Asset Inventory System</Link>
                    </li>
                  </ul>
                </div>
                <div className="menuItem mb-3">
                  <h2
                    className="font-semibold  mb-2 cursor-pointer lg:cursor-default flex text-primary"
                    onClick={() => handleServiceDropdown("accounting")}
                  >
                    <Calculator className="text-primary" />{" "}
                    <span className="mx-2">ACCOUNTING SOLUTIONS </span>
                  </h2>
                  <ul
                    className={`${
                      serviceDropdown && menuIdentifier === "accounting"
                        ? "h-auto bg-customGray ml-0 p-4 text-[#615d5d]"
                        : "h-0"
                    } ml-0  md:ml-3 text-sm md:h-auto [&>li]:!mb-3 
                    [&>li]:lg:!mb-2`}
                  >
<<<<<<< HEAD
                    <li>Business Registration</li>
                    <li>Bookkeeping / Compliance</li>
=======
                    <li>
                      <Link to="/business-registration">
                        Business Registration
                      </Link>
                    </li>
                    <li>Compliance</li>
                    <li>Bookkeeping</li>
>>>>>>> b4d1b37b660cea883c58b8f88d41e6cd39452047
                  </ul>
                </div>
                <div className="menuItem mb-3">
                  <h2
                    className="font-semibold  mb-2 cursor-pointer lg:cursor-default flex text-primary"
                    onClick={() => handleServiceDropdown("va")}
                  >
                    <Headset />{" "}
                    <span className="mx-2">VIRTUAL ASSISTANT SOLUTIONS </span>
                  </h2>
                  <ul
                    className={`${
                      serviceDropdown && menuIdentifier === "va"
                        ? "h-auto bg-customGray ml-0 p-4 text-[#615d5d]"
                        : "h-0"
                    } ml-0  md:ml-3 text-sm md:h-auto [&>li]:!mb-3 
                    [&>li]:lg:!mb-2`}
                  >
                    <li>
                      <Link to="/adminSolution">Administrative</Link>
                    </li>
                    <li>
                      <Link to="/va-research">Business Support</Link>
                    </li>
                    <li>
                      <Link to="/va-marketing">Marketing</Link>
                    </li>
                    {/* <li>
                      <Link to="/va-techsupport">Technical Support</Link>
                    </li> */}
                    {/* <li>
                      <Link to="/va-creativesupport">Creative Support</Link>
                    </li> */}

                    {/* <li>
                      <Link to="/va-miscellaneous">Miscellaneous Services</Link>
                    </li> */}
                  </ul>
                </div>
                <div className="menuItem mb-3">
                  <h2
                    className="font-semibold  mb-2 cursor-pointer lg:cursor-default flex text-primary"
                    onClick={() => handleServiceDropdown("lcss")}
                  >
                    <GraduationCap />{" "}
                    <span className="mx-2">LEARNING CENTER SOLUTIONS</span>
                  </h2>
                  <ul
                    className={`${
                      serviceDropdown && menuIdentifier === "lcss"
                        ? "h-auto bg-customGray ml-0 p-4 text-[#615d5d]"
                        : "h-0"
                    } ml-0  md:ml-3 text-sm md:h-auto [&>li]:!mb-3 
                    [&>li]:lg:!mb-2`}
                  >
                    <li>
                      <Link to="/lcss">College On-the-job- Training</Link>
                    </li>
                    <li>
                      <Link to="/immersion">High School Work Immersion</Link>
                    </li>
                    <li>
                      <Link to="/continuing-studies">Continuing Studies</Link>
                    </li>
                  </ul>
                </div>
                <div className="menuItem">
                  <h2
                    className="font-semibold  mb-2 cursor-pointer lg:cursor-default flex text-primary"
                    onClick={() => handleServiceDropdown("webDev")}
                  >
                    <Globe className="text-primary" />{" "}
                    <span className="mx-2">WEB DESIGN AND DEVELOPMENT </span>
                  </h2>
                  <ul
                    className={`${
                      serviceDropdown && menuIdentifier === "webDev"
                        ? "h-auto bg-customGray ml-0 p-4 text-[#615d5d]"
                        : "h-0 md:h-auto"
                    } ml-0  md:ml-3 text-sm md:h-auto [&>li]:!mb-3 
                  [&>li]:lg:!mb-2`}
                  >
                    <li>
                      <Link to="/web-wordpress">WordPress CMS Website</Link>
                    </li>
                    <li>
                      <Link to="/web-singlepage">Single Page Website</Link>
                    </li>
                    <li>
                      <Link to="/web-design">Web Design</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="bg-customGray py-2 grid place-items-center items-center cursor-pointer lg:hidden"
                onClick={handleSpecialOffer}
              >
                <h3 className="text-xl font-bold flex items-center gap-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]">
                  Special Offer <TiGift className="text-xl text-secondary" />
                </h3>
              </div>
              <div
                className={`${
                  specialOffer ? "!right-0" : ""
                } absolute top-0 transition-all right-[-100%] lg:static specialOffer bg-customGray p-3 rounded-2xl w-full`}
              >
                <div className="backArrow absolute top-2 right-9 md:hidden">
                  <button>
                    <TiArrowBackOutline
                      className="text-2xl text-[gray] "
                      onClick={handleSpecialOffer}
                    />
                  </button>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center md:text-left">
                  Special Offer
                </h3>
                <div className="wrapper grid grid-cols-1 lg:grid-cols-5 gap-3">
                  <div className="offerItem bg-light p-2 rounded-xl grid place-items-center">
                    <div>
                      <ul className="logoAndTitle flex gap-2 items-center text-dark mb-3">
                        <li>
                          <FaAddressCard className="text-[32px] text-primary" />
                        </li>
                        <li className="text-xs">
                          Business <br /> Registration
                        </li>
                      </ul>
                      <p className="font-bold text-dark">Startup Package</p>
                    </div>
                  </div>
                  <div className="offerItem bg-light p-2  rounded-xl grid place-items-center">
                    <div>
                      <ul className="logoAndTitle flex gap-2 items-center text-dark mb-3">
                        <li>
                          <FaGlobe className="text-[32px] text-primary" />
                        </li>
                        <li className="text-xs">
                          One-Page <br /> Website
                        </li>
                      </ul>
                      <p className="font-bold text-dark">30 Days Trial</p>
                    </div>
                  </div>
                  <div className="offerItem bg-light p-2  rounded-xl grid place-items-center">
                    <div>
                      <ul className="logoAndTitle flex gap-2 items-center text-dark mb-3">
                        <li>
                          <FaBriefcase className="text-[32px] text-primary" />
                        </li>
                        <li className="text-xs">
                          Human Resource <br /> Information System
                        </li>
                      </ul>
                      <p className="font-bold text-dark">
                        P40 / Employee / Mo.
                      </p>
                    </div>
                  </div>
                  <div className="offerItem bg-light p-2  rounded-xl grid place-items-center">
                    <div>
                      <ul className="logoAndTitle flex gap-2 items-center text-dark mb-3">
                        <li>
                          <FaMoneyBill className="text-[32px] text-primary" />
                        </li>
                        <li className="text-xs">
                          Online Payroll <br /> System
                        </li>
                      </ul>
                      <p className="font-bold text-dark">
                        P40 / Employee / Mo.
                      </p>
                    </div>
                  </div>
                  <div className="offerItem bg-light p-2  rounded-xl grid place-items-center">
                    <div>
                      <ul className="logoAndTitle flex gap-2 items-center text-dark mb-3">
                        <li>
                          <FaSmile className="text-[32px] text-primary" />
                        </li>
                        <li className="text-xs">
                          Social Media <br /> Management
                        </li>
                      </ul>
                      <p className="font-bold text-dark">10% Discount</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaMenu;
