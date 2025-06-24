import ProtectedRouteOther from "@/components/pages/access/ProtectedRouteOther";
import CreateOtherPassword from "@/components/pages/access/user-other/CreateOtherPassword";
import OtherUserForgetPassword from "@/components/pages/access/user-other/OtherUserForgetPassword";
import OtherUserLogin from "@/components/pages/access/user-other/OtherUserLogin";
import { devNavUrl } from "../components/helpers/functions-general";
import Banner from "../components/pages/developer/dashHome/banner/Banner";
import Home from "../components/pages/developer/dashHome/Home";
import Insights from "../components/pages/developer/dashHome/insights/Insights";
import Testimonial from "../components/pages/developer/dashHome/testimonial/Testimonial";
import Gallery from "../components/pages/developer/gallery/Gallery";
import IndustryTestimonial from "../components/pages/developer/industry-testimonial/IndustryTestimonial";
import LcssBatches from "../components/pages/developer/lcss-batches/LcssBatches";
import Notification from "../components/pages/developer/notification/Notification";
import NotificationLog from "../components/pages/developer/notification/notification-log/NotificationLog";
import Category from "../components/pages/developer/packages/category/Category";
import Details from "../components/pages/developer/packages/details/Details";
import List from "../components/pages/developer/packages/list/List";
import Partners from "../components/pages/developer/partners/Partners";
import Pricing from "../components/pages/developer/pricing/pricing-list/Pricing";
import PricingMenu from "../components/pages/developer/pricing/PricingMenu";
import HrInformationSystem from "../components/pages/developer/services/web-application/hr-information-system/HrInformationSystem";
import WebApplicationAdmin from "../components/pages/developer/services/web-application/WebApplicationAdmin";
import Services from "../components/pages/developer/special-offers/SpecialOffers";
import Audience from "../components/pages/developer/subscribers/audience/Audience";
import MailerLog from "../components/pages/developer/subscribers/mailer-log/MailerLog";
import Mailer from "../components/pages/developer/subscribers/mailer/Mailer";
import Subscribers from "../components/pages/developer/subscribers/Subscribers";
import OtherUser from "../components/pages/developer/user/other-user/OtherUser";
import VidTestimonial from "../components/pages/developer/vid-testimonial/VidTestimonial";
import Careers from "../components/pages/developer/why-fbs-page/careers/Careers";
import EventsAndActivities from "../components/pages/developer/why-fbs-page/events-and-activities/EventsAndActivities";
import BusinessRegPageCopy from "../components/pages/website/for-pricing-only/BusinessRegPageCopy";
import OnlinePayrollSystem from "../components/pages/developer/services/web-application/online-payroll-system/OnlinePayrollSystem";
import SchoolEnrollmentSystem from "../components/pages/developer/services/web-application/school-enrollment-system/SchoolEnrollmentSystem";
import OnlinePaymentIntegration from "../components/pages/developer/services/web-application/online-payment-integration/OnlinePaymentIntegration";
import OnlineDonationSystem from "../components/pages/developer/services/web-application/online-donation-system/OnlineDonationSystem";
import AssetInventorySystem from "../components/pages/developer/services/web-application/asset-inventory-system/AssetInventorySystem";
import Newsletter from "../components/pages/developer/subscribers/newsletter/Newsletter";
import AccountingSolutionsAdmin from "../components/pages/developer/services/accounting-solutions/AccountingSolutionsAdmin";
import BusinessRegistration from "../components/pages/developer/services/accounting-solutions/business-registration/BusinessRegistration";
import BookkeepingAndCompliance from "../components/pages/developer/services/accounting-solutions/bookkeeping-compliance/BookkeepingAndCompliance";
import LearningCenterSolutionsAdmin from "../components/pages/developer/services/learning-center-solutions/LearningCenterSolutionsAdmin";
import CollegeOnTheJobTraining from "../components/pages/developer/services/learning-center-solutions/college-on-the-job-training/CollegeOnTheJobTraining";
import HighSchoolWorkImmersion from "../components/pages/developer/services/learning-center-solutions/high-school-work-immersion/HighSchoolWorkImmersion";
import ContinuingStudies from "../components/pages/developer/services/learning-center-solutions/continuing-studies/ContinuingStudies";
import VirtualAssistantSolutionsAdmin from "../components/pages/developer/services/va-solutions/VirtualAssistantSolutionsAdmin";
import Administrative from "../components/pages/developer/services/va-solutions/administrative/Administrative";
import BusinessSupport from "../components/pages/developer/services/va-solutions/business-support/BusinessSupport";
import Marketing from "../components/pages/developer/services/va-solutions/marketing/Marketing";
import WebDesignAndDevAdmin from "../components/pages/developer/services/web-design/WebDesignAndDevAdmin";
import WordPressCmsWebsite from "../components/pages/developer/services/web-design/wordpress-cms-website/WordPressCmsWebsite";
import SinglePageWebsite from "../components/pages/developer/services/web-design/single-page/SinglePageWebsite";
import WebsiteDesign from "../components/pages/developer/services/web-design/website-design/WebsiteDesign";
import WhyWorkWithUs from "../components/pages/developer/why-fbs-page/why-work-with-us/WhyWorkWithUs";
import EventsAndActivitiesPage from "../components/pages/developer/why-fbs-page/events-and-activities-page/EventsAndActivitiesPage";
import CareersPage from "../components/pages/developer/why-fbs-page/careers-page/CareersPage";

export const routesAdmin = [
  {
    path: `${devNavUrl}/home`,
    element: (
      <ProtectedRouteOther>
        <Home />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/home-insights`,
    element: (
      <ProtectedRouteOther>
        <Insights />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/home-banner`,
    element: (
      <ProtectedRouteOther>
        <Banner />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/home-testimonial`,
    element: (
      <ProtectedRouteOther>
        <Testimonial />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/special-offers`,
    element: (
      <ProtectedRouteOther>
        <Services />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/partners`,
    element: (
      <ProtectedRouteOther>
        <Partners />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/gallery`,
    element: (
      <ProtectedRouteOther>
        <Gallery />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/events-activities`,
    element: (
      <ProtectedRouteOther>
        <EventsAndActivities />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/whyFBS-careers`,
    element: (
      <ProtectedRouteOther>
        <Careers />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/lcss-batches`,
    element: (
      <ProtectedRouteOther>
        <LcssBatches />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/industry-testimonial`,
    element: (
      <ProtectedRouteOther>
        <IndustryTestimonial />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/vid-testimonial`,
    element: (
      <ProtectedRouteOther>
        <VidTestimonial />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/pricing`,
    element: (
      <ProtectedRouteOther>
        <PricingMenu />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/pricing/list`,
    element: (
      <ProtectedRouteOther>
        <Pricing />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/pricing-copy`,
    element: (
      <ProtectedRouteOther>
        <BusinessRegPageCopy />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/notification-receiver`,
    element: (
      <ProtectedRouteOther>
        <Notification />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/notification-log`,
    element: (
      <ProtectedRouteOther>
        <NotificationLog />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/other-user`,
    element: (
      <ProtectedRouteOther>
        <OtherUser />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/subscribers`,
    element: (
      <ProtectedRouteOther>
        <Subscribers />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/audience`,
    element: (
      <ProtectedRouteOther>
        <Audience />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/mailer`,
    element: (
      <ProtectedRouteOther>
        <Mailer />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/mailer-log`,
    element: (
      <ProtectedRouteOther>
        <MailerLog />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/email-list`,
    element: (
      <ProtectedRouteOther>
        <Newsletter />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/services/web-application`,
    element: (
      <ProtectedRouteOther>
        <WebApplicationAdmin />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/services/web-application/hris`,
    element: (
      <ProtectedRouteOther>
        <HrInformationSystem />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/services/web-application/online-payroll-system`,
    element: (
      <ProtectedRouteOther>
        <OnlinePayrollSystem />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/services/web-application/school-enrollment-system`,
    element: (
      <ProtectedRouteOther>
        <SchoolEnrollmentSystem />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/services/web-application/online-payment-integration`,
    element: (
      <ProtectedRouteOther>
        <OnlinePaymentIntegration />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/services/web-application/online-donation-system`,
    element: (
      <ProtectedRouteOther>
        <OnlineDonationSystem />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/services/web-application/asset-inventory-system`,
    element: (
      <ProtectedRouteOther>
        <AssetInventorySystem />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/services/accounting-solutions`,
    element: (
      <ProtectedRouteOther>
        <AccountingSolutionsAdmin />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/services/accounting-solutions/business-registration`,
    element: (
      <ProtectedRouteOther>
        <BusinessRegistration />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/services/accounting-solutions/bookkeeping-compliance`,
    element: (
      <ProtectedRouteOther>
        <BookkeepingAndCompliance />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/services/lcss`,
    element: (
      <ProtectedRouteOther>
        <LearningCenterSolutionsAdmin />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/services/lcss/college-on-the-job-training`,
    element: (
      <ProtectedRouteOther>
        <CollegeOnTheJobTraining />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/services/lcss/high-school-work-immersion`,
    element: (
      <ProtectedRouteOther>
        <HighSchoolWorkImmersion />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/services/lcss/continuing-studies`,
    element: (
      <ProtectedRouteOther>
        <ContinuingStudies />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/services/virtual-assistant-solutions`,
    element: (
      <ProtectedRouteOther>
        <VirtualAssistantSolutionsAdmin />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/services/virtual-assistant-solutions/administrative`,
    element: (
      <ProtectedRouteOther>
        <Administrative />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/services/virtual-assistant-solutions/business-support`,
    element: (
      <ProtectedRouteOther>
        <BusinessSupport />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/services/virtual-assistant-solutions/marketing`,
    element: (
      <ProtectedRouteOther>
        <Marketing />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/services/web-design-and-development`,
    element: (
      <ProtectedRouteOther>
        <WebDesignAndDevAdmin />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/services/web-design-and-development/wordpress`,
    element: (
      <ProtectedRouteOther>
        <WordPressCmsWebsite />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/services/web-design-and-development/single-page-website`,
    element: (
      <ProtectedRouteOther>
        <SinglePageWebsite />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/services/web-design-and-development/web-design`,
    element: (
      <ProtectedRouteOther>
        <WebsiteDesign />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/why-work-with-us`,
    element: (
      <ProtectedRouteOther>
        <WhyWorkWithUs />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/events-activities-page`,
    element: (
      <ProtectedRouteOther>
        <EventsAndActivitiesPage />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/whyFBS-careers-page`,
    element: (
      <ProtectedRouteOther>
        <CareersPage />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/packages/category`,
    element: (
      <ProtectedRouteOther>
        <Category />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/packages/list`,
    element: (
      <ProtectedRouteOther>
        <List />
      </ProtectedRouteOther>
    ),
  },
  {
    path: `${devNavUrl}/packages/details`,
    element: (
      <ProtectedRouteOther>
        <Details />
      </ProtectedRouteOther>
    ),
  },
  // {
  //   path: `${devNavUrl}/user-developer`,
  //   element: (
  //     <ProtectedRouteOther>
  //       <Developer />
  //     </ProtectedRouteOther>
  //   ),
  // },
  // {
  //   path: `${devNavUrl}/user-role`,
  //   element: (
  //     <ProtectedRouteOther>
  //       <Role />
  //     </ProtectedRouteOther>
  //   ),
  // },

  // LOGIN PAGES
  // LOGIN PAGES
  // LOGIN PAGES
  {
    path: `${devNavUrl}/login`,
    element: <OtherUserLogin />,
  },
  {
    path: `${devNavUrl}/forgot-password`,
    element: <OtherUserForgetPassword />,
  },
  {
    path: `${devNavUrl}/create-password`,
    element: <CreateOtherPassword />,
  },
];
