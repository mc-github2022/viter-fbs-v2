import React from "react";
import Header from "../../../partials/Header";
import Footer from "../../../partials/Footer";
import LcssPartners from "./LcssPartners";
import LcssPartnersWithUs from "./LcssPartnersWithUs";
import LcssServices from "./LcssServices";
import LcssApplyNow from "./LcssApplyNow";
import LcssTeam from "./LcssTeam";
import LcssVidTestimonials from "./LcssVidTestimonials";
import LcssPartnersSay from "./LcssPartnersSay";
import LcssBanner from "./LcssBanner";
import LcssBatches from "./LcssBatches";

const LcssPage = () => {
  const contactData = [
    {
      contactTitle: "Computer-Related Courses",
      contactName: "Ms. Herlyn Mae Torres",
      contactEmail: "herlyn.torres@frontlinebusiness.com.ph",
      contactTitle2: "Accounting-Related Courses",
      contactName2: "Ms. Thea Lyzette Consignado",
      contactEmail2: "thea.consignado@frontlinebusiness.com.ph",
      downloadLink: "theLink",
    },
  ];

  return (
    <>
      <Header contactData={contactData} />
      <LcssBanner />
      <LcssPartners />
      <LcssPartnersWithUs />
      <LcssServices />
      <LcssApplyNow />
      <LcssTeam />
      <LcssBatches />
      <LcssVidTestimonials />
      <LcssPartnersSay />
      <Footer />
    </>
  );
};

export default LcssPage;
