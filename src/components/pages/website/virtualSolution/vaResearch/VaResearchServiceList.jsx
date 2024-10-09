import React from "react";
import {
  Contact,
  UserRoundSearch,
  TextSearch,
  NotebookPen,
} from "lucide-react";

const VaResearchServiceList = () => {
  return (
    <>
      <section className="VaResearchServiceList pt-20 pb-40">
        <div className="customContainer">
          <div className="sectionDesc text-center md:w-[70%] mx-auto mb-14">
            <h2 className="text-[clamp(20px,6vw,60px)] leading-[1.1] font-semibold mb-10">
              What <span className="text-primary">Research Services </span>
              <br /> Can We Perform?
            </h2>
            <p className="subDesc mb-10">
              Our VA for Administrative Assistance offers comprehensive support
              to streamline your business operations.
            </p>
            <a
              href="#"
              className="btn bg-primary text-light font-light hover:bg-secondary transition-all"
            >
              GET STARTED
            </a>
          </div>
          <ul className="serviceInclusion grid md:grid-cols-2 gap-6">
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <Contact size={28} className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Contact List Building
              </p>
            </li>
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <UserRoundSearch
                    size={28}
                    className="text-3xl text-primary"
                  />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">Data Mining</p>
            </li>
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <TextSearch size={28} className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Lead Generation
              </p>
            </li>
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <NotebookPen size={28} className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                General Research
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default VaResearchServiceList;
