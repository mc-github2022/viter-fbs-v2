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
