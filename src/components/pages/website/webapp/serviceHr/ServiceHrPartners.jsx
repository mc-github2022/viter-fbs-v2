import useQueryData from "../../../../custom-hooks/useQueryData";
import {
  apiVersion,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../helpers/functions-general";
import LoadImages from "../../../../partials/LoadImages";

const ServiceHrPartners = ({ hrisTitlesData }) => {
  const {
    isFetching,
    error,
    isLoading,
    status,
    data: partnersData,
  } = useQueryData(
    `${apiVersion}/partners`, // endpoint
    "get", // method
    "partners" // key
  );

  return (
    <>
      <section className="ServiceHrPartners pb-16 md:py-20 -translate-y-1 bg-light">
        <div className="customContainer">
          <p>
            {hrisTitlesData?.data?.length > 0 &&
            hrisTitlesData.data[0]?.hris_titles_partners_subtitle
              ? hrisTitlesData?.data[0].hris_titles_partners_subtitle
              : ""}
          </p>
          <h2 className="text-[clamp(20px,7vw,35px)] font-semibold text-primary leading-[1.1] mb-8">
            {hrisTitlesData?.data?.length > 0 &&
            hrisTitlesData.data[0]?.hris_titles_partners_title
              ? hrisTitlesData?.data[0].hris_titles_partners_title
              : ""}
          </h2>

          <ul className="flex flex-wrap justify-center gap-10 items-center">
            {partnersData?.data
              ?.filter((item) => item.partners_page === "HR Information System")
              ?.map((item) => {
                const partnersImages =
                  getConvertStringToJSONparseData(item.partners_img) || [];

                return (
                  <li key={item.id || item.partners_name} className="relative">
                    {partnersImages.map((img, index) => (
                      <LoadImages
                        className="w-[150px] h-[150px] object-contain"
                        url={`${googleHDViewLink}${img?.id}`}
                        alt={item.partners_name}
                        key={index}
                      />
                    ))}
                  </li>
                );
              })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default ServiceHrPartners;
