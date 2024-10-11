import { FaRegThumbsUp } from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";

export const banner = [
  {
    bannerTitle: (
      <p>
        Website to elevate your business brand through our
        <br />
      </p>
    ),
    bannerTitleBoldText: "WordPress Website",
    bannerTextDesc:
      "Build a website that reflects your unique brand and drives results. Our WordPress development services offer custom designs, seamless functionality, and responsive performance to ensure your site stands out, engages users, and supports your business growth.",
    bannerBtnText: "LEARN MORE",

    bannerBtnLink: "Link",
    bannerImage: "wordpress-bg.jpg",
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
    imageName: "fca-logo-horizontal.png",
  },
  {
    imageName: "logo-go-mission-trip.png",
  },
  {
    imageName: "logo-phixgenomics.png",
  },
  {
    imageName: "logo-world-focus.png",
  },
  {
    imageName: "logo-fwc.png",
  },
];

export const webAppOverview = [
  {
    subtitle: "Why choose our",
    mainTitle: "Web Development Team",
    webAppImage: "web-team.jpg",
    btnText: "LEARN MORE",
    btnDownloadText: "Download Proposal",
    overviewAtitle: "Fast Turnaround Time",
    overviewAtext:
      "Clients can see progress in real-time, make changes on the go, and have greater control over the project’s direction",
    overviewBtitle: "High-Quality at Lower Costs",
    overviewBtext:
      "Clients receive high-quality websites at lower costs compared to global competitors, without compromising on functionality, performance, or support.",
    overviewCtitle: "Creative Guidance",
    overviewCtext:
      "We offer tailored customer support and creative inputs to enhance your online presence, ensuring your website not only functions optimally but also stands out in the digital landscape.",
  },
];

export const scope = [
  {
    scopeId: "starter",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Quick Deployment",
    scopeDesc:
      "Our website development service utilizes Agile methodology to ensure a Quick Deployment feature. This approach allows for rapid and iterative development, enabling us to deploy functional website components efficiently and adapt quickly to changes throughout the development process.",
    scopeImage: "quick-deployment.png",
  },
  {
    scopeId: "page-insights",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Optimized Fast Load Time",
    scopeDesc:
      "Our website development service includes a Fast Load Time feature, where we optimize website performance to ensure that pages load quickly. This involves advanced coding practices, efficient asset management, and performance-enhancing technologies.",
    scopeImage: "page-insights.png",
  },
  {
    scopeId: "seo",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Basic SEO",
    scopeDesc:
      "Our Basic SEO setup enhances your website’s visibility on search engines, helping potential customers find you more easily. With targeted keyword optimization, proper meta tags, and site indexing in place within the first week, you'll be better positioned to attract organic traffic right from the start.",
    scopeImage: "seo.png",
  },
  {
    scopeId: "cms",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Content Management System",
    scopeDesc:
      "With our Content Management System, you have complete control over your website content, allowing you to update pages, blog posts, and media without needing a developer. This gives you the flexibility to keep your website fresh and relevant, putting you in charge of your own digital presence.",
    scopeImage: "wordpress-dashboard.png",
  },
  {
    scopeId: "mobile-compatibility",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Mobile Compatibility",
    scopeDesc:
      "Our website development service includes Mobile Compatibility, ensuring that your website is fully optimized for various mobile devices. This feature involves responsive design techniques that adapt the website’s layout and content to different screen sizes and orientations.",
    scopeImage: "mobile-compatability.png",
  },
  {
    scopeId: "malware-protection",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "Malware Protection",
    scopeDesc:
      "Our website development service includes a Malware Protection feature, implementing robust security measures to detect, prevent, and remove malicious software. This feature encompasses regular security scans, real-time threat detection, and automated updates to safeguard your website.",
    scopeImage: "security.png",
  },
  {
    scopeId: "ssl-certificate",
    scopeIcon: <MdOutlineDashboard className="text-3xl text-primary" />,
    scopeTitle: "SSL Certificate",
    scopeDesc:
      "Every website we build includes an SSL Certificate, ensuring secure, encrypted communication between your site and its visitors. This not only protects sensitive data but also boosts your credibility with search engines and customers, giving your website the trust it needs to succeed.",
    scopeImage: "ssl.png",
  },
];

export const pricing = [
  {
    icon: <FaRegThumbsUp className="text-[50px] mx-auto mb-4" />,
    title: "International Clients",
    rate: "Starts at $750",
    note: "WordPress CMS Website",
    info: [
      "Up to 6 Web Pages",
      "Responsive Web Design",
      "Basic Search Engine Optimization",
      "SSL Certificate",
      "One (1) Year Hosting Space",
      "One (1) Year Domain Name Registration",
      "Two (2) Hours / Month Technical Support",
    ],
    link: "/free-trial",
    isActive: 0,
    customCss: "text-primary",
  },
  {
    icon: <FaRegThumbsUp className="text-[50px] mx-auto mb-4" />,
    title: "Philippine Clients",
    rate: "Starts at ₱25K",
    note: "WordPress CMS Website",
    info: [
      "Up to 6 Web Pages",
      "Responsive Web Design",
      "Basic Search Engine Optimization",
      "SSL Certificate",
      "One (1) Year Hosting Space",
      "One (1) Year Domain Name Registration",
      "Two (2) Hours / Month Technical Support",
    ],
    link: "/free-trial",
    isActive: 1,
    customCss: "",
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
    clientName: "James Sunderland",
    clientDesc: "VP Creative",
    clientMessage:
      "The team at Frontline is incredible. They genuinely care about our needs and share in our vision of success. We are proud to call them a business partner and appreciate all the hard work they do for us.",
    clientLogo: "logo-ottm.png",
    clientProfilePic: "james-sunderland.png",
  },
  {
    clientName: "Jeffrey Seitz",
    clientDesc: "Chief Executive Officer",
    clientMessage:
      "I have worked with a number of different website developers, but none have been as responsive or as quick to turn the work around.",
    clientLogo: "logo-phixgenomics.png",
    clientProfilePic: "jeffrey-seitz.png",
  },
  {
    clientName: "Rhoda Lynn Pessina-Dayo",
    clientDesc: "School Directress",
    clientMessage:
      "We enjoyed working together and meeting with the Frontline Business Solutions Staff when they built the website of Frontline Christian Academy.",
    clientLogo: "logo-fca.png",
    clientProfilePic: "rhodalynn-dayo.png",
  },
];
