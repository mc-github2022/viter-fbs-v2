import React from "react";
import Navigation from "../../../partials/dashboard/Navigation";
import Dashboard from "../../../partials/dashboard/Dashboard";
import PricingList from "./PricingList";

const PricingMenu = () => {
  return (
    <section id="pricing" className="bg-[#f5f5f3]">
      <Navigation menu="pricing" />
      <Dashboard>
        <div className="mx-5 pt-2">
          <div className="py-5 flex justify-between ">
            <div className="text-sm text-[black] font-semibold">
              <h2>Pricing</h2>
            </div>
          </div>
          <PricingList />
        </div>
      </Dashboard>
    </section>
  );
};

export default PricingMenu;
