import { FaRegThumbsUp } from "react-icons/fa6";

export const banner = [
  {
    bannerTitle: (
      <p>
        Start Your Business <br />
        Hassle-Free with Our
      </p>
    ),
    bannerTitleBoldText: "Business Registration",
    bannerTextDesc:
      "Choose from comprehensive packages that simplify the registration process for any business type. We handle everything—from essential permits to compliance documents—so you can focus on growing your business",
    bannerBtnText: "CONTACT US",
    bannerBtnLink: "Link",
    bannerImage: "business-reg-bg.jpg",
  },
];

export const sectionPartnersTitle = [
  {
    subTitle: "Clients who trusted their",
    mainTitle: "growth with us.",
  },
];

export const sectionPartnersLogos = [
  {
    imageName: "logo-avant-white.png",
  },
  {
    imageName: "logo-ignite.png",
  },
  {
    imageName: "jcceos-logo.png",
  },
];

export const webAppOverview = [
  {
    subtitle: "Here's why we're the",
    mainTitle: "right choice for your Business Registration needs.",
    webAppImage: "business-reg-img.jpg",
    btnText: "Schedule A Demo",
    btnDownloadText: "Download Proposal",
    overviewAtitle: "Comprehensive Registration Packages",
    overviewAtext:
      "We offer a range of packages to suit different business needs, from sole proprietorship to one-person corporations and domestic corporations. Each package is tailored to cover essential requirements such as DTI, SEC, BIR, LGU registrations, and necessary permits, making the process hassle-free for clients.",
    overviewBtitle: "End-to-End Compliance Assistance",
    overviewBtext:
      "Our services include the preparation and filing of important documents like the Authority to Print, Books of Account, annual registration (0605), and DST Doc Stamps, ensuring that all compliance requirements are met efficiently without any delays.",
    overviewCtitle: "Flexible and Affordable Options",
    overviewCtext:
      "We provide cost-effective solutions for businesses of all sizes. Clients can choose the package that fits their budget and registration requirements, making it accessible for startups and established firms alike.",
  },
];

export const serviceInclusion = [
  {
    subtitle:
      "Our VA for Administrative Assistance offers comprehensive support to",
    mainTitle: "streamline your business operations.",
    taskType: "Administrative Tasks:",
    taskTypeList: [
      "Email Management",
      "Data Entry",
      "Database Management",
      "Document Preparation",
      "File Management",
    ],
    btnText: "PARTNER WITH US TODAY",
    btnLink: "#link",
    sectionImage: "vaPartnerWithUs.jpg",
  },
];

export const pricingCardCount = [
  {
    columnNumber: 2,
  },
];

export const pricing = [
  {
    icon: <FaRegThumbsUp className="text-[50px] mx-auto mb-4 text-primary" />,
    title: "Part-Time",
    rate: "$10 / Hour",
    duration: "(20 hours per week)",
    info: ["Employee Records", "Task Timer", "Announcement"],
    priceDesc:
      "Get dedicated virtual assistant support for half the week, perfect for business needing flexible help with task and projects without the commitment of full-time hours.",
    link: "/free-trial",
    isActive: 0,
    btnText: "CHOOSE PLAN",

    customCss: "text-primary",
  },
  {
    icon: <FaRegThumbsUp className="text-[50px] mx-auto mb-4 text-light" />,
    title: "Full-Time",
    rate: "$8 / Hour",
    duration: "(40 hours per week)",
    info: ["Employee Records", "Task Timer", "Announcement"],
    priceDesc:
      "Enjoy full-time virtual assistance, providing your business with consistent, reliable support to mannage tasks, streamline operations, and increase productivity throughout the week at a mose cost-effective rate.",
    link: "/free-trial",
    isActive: 1,
    btnText: "CHOOSE PLAN",

    customCss: "text-light",
  },
];

export const clientSaysTitle = [
  {
    subTitle: "What our",
    mainTitle: "clients say",
  },
];

export const clientSays = [
  {
    clientName: "James Davidson",
    clientDesc: "Managing Director & President",
    clientMessage:
      "Frontline Business Solutions is beyond an exceptional firm. Professional courtesy, responsiveness, competence, and client service are only a few of the many high level qualities that Frontline’s team exhibit. Frontline exemplifies the golden rule by treating its clients as it would like to be treated. Every Frontline team member with whom Avant Advisory Group has dealt has been a true blessing. Finally, based on Avant Advisory Group’s several years of working with Frontline personnel, and especially Mike DeJesus, I can say that they work heartily for their clients as if they are working for the Lord. (Colossians 3:23-24) Thank you for what you do, Frontline!",
    clientLogo: "logo-avant.png",
    clientProfilePic: "jim-davison.png",
  },
  {
    clientName: "Josh Howard",
    clientDesc: "Chief Executive Officer",
    clientMessage:
      "Our partnership with Frontline has been the best financial investment we’ve ever made. The team is absolutely amazing and always goes above and beyond in every area. I highly recommend them!!",
    clientLogo: "logo-ignite.png",
    clientProfilePic: "josh-howard.png",
  },
];
