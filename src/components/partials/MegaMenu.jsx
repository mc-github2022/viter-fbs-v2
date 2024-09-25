import React from "react";
import { CgSmileMouthOpen } from "react-icons/cg";
import {
  FaAddressCard,
  FaBriefcase,
  FaGlobe,
  FaMoneyBill,
  FaSmile,
} from "react-icons/fa";
import { TbArrowBackUp } from "react-icons/tb";
import { TiArrowBackOutline } from "react-icons/ti";

const MegaMenu = () => {
  return (
    <>
      <div className="megaMenu">
        <div className="w-full 2xl:w-[1286px] mx-auto  bg-light rounded-br-xl rounded-bl-xl shadow-2xl">
          <div className="pt-8 px-8 pb-8 rounded-br-xl rounded-bl-xl">
            <div className="backArrow absolute top-2 right-9 md:hidden">
              <button>
                <TiArrowBackOutline className="text-2xl text-dark" />
              </button>
            </div>
            <div className="wrapper md:flex flex-wrap gap-10 justify-start mb-8">
              <div className="menuItem">
                <h2 className="font-semibold mb-2">WEB APPLICATIONS</h2>
                <ul className="ml-3 text-sm ">
                  <li>HR Information System</li>
                  <li>Payroll System</li>
                  <li>Customer Relations Management</li>
                  <li>School Enrollment System</li>
                  <li>Asset Inventory System</li>
                </ul>
              </div>
              <div className="menuItem">
                <h2 className="font-semibold  mb-2">ACCOUNTING SOLUTIONS</h2>
                <ul className="ml-3 text-sm">
                  <li>Business Registration</li>
                  <li>Compliance</li>
                  <li>Bookkeeping</li>
                </ul>
              </div>
              <div className="menuItem">
                <h2 className="font-semibold  mb-2">
                  VIRTUAL ASSISTANT SOLUTIONS
                </h2>
                <ul className="ml-3 text-sm">
                  <li>Administrative Solutions</li>
                  <li>Marketing & Social Media</li>
                  <li>Technical Support</li>
                  <li>Creative Support</li>
                  <li>Research Services</li>
                  <li>Miscellaneous Services</li>
                </ul>
              </div>
              <div className="menuItem">
                <h2 className="font-semibold  mb-2">
                  VIRTUAL ASSISTANT SOLUTIONS
                </h2>
                <ul className="ml-3 text-sm">
                  <li>College On-the-job Training</li>
                  <li>High School Work Immersion</li>
                  <li>Continuing Studies</li>
                </ul>
              </div>
              <div className="menuItem">
                <h2 className="font-semibold  mb-2">
                  WEB DESIGN AND DEVELOPMENT
                </h2>
                <ul className="ml-3 text-sm">
                  <li>WordPress</li>
                  <li>Single Page Website</li>
                  <li>Web Design</li>
                </ul>
              </div>
            </div>
            <div className="specialOffer bg-customGray p-3 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Special Offer</h3>
              <div className="wrapper grid grid-cols-2 lg:grid-cols-5 gap-3">
                <div className="offerItem bg-light p-2 rounded-xl grid place-items-center">
                  <div>
                    <ul className="logoAndTitle flex gap-2 items-center text-dark mb-3">
                      <li>
                        <FaAddressCard className="text-[32px] text-primary" />
                      </li>
                      <li className="text-xs">
                        Business <br /> Registration
                      </li>
                    </ul>
                    <p className="font-bold text-dark">Startup Package</p>
                  </div>
                </div>
                <div className="offerItem bg-light p-2  rounded-xl grid place-items-center">
                  <div>
                    <ul className="logoAndTitle flex gap-2 items-center text-dark mb-3">
                      <li>
                        <FaGlobe className="text-[32px] text-primary" />
                      </li>
                      <li className="text-xs">
                        One-Page <br /> Website
                      </li>
                    </ul>
                    <p className="font-bold text-dark">30 Days Trial</p>
                  </div>
                </div>
                <div className="offerItem bg-light p-2  rounded-xl grid place-items-center">
                  <div>
                    <ul className="logoAndTitle flex gap-2 items-center text-dark mb-3">
                      <li>
                        <FaBriefcase className="text-[32px] text-primary" />
                      </li>
                      <li className="text-xs">
                        Human Resource <br /> Information System
                      </li>
                    </ul>
                    <p className="font-bold text-dark">P40 / Employee / Mo.</p>
                  </div>
                </div>
                <div className="offerItem bg-light p-2  rounded-xl grid place-items-center">
                  <div>
                    <ul className="logoAndTitle flex gap-2 items-center text-dark mb-3">
                      <li>
                        <FaMoneyBill className="text-[32px] text-primary" />
                      </li>
                      <li className="text-xs">
                        Online Payroll <br /> System
                      </li>
                    </ul>
                    <p className="font-bold text-dark">P40 / Employee / Mo.</p>
                  </div>
                </div>
                <div className="offerItem bg-light p-2  rounded-xl grid place-items-center">
                  <div>
                    <ul className="logoAndTitle flex gap-2 items-center text-dark mb-3">
                      <li>
                        <FaSmile className="text-[32px] text-primary" />
                      </li>
                      <li className="text-xs">
                        Social Media <br /> Management
                      </li>
                    </ul>
                    <p className="font-bold text-dark">10% Discount</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaMenu;
