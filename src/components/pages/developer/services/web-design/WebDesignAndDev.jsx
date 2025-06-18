import React from "react";
import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";
import Dashboard from "../../../../partials/dashboard/Dashboard";
import Navigation from "../../../../partials/dashboard/Navigation";
import { devNavUrl, UrlDeveloper } from "../../../../helpers/functions-general";

const WebDesignAndDev = () => {
  return (
    <>
      <div className="">
        <Navigation menu="services" submenu="web-design-and-development" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex justify-between ">
              <div className="text-sm text-[black] font-semibold">
                <h2>Web Design And Development</h2>
              </div>
            </div>
            <div className=" pb-4 ">
              <div className="list-content mx-0">
                <div className="list-button border-l-4 border-transparent hover:border-l-4 pl-1 hover:border-primary hover:transition-all hover:ease-in-out">
                  <Link
                    to={`${devNavUrl}/${UrlDeveloper}/services/web-design-and-development/wordpress`}
                    className="flex items-center gap-2 py-3 "
                  >
                    <span className="flex items-center gap-2  text-xs font-bold">
                      WordPress CMS Website
                    </span>
                    <GoChevronRight className="text-sm" />
                  </Link>
                </div>
                <div className="list-button border-l-4 border-transparent hover:border-l-4 pl-1 hover:border-primary hover:transition-all hover:ease-in-out ">
                  <Link
                    to={`${devNavUrl}/${UrlDeveloper}/services/web-design-and-development/single-page-website`}
                    className="flex items-center gap-2 py-3 "
                  >
                    <span className="flex items-center gap-2  text-xs font-bold">
                      Single Page Website
                    </span>
                    <GoChevronRight className="text-sm" />
                  </Link>
                </div>
                <div className="list-button border-l-4 border-transparent hover:border-l-4 pl-1 hover:border-primary hover:transition-all hover:ease-in-out ">
                  <Link
                    to={`${devNavUrl}/${UrlDeveloper}/services/web-design-and-development/web-design`}
                    className="flex items-center gap-2 py-3 "
                  >
                    <span className="flex items-center gap-2  text-xs font-bold">
                      Web Design
                    </span>
                    <GoChevronRight className="text-sm" />
                  </Link>
                </div>
                <div className="list-button border-l-4 border-transparent hover:border-l-4 pl-1 hover:border-primary hover:transition-all hover:ease-in-out ">
                  <Link
                    to={`${devNavUrl}/${UrlDeveloper}/services/web-design-and-development/graphic-design`}
                    className="flex items-center gap-2 py-3 "
                  >
                    <span className="flex items-center gap-2  text-xs font-bold">
                      Graphic Design
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

export default WebDesignAndDev;
