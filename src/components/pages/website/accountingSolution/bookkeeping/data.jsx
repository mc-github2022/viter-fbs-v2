import { FaCheckCircle } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";

export const banner = [
  {
    bannerTitle: "Keep Your Business",
    bannerTitleBoldText: "Compliant and Financially Organized",
    bannerTextDesc:
      "Our bookkeeping and business compliance services ensure hassle-free tax filings, accurate financial reporting, and adherence to government regulations. Choose from tailored packages designed to meet the needs of startups, small businesses, and corporations, and stay on top of your financial obligations with confidence.",
    bannerBtnText: "CONTACT US",
    bannerBtnLink: "Link",
    bannerImage: "bookkeeping-bg.jpg",
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
    mainTitle: "right choice for your Bookkeeping & Business Compliance needs.",
    webAppImage: "bookkeeping-img.jpg",
    btnText: "Schedule A Demo",
    btnDownloadText: "Download Proposal",
    overviewAtitle: "Comprehensive Compliance Management",
    overviewAtext:
      "Our services ensure you stay compliant with all regulatory requirements, including BIR tax filings, government-mandated contributions (SSS, Pag-IBIG, PhilHealth), and business permit renewals.",
    overviewBtitle: "Flexible Packages for All Business Sizes",
    overviewBtext:
      "We offer tailored packages for startups, small businesses, and corporations, with pricing based on your invoice volume and revenue. Choose the level of support that fits your needs, from basic bookkeeping to premium compliance services.",
    overviewCtitle: "Accurate Financial Reporting",
    overviewCtext:
      "Receive regular, detailed financial reports that provide a clear overview of your business's financial health, helping you make informed decisions while staying up-to-date with tax obligations.",
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
    title: "Sole Proprietor",
    rate: "P12,000",
    duration: "(20 hours per week)",
    info: [
      <div className="text-left flex items-center gap-3">
        <FaCheckCircle className={`text-primary`} />
        <p className="font-bold">DTI Registration</p>
      </div>,
      <div className="text-left">
        <div className="flex items-center gap-3">
          <FaCheckCircle className={`text-primary`} />
          <p className="font-bold">BIR Registratio</p>
        </div>
        <ul className="text-sm ml-7">
          <li>Application for 'Authority to Print'</li>
          <li>Books of Account</li>
          <li>Annual Registration (0605)</li>
        </ul>
      </div>,
      <div className="text-left">
        <div className="flex items-center gap-3">
          <FaCheckCircle className={`text-primary`} />
          <p className="font-bold">LGU Registration</p>
        </div>
        <ul className="text-sm ml-7">
          <li>Barangay Permit</li>
          <li>Mayor's Permit</li>
          <li>Fire and Safety</li>
          <li>Zoning Permit</li>
          <li>Location Clearance</li>
        </ul>
      </div>,
    ],
    priceDesc:
      "Get dedicated virtual assistant support for half the week, perfect for business needing flexible help with task and projects without the commitment of full-time hours.",
    link: "/free-trial",
    isActive: 0,
    btnText: "CHOOSE PLAN",
    customCss: "text-primary",
  },
  {
    icon: <FaRegThumbsUp className="text-[50px] mx-auto mb-4 text-primary" />,
    title: "One Person Corporation (OPC)",
    rate: "P20,000",
    duration: "(40 hours per week)",
    info: [
      <div className="text-left flex items-center gap-3">
        <FaCheckCircle className={`text-primary`} />
        <p className="font-bold">SEC Registration</p>
      </div>,
      <div className="text-left">
        <div className="flex items-center gap-3">
          <FaCheckCircle className={`text-primary`} />
          <p className="font-bold">BIR Registration</p>
        </div>
        <ul className="text-sm ml-7">
          <li>Application for 'Authority to Print'</li>
          <li>Books of Account</li>
          <li>Annual Registration (0605)</li>
          <li>DST Doc Stamp for Subscribed Capital</li>
        </ul>
      </div>,
      <div className="text-left">
        <div className="flex items-center gap-3">
          <FaCheckCircle className={`text-primary`} />
          <p className="font-bold">LGU Registration</p>
        </div>
        <ul className="text-sm ml-7">
          <li>Barangay Permit</li>
          <li>Mayor's Permit</li>
          <li>Fire and Safety</li>
          <li>Zoning Permit</li>
          <li>Location Clearance</li>
          <li>Insurance (CGL)</li>
        </ul>
      </div>,
    ],
    priceDesc:
      "Enjoy full-time virtual assistance, providing your business with consistent, reliable support to mannage tasks, streamline operations, and increase productivity throughout the week at a mose cost-effective rate.",
    link: "/free-trial",
    isActive: 0,
    btnText: "CHOOSE PLAN",
    customCss: "text-primary",
  },
  {
    icon: <FaRegThumbsUp className="text-[50px] mx-auto mb-4 text-primary" />,
    title: "Company Incorporation SEC Registration Only",
    rate: "P20,000",
    duration: "(40 hours per week)",
    info: [
      <div className="text-left flex items-center gap-3">
        <FaCheckCircle className={`text-primary`} />
        <p className="font-bold">SEC Registration</p>
      </div>,
      <div className="text-left">
        <div className="text-left flex items-center gap-3">
          <RiCloseLargeFill className={`text-primary text-[17px]`} />
          <p className="font-bold">BIR Registratio</p>
        </div>
        <ul className="text-sm ml-7">
          <li>Application for 'Authority to Print'</li>
          <li>Books of Account</li>
          <li>Annual Registration (0605)</li>
        </ul>
      </div>,
      <div className="text-left">
        <div className="text-left flex items-center gap-3">
          <RiCloseLargeFill className={`text-primary text-lg`} />
          <p className="font-bold">LGU Registration</p>
        </div>
        <ul className="text-sm ml-7">
          <li>Barangay Permit</li>
          <li>Mayor's Permit</li>
          <li>Fire and Safety</li>
          <li>Zoning Permit</li>
          <li>Location Clearance</li>
        </ul>
      </div>,
    ],
    priceDesc:
      "Enjoy full-time virtual assistance, providing your business with consistent, reliable support to mannage tasks, streamline operations, and increase productivity throughout the week at a mose cost-effective rate.",
    link: "/free-trial",
    isActive: 0,
    btnText: "CHOOSE PLAN",
    customCss: "text-primary",
  },
  {
    icon: <FaRegThumbsUp className="text-[50px] mx-auto mb-4 text-primary" />,
    title: "Company Incorporation No SEC",
    rate: "P25,000",
    duration: "(40 hours per week)",
    info: [
      <div className="text-left">
        <div className="text-left flex items-center gap-3">
          <FaCheckCircle className={`text-primary text-[17px]`} />
          <p className="font-bold">BIR Registration</p>
        </div>
        <ul className="text-sm ml-7">
          <li>Application for 'Authority to Print'</li>
          <li>Books of Account</li>
          <li>Annual Registration (0605)</li>
          <li>DST Doc Stamp for Subscribed Capital</li>
        </ul>
      </div>,
      <div className="text-left">
        <div className="text-left flex items-center gap-3">
          <FaCheckCircle className={`text-primary text-[17px]`} />
          <p className="font-bold">LGU Registration</p>
        </div>
        <ul className="text-sm ml-7">
          <li>Barangay Permit</li>
          <li>Mayor's Permit</li>
          <li>Fire and Safety</li>
          <li>Zoning Permit</li>
          <li>Location Clearance</li>
          <li>Insurance (CGL)</li>
        </ul>
      </div>,
    ],
    priceDesc:
      "Enjoy full-time virtual assistance, providing your business with consistent, reliable support to mannage tasks, streamline operations, and increase productivity throughout the week at a mose cost-effective rate.",
    link: "/free-trial",
    isActive: 0,
    btnText: "CHOOSE PLAN",
    customCss: "text-primary",
  },
  {
    icon: <FaRegThumbsUp className="text-[50px] mx-auto mb-4 text-primary" />,
    title: "Company Incorporation",
    rate: "P35,000",

    duration: "(40 hours per week)",
    info: [
      <div className="text-left flex items-center gap-3">
        <FaCheckCircle className={`text-primary`} />
        <p className="font-bold">SEC Registration</p>
      </div>,
      <div className="text-left">
        <div className="text-left flex items-center gap-3">
          <FaCheckCircle className={`text-primary text-[17px]`} />
          <p className="font-bold">BIR Registration</p>
        </div>
        <ul className="text-sm ml-7">
          <li>Application for 'Authority to Print'</li>
          <li>Books of Account</li>
          <li>Annual Registration (0605)</li>
          <li>DST Doc Stamp for Subscribed Capital</li>
        </ul>
      </div>,
      <div className="text-left">
        <div className="text-left flex items-center gap-3">
          <FaCheckCircle className={`text-primary text-[17px]`} />
          <p className="font-bold">LGU Registration</p>
        </div>
        <ul className="text-sm ml-7">
          <li>Barangay Permit</li>
          <li>Mayor's Permit</li>
          <li>Fire and Safety</li>
          <li>Zoning Permit</li>
          <li>Location Clearance</li>
          <li>Insurance (CGL)</li>
        </ul>
      </div>,
    ],
    priceDesc:
      "Enjoy full-time virtual assistance, providing your business with consistent, reliable support to mannage tasks, streamline operations, and increase productivity throughout the week at a mose cost-effective rate.",
    link: "/free-trial",
    isActive: 0,
    btnText: "CHOOSE PLAN",
    customCss: "text-primary",
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
