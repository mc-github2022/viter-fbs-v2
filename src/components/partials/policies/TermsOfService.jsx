import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { GoDotFill } from "react-icons/go";
import { devBaseImgUrl } from "../../helpers/functions-general";

const TermsOfService = () => {
  return (
    <>
      <Header />
      <section className="career pt-28 pb-16 md:pt-40 md:pb-20">
        <div className="customContainer">
          <div className="text-center">
            <h2 className="text-primary mb-8 text-[clamp(30px,5vw,40px)] font-semibold">
              Terms of Service
            </h2>
            <p className="font-bold text-[clamp(14px,5vw,18px)] pb-4">
              Terms of Service (ToS) for Frontline Business Solutions Web
              Applications and Websites
            </p>
            <p className="w-[90%] m-auto mb-20">
              This Terms of Service (“Agreement”) is entered into by and between
              Frontline Business Solutions (“Frontline Business Solutions,”
              “we,” or “us”) and you (“User” or “you”). This Agreement governs
              your use of all web applications and websites developed by
              Frontline Business Solutions, whether accessed through
              subscription or provided as one-time development services.
            </p>
          </div>
          <div className="wrapper">
            <div className="my-10">
              <p className="font-bold text-[clamp(14px,5vw,16px)] pb-4">
                1. Acceptance of Terms
              </p>
              <p>
                By accessing or using any of the web applications or websites
                developed by Frontline Business Solutions, you agree to be bound
                by the terms and conditions of this Agreement. If you do not
                agree to these terms, you may not access or use the services.
              </p>
            </div>
            <div className="my-10">
              <p className="font-bold text-[clamp(14px,5vw,16px)] pb-4">
                2. Description of Services
              </p>
              <p>
                Frontline Business Solutions provides web applications and
                websites for various purposes, including but not limited to
                [provide brief description of the services offered]. These
                services may be accessed through subscription or provided as
                one-time development services, as agreed upon between Frontline
                Business Solutions and the User.
              </p>
            </div>
            <div className="my-10">
              <p className="font-bold text-[clamp(14px,5vw,16px)] pb-4">
                3. User Registration
              </p>
              <p>
                In order to access certain features of the web applications or
                websites, you may be required to register for an account. You
                agree to provide accurate and complete information during the
                registration process and to update such information to keep it
                accurate and current.
              </p>
            </div>
            <div className="my-10">
              <p className="font-bold text-[clamp(14px,5vw,16px)] pb-4">
                4. User Responsibilities
              </p>
              <p>
                You are responsible for maintaining the security of your account
                credentials and for all activities that occur under your
                account. You agree to notify Frontline Business Solutions
                immediately of any unauthorized use of your account or any other
                breach of security.
              </p>
            </div>
            <div className="my-10">
              <p className="font-bold text-[clamp(14px,5vw,16px)] pb-4">
                5. Payment Terms
              </p>
              <p>
                If you have subscribed to access the web applications or
                websites, you agree to pay all applicable fees in accordance
                with the pricing terms agreed upon by the parties. Failure to
                pay fees may result in suspension or termination of your access
                to the services.
              </p>
            </div>
            <div className="my-10">
              <p className="font-bold text-[clamp(14px,5vw,16px)] pb-4">
                6. Intellectual Property
              </p>
              <p>
                All content, materials, and intellectual property rights
                associated with the web applications and websites developed by
                Frontline Business Solutions are owned by Frontline Business
                Solutions or its licensors. You are granted a limited,
                non-exclusive, non-transferable license to use the services for
                your internal business purposes.
              </p>
            </div>
            <div className="my-10">
              <p className="font-bold text-[clamp(14px,5vw,16px)] pb-4">
                7. Privacy Policy
              </p>
              <p>
                Your use of the services is subject to Frontline Business
                Solutions’ Privacy Policy, which can be found at
                www.frontlinebusiness.com.ph/privacy-policy/. By using the
                services, you consent to the collection, use, and disclosure of
                your personal information as described in the Privacy Policy.
              </p>
            </div>
            <div className="my-10">
              <p className="font-bold text-[clamp(14px,5vw,16px)] pb-4">
                8. Disclaimer of Warranties
              </p>
              <p>
                The services are provided “as is” without any warranty of any
                kind, whether express, implied, or statutory. Frontline Business
                Solutions disclaims all warranties, including but not limited to
                warranties of merchantability, fitness for a particular purpose,
                and noninfringement of third-party rights.
              </p>
            </div>
            <div className="my-10">
              <p className="font-bold text-[clamp(14px,5vw,16px)] pb-4">
                9. Limitation of Liability
              </p>
              <p>
                In no event shall Frontline Business Solutions be liable for any
                indirect, incidental, special, consequential, or exemplary
                damages arising out of or in connection with the services, even
                if Frontline Business Solutions has been advised of the
                possibility of such damages.
              </p>
            </div>
            <div className="my-10">
              <p className="font-bold text-[clamp(14px,5vw,16px)] pb-4">
                10. Termination
              </p>
              <p>
                Frontline Business Solutions may terminate or suspend your
                access to the services at any time, with or without cause or
                notice, including if you breach any provision of this Agreement.
                Upon termination, you agree to cease all use of the services.
              </p>
            </div>
            <div className="my-10">
              <p className="font-bold text-[clamp(14px,5vw,16px)] pb-4">
                11. Governing Law
              </p>
              <p>
                This Agreement shall be governed by and construed in accordance
                with the Philippine Law, without regard to its conflict of laws
                principles.
              </p>
            </div>
            <div className="my-10">
              <p className="font-bold text-[clamp(14px,5vw,16px)] pb-4">
                12. Changes to Terms
              </p>
              <p>
                Frontline Business Solutions reserves the right to update or
                modify this Agreement at any time without prior notice. Your
                continued use of the services after any such changes constitutes
                your acceptance of the new terms.
              </p>
            </div>
            <div className="my-10">
              <p className="font-bold text-[clamp(14px,5vw,16px)] pb-4">
                13. Entire Agreement
              </p>
              <p>
                This Agreement constitutes the entire agreement between
                Frontline Business Solutions and you concerning the subject
                matter hereof, and supersedes all prior and contemporaneous
                agreements and understandings, whether written or oral.
              </p>
            </div>

            <div className="my-10">
              <p>
                If you have any questions about this Agreement, please contact
                us at <br></br> info@frontlinebusiness.com.ph
              </p>
            </div>

            <div className="my-10">
              <div>
                <img
                  src={`${devBaseImgUrl}/logo.png`}
                  alt="Frontline Business Solutions"
                  className="py-2"
                />
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

export default TermsOfService;
