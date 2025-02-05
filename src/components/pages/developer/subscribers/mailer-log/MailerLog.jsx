import React from "react";
import useQueryData from "../../../../custom-hooks/useQueryData";
import { apiVersion } from "../../../../helpers/functions-general";
import Dashboard from "../../../../partials/dashboard/Dashboard";
import Navigation from "../../../../partials/dashboard/Navigation";
import MailerLogTable from "./MailerLogTable";

const MailerLog = () => {
  const {
    isLoading: isLoading,
    isFetching: isFetching,
    error: error,
    data: audienceData,
  } = useQueryData(
    `${apiVersion}/audience`, // endpoint
    "get", // method
    "audience" // key
  );

  const {
    isLoading: subscriberIsLoading,
    isFetching: subscriberIsFetching,
    error: subscriberError,
    data: subscribeData,
  } = useQueryData(
    `${apiVersion}/subscribe`, // endpoint
    "get", // method
    "subscribe" // key
  );

  return (
    <>
      <section id="mailer-log" className="bg-[#f5f5f3]">
        <Navigation menu="subscribers" submenu="mailer-log" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex justify-between ">
              <div className="text-sm text-[black] font-semibold">
                <h2>Email Log</h2>
              </div>
            </div>
            <div className="pb-4">
              <MailerLogTable audienceData={audienceData} subscribeData={subscribeData} />
            </div>
          </div>
        </Dashboard>
      </section>
    </>
  );
};

export default MailerLog;
