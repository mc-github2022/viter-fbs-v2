import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { GoDotFill } from "react-icons/go";

const EULA = () => {
  return (
    <>
      <Header />
      <section className="career pt-40 pb-20">
        <div className="customContainer">
          <div className="text-center">
            <h2 className="text-primary mb-8 text-[clamp(30px,5vw,40px)] font-semibold">
              End-User License Agreement
            </h2>
            <p className="font-bold text-[clamp(14px,5vw,18px)] pb-4">
              End-User License Agreement (EULA) for Frontline Business Solutions
              Web Applications and Websites
            </p>
            <p className="w-[90%] m-auto mb-20">
              This End-User License Agreement (“Agreement”) is entered into by
              and between Frontline Business Solutions (“Frontline Business
              Solutions”) and you (“User”). This Agreement governs your use of
              all web applications and websites developed by Frontline Business
              Solutions, whether accessed through subscription or provided as
              one-time development services.
            </p>
          </div>
          <div className="wrapper">
            <div className="my-10">
              <p className="font-bold text-[clamp(14px,5vw,16px)] pb-4">
                1. License Grant
              </p>
              <p>
                Subject to the terms and conditions of this Agreement, Frontline
                Business Solutions grants User a non-exclusive, non-transferable
                license to access and use the web applications and websites
                developed by Frontline Business Solutions (the “Software”)
                solely for User’s internal business purposes.
              </p>
            </div>
            <div className="my-10">
              <p className="font-bold text-[clamp(14px,5vw,16px)] pb-4">
                2. Restrictions
              </p>
              <p className="pb-4">User shall not:</p>
              <ul className="flex flex-col gap-2 pl-12 list-disc">
                <li>
                  Modify, adapt, translate, or create derivative works based
                  upon the Software.
                </li>
                <li>
                  Reverse engineer, decompile, disassemble, or otherwise attempt
                  to derive the source code of the Software.
                </li>
                <li>
                  Remove any copyright, trademark, or other proprietary rights
                  notice from the Software.
                </li>
                <li>
                  Share, sell, sublicense, distribute, or otherwise transfer the
                  Software to any third party.
                </li>
                <li>
                  Use the Software in any manner that violates applicable laws
                  or regulations.
                </li>
              </ul>
            </div>
            <div className="my-10">
              <p className="font-bold text-[clamp(14px,5vw,16px)] pb-4">
                3. Ownership
              </p>
              <p>
                User acknowledges and agrees that Frontline Business Solutions
                retains all right, title, and interest in and to the Software,
                including all intellectual property rights therein. This
                Agreement does not convey to User any rights of ownership in or
                related to the Software, except for the limited license granted
                herein.
              </p>
            </div>
            <div className="my-10">
              <p className="font-bold text-[clamp(14px,5vw,16px)] pb-4">
                4. Fees and Payment
              </p>
              <p>
                If User has subscribed to access the Software, User shall pay
                all applicable fees in accordance with the pricing terms agreed
                upon by the parties. Failure to pay fees may result in
                suspension or termination of User’s access to the Software.
              </p>
            </div>
            <div className="my-10">
              <p className="font-bold text-[clamp(14px,5vw,16px)] pb-4">
                5. Support and Maintenance
              </p>
              <p>
                Frontline Business Solutions may, but is not obligated to,
                provide support and maintenance services for the Software. Any
                such services provided shall be subject to separate terms and
                conditions or service level agreements agreed upon by the
                parties.
              </p>
            </div>
            <div className="my-10">
              <p className="font-bold text-[clamp(14px,5vw,16px)] pb-4">
                6. Warranty Disclaimer
              </p>
              <p>
                The software is provided “AS IS” without any warranty of any
                kind, whether express, implied, or statutory. Frontline Business
                Solutions disclaims all warranties, including but not limited to
                warranties of merchantability, fitness for a particular purpose,
                and noninfringement of third-party rights.
              </p>
            </div>
            <div className="my-10">
              <p className="font-bold text-[clamp(14px,5vw,16px)] pb-4">
                7. Limitation of Liability
              </p>
              <p>
                In no event shall Frontline Business Solutions be liable for any
                indirect, incidental, special, consequential, or exemplary
                damages arising out of or in connection with this agreement,
                including but not limited to procurement of substitute goods or
                services, loss of profits, loss of use, data, or other
                intangible losses, even if frontline business solutions has been
                advised of the possibility of such damages.
              </p>
            </div>
            <div className="my-10">
              <p className="font-bold text-[clamp(14px,5vw,16px)] pb-4">
                8. Termination
              </p>
              <p>
                Frontline Business Solutions may terminate this Agreement
                immediately upon written notice if User breaches any provision
                of this Agreement. Upon termination, User shall cease all use of
                the Software and destroy all copies of the Software in User’s
                possession or control.
              </p>
            </div>
            <div className="my-10">
              <p className="font-bold text-[clamp(14px,5vw,16px)] pb-4">
                9. Governing Law
              </p>
              <p>
                This Agreement shall be governed by and construed in accordance
                with the Philippine Law, without regard to its conflict of laws
                principles.
              </p>
            </div>
            <div className="my-10">
              <p className="font-bold text-[clamp(14px,5vw,16px)] pb-4">
                10. Entire Agreement
              </p>
              <p>
                This Agreement constitutes the entire agreement between
                Frontline Business Solutions and User concerning the subject
                matter hereof, and supersedes all prior and contemporaneous
                agreements and understandings, whether written or oral.
              </p>
            </div>

            <div className="my-10">
              <p>
                By accessing or using the Software, User acknowledges that User
                has read, understood, and agrees to be bound by this Agreement.
              </p>
            </div>

            <div className="my-10">
              <div>
                <img src="../../public/img/logo.png" alt="" className="py-2" />
                <ul>
                  <li>Baloc Road, Brgy. San Ignacio, San Pablo City,</li>
                  <li>Laguna, Philippines 4000</li>
                  <li>Version: April 2024</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default EULA;
