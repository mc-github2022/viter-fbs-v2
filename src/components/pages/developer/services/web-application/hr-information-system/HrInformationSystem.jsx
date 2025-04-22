import React from "react";
import Header from "../../../dashHome/Header";
import Navigation from "../../../../../partials/dashboard/Navigation";
import Dashboard from "../../../../../partials/dashboard/Dashboard";
import BreadCrumbs from "../../../../../partials/BreadCrumbs";
import HrisBanner from "./hris-banner/HrisBanner";
import HrisOverview from "./hris-overview/HrisOverview";
import HrisScope from "./hris-scope/HrisScope";

const HrInformationSystem = () => {
  return (
    <section id="" className="bg-light">
      <Navigation menu="services" submenu="web-application" />
      <Dashboard>
        <div className="mx-5 pt-2">
          <div className="py-5 flex justify-between ">
            <BreadCrumbs param={location.search} />
            <div className="text-sm text-[black] font-semibold">
              <h2>HR Information System</h2>
            </div>
          </div>
          <div className=" pb-4 bg-light shadow-xl">
            <Header />
            <HrisBanner />
            <HrisOverview />
            <HrisScope />
          </div>
        </div>
      </Dashboard>
    </section>
  );
};

export default HrInformationSystem;
