import React from "react";
import { Link } from "react-router-dom";
import { devBaseImgUrl, devNavUrl } from "../../helpers/functions-general";
import { IoMdSettings } from "react-icons/io";
import { GoChevronDown } from "react-icons/go";
import { StoreContext } from "../../store/StoreContext";
import { setIsHome } from "../../store/StoreAction";

const Navigation = ({ menu, submenu }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const ref = React.useRef();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenHome = () => {
    dispatch(setIsHome(!store.isHome));
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Function to close all menus (when navigating away)
const handleCloseMenus = () => {
  dispatch(setIsHome(false)); // Close the 'Home' menu
  // Add other state resets if needed for other menus
};

  const clickOutsideRef = (e) => {
    if (!ref.current?.contains(e.target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", clickOutsideRef);
    return () => document.addEventListener("click", clickOutsideRef);
  }, []);

  return (
    <>
      <div className="thedashnav bg-secondary w-[211px] h-screen fixed top-0 p-4 z-50  border-customGray flex flex-col justify-between">
        <div className="theLogo ">
          <h2 className="text-xl mt-5 font-bold text-[white] ">
            Frontline Business Solutions
          </h2>
        </div>
        <div>
          <nav>
            <ul className="flex-col [&>li]:text-left [&>li]:text-[16px] font-semibold [&>li]:mb-[17px]">
              <li
                className={` flex justify-between items-center p-1
                  ${
                    menu === "home"
                      ? "text-[white] underline underline-offset-4 "
                      : "text-dashAccent "
                  }
                `}
                onClick={handleOpenHome}
              >
                <div className="nav flex items-center">
                  <span className="ml-2.5">Home</span>
                </div>
                <GoChevronDown
                  className={`duration-200 text-[15px] ${
                    store.isHome && "-rotate-180 duration-200 "
                  }`}
                />
              </li>
              {store.isHome && (
                <ul className="submenu ml-10 my-6 text-[12px] ">
                  <Link className="!p-0" to={`${devNavUrl}/home-banner`}>
                    <li
                      className={`text-sm pl-2 mb-1 my-2 border-l-2 border-transparent hover:bg-primary ${
                        submenu === "home-banner"
                          ? "text-[white] py-1"
                          : "border-none text-dashAccent"
                      }`}
                    >
                      Banner
                    </li>
                  </Link>
                  <Link className="!p-0" to={`${devNavUrl}/home-process`}>
                    <li
                      className={`text-sm pl-2 mb-1 my-2 border-l-2 border-transparent hover:bg-primary ${
                        submenu === "home-process"
                          ? "text-[white]  py-1"
                          : "border-none text-dashAccent"
                      }`}
                    >
                      Process
                    </li>
                  </Link>
                  <Link className="!p-0" to={`${devNavUrl}/home-services`}>
                    <li
                      className={`text-sm pl-2 mb-1 my-2 border-l-2 border-transparent hover:bg-primary ${
                        submenu === "home-services"
                          ? "text-[white]  py-1"
                          : "border-none text-dashAccent"
                      }`}
                    >
                      Services
                    </li>
                  </Link>
                  <Link className="!p-0" to={`${devNavUrl}/home-partnerWithUs`}>
                    <li
                      className={`text-sm pl-2 mb-1 my-2 border-l-2 border-transparent hover:bg-primary ${
                        submenu === "home-partnerWithUs"
                          ? "text-[white]  py-1"
                          : "border-none text-dashAccent"
                      }`}
                    >
                      Partner With Us
                    </li>
                  </Link>
                  <Link className="!p-0" to={`${devNavUrl}/home-testimonial`}>
                    <li
                      className={`text-sm pl-2 mb-1 my-2 border-l-2 border-transparent hover:bg-primary ${
                        submenu === "home-testimonial"
                          ? "text-[white]  py-1"
                          : "border-none text-dashAccent"
                      }`}
                    >
                      Testimonials
                    </li>
                  </Link>
                  <Link className="!p-0" to={`${devNavUrl}/home-partners`}>
                    <li
                      className={` text-sm pl-2 mb-1 my-2 border-l-2 border-transparent hover:bg-primary ${
                        submenu === "home-partners"
                          ? "text-[white] py-1"
                          : "border-none text-dashAccent"
                      }`}
                    >
                      Partners
                    </li>
                  </Link>
                  <Link className="!p-0" to={`${devNavUrl}/home-insights`}>
                    <li
                      className={`text-sm pl-2 mb-1 my-2 border-l-2 border-transparent hover:bg-primary ${
                        submenu === "home-insights"
                          ? "text-[white] py-1"
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
                    menu === "services"
                      ? "text-[white] underline underline-offset-4 "
                      : "text-dashAccent "
                  }
                `}
                onClick={handleCloseMenus}
              >
                <Link to={`${devNavUrl}/services`}>
                  <div className="nav flex items-center">
                    <span className="ml-2.5">Services</span>
                  </div>
                </Link>
              </li>
              {/* <li
                className={
                  activeSection === "ourOrigin"
                    ? "text-[white] bg-primary py-1 underline underline-offset-4"
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
        <div>
          <div
            className={`p-px rounded-full border-2 hover:border-primary/50 border-transparent cursor-pointer relative w-10 ${
              isOpen && "!border-primary"
            }`}
            onClick={handleOpen}
            ref={ref}
          >
            <div className="bg-[white] p-1.5 rounded-full ">
              <span className="text-white p-1 rounded-full ">LR</span>
            </div>
            {isOpen && (
              <div className="absolute top-5 ml-[45px] bg-[white] shadow-md flex flex-col gap-2 p-3 min-w-[180px]">
                <h6 className="text-white font-[inter-regular] text-[15px]">
                  Louren Rubico
                </h6>
                <a>
                  <span className="text-white text-sm">louren@gmail.com</span>
                </a>
                <Link to="/changePass">
                  <span className="text-white text-sm">Change Password</span>
                </Link>
                <div className="flex flex-row gap-4 items-center">
                  <Link>
                    <button className=" text-white text-sm">Users</button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="border-t-[2px] border-dashAccent flex flex-col gap-2 bottom-0">
          <h5 className="mt-[10px] text-[white] text-sm">Powered by:</h5>
          <div className="w-[120px] h-[44px]">
            <img
              src={`${devBaseImgUrl}/logo-fbs.png`}
              alt=""
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
