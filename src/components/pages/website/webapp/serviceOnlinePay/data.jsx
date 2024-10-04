import { FaRegThumbsUp } from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";

export const banner = [
  {
    bannerTitle: (
      <p>
        Integrate into your website
        <br /> a hassle-free
      </p>
    ),
    bannerTitleBoldText: "Online Payment Transaction",
    bannerTextDesc:
      "A component that integrates with existing systems to enable online payment processing. It allows businesses to accept payments securely via various channels such as credit/debit cards, e-wallets, or bank transfers, enhancing customer convenience and expanding revenue streams.",
    bannerBtnText: "bannerBtnText",
    bannerBtnLink: "Link",
    bannerImage: "OnlinePayment.jpg",
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
    subtitle: "Why choose our",
    mainTitle: "Online Payment Integration",
    webAppImage: "online-payment-ss.png",
    btnText: "Schedule A Demo",
    btnDownloadText: "Download Proposal",
    overviewAtitle: "Payment Flexibility",
    overviewAtext:
      "By offering multiple credit card payment options, businesses can provide a smoother checkout experience, catering to a broader range of customers and reducing barriers to completing transactions.",
    overviewBtitle: "Local Market Adaptation",
    overviewBtext:
      "By integrating with GCash, a widely-used payment method in the Philippines, businesses can cater to local customer preferences, offering a more flexible and accessible payment option that enhances the user experience.",
  },
];

export const scope = [
  {
    scopeId: "starter",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Credit Card Payment (Visa and Mastercard)",
    scopeDesc:
      "Enables secure payment processing through Visa and Mastercard, offering customers a trusted and convenient way to complete transactions.",
    scopeImage: "hrScopdeSS_overview.jpg",
  },
  {
    scopeId: "e-wallet",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Gcash Payment",
    scopeDesc:
      "Supports Gcash payment integration, allowing customers to pay seamlessly using their e-wallet for a hassle-free experience.",
    scopeImage: "hrScopdeSS_overview.jpg",
  },
];

export const pricing = [
  {
    icon: <FaRegThumbsUp className="text-[50px] mx-auto mb-4" />,
    title: "Online Payment Integration",
    rate: "Starts at ₱80K",
    note: "price varies based on system scope",
    info: ["Credit Card Payment", "Gcash Payment"],
    link: "/free-trial",
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
