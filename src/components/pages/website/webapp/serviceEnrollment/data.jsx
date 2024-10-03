import { FaRegThumbsUp } from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";

export const banner = [
  {
    bannerTitle: "Simplify student enrollment and management with our",
    bannerTitleBoldText: "School Enrollment System.",
    bannerTextDesc:
      "Tailored for educational institutions, this system automates the enrollment process for students. It typically includes features for online registration, course selection, fee payment, document submission, and enrollment status tracking, simplifying administrative tasks for schools and improving the enrollment experience for students and parents.",
    bannerBtnText: "Schedule a Demo",
    bannerBtnLink: "Link",
    bannerImage: "SchoolEnrollment.jpg",
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
    subtitle: "Why choose our online",
    mainTitle: "School Enrollment System",
    webAppImage: "enrollment-ss.png",
    btnText: "Schedule A Demo",
    btnDownloadText: "Download Proposal",
    overviewAtitle: "Streamlined Registration and Enrollment",
    overviewAtext:
      "Automate the enrollment process with easy online sign-ups, reducing administrative burden and ensuring a smooth experience for students and staff.",
    overviewBtitle: "Comprehensive Record Management",
    overviewBtext:
      "Maintain detailed and organized records for both students and parents, facilitating efficient engagement and communication while supporting better academic monitoring.",
    overviewCtitle: "Effective Communication and Coordination",
    overviewCtext:
      "Enhance coordination among departments and stakeholders through timely notifications about enrollment progress and requirements, ensuring all parties are informed and aligned.",
  },
];

export const scope = [
  {
    scopeId: "registration",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Registration and Enrollment",
    scopeDesc:
      "Automates the student registration and enrollment process, enabling easy online sign-ups and registration.",
    scopeImage: "hrScopdeSS_overview.jpg",
  },
  {
    scopeId: "student-record",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Students Record Management",
    scopeDesc:
      "Maintains comprehensive student records, including personal details, enrollment status, and academic history.",
    scopeImage: "hrScopdeSS_overview.jpg",
  },
  {
    scopeId: "parent-record",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Parents Record Management",
    scopeDesc:
      "Maintains detailed records of parents, including contact information, student associations, and communication history, ensuring efficient parent engagement.",
    scopeImage: "hrScopdeSS_overview.jpg",
  },
  {
    scopeId: "notification",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Notification of Enrollment Process",
    scopeDesc:
      "Notifies departments such as the registrar, principal, finance, parents, and students about the enrollment progress, including requirements and documentation for submission, ensuring smooth coordination.",
    scopeImage: "hrScopdeSS_overview.jpg",
  },
  {
    scopeId: "user-management",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "User Management",
    scopeDesc:
      "Manages user roles and permissions, ensuring secure access for administrators, teachers, students, and parents.",
    scopeImage: "hrScopdeSS_overview.jpg",
  },
  {
    scopeId: "settings",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Settings",
    scopeDesc:
      "Provides customization options for system configuration to meet the specific needs of the institution.",
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
