import React from "react";
import {
  copyrightYear,
  devBaseImgUrl,
  devNavUrl,
} from "../../../helpers/functions-general";
import { AiFillTikTok } from "react-icons/ai";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutubeSquare,
} from "react-icons/fa";
import { HiPencil } from "react-icons/hi";

const Footer = ({
  handleUpdateFooterQuicklinks,
  handleUpdateFooterCopyright,
  footerData,
  contactFormDefaultData,
}) => {
  return (
    <>
      <footer className="footer bg-[#000000] pt-14 text-light relative overflow-hidden">
        <div className="customContainer">
          <div className="footerGradientBlack top-[-20%] left-0 absolute h-[700px] w-full sm:top-[-70%] sm:left-[-30rem]"></div>
          <div className="wrapper md:grid md:grid-cols-2 relative z-[1]">
            <div className="text-center sm:text-left">
              {/* <a
                className="absolute cursor-pointer tooltip-btn left-[270px] -top-1 "
                data-tooltip="Edit contents"
                // onClick={handleAdd}
              >
                <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
              </a> */}
              <div className="theLogo">
                <img
                  src={`${devBaseImgUrl}/logo-fbs.png`}
                  className="w-[157px] mx-auto sm:mx-0"
                  alt="Frontline Business Solutions Company Logo"
                />
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
                {/* <a
                  className="absolute cursor-pointer tooltip-btn left-[190px] -top-1 "
                  data-tooltip="Edit contents"
                  // onClick={handleAdd}
                >
                  <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                </a> */}
                <div className="contactDetails">
                  <p className="font-semibold">CONTACT US</p>
                </div>
                <ul className="text-xs my-6">
                  <li className="font-semibold mb-1">Phone</li>
                  <li>
                    {contactFormDefaultData?.data?.length > 0 &&
                    contactFormDefaultData.data[0]?.form_default_telephone
                      ? contactFormDefaultData?.data[0].form_default_telephone
                      : "Telephone No."}
                  </li>
                  <li>
                    {contactFormDefaultData?.data?.length > 0 &&
                    contactFormDefaultData.data[0]?.form_default_phone
                      ? contactFormDefaultData?.data[0].form_default_phone
                      : "Phone No."}
                  </li>
                </ul>
                <div className="text-xs">
                  <p className="font-semibold mb-1">Email</p>
                  <p>
                    {contactFormDefaultData?.data?.length > 0 &&
                    contactFormDefaultData.data[0]?.form_default_email
                      ? contactFormDefaultData?.data[0].form_default_email
                      : "Email"}
                  </p>
                </div>
                <div className="text-xs mt-6">
                  <a className="font-semibold mb-1 cursor-pointer">
                    Subscribe to our newsletter
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
                    <>
                      <li key={key}>
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
                    </>
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
                <>
                  <p className="text-xs mb-4 lg:mb-0" key={key}>
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
                </>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
