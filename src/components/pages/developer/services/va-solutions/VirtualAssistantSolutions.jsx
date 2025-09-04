import React from "react";
import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";
import Dashboard from "../../../../partials/dashboard/Dashboard";
import Navigation from "../../../../partials/dashboard/Navigation";
import { devNavUrl, UrlDeveloper } from "../../../../helpers/functions-general";

const VirtualAssistantSolutions = () => {
  return (
    <>
      <div className="">
        <Navigation menu="services" submenu="virtual-assistant-solutions" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex justify-between ">
              <div className="text-sm text-[black] font-semibold">
                <h2>Virtual Assistant Solutions</h2>
              </div>
            </div>
            <div className=" pb-4 ">
              <div className="list-content mx-0">
                <div className="list-button border-l-4 border-transparent hover:border-l-4 pl-1 hover:border-primary hover:transition-all hover:ease-in-out">
                  <Link
                    to={`${devNavUrl}/${UrlDeveloper}/services/virtual-assistant-solutions/administrative`}
                    className="flex items-center gap-2 py-3 "
                  >
                    <span className="flex items-center gap-2  text-xs font-bold">
                      Administrative
                    </span>
                    <GoChevronRight className="text-sm" />
                  </Link>
                </div>
                <div className="list-button border-l-4 border-transparent hover:border-l-4 pl-1 hover:border-primary hover:transition-all hover:ease-in-out ">
                  <Link
                    to={`${devNavUrl}/${UrlDeveloper}/services/virtual-assistant-solutions/business-support`}
                    className="flex items-center gap-2 py-3 "
                  >
                    <span className="flex items-center gap-2  text-xs font-bold">
                      Business Support
                    </span>
                    <GoChevronRight className="text-sm" />
                  </Link>
                </div>
                <div className="list-button border-l-4 border-transparent hover:border-l-4 pl-1 hover:border-primary hover:transition-all hover:ease-in-out ">
                  <Link
                    to={`${devNavUrl}/${UrlDeveloper}/services/virtual-assistant-solutions/marketing`}
                    className="flex items-center gap-2 py-3 "
                  >
                    <span className="flex items-center gap-2  text-xs font-bold">
                      Marketing
                    </span>
                    <GoChevronRight className="text-sm" />
                  </Link>
                </div>
                <div className="list-button border-l-4 border-transparent hover:border-l-4 pl-1 hover:border-primary hover:transition-all hover:ease-in-out ">
                  <Link
                    to={`${devNavUrl}/${UrlDeveloper}/services/virtual-assistant-solutions/social-media-management`}
                    className="flex items-center gap-2 py-3 "
                  >
                    <span className="flex items-center gap-2  text-xs font-bold">
                      Social Media Management
                    </span>
                    <GoChevronRight className="text-sm" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Dashboard>
      </div>
    </>
  );
};

export default VirtualAssistantSolutions;
