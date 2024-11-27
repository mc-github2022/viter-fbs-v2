import React from "react";
import { Link } from "react-router-dom";
import {
  devBaseImgUrl,
  devNavUrl,
  getUserType,
} from "../../helpers/functions-general";
import { StoreContext } from "../../store/StoreContext";
import { IoChevronDownSharp } from "react-icons/io5";

const Navigation = ({ menu, submenu }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const link = getUserType();

  const [navName, setNavName] = React.useState("");
  const [navHomeOpen, setNavOpen] = React.useState(false);
  const [whyUsOpen, setwhyUsOpen] = React.useState(false);
  const [userOpen, setUserOpen] = React.useState(false);

  const handleNavOpen = () => {
    setNavOpen(!navHomeOpen);
  };

  const handleWhyUsOpen = () => {
    setwhyUsOpen(!whyUsOpen);
  };

  const handleUserOpen = () => {
    setUserOpen(!userOpen);
  };

  return (
    <>
      <div className="thedashnav bg-[#f5f5f3] w-[211px] h-screen fixed top-0 p-4 z-50  border-customGray flex flex-col ">
        <div className="theLogo ">
          <div className="w-[130px] h-[44px] my-5">
            <img
              src={`${devBaseImgUrl}/logo.png`}
              alt="Frontline Business Solutions"
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <nav>
            <ul className="flex-col [&>li]:text-left [&>li]:text-[16px] font-semibold  text-[14px]">
              <li
                className={` flex justify-between items-center p-1 cursor-pointer
                  ${
                    menu === "home"
                      ? "text-primary underline underline-offset-4 "
                      : "text-dark "
                  }
                `}
                onClick={() => handleNavOpen()}
              >
                <div className="nav flex items-center justify-between w-full">
                  <span className="ml-2.5 text-[14px] uppercase">Home</span>
                  <IoChevronDownSharp
                    className={`${
                      navHomeOpen ? "" : "rotate-180"
                    } transition-all`}
                  />
                </div>
              </li>

              <ul
                className={`${
                  navHomeOpen ? "h-0 overflow-hidden" : "my-2"
                } submenu ml-5  text-[14px]`}
              >
                <Link className="!p-0" to={`${devNavUrl}${link}/home-banner`}>
                  <li
                    className={`text-xs ml-2 my-1 border-transparent ${
                      submenu === "home-banner"
                        ? "text-primary font-bold"
                        : "border-none text-dark"
                    }`}
                  >
                    Banner
                  </li>
                </Link>
                {/* <Link className="!p-0" to={`${devNavUrl}${link}/home-process`}>
                    <li
                      className={`text-sm mb-1 my-2 border-transparent ${
                        submenu === "home-process"
                          ? "text-primary font-bold"
                          : "border-none text-dark"
                      }`}
                    >
                      Process
                    </li>
                  </Link>
                  <Link className="!p-0" to={`${devNavUrl}${link}/home-services`}>
                    <li
                      className={`text-sm mb-1 my-2 border-transparent ${
                        submenu === "home-services"
                          ? "text-primary font-bold"
                          : "border-none text-dark"
                      }`}
                    >
                      Services
                    </li>
                  </Link>
                  <Link className="!p-0" to={`${devNavUrl}${link}/home-partnerWithUs`}>
                    <li
                      className={`text-sm mb-1 my-2 border-transparent ${
                        submenu === "home-partnerWithUs"
                          ? "text-primary font-bold"
                          : "border-none text-dark"
                      }`}
                    >
                      Partner With Us
                    </li>
                  </Link> */}
                <Link
                  className="!p-0"
                  to={`${devNavUrl}${link}/home-testimonial`}
                >
                  <li
                    className={`text-xs ml-2 mb-1 border-transparent ${
                      submenu === "home-testimonial"
                        ? "text-primary font-bold"
                        : "border-none text-dark"
                    }`}
                  >
                    Testimonials
                  </li>
                </Link>
                {/* <Link className="!p-0" to={`${devNavUrl}${link}/home-partners`}>
                    <li
                      className={` text-sm mb-1 my-2 border-transparent ${
                        submenu === "home-partners"
                          ? "text-primary font-bold"
                          : "border-none text-dark"
                      }`}
                    >
                      Partners
                    </li>
                  </Link> */}
                <Link className="!p-0" to={`${devNavUrl}${link}/home-insights`}>
                  <li
                    className={`text-xs ml-2  border-transparent ${
                      submenu === "home-insights"
                        ? "text-primary font-bold"
                        : "border-none text-dark"
                    }`}
                  >
                    Insights
                  </li>
                </Link>
              </ul>

              <li
                className={` flex justify-between items-center p-1
                  ${
                    menu === "special-offers"
                      ? "text-primary underline underline-offset-4 "
                      : "text-dark "
                  }
                `}
              >
                <Link to={`${devNavUrl}${link}/special-offers`}>
                  <div className="nav flex items-center">
                    <span className="ml-2.5 text-[14px] uppercase">
                      Special Offers
                    </span>
                  </div>
                </Link>
              </li>

              <li
                className={` flex justify-between items-center p-1 cursor-pointer
                  ${
                    menu === "whyFBS"
                      ? "text-primary underline underline-offset-4 "
                      : "text-dark "
                  }
                `}
                onClick={() => handleWhyUsOpen()}
              >
                <div className="nav flex items-center justify-between w-full">
                  <span className="ml-2.5 text-[14px] uppercase">Why FBS?</span>
                  <IoChevronDownSharp
                    className={`${
                      whyUsOpen ? "" : "rotate-180"
                    } transition-all`}
                  />
                </div>
              </li>

              <ul
                className={`${
                  whyUsOpen ? "h-0 overflow-hidden" : "my-2"
                } submenu ml-5`}
              >
                <Link
                  className="!p-0"
                  to={`${devNavUrl}${link}/events-activities`}
                >
                  <li
                    className={`text-xs ml-2  border-transparent ${
                      submenu === "events-activities"
                        ? "text-primary font-bold"
                        : "border-none text-dark"
                    }`}
                  >
                    Events & Activities
                  </li>
                </Link>
                <Link
                  className="!p-0"
                  to={`${devNavUrl}${link}/whyFBS-careers`}
                >
                  <li
                    className={`text-xs ml-2 my-2 border-transparent ${
                      submenu === "whyFBS-careers"
                        ? "text-primary font-bold"
                        : "border-none text-dark"
                    }`}
                  >
                    Careers
                  </li>
                </Link>
              </ul>

              <li
                className={` flex justify-between items-center p-1
                  ${
                    menu === "lcss-batches"
                      ? "text-primary underline underline-offset-4 "
                      : "text-dark "
                  }
                `}
              >
                <Link to={`${devNavUrl}${link}/lcss-batches`}>
                  <div className="nav flex items-center">
                    <span className="ml-2.5 text-[14px] uppercase">
                      LCSS Batches
                    </span>
                  </div>
                </Link>
              </li>

              <li
                className={` flex justify-between items-center p-1
                  ${
                    menu === "industry-testimonial"
                      ? "text-primary underline underline-offset-4 "
                      : "text-dark "
                  }
                `}
              >
                <Link to={`${devNavUrl}${link}/industry-testimonial`}>
                  <div className="nav flex items-center">
                    <span className="ml-2.5 text-[14px] uppercase">
                      Industry Testimonials
                    </span>
                  </div>
                </Link>
              </li>

              <li
                className={` flex justify-between items-center p-1
                  ${
                    menu === "vid-testimonial"
                      ? "text-primary underline underline-offset-4 "
                      : "text-dark "
                  }
                `}
              >
                <Link to={`${devNavUrl}${link}/vid-testimonial`}>
                  <div className="nav flex items-center">
                    <span className="ml-2.5 text-[14px] uppercase">
                      Video Testimonials
                    </span>
                  </div>
                </Link>
              </li>
              {/* <li
                className={` flex justify-between items-center p-1
                  ${
                    menu === "pricing"
                      ? "text-primary underline underline-offset-4 "
                      : "text-dark "
                  }
                `}
              >
                <Link to={`${devNavUrl}${link}/pricing`}>
                  <div className="nav flex items-center">
                    <span className="ml-2.5 text-[14px] uppercase">
                      Pricing
                    </span>
                  </div>
                </Link>
              </li> */}
              <li
                className={` flex justify-between items-center p-1
                  ${
                    menu === "notification"
                      ? "text-primary underline underline-offset-4 "
                      : "text-dark "
                  }
                `}
              >
                <Link to={`${devNavUrl}${link}/notification`}>
                  <div className="nav flex items-center">
                    <span className="ml-2.5 text-[14px] uppercase">
                      Notification
                    </span>
                  </div>
                </Link>
              </li>

              {store.credentials.data.role_code === "role_is_developer" ? (
                <>
                  <li
                    className={` flex justify-between items-center p-1 cursor-pointer
                  ${
                    menu === "user"
                      ? "text-primary underline underline-offset-4 "
                      : "text-dark "
                  }
                `}
                    onClick={() => handleUserOpen()}
                  >
                    <div className="nav flex items-center justify-between w-full">
                      <span className="ml-2.5 text-[14px] uppercase">
                        Users
                      </span>
                      <IoChevronDownSharp
                        className={`${
                          userOpen ? "" : "rotate-180"
                        } transition-all`}
                      />
                    </div>
                  </li>

                  <ul
                    className={`${
                      userOpen ? "h-0 overflow-hidden" : "my-2"
                    } submenu ml-5 my-1`}
                  >
                    <Link
                      className="!p-0"
                      to={`${devNavUrl}${link}/other-user`}
                    >
                      <li
                        className={`text-xs ml-2 mb-1  border-transparent ${
                          submenu === "other-user"
                            ? "text-primary font-bold"
                            : "border-none text-dark"
                        }`}
                      >
                        Other User
                      </li>
                    </Link>
                    <Link
                      className="!p-0"
                      to={`${devNavUrl}${link}/user-developer`}
                    >
                      <li
                        className={`text-xs ml-2 mb-1 my-2 border-transparent ${
                          submenu === "user-developer"
                            ? "text-primary font-bold"
                            : "border-none text-dark"
                        }`}
                      >
                        Developer
                      </li>
                    </Link>
                    <Link className="!p-0" to={`${devNavUrl}${link}/user-role`}>
                      <li
                        className={`text-xs ml-2 mb-1 my-2 border-transparent ${
                          submenu === "user-role"
                            ? "text-primary font-bold"
                            : "border-none text-dark"
                        }`}
                      >
                        Role
                      </li>
                    </Link>
                  </ul>
                </>
              ) : (
                <li
                  className={` flex justify-between items-center p-1
                ${
                  menu === "user"
                    ? "text-primary underline underline-offset-4 "
                    : "text-dark "
                }
              `}
                >
                  <Link to={`${devNavUrl}${link}/other-user`}>
                    <div className="nav flex items-center">
                      <span className="ml-2.5 text-[14px] uppercase">User</span>
                    </div>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
