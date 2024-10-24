import { Code } from "lucide-react";
import { IoMdCalculator, IoMdColorPalette } from "react-icons/io";
import { LuCode2 } from "react-icons/lu";
import { PiHeadsetBold } from "react-icons/pi";

export const jobOpening = [
  {
    jobID: "starter",
    theIcon: <LuCode2 className="text-[40px] text-primary" />,
    theTitle: "WORDPRESS DEVELOPER",
    jobCategory: "Full Time",
    onsite: "Onsite",
    jobStatus: "on going",
    jobInfo: (
      <div className="desc">
        <p className="mb-4 font-bold text-dark">Job Qualifitations</p>
        <div>
          <p className="">Fluency in writter and spoken English</p>
          <ul>
            <li>- Good spelling and grammar</li>
            <li>- Good communication skills</li>
            <li>- Ability to proofread work</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    jobID: "accounting",
    theIcon: <IoMdCalculator className="text-[40px] text-primary" />,
    theTitle: "ACCOUNTING ASSOCIATE",
    jobCategory: "Full Time",
    onsite: "Onsite",
    jobStatus: "on going",
    jobInfo: (
      <div className="desc">
        <p className="mb-4 font-bold text-dark">Job Qualifitations</p>
        <div>
          <p className="">Fluency in writter and spoken English</p>
          <ul>
            <li>- Good spelling and grammar</li>
            <li>- Good communication skills</li>
            <li>- Ability to proofread work</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    jobID: "graphic",
    theIcon: <IoMdColorPalette className="text-[40px] text-primary" />,
    theTitle: "GRAPHIC DESIGNER",
    jobCategory: "Full Time",
    onsite: "Onsite",
    jobStatus: "on going",
    jobInfo: (
      <div className="desc">
        <p className="mb-4 font-bold text-dark">Job Qualifitations</p>
        <div>
          <p className="">Fluency in writter and spoken English</p>
          <ul>
            <li>- Good spelling and grammar</li>
            <li>- Good communication skills</li>
            <li>- Ability to proofread work</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    jobID: "socialMedia",
    theIcon: <PiHeadsetBold className="text-[40px] text-primary" />,
    theTitle: "GRAPHIC DESIGNER",
    jobCategory: "Full Time",
    onsite: "Onsite",
    jobStatus: "on going",
    jobInfo: (
      <div className="desc">
        <p className="mb-4 font-bold text-dark">Job Qualifitations</p>
        <div>
          <p className="">Fluency in writter and spoken English</p>
          <ul>
            <li>- Good spelling and grammar</li>
            <li>- Good communication skills</li>
            <li>- Ability to proofread work</li>
          </ul>
        </div>
      </div>
    ),
  },
];
