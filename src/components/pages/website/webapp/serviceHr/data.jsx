import { FaRegThumbsUp } from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";

export const banner = [
  {
    bannerTitle: (
      <p>
        Smarter, faster, <br />
        and more efficient
      </p>
    ),
    bannerTitleBoldText: "HR Information System",
    bannerTextDesc:
      "Experience seamless HR operations and make data-driven decisions that drive organizational success. Designed to centralize all HR data and workflows, our solution simplifies employee records management, leave and attendance tracking, performance evaluations, and HR analytics. ",
    bannerBtnText: "Schedule a Demo",
    bannerBtnLink: "Link",
    bannerImage: "HrisBackground.jpg",
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
    imageName: "bensHalo.png",
  },
  {
    imageName: "DTOD-BPO.png",
  },
  {
    imageName: "web-obich.png",
  },
  {
    imageName: "web-victorious-Virtual-Hub.png",
  },
];

export const webAppOverview = [
  {
    subtitle: "Our web application is perfect",
    mainTitle: "for your HR specific needs",
    webAppImage: "HRISscreenShot.png",
    btnText: "Schedule A Demo",
    btnDownloadText: "Download Proposal",
    overviewAtitle: "Compatibility",
    overviewAtext:
      "Compatible with various timekeeping tools and terminals, both biometric and non-biometric, for easy customization of importing and extracting employee time data.",
    overviewBtitle: "Flexibility",
    overviewBtext:
      "Accessible anytime and anywhere, and fully mobile-ready to accommodate the dynamic needs of your organization.",
    overviewCtitle: "Customizable",
    overviewCtext:
      "Allowing it to be tailored to meet the specific requirements and unique needs of your organization.",
  },
];

export const scope = [
  {
    scopeId: "starter",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Intuitive Dashboard",
    scopeDesc:
      "The system offers a user-friendly dashboard that provides admins and employees with key information at a glance, including leave statuses, announcements, celebrations, team details, and new employee notifications for quick access and improved communication.",
    scopeImage: "hrScopdeSS_overview.jpg",
  },
  {
    scopeId: "employee-record",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Employee 201 File",
    scopeDesc:
      "This allows HR teams to manage and maintain comprehensive 201 files for all employees, storing personal information, employment history, performance records, and other relevant documents in one secure and accessible location.",
    scopeImage: "hrScopdeSS_overview.jpg",
  },
  {
    scopeId: "leave-management",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Leave Management",
    scopeDesc:
      "It includes a Leave Application and Approval feature that enables employees to request leaves and managers to approve or reject them through an intuitive and automated platform, streamlining the entire leave process.",
    scopeImage: "hrScopdeSS_overview.jpg",
  },
  {
    scopeId: "overtime-management",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Overtime Management",
    scopeDesc:
      "This feature tracks employee overtime hours, allowing for easy submission, approval, and monitoring of overtime requests. It ensures accurate compensation and compliance with company policies.",
    scopeImage: "hrScopdeSS_overview.jpg",
  },
  {
    scopeId: "task-management",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Task Management with a Timer",
    scopeDesc:
      "It enables employees to track time spent on various tasks and projects within the application, offering a detailed breakdown of work hours for better project management and productivity analysis.",
    scopeImage: "hrScopdeSS_overview.jpg",
  },
  {
    scopeId: "client-management",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Client Management",
    scopeDesc:
      "This feature helps manage and track records of clients, including maintaining client information and ensuring a smooth and organized client relationship process.",
    scopeImage: "hrScopdeSS_overview.jpg",
  },
  {
    scopeId: "announcement-management",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Announcement Management",
    scopeDesc:
      "This allows organizations to share important news, updates, and upcoming activities with employees through a centralized platform, ensuring everyone stays informed and connected across the company.",
    scopeImage: "hrScopdeSS_overview.jpg",
  },
];

export const pricing = [
  {
    icon: <FaRegThumbsUp className="text-[50px] mx-auto mb-4" />,
    title: "Foreign Clients",
    rate: "Starts at $1",
    note: "Per Employee Per Month",
    info: [
      "Employee 201",
      "Leave Management",
      "Overtime Management",
      "Task Management",
      "Client Management",
      "Announcement",
    ],
    link: "/basic",
    isActive: 0,
    customCss: "text-primary",
  },
  {
    icon: <FaRegThumbsUp className="text-[50px] mx-auto mb-4" />,
    title: "Philippine Clients",
    rate: "Starts at ₱40",
    note: "Per Employee Per Month",
    info: [
      "Employee 201",
      "Leave Management",
      "Overtime Management",
      "Task Management",
      "Client Management",
      "Announcement",
    ],
    link: "/free-trial",
    isActive: 1,
    customCss: "",
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
    clientName: "Kimbell John Reyes",
    clientDesc: "Chief Executive Officer",
    clientMessage:
      "Frontline Business Solutions is indeed a partner to innovative success of a company. A connection of employer and employee. ",
    clientLogo: "AKA-Global.png",
    clientProfilePic: "emilio-macaso.png",
  },
];
