import React from "react";
import { Link } from "react-router-dom";
import { devBaseImgUrl, devNavUrl } from "../../helpers/functions-general";
import { IoMdSettings } from "react-icons/io";
import { GoChevronDown } from "react-icons/go";
import { StoreContext } from "../../store/StoreContext";
import { setIsHome, setIsWhyFBS } from "../../store/StoreAction";

const Navigation = ({ menu, submenu }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  const handleHome = () => {
    dispatch(setIsHome(!store.isHome));
    dispatch(setIsWhyFBS(false));
  };

  const handleWhyFBS = () => {
    dispatch(setIsWhyFBS(!store.isWhyFBS));
    dispatch(setIsHome(false));
  };

  const handleCloseMenus = () => {
    dispatch(setIsHome(false));
    dispatch(setIsWhyFBS(false));
  };

  return (
    <>
      <div className="thedashnav bg-[#f5f5f3] w-[211px] h-screen fixed top-0 p-4 z-50  border-customGray flex flex-col ">
        <div className="theLogo ">
          <div className="w-[130px] h-[44px] my-5">
            <img
              src={`${devBaseImgUrl}/logo.png`}
              alt="company logo"
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <nav>
            <ul className="flex-col [&>li]:text-left [&>li]:text-[16px] font-semibold [&>li]:mb-[17px]">
              <li
                className={` flex justify-between items-center p-1
                  ${
                    menu === "home"
                      ? "text-[black] underline underline-offset-4 "
                      : "text-dashAccent "
                  }
                `}
                onClick={handleHome}
              >
                <div className="nav flex items-center">
                  <span className="ml-2.5">Home</span>
                </div>
              </li>
              {store.isHome && (
                <ul className="submenu ml-5 my-6 text-[12px] ">
                  <Link className="!p-0" to={`${devNavUrl}/home-banner`}>
                    <li
                      className={`text-sm pl-2 mb-1 my-2 border-l-[3px] border-transparent ${
                        submenu === "home-banner"
                          ? "text-[black] py-1 font-bold"
                          : "border-none text-dashAccent"
                      }`}
                    >
                      Banner
                    </li>
                  </Link>
                  <Link className="!p-0" to={`${devNavUrl}/home-process`}>
                    <li
                      className={`text-sm pl-2 mb-1 my-2 border-l-[3px] border-transparent ${
                        submenu === "home-process"
                          ? "text-[black] py-1 font-bold"
                          : "border-none text-dashAccent"
                      }`}
                    >
                      Process
                    </li>
                  </Link>
                  <Link className="!p-0" to={`${devNavUrl}/home-services`}>
                    <li
                      className={`text-sm pl-2 mb-1 my-2 border-l-[3px] border-transparent ${
                        submenu === "home-services"
                          ? "text-[black] py-1 font-bold"
                          : "border-none text-dashAccent"
                      }`}
                    >
                      Services
                    </li>
                  </Link>
                  <Link className="!p-0" to={`${devNavUrl}/home-partnerWithUs`}>
                    <li
                      className={`text-sm pl-2 mb-1 my-2 border-l-[3px] border-transparent ${
                        submenu === "home-partnerWithUs"
                          ? "text-[black] py-1 font-bold"
                          : "border-none text-dashAccent"
                      }`}
                    >
                      Partner With Us
                    </li>
                  </Link>
                  <Link className="!p-0" to={`${devNavUrl}/home-testimonial`}>
                    <li
                      className={`text-sm pl-2 mb-1 my-2 border-l-[3px] border-transparent ${
                        submenu === "home-testimonial"
                          ? "text-[black] py-1 font-bold"
                          : "border-none text-dashAccent"
                      }`}
                    >
                      Testimonials
                    </li>
                  </Link>
                  <Link className="!p-0" to={`${devNavUrl}/home-partners`}>
                    <li
                      className={` text-sm pl-2 mb-1 my-2 border-l-[3px] border-transparent ${
                        submenu === "home-partners"
                          ? "text-[black] py-1 font-bold"
                          : "border-none text-dashAccent"
                      }`}
                    >
                      Partners
                    </li>
                  </Link>
                  <Link className="!p-0" to={`${devNavUrl}/home-insights`}>
                    <li
                      className={`text-sm pl-2 mb-1 my-2 border-l-[3px] border-transparent ${
                        submenu === "home-insights"
                          ? "text-[black] py-1 font-bold"
                          : "border-none text-dashAccent"
                      }`}
                    >
                      Insights
                    </li>
                  </Link>
                </ul>
              )}

              <li
                className={` flex justify-between items-center p-1
                  ${
                    menu === "special-offers"
                      ? "text-[black] underline underline-offset-4 "
                      : "text-dashAccent "
                  }
                `}
                onClick={handleCloseMenus}
              >
                <Link to={`${devNavUrl}/special-offers`}>
                  <div className="nav flex items-center">
                    <span className="ml-2.5">Special Offers</span>
                  </div>
                </Link>
              </li>

              <li
                className={` flex justify-between items-center p-1
                  ${
                    menu === "whyFBS"
                      ? "text-[black] underline underline-offset-4 "
                      : "text-dashAccent "
                  }
                `}
                onClick={handleWhyFBS}
              >
                <div className="nav flex items-center">
                  <span className="ml-2.5">Why FBS?</span>
                </div>
              </li>
              {store.isWhyFBS && (
                <ul className="submenu ml-5 my-6 text-[12px] ">
                  <Link className="!p-0" to={`${devNavUrl}/why-work-with-us`}>
                    <li
                      className={`text-sm pl-2 mb-1 my-2 border-l-[3px] border-transparent ${
                        submenu === "why-work-with-us"
                          ? "text-[black] py-1 font-bold"
                          : "border-none text-dashAccent"
                      }`}
                    >
                      Why Work With Us
                    </li>
                  </Link>
                  <Link className="!p-0" to={`${devNavUrl}/events-activities`}>
                    <li
                      className={`text-sm pl-2 mb-1 my-2 border-l-[3px] border-transparent ${
                        submenu === "events-activities"
                          ? "text-[black] py-1 font-bold"
                          : "border-none text-dashAccent"
                      }`}
                    >
                      Events & Activities
                    </li>
                  </Link>
                  <Link className="!p-0" to={`${devNavUrl}/whyFBS-careers`}>
                    <li
                      className={`text-sm pl-2 mb-1 my-2 border-l-[3px] border-transparent ${
                        submenu === "whyFBS-careers"
                          ? "text-[black] py-1 font-bold"
                          : "border-none text-dashAccent"
                      }`}
                    >
                      Careers
                    </li>
                  </Link>
                </ul>
              )}
              {/* <li
                className={
                  activeSection === "ourOrigin"
                    ? "text-[black] bg-primary py-1 underline underline-offset-4"
                    : "text-dashAccent"
                }
                onClick={() => scrollToSection("ourOrigin")}
              >
                <a className="cursor-pointer">Our Origin</a>
              </li>
              <li
                className={
                  activeSection === "ourTaste"
                    ? "text-black underline underline-offset-4"
                    : "text-dashAccent"
                }
                onClick={() => scrollToSection("ourTaste")}
              >
                <a className="cursor-pointer">Our Taste</a>
              </li>
              <li
                className={
                  activeSection === "reserveSeat"
                    ? "text-black underline underline-offset-4"
                    : "text-dashAccent"
                }
                onClick={() => scrollToSection("reserveSeat")}
              >
                <a className="cursor-pointer">Reserve Seat</a>
              </li>
              <li
                className={
                  activeSection === "events"
                    ? "text-black underline underline-offset-4"
                    : "text-dashAccent"
                }
                onClick={() => scrollToSection("events")}
              >
                <a className="cursor-pointer">Events</a>
              </li>
              <li
                className={
                  activeSection === "footer"
                    ? "text-black underline underline-offset-4"
                    : "text-dashAccent"
                }
                onClick={() => scrollToSection("footer")}
              >
                <a className="cursor-pointer">Footer</a>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
