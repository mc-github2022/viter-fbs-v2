import ProtectedRouteOther from "@/components/pages/access/ProtectedRouteOther";
import CreateOtherPassword from "@/components/pages/access/user-other/CreateOtherPassword";
import OtherUserForgetPassword from "@/components/pages/access/user-other/OtherUserForgetPassword";
import OtherUserLogin from "@/components/pages/access/user-other/OtherUserLogin";
import { devNavUrl } from "../components/helpers/functions-general";
import Banner from "../components/pages/developer/dashHome/banner/Banner";
import Insights from "../components/pages/developer/dashHome/insights/Insights";
import Testimonial from "../components/pages/developer/dashHome/testimonial/Testimonial";
import IndustryTestimonial from "../components/pages/developer/industry-testimonial/IndustryTestimonial";
import LcssBatches from "../components/pages/developer/lcss-batches/LcssBatches";
import Notification from "../components/pages/developer/notification/Notification";
import Pricing from "../components/pages/developer/pricing/pricing-list/Pricing";
import PricingMenu from "../components/pages/developer/pricing/PricingMenu";
import Services from "../components/pages/developer/special-offers/SpecialOffers";
import OtherUser from "../components/pages/developer/user/other-user/OtherUser";
import VidTestimonial from "../components/pages/developer/vid-testimonial/VidTestimonial";
import Careers from "../components/pages/developer/why-fbs-page/careers/Careers";
import EventsAndActivities from "../components/pages/developer/why-fbs-page/events-and-activities/EventsAndActivities";
import BusinessRegPageCopy from "../components/pages/website/for-pricing-only/BusinessRegPageCopy";
import NotificationLog from "../components/pages/developer/notification/notification-log/NotificationLog";

export const routesAdmin = [
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
