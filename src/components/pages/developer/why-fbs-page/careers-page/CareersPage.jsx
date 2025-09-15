import React, { Fragment } from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { FiChevronsUp } from "react-icons/fi";
import { HiPencil } from "react-icons/hi";
import * as IoIcons from "react-icons/io";
import * as LuIcons from "react-icons/lu";
import * as PiIcons from "react-icons/pi";
import * as TiIcons from "react-icons/ti";
import useQueryData from "../../../../custom-hooks/useQueryData";
import {
  apiVersion,
  getConvertStringToJSONparseData,
  googleHDViewLink,
} from "../../../../helpers/functions-general";
import Dashboard from "../../../../partials/dashboard/Dashboard";
import Navigation from "../../../../partials/dashboard/Navigation";
import LoadImages from "../../../../partials/LoadImages";
import ModalError from "../../../../partials/modals/ModalError";
import ModalSuccess from "../../../../partials/modals/ModalSuccess";
import { setIsUpdateHome } from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import ContactFormCareers from "../../contact-form-careers/ContactFormCareers";
import Footer from "../../footer/Footer";
import ModalUpdateCopyright from "../../footer/ModalUpdateCopyright";
import ModalUpdateLogoImg from "../../footer/ModalUpdateLogoImg";
import ModalUpdateQuickLinks from "../../footer/ModalUpdateQuickLinks";
import Header from "../../header/Header";
import ModalUpdateHeader from "../../header/ModalUpdateHeader";
import ModalUpdateCareersTitle from "./ModalUpdateCareersTitle";
import BannerSliderLoader from "../../../website/home/bannerSliderLoader";
import { LuChevronsDown } from "react-icons/lu";

const icons = {
  ...FaIcons,
  ...AiIcons,
  ...IoIcons,
  ...TiIcons,
  ...LuIcons,
  ...PiIcons,
};

const CareersPage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
  const [pageName, setPageName] = React.useState("career");
  const [careersForm, setCareersForm] = React.useState(false);

  const [jobIdentifier, setJobIdentifier] = React.useState("");
  const [jobTitle, setJobTitle] = React.useState("");

  const [jobAccordion, setJobAccordion] = React.useState(false);

  const { data: careersTitleData } = useQueryData(
    `${apiVersion}/careers-title`, // endpoint
    "get", // method
    "careers-title" // key
  );

  const { isLoading, data: headerData } = useQueryData(
    `${apiVersion}/header`, // endpoint
    "get", // method
    "header" // key
  );

  const { data: footerData } = useQueryData(
    `${apiVersion}/footer`, // endpoint
    "get", // method
    "footer" // key
  );

  const handleFormCareers = () => {
    setCareersForm(true);
  };

  const handleUpdateCareersTitle = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "careers-title" }));
    setItemEdit("careersTitleUpdate");
  };

  const handleUpdateHeader = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "header" }));
    setItemEdit("headerUpdate");
  };

  const handleUpdateFooterLogoImg = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "footer-logoimg" }));
    setItemEdit("footerLogoImgUpdate");
  };

  const handleUpdateFooterQuicklinks = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "footer-quicklinks" }));
    setItemEdit("footerQuicklinksUpdate");
  };

  const handleUpdateFooterCopyright = () => {
    dispatch(setIsUpdateHome({ modal: true, modalCode: "footer-copyright" }));
    setItemEdit("footerCopyrightUpdate");
  };

  const {
    isFetching,
    error,
    data: careersData,
  } = useQueryData(
    "/v1/careers/readOngoingCareers", // endpoint
    "get", // method
    "careers", // key
    {},
    null,
    true
  );

  const [html, setHtml] = React.useState("");
  //Initial useEffect to set default html if careersData is available
  React.useEffect(() => {
    if (careersData?.data.length > 0) {
      setHtml(
        careersData?.data[0].careers_job_description &&
          careersData?.data[0].careers_job_overview
      );
    }
  }, [careersData]);

  const handleJobAccordion = (item) => {
    setJobAccordion(true);
    setJobIdentifier(item);
  };

  const [modalJob, setModalJob] = React.useState(false);
  const handleModalJob = (item) => {
    setModalJob(!modalJob);
    setJobTitle(item);
  };

  React.useEffect(() => {
    if (careersData?.data?.length > 0) {
      const firstOngoingJob = careersData.data.find(
        (item) => item.careers_job_status === "Ongoing"
      );

      if (firstOngoingJob) {
        setJobAccordion(true);
        setJobIdentifier(firstOngoingJob.careers_aid);
      }
    }
  }, [careersData]);

  return (
    <>
      <section id="" className="bg-light ">
        <Navigation menu="whyFBS" submenu="whyFBS-careers-page" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="text-sm text-[black] font-semibold py-5">
              <h2>Career</h2>
            </div>
            <div className=" pb-4 bg-light shadow-xl">
              <Header
                headerData={headerData}
                handleUpdateHeader={handleUpdateHeader}
                isLoading={isLoading}
                services={"career"}
                page={"Career"}
              />
              <section className="career pt-28 pb-16 md:pt-20 md:pb-20">
                <div className="customContainer">
                  <div className="text-center relative">
                    <h2 className="text-primary mb-8 text-[clamp(30px,5vw,40px)] font-semibold">
                      {careersTitleData?.data?.[0]?.careers_title_title ||
                        "Title"}
                    </h2>
                    <p className="w-[90%] m-auto mb-20">
                      {careersTitleData?.data?.[0]?.careers_title_desc ||
                        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit reiciendis iusto ab laboriosam earum ipsam neque sunt dolorum exercitationem sint ipsum recusandae vel, repellendus, vitae eaque! Dolorum dolores perferendis quia!"}
                    </p>
                    <a
                      className="absolute cursor-pointer tooltip-btn right-[20rem] -top-9 "
                      data-tooltip="Edit contents"
                      onClick={handleUpdateCareersTitle}
                    >
                      <HiPencil className=" bg-[#C7AC27] rounded-full  w-[25px] h-[25px] p-[5px] border-[1px] text-black" />
                    </a>
                  </div>
                  <div className="wrapper">
                    {isFetching ? (
                      <>
                        <div className="flex flex-col lg:flex-row justify-between mb-8">
                          <div className="flex flex-col lg:flex-row">
                            <BannerSliderLoader
                              cols={1}
                              count={1}
                              className={"h-14 min-w-20 rounded-xl "}
                            />
                            <div>
                              <BannerSliderLoader
                                cols={1}
                                count={1}
                                className={"h-5 min-w-48 rounded-xl "}
                              />
                              <BannerSliderLoader
                                cols={1}
                                count={1}
                                className={"h-4 max-w-32 rounded-xl "}
                              />
                            </div>
                            <BannerSliderLoader
                              cols={1}
                              count={1}
                              className={"h-5 min-w-20 rounded-xl "}
                            />
                          </div>
                          <BannerSliderLoader
                            cols={1}
                            count={1}
                            className={"h-7 min-w-28 rounded-xl "}
                          />
                        </div>
                        <div className="flex flex-col lg:flex-row px-6 gap-6">
                          <BannerSliderLoader
                            cols={1}
                            count={1}
                            className={"h-[240px] lg:min-w-[380px] rounded-xl "}
                          />
                          <BannerSliderLoader
                            cols={1}
                            count={10}
                            className={"h-4 lg:min-w-[380px] rounded-xl "}
                          />
                        </div>
                        <div className="mt-8">
                          <BannerSliderLoader
                            cols={1}
                            count={10}
                            className={"h-3 rounded-xl "}
                            classNameGrid={"gap-2"}
                          />
                        </div>
                      </>
                    ) : careersData?.data.length === 0 ? (
                      <div className="place-items-center text-gray-500">
                        <p>No Available Careers</p>
                      </div>
                    ) : (
                      <div className="wrapper">
                        {careersData?.data.map((item, key) => {
                          const SelectedIcon = item.careers_icon
                            ? icons[item.careers_icon]
                            : null;

                          const careersImages =
                            getConvertStringToJSONparseData(item.careers_img) ||
                            [];

                          return (
                            <Fragment key={key}>
                              <div
                                onClick={() =>
                                  handleJobAccordion(item.careers_aid)
                                }
                                className={`${
                                  jobAccordion &&
                                  jobIdentifier === item.careers_aid &&
                                  item.careers_job_status === "Ongoing"
                                    ? `${
                                        item.careers_job_status === "Ongoing"
                                          ? "min-h-[200px] transition-all !bg-[#eedce8] "
                                          : ""
                                      }`
                                    : "h-[120px] transition-all"
                                } jobItem bg-[#f8f8f8] p-5 rounded-lg addShadow cursor-pointer overflow-hidden mb-8 ${
                                  item.careers_job_status !== "Ongoing"
                                    ? "pointer-events-none"
                                    : "cursor-pointer"
                                }`}
                              >
                                <div className="flex justify-between items-center">
                                  <div className="flex items-center gap-2 md:gap-6 ">
                                    <div
                                      className={`${
                                        item.careers_job_status === "Ongoing"
                                          ? "bg-[#eedce8] w-16 h-16 md:w-20 md:h-16 grid place-items-center rounded-md"
                                          : "bg-[#0000001a] w-16 h-16 md:w-20 md:h-16 grid place-items-center rounded-md"
                                      }`}
                                    >
                                      {SelectedIcon ? (
                                        <SelectedIcon
                                          className={`${
                                            item.careers_job_status ===
                                            "Ongoing"
                                              ? "text-[40px] text-primary"
                                              : "text-[40px] text-[#333]"
                                          } `}
                                        />
                                      ) : (
                                        "No icon selected"
                                      )}
                                    </div>
                                    <div>
                                      <div className="flex items-center gap-2 md:gap-4">
                                        <p className="font-bold text-dark text-sm md:text-[16px]">
                                          {item.careers_job_title}
                                        </p>
                                        <p
                                          className={`${
                                            item.careers_job_status ===
                                            "Ongoing"
                                              ? "text-xs bg-[#b1f8d6] text-[#158754] px-3 py-1 rounded-lg hidden md:block"
                                              : "text-xs text-[#ef4444] bg-[#F8B1B1] px-3 py-1 rounded-lg hidden md:block"
                                          }`}
                                        >
                                          {item.careers_job_status}
                                        </p>
                                      </div>
                                      <div className="flex items-center gap-3">
                                        <div className="text-sm flex gap-1">
                                          <p className="text-sm">
                                            {item.careers_job_classification}
                                          </p>
                                          <p className="text-sm">
                                            {item.careers_job_mode}
                                          </p>
                                        </div>
                                        {/* <p
                                className={`${
                                  item.careers_job_status === "Ongoing"
                                    ? "text-xs bg-[#b1f8d6] text-[#158754] px-3 py-1 rounded-lg md:hidden"
                                    : "text-xs text-[#ef4444] bg-[#F8B1B1] px-3 py-1 rounded-lg md:hidden"
                                }`}
                              >
                                {item.careers_job_status}
                              </p> */}
                                      </div>
                                      <p
                                        className={`${
                                          item.careers_job_status === "Ongoing"
                                            ? " w-fit text-xs bg-[#b1f8d6] text-[#158754] px-3 py-1 rounded-lg md:hidden"
                                            : " w-fit text-xs text-[#ef4444] bg-[#F8B1B1] px-3 py-1 rounded-lg md:hidden"
                                        }`}
                                      >
                                        {item.careers_job_status}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="flex items-center md:gap-6">
                                    {item.careers_job_status === "Ongoing" ? (
                                      <div>
                                        <a
                                          href="#"
                                          onClick={() =>
                                            handleModalJob(
                                              item.careers_job_title
                                            )
                                          }
                                          className="btn bg-secondary text-light !py-1.5 !px-12 hidden md:block "
                                        >
                                          APPLY
                                        </a>
                                      </div>
                                    ) : (
                                      ""
                                    )}

                                    {item.careers_job_status === "Ongoing" ? (
                                      jobAccordion &&
                                      jobIdentifier === item.careers_aid ? (
                                        <FiChevronsUp className="text-3xl text-[#acacac]" />
                                      ) : (
                                        <LuChevronsDown className="text-3xl text-[#acacac]" />
                                      )
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                </div>
                                <div className="jobDesc px-6 md:px-0 md:mx-[103px] mt-10">
                                  <div>
                                    {careersImages.map((image, index) => (
                                      <LoadImages
                                        className="jobImage w-[380px] mb-6 mx-auto  lg:float-left lg:mb-0 lg:mr-6"
                                        url={`${googleHDViewLink}${image?.id}`}
                                        alt={`${item.careers_job_title} Image `}
                                        key={index}
                                      />
                                    ))}
                                    <div
                                      className="jobOverview"
                                      dangerouslySetInnerHTML={{
                                        __html: item.careers_job_overview,
                                      }}
                                    ></div>
                                  </div>
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: item.careers_job_description,
                                    }}
                                    className="jobDetails"
                                  ></div>
                                  <div className="my-8">
                                    <a
                                      href="#"
                                      onClick={() =>
                                        handleModalJob(item.careers_job_title)
                                      }
                                      className="btn bg-secondary text-light !py-1.5 !px-12 md:hidden"
                                    >
                                      APPLY
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </Fragment>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </section>
              <Footer
                handleUpdateFooterQuicklinks={handleUpdateFooterQuicklinks}
                handleUpdateFooterCopyright={handleUpdateFooterCopyright}
                handleUpdateFooterLogoImg={handleUpdateFooterLogoImg}
                footerData={footerData}
              />
            </div>

            {modalJob && (
              <ContactFormCareers
                thePageName={pageName}
                setCareersForm={setCareersForm}
                jobTitle={jobTitle}
                setModalJob={setModalJob}
                services={"career"}
                page={"Career"}
              />
            )}
          </div>
        </Dashboard>
      </section>

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "careers-title" && (
          <ModalUpdateCareersTitle
            itemEdit={itemEdit}
            careersTitleData={careersTitleData}
          />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "header" && (
          <ModalUpdateHeader itemEdit={itemEdit} headerData={headerData} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "footer-logoimg" && (
          <ModalUpdateLogoImg itemEdit={itemEdit} footerData={footerData} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "footer-quicklinks" && (
          <ModalUpdateQuickLinks itemEdit={itemEdit} footerData={footerData} />
        )}

      {store.isUpdateHome?.modal &&
        store.isUpdateHome?.modalCode === "footer-copyright" && (
          <ModalUpdateCopyright itemEdit={itemEdit} footerData={footerData} />
        )}

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default CareersPage;
