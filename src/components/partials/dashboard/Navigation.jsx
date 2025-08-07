import React from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import {
  devBaseImgUrl,
  devNavUrl,
  getUserType,
} from "../../helpers/functions-general";
import {
  setIsContactFormOpen,
  setIsNavOpen,
  setIsNotifOpen,
  setIsPackagesOpen,
  setIsServicesOpen,
  setIsSubsOpen,
  setIsUserOpen,
  setIsWebAppOpen,
  setIswhyUsOpen,
} from "../../store/StoreAction";
import { StoreContext } from "../../store/StoreContext";

const Navigation = ({ menu, submenu }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const link = getUserType();

  const handleNavOpen = () => {
    dispatch(setIsNavOpen(!store.isNavOpen));
  };

  const handleWhyUsOpen = () => {
    dispatch(setIswhyUsOpen(!store.isWhyUsOpen));
  };

  const handleUserOpen = () => {
    dispatch(setIsUserOpen(!store.isUserOpen));
  };

  const handleNotifOpen = () => {
    dispatch(setIsNotifOpen(!store.isNotifOpen));
  };

  const handleSubsOpen = () => {
    dispatch(setIsSubsOpen(!store.isSubsOpen));
  };

  const handleServicesOpen = () => {
    dispatch(setIsServicesOpen(!store.isServicesOpen));
  };

  const handleWebAppOpen = () => {
    dispatch(setIsWebAppOpen(!store.isWebAppOpen));
  };

  const handlePackagesOpen = () => {
    dispatch(setIsPackagesOpen(!store.isPackagesOpen));
  };

  const handleContactFormOpen = () => {
    dispatch(setIsContactFormOpen(!store.isContactFormOpen));
  };

  return (
    <>
      <div className="thedashnav bg-[#f5f5f3] w-[211px] h-screen fixed top-0 p-4 z-50  border-customGray flex flex-col ">
        <div className="theLogo ">
          <div className="w-[130px] h-[44px] my-5 ml-1">
            <img
              src={`${devBaseImgUrl}/logo.png`}
              alt="Frontline Business Solutions"
              className="object-cover"
            />
          </div>
        </div>
        <div className="overflow-y-auto">
          <nav>
            <ul className="flex-col [&>li]:text-left [&>li]:text-[16px] font-semibold text-[14px] ">
              {store.credentials.data.role_code === "role_is_marketing" ? (
                <>
                  <li
                    className={` flex justify-between items-center p-1
                  ${
                    menu === "subscribers"
                      ? "text-primary underline underline-offset-4 "
                      : "text-dark "
                  }
                `}
                  >
                    <Link to={`${devNavUrl}${link}/subscribers`}>
                      <div className="nav flex items-center">
                        <span className=" text-[14px] uppercase">
                          Subscriber List
                        </span>
                      </div>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li
                    className={` flex justify-between items-center px-1 py-0.5
                  ${
                    menu === "special-offers"
                      ? "text-primary underline underline-offset-4 "
                      : "text-dark "
                  }
                `}
                  >
                    <Link to={`${devNavUrl}${link}/special-offers`}>
                      <div className="nav flex items-center">
                        <span className=" text-[14px] uppercase">
                          Special Offers
                        </span>
                      </div>
                    </Link>
                  </li>

                  <li
                    className={` flex justify-between items-center px-1 py-0.5
                  ${
                    menu === "partners"
                      ? "text-primary underline underline-offset-4 "
                      : "text-dark "
                  }
                `}
                  >
                    <Link to={`${devNavUrl}${link}/partners`}>
                      <div className="nav flex items-center">
                        <span className=" text-[14px] uppercase">Partners</span>
                      </div>
                    </Link>
                  </li>

                  <li
                    className={` flex justify-between items-center px-1 py-0.5
                  ${
                    menu === "lcss-batches"
                      ? "text-primary underline underline-offset-4 "
                      : "text-dark "
                  }
                `}
                  >
                    <Link to={`${devNavUrl}${link}/lcss-batches`}>
                      <div className="nav flex items-center">
                        <span className=" text-[14px] uppercase">
                          LCSS Batches
                        </span>
                      </div>
                    </Link>
                  </li>

                  <li
                    className={` flex justify-between items-center px-1 py-0.5
                  ${
                    menu === "industry-testimonial"
                      ? "text-primary underline underline-offset-4 "
                      : "text-dark "
                  }
                `}
                  >
                    <Link to={`${devNavUrl}${link}/industry-testimonial`}>
                      <div className="nav flex items-center">
                        <span className=" text-[14px] uppercase">
                          Industry Testi.
                        </span>
                      </div>
                    </Link>
                  </li>

                  <li
                    className={` flex justify-between items-center px-1 py-0.5
                  ${
                    menu === "vid-testimonial"
                      ? "text-primary underline underline-offset-4 "
                      : "text-dark "
                  }
                `}
                  >
                    <Link to={`${devNavUrl}${link}/vid-testimonial`}>
                      <div className="nav flex items-center">
                        <span className=" text-[14px] uppercase">
                          Video Testimonials
                        </span>
                      </div>
                    </Link>
                  </li>

                  <li
                    className={` flex justify-between items-center px-1 py-0.5
                  ${
                    menu === "gallery"
                      ? "text-primary underline underline-offset-4 "
                      : "text-dark "
                  }
                `}
                  >
                    <Link to={`${devNavUrl}${link}/gallery`}>
                      <div className="nav flex items-center">
                        <span className=" text-[14px] uppercase">Gallery</span>
                      </div>
                    </Link>
                  </li>

                  {/* HOME */}
                  <Link to={`${devNavUrl}${link}/home`}>
                    <li
                      className={` flex justify-between items-center px-1 py-0.5 cursor-pointer
                  ${
                    menu === "home"
                      ? "text-primary underline underline-offset-4 "
                      : "text-dark "
                  }
                `}
                      onClick={() => handleNavOpen()}
                    >
                      <div className="nav flex items-center justify-between w-full">
                        <span className=" text-[14px] uppercase">Home</span>
                        <IoChevronDownSharp
                          className={`${
                            store.isNavOpen ? "" : "rotate-180"
                          } transition-all text-base`}
                        />
                      </div>
                    </li>
                  </Link>

                  <ul
                    className={`${
                      store.isNavOpen ? "h-0 overflow-hidden" : "my-2"
                    } submenu ml-5  text-[14px] `}
                  >
                    <Link
                      className="!p-0"
                      to={`${devNavUrl}${link}/home-banner`}
                    >
                      <li
                        className={`text-xs border-transparent hover:underline ${
                          submenu === "home-banner"
                            ? "text-primary font-bold "
                            : "border-none text-dark"
                        }`}
                      >
                        Banner
                      </li>
                    </Link>

                    <Link
                      className="!p-0"
                      to={`${devNavUrl}${link}/home-testimonial`}
                    >
                      <li
                        className={`text-xs my-1 border-transparent hover:underline ${
                          submenu === "home-testimonial"
                            ? "text-primary font-bold"
                            : "border-none text-dark"
                        }`}
                      >
                        Testimonials
                      </li>
                    </Link>

                    <Link
                      className="!p-0"
                      to={`${devNavUrl}${link}/home-insights`}
                    >
                      <li
                        className={`text-xs  border-transparent hover:underline ${
                          submenu === "home-insights"
                            ? "text-primary font-bold"
                            : "border-none text-dark"
                        }`}
                      >
                        Insights
                      </li>
                    </Link>
                  </ul>

                  {/* Services */}
                  <li
                    className={` flex justify-between items-center px-1 py-0.5 cursor-pointer
                  ${
                    menu === "services"
                      ? "text-primary underline underline-offset-4 "
                      : "text-dark "
                  }
                `}
                    onClick={() => handleServicesOpen()}
                  >
                    <div className="nav flex items-center justify-between w-full">
                      <span className=" text-[14px] uppercase">Services</span>
                      <IoChevronDownSharp
                        className={`${
                          store.isServicesOpen ? "" : "rotate-180"
                        } transition-all text-base`}
                      />
                    </div>
                  </li>

                  <ul
                    className={`${
                      store.isServicesOpen ? "h-0 overflow-hidden" : "my-2"
                    } submenu ml-5  text-[14px] `}
                  >
                    <Link
                      className="!p-0"
                      to={`${devNavUrl}${link}/services/web-application`}
                    >
                      <li
                        className={`text-xs  border-transparent hover:underline ${
                          submenu === "web-application"
                            ? "text-primary font-bold"
                            : "border-none text-dark"
                        }`}
                      >
                        Web Applications
                      </li>
                    </Link>

                    <Link
                      className="!p-0"
                      to={`${devNavUrl}${link}/services/lcss`}
                    >
                      <li
                        className={`text-xs my-1 border-transparent hover:underline ${
                          submenu === "lcss"
                            ? "text-primary font-bold"
                            : "border-none text-dark"
                        }`}
                      >
                        Learning Center Solutions
                      </li>
                    </Link>

                    <Link
                      className="!p-0"
                      to={`${devNavUrl}${link}/services/accounting-solutions`}
                    >
                      <li
                        className={`text-xs my-1 border-transparent hover:underline ${
                          submenu === "accounting-solutions"
                            ? "text-primary font-bold"
                            : "border-none text-dark"
                        }`}
                      >
                        Accounting Solutions
                      </li>
                    </Link>

                    <Link
                      className="!p-0"
                      to={`${devNavUrl}${link}/services/virtual-assistant-solutions`}
                    >
                      <li
                        className={`text-xs my-1 border-transparent hover:underline ${
                          submenu === "virtual-assistant-solutions"
                            ? "text-primary font-bold"
                            : "border-none text-dark"
                        }`}
                      >
                        Virtual Assistant Solutions
                      </li>
                    </Link>

                    <Link
                      className="!p-0"
                      to={`${devNavUrl}${link}/services/web-design-and-development`}
                    >
                      <li
                        className={`text-xs  border-transparent hover:underline ${
                          submenu === "web-design-and-development"
                            ? "text-primary font-bold"
                            : "border-none text-dark"
                        }`}
                      >
                        Web Design & Dev
                      </li>
                    </Link>
                  </ul>

                  {/* WHY FBS */}
                  <li
                    className={` flex justify-between items-center px-1 py-0.5 cursor-pointer
                  ${
                    menu === "whyFBS"
                      ? "text-primary underline underline-offset-4 "
                      : "text-dark "
                  }
                `}
                    onClick={() => handleWhyUsOpen()}
                  >
                    <div className="nav flex items-center justify-between w-full">
                      <span className=" text-[14px] uppercase">Why FBS?</span>
                      <IoChevronDownSharp
                        className={`${
                          store.isWhyUsOpen ? "" : "rotate-180"
                        } transition-all`}
                      />
                    </div>
                  </li>

                  <ul
                    className={`${
                      store.isWhyUsOpen ? "h-0 overflow-hidden" : "my-2"
                    } submenu ml-5`}
                  >
                    <Link
                      className="!p-0"
                      to={`${devNavUrl}${link}/why-work-with-us`}
                    >
                      <li
                        className={`text-xs my-1 border-transparent hover:underline ${
                          submenu === "why-work-with-us"
                            ? "text-primary font-bold"
                            : "border-none text-dark"
                        }`}
                      >
                        Why Work With Us
                      </li>
                    </Link>
                    <Link
                      className="!p-0"
                      to={`${devNavUrl}${link}/events-activities-page`}
                    >
                      <li
                        className={`text-xs  border-transparent hover:underline ${
                          submenu === "events-activities-page"
                            ? "text-primary font-bold"
                            : "border-none text-dark"
                        }`}
                      >
                        Events & Activities Page
                      </li>
                    </Link>
                    <Link
                      className="!p-0"
                      to={`${devNavUrl}${link}/whyFBS-careers-page`}
                    >
                      <li
                        className={`text-xs my-1 border-transparent hover:underline ${
                          submenu === "whyFBS-careers-page"
                            ? "text-primary font-bold"
                            : "border-none text-dark"
                        }`}
                      >
                        Careers Page
                      </li>
                    </Link>
                    <Link
                      className="!p-0"
                      to={`${devNavUrl}${link}/events-activities`}
                    >
                      <li
                        className={`text-xs  border-transparent hover:underline ${
                          submenu === "events-activities"
                            ? "text-primary font-bold"
                            : "border-none text-dark"
                        }`}
                      >
                        Events & Activities List
                      </li>
                    </Link>
                    <Link
                      className="!p-0"
                      to={`${devNavUrl}${link}/whyFBS-careers`}
                    >
                      <li
                        className={`text-xs my-1 border-transparent hover:underline ${
                          submenu === "whyFBS-careers"
                            ? "text-primary font-bold"
                            : "border-none text-dark"
                        }`}
                      >
                        Careers List
                      </li>
                    </Link>
                  </ul>

                  {/* Packages */}
                  <li
                    className={` flex justify-between items-center px-1 py-0.5 cursor-pointer
                  ${
                    menu === "packages"
                      ? "text-primary underline underline-offset-4 "
                      : "text-dark "
                  }
                `}
                    onClick={() => handlePackagesOpen()}
                  >
                    <div className="nav flex items-center justify-between w-full">
                      <span className=" text-[14px] uppercase">Packages</span>
                      <IoChevronDownSharp
                        className={`${
                          store.isPackagesOpen ? "" : "rotate-180"
                        } transition-all`}
                      />
                    </div>
                  </li>

                  <ul
                    className={`${
                      store.isPackagesOpen ? "h-0 overflow-hidden" : "my-2"
                    } submenu ml-5`}
                  >
                    <Link
                      className="!p-0"
                      to={`${devNavUrl}${link}/packages/category`}
                    >
                      <li
                        className={`text-xs  border-transparent hover:underline ${
                          submenu === "category"
                            ? "text-primary font-bold"
                            : "border-none text-dark"
                        }`}
                      >
                        Category
                      </li>
                    </Link>
                    <Link
                      className="!p-0"
                      to={`${devNavUrl}${link}/packages/list`}
                    >
                      <li
                        className={`text-xs my-1 border-transparent hover:underline ${
                          submenu === "list"
                            ? "text-primary font-bold"
                            : "border-none text-dark"
                        }`}
                      >
                        List
                      </li>
                    </Link>
                    <Link
                      className="!p-0"
                      to={`${devNavUrl}${link}/packages/details`}
                    >
                      <li
                        className={`text-xs my-1 border-transparent hover:underline ${
                          submenu === "details"
                            ? "text-primary font-bold"
                            : "border-none text-dark"
                        }`}
                      >
                        Details
                      </li>
                    </Link>
                  </ul>

                  {/* Contact Form */}
                  <li
                    className={` flex justify-between items-center px-1 py-0.5 cursor-pointer
                  ${
                    menu === "contact-form"
                      ? "text-primary underline underline-offset-4 "
                      : "text-dark "
                  }
                `}
                    onClick={() => handleContactFormOpen()}
                  >
                    <div className="nav flex items-center justify-between w-full">
                      <span className=" text-[14px] uppercase">
                        Contact Form
                      </span>
                      <IoChevronDownSharp
                        className={`${
                          store.isContactFormOpen ? "" : "rotate-180"
                        } transition-all`}
                      />
                    </div>
                  </li>

                  <ul
                    className={`${
                      store.isContactFormOpen ? "h-0 overflow-hidden" : "my-2"
                    } submenu ml-5`}
                  >
                    <Link
                      className="!p-0"
                      to={`${devNavUrl}${link}/contact-form/form`}
                    >
                      <li
                        className={`text-xs  border-transparent hover:underline ${
                          submenu === "form"
                            ? "text-primary font-bold"
                            : "border-none text-dark"
                        }`}
                      >
                        Form
                      </li>
                    </Link>
                    <Link
                      className="!p-0"
                      to={`${devNavUrl}${link}/contact-form/content`}
                    >
                      <li
                        className={`text-xs my-1 border-transparent hover:underline ${
                          submenu === "content"
                            ? "text-primary font-bold"
                            : "border-none text-dark"
                        }`}
                      >
                        Content
                      </li>
                    </Link>
                  </ul>

                  <li
                    className={` flex justify-between items-center px-1 py-0.5 cursor-pointer
                  ${
                    menu === "notification"
                      ? "text-primary underline underline-offset-4 "
                      : "text-dark "
                  }
                `}
                    onClick={() => handleNotifOpen()}
                  >
                    <div className="nav flex items-center justify-between w-full">
                      <span className=" text-[14px] uppercase">
                        Notification
                      </span>
                      <IoChevronDownSharp
                        className={`${
                          store.isNotifOpen ? "" : "rotate-180"
                        } transition-all`}
                      />
                    </div>
                  </li>

                  <ul
                    className={`${
                      store.isNotifOpen ? "h-0 overflow-hidden" : "my-2"
                    } submenu ml-5`}
                  >
                    <Link
                      className="!p-0"
                      to={`${devNavUrl}${link}/notification-receiver`}
                    >
                      <li
                        className={`text-xs my-1 border-transparent hover:underline ${
                          submenu === "notification-receiver"
                            ? "text-primary font-bold"
                            : "border-none text-dark"
                        }`}
                      >
                        Receiver
                      </li>
                    </Link>
                    <Link
                      className="!p-0"
                      to={`${devNavUrl}${link}/notification-log`}
                    >
                      <li
                        className={`text-xs my-1  border-transparent hover:underline ${
                          submenu === "notification-log"
                            ? "text-primary font-bold"
                            : "border-none text-dark"
                        }`}
                      >
                        Log
                      </li>
                    </Link>
                  </ul>

                  <li
                    className={` flex justify-between items-center px-1 py-0.5 cursor-pointer
                  ${
                    menu === "subscribers"
                      ? "text-primary underline underline-offset-4 "
                      : "text-dark "
                  }
                `}
                    onClick={() => handleSubsOpen()}
                  >
                    <div className="nav flex items-center justify-between w-full">
                      <span className=" text-[14px] uppercase">
                        Subscribers
                      </span>
                      <IoChevronDownSharp
                        className={`${
                          store.isSubsOpen ? "" : "rotate-180"
                        } transition-all`}
                      />
                    </div>
                  </li>

                  <ul
                    className={`${
                      store.isSubsOpen ? "h-0 overflow-hidden" : "my-2"
                    } submenu ml-5`}
                  >
                    <Link className="!p-0" to={`${devNavUrl}${link}/audience`}>
                      <li
                        className={`text-xs my-1 border-transparent hover:underline ${
                          submenu === "audience"
                            ? "text-primary font-bold"
                            : "border-none text-dark"
                        }`}
                      >
                        Audience
                      </li>
                    </Link>
                    <Link
                      className="!p-0"
                      to={`${devNavUrl}${link}/subscribers`}
                    >
                      <li
                        className={`text-xs my-1 border-transparent hover:underline ${
                          submenu === "subscribers"
                            ? "text-primary font-bold"
                            : "border-none text-dark"
                        }`}
                      >
                        Subscriber List
                      </li>
                    </Link>
                    <Link
                      className="!p-0"
                      to={`${devNavUrl}${link}/email-list`}
                    >
                      <li
                        className={`text-xs my-1  border-transparent hover:underline ${
                          submenu === "email-list"
                            ? "text-primary font-bold"
                            : "border-none text-dark"
                        }`}
                      >
                        Email List
                      </li>
                    </Link>
                    <Link className="!p-0" to={`${devNavUrl}${link}/mailer`}>
                      <li
                        className={`text-xs my-1  border-transparent hover:underline ${
                          submenu === "mailer"
                            ? "text-primary font-bold"
                            : "border-none text-dark"
                        }`}
                      >
                        Mailer
                      </li>
                    </Link>
                    <Link
                      className="!p-0"
                      to={`${devNavUrl}${link}/mailer-log`}
                    >
                      <li
                        className={`text-xs my-1  border-transparent hover:underline ${
                          submenu === "mailer-log"
                            ? "text-primary font-bold"
                            : "border-none text-dark"
                        }`}
                      >
                        Mailer Log
                      </li>
                    </Link>
                  </ul>

                  {store.credentials.data.role_code === "role_is_developer" ? (
                    <>
                      <li
                        className={` flex justify-between items-center px-1 py-0.5 cursor-pointer
                  ${
                    menu === "user"
                      ? "text-primary underline underline-offset-4 "
                      : "text-dark "
                  }
                `}
                        onClick={() => handleUserOpen()}
                      >
                        <div className="nav flex items-center justify-between w-full">
                          <span className=" text-[14px] uppercase">Users</span>
                          <IoChevronDownSharp
                            className={`${
                              store.isUserOpen ? "" : "rotate-180"
                            } transition-all`}
                          />
                        </div>
                      </li>

                      <ul
                        className={`${
                          store.isUserOpen ? "h-0 overflow-hidden" : "my-2"
                        } submenu ml-5`}
                      >
                        <Link
                          className="!p-0"
                          to={`${devNavUrl}${link}/other-user`}
                        >
                          <li
                            className={`text-xs  border-transparent hover:underline ${
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
                            className={`text-xs my-1 border-transparent hover:underline ${
                              submenu === "user-developer"
                                ? "text-primary font-bold"
                                : "border-none text-dark"
                            }`}
                          >
                            Developer
                          </li>
                        </Link>
                        <Link
                          className="!p-0"
                          to={`${devNavUrl}${link}/user-role`}
                        >
                          <li
                            className={`text-xs my-1 border-transparent hover:underline ${
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
                    <>
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
                            <span className=" text-[14px] uppercase">User</span>
                          </div>
                        </Link>
                      </li>
                    </>
                  )}
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navigation;
