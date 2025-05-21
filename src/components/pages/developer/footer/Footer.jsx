import React from "react";
import {
  copyrightYear,
  devBaseImgUrl,
  devNavUrl,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../helpers/functions-general";
import { AiFillTikTok } from "react-icons/ai";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaRegImages,
  FaYoutubeSquare,
} from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import LoadImages from "../../../partials/LoadImages";

const Footer = ({
  handleUpdateFooterQuicklinks,
  handleUpdateFooterCopyright,
  handleUpdateFooterLogoImg,
  handleUpdateFooterContactUs,
  footerData,
  contactFormDefaultData,
}) => {
  const footerLogoImg = getConvertStringToJSONparseData(
    footerData?.data?.[0]?.footer_logo_img
  );

  return (
    <>
      <footer className="footer bg-[#000000] pt-14 text-light relative overflow-hidden">
        <div className="customContainer">
          <div className="footerGradientBlack top-[-20%] left-0 absolute h-[700px] w-full sm:top-[-70%] sm:left-[-30rem]"></div>
          <div className="wrapper md:grid md:grid-cols-2 relative z-[1]">
            <div className="text-center sm:text-left">
              <a
                className="absolute cursor-pointer tooltip-btn left-[270px] -top-1 "
                data-tooltip="Edit contents"
                onClick={handleUpdateFooterLogoImg}
              >
                <FaRegImages className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
              </a>
              <div className="theLogo">
                {footerData?.data?.length > 0 && footerLogoImg?.length > 0 ? (
                  <>
                    {footerLogoImg.map((img, index) => (
                      <LoadImages
                        url={`${googleHDViewLink}${img?.id}`}
                        className="w-[157px] h-[41px] mx-auto sm:mx-0 object-cover"
                        alt="Frontline Business Solutions Company Logo"
                        key={index}
                      />
                    ))}
                  </>
                ) : (
                  <div className="  w-[157px] h-[41px] object-cover object-top place-content-center place-items-center bg-gray-300 ">
                    <FaRegImages className="text-[30px] text-gray-400" />
                  </div>
                )}
              </div>
              <p className="text-xs my-6 md:w-[45%]">
                {contactFormDefaultData?.data?.length > 0 &&
                contactFormDefaultData.data[0]?.form_default_address
                  ? contactFormDefaultData?.data[0].form_default_address
                  : "Address"}
              </p>
              <div className="flex justify-center sm:flex-auto sm:justify-start">
                {contactFormDefaultData?.data?.length > 0 &&
                  (() => {
                    const item = contactFormDefaultData.data[0];

                    return (
                      <ul className="flex gap-2 text-3xl mb-12 md:mb-0">
                        {item.form_default_facebook_link && (
                          <li>
                            <a
                              href={item.form_default_facebook_link || "#"}
                              target="_blank"
                            >
                              <FaFacebookSquare />
                            </a>
                          </li>
                        )}
                        {item.form_default_linkedin_link && (
                          <li>
                            <a
                              href={item.form_default_linkedin_link || "#"}
                              target="_blank"
                            >
                              <FaLinkedin />
                            </a>
                          </li>
                        )}
                        {item.form_default_youtube_link && (
                          <li>
                            <a
                              href={item.form_default_youtube_link || "#"}
                              target="_blank"
                            >
                              <FaYoutubeSquare />
                            </a>
                          </li>
                        )}
                        {item.form_default_instagram_link && (
                          <li>
                            <a
                              href={item.form_default_instagram_link || "#"}
                              target="_blank"
                            >
                              <FaInstagramSquare />
                            </a>
                          </li>
                        )}
                        {item.form_default_tiktok_link && (
                          <li>
                            <a
                              href={item.form_default_tiktok_link || "#"}
                              target="_blank"
                            >
                              <AiFillTikTok />
                            </a>
                          </li>
                        )}
                      </ul>
                    );
                  })()}
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-2">
              <div className="mb-12 sm:mb-0 text-center sm:text-left relative">
                <a
                  className="absolute cursor-pointer tooltip-btn left-[190px] -top-1 "
                  data-tooltip="Edit contents"
                  onClick={handleUpdateFooterContactUs}
                >
                  <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                </a>
                <div className="contactDetails">
                  <p className="font-semibold">CONTACT US</p>
                </div>
                <ul className="text-xs my-6">
                  <li className="font-semibold mb-1">Phone</li>
                  <li>
                    {footerData?.data?.length > 0 &&
                    footerData.data[0]?.footer_phone_a
                      ? footerData?.data[0].footer_phone_a
                      : "Telephone No."}
                  </li>
                  <li>
                    {footerData?.data?.length > 0 &&
                    footerData.data[0]?.footer_phone_b
                      ? footerData?.data[0].footer_phone_b
                      : "Phone No. A"}
                  </li>
                  <li>
                    {footerData?.data?.length > 0 &&
                    footerData.data[0]?.footer_phone_c
                      ? footerData?.data[0].footer_phone_c
                      : "Phone No. B"}
                  </li>
                </ul>
                <div className="text-xs">
                  <p className="font-semibold mb-1">Email</p>
                  <p>
                    {footerData?.data?.length > 0 &&
                    footerData.data[0]?.footer_email
                      ? footerData?.data[0].footer_email
                      : "Email"}
                  </p>
                </div>
                <div className="text-xs mt-6">
                  <a className="font-semibold mb-1 cursor-pointer">
                    {footerData?.data?.length > 0 &&
                    footerData.data[0]?.footer_subscriber_text
                      ? footerData?.data[0].footer_subscriber_text
                      : "Subscriber text"}
                  </a>
                </div>
              </div>
              <div className="text-center sm:text-left relative">
                <a
                  className="absolute cursor-pointer tooltip-btn left-[190px] -top-1 "
                  data-tooltip="Edit contents"
                  onClick={handleUpdateFooterQuicklinks}
                >
                  <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                </a>
                <p className="font-semibold">QUICKLINKS</p>
                <ul className="text-xs my-6 [&>li]:mb-1">
                  {footerData?.data.map((item, key) => (
                    <div key={key}>
                      <li>
                        <a href={`${devNavUrl}${item.footer_quicklink_link_a}`}>
                          {item.footer_quicklink_a}
                        </a>
                      </li>
                      <li>
                        <a href={`${devNavUrl}${item.footer_quicklink_link_b}`}>
                          {item.footer_quicklink_b}
                        </a>
                      </li>
                      <li>
                        <a href={`${devNavUrl}${item.footer_quicklink_link_c}`}>
                          {item.footer_quicklink_c}
                        </a>
                      </li>
                      <li>
                        <a href={`${devNavUrl}${item.footer_quicklink_link_d}`}>
                          {item.footer_quicklink_d}
                        </a>
                      </li>
                      <li>
                        <a href={`${item.footer_quicklink_link_e}`}>
                          {item.footer_quicklink_e}
                        </a>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <hr className="mt-10 relative z-[1]" />
          <div className="py-10 relative z-[1]">
            <div className="wrapper text-center lg:text-left lg:flex lg:justify-between items-center">
              <a
                className="absolute cursor-pointer tooltip-btn right-0 top-1 "
                data-tooltip="Edit contents"
                onClick={handleUpdateFooterCopyright}
              >
                <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
              </a>
              {footerData?.data.map((item, key) => (
                <div
                  key={key}
                  className="flex flex-col md:flex-row justify-between w-full"
                >
                  <p className="text-xs mb-4 lg:mb-0">
                    Copyright {copyrightYear()} | {item.footer_copyright}
                  </p>
                  <p className="text-xs">
                    <a href={`${devNavUrl}${item.footer_privacy_link}`}>
                      {item.footer_privacy_text}
                    </a>
                    <span className="mx-2">|</span>
                    <a href={`${devNavUrl}${item.footer_terms_link}`}>
                      {item.footer_terms_text}
                    </a>
                    <span className="mx-2">|</span>
                    <a href={`${devNavUrl}${item.footer_eula_link}`}>
                      {item.footer_eula_text}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
