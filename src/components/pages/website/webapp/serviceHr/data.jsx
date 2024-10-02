import { FaRegThumbsUp } from "react-icons/fa6";

export const pricing = [
  {
    icon: <FaRegThumbsUp className="text-[50px] mx-auto mb-4" />,
    title: "Free Trial",
    rate: "PHP 0 / 7 days",
    note: "",
    info: ["Employee Records", "Task Timer", "Announcement"],
    link: "/free-trial",
    isActive: 0,
  },
  {
    icon: <FaRegThumbsUp className="text-[50px] mx-auto mb-4" />,
    title: "Basic",
    rate: "PHP 20 / Emp / Mo",
    note: "31 and above employees",
    info: ["Employee Recordsxx", "Task Timerxx", "Announcementxx"],
    link: "/basic",
    isActive: 1,
  },

  {
    icon: <FaRegThumbsUp className="text-[50px] mx-auto mb-4" />,
    title: "Premium",
    rate: "PHP 70 / Emp / Mo",
    note: "",
    info: ["Employee xxxx", "Task xxxx", "xxxx"],
    link: "/premium",
    isActive: 0,
  },
];

export const headers = [
  {
    subheader: "Choose what's best for your needs",
    header: "Choose what's best for your needsxxxxx",
    section_name: "pricing",
  },

  {
    subheader: "Clients who trusted their",
    header: "Growth with us.",
    section_name: "partners",
  },
  {
    subheader: "Our web Applications is perfect",
    header: "for your HR specific needs.",
    section_name: "overview",
  },
];
