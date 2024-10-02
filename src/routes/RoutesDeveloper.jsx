import { devNavUrl } from "../components/helpers/functions-general";
import SinglePage from "../components/pages/website/events/SinglePage";
import Home from "../components/pages/website/home/Home";
import LcssPage from "../components/pages/website/lcssPage/LcssPage";
import VaPage from "../components/pages/website/vaPage/VaPage";
import ServiceOnlineDonationPage from "../components/pages/website/webapp/serviceDonation/ServiceOnlineDonationPage";
import ServiceEnrollmentPage from "../components/pages/website/webapp/serviceEnrollment/ServiceEnrollmentPage";
import ServiceHrPage from "../components/pages/website/webapp/serviceHr/ServiceHrPage";
import ServiceInventoryPage from "../components/pages/website/webapp/serviceInventory/ServiceInventoryPage";
import ServiceOnlinePayPage from "../components/pages/website/webapp/serviceOnlinePay/ServiceOnlinePayPage";
import ServicePayrollPage from "../components/pages/website/webapp/servicePayroll/ServicePayrollPage";
import WhyUsPage from "../components/pages/website/whyUsPage/WhyUsPage";

export const routesDeveloper = [
  {
    path: `${devNavUrl}/`,
    element: <Home />,
  },
  {
    path: `${devNavUrl}/lcss`,
    element: <LcssPage />,
  },
  {
    path: `${devNavUrl}/webapp-hris`,
    element: <ServiceHrPage />,
  },
  {
    path: `${devNavUrl}/whyus`,
    element: <WhyUsPage />,
  },
  {
    path: `${devNavUrl}/singlepage`,
    element: <SinglePage />,
  },
  {
    path: `${devNavUrl}/va`,
    element: <VaPage />,
  },
  {
    path: `${devNavUrl}/webapp-payroll`,
    element: <ServicePayrollPage />,
  },
  {
    path: `${devNavUrl}/webapp-enrollment`,
    element: <ServiceEnrollmentPage />,
  },
  {
    path: `${devNavUrl}/webapp-onlinepayment`,
    element: <ServiceOnlinePayPage />,
  },
  {
    path: `${devNavUrl}/webapp-onlinedonation`,
    element: <ServiceOnlineDonationPage />,
  },
  {
    path: `${devNavUrl}/webapp-inventory`,
    element: <ServiceInventoryPage />,
  },
];
