import { devNavUrl } from "../components/helpers/functions-general";
import Banner from "../components/pages/developer/dashHome/banner/Banner";
import Insights from "../components/pages/developer/dashHome/insights/Insights";
import Testimonial from "../components/pages/developer/dashHome/testimonial/Testimonial";
import LcssBatches from "../components/pages/developer/lcss-batches/LcssBatches";
import Services from "../components/pages/developer/special-offers/SpecialOffers";
import Careers from "../components/pages/developer/why-fbs-page/careers/Careers";
import EventsAndActivities from "../components/pages/developer/why-fbs-page/events-and-activities/EventsAndActivities";
import BookkeepingPage from "../components/pages/website/accountingSolution/bookkeeping/BookkeepingPage";
import BusinessRegPage from "../components/pages/website/accountingSolution/BusinessReg/BusinessRegPage";
import CompliancePage from "../components/pages/website/accountingSolution/compliance/CompliancePage";
import CareerPage from "../components/pages/website/career/CareerPage";
import EventsAndAct from "../components/pages/website/events/EventsAndAct";
import Home from "../components/pages/website/home/Home";
import BatchSliderPage from "../components/pages/website/lcssPage/BatchSliderPage";
import LcssPage from "../components/pages/website/lcssPage/LcssPage";
import ConStudPage from "../components/pages/website/learningCenterSolution/continuingStudies/ConStudPage";
import ImmersionPage from "../components/pages/website/learningCenterSolution/highSchoolImmersion/ImmersionPage";
import SingplePage from "../components/pages/website/singlePage/SingplePage";
import VaAdminSolutionPage from "../components/pages/website/virtualSolution/vaAdminSolution/VaAdminSolutionPage";
import VaCreativeSupportPage from "../components/pages/website/virtualSolution/vaCreativeSupport/VaCreativeSupportPage";
import VaMarketingPage from "../components/pages/website/virtualSolution/vaMarketing/VaMarketingPage";
import VaMiscellaneousPage from "../components/pages/website/virtualSolution/vaMiscellaneous/VaMiscellaneousPage";
import VaResearchPage from "../components/pages/website/virtualSolution/vaResearch/VaResearchPage";
import VaTechSupportPage from "../components/pages/website/virtualSolution/vaTechSupport/VaTechSupportPage";
import ServiceOnlineDonationPage from "../components/pages/website/webapp/serviceDonation/ServiceOnlineDonationPage";
import ServiceEnrollmentPage from "../components/pages/website/webapp/serviceEnrollment/ServiceEnrollmentPage";
import ServiceHrPage from "../components/pages/website/webapp/serviceHr/ServiceHrPage";
import ServiceInventoryPage from "../components/pages/website/webapp/serviceInventory/ServiceInventoryPage";
import ServiceOnlinePayPage from "../components/pages/website/webapp/serviceOnlinePay/ServiceOnlinePayPage";
import ServicePayrollPage from "../components/pages/website/webapp/servicePayroll/ServicePayrollPage";
import SinglePageWebsite from "../components/pages/website/webDesignDev/singlePageWebsite/SinglePageWebsite";
import WebDesignPage from "../components/pages/website/webDesignDev/webDesign/WebDesignPage";
import WordPressPage from "../components/pages/website/webDesignDev/wordPress/wordPressPage";
import WhyUsPage from "../components/pages/website/whyUsPage/WhyUsPage";
import Dashboard from "../components/partials/dashboard/Dashboard";
import EULA from "../components/partials/policies/EULA";
import PrivacyPolicy from "../components/partials/policies/PrivacyPolicy";
import TermsOfService from "../components/partials/policies/TermsOfService";

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
    path: `${devNavUrl}/events-and-activities`,
    element: <EventsAndAct />,
  },
  {
    path: `${devNavUrl}/adminSolution`,
    element: <VaAdminSolutionPage />,
  },
  {
    path: `${devNavUrl}/va-marketing`,
    element: <VaMarketingPage />,
  },
  {
    path: `${devNavUrl}/va-techsupport`,
    element: <VaTechSupportPage />,
  },
  {
    path: `${devNavUrl}/va-creativesupport`,
    element: <VaCreativeSupportPage />,
  },
  {
    path: `${devNavUrl}/va-research`,
    element: <VaResearchPage />,
  },
  {
    path: `${devNavUrl}/va-miscellaneous`,
    element: <VaMiscellaneousPage />,
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
  {
    path: `${devNavUrl}/web-wordpress`,
    element: <WordPressPage />,
  },
  {
    path: `${devNavUrl}/web-singlepage`,
    element: <SinglePageWebsite />,
  },
  {
    path: `${devNavUrl}/web-design`,
    element: <WebDesignPage />,
  },
  {
    path: `${devNavUrl}/career`,
    element: <CareerPage />,
  },
  {
    path: `${devNavUrl}/immersion`,
    element: <ImmersionPage />,
  },
  {
    path: `${devNavUrl}/continuing-studies`,
    element: <ConStudPage />,
  },
  {
    path: `${devNavUrl}/single-post`,
    element: <SingplePage />,
  },
  {
    path: `${devNavUrl}/business-registration`,
    element: <BusinessRegPage />,
  },
  {
    path: `${devNavUrl}/compliance`,
    element: <CompliancePage />,
  },
  {
    path: `${devNavUrl}/bookkeeping`,
    element: <BookkeepingPage />,
  },
  {
    path: `${devNavUrl}/privacy-policy`,
    element: <PrivacyPolicy />,
  },
  {
    path: `${devNavUrl}/terms-of-service`,
    element: <TermsOfService />,
  },
  {
    path: `${devNavUrl}/eula`,
    element: <EULA />,
  },
  {
    path: `${devNavUrl}/dashboard`,
    element: <Dashboard />,
  },
  {
    path: `${devNavUrl}/home-insights`,
    element: <Insights />,
  },
  {
    path: `${devNavUrl}/home-banner`,
    element: <Banner />,
  },
  {
    path: `${devNavUrl}/home-testimonial`,
    element: <Testimonial />,
  },
  {
    path: `${devNavUrl}/special-offers`,
    element: <Services />,
  },
  {
    path: `${devNavUrl}/events-activities`,
    element: <EventsAndActivities />,
  },
  {
    path: `${devNavUrl}/whyFBS-careers`,
    element: <Careers />,
  },
  {
    path: `${devNavUrl}/lcss-batches`,
    element: <LcssBatches />,
  },
];
