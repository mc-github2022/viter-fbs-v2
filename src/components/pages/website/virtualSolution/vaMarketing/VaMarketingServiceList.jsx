import React from "react";
import { Search, Send, Share2, Headset, ChartPie } from "lucide-react";

const VaMarketingServiceList = () => {
  return (
    <>
      <section className="VaMarketingServiceList pt-20 pb-40">
        <div className="customContainer">
          <div className="sectionDesc text-center md:w-[70%] mx-auto mb-14">
            <h2 className="text-[clamp(20px,6vw,60px)] leading-[1.1] font-semibold mb-10">
              What{" "}
              <span className="text-primary">Marketing and Social Media </span>{" "}
              Services Can We Perform?
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
                  <Headset size={28} className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                CRM Management (HubSpot in particular)
              </p>
            </li>
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <Send size={28} className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Email Marketing
              </p>
            </li>
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <Search size={28} className="text-base text-primary" />
                  {/* <PiMagnifyingGlass className="text-3xl text-primary" /> */}
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Lead Management
              </p>
            </li>
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <Share2 size={28} className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Social Media Management
              </p>
            </li>
            <li className="flex items-center gap-7">
              <div className="bg-customGray rounded-lg addShadow">
                <div className="w-16 h-16 grid place-items-center">
                  <ChartPie size={28} className="text-3xl text-primary" />
                </div>
              </div>
              <p className="font-semibold text-xl lg:text-2xl">
                Analytics & Reporting
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default VaMarketingServiceList;
