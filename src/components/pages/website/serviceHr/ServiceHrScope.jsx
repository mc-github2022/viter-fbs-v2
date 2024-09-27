import React from "react";
import { IoChevronDown } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";

const ServiceHrScope = () => {
  const [accordianItem, setAccordionItem] = React.useState("");

  const [accordion, setAccordion] = React.useState(false);
  const handleAccordion = (item) => {
    setAccordion(true);
    setAccordionItem(item);
  };
  return (
    <>
      <section className="ServiceHrScope py-20">
        <div className="customContainer">
          <div>
            <p>What makes this web app</p>
            <h2 className="text-[35px] font-semibold text-primary leading-[1.1] mb-8">
              a lifesaver?
            </h2>
          </div>
          <div className="warpper grid grid-cols-2">
            <ul>
              <li className="overflow-hidden  border-b border-[#e9e9e9]">
                <div
                  className="flex justify-between items-center  group hover:bg-primary cursor-pointer py-2"
                  onClick={() => handleAccordion("dassboard")}
                >
                  <div className="flex items-center gap-4">
                    <MdOutlineDashboard className="text-3xl text-primary group-hover:text-light" />
                    <p
                      className={`${
                        accordion && accordianItem === "dassboard"
                          ? "bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]"
                          : "text-dark"
                      } text-xl  group-hover:text-light font-semibold cursor-pointer `}
                    >
                      IntuitiveDashboard
                    </p>
                  </div>
                  <IoChevronDown className="group-hover:text-light" />
                </div>
                <div
                  className={`${
                    accordion && accordianItem === "dassboard"
                      ? "min-h-[170px]"
                      : "h-0 py-0"
                  } accordionContent py-4`}
                >
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quaerat reprehenderit est amet quisquam autem tempore
                    pariatur, deleniti dolores cumque corporis mollitia!
                    Commodi, corrupti quaerat! Debitis, repudiandae asperiores.
                    Harum praesentium omnis aliquam nostrum consectetur dolorum
                    eius error molestiae. Sunt aut accusantium eos culpa illum
                    magni, eum velit molestias veritatis cumque. Nemo?
                  </p>
                  <a href="#" className="btn bg-primary text-light">
                    Schedule a Demo
                  </a>
                </div>
              </li>
              <li className="overflow-hidden border-b border-[#e9e9e9]">
                <div
                  className="flex justify-between items-center  group hover:bg-customGray cursor-pointer border-b border-[#e9e9e9] py-2"
                  onClick={() => handleAccordion("201file")}
                >
                  <div className="flex items-center gap-4">
                    <MdOutlineDashboard className="text-3xl text-primary group-hover:text-light" />
                    <p
                      className={`${
                        accordion && accordianItem === "201file"
                          ? "bg-gradient-to-r from-primary to-secondary bg-clip-text text-[transparent]"
                          : "text-dark"
                      } text-xl  group-hover:text-light font-semibold cursor-pointer `}
                    >
                      IntuitiveDashboard
                    </p>
                  </div>
                  <IoChevronDown className="group-hover:text-light" />
                </div>
                <div
                  className={`${
                    accordion && accordianItem === "201file"
                      ? "min-h-[170px]"
                      : "h-0 py-0"
                  } accordionContent py-4`}
                >
                  <p className="mb-8">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quaerat reprehenderit est amet quisquam autem tempore
                    pariatur, deleniti dolores cumque corporis mollitia!
                    Commodi, corrupti quaerat! Debitis, repudiandae asperiores.
                    Harum praesentium omnis aliquam nostrum consectetur dolorum
                    eius error molestiae. Sunt aut accusantium eos culpa illum
                    magni, eum velit molestias veritatis cumque. Nemo?
                  </p>
                  <a href="#" className="btn bg-primary text-light">
                    Schedule a Demo
                  </a>
                </div>
              </li>
            </ul>
            <img src="" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHrScope;
