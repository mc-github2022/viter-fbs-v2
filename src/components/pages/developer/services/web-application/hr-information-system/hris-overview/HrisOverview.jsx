import { FaRegImages } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import { HiPencil } from "react-icons/hi";
import {
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../../../helpers/functions-general";
import LoadImages from "../../../../../../partials/LoadImages";

const HrisOverview = ({
  handleUpdateHrisOverview,
  handleUpdateHrisOverviewList,
  hrisOverviewData,
  hrisData,
}) => {
  const hrisOverviewImage = getConvertStringToJSONparseData(
    hrisOverviewData?.data?.[0]?.hris_overview_img
  );
  return (
    <>
      <section className="ServiceHrOverview py-20 bg-customGray">
        <div className="customContainer relative">
          <a
            className="absolute cursor-pointer tooltip-btn left-[35rem] top-0"
            data-tooltip="Edit contents"
            onClick={handleUpdateHrisOverview}
          >
            <FaRegImages className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
          </a>

          <p>
            {hrisOverviewData?.data?.length > 0 &&
            hrisOverviewData.data[0]?.hris_overview_subtitle
              ? hrisOverviewData?.data[0].hris_overview_subtitle
              : "Subtitle"}
          </p>
          <h2 className="text-[clamp(20px,7vw,35px)] leading-[1.1] mb-12 text-light">
            <span className="font-semibold text-primary">
              {hrisOverviewData?.data?.length > 0 &&
              hrisOverviewData.data[0]?.hris_overview_title
                ? hrisOverviewData?.data[0].hris_overview_title
                : "Title"}
            </span>
          </h2>

          <div className="wrapper lg:grid lg:grid-cols-2 gap-12">
            <div className="relative">
              {hrisOverviewData?.data?.length > 0 &&
              hrisOverviewImage?.length > 0 ? (
                <>
                  {hrisOverviewImage.map((img, index) => (
                    <LoadImages
                      url={`${googleHDViewLink}${img?.id}`}
                      className="mb-12 w-fit mx-auto"
                      alt={`Our Web Application ${index + 1}`}
                      key={index}
                    />
                  ))}
                </>
              ) : (
                <div className="  w-[592px] h-[375px] object-cover object-top place-content-center place-items-center bg-gray-300 ">
                  <FaRegImages className="text-[200px] text-gray-400" />
                </div>
              )}
              <div className="flex flex-col md:flex md:flex-row items-center gap-12">
                {hrisData?.data.map((item, key) => (
                  <a
                    href={`${item.hris_banner_button_link}`}
                    target="_blank"
                    className="btn bg-primary text-light font-semibold uppercase"
                    key={key}
                  >
                    {item.hris_banner_button_text}
                  </a>
                ))}

                {/* <li>
                     <a
                       href="#"
                       className="flex items-center gap-2 font-bold text-primary"
                     >
                       {webAppOverview[0].btnDownloadText} <FaFileDownload />
                     </a>
                   </li> */}
              </div>
            </div>
            <div className="mt-14 lg:mt-0">
              <a
                className="absolute cursor-pointer tooltip-btn right-6 top-16 "
                data-tooltip="Edit contents"
                onClick={handleUpdateHrisOverviewList}
              >
                <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
              </a>
              <ul>
                <li className="flex items-start gap-4 text-dark mb-6">
                  <div className="flex gap-4 items-start">
                    <div>
                      <FaRegCircleCheck className="circleCheck text-primary text-[clamp(25px,5vw,30px)] bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]" />
                    </div>
                    <div>
                      <h3 className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] text-[clamp(16px,5vw,24px)] mb-3">
                        {hrisOverviewData?.data?.length > 0 &&
                        hrisOverviewData.data[0]?.hris_overview_list_title_a
                          ? hrisOverviewData?.data[0].hris_overview_list_title_a
                          : "Title A"}
                      </h3>
                      <p className="text-justify">
                        {hrisOverviewData?.data?.length > 0 &&
                        hrisOverviewData.data[0]
                          ?.hris_overview_list_description_a
                          ? hrisOverviewData?.data[0]
                              .hris_overview_list_description_a
                          : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, numquam aut unde dolorum nulla praesentium sint eum mollitia nam alias."}
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-dark mb-6">
                  <div className="flex gap-4 items-start">
                    <div>
                      <FaRegCircleCheck className="circleCheck text-primary text-[clamp(25px,5vw,30px)] bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]" />
                    </div>
                    <div>
                      <h3 className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] text-[clamp(16px,5vw,24px)] mb-3">
                        {hrisOverviewData?.data?.length > 0 &&
                        hrisOverviewData.data[0]?.hris_overview_list_title_b
                          ? hrisOverviewData?.data[0].hris_overview_list_title_b
                          : "Title B"}
                      </h3>
                      <p className="text-justify">
                        {hrisOverviewData?.data?.length > 0 &&
                        hrisOverviewData.data[0]
                          ?.hris_overview_list_description_b
                          ? hrisOverviewData?.data[0]
                              .hris_overview_list_description_b
                          : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, numquam aut unde dolorum nulla praesentium sint eum mollitia nam alias."}
                      </p>
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-dark">
                  <div className="flex gap-4 items-start">
                    <div>
                      <FaRegCircleCheck className="circleCheck text-primary text-[clamp(25px,5vw,30px)] bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]" />
                    </div>
                    <div>
                      <h3 className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent] text-[clamp(16px,5vw,24px)] mb-3">
                        {hrisOverviewData?.data?.length > 0 &&
                        hrisOverviewData.data[0]?.hris_overview_list_title_c
                          ? hrisOverviewData?.data[0].hris_overview_list_title_c
                          : "Title C"}
                      </h3>
                      <p className="text-justify">
                        {hrisOverviewData?.data?.length > 0 &&
                        hrisOverviewData.data[0]
                          ?.hris_overview_list_description_c
                          ? hrisOverviewData?.data[0]
                              .hris_overview_list_description_c
                          : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, numquam aut unde dolorum nulla praesentium sint eum mollitia nam alias."}{" "}
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HrisOverview;
