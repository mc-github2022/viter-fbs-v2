import { BiSolidDownArrow } from "react-icons/bi";
import { FaRegImages } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../helpers/functions-general";
import LoadImages from "../../../partials/LoadImages";
import FetchingSpinner from "../../../partials/spinners/FetchingSpinner";

const Header = ({ handleUpdateHeader, headerData, isLoading }) => {
  const headerLogoImg = getConvertStringToJSONparseData(
    headerData?.data?.[0]?.header_logo_img
  );

  return (
    <>
      <section
        id="header"
        className="header py-2 md:py-0 bg-light w-full z-[99] lg:z-[999] shadow-md"
      >
        {isLoading && <FetchingSpinner />}
        <div className={` customContainer relative`}>
          <a
            className="absolute cursor-pointer tooltip-btn right-5 top-1"
            data-tooltip="Edit contents"
            onClick={handleUpdateHeader}
          >
            <FaRegImages className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
          </a>
          <div className="wrapper flex justify-between items-center">
            <div className="theLogo relative">
              {headerData?.data?.length > 0 && headerLogoImg?.length > 0 ? (
                <>
                  {headerLogoImg.map((img, index) => (
                    <div key={index}>
                      <Link>
                        <LoadImages
                          url={`${googleHDViewLink}${img?.id}`}
                          alt="Frontline Business Solutions Logo"
                          className="w-[80%] md:w-[90%] z-10"
                          // isTableSpinner={true}
                        />
                      </Link>
                    </div>
                  ))}
                </>
              ) : (
                <div className=" w-[180px] h-[47px] object-cover object-top place-content-center place-items-center bg-gray-300 ">
                  <FaRegImages className="text-[30px] text-gray-400" />
                </div>
              )}
            </div>
            <div
              className={` theNav flex justify-end md:justify-between items-center `}
            >
              <ul className="md:flex  [&>li]:flex [&>li]:items-center md:ml-auto lg:m-0 h-screen md:h-[96px]">
                <li>
                  <button className="text-left">
                    <Link>
                      {headerData?.data?.length > 0 &&
                      headerData.data[0]?.header_nav_a
                        ? headerData?.data[0].header_nav_a
                        : "Navigation 1"}
                    </Link>
                  </button>
                </li>
                <li>
                  <button href="#" className={` flex items-center gap-2`}>
                    {headerData?.data?.length > 0 &&
                    headerData.data[0]?.header_nav_b
                      ? headerData?.data[0].header_nav_b
                      : "Navigation 2"}
                    <BiSolidDownArrow
                      className={` transition-all -rotate-90 md:rotate-0 md:block`}
                    />
                  </button>
                </li>
                <li className="relative ">
                  <button href="#" className={` flex items-center gap-2`}>
                    {headerData?.data?.length > 0 &&
                    headerData.data[0]?.header_nav_c
                      ? headerData?.data[0].header_nav_c
                      : "Navigation 3"}
                    <BiSolidDownArrow
                      className={` transition-all -rotate-90 md:rotate-0 md:block`}
                    />
                  </button>
                  {/* <ul
                    className={`${
                      toggleWhyUs
                        ? "md:!absolute md:!top-[96px] md:!w-[180px] md:addShadow !bg-customGray [&>li]:my-2 lg:[&>li]:my-2 py-0 md:p-[20px]  !top-12 pl-[2.75rem] md:pl-[20px] transition-all md:!bg-light"
                        : "hidden"
                    } left-0  text-sm p-5 md:rounded-bl-xl md:rounded-br-xl`}
                  >
                    <li>
                      <Link
                        // className="!p-0 hover:text-primary"
                        to={`${devNavUrl}/why-work-with-us`}
                        className={`${
                          pageName === "whyWorkWithUs"
                            ? "!p-0 text-primary !cursor-default"
                            : "!p-0 hover:text-primary"
                        }`}
                      >
                        Why Work With Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`${devNavUrl}/events-and-activities`}
                        className={`${
                          pageName === "events&Activities"
                            ? "!p-0 text-primary !cursor-default"
                            : "!p-0 hover:text-primary"
                        }`}
                      >
                        Events & Activities
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`${devNavUrl}/career`}
                        className={`${
                          pageName === "career"
                            ? "!p-0 text-primary !cursor-default"
                            : "!p-0 hover:text-primary"
                        }`}
                      >
                        Career
                      </Link>
                    </li>
                  </ul> */}
                </li>
                <li>
                  {headerData?.data.map((item, key) => (
                    <a href={item.header_payment_link || "#"} key={key}>
                      {item.header_nav_d || "Navigation 4"}
                    </a>
                  ))}
                </li>
                <div className="w-[200px] justify-center mt-9 md:hidden mx-[44px]">
                  <a
                    href="#"
                    className="btn bg-gradient-to-r hover:duration-500 hover:bg-gradient-to-r text-light rounded-full  from-secondary to-secondary hover:to-primary uppercase"
                  >
                    {headerData?.data?.length > 0 &&
                    headerData.data[0]?.header_button_text
                      ? headerData?.data[0].header_button_text
                      : "Button"}
                  </a>
                </div>
              </ul>
            </div>

            <div className="lg:w-[200px] lg:flex justify-center hidden md:block">
              <button className="btn bg-gradient-to-r hover:duration-500 hover:bg-gradient-to-r text-light my-5  lg:block rounded-full  from-secondary to-secondary hover:to-primary uppercase">
                {headerData?.data?.length > 0 &&
                headerData.data[0]?.header_button_text
                  ? headerData?.data[0].header_button_text
                  : "Button"}
              </button>
            </div>

            <button
              className={` toggleNav block md:hidden relative w-[20px] h-[20px] ml-auto`}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
