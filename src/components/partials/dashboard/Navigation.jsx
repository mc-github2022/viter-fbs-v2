import React from "react";
import { Link } from "react-router-dom";
import { devBaseImgUrl, devNavUrl } from "../../helpers/functions-general";
import { IoMdSettings } from "react-icons/io";
import { GoChevronDown } from "react-icons/go";
import { StoreContext } from "../../store/StoreContext";
import { setIsHome, setIsWhyFBS } from "../../store/StoreAction";

const Navigation = ({ menu, submenu }) => {
  const { store, dispatch } = React.useContext(StoreContext);

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
            <ul className="flex-col [&>li]:text-left [&>li]:text-[16px] font-semibold [&>li]:mb-[15px] text-[14px]">
              <li
                className={` flex justify-between items-center p-1
                  ${
                    menu === "home"
                      ? "text-[black] underline underline-offset-4 "
                      : "text-[#9ca3af] "
                  }
                `}
              >
                <div className="nav flex items-center">
                  <span className="ml-2.5 text-[14px]">Home</span>
                </div>
              </li>

              <ul className="submenu ml-5 my-2 text-[14px] ">
                <Link className="!p-0" to={`${devNavUrl}/home-banner`}>
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
                {/* <Link className="!p-0" to={`${devNavUrl}/home-process`}>
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
                  <Link className="!p-0" to={`${devNavUrl}/home-services`}>
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
                  <Link className="!p-0" to={`${devNavUrl}/home-partnerWithUs`}>
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
                <Link className="!p-0" to={`${devNavUrl}/home-testimonial`}>
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
                {/* <Link className="!p-0" to={`${devNavUrl}/home-partners`}>
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
                <Link className="!p-0" to={`${devNavUrl}/home-insights`}>
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
                <Link to={`${devNavUrl}/special-offers`}>
                  <div className="nav flex items-center">
                    <span className="ml-2.5 text-[14px]">Special Offers</span>
                  </div>
                </Link>
              </li>

              <li
                className={` flex justify-between items-center p-1
                  ${
                    menu === "whyFBS"
                      ? "text-[black] underline underline-offset-4 "
                      : "text-[#9ca3af] "
                  }
                `}
              >
                <div className="nav flex items-center">
                  <span className="ml-2.5 text-[14px]">Why FBS?</span>
                </div>
              </li>

              <ul className="submenu ml-5 my-1 text-[12px] ">
                {/* <Link className="!p-0" to={`${devNavUrl}/why-work-with-us`}>
                    <li
                      className={`text-sm pl-2 mb-1 my-2 border-l-[3px] border-transparent ${
                        submenu === "why-work-with-us"
                          ? "text-[black] font-bold"
                          : "border-none text-[#9ca3af]"
                      }`}
                    >
                      Why Work With Us
                    </li>
                  </Link> */}
                <Link className="!p-0" to={`${devNavUrl}/events-activities`}>
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
                <Link className="!p-0" to={`${devNavUrl}/whyFBS-careers`}>
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

              {/* <li
                className={
                  activeSection === "ourOrigin"
                    ? "text-[black] bg-primary underline underline-offset-4"
                    : "text-[#9ca3af]"
                }
                onClick={() => scrollToSection("ourOrigin")}
              >
                <a className="cursor-pointer">Our Origin</a>
              </li>
              <li
                className={
                  activeSection === "ourTaste"
                    ? "text-black underline underline-offset-4"
                    : "text-[#9ca3af]"
                }
                onClick={() => scrollToSection("ourTaste")}
              >
                <a className="cursor-pointer">Our Taste</a>
              </li>
              <li
                className={
                  activeSection === "reserveSeat"
                    ? "text-black underline underline-offset-4"
                    : "text-[#9ca3af]"
                }
                onClick={() => scrollToSection("reserveSeat")}
              >
                <a className="cursor-pointer">Reserve Seat</a>
              </li>
              <li
                className={
                  activeSection === "events"
                    ? "text-black underline underline-offset-4"
                    : "text-[#9ca3af]"
                }
                onClick={() => scrollToSection("events")}
              >
                <a className="cursor-pointer">Events</a>
              </li>
              <li
                className={
                  activeSection === "footer"
                    ? "text-black underline underline-offset-4"
                    : "text-[#9ca3af]"
                }
                onClick={() => scrollToSection("footer")}
              >
                <a className="cursor-pointer">Footer</a>
              </li> */}

              <li
                className={` flex justify-between items-center p-1 pt-3
                  ${
                    menu === "lcss-batches"
                      ? "text-[black] underline underline-offset-4 "
                      : "text-[#9ca3af] "
                  }
                `}
              >
                <Link to={`${devNavUrl}/lcss-batches`}>
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
                <Link to={`${devNavUrl}/industry-testimonial`}>
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
                <Link to={`${devNavUrl}/vid-testimonial`}>
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
                <Link to={`${devNavUrl}/pricing`}>
                  <div className="nav flex items-center">
                    <span className="ml-2.5 text-[14px]">Pricing</span>
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
