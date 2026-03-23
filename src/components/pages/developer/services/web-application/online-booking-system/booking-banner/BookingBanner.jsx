import React from "react";
import { FaRegImages } from "react-icons/fa";
import {
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../../../helpers/functions-general";
import LoadImages from "../../../../../../partials/LoadImages";

const BookingBanner = ({ bookingData, handleUpdateBookingBanner }) => {
  const bookingBannerImage = getConvertStringToJSONparseData(
    bookingData?.data?.[0]?.booking_banner_img,
  );

  return (
    <>
      <section
        id="ServiceHrBanner"
        className="banner pt-[59px] md:pt-[95px] min-h-[100vh] md:min-h-[90vh] relative flex items-center"
      >
        {bookingData?.data?.length > 0 && bookingBannerImage?.length > 0 ? (
          <>
            {bookingBannerImage.map((img, index) => (
              <LoadImages
                url={`${googleHDViewLink}${img?.id}`}
                alt={`asset banner ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover z-0"
                key={index}
              />
            ))}
          </>
        ) : (
          <div className=" absolute inset-0 w-full h-full object-cover object-top place-content-center place-items-center bg-gray-300 ">
            <FaRegImages className="text-[200px] text-gray-400" />
          </div>
        )}
        {/* <img
          src={`${devBaseImgUrl}/${banner[0].bannerImage}`}
          alt="Smarter, Faster, and More Efficient HR Information System"
          className="absolute inset-0 w-full h-full object-cover z-0"
        /> */}

        <div className="customContainer relative z-10 h-full">
          <div className="wrapper flex flex-col justify-center items-center h-full text-center lg:grid lg:grid-cols-2">
            <div className="text-center py-10 lg:text-left">
              <h2 className="text-[clamp(30px,3vw,45px)] leading-[1.1] mb-8 text-light font-light">
                <span className="">
                  {bookingData?.data[0].booking_banner_title
                    .split("\n") // Split by new lines
                    .filter((content_a) => content_a.trim() !== "") // Remove empty lines
                    .map((content_a, index) => (
                      <p key={index}>{content_a}</p>
                    ))}
                </span>
                <span className="text-light font-semibold">
                  {bookingData?.data?.length > 0 &&
                  bookingData.data[0]?.booking_banner_title_bold
                    ? bookingData?.data[0].booking_banner_title_bold
                    : "Title"}
                  {/* <h1 class="text-4xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
                    Gradient Text
                  </h1> */}
                </span>
              </h2>

              <p className="text-light mb-10">
                {bookingData?.data?.length > 0 &&
                bookingData.data[0]?.booking_banner_description
                  ? bookingData?.data[0].booking_banner_description
                  : "Description"}
              </p>
              {bookingData?.data.map((item, key) => (
                <a
                  href={`${item.booking_banner_button_link}`}
                  target="_blank"
                  className="btn bg-transparent text-light border-2 uppercase "
                  key={key}
                >
                  {item.booking_banner_button_text}
                </a>
              ))}
              <a
                className="absolute cursor-pointer tooltip-btn left-[28rem] top-2"
                data-tooltip="Edit contents"
                onClick={handleUpdateBookingBanner}
              >
                <FaRegImages className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingBanner;
