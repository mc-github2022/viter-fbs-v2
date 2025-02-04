import React from "react";
import EmailLogTable from "./EmailLogTable";
import Navigation from "../../../../partials/dashboard/Navigation";
import Dashboard from "../../../../partials/dashboard/Dashboard";

const EmailLog = () => {
  return (
    <>
      <section id="email-log" className="bg-[#f5f5f3]">
        <Navigation menu="subscribers" submenu="email-log" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex justify-between ">
              <div className="text-sm text-[black] font-semibold">
                <h2>Email Log</h2>
              </div>
            </div>
            <div className="pb-4">
              <EmailLogTable />
            </div>
          </div>
        </Dashboard>
      </section>
    </>
  );
};

export default EmailLog;
