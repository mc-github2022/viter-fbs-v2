import { devNavUrl } from "../components/helpers/functions-general";
import SinglePage from "../components/pages/website/events/SinglePage";
import EventsAndAct from "../components/pages/website/events/SinglePage";
import Home from "../components/pages/website/home/Home";
import LcssPage from "../components/pages/website/lcssPage/LcssPage";
import ServiceHrPage from "../components/pages/website/serviceHr/ServiceHrPage";
import ServicePayrollPage from "../components/pages/website/servicePayroll/ServicePayrollPage";
import VaPage from "../components/pages/website/vaPage/VaPage";
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
];
