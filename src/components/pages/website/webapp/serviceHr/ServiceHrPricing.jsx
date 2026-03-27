import React, { useRef } from "react";
import { FaCheckCircle, FaRegThumbsUp } from "react-icons/fa";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdCloseCircle,
} from "react-icons/io";
import Slider from "react-slick";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { apiVersion } from "../../../../helpers/functions-general";
import ModalContact from "../../../../partials/ModalContact";
import TableLoading from "../../../../partials/spinners/TableLoading";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute text-light top-[20%] -translate-y-[50%] right-[-20px] text-[3rem] cursor-pointer bg-primary rounded-full w-[48px] h-[48px] grid place-items-center
      md:top-[50%]"
    >
      <IoIosArrowForward className="text-[2rem]" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute text-light top-[20%] -translate-y-[50%] left-[-20px] text-[3rem] cursor-pointer bg-primary rounded-full w-[48px] h-[48px] grid place-items-center z-10
      md:top-[50%]"
    >
      <IoIosArrowBack className="text-[2rem]" />
    </div>
  );
}

const ServiceHrPricing = ({ pageName, hrisTitlesData }) => {
  const [contactSubject, setContactSubject] = React.useState("");
  const [modalContact, setModalContact] = React.useState(false);
  const [contactForm, setContactForm] = React.useState(false);
  const handleForm = (item) => {
    setContactForm(!contactForm);
    setContactSubject(item);
  };

  const {
    isFetching,
    error,
    isLoading,
    status,
    data: packagesDetailsData,
  } = useQueryData(
    `${apiVersion}/packages-details`, // endpoint
    "get", // method
    "packages-details", // key
    {},
    null,
    true,
  );

  const { data: packagesListData } = useQueryData(
    `${apiVersion}/packages-list`, // endpoint
    "get", // method
    "packages-list", // key
    {},
    null,
    true,
  );

  const selectedCategory =
    packagesListData?.data?.find(
      (item) => item.packages_category_url === "webapp-hris",
    )?.packages_category_url || "webapp-hris";

  const filteredItems =
    packagesListData?.data?.filter(
      (item) => item.packages_category_url === selectedCategory,
    ) || [];

  var eventsSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dotsClass: "slickNav slick-dots",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          bottom: "-60px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "20px",
          height: "20px",
          color: "blue",
          background: "gray",
          borderRadius: "50%",
          opacity: "50%",
        }}
      ></div>
    ),
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        },
      },
    ],
  };

  const sliderRef = useRef(null);

  // This is for keyboard navigation of slider
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (sliderRef.current) {
        // Check if the ref is defined
        if (event.key === "ArrowRight") {
          sliderRef.current.slickNext();
        } else if (event.key === "ArrowLeft") {
          sliderRef.current.slickPrev();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <section className="ServiceHrPricing py-20 bg-[#000000] relative sm:overflow-hidden">
        <div className="footerGradientBlack hidden sm:block absolute h-[1000px] w-full bottom-[-30%] right-[-30%]"></div>
        <div className="customContainer z-[1]">
          <div className="mb-20 text-center relative z-[3]">
            <p className="text-light">
              {hrisTitlesData?.data?.length > 0 &&
              hrisTitlesData.data[0]?.hris_titles_packages_subtitle
                ? hrisTitlesData?.data[0].hris_titles_packages_subtitle
                : ""}
            </p>
            <h3 className="text-[clamp(20px,7vw,35px)] font-semibold leading-[1.1] text-light">
              {hrisTitlesData?.data?.length > 0 &&
              hrisTitlesData.data[0]?.hris_titles_packages_title
                ? hrisTitlesData?.data[0].hris_titles_packages_title
                : ""}
            </h3>
          </div>
          <div className="wrapper ">
            {filteredItems.length > 3 ? (
              <Slider ref={sliderRef} {...eventsSliderSettings}>
                {filteredItems.map((price, key) => (
                  <div
                    key={key}
                    className={`priceItem mb-5 lg:mb-0 relative z-[1] text-light text-center p-10 rounded-lg  max-w-[400px] min-h-[500px] lg:h-[620px] ${
                      price.packages_list_is_highlighted === 1
                        ? "bg-primary"
                        : "bg-customGray !text-dark"
                    } grid place-items-center `}
                  >
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="title mb-4 min-h-[182px]">
                          <FaRegThumbsUp className="text-[50px] mx-auto mb-4" />
                          <div className="mb-6">
                            <h3
                              className={`${
                                price.packages_list_is_highlighted === 1
                                  ? "text-light"
                                  : "text-primary"
                              } text-2xl font-bold `}
                            >
                              {price.packages_list_title}
                            </h3>
                            {price.packages_list_title_desc !== "" && (
                              <p
                                className={`${
                                  price.packages_list_is_highlighted === 1
                                    ? "text-light"
                                    : "text-primary"
                                } text-light text-lg italic`}
                              >
                                {price.packages_list_title_desc}
                              </p>
                            )}
                          </div>

                          <div className="flex flex-col gap-2 ">
                            <div>
                              <p
                                className={`${
                                  price.packages_list_is_highlighted === 1
                                    ? "text-light"
                                    : "text-primary"
                                } text-2xl  font-bold text-light`}
                              >
                                {price.packages_list_price}
                              </p>

                              {price.packages_list_price_desc !== "" && (
                                <p
                                  className={`${
                                    price.packages_list_is_highlighted === 1
                                      ? "text-light"
                                      : "text-primary"
                                  } text-light text-lg italic`}
                                >
                                  {price.packages_list_price_desc}
                                </p>
                              )}
                            </div>

                            <div>
                              {price.packages_list_foreign_price !== "" && (
                                <p
                                  className={`${
                                    price.packages_list_is_highlighted === 1
                                      ? "text-light"
                                      : "text-primary"
                                  }  text-2xl  font-bold text-light`}
                                >
                                  {price.packages_list_foreign_price}
                                </p>
                              )}
                              {price.packages_list_foreign_price_desc !==
                                "" && (
                                <p
                                  className={`${
                                    price.packages_list_is_highlighted === 1
                                      ? "text-light"
                                      : "text-primary"
                                  } text-light text-lg italic`}
                                >
                                  {price.packages_list_foreign_price_desc}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>

                        <table className="prices my-5 min-h-[200px]">
                          <tbody className="">
                            {packagesDetailsData?.data.map((info, key) => {
                              if (
                                Number(info.packages_details_list_id) ===
                                price.packages_list_aid
                              ) {
                                const isDetailHighlighted =
                                  Number(
                                    info.packages_details_is_highlighted,
                                  ) === 1;
                                const isPriceHighlighted =
                                  Number(price.packages_list_is_highlighted) ===
                                  1;

                                return (
                                  <React.Fragment key={key}>
                                    <tr className="border-0 flex items-start ">
                                      <td colSpan="100%" className="p-10">
                                        {status === "pending" && (
                                          <TableLoading />
                                        )}
                                      </td>
                                      <td>
                                        {isDetailHighlighted ? (
                                          <FaCheckCircle
                                            className={`${
                                              isPriceHighlighted
                                                ? "text-light"
                                                : "text-primary"
                                            } mt-1`}
                                          />
                                        ) : (
                                          <IoMdCloseCircle className="text-[#a3a3a3] text-lg mt-1" />
                                        )}
                                      </td>
                                      <td
                                        className={`text-[16px] ${
                                          isDetailHighlighted
                                            ? ""
                                            : "text-[#a3a3a3]"
                                        }`}
                                      >
                                        {info.packages_details_title}
                                      </td>
                                    </tr>
                                    {info.packages_details_list
                                      ?.split("\n")
                                      .filter(
                                        (details) => details.trim() !== "",
                                      )
                                      .map((details, idx) => (
                                        <p
                                          key={`${info.packages_details_list_id}-detail-${idx}`}
                                          className={`text-sm ml-8 ${
                                            isDetailHighlighted
                                              ? ""
                                              : "text-[#a3a3a3]"
                                          }`}
                                        >
                                          {details}
                                        </p>
                                      ))}
                                  </React.Fragment>
                                );
                              }
                            })}
                            {price.packages_list_other_details !== "" && (
                              <p
                                className={`${
                                  price.packages_list_is_highlighted === 1
                                    ? "text-light"
                                    : ""
                                }  text-base text-center mt-6 `}
                              >
                                {price.packages_list_other_details}
                              </p>
                            )}
                          </tbody>
                        </table>
                      </div>

                      <button
                        onClick={() => handleForm(price.packages_list_title)}
                        className="btn bg-primary text-light border-light
                          border-2 mt-10 font-bold w-[190px] mx-auto
                          hover:bg-light hover:text-primary hover:border-primary uppercase"
                      >
                        {price.packages_list_button_text}
                      </button>
                    </div>
                  </div>
                ))}
              </Slider>
            ) : (
              <>
                <div className="md:grid md:place-items-center">
                  <div className="wrapper md:flex md:flex-row md:flex-wrap gap-6 items-center place-content-center">
                    {filteredItems.map((price, key) => (
                      <div
                        key={key}
                        className={`priceItem mb-5 lg:mb-0 relative z-[1] text-light text-center p-10 rounded-lg addShadow md:w-[400px] min-h-[500px] lg:h-[620px] ${
                          price.packages_list_is_highlighted === 1
                            ? "bg-primary"
                            : "bg-customGray !text-dark"
                        } grid `}
                      >
                        <div className="flex flex-col justify-between">
                          <div>
                            <div className="title mb-4 min-h-[182px]">
                              <FaRegThumbsUp className="text-[50px] mx-auto mb-4" />
                              <div className="mb-6">
                                <h3
                                  className={`${
                                    price.packages_list_is_highlighted === 1
                                      ? "text-light"
                                      : "text-primary"
                                  } text-2xl font-bold `}
                                >
                                  {price.packages_list_title}
                                </h3>
                                {price.packages_list_title_desc !== "" && (
                                  <p
                                    className={`${
                                      price.packages_list_is_highlighted === 1
                                        ? "text-light"
                                        : "text-primary"
                                    } text-light text-lg italic`}
                                  >
                                    {price.packages_list_title_desc}
                                  </p>
                                )}
                              </div>

                              <div className="flex flex-col gap-2 ">
                                <div>
                                  <p
                                    className={`${
                                      price.packages_list_is_highlighted === 1
                                        ? "text-light"
                                        : "text-primary"
                                    } text-2xl  font-bold text-light`}
                                  >
                                    {price.packages_list_price}
                                  </p>

                                  {price.packages_list_price_desc !== "" && (
                                    <p
                                      className={`${
                                        price.packages_list_is_highlighted === 1
                                          ? "text-light"
                                          : "text-primary"
                                      } text-light text-lg italic`}
                                    >
                                      {price.packages_list_price_desc}
                                    </p>
                                  )}
                                </div>

                                <div>
                                  {price.packages_list_foreign_price !== "" && (
                                    <p
                                      className={`${
                                        price.packages_list_is_highlighted === 1
                                          ? "text-light"
                                          : "text-primary"
                                      }  text-2xl  font-bold text-light`}
                                    >
                                      {price.packages_list_foreign_price}
                                    </p>
                                  )}
                                  {price.packages_list_foreign_price_desc !==
                                    "" && (
                                    <p
                                      className={`${
                                        price.packages_list_is_highlighted === 1
                                          ? "text-light"
                                          : "text-primary"
                                      } text-light text-lg italic`}
                                    >
                                      {price.packages_list_foreign_price_desc}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>

                            <table className="prices my-5 min-h-[200px]">
                              <tbody className="">
                                {packagesDetailsData?.data.map((info, key) => {
                                  if (
                                    Number(info.packages_details_list_id) ===
                                    price.packages_list_aid
                                  ) {
                                    const isDetailHighlighted =
                                      Number(
                                        info.packages_details_is_highlighted,
                                      ) === 1;
                                    const isPriceHighlighted =
                                      Number(
                                        price.packages_list_is_highlighted,
                                      ) === 1;

                                    return (
                                      <React.Fragment key={key}>
                                        <tr
                                          key={key}
                                          className="border-0 flex gap-2"
                                        >
                                          <td>
                                            {isDetailHighlighted ? (
                                              <FaCheckCircle
                                                className={`${
                                                  isPriceHighlighted
                                                    ? "text-light"
                                                    : "text-primary"
                                                } mt-1`}
                                              />
                                            ) : (
                                              <IoMdCloseCircle className="text-[#a3a3a3] text-lg mt-1" />
                                            )}
                                          </td>
                                          <td
                                            className={`text-base ${
                                              isDetailHighlighted
                                                ? ""
                                                : "text-[#a3a3a3]"
                                            }`}
                                          >
                                            {info.packages_details_title}
                                          </td>
                                        </tr>
                                        {info.packages_details_list
                                          ?.split("\n")
                                          .filter(
                                            (details) => details.trim() !== "",
                                          )
                                          .map((details, idx) => (
                                            <p
                                              key={idx}
                                              className={`text-sm ml-8 ${
                                                isDetailHighlighted
                                                  ? ""
                                                  : "text-[#a3a3a3]"
                                              }`}
                                            >
                                              {details}
                                            </p>
                                          ))}
                                      </React.Fragment>
                                    );
                                  }
                                })}

                                {price.packages_list_other_details !== "" && (
                                  <p
                                    className={`${
                                      price.packages_list_is_highlighted === 1
                                        ? "text-light"
                                        : ""
                                    }  text-base text-center mt-6 `}
                                  >
                                    {price.packages_list_other_details}
                                  </p>
                                )}
                              </tbody>
                            </table>
                          </div>

                          <button
                            onClick={() =>
                              handleForm(price.packages_list_title)
                            }
                            className="btn bg-primary text-light border-light
                            border-2 mt-10 font-bold w-[190px] mx-auto
                            hover:bg-light hover:text-primary hover:border-primary uppercase"
                          >
                            {price.packages_list_button_text}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="absolute bg-light h-[180px] w-full bottom-[-2px] "></div>
      </section>
      {contactForm && (
        <ModalContact
          setModalContact={setModalContact}
          thePageName={pageName}
          contactForm={contactForm}
          setContactForm={setContactForm}
          modalContact={modalContact}
          contactSubject={contactSubject}
          services={"web services"}
          page={"HR Information System"}
          notification_purpose={"learn-more-web-design-and-development"}
          emailSubject={`CHOOSE PLAN / HR Information System (${contactSubject}) - `}
        />
      )}
    </>
  );
};

export default ServiceHrPricing;
