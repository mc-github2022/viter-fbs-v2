import React, { Fragment, useEffect } from "react";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";
import { IoCodeSlashOutline } from "react-icons/io5";
import { LuChevronsDown, LuCode2 } from "react-icons/lu";
import { HiCode } from "react-icons/hi";
import { jobOpening } from "./data";

const CareerPage = () => {
  const [jobIdentifier, setJobIdentifier] = React.useState("");

  const [jobAccordion, setJobAccordion] = React.useState(false);
  const handleJobAccordion = (item) => {
    setJobAccordion(true);
    setJobIdentifier(item);
  };

  useEffect(() => {
    setJobAccordion(true);
    setJobIdentifier("starter");
  }, []);

  return (
    <>
      <Header />
      <section className="career pt-40 pb-20">
        <div className="customContainer">
          <div className="text-center">
            <h2 className="text-primary mb-8 text-[40px] font-semibold">
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
            {jobOpening.map((item, key) => {
              return (
                <Fragment key={key}>
                  <div
                    onClick={() => handleJobAccordion(item.jobID)}
                    className={`${
                      jobAccordion && jobIdentifier === item.jobID
                        ? "min-h-[200px] transition-all"
                        : "h-[104px] transition-all"
                    } jobItem bg-[#f8f8f8] p-5 rounded-lg addShadow  cursor-pointer  overflow-hidden mb-8`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-6">
                        <div className="bg-[#eedce8] w-20 h-16 grid place-items-center rounded-md">
                          {item.theIcon}
                        </div>
                        <div>
                          <div className="flex items-center gap-4">
                            <p className="font-bold text-dark">
                              {item.theTitle}
                            </p>
                            <p className="text-xs bg-[#b1f8d6] text-[#158754] px-3 py-1 rounded-lg">
                              {item.jobStatus}
                            </p>
                          </div>
                          <p className="text-sm">{item.jobCategory}</p>
                          <p className="text-sm">{item.onsite}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div>
                          <a
                            href="#"
                            className="btn bg-secondary text-light !py-1.5 !px-12 "
                          >
                            APPLY
                          </a>
                        </div>
                        <LuChevronsDown className="text-3xl text-[#acacac]" />
                      </div>
                    </div>
                    <div className="jobDesc ml-[103px] mt-6">
                      {item.jobInfo}
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CareerPage;
