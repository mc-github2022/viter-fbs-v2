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
    subtitle: "sectionSubtitle",
    mainTitle: "sectionMainTitle",
    webAppImage: "addImageName",
    btnText: "Schedule A Demo",
    btnDownloadText: "Download Proposal",
    overviewAtitle: "titleA",
    overviewAtext: "textA",
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
    scopeId: "dassboard",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Intuitive Dashboard",
    scopeDesc: "text",
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
