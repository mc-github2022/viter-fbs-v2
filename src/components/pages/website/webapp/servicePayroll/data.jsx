import { FaRegThumbsUp } from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";

export const banner = [
  {
    bannerTitle: (
      <p>
        Simplify your payroll processing with our
        <br />
      </p>
    ),
    bannerTitleBoldText: "Online Payroll System",
    bannerTextDesc:
      "Our Online Payroll System simplifies payroll management for Philippine businesses. It automates salary calculations, tax compliance, and government contributions, ensuring accuracy and timely payouts. With real-time reporting and employee self-service access to payslips, it reduces HR workload and boosts efficiency.",
    bannerBtnText: "SCHEDULE A DEMO",

    bannerBtnLink: "Link",
    bannerImage: "ServicesBanner.jpg",
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
    imageName: "AKA-Global.png",
  },
  {
    imageName: "bensHalo.png",
  },
  {
    imageName: "DTOD-BPO.png",
  },
];

export const webAppOverview = [
  {
    subtitle: "Why choose our",
    mainTitle: "Online Payroll System",
    webAppImage: "payroll-ss.png",
    btnText: "SCHEDULE A DEMO",
    btnDownloadText: "Download Proposal",
    overviewAtitle: "Enhanced Accuracy and Reduced Errors",
    overviewAtext:
      "Our system automates payroll calculations, ensuring precise processing of hours worked, overtime, and deductions. This minimizes payroll disputes and errors, increasing employee satisfaction and reducing administrative workload.",
    overviewBtitle: "Cost Efficiency and Compliance",
    overviewBtext:
      "Centralized payroll management cuts administrative costs and ensures compliance with local labor laws and tax regulations. This saves time, reduces potential penalties, and enhances trust among employees by ensuring accurate and timely compensation.",
    overviewCtitle: "Secure and Transparent Payroll",
    overviewCtext:
      "With robust security features, our system protects sensitive employee and financial data while ensuring accurate, compliant payroll processes. This fosters trust among stakeholders by guaranteeing transparency and data protection.",
  },
];

export const scope = [
  {
    scopeId: "starter",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Biometric Data Import Capability",
    scopeDesc:
      "Our Payroll System offers a capability feature that allows seamless importing of time-in and time-out data directly from biometric systems, ensuring accurate and automated attendance tracking for payroll processing.",
    scopeImage: "payroll-biometrics.png",
  },
  {
    scopeId: "employee-record",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Employee Record Management",
    scopeDesc:
      "Our Payroll System includes an Employee Record Management feature that centralizes all essential employee information, including personal details, salary data, tax information, benefits, and employment history, within a secure digital platform.",
    scopeImage: "payroll-employee-record.png",
  },
  {
    scopeId: "employee-earning",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Employee Earnings Recording",
    scopeDesc:
      "Our Payroll System includes an Earnings Recording feature that allows for the detailed encoding of all types of employee earnings, including regular salary, overtime, bonuses, allowances, commissions, and other compensations needed for accurate payroll computation.",
    scopeImage: "payroll-earnings.png",
  },
  {
    scopeId: "deduction-record",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Deductions Recording",
    scopeDesc:
      "Our Payroll System includes a Deductions Recording feature that enables the encoding of all mandatory government deductions (such as taxes, SSS, PhilHealth, and Pag-IBIG) as well as optional deductions (such as loans, benefits, and company-specific charges) required for accurate payroll computation.",
    scopeImage: "payroll-deductions.png",
  },
  {
    scopeId: "holiday-record",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Holidays Recording",
    scopeDesc:
      "Our Payroll System includes a holiday recording feature that allows for the encoding of all regular and special non-working holidays, ensuring that holiday pay computations are accurate and aligned with company policies and labor regulations.",
    scopeImage: "payroll-holiday.png",
  },
  {
    scopeId: "access-control",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "User Access and Role Management",
    scopeDesc:
      "Our Payroll System includes a user recording feature that provides secure access control, allowing only authorized users—such as payroll officers, HR managers, and finance staff—to access and manage payroll data, ensuring data security and confidentiality.",
    scopeImage: "payroll-user-access.png",
  },
  {
    scopeId: "compliance-report",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Compliance Reporting Capability",
    scopeDesc:
      "Our Payroll System includes a Reporting feature that generates accurate and detailed reports needed for easy compliance with the requirements of government agencies such as SSS, BIR, Pag-IBIG, and PhilHealth.",
    scopeImage: "payroll-report.png",
  },
];

export const pricing = [
  {
    icon: <FaRegThumbsUp className="text-[50px] mx-auto mb-4" />,
    title: "Online Payroll System",
    rate: "Starts at ₱40",
    note: "Per Employee Per Month",
    info: [
      "Biometric Data Import",
      "Record Management",
      "Earnings Recording",
      "Deduction Recording",
      "Holidays Recording",
      "Access and Role Management",
      "Reporting",
    ],
    link: "/free-trial",
    isActive: 0,
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
    clientName: "Kimbell John Reyes",
    clientDesc: "Chief Executive Officer",
    clientMessage:
      "Frontline Business Solutions is indeed a partner to innovative success of a company. A connection of employer and employee. ",
    clientLogo: "AKA-Global.png",
    clientProfilePic: "kimbell-reyes.png",
  },
  {
    clientName: "Dennis Ray Siano",
    clientDesc: "Chief Executive Officer",
    clientMessage:
      "Excellent HRIS Provider with Outstanding Support! Their platform has streamlined our HR processes, making tasks like employee management, payroll, and reporting much more efficient. What truly stands out is the level of support we’ve received from their team. I highly recommend Frontline Business Solutions Inc. for anyone looking for a reliable and supportive HRIS provider. Their service has been excellent, and their team truly understands the needs of their clients. ",
    clientLogo: "DTOD-BPO.png",
    clientProfilePic: "dennis-siano2.png",
  },
];
