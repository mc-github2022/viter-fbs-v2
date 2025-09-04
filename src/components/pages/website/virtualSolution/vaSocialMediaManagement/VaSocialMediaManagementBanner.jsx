import useQueryData from "../../../../custom-hooks/useQueryData";
import {
  apiVersion,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../helpers/functions-general";
import LoadImages from "../../../../partials/LoadImages";

const VaSocialMediaManagementBanner = () => {
  const { data: socialMediaData } = useQueryData(
    `${apiVersion}/social`, // endpoint
    "get", // method
    "social", // key
    {},
    null,
    true
  );

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const socialBannerImage = getConvertStringToJSONparseData(
    socialMediaData?.data?.[0]?.social_banner_img
  );
  return (
    <>
      <section
        id="VaSocialMediaManagement"
        className={`banner pt-[59px] md:pt-[95px] min-h-[100vh] md:min-h-[90vh] relative flex items-center`}
      >
        {socialBannerImage.map((img, index) => (
          <LoadImages
            url={`${googleHDViewLink}${img?.id}`}
            alt="Boost your Online Presence Through Our Marketing Support"
            className="absolute inset-0 w-full h-full object-cover z-0"
            key={index}
          />
        ))}

        <div className="customContainer relative z-10 h-full">
          <div className="wrapper flex flex-col justify-center lg:grid lg:grid-cols-2 place-items-center transition-all w-full py-10">
            <div className="text-center py-10 lg:text-left">
              <h2 className="text-[clamp(30px,3vw,45px)] leading-[1.1] mb-8 text-light font-light">
                <span className="">
                  {socialMediaData?.data[0]?.social_banner_title
                    .split("\n") // Split by new lines
                    .filter((content_a) => content_a.trim() !== "") // Remove empty lines
                    .map((content_a, index) => (
                      <p key={index}>{content_a}</p>
                    ))}
                </span>
                <span className="text-light font-semibold">
                  {socialMediaData?.data?.[0]?.social_banner_title_bold || ""}
                </span>
              </h2>
              <p className="text-light font-light mb-10">
                {socialMediaData?.data?.[0]?.social_banner_description || ""}
              </p>
              <button
                className="btn bg-transparent text-light border-2 uppercase"
                onClick={() => scrollToSection("ourpackages")}
              >
                {socialMediaData?.data?.[0]?.social_banner_button_text || ""}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VaSocialMediaManagementBanner;
