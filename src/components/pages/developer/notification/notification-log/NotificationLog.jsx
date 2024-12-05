import React from "react";
import { StoreContext } from "../../../../store/StoreContext";
import { setIsNotifOpen } from "../../../../store/StoreAction";
import NotificationLogTable from "./NotificationLogTable";
import Navigation from "../../../../partials/dashboard/Navigation";
import Dashboard from "../../../../partials/dashboard/Dashboard";

const NotificationLog = () => {
  const { store, dispatch } = React.useContext(StoreContext);

  // React.useEffect(() => {
  //   dispatch(setIsNotifOpen(true));
  // }, []);

  return (
    <>
      <section id="notification-log" className="bg-[#f5f5f3]">
        <Navigation menu="notification" submenu="notification-log" />
        <Dashboard>
          <div className="mx-5 pt-2">
            <div className="py-5 flex justify-between ">
              <div className="text-sm text-[black] font-semibold">
                <h2>Notification Log</h2>
              </div>
            </div>
            <div className="pb-4">
              <NotificationLogTable />
            </div>
          </div>
        </Dashboard>
      </section>
    </>
  );
};

export default NotificationLog;
