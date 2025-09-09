import { Calculator, Globe, GraduationCap, Headset } from "lucide-react";
import React from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as LuIcons from "react-icons/lu";
import * as PiIcons from "react-icons/pi";
import * as TiIcons from "react-icons/ti";
import { TiArrowBackOutline, TiGift } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import useQueryData from "../custom-hooks/useQueryData";
import { apiVersion, devNavUrl } from "../helpers/functions-general";
import LoaderHeader from "./LoaderHeader";
import TableLoading from "./spinners/TableLoading";

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
    isFetching,
    error,
    isLoading,
    status,
    data: specialOffersData,
  } = useQueryData(
    `${apiVersion}/specialOffers`, // endpoint
    "get", // method
    "specialOffers", // key
    {},
    null,
    true
  );

  const {
    isFetching: isFetchingPackagesCategory,
    error: errorPackagesCategory,
    isLoading: isLoadingPackagesCategory,
    status: statusPackagesCategory,
    data: packagesCategoryData,
  } = useQueryData(
    "/v1/packages-list", // endpoint
    "get", // method
    "packages-list", // key
    {},
    null,
    true
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
        className="lg:bg-dark lg:bg-opacity-25 fixed left-0 w-full lg:h-screen z-[99] lg:backdrop-blur-lg"
      >
        <div className={`${toggleMenu ? "active" : ""} megaMenu`}>
          <div className="holder w-full 2xl:w-[1286px] mx-auto  bg-light rounded-br-xl rounded-bl-xl shadow-2xl overflow-y-auto relative">
            {isLoadingPackagesCategory && <LoaderHeader />}
            <div
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="pt-8 px-8 pb-8 rounded-br-xl rounded-bl-xl "
            >
              <div className="backArrow absolute top-2 right-9 md:hidden">
                <button>
                  <TiArrowBackOutline
                    className="text-2xl text-[gray]"
                    onClick={handleClose}
                  />
                </button>
              </div>
              <div className="wrapper md:flex flex-wrap gap-y-0 gap-x-10 justify-start lg:justify-between mb-8">
                <div className="menuItem mb-3 order-1">
                  <h2
                    className="font-semibold mb-2 cursor-pointer lg:cursor-default md:pointer-events-none flex text-primary"
                    onClick={() => handleServiceDropdown("webapp")}
                  >
                    <Globe className="text-primary" />
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
                    {isLoadingPackagesCategory || isFetchingPackagesCategory ? (
                      <TableLoading cols={1} count={6} />
                    ) : (
                      <>
                        {packagesCatgeoryData?.data.map((item, key) => {
                          if (
                            item.packages_category_list_name ===
                            "WEB APPLICATIONS"
                          ) {
                            return (
                              <li key={key}>
                                <a
                                  to={`${devNavUrl}/${item.packages_category_url}`}
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
                      </>
                    )}

                    {/* <li>
                      <Link
                        to={`${devNavUrl}/webapp-payroll`}
                        className={`${
                          pageName === "payroll"
                            ? "text-primary !cursor-default"
                            : ""
                        }`}
                      >
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
                        }`}
                      >
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
                        }`}
                      >
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
                        }`}
                      >
                        Online Donation System
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`${devNavUrl}/webapp-asset-inventory`}
                        className={`${
                          pageName === "inventory"
                            ? "text-primary !cursor-default"
                            : ""
                        }`}
                      >
                        Asset Inventory System
                      </Link>
                    </li> */}
                  </ul>
                </div>
                <div className="menuItem mb-3 order-2 xl:order-5">
                  <h2
                    className="font-semibold  mb-2 cursor-pointer lg:cursor-default md:pointer-events-none flex text-primary"
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
                    {isLoadingPackagesCategory || isFetchingPackagesCategory ? (
                      <TableLoading cols={1} count={3} />
                    ) : (
                      <>
                        {packagesCatgeoryData?.data.map((item, key) => {
                          if (
                            item.packages_category_list_name ===
                            "WEB DESIGN AND DEVELOPMENT"
                          ) {
                            return (
                              <li key={key}>
                                <a
                                  to={`${devNavUrl}/${item.packages_category_url}`}
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
                      </>
                    )}
                    {/* <li>
                      <Link
                        to={`${devNavUrl}/web-wordpress`}
                        className={`${
                          pageName === "wordpress"
                            ? "text-primary !cursor-default"
                            : ""
                        }`}
                      >
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
                        }`}
                      >
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
                        }`}
                      >
                        Web Design
                      </Link>
                    </li> */}
                  </ul>
                </div>
                <div className="menuItem mb-3 order-3  ">
                  <h2
                    className="font-semibold  mb-2 cursor-pointer lg:cursor-default md:pointer-events-none flex text-primary"
                    onClick={() => handleServiceDropdown("accounting")}
                  >
                    <Calculator className="text-primary" />
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
                    {isLoadingPackagesCategory || isFetchingPackagesCategory ? (
                      <TableLoading cols={1} count={2} />
                    ) : (
                      <>
                        {packagesCatgeoryData?.data.map((item, key) => {
                          if (
                            item.packages_category_list_name ===
                            "ACCOUNTING SOLUTIONS"
                          ) {
                            return (
                              <li key={key}>
                                <a
                                  to={`${devNavUrl}/${item.packages_category_url}`}
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
                      </>
                    )}
                    {/* <li>
                      <Link
                        to={`${devNavUrl}/accounting-business-registration`}
                        className={`${
                          pageName === "business-reg"
                            ? "text-primary !cursor-default"
                            : ""
                        }`}
                      >
                        Business Registration
                      </Link>
                    </li>

                    <li>
                      <Link
                        to={`${devNavUrl}/accounting-bookkeeping`}
                        className={`${
                          pageName === "bookkeeping"
                            ? "text-primary !cursor-default"
                            : ""
                        }`}
                      >
                        Bookkeeping / Compliance
                      </Link>
                    </li> */}
                  </ul>
                </div>
                <div className="menuItem mb-3 order-4 ">
                  <h2
                    className="font-semibold  mb-2 cursor-pointer lg:cursor-default md:pointer-events-none flex text-primary"
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
                    {isLoadingPackagesCategory || isFetchingPackagesCategory ? (
                      <TableLoading cols={1} count={3} />
                    ) : (
                      <>
                        {packagesCatgeoryData?.data.map((item, key) => {
                          if (
                            item.packages_category_list_name ===
                            "VIRTUAL ASSISTANT SOLUTIONS"
                          ) {
                            return (
                              <li key={key}>
                                <a
                                  to={`${devNavUrl}/${item.packages_category_url}`}
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
                      </>
                    )}

                    {/* <li>
                      <Link
                        to={`${devNavUrl}/va-administrative`}
                        className={`${
                          pageName === "va-administrative"
                            ? "text-primary !cursor-default"
                            : ""
                        }`}
                      >
                        Administrative
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`${devNavUrl}/va-business-support`}
                        className={`${
                          pageName === "va-business-support"
                            ? "text-primary !cursor-default"
                            : ""
                        }`}
                      >
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
                        }`}
                      >
                        Marketing
                      </Link>
                    </li> */}
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
                <div className="menuItem mb-3 order-5 lg:order-2">
                  <h2
                    className="font-semibold  mb-2 cursor-pointer lg:cursor-default md:pointer-events-none flex text-primary"
                    onClick={() => handleServiceDropdown("lcss")}
                  >
                    <GraduationCap />{" "}
                    <span className="mx-2">LEARNING SOLUTIONS</span>
                  </h2>
                  <ul
                    className={`${
                      serviceDropdown && menuIdentifier === "lcss"
                        ? "h-auto bg-customGray ml-0 p-4 text-[#615d5d]"
                        : "h-0"
                    } ml-0  md:ml-3 text-sm md:h-auto [&>li]:!mb-3 
                    [&>li]:lg:!mb-2`}
                  >
                    {isLoadingPackagesCategory || isFetchingPackagesCategory ? (
                      <TableLoading cols={1} count={3} />
                    ) : (
                      <>
                        {packagesCatgeoryData?.data.map((item, key) => {
                          if (
                            item.packages_category_list_name ===
                            "LEARNING CENTER SOLUTIONS"
                          ) {
                            return (
                              <li key={key}>
                                <a
                                  to={`${devNavUrl}/${item.packages_category_url}`}
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
                      </>
                    )}
                    {/* <li>
                      <Link
                        to={`${devNavUrl}/college-ojt`}
                        className={`${
                          pageName === "College OJT"
                            ? "text-primary !cursor-default"
                            : ""
                        }`}
                      >
                        College On-The-Job Training
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`${devNavUrl}/work-immersion`}
                        className={`${
                          pageName === "Work Immersion"
                            ? "text-primary !cursor-default"
                            : ""
                        }`}
                      >
                        High School Work Immersion
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`${devNavUrl}/continuing-studies`}
                        className={`${
                          pageName === "Continuing Study"
                            ? "text-primary !cursor-default"
                            : ""
                        }`}
                      >
                        Continuing Studies
                      </Link>
                    </li> */}
                  </ul>
                </div>
              </div>

              {isLoading || isFetching ? (
                <TableLoading cols={3} count={18} />
              ) : (
                <>
                  <div
                    className="bg-customGray py-2 grid place-items-center items-center cursor-pointer lg:hidden"
                    onClick={handleSpecialOffer}
                  >
                    <h3 className="text-xl font-bold flex items-center gap-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]">
                      Special Offer{" "}
                      <TiGift className="text-xl text-secondary" />
                    </h3>
                  </div>
                  <div
                    className={`${
                      specialOffer ? "!right-0" : ""
                    } absolute top-0 transition-all right-[-100%] lg:static specialOffer bg-customGray p-3 rounded-2xl w-full `}
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
                    <div className="wrapper grid grid-cols-1 lg:grid-cols-5 gap-3 relative">
                      {specialOffersData?.data.map((item, key) => {
                        const SelectedIcon = item.special_offers_icons
                          ? icons[item.special_offers_icons]
                          : null;

                        return (
                          <Link
                            key={key}
                            to={`${devNavUrl}${item.special_offers_link}`}
                          >
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
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaMenu;
