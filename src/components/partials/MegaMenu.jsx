import { Calculator, Globe, GraduationCap, Headset } from "lucide-react";
import React from "react";
import {
  FaAddressCard,
  FaBriefcase,
  FaGlobe,
  FaMoneyBill,
  FaSmile,
} from "react-icons/fa";
import { TiArrowBackOutline, TiGift } from "react-icons/ti";
import { Link } from "react-router-dom";
import useQueryData from "../custom-hooks/useQueryData";
import { devNavUrl } from "../helpers/functions-general";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as TiIcons from "react-icons/ti";
import * as LuIcons from "react-icons/lu";
import * as PiIcons from "react-icons/pi";

const icons = {
  ...FaIcons,
  ...AiIcons,
  ...IoIcons,
  ...TiIcons,
  ...LuIcons,
  ...PiIcons,
};

const MegaMenu = ({ toggleMenu, setToggleMenu, pageName }) => {
  const [serviceDropdown, serServiceDropdown] = React.useState(false);
  const [menuIdentifier, setMenuIdentifier] = React.useState("");

  const {
    isFetching,
    error,
    isLoading,
    status,
    data: specialOffersData,
  } = useQueryData(
    "/v1/specialOffers", // endpoint
    "get", // method
    "specialOffers" // key
  );

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
    // console.log(item);
  };

  return (
    <>
      <div
        onClick={handleClose}
        className="lg:bg-dark lg:bg-opacity-25 fixed left-0 w-full lg:h-screen z-[99] lg:backdrop-blur-lg">
        <div className={`${toggleMenu ? "active" : ""} megaMenu`}>
          <div className="holder w-full 2xl:w-[1286px] mx-auto  bg-light rounded-br-xl rounded-bl-xl shadow-2xl overflow-y-auto">
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="pt-8 px-8 pb-8 rounded-br-xl rounded-bl-xl ">
              <div className="backArrow absolute top-2 right-9 md:hidden">
                <button>
                  <TiArrowBackOutline
                    className="text-2xl text-[gray]"
                    onClick={handleClose}
                  />
                </button>
              </div>
              <div className="wrapper md:flex flex-wrap gap-y-0 gap-x-10 justify-start lg:justify-between mb-8">
                <div className="menuItem mb-3">
                  <h2
                    className="font-semibold mb-2 cursor-pointer lg:cursor-default md:pointer-events-none flex text-primary"
                    onClick={() => handleServiceDropdown("webapp")}>
                    <Globe className="text-primary" />
                    <span className="mx-2">WEB APPLICATIONS</span>
                  </h2>
                  <ul
                    className={`${
                      serviceDropdown && menuIdentifier === "webapp"
                        ? "h-auto bg-customGray ml-0 p-4 text-[#615d5d]"
                        : "h-0"
                    } ml-0  md:ml-3 text-sm md:h-auto [&>li]:!mb-3 
                    [&>li]:lg:!mb-2`}>
                    <li>
                      <Link
                        to={`${devNavUrl}/webapp-hris`}
                        className={`${
                          pageName === "hris"
                            ? "text-primary !cursor-default"
                            : ""
                        }`}>
                        HR Information System
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`${devNavUrl}/webapp-payroll`}
                        className={`${
                          pageName === "payroll"
                            ? "text-primary !cursor-default"
                            : ""
                        }`}>
                        Online Payroll System
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`${devNavUrl}/webapp-enrollment`}
                        className={`${
                          pageName === "enrollment"
                            ? "text-primary !cursor-default"
                            : ""
                        }`}>
                        School Enrollment System
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`${devNavUrl}/webapp-onlinepayment`}
                        className={`${
                          pageName === "online-payment"
                            ? "text-primary !cursor-default"
                            : ""
                        }`}>
                        Online Payment Integration
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`${devNavUrl}/webapp-onlinedonation`}
                        className={`${
                          pageName === "donation"
                            ? "text-primary !cursor-default"
                            : ""
                        }`}>
                        Online Donation System
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`${devNavUrl}/webapp-inventory`}
                        className={`${
                          pageName === "inventory"
                            ? "text-primary !cursor-default"
                            : ""
                        }`}>
                        Asset Inventory System
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="menuItem mb-3">
                  <h2
                    className="font-semibold  mb-2 cursor-pointer lg:cursor-default md:pointer-events-none flex text-primary"
                    onClick={() => handleServiceDropdown("accounting")}>
                    <Calculator className="text-primary" />{" "}
                    <span className="mx-2">ACCOUNTING SOLUTIONS </span>
                  </h2>
                  <ul
                    className={`${
                      serviceDropdown && menuIdentifier === "accounting"
                        ? "h-auto bg-customGray ml-0 p-4 text-[#615d5d]"
                        : "h-0"
                    } ml-0  md:ml-3 text-sm md:h-auto [&>li]:!mb-3 
                    [&>li]:lg:!mb-2`}>
                    <li>
                      <Link
                        to={`${devNavUrl}/business-registration`}
                        className={`${
                          pageName === "business-reg"
                            ? "text-primary !cursor-default"
                            : ""
                        }`}>
                        Business Registration
                      </Link>
                    </li>

                    <li>
                      <Link
                        to={`${devNavUrl}/bookkeeping`}
                        className={`${
                          pageName === "bookkeeping"
                            ? "text-primary !cursor-default"
                            : ""
                        }`}>
                        Bookkeeping / Compliance
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="menuItem mb-3">
                  <h2
                    className="font-semibold  mb-2 cursor-pointer lg:cursor-default md:pointer-events-none flex text-primary"
                    onClick={() => handleServiceDropdown("va")}>
                    <Headset />{" "}
                    <span className="mx-2">VIRTUAL ASSISTANT SOLUTIONS </span>
                  </h2>
                  <ul
                    className={`${
                      serviceDropdown && menuIdentifier === "va"
                        ? "h-auto bg-customGray ml-0 p-4 text-[#615d5d]"
                        : "h-0"
                    } ml-0  md:ml-3 text-sm md:h-auto [&>li]:!mb-3 
                    [&>li]:lg:!mb-2`}>
                    <li>
                      <Link
                        to={`${devNavUrl}/adminSolution`}
                        className={`${
                          pageName === "va-administrative"
                            ? "text-primary !cursor-default"
                            : ""
                        }`}>
                        Administrative
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`${devNavUrl}/va-research`}
                        className={`${
                          pageName === "va-business-support"
                            ? "text-primary !cursor-default"
                            : ""
                        }`}>
                        Business Support
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`${devNavUrl}/va-marketing`}
                        className={`${
                          pageName === "va-marketing"
                            ? "text-primary !cursor-default"
                            : ""
                        }`}>
                        Marketing
                      </Link>
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
                    className="font-semibold  mb-2 cursor-pointer lg:cursor-default md:pointer-events-none flex text-primary"
                    onClick={() => handleServiceDropdown("lcss")}>
                    <GraduationCap />{" "}
                    <span className="mx-2">LEARNING CENTER SOLUTIONS</span>
                  </h2>
                  <ul
                    className={`${
                      serviceDropdown && menuIdentifier === "lcss"
                        ? "h-auto bg-customGray ml-0 p-4 text-[#615d5d]"
                        : "h-0"
                    } ml-0  md:ml-3 text-sm md:h-auto [&>li]:!mb-3 
                    [&>li]:lg:!mb-2`}>
                    <li>
                      <Link
                        to={`${devNavUrl}/lcss`}
                        className={`${
                          pageName === "lcss"
                            ? "text-primary !cursor-default"
                            : ""
                        }`}>
                        College On-The-Job Training
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`${devNavUrl}/immersion`}
                        className={`${
                          pageName === "immersion"
                            ? "text-primary !cursor-default"
                            : ""
                        }`}>
                        High School Work Immersion
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`${devNavUrl}/continuing-studies`}
                        className={`${
                          pageName === "conStud"
                            ? "text-primary !cursor-default"
                            : ""
                        }`}>
                        Continuing Studies
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="menuItem">
                  <h2
                    className="font-semibold  mb-2 cursor-pointer lg:cursor-default md:pointer-events-none flex text-primary"
                    onClick={() => handleServiceDropdown("webDev")}>
                    <Globe className="text-primary" />{" "}
                    <span className="mx-2">WEB DESIGN AND DEVELOPMENT </span>
                  </h2>
                  <ul
                    className={`${
                      serviceDropdown && menuIdentifier === "webDev"
                        ? "h-auto bg-customGray ml-0 p-4 text-[#615d5d]"
                        : "h-0 md:h-auto"
                    } ml-0  md:ml-3 text-sm md:h-auto [&>li]:!mb-3 
                  [&>li]:lg:!mb-2`}>
                    <li>
                      <Link
                        to={`${devNavUrl}/web-wordpress`}
                        className={`${
                          pageName === "cms"
                            ? "text-primary !cursor-default"
                            : ""
                        }`}>
                        WordPress CMS Website
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`${devNavUrl}/web-singlepage`}
                        className={`${
                          pageName === "singlePage Website"
                            ? "text-primary !cursor-default"
                            : ""
                        }`}>
                        Single Page Website
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`${devNavUrl}/web-design`}
                        className={`${
                          pageName === "web-design"
                            ? "text-primary !cursor-default"
                            : ""
                        }`}>
                        Web Design
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="bg-customGray py-2 grid place-items-center items-center cursor-pointer lg:hidden"
                onClick={handleSpecialOffer}>
                <h3 className="text-xl font-bold flex items-center gap-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]">
                  Special Offer <TiGift className="text-xl text-secondary" />
                </h3>
              </div>
              <div
                className={`${
                  specialOffer ? "!right-0" : ""
                } absolute top-0 transition-all right-[-100%] lg:static specialOffer bg-customGray p-3 rounded-2xl w-full`}>
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
                  {specialOffersData?.data.map((item, key) => {
                    const SelectedIcon = item.special_offers_icons
                      ? icons[item.special_offers_icons]
                      : null;

                    return (
                      <Link
                        key={key}
                        to={`${devNavUrl}${item.special_offers_link}`}>
                        <div className="offerItem bg-light p-2 rounded-xl grid place-items-center hover:bg-primary group-hover:text-light group">
                          <div>
                            <ul className="logoAndTitle flex gap-2 items-center text-dark mb-3 group-hover:text-light">
                              <li>
                                <span className="text-[32px] text-primary group-hover:text-light">
                                  {SelectedIcon ? (
                                    <SelectedIcon />
                                  ) : (
                                    "No icon selected"
                                  )}
                                </span>
                              </li>
                              <li className="text-xs w-[120px]">
                                {item.special_offers_services}
                              </li>
                            </ul>
                            <p className="font-bold text-dark group-hover:text-light">
                              {item.special_offers_price}
                            </p>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
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
