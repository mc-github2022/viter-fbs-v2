import { FaRegThumbsUp } from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";

export const banner = [
  {
    bannerTitle: (
      <p>
        Streamline donations securely with our
        <br />
      </p>
    ),
    bannerTitleBoldText: "Online Donation System",
    bannerTextDesc:
      "The Online Donation System is a versatile and integrated platform designed to facilitate and manage donations across various client websites. This system supports both one-time and recurring donations for specific projects as well as general donation funds. It includes comprehensive management consoles for both administrators and donors, ensuring a seamless and efficient donation process.",
    bannerBtnText: "bannerBtnText",
    bannerBtnLink: "Link",
    bannerImage: "OnlineDonation.jpg",
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
    mainTitle: "Online Donation System",
    webAppImage: "ftc-ss.png",
    btnText: "Schedule A Demo",
    btnDownloadText: "Download Proposal",
    overviewAtitle: "Enhanced Efficiency and Decision-Making",
    overviewAtext:
      "Streamline operations by managing donations in a single platform, reducing administrative tasks, and enabling data-driven decisions for better resource allocation and fundraising success.",
    overviewBtitle: "Increased Donor Trust and Retention",
    overviewBtext:
      "Strengthen relationships with donors through transparent transaction history and secure management, leading to long-term support and repeat donations.",
    overviewCtitle: "Higher Donations and Optimized Fund Allocation",
    overviewCtext:
      "Encourage more contributions by allowing donors to see the direct impact of their support, resulting in increased donation amounts and more effective program funding.",
  },
];

export const scope = [
  {
    scopeId: "admin-console",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Admin Console",
    scopeDesc:
      "Allows administrators to manage donations, track funds, and oversee donor activities through an intuitive interface.",
    scopeImage: "hrScopdeSS_overview.jpg",
  },
  {
    scopeId: "donor-console",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Donor Console",
    scopeDesc:
      "Provides donors with a user-friendly platform to make and manage their donations, view history, and update preferences.",
    scopeImage: "hrScopdeSS_overview.jpg",
  },
  {
    scopeId: "donation-designations",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Donation Designations",
    scopeDesc:
      "Enables donations to be directed to specific projects or general funds, offering flexibility for donors.",
    scopeImage: "hrScopdeSS_overview.jpg",
  },
  {
    scopeId: "donors-record",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Donors Record Management",
    scopeDesc:
      "Maintains detailed records of donors, including contact information, donation history, and engagement data.",
    scopeImage: "hrScopdeSS_overview.jpg",
  },
  {
    scopeId: "payment-method",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Payment Method Management",
    scopeDesc:
      "Manages donors' credit card and payment details, ensuring secure and efficient handling of transactions for seamless donation processing.",
    scopeImage: "hrScopdeSS_overview.jpg",
  },
  {
    scopeId: "donations-record",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Donations Record",
    scopeDesc:
      "Keeps a comprehensive log of all donations, tracking amounts, donors, and designated funds.",
    scopeImage: "hrScopdeSS_overview.jpg",
  },
  {
    scopeId: "donations-frequency",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Donation Frequency (One-time, Recurring, Manual)",
    scopeDesc:
      "Allows donors to choose between one-time, recurring, or manual donation schedules for flexibility.",
    scopeImage: "hrScopdeSS_overview.jpg",
  },
  {
    scopeId: "users-setting",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Users Settings",
    scopeDesc:
      "Enables donors and admins to manage account settings, preferences, and personal information securely.",
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
