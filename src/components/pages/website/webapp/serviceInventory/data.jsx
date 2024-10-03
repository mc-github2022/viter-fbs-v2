import { FaRegThumbsUp } from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";

export const banner = [
  {
    bannerTitle: (
      <p>
        Track and manage <br />
        assets with our
      </p>
    ),
    bannerTitleBoldText: "Asset Inventory System",
    bannerTextDesc:
      "Designed to track and manage an organization’s assets and inventory efficiently. It enables businesses to monitor stock levels, track asset locations, manage depreciation, schedule maintenance, and streamline procurement processes, optimizing resource utilization and reducing operational costs.",
    bannerBtnText: "bannerBtnText",
    bannerBtnLink: "Link",
    bannerImage: "InventorySystem.jpg",
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
    imageName: "web-obich.png",
  },
  {
    imageName: "AKA-Global.png",
  },
  {
    imageName: "DTOD-BPO.png",
  },
  {
    imageName: "web-victorious-Virtual-Hub.png",
  },
];

export const webAppOverview = [
  {
    subtitle: "Why choose our",
    mainTitle: "Asset Inventory System",
    webAppImage: "asset-inventory-ss.png",
    btnText: "Schedule A Demo",
    btnDownloadText: "Download Proposal",
    overviewAtitle: "Improved Asset Visibility and Control",
    overviewAtext:
      "By maintaining detailed and organized asset records, organizations enhance visibility, streamline asset management processes, and ensure efficient utilization and maintenance of their resources.",
    overviewBtitle: "Enhanced Accountability and Tracking",
    overviewBtext:
      "By clearly defining asset assignments, organizations improve accountability, streamline asset tracking, and reduce loss or mismanagement of resources.",
    overviewCtitle: "Improved Decision-Making and Management",
    overviewCtext:
      "By generating accurate and detailed asset reports, organizations enhance their ability to make informed decisions, optimize asset usage, and manage resources more effectively.",
  },
];

export const scope = [
  {
    scopeId: "asset-management",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Asset Management",
    scopeDesc:
      "Facilitates the tracking and management of organizational assets, including their details, locations, and status, to ensure effective utilization.",
    scopeImage: "hrScopdeSS_overview.jpg",
  },
  {
    scopeId: "assignment-asset",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Assignment of Asset",
    scopeDesc:
      "Allows for the assignment of assets to employees or departments, maintaining a clear record of asset ownership and accountability.",
    scopeImage: "hrScopdeSS_overview.jpg",
  },
  {
    scopeId: "reports",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Reports",
    scopeDesc:
      "Generates comprehensive reports on asset status, inventory levels, and depreciation, providing valuable insights for decision-making and resource planning.",
    scopeImage: "hrScopdeSS_overview.jpg",
  },
  {
    scopeId: "settings",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Settings",
    scopeDesc:
      "Provides customization options for system configuration to meet the specific needs of the organization and enhance user experience.",
    scopeImage: "hrScopdeSS_overview.jpg",
  },
];

export const pricing = [
  {
    icon: <FaRegThumbsUp className="text-[50px] mx-auto mb-4" />,
    title: "Free Trial",
    rate: "PHP 0 / 7 days",
    note: "",
    info: ["Employee Records", "Task Timer", "Announcement"],
    link: "/free-trial",
    isActive: 0,
    customCss: "text-primary",
  },
  {
    icon: <FaRegThumbsUp className="text-[50px] mx-auto mb-4" />,
    title: "Basic",
    rate: "PHP 20 / Emp / Mo",
    note: "31 and above employees",
    info: ["Employee Recordsxx", "Task Timerxx", "Announcementxx"],
    link: "/basic",
    isActive: 1,
    customCss: "",
  },

  {
    icon: <FaRegThumbsUp className="text-[50px] mx-auto mb-4" />,
    title: "Premium",
    rate: "PHP 70 / Emp / Mo",
    note: "",
    info: ["Employee xxxx", "Task xxxx", "xxxx"],
    link: "/premium",
    isActive: 0,
    customCss: "text-primary",
  },
];

export const clientSaysTitle = [
  {
    subTitle: "Clients who trusted their",
    mainTitle: "growth with us.",
  },
];

export const clientSays = [
  {
    clientName: "Client Name",
    clientDesc: "Client Desc",
    clientMessage: "The Message",
    clientLogo: "addIamgeNameHere",
    clientProfilePic: "olivia-almarez.png",
  },
];
