import {
  devNavUrl,
  UrlDeveloper,
} from "../components/helpers/functions-general";
import CreatePassword from "../components/pages/access/developer/CreatePassword";
import ForgetPassword from "../components/pages/access/developer/ForgetPassword";
import SystemLogin from "../components/pages/access/developer/SystemLogin";
import Banner from "../components/pages/developer/dashHome/banner/Banner";
import Insights from "../components/pages/developer/dashHome/insights/Insights";
import Testimonial from "../components/pages/developer/dashHome/testimonial/Testimonial";
import IndustryTestimonial from "../components/pages/developer/industry-testimonial/IndustryTestimonial";
import LcssBatches from "../components/pages/developer/lcss-batches/LcssBatches";
import Notification from "../components/pages/developer/notification/Notification";
import Pricing from "../components/pages/developer/pricing/pricing-list/Pricing";
import PricingMenu from "../components/pages/developer/pricing/PricingMenu";
import Services from "../components/pages/developer/special-offers/SpecialOffers";
import Developer from "../components/pages/developer/user/developer/Developer";
import OtherUser from "../components/pages/developer/user/other-user/OtherUser";
import Role from "../components/pages/developer/user/role/Role";
import VidTestimonial from "../components/pages/developer/vid-testimonial/VidTestimonial";
import Careers from "../components/pages/developer/why-fbs-page/careers/Careers";
import EventsAndActivities from "../components/pages/developer/why-fbs-page/events-and-activities/EventsAndActivities";
import BusinessRegPageCopy from "../components/pages/website/for-pricing-only/BusinessRegPageCopy";
import PostByCategory from "../components/pages/website/postByCategory/PostByCategory";

export const routesDeveloper = [
  {
    path: `${devNavUrl}/${UrlDeveloper}/home-insights`,
    element: <Insights />,
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/home-banner`,
    element: <Banner />,
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/home-testimonial`,
    element: <Testimonial />,
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/special-offers`,
    element: <Services />,
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/events-activities`,
    element: <EventsAndActivities />,
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/whyFBS-careers`,
    element: <Careers />,
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/lcss-batches`,
    element: <LcssBatches />,
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/industry-testimonial`,
    element: <IndustryTestimonial />,
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/vid-testimonial`,
    element: <VidTestimonial />,
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/pricing`,
    element: <PricingMenu />,
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/pricing/list`,
    element: <Pricing />,
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/pricing-copy`,
    element: <BusinessRegPageCopy />,
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/post-by-category`,
    element: <PostByCategory />,
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/notification`,
    element: <Notification />,
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/developer/login`,
    element: <SystemLogin />,
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/system/forgot-password`,
    element: <ForgetPassword />,
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/create-password`,
    element: <CreatePassword />,
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/other-user`,
    element: <OtherUser />,
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/user-developer`,
    element: <Developer />,
  },
  {
    path: `${devNavUrl}/${UrlDeveloper}/user-role`,
    element: <Role />,
  },
];
