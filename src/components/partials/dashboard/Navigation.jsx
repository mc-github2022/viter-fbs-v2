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

  const handleNavOpen = () => {
    setNavOpen(!navHomeOpen);
  };

  const handleWhyUsOpen = () => {
    setwhyUsOpen(!whyUsOpen);
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
                      ? "text-[black] underline underline-offset-4 "
                      : "text-[#9ca3af] "
                  }
                `}
                onClick={() => handleNavOpen()}
              >
                <div className="nav flex items-center justify-between w-full">
                  <span className="ml-2.5 text-[14px]">Home</span>
                  <IoChevronDownSharp
                    className={`${
                      navHomeOpen ? "" : "rotate-180"
                    } transition-all`}
                  />
                </div>
              </li>

              <ul className="submenu ml-5 my-2 text-[14px] ">
                <Link className="!p-0" to={`${devNavUrl}${link}/home-banner`}>
                  <li
                    className={`text-sm pl-2 mb-1 my-2 border-l-[3px] border-transparent ${
                      submenu === "home-banner"
                        ? "text-[black] font-bold"
                        : "border-none text-[#9ca3af]"
                    }`}
                  >
                    Banner
                  </li>
                </Link>
                {/* <Link className="!p-0" to={`${devNavUrl}${link}/home-process`}>
                    <li
                      className={`text-sm pl-2 mb-1 my-2 border-l-[3px] border-transparent ${
                        submenu === "home-process"
                          ? "text-[black] font-bold"
                          : "border-none text-[#9ca3af]"
                      }`}
                    >
                      Process
                    </li>
                  </Link>
                  <Link className="!p-0" to={`${devNavUrl}${link}/home-services`}>
                    <li
                      className={`text-sm pl-2 mb-1 my-2 border-l-[3px] border-transparent ${
                        submenu === "home-services"
                          ? "text-[black] font-bold"
                          : "border-none text-[#9ca3af]"
                      }`}
                    >
                      Services
                    </li>
                  </Link>
                  <Link className="!p-0" to={`${devNavUrl}${link}/home-partnerWithUs`}>
                    <li
                      className={`text-sm pl-2 mb-1 my-2 border-l-[3px] border-transparent ${
                        submenu === "home-partnerWithUs"
                          ? "text-[black] font-bold"
                          : "border-none text-[#9ca3af]"
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
                    className={`text-sm pl-2 mb-1 my-2 border-l-[3px] border-transparent ${
                      submenu === "home-testimonial"
                        ? "text-[black] font-bold"
                        : "border-none text-[#9ca3af]"
                    }`}
                  >
                    Testimonials
                  </li>
                </Link>
                {/* <Link className="!p-0" to={`${devNavUrl}${link}/home-partners`}>
                    <li
                      className={` text-sm pl-2 mb-1 my-2 border-l-[3px] border-transparent ${
                        submenu === "home-partners"
                          ? "text-[black] font-bold"
                          : "border-none text-[#9ca3af]"
                      }`}
                    >
                      Partners
                    </li>
                  </Link> */}
                <Link className="!p-0" to={`${devNavUrl}${link}/home-insights`}>
                  <li
                    className={`text-sm pl-2 mb-1 my-2 border-l-[3px] border-transparent ${
                      submenu === "home-insights"
                        ? "text-[black] font-bold"
                        : "border-none text-[#9ca3af]"
                    }`}
                  >
                    Insights
                  </li>
                </Link>
              </ul>

              <li
                className={` flex justify-between items-center p-1 pt-3
                  ${
                    menu === "special-offers"
                      ? "text-[black] underline underline-offset-4 "
                      : "text-[#9ca3af] "
                  }
                `}
              >
                <Link to={`${devNavUrl}${link}/special-offers`}>
                  <div className="nav flex items-center">
                    <span className="ml-2.5 text-[14px]">Special Offers</span>
                  </div>
                </Link>
              </li>

              <li
                className={` flex justify-between items-center p-1 cursor-pointer
                  ${
                    menu === "whyFBS"
                      ? "text-[black] underline underline-offset-4 "
                      : "text-[#9ca3af] "
                  }
                `}
                onClick={() => handleWhyUsOpen()}
              >
                <div className="nav flex items-center justify-between w-full">
                  <span className="ml-2.5 text-[14px]">Why FBS?</span>
                  <IoChevronDownSharp
                    className={`${
                      whyUsOpen ? "" : "rotate-180"
                    } transition-all`}
                  />
                </div>
              </li>

              <ul className="submenu ml-5 my-1 text-[12px] ">
                <Link
                  className="!p-0"
                  to={`${devNavUrl}${link}/events-activities`}
                >
                  <li
                    className={`text-sm pl-2 mb-1 my-2 border-l-[3px] border-transparent ${
                      submenu === "events-activities"
                        ? "text-[black] font-bold"
                        : "border-none text-[#9ca3af]"
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
                    className={`text-sm pl-2 mb-1 my-2 border-l-[3px] border-transparent ${
                      submenu === "whyFBS-careers"
                        ? "text-[black] font-bold"
                        : "border-none text-[#9ca3af]"
                    }`}
                  >
                    Careers
                  </li>
                </Link>
              </ul>

              <li
                className={` flex justify-between items-center p-1 pt-3
                  ${
                    menu === "lcss-batches"
                      ? "text-[black] underline underline-offset-4 "
                      : "text-[#9ca3af] "
                  }
                `}
              >
                <Link to={`${devNavUrl}${link}/lcss-batches`}>
                  <div className="nav flex items-center">
                    <span className="ml-2.5 text-[14px]">LCSS Batches</span>
                  </div>
                </Link>
              </li>

              <li
                className={` flex justify-between items-center p-1
                  ${
                    menu === "industry-testimonial"
                      ? "text-[black] underline underline-offset-4 "
                      : "text-[#9ca3af] "
                  }
                `}
              >
                <Link to={`${devNavUrl}${link}/industry-testimonial`}>
                  <div className="nav flex items-center">
                    <span className="ml-2.5 text-[14px]">
                      Industry Testimonials
                    </span>
                  </div>
                </Link>
              </li>

              <li
                className={` flex justify-between items-center p-1
                  ${
                    menu === "vid-testimonial"
                      ? "text-[black] underline underline-offset-4 "
                      : "text-[#9ca3af] "
                  }
                `}
              >
                <Link to={`${devNavUrl}${link}/vid-testimonial`}>
                  <div className="nav flex items-center">
                    <span className="ml-2.5 text-[14px]">
                      Video Testimonials
                    </span>
                  </div>
                </Link>
              </li>
              <li
                className={` flex justify-between items-center p-1
                  ${
                    menu === "pricing"
                      ? "text-[black] underline underline-offset-4 "
                      : "text-[#9ca3af] "
                  }
                `}
              >
                <Link to={`${devNavUrl}${link}/pricing`}>
                  <div className="nav flex items-center">
                    <span className="ml-2.5 text-[14px]">Pricing</span>
                  </div>
                </Link>
              </li>
              <li
                className={` flex justify-between items-center p-1
                  ${
                    menu === "notification"
                      ? "text-[black] underline underline-offset-4 "
                      : "text-[#9ca3af] "
                  }
                `}
              >
                <Link to={`${devNavUrl}${link}/notification`}>
                  <div className="nav flex items-center">
                    <span className="ml-2.5 text-[14px]">Notification</span>
                  </div>
                </Link>
              </li>

              {store.credentials.data.role_code === "role_is_developer" ? (
                <>
                  <li
                    className={` flex justify-between items-center p-1
                  ${
                    menu === "user"
                      ? "text-[black] underline underline-offset-4 "
                      : "text-[#9ca3af] "
                  }
                `}
                  >
                    <div className="nav flex items-center">
                      <span className="ml-2.5 text-[14px]">Users</span>
                    </div>
                  </li>

                  <ul className="submenu ml-5 my-1 text-[12px] ">
                    <Link
                      className="!p-0"
                      to={`${devNavUrl}${link}/other-user`}
                    >
                      <li
                        className={`text-sm pl-2 mb-1 my-2 border-l-[3px] border-transparent ${
                          submenu === "other-user"
                            ? "text-[black] font-bold"
                            : "border-none text-[#9ca3af]"
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
                        className={`text-sm pl-2 mb-1 my-2 border-l-[3px] border-transparent ${
                          submenu === "user-developer"
                            ? "text-[black] font-bold"
                            : "border-none text-[#9ca3af]"
                        }`}
                      >
                        Developer
                      </li>
                    </Link>
                    <Link className="!p-0" to={`${devNavUrl}${link}/user-role`}>
                      <li
                        className={`text-sm pl-2 mb-1 my-2 border-l-[3px] border-transparent ${
                          submenu === "user-role"
                            ? "text-[black] font-bold"
                            : "border-none text-[#9ca3af]"
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
                    ? "text-[black] underline underline-offset-4 "
                    : "text-[#9ca3af] "
                }
              `}
                >
                  <Link to={`${devNavUrl}${link}/other-user`}>
                    <div className="nav flex items-center">
                      <span className="ml-2.5 text-[14px]">User</span>
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
