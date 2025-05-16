import React from "react";
import { GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";
import Dashboard from "../../../../partials/dashboard/Dashboard";
import Navigation from "../../../../partials/dashboard/Navigation";
import { devNavUrl, UrlDeveloper } from "../../../../helpers/functions-general";

const WebApplicationAdmin = () => {
  return (
    <>
      <div className="">
        <Navigation menu="services" submenu="web-application" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex justify-between ">
              <div className="text-sm text-[black] font-semibold">
                <h2>Web Applications</h2>
              </div>
            </div>
            <div className=" pb-4 ">
              <div className="list-content mx-0">
                <div className="list-button border-dark/40 hover:border-l-4 hover:border-primary hover:transition-all hover:ease-in-out">
                  <Link
                    to={`${devNavUrl}/services/web-application/hris`}
                    className="flex items-center gap-2 py-3 "
                  >
                    <span className="flex items-center gap-2 ml-2.5 text-xs font-bold">
                      HR Information System
                    </span>
                    <GoChevronRight className="text-sm" />
                  </Link>
                </div>
                <div className="list-button border-dark/40 hover:border-l-4 hover:border-primary hover:transition-all hover:ease-in-out ">
                  <Link
                    to={`${devNavUrl}/services/web-application/online-payroll-system`}
                    className="flex items-center gap-2 py-3 "
                  >
                    <span className="flex items-center gap-2 ml-2.5 text-xs font-bold">
                      Online Payroll System
                    </span>
                    <GoChevronRight className="text-sm" />
                  </Link>
                </div>
                <div className="list-button border-dark/40 hover:border-l-4 hover:border-primary hover:transition-all hover:ease-in-out">
                  <Link
                    to={`${devNavUrl}/services/web-application/school-enrollment-system`}
                    className="flex items-center gap-2 py-3 "
                  >
                    <span className="flex items-center gap-2 ml-2.5 text-xs font-bold">
                      School Enrollment System
                    </span>
                    <GoChevronRight className="text-sm" />
                  </Link>
                </div>
                <div className="list-button border-dark/40 hover:border-l-4 hover:border-primary hover:transition-all hover:ease-in-out">
                  <Link
                    to={`${devNavUrl}/services/web-application/online-payment-integration`}
                    className="flex items-center gap-2 py-3 "
                  >
                    <span className="flex items-center gap-2 ml-2.5 text-xs font-bold">
                      Online Payment Integration
                    </span>
                    <GoChevronRight className="text-sm" />
                  </Link>
                </div>
                <div className="list-button border-dark/40 hover:border-l-4 hover:border-primary hover:transition-all hover:ease-in-out">
                  <Link
                    to={`${devNavUrl}/services/web-application/online-donation-system`}
                    className="flex items-center gap-2 py-3 "
                  >
                    <span className="flex items-center gap-2 ml-2.5 text-xs font-bold">
                      Online Donation System
                    </span>
                    <GoChevronRight className="text-sm" />
                  </Link>
                </div>
                <div className="list-button border-dark/40 hover:border-l-4 hover:border-primary hover:transition-all hover:ease-in-out">
                  <Link
                    to={`${devNavUrl}/services/web-application/asset-inventory-system`}
                    className="flex items-center gap-2 py-3 "
                  >
                    <span className="flex items-center gap-2 ml-2.5 text-xs font-bold">
                      Asset Inventory System
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

export default WebApplicationAdmin;
