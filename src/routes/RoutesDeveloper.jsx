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

export const routesDeveloper = [
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
