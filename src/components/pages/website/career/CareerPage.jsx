import React, { Fragment, useEffect } from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { FiChevronsUp } from "react-icons/fi";
import * as IoIcons from "react-icons/io";
import * as LuIcons from "react-icons/lu";
import { LuChevronsDown } from "react-icons/lu";
import * as PiIcons from "react-icons/pi";
import * as TiIcons from "react-icons/ti";
import useQueryData from "../../../custom-hooks/useQueryData";
import Footer from "../../../partials/Footer";
import Header from "../../../partials/Header";
import ModalError from "../../../partials/modals/ModalError";
import ModalSuccess from "../../../partials/modals/ModalSuccess";
import { StoreContext } from "../../../store/StoreContext";
import ModalJobApplication from "./ModalJobApplication";
import { devBaseImgUrl } from "../../../helpers/functions-general";

const icons = {
  ...FaIcons,
  ...AiIcons,
  ...IoIcons,
  ...TiIcons,
  ...LuIcons,
  ...PiIcons,
};

const CareerPage = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [pageName, setPageName] = React.useState("career");
  const [jobIdentifier, setJobIdentifier] = React.useState("");
  const [jobTitle, setJobTitle] = React.useState("");

  const [jobAccordion, setJobAccordion] = React.useState(false);

  const {
    isFetching,
    error,
    isLoading,
    data: careersData,
  } = useQueryData(
    "/v1/careers", // endpoint
    "get", // method
    "careers" // key
  );

  const [html, setHtml] = React.useState("");
  //Initial useEffect to set default html if careersData is available
  useEffect(() => {
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
      <Header pageName={pageName} />
      <section className="career pt-28 pb-16 md:pt-40 md:pb-20">
        <div className="customContainer">
          <div className="text-center">
            <h2 className="text-primary mb-8 text-[clamp(30px,5vw,40px)] font-semibold">
              Join our Team!
            </h2>
            <p className="w-[90%] m-auto mb-20">
              At Frontline Business Solution, Inc., we empower our people with
              holistic development, and opportunities to make a meaningful
              impact. Whether you're a seasoned professional or just starting
              out, you'll thrive in a supportive environment that fosters
              growth, collaboration, and excellence. Discover your potential
              with us!
            </p>
          </div>
          <div className="wrapper">
            {careersData?.data.map((item, key) => {
              const SelectedIcon = item.careers_icon
                ? icons[item.careers_icon]
                : null;
              return (
                <Fragment key={key}>
                  <div
                    onClick={() => handleJobAccordion(item.careers_aid)}
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
                    }`}>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2 md:gap-6 ">
                        <div
                          className={`${
                            item.careers_job_status === "Ongoing"
                              ? "bg-[#eedce8] w-16 h-16 md:w-20 md:h-16 grid place-items-center rounded-md"
                              : "bg-[#0000001a] w-16 h-16 md:w-20 md:h-16 grid place-items-center rounded-md"
                          }`}>
                          {SelectedIcon ? (
                            <SelectedIcon
                              className={`${
                                item.careers_job_status === "Ongoing"
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
                                item.careers_job_status === "Ongoing"
                                  ? "text-xs bg-[#b1f8d6] text-[#158754] px-3 py-1 rounded-lg hidden md:block"
                                  : "text-xs text-[#ef4444] bg-[#F8B1B1] px-3 py-1 rounded-lg hidden md:block"
                              }`}>
                              {item.careers_job_status}
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="text-sm flex gap-1">
                              <p className="text-sm">
                                {item.careers_job_classification}
                              </p>
                              <p className="text-sm">{item.careers_job_mode}</p>
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
                            }`}>
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
                                handleModalJob(item.careers_job_title)
                              }
                              className="btn bg-secondary text-light !py-1.5 !px-12 hidden md:block ">
                              APPLY
                            </a>
                          </div>
                        ) : (
                          ""
                        )}

                        {item.careers_job_status === "Ongoing" ? (
                          jobAccordion && jobIdentifier === item.careers_aid ? (
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
                        <h3></h3>
                        <img
                          className="jobImage w-[280px] mb-6 mx-auto  lg:float-left lg:mb-0 lg:mr-6"
                          src={`${devBaseImgUrl}/${item.careers_img}`}
                          alt=""
                        />
                        <div
                          className="jobOverview"
                          dangerouslySetInnerHTML={{
                            __html: item.careers_job_overview,
                          }}></div>
                      </div>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.careers_job_description,
                        }}
                        className="jobDetails"></div>
                      <div className="my-8">
                        <a
                          href="#"
                          onClick={() => handleModalJob(item.careers_job_title)}
                          className="btn bg-secondary text-light !py-1.5 !px-12 md:hidden">
                          APPLY
                        </a>
                      </div>
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
      {modalJob && (
        <ModalJobApplication
          setModalJob={setModalJob}
          jobTitle={jobTitle}
          modalJob={modalJob}
        />
      )}

      {store.success && <ModalSuccess />}
      {store.error && <ModalError />}
    </>
  );
};

export default CareerPage;
