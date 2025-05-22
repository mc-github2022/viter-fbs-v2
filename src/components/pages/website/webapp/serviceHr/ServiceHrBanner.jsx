import {
  getConvertStringToJSONparseData,
  googleHDViewLink
} from "../../../../helpers/functions-general";
import LoadImages from "../../../../partials/LoadImages";

const ServiceHrBanner = ({hrisData}) => {
  

  const hrisBannerImage = getConvertStringToJSONparseData(
    hrisData?.data?.[0]?.hris_banner_img
  );

  return (
    <>
      <section
        id="ServiceHrBanner"
        className="banner pt-[59px] md:pt-[95px] min-h-[100vh] md:min-h-[90vh] relative flex items-center"
      >
        {hrisBannerImage.map((img, index) => (
          <LoadImages
            url={`${googleHDViewLink}${img?.id}`}
            alt={`Smarter, Faster, and More Efficient HR Information System`}
            className="absolute inset-0 w-full h-full object-cover z-0"
            key={index}
          />
        ))}

        <div className="customContainer relative z-10 h-full">
          <div className="wrapper flex flex-col justify-center items-center h-full text-center lg:grid lg:grid-cols-2">
            <div className="text-center py-10 lg:text-left">
              <h2 className="text-[clamp(30px,3vw,45px)] leading-[1.1] mb-8 text-light font-light">
                {hrisData?.data[0].hris_banner_title
                  .split("\n") // Split by new lines
                  .filter((content_a) => content_a.trim() !== "") // Remove empty lines
                  .map((content_a, index) => (
                    <p key={index}>{content_a}</p>
                  ))}

                {/* {hrisData?.data?.length > 0 &&
                  hrisData.data[0]?.hris_banner_title
                    ? hrisData?.data[0].hris_banner_title
                    : "Title"} */}

                <span className="text-light font-semibold">
                  {hrisData?.data?.length > 0 &&
                  hrisData.data[0]?.hris_banner_title_bold
                    ? hrisData?.data[0].hris_banner_title_bold
                    : "Title"}
                </span>
              </h2>
              <p className="text-light mb-10">
                {hrisData?.data?.length > 0 &&
                hrisData.data[0]?.hris_banner_description
                  ? hrisData?.data[0].hris_banner_description
                  : "Description"}
              </p>
              {hrisData?.data.map((item, key) => (
                <a
                  href={`${item.hris_banner_button_link}`}
                  target="_blank"
                  className="btn bg-transparent text-light border-2 uppercase"
                  key={key}
                >
                  {item.hris_banner_button_text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHrBanner;
