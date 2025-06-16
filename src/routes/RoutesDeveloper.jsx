import DeveloperUserForgetPassword from "@/components/pages/access/developer/DeveloperUserForgetPassword";
import ProtectedRouteDeveloper from "@/components/pages/access/ProtectedRouteDeveloper";
import {
  devNavUrl,
  UrlDeveloper,
} from "../components/helpers/functions-general";
import { default as CreateDeveloperPassword } from "../components/pages/access/developer/CreateDeveloperPassword";
import { default as DeveloperLogin } from "../components/pages/access/developer/DeveloperLogin";
import Banner from "../components/pages/developer/dashHome/banner/Banner";
import Insights from "../components/pages/developer/dashHome/insights/Insights";
import Testimonial from "../components/pages/developer/dashHome/testimonial/Testimonial";
import IndustryTestimonial from "../components/pages/developer/industry-testimonial/IndustryTestimonial";
import LcssBatches from "../components/pages/developer/lcss-batches/LcssBatches";
import Notification from "../components/pages/developer/notification/Notification";
import NotificationLog from "../components/pages/developer/notification/notification-log/NotificationLog";
import Pricing from "../components/pages/developer/pricing/pricing-list/Pricing";
import PricingMenu from "../components/pages/developer/pricing/PricingMenu";
import Services from "../components/pages/developer/special-offers/SpecialOffers";
import Audience from "../components/pages/developer/subscribers/audience/Audience";
import MailerLog from "../components/pages/developer/subscribers/mailer-log/MailerLog";
import Mailer from "../components/pages/developer/subscribers/mailer/Mailer";
import Subscribers from "../components/pages/developer/subscribers/Subscribers";
import Developer from "../components/pages/developer/user/developer/Developer";
import OtherUser from "../components/pages/developer/user/other-user/OtherUser";
import Role from "../components/pages/developer/user/role/Role";
import VidTestimonial from "../components/pages/developer/vid-testimonial/VidTestimonial";
import Careers from "../components/pages/developer/why-fbs-page/careers/Careers";
import EventsAndActivities from "../components/pages/developer/why-fbs-page/events-and-activities/EventsAndActivities";
import BusinessRegPageCopy from "../components/pages/website/for-pricing-only/BusinessRegPageCopy";
import Partners from "../components/pages/developer/partners/Partners";
import Gallery from "../components/pages/developer/gallery/Gallery";
import Home from "../components/pages/developer/dashHome/Home";
import WebApplication from "../components/pages/developer/services/web-application/WebApplication";
import HrInformationSystem from "../components/pages/developer/services/web-application/hr-information-system/HrInformationSystem";
import Category from "../components/pages/developer/packages/category/Category";
import List from "../components/pages/developer/packages/list/List";
import Details from "../components/pages/developer/packages/details/Details";
import OnlinePayrollSystem from "../components/pages/developer/services/web-application/online-payroll-system/OnlinePayrollSystem";
import SchoolEnrollmentSystem from "../components/pages/developer/services/web-application/school-enrollment-system/SchoolEnrollmentSystem";
import OnlinePaymentIntegration from "../components/pages/developer/services/web-application/online-payment-integration/OnlinePaymentIntegration";
import OnlineDonationSystem from "../components/pages/developer/services/web-application/online-donation-system/OnlineDonationSystem";
import AssetInventorySystem from "../components/pages/developer/services/web-application/asset-inventory-system/AssetInventorySystem";
import Newsletter from "../components/pages/developer/subscribers/newsletter/Newsletter";
import AccountingSolutions from "../components/pages/developer/services/accounting-solutions/AccountingSolutions";
import BusinessRegistration from "../components/pages/developer/services/accounting-solutions/business-registration/BusinessRegistration";
import BookkeepingAndCompliance from "../components/pages/developer/services/accounting-solutions/bookkeeping-compliance/BookkeepingAndCompliance";
import LearningCenterSolutions from "../components/pages/developer/services/learning-center-solutions/LearningCenterSolutions";
import CollegeOnTheJobTraining from "../components/pages/developer/services/learning-center-solutions/college-on-the-job-training/CollegeOnTheJobTraining";
import HighSchoolWorkImmersion from "../components/pages/developer/services/learning-center-solutions/high-school-work-immersion/HighSchoolWorkImmersion";
import ContinuingStudies from "../components/pages/developer/services/learning-center-solutions/continuing-studies/ContinuingStudies";
import VirtualAssistantSolutions from "../components/pages/developer/services/va-solutions/VirtualAssistantSolutions";
import Administrative from "../components/pages/developer/services/va-solutions/administrative/Administrative";
import BusinessSupport from "../components/pages/developer/services/va-solutions/business-support/BusinessSupport";

export const routesDeveloper = [
  {
    path: `${devNavUrl}/${UrlDeveloper}/home`,
    element: (
      <ProtectedRouteDeveloper>
        <Home />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/home-insights`,
    element: (
      <ProtectedRouteDeveloper>
        <Insights />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/home-banner`,
    element: (
      <ProtectedRouteDeveloper>
        <Banner />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/home-testimonial`,
    element: (
      <ProtectedRouteDeveloper>
        <Testimonial />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/special-offers`,
    element: (
      <ProtectedRouteDeveloper>
        <Services />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/partners`,
    element: (
      <ProtectedRouteDeveloper>
        <Partners />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/gallery`,
    element: (
      <ProtectedRouteDeveloper>
        <Gallery />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/events-activities`,
    element: (
      <ProtectedRouteDeveloper>
        <EventsAndActivities />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/whyFBS-careers`,
    element: (
      <ProtectedRouteDeveloper>
        <Careers />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/lcss-batches`,
    element: (
      <ProtectedRouteDeveloper>
        <LcssBatches />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/industry-testimonial`,
    element: (
      <ProtectedRouteDeveloper>
        <IndustryTestimonial />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/vid-testimonial`,
    element: (
      <ProtectedRouteDeveloper>
        <VidTestimonial />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/pricing`,
    element: (
      <ProtectedRouteDeveloper>
        <PricingMenu />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/pricing/list`,
    element: (
      <ProtectedRouteDeveloper>
        <Pricing />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/pricing-copy`,
    element: (
      <ProtectedRouteDeveloper>
        <BusinessRegPageCopy />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/notification-receiver`,
    element: (
      <ProtectedRouteDeveloper>
        <Notification />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/notification-log`,
    element: (
      <ProtectedRouteDeveloper>
        <NotificationLog />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/other-user`,
    element: (
      <ProtectedRouteDeveloper>
        <OtherUser />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/user-developer`,
    element: (
      <ProtectedRouteDeveloper>
        <Developer />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/user-role`,
    element: (
      <ProtectedRouteDeveloper>
        <Role />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/subscribers`,
    element: (
      <ProtectedRouteDeveloper>
        <Subscribers />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/audience`,
    element: (
      <ProtectedRouteDeveloper>
        <Audience />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/mailer`,
    element: (
      <ProtectedRouteDeveloper>
        <Mailer />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/mailer-log`,
    element: (
      <ProtectedRouteDeveloper>
        <MailerLog />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/email-list`,
    element: (
      <ProtectedRouteDeveloper>
        <Newsletter />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/services/web-application`,
    element: (
      <ProtectedRouteDeveloper>
        <WebApplication />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/services/web-application/hris`,
    element: (
      <ProtectedRouteDeveloper>
        <HrInformationSystem />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/services/web-application/online-payroll-system`,
    element: (
      <ProtectedRouteDeveloper>
        <OnlinePayrollSystem />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/services/web-application/school-enrollment-system`,
    element: (
      <ProtectedRouteDeveloper>
        <SchoolEnrollmentSystem />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/services/web-application/online-payment-integration`,
    element: (
      <ProtectedRouteDeveloper>
        <OnlinePaymentIntegration />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/services/web-application/online-donation-system`,
    element: (
      <ProtectedRouteDeveloper>
        <OnlineDonationSystem />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/services/web-application/asset-inventory-system`,
    element: (
      <ProtectedRouteDeveloper>
        <AssetInventorySystem />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/services/accounting-solutions`,
    element: (
      <ProtectedRouteDeveloper>
        <AccountingSolutions />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/services/accounting-solutions/business-registration`,
    element: (
      <ProtectedRouteDeveloper>
        <BusinessRegistration />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/services/accounting-solutions/bookkeeping-compliance`,
    element: (
      <ProtectedRouteDeveloper>
        <BookkeepingAndCompliance />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/services/lcss`,
    element: (
      <ProtectedRouteDeveloper>
        <LearningCenterSolutions />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/services/lcss/college-on-the-job-training`,
    element: (
      <ProtectedRouteDeveloper>
        <CollegeOnTheJobTraining />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/services/lcss/high-school-work-immersion`,
    element: (
      <ProtectedRouteDeveloper>
        <HighSchoolWorkImmersion />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/services/lcss/continuing-studies`,
    element: (
      <ProtectedRouteDeveloper>
        <ContinuingStudies />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/services/virtual-assistant-solutions`,
    element: (
      <ProtectedRouteDeveloper>
        <VirtualAssistantSolutions />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/services/virtual-assistant-solutions/administrative`,
    element: (
      <ProtectedRouteDeveloper>
        <Administrative />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/services/virtual-assistant-solutions/business-support`,
    element: (
      <ProtectedRouteDeveloper>
        <BusinessSupport />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/packages/category`,
    element: (
      <ProtectedRouteDeveloper>
        <Category />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/packages/list`,
    element: (
      <ProtectedRouteDeveloper>
        <List />
      </ProtectedRouteDeveloper>
    ),
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/packages/details`,
    element: (
      <ProtectedRouteDeveloper>
        <Details />
      </ProtectedRouteDeveloper>
    ),
  },

  // LOGIN PAGES
  // LOGIN PAGES
  // LOGIN PAGES
  {
    path: `${devNavUrl}/${UrlDeveloper}/login`,
    element: <DeveloperLogin />,
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/forgot-password`,
    element: <DeveloperUserForgetPassword />,
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/create-password`,
    element: <CreateDeveloperPassword />,
  },
];
