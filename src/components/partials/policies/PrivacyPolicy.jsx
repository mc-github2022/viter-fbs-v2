import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { GoDotFill } from "react-icons/go";
import { devBaseImgUrl } from "../../helpers/functions-general";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <section className="career pt-28 pb-16 md:pt-40 md:pb-20">
        <div className="customContainer">
          <div className="text-center">
            <h2 className="text-primary mb-8 text-[clamp(30px,5vw,40px)] font-semibold">
              Privacy Policy
            </h2>
            <p className="font-bold text-[clamp(14px,5vw,18px)] pb-4">
              Privacy Policy for Frontline Business Solutions Web Applications
              and Websites
            </p>
            <p className="w-[90%] m-auto mb-20">
              This Privacy Policy (“Policy”) applies to all web applications and
              websites developed by Frontline Business Solutions (“Frontline
              Business Solutions,” “we,” or “us”). This Policy describes how we
              collect, use, and disclose personal information from users of our
              services, whether accessed through subscription or provided as
              one-time development projects.
            </p>
          </div>
          <div className="wrapper">
            <div className="my-10">
              <p className="font-bold text-[clamp(14px,5vw,16px)] pb-4">
                1. Information We Collect
              </p>
              <p className="pb-4">
                We may collect the following types of personal information from
                users:
              </p>
              <ul className="flex flex-col gap-2 pl-12 list-disc">
                <li>
                  Contact Information: such as name, email address, mailing
                  address, and phone number.
                </li>
                <li>
                  Account Information: such as username, password, and other
                  credentials used to access our services.
                </li>
                <li>
                  Payment Information: such as credit card details or other
                  payment account information.
                </li>
                <li>
                  Usage Information: such as IP address, browser type, device
                  type, operating system, and other usage data collected
                  automatically when you interact with our services.
                </li>
                <li>
                  Communications: such as correspondence and other
                  communications between you and Frontline Business Solutions.
                </li>
              </ul>
            </div>
            <div className="my-10">
              <p className="font-bold text-[clamp(14px,5vw,16px)] pb-4">
                2. How We Use Your Information
              </p>
              <p className="pb-4">
                We may use the personal information we collect for the following
                purposes:
              </p>
              <ul className="flex flex-col gap-2 pl-12 list-disc">
                <li>To provide and maintain our services.</li>
                <li>To process transactions and payments.</li>
                <li>
                  To communicate with you about your account and our services.
                </li>
                <li>
                  To personalize your experience and improve our services.
                </li>
                <li>
                  To respond to your inquiries and provide customer support.
                </li>
                <li>To comply with legal and regulatory requirements.</li>
              </ul>
            </div>
            <div className="my-10">
              <p className="font-bold text-[clamp(14px,5vw,16px)] pb-4">
                3. Data Sharing and Disclosure
              </p>
              <p className="pb-4">
                We may share your personal information with third parties in the
                following circumstances:
              </p>
              <ul className="flex flex-col gap-2 pl-12 list-disc">
                <li>
                  With service providers and business partners who assist us in
                  providing and managing our services.
                </li>
                <li>
                  With legal and regulatory authorities when required to comply
                  with applicable laws and regulations.
                </li>
                <li>With your consent or at your direction.</li>
              </ul>
            </div>
            <div className="my-10">
              <p className="font-bold text-[clamp(14px,5vw,16px)] pb-4">
                4. Data Retention
              </p>
              <p>
                We will retain your personal information for as long as
                necessary to fulfill the purposes outlined in this Policy,
                unless a longer retention period is required or permitted by
                law.
              </p>
            </div>
            <div className="my-10">
              <p className="font-bold text-[clamp(14px,5vw,16px)] pb-4">
                5. Data Security
              </p>
              <p>
                We implement appropriate technical and organizational measures
                to protect the security of your personal information. However,
                please note that no method of transmission over the internet or
                method of electronic storage is completely secure, and we cannot
                guarantee absolute security.
              </p>
            </div>
            <div className="my-10">
              <p className="font-bold text-[clamp(14px,5vw,16px)] pb-4">
                6. Your Rights and Choices
              </p>
              <p className="pb-4">
                You may have certain rights and choices regarding the
                collection, use, and disclosure of your personal information.
                These rights and choices may include:
              </p>
              <ul className="flex flex-col gap-2 pl-12 list-disc">
                <li>Accessing and updating your personal information.</li>
                <li>
                  Opting out of certain data collection and processing
                  activities.
                </li>
                <li>Deleting your account and personal information.</li>
              </ul>
            </div>
            <div className="my-10">
              <p className="font-bold text-[clamp(14px,5vw,16px)] pb-4">
                7. Children’s Privacy
              </p>
              <p>
                Our services are not directed to individuals under the age of
                18, and we do not knowingly collect personal information from
                children under 18. If we become aware that we have collected
                personal information from a child under 18 without parental
                consent, we will take steps to delete that information.
              </p>
            </div>
            <div className="my-10">
              <p className="font-bold text-[clamp(14px,5vw,16px)] pb-4">
                8. Changes to This Policy
              </p>
              <p>
                We reserve the right to update or modify this Policy at any
                time. Any changes will be effective immediately upon posting the
                revised Policy on our website. Your continued use of our
                services after any such changes constitutes your acceptance of
                the revised Policy.
              </p>
            </div>
            <div className="my-10">
              <p className="font-bold text-[clamp(14px,5vw,16px)] pb-4">
                9. Contact Us
              </p>
              <p>
                If you have any questions about this Agreement, please contact
                us at <br></br>info@frontlinebusiness.com.ph
              </p>
            </div>
            <div className="my-10">
              <div>
                <img
                  src={`${devBaseImgUrl}/logo.png`}
                  alt=""
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

export default PrivacyPolicy;
