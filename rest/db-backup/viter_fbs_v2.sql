-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 21, 2025 at 09:06 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `viter_fbs_v2`
--

-- --------------------------------------------------------

--
-- Table structure for table `fbsv2_audience`
--

CREATE TABLE `fbsv2_audience` (
  `audience_aid` int(11) NOT NULL,
  `audience_is_active` tinyint(1) NOT NULL,
  `audience_name` varchar(100) NOT NULL,
  `audience_code` varchar(100) NOT NULL,
  `audience_description` text NOT NULL,
  `audience_created` datetime NOT NULL,
  `audience_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_audience`
--

INSERT INTO `fbsv2_audience` (`audience_aid`, `audience_is_active`, `audience_name`, `audience_code`, `audience_description`, `audience_created`, `audience_datetime`) VALUES
(8, 1, 'Employee', 'audience_is_employees', '', '2025-02-04 08:19:11', '2025-02-04 08:19:21'),
(9, 0, 'Client', 'audience_is_client', 'Client subscribers', '2025-02-04 08:21:53', '2025-02-05 13:52:44'),
(10, 0, 'Web-LCS', 'audience_is_web-lcs', '', '2025-02-04 14:05:26', '2025-02-05 13:51:34');

-- --------------------------------------------------------

--
-- Table structure for table `fbsv2_careers`
--

CREATE TABLE `fbsv2_careers` (
  `careers_aid` int(11) NOT NULL,
  `careers_job_title` varchar(100) NOT NULL,
  `careers_job_classification` varchar(50) NOT NULL,
  `careers_job_mode` varchar(50) NOT NULL,
  `careers_job_status` varchar(50) NOT NULL,
  `careers_job_description` text NOT NULL,
  `careers_icon` varchar(50) NOT NULL,
  `careers_img` text NOT NULL,
  `careers_job_overview` text NOT NULL,
  `careers_created` datetime NOT NULL,
  `careers_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_careers`
--

INSERT INTO `fbsv2_careers` (`careers_aid`, `careers_job_title`, `careers_job_classification`, `careers_job_mode`, `careers_job_status`, `careers_job_description`, `careers_icon`, `careers_img`, `careers_job_overview`, `careers_created`, `careers_datetime`) VALUES
(1, 'GRAPHICS DESIGNER', 'Full-time', 'On-site', 'Closed', '<strong style=\"margin-bottom: 30px\">Job Qualifications</strong>\n<ul>\n  <li>\n    <ol>\n      <li>\n        Fluency in written and spoken English\n        <ul style=\"margin-left: 30px\">\n          <li>&#x2022; Good spelling and grammar</li>\n          <li>&#x2022; Good communication skills</li>\n          <li>&#x2022; Ability to proofread work</li>\n        </ul>\n      </li>\n      <li>\n        Proficiency in Adobe Creative Cloud: InDesign, Illustrator, Photoshop,\n        and Acrobat\n        <ul style=\"margin-left: 30px\">\n          <li>&#x2022; InDesign tabs & tables</li>\n          <li>&#x2022; Master template pages</li>\n          <li>&#x2022; Photo editing</li>\n          <li>&#x2022; Creating fillable forms in Acrobat</li>\n          <li>&#x2022; Creating vector graphics</li>\n          <li>\n            &#x2022; Creating vector graphics from raster images, such as logos\n          </li>\n        </ul>\n      </li>\n      <li>\n        Deep knowledge of pre-press for print\n        <ul style=\"margin-left: 30px\">\n          <li>&#x2022; Differences between RGB, CMYK, Pantone, and HEX</li>\n          <li>&#x2022; Differences between raster and vector graphics</li>\n          <li>&#x2022; Bleed, margins, and safe space</li>\n          <li>&#x2022; Fonts and links</li>\n          <li>&#x2022; Resolution</li>\n          <li>&#x2022; File size and structure</li>\n          <li>&#x2022; Following customer supplied brand guidelines</li>\n          <li>&#x2022; Part of the job is fixing customer supplied artwork</li>\n        </ul>\n      </li>\n      <li>\n        An organized individual\n        <ul style=\"margin-left: 30px\">\n          <li>&#x2022; Detail oriented</li>\n          <li>\n            &#x2022; Learn and adhere to naming conventions and file storage\n          </li>\n          <li>&#x2022; Ability to keep track of time while working</li>\n          <li>&#x2022; Keeping good notes about projects and revisions</li>\n          <li>&#x2022; Must be able to work quickly with accuracy</li>\n          <li>\n            &#x2022; Takes initiative since we will be working opposite hours\n          </li>\n          <li>&#x2022; Is not afraid to ask questions</li>\n        </ul>\n      </li>\n      <li>\n        Solid portfolio with examples of designs for many different types of\n        industries, clients, and projects\n        <ul style=\"margin-left: 30px\">\n          <li>\n            &#x2022; Demonstrated knowledge of graphic design principles and\n            color theory\n          </li>\n          <li>\n            &#x2022; A variety of designs – BC, logos, brochures, posters, trade\n            show backdrops, t-shirts, car wraps, etc.\n          </li>\n        </ul>\n      </li>\n    </ol>\n  </li>\n</ul>\n', 'FaPalette', 'graphic-designs.png', '', '0000-00-00 00:00:00', '2024-11-27 15:32:50'),
(2, 'ACCOUNTS PAYABLE CLERK', 'Full-time', 'On-site', 'Ongoing', '<p style=\"margin-bottom: 30px\">\n  Mirza Hadi Baig, a Full Stack Developer and Shopify Developer, shared her\n  insights on why website maintenance is crucial for any business. Let’s dive\n  into those reasons and uncover why consistent website maintenance is a must\n  for any business.\n</p>\n\n<strong>Skills & Competencies</strong>\n<ul style=\"margin-bottom: 30px; margin-left: 30px\">\n  <li>&#x2022; High level of accuracy and attention to detail is essential.</li>\n  <li>\n    &#x2022; Initiative-taker capable of working independently with minimal\n    supervision.\n  </li>\n  <li>\n    &#x2022; Organized with ability to manage multiple priorities to meet\n    deadlines.\n  </li>\n  <li>\n    &#x2022; Effective problem solver and team player who enjoys learning and\n    contributing to team goals.\n  </li>\n  <li>\n    &#x2022; Proficient in relevant computer applications such as MS Office\n    including Excel.\n  </li>\n  <li>&#x2022; Accurate keyboard skills and ability to enter data quickly.</li>\n  <li>&#x2022; Good verbal and written communication skills.</li>\n  <li>&#x2022; Information collection, recording, and management skills.</li>\n</ul>\n\n<strong>Prefered Qualifications</strong>\n<ul style=\"margin-bottom: 30px; margin-left: 30px\">\n  <li>\n    &#x2022; Post secondary education in Bookkeeping, Accounting, or a related\n    field (or the equivalent in experience) Blackbaud knowledge or database\n    experience is an asset Familiarity with nonprofit accounting, GAAP, and\n    grant management Three years experience in Alp and/or bookkeeping Experience\n    with international payments and exchange rates (highly preferred)\n  </li>\n</ul>\n', 'IoMdCalculator', '[{\"name\":\"accounting-associate-300x198.png\",\"id\":\"1252rH3n1m__1OMR_x85JQKRKQllAQgKr\",\"datetime\":\"2025-02-20 12:30:55\"}]', '<strong>Job Overview</strong>\n<p style=\"margin-bottom: 30px\">\n  As the Accounts Payable Clerk , you will be a key member of the team, leading\n  the day-to-day operations of the Accounts Payable function and ensuring\n  accurate recording of Alp, grants, and transfers. In partnership with the\n  Director of Operations, you will serve in a supporting role with a wide\n  variety of accounting responsibilities. In this role, you will handle\n  administrative tasks relating to these areas to ensure effective and efficient\n  operations. You will also handle highly confidential material to be handled in\n  the utmost professional manner.\n</p>', '0000-00-00 00:00:00', '2025-02-20 12:30:52'),
(3, 'DONATIONS ADMINISTRATOR', 'Full-time', 'On-site', 'Ongoing', '<strong>Skills & Competencies</strong>\n<ul style=\"margin-left: 30px\">\n  <li>\n    <ol>\n      <li>&#x2022; Post-Secondary education preferred.</li>\n      <li>&#x2022; Blackbaud knowledge or database experience is an asset.</li>\n      <li>&#x2022; Problem solving skills are essential.</li>\n      <li>\n        &#x2022; Strong Microsoft Office skills are required with superior\n        proficiency in accuracy.\n      </li>\n      <li>\n        &#x2022; Ability to manage multiple projects in a fast-paced environment\n        is required.\n      </li>\n      <li>\n        &#x2022; Enthusiastic individual with excellent organizational and time\n        management skills.\n      </li>\n      <li>\n        &#x2022; High level of accuracy and attention to detail is essential.\n      </li>\n      <li>\n        &#x2022; Self-starter capable of working independently with minimal\n        supervision.\n      </li>\n      <li>\n        &#x2022; Team player who enjoys learning and contributing to team goals.\n      </li>\n    </ol>\n  </li>\n</ul>\n', 'IoMdCalculator', 'fbs-ads-donation_trans.png', '<strong>Job Overview</strong>\n<p style=\"margin-bottom: 30px\">\n  The Donations Administrator is a key member of the team, leading the\n  day-to-day operations of the Donations function and ensuring accurate and\n  timely recording of various types of gifts (checks, wires, online, etc.). This\n  role is responsible to maintain clean donor data, communicate with donors, and\n  send donor acknowledgements, receipts, and consolidated annual statements. In\n  this role, you will handle administrative tasks relating to these areas to\n  ensure effective and efficient operations. You will also handle highly\n  confidential material to be handled in the utmost professional manner.\n</p>\n', '0000-00-00 00:00:00', '2024-11-27 15:24:18'),
(4, 'QA ENGINEER', 'Full-time', 'On-site', 'Ongoing', '<strong>Job Qualifications</strong>\n<ul style=\"margin-left: 30px\">\n  <li>\n    <ol>\n      <li>&#x2022; Bachelor’s degree in Computer Science, Information Technology, or a related field, or equivalent experience.</li>\n      <li>&#x2022; Proven experience as a QA Engineer, Test Engineer, or similar role in software testing.</li>\n        <li>&#x2022; Strong knowledge of software QA methodologies, tools, and processes.</li>\n        <li>&#x2022; Proficiency in testing web applications, particularly those built with ReactJS, MySQL and Vite.</li>\n        <li>&#x2022; Experience with PHP and MySQL.</li>\n        <li>&#x2022; Familiarity with agile frameworks and regression testing practices.</li>\n        <li>&#x2022; Experience working with version control systems such as Git.</li>\n        <li>&#x2022; Familiarity with continuous integration and deployment pipelines.</li>\n        <li>&#x2022; Strong communication skills and the ability to work effectively within a collaborative team environment.</li>\n        <li>&#x2022; Detail-oriented with a passion for delivering high-quality software.</li>\n        <li>&#x2022; Experience in testing CRM systems or applications in the financial domain.</li>\n        <li>&#x2022; Experience with performance testing tools.</li>\n        <li>&#x2022; Familiarity with cloud platforms such as Siteground.</li>\n        <li>&#x2022; Experience working in a CPA or finance-related environment.</li>\n        </li>\n    </ol>\n  </li>\n</ul>\n', 'FaCode', 'fbs-qa-career.png', '<strong>Job Overview</strong>\n<p  style=\"margin-bottom: 30px\">\n    We are looking for a talented and detail-oriented QA Engineer to join our agile software development team. You will be responsible for ensuring the quality of a corporate CRM intranet website developed in ReactJS, MySQL and Vite with Python. This role is critical as the application will be used by a CPA firm to manage sensitive financial and client data. As the first dedicated QA professional in our team, you will have the opportunity to define and establish our testing processes, working closely with developers and product owners to ensure software quality.\n</p>', '0000-00-00 00:00:00', '2024-11-28 06:57:17'),
(8, 'Social Media Manager', 'Full-time', 'On-site', 'Ongoing', '<strong>Duties and Responsibilities:</strong>\n\n<ul class=\"mb-2\">\n 	<li>&#x2022;  Design and implement social media strategy to align with business goals</li>\n 	<li>&#x2022; Analyzing the company’s digital marketing plan and social media strategy and identifying strategic weaknesses and making </li>\n 	<li>&#x2022; Setting key performance indicators (KPIs) for social media campaigns, such as targets for a certain number of shares or likes and measuring a campaign’s performance against the KPIs</li>\n 	<li>&#x2022;  Monitor, track, analyse and report on performance on social media platforms using tools such as Google Analytics and Facebook Insights</li>\n 	<li>&#x2022;  Identify consumer trends to help with planning social media campaigns</li>\n 	<li>&#x2022;  Research and evaluate the latest tools and techniques in order to find new and better ways of measuring social media activity</li>\n 	<li>&#x2022;  Optimise content to further encourage community interaction and engagement</li>\n 	<li>&#x2022; Manage and facilitate social media communities by responding to social media posts and developing discussions</li>\n</ul>\n\n<strong>Skills:</strong>\n\n<ul class=\"list-text mb--20\">\n 	<li class=\"mb-2\"><strong>Social media:</strong> The ability to use social media to maintain or build a brand is necessary to be a Social Media Manager . These professionals are expected to regularly post text, video and images that engage the company’s target market, follow online conversations on a company’s social media accounts and solve customer concerns using social media platforms.</li>\n 	<li class=\"mb-2\"><strong>Communication:</strong> Great verbal and written communication skills are essential for this occupation. A Social Media Manager must interact with writers, designers, developers and customers and report to senior management personnel. As good communicators, these professionals must identify social media events such as an interesting hashtag or a sensitive topic and share appropriate content that aligns with the company’s social media strategy.</li>\n 	<li class=\"mb-2\"><strong>Creativity:</strong> Crafting engaging content is an important skill for a Social Media Manager. These professionals must constantly align content with customer trends and market changes to interest and engage people.</li>\n 	<li class=\"mb-2\"><strong>Technology:</strong> Computer skills, skills in using social media platforms and skills in using tools that analyze social media platforms are requirements for this position. A Social Media Manager must use digital technologies to meet the goals of social media campaigns.</li>\n 	<li class=\"mb-2\"><strong>Research:</strong> Skills in learning social media trends, identifying new social media tools and finding real-time online conversations are necessary for this position. Social Media Managers must have an understanding of the trends and techniques of social media as well as the company’s online presence to effectively handle social media marketing.</li>\n 	<li class=\"mb-2\"><strong>Time management:</strong> The skill of organizing tasks to meet deadlines is essential for this professional role. Social Media Managers work according to schedules and must meet marketing and business goals.</li>\n</ul>', 'FaAd', 'fbs-qa-career.png', '<strong>Job Overview</strong>\n<ul class=\"mb-2\">\n 	<li>&#x2022; We are looking for a talented Social media manager to administer our social media accounts. You will be responsible for creating original text and video content, managing posts and responding to followers. You will manage our company image in a cohesive way to achieve our marketing goals.</li>\n 	<li>&#x2022; As a Social media manager, we expect you to be up-to-date with the latest digital technologies and social media trends. You should have excellent communication skills and be able to express our company’s views creatively.</li>\n 	<li>&#x2022; Ultimately, you should be able to handle our social media presence ensuring high levels of web traffic and customer engagement.</li>\n</ul>', '2024-11-27 15:42:27', '2024-11-28 08:25:07'),
(9, 'Bookkeeper', 'Full-time', 'On-site', 'Ongoing', '<strong>SKILLS & COMPENTENCIES</strong>\n<ul style=\"margin-left: 30px\" class=\"mb-4\">\n <li>&#x2022; High level of accuracy and attention to detail is essential.</li>\n<li>&#x2022; Initiative-taker capable of working independently with minimal supervision.\n</li>\n<li>&#x2022; Organized with ability to manage multiple priorities to meet deadlines.\n</li>\n<li>&#x2022; \nEffective problem solver and team player who enjoys learning and contributing to team goals.\n</li>\n<li>&#x2022; \nProficient in relevant computer applications such as MS Office including Excel.\n</li>\n<li>&#x2022; \nAccurate keyboard skills and ability to enter data quickly.\n</li>\n<li>&#x2022; \nGood verbal and written communication skills.\n</li>\n<li>&#x2022; \nInformation collection, recording, and management skills.\n</li>\n</ul>\n\n<strongPREFFERED QUALIFICATIONS</strong>\n<ul style=\"margin-left: 30px\" class=\"mb-4\">\n <li>&#x2022; Post secondary education in Bookkeeping, Accounting, or a related field (or the equivalent in experience)\n</li>\n <li>&#x2022; Blackbaud knowledge or database experience is an asset\n</li>\n<li>&#x2022; Familiarity with nonprofit accounting, GAAP, and grant management\n</li>\n<li>&#x2022; Three years experience in Alp and/or bookkeeping\n</li>\n<li>&#x2022; Experience with international payments and exchange rates (highly preferred)\n</li>\n</ul>', 'FaBook', 'fbs-ads-bookkeeper_trans.png', '<strong>Job Overview</strong>\n<p class=\"mb-4\">\nAs the bookkeeper, you will be maintaining company’s financial records and ensuring that transactions are accurately recorded and organized. You will handle various tasks related to financial reporting, reconciling accounts, and maintaining financial integrity.\n</p>', '2024-11-28 08:22:06', '2024-11-28 09:06:35'),
(10, 'Accounting Instructor ', 'Full-time', 'On-site', 'Closed', '', 'AiOutlineAccountBook', 'fbs-ads-accounting-instructor.png', '<strong>Job Qualifications:</strong>\n<ul style=\"margin-left: 30px\">\n <li>&#x2022; Bachelor’s degree in Accountancy, Financial Management, or relevant field\n</li>\n <li>&#x2022; Experience on accounting procedures such as bank reconciliation, sales registration, payroll, general ledger and financial reports and other accounting related work.\n</li>\n <li>&#x2022; Experience in computer-based bookkeeping like QuickBooks or other financial accounting software programs.\n</li>\n <li>&#x2022; \nAdvanced proficiency with Google Suite, MS Word, MS Excel, and MS PowerPoint.\n</li>\n <li>&#x2022; \nProfessional teaching experience is an advantage\n</li>\n <li>&#x2022; \nWilling to be trained.\n</li>\n</ul>', '2024-11-28 12:32:16', '2024-11-28 15:41:19'),
(11, 'Lead Generation Specialist', 'Full-time', 'On-site', 'Closed', '<strong>Qualifications:</strong>\n<p class=\"mb-4\">\nIf you don’t think you meet all of the criteria below but still are interested in the job, please apply. Nobody checks every box, and we’re looking for someone excited to join the team.\n</p>\n<ul style=\"margin-left: 30px\" classs=\"mb-4\">\n <li>&#x2022; College Graduate with a Bachelor’s Degree</li>\n <li>&#x2022; 1-2 years professional experience in the BPO, shared services, or similar industry\n</li>\n <li>&#x2022; Strong preference for candidates with experience in prospecting and lead generation\n</li>\n <li>&#x2022; Excellent analytical skills: use their professional judgment in interpreting findings\n</li>\n <li>&#x2022; Excellent aptitude for research, navigation, and investigation\n</li>\n <li>&#x2022; Excellent verbal and written communication skills\n</li>\n <li>&#x2022; Good organizational skills and attention to detail\n</li>\n <li>&#x2022; Proficient in G Suite productivity tools, such as Gmail, Drive, Docs, Sheets\n</li>\n</ul>\n\n<strong>Key Responsibilities:</strong>\n<ul style=\"margin-left: 30px\">\n <li>&#x2022; Responsible for going through lists and qualifying leads\n</li>\n <li>&#x2022; Responsible for going through lists and qualifying leads\n</li>\n <li>&#x2022; Locate leads through various online avenues\n</li>\n <li>&#x2022; Collect relevant contact details of target companies using online and offline platforms.\n</li>\n <li>&#x2022; Pre-qualify possible leads based on profile fit and recent business activities\n</li>\n <li>&#x2022; Record accurate and up-to-date contact information on qualified leads\n</li>\n <li>&#x2022; Provide feedback on lead sourcing observations for target markets\n</li>\n <li>&#x2022; Organize information and navigate systems for handover to sales\n</li>\n <li>&#x2022; Build and cultivate prospect relationships by initiating communications and conducting follow-up communications in order to move opportunities through the sales funnel.\n</li>\n <li>&#x2022; Manage data for new and prospective clients within CRM, ensuring all communications are logged, information is accurate and documents are attached\n</li>\n <li>&#x2022; Willing to be trained\n</li>\n</ul>', 'AiOutlineFileAdd', 'fbs-ads-lead-gen.png', '<strong>Job Description</strong>\n<p class=\"mb-4\">\nThe Lead Generation Specialist is responsible for prospecting, qualifying and generating new sales leads to support the Senior Account Managers. We are looking for somebody to work predominantly do data entry type work. This individual will be a highly motivated, self-starter able to identify and develop new business prospects from multiple sources including inbound marketing leads, prospect lists, discovery, and individual research.\n</p>', '2024-11-28 12:42:10', '2024-11-28 15:41:35'),
(12, 'Web Developer', 'Full-time', 'On-site', 'Ongoing', '<strong>Responsibilities:</strong>\n<ul style=\"margin-left: 30px\" class=\"mb-4\">\n <li>&#x2022; Design and development of cross-platform/browser websites and web applications for internal and external use.\n</li>\n <li>&#x2022; Communication with clientele to review, plan and execute programming tasks.\n</li>\n <li>&#x2022; Communication with hosting and email providers to ensure up time and service status.\n</li>\n <li>&#x2022; Administration and implementation of websites on local, staging and development environments.\n</li>\n <li>&#x2022; Administration of e-mail server in order to ensure accounts are configured and available for clientele.\n</li>\n <li>&#x2022; Annoying the management from time to time, as they need the harassment, or so this description thinks….Gotta keep them on their toes.\n</li>\n <li>&#x2022; Ensuring code is backed up to necessary locations.\n</li>\n <li>&#x2022; Monitoring of client issues via email or internal ticketing system.\n</li>\n</ul>\n\n<strong>Education and Training:</strong>\n<ul style=\"margin-left: 30px\" class=\"mb-4\">\n <li>&#x2022; Bachelor’s degree in computer science, web application development or related field\n</li>\n <li>&#x2022; Experience, professional training and certifications\n</li>\n</ul>\n\n<strong>Requirements:</strong>\n<ul style=\"margin-left: 30px\" class=\"mb-4\">\n <li>&#x2022; Having an understanding of the development workflow\n</li>\n <li>&#x2022; Ability to develop and execute application development\n</li>\n <li>&#x2022; Understanding of programming concepts and languages\n  <ul style=\"margin-left:30px\">\n    <li>- Object-oriented</li>\n    <li>- Procedural</li>\n    <li>- Functional </li>\n  </ul>\n</li>\n <li>&#x2022; Understanding of various programming languages\n     <ul style=\"margin-left:30px\">\n    <li>- Advanced or better: HTML, CSS</li>\n    <li>- Intermediate: PHP, MySQL, JavaScript and its various libraries including jQuery\n     </li>\n    <li>- Additional languages are an added bonus</li>\n  </ul>\n</li>\n <li>&#x2022; Understanding of web technology platforms\n     <ul style=\"margin-left:30px\">\n    <li>- Intermediate: Drupal, Symfony</li>\n    <li>- Additional platforms are an added bonus.</li>\n  </ul>\n</li>\n <li>&#x2022; Understanding of responsive web design which is cross-platform and cross-browser compatible.\n</li>\n <li>&#x2022; Following internal and external coding standards such as those set by Drupal or Symfony.\n</li>\n <li>&#x2022; Understanding of SCM, such as GIT\n</li>\n <li>&#x2022; Familiarity with development software\n   <ul style=\"margin-left:30px\">\n    <li>- Adobe Suite</li>\n    <li>- Aptana/Titanium Studio</li>\n    <li>- All major browsers</li>\n  </ul>\n</li>\n <li>&#x2022; Operating Systems\n   <ul style=\"margin-left:30px\">\n    <li>- Novice: *nix Operating System (CentOS preferred)</li>\n    <li>- Expert: Windows and/or Mac</li>\n  </ul>\n </li>\n <li>&#x2022; Being a team player</li>\n <li>&#x2022; Effectively communicating needs of clients and projects to team as necessary</li>\n <li>&#x2022; Effectively communicating with clients to ensure project success</li>\n <li>&#x2022; Adaptability and the willingness to expand current skill set.\n</li>\n</ul>', 'PiWebhooksLogo', 'fbs-ads-web.png', '<strongJob Description:/strong>\n<ul style=\"margin-left: 30px\" class=\"mb-4\">\n <li>&#x2022; Programming languages for this role are geared towards open source technology such as PHP, MySQL, HTML, CSS, and JavaScript. As technology evolves it is crucial that the basic concepts of object-oriented programming are understood.\n</li>\n <li>&#x2022; Although not required, an understanding of Linux command-line scripting and management is to be considered a bonus. It is important that this individual be a ninja or growing ninja of programming tasks.\n</li>\n <li>&#x2022; This role will be in constant communications with clients and third parties to ensure that all necessary facets are operational and functional. It may be important to understand that you need to be cool and down to Earth. Like a cool cat.\n</li>\n <li>&#x2022; This role is one that requires occasional nights and weekends to ensure application rollouts go well, given internal and external availability.\n</li>\n <li>&#x2022; This individual who requires this role must be a general jack of all trades who is quirky, odd, strange, and an all-around good communicator who is very much outspoken and bold. Very bold. Oh, and placing emphasis on wrong syllables.\n</li>\n <li>&#x2022; A primary key to being successful in this position is having a background in application development while being able to learn, grow and expand as the environment changes\n</li>\n</ul>', '2024-11-28 13:13:05', '2024-11-28 15:40:44'),
(13, 'On-site Virtual Assistant (Office-based)', 'Full-time', 'On-site', 'Closed', '', 'FaAccessibleIcon', 'hiring-virtual-assistant-555x350.png', '<strong>Key Skills:</strong>\n<ul style=\"margin-left: 30px\" class=\"mb-4\">\n <li>&#x2022; English Proficiency: Can converse and comprehend English well.\n</li>\n <li>&#x2022; Flexibility and Adaptability: Enjoying a variety of work tasks.\n</li>\n <li>&#x2022; Ability to multitask: Able to listen, understand, and type simultaneously.\n</li>\n <li>&#x2022; Good oral and written communication skills\n</li>\n <li>&#x2022; Fast and accurate typing skills\n</li>\n <li>&#x2022; Organized and strong attention to details\n</li>\n <li>&#x2022; Enjoys researching things\n</li>\n <li>&#x2022; Can take initiative on things if they don’t have a checklist\n</li>\n <li>&#x2022; Strong knowledge of standard software packages like Microsoft application (Word, Excel, Powerpoint) and the ability to learn company-specific software if required\n</li>\n <li>&#x2022; Understands technology; Google Drive, (how to interact within G-documents), Google Photos, Youtube, Gmail, Google Calendar, Google Tasks, etc.\n</li>\n</ul>', '2024-11-28 13:27:49', '2024-11-28 15:41:49'),
(14, 'Online Sales Assistant', 'Full-time', 'On-site', 'Closed', '', 'FaAccessibleIcon', 'fbs-ads-sales-asst_sm-300x189.png', '<strong>Job Overview</strong>\n<p>\nWe are looking for a talented and motivated Salesperson who is eager to work from home. You will be responsible for selling our products, so excellent English writing skills are an absolute must. We need someone who is available to start as soon as possible, so don\'t miss this opportunity!\n</p>\n\n<p>\nIn this position you will be the face of our company and must have a professional attitude when dealing with customers. Comfort with working independently is also essential.\n</p>\n\n<p>\nThe ideal candidate should have prior experience in sales and/or customer service and be able to think critically while managing their time efficiently. Experience with email marketing tools is preferred but not required.\n</p>\n\n<p>\nIf you believe you have what it takes, don\'t hesitate to apply!\n</p>\n\n', '2024-11-28 13:36:51', '2024-11-28 15:42:09'),
(15, 'Technical Support Engineer', 'Full-time', 'On-site', 'Closed', '<strong>Responsibilities:</strong>\n<ul style=\"margin-left: 30px\" class=\"mb-4\">\n<li>&#x2022; Research and identify solutions to software and hardware issues</li>\n<li>&#x2022; Diagnose and troubleshoot technical issues, including account setup and network configuration</li>\n<li>&#x2022; Ask customers targeted questions to quickly understand the root of the problem</li>\n<li>&#x2022; Track computer system issues through to resolution, within agreed time limits</li>\n<li>&#x2022; Talk clients through a series of actions, either via phone, email or chat, until they’ve solved a technical issue</li>\n<li>&#x2022; Properly escalate unresolved issues to appropriate internal teams (e.g. software developers)</li>\n<li>&#x2022; Provide prompt and accurate feedback to customers</li>\n<li>&#x2022; Refer to internal database or external resources to provide accurate tech solutions</li>\n<li>&#x2022; Ensure all issues are properly logged</li>\n<li>&#x2022; Prioritize and manage several open issues at one time</li>\n<li>&#x2022; Follow up with clients to ensure their IT systems are fully functional after troubleshooting</li>\n<li>&#x2022; Prepare accurate and timely reports</li>\n<li>&#x2022; Document technical knowledge in the form of notes and manuals</li>\n<li>&#x2022; Maintain jovial relationships with clients</li>\n</ul>\n\n<strong>Requirements and Skills:</strong>\n<ul style=\"margin-left: 30px\" class=\"mb-4\">\n<li>&#x2022;  Proven work experience as a Technical Support Engineer, Desktop Support Engineer, IT Help Desk Technician or similar role</li>\n<li>&#x2022;  Hands-on experience with Windows/Linux/Mac OS environments</li>\n<li>&#x2022;  Good understanding of computer systems, mobile devices and other tech products</li>\n<li>&#x2022;  Ability to diagnose and troubleshoot basic technical issues</li>\n<li>&#x2022;  Familiarity with remote desktop applications and help desk software (eg. Zendesk)</li>\n<li>&#x2022;  Excellent problem-solving and communication skills</li>\n<li>&#x2022;  Ability to provide step-by-step technical help, both written and verbal</li>\n<li>&#x2022; BS degree in Information Technology, Computer Science or relevant field</li>\n<li>&#x2022; Additional certification in Microsoft, Linux, Cisco or similar technologies is a plus</li>\n</ul>', 'Fa500Px', 'fbs-ads-tse-1-300x189.jpg', '<strong>Job Overview</strong>\n<ul style=\"margin-left: 30px\" class=\"mb-4\">\n <li>&#x2022; We are looking for a competent Technical Support Engineer to provide fast and useful technical assistance on computer systems. You will diagnose and troubleshoot software and hardware problems and help our customers install applications and programs.</li>\n <li>&#x2022; Technical Support Engineer responsibilities include resolving network issues, configuring operating systems and using remote desktop connections to provide immediate support. You will use email and chat applications to give clients quick answers to simple IT issues. For more complex problems that require nuanced instruction, you will contact clients via phone and/or provide clear, written instructions and technical manuals.</li>\n <li>&#x2022; To be qualified for this role, you should hold a degree in a relevant field, like Computer Science, IT or Software Engineering. Microsoft, Cisco, Linux or similar certification is a plus. If you’re naturally a helper, enjoy assisting people with computer issues and are able to explain technical details simply, we’d like to meet you.</li>\n <li>&#x2022; Ultimately, you will be a person our customers trust. They will rely on you to provide timely and accurate solutions to their technical problems.</li>\n</ul>', '2024-11-28 13:43:33', '2024-11-28 15:42:23'),
(16, 'Customer Service Representative', 'Full-time', 'On-site', 'Closed', '<strong>Skills & Qualifications:</strong>\n<ul style=\"margin-left: 30px\" class=\"mb-4\">\n<li>&#x2022; Graduate of a 4-year College Course</li>\n<li>&#x2022; With at least 1 year of Customer Service and Call Center experience</li>\n<li>&#x2022; Effective communication skills</li>\n<li>&#x2022; Excellent English skills - must at least be intermediate level</li>\n<li>&#x2022; Strong customer service skills (ability to build rapport, demonstrate empathy, and outline key steps in delivering good customer service)</li>\n<li>&#x2022; Calm under pressure</li>\n<li>&#x2022; Ability to multi-task and navigate multiple applications at the same time</li>\n<li>&#x2022; Capable of working onsite on a graveyard shift (mid-shift)</li>\n<li>&#x2022; Knowledge retention</li>\n<li>&#x2022; Attention to detail</li>\n<li>&#x2022; Organization</li>\n<li>&#x2022; Flexibility</li>\n<li>&#x2022; Friendly</li>\n<li>&#x2022; Ability to work independently and as a team player</li>\n</ul>', 'FaGlobeAfrica', 'fbsadscsr-300x189.png', '<strong>Job Description:</strong>\n<p>Do you find joy in helping others and problem solving to make a positive impact? If so, this could be the perfect match!</p>\n<ul style=\"margin-left: 30px\" class=\"mb-4\">\n<li>&#x2022;  Communicate with customers on a variety of channels.</li>\n<li>&#x2022; Documents all handled calls accurately.</li>\n<li>&#x2022; Resolving customer issues efficiently and courteously.</li>\n<li>&#x2022; Provide a memorable customer experience and awesome customer service.</li>\n<li>&#x2022; Complete after-call work and other assigned administrative duties efficiently.</li>\n<li>&#x2022; Adhere to the prescribed shift and schedule</li>\n<li>&#x2022; Adhere to set service level targets or key performance indicators</li>\n</ul>', '2024-11-28 14:04:47', '2024-11-29 08:02:41'),
(17, 'Data Entry Operator', 'Full-time', 'On-site', 'Closed', '<strong>Job Description:</strong>\n<p class=\"mb-4\">In charge of entering all the data into different computer databases. In addition, they manage and maintain effective record keeping, organizing files to collect information for future use.</p>\n\n<strong>Responsibilities:</strong>\n<ul style=\"margin-left: 30px\" class=\"mb-4\">\n<li>&#x2022; Insert customer and account data by inputting text-based and numerical information from source documents within time limits</li>\n 	<li>&#x2022; Compile, verify the accuracy and sort information according to priorities to prepare source data for computer entry</li>\n 	<li>&#x2022; Review data for deficiencies or errors, correct any incompatibilities if possible, and check the output</li>\n 	<li>&#x2022; Research and obtain further information for incomplete documents</li>\n 	<li>&#x2022; Apply data program techniques and procedures</li>\n 	<li>&#x2022; Generate reports, store completed work in designated locations, and perform backup operations</li>\n        <li>&#x2022; Scan documents and print files, when needed</li>\n        <li>&#x2022; Keep information confidential</li>\n        <li>&#x2022; Respond to queries for information and access relevant files</li>\n        <li>&#x2022; Comply with data integrity and security policies</li>\n        <li>&#x2022; Ensure proper use of office equipment and address any malfunctions</li>\n</ul>\n\n<strong>Requirements and Skills:</strong>\n<ul style=\"margin-left: 30px\" class=\"mb-4\">\n<li>&#x2022; Proven data entry work experience, as a Data Entry Operator or Office Clerk</li>\n       <li>&#x2022; Experience with MS Office and data programs</li>\n       <li>&#x2022; Familiarity with administrative duties</li>\n       <li>&#x2022; Experiences using office equipment, like fax machines and scanner</li>\n       <li>&#x2022; Typing speed and accuracy</li>\n       <li>&#x2022; Excellent knowledge of correct spelling, grammar, and punctuation</li>\n       <li>&#x2022; Attention to detail</li>\n       <li>&#x2022; Organization skills, with an ability to stay focused on assigned tasks</li>\n       <li>&#x2022; College graduate; additional computer training or certification will be an asset</li>\n</ul>', 'FaGlobe', 'data-entry-operator-300x189.png', '', '2024-11-28 14:27:39', '2024-11-28 15:52:09'),
(18, 'Accounting Associate', 'Full-time', 'On-site', 'Closed', '<strong>Job Descriptions</strong>\n<p class=\"mb-4\">\nMainly focuses on US-based payroll, sales tax filing, bookkeeping and tax return filing using Cloud-based programs\n</p>\n\n<ul style=\"margin-left: 30px\" class=\"mb-4\">\n	<li>&#x2022;  Compile and analyze raw data for basic payroll processing</li>\n 	<li>&#x2022;  General Bookkeeping to Financial Reporting</li>\n 	<li>&#x2022;  Monthly data transaction entry</li>\n 	<li>&#x2022;  Bank Reconciliation</li>\n 	<li>&#x2022;  Prepare Sales Report and sales tax filing</li>\n 	<li>&#x2022; Accounts Receivable and Accounts Payable</li>\n 	<li>&#x2022; Billing and Invoicing</li>\n 	<li>&#x2022; Fixed Assets entry with Depreciation/Amortization Schedule</li>\n</ul>\n\n<strong>Job Qualifications:</strong>\n<ul style=\"margin-left: 30px\" class=\"mb-4\">\n<li>&#x2022; Bachelor\'s degree in Accountancy, Financial Management, or relevant field.</li>\n 	<li>&#x2022; Experience on accounting procedures such as bank reconciliation, sales registration, payroll, general ledger and financial reports and other accounting related work.</li>\n 	<li>&#x2022; Experience in computer-based bookkeeping like Quickbooks or other financial accounting software programs.</li>\n 	<li>&#x2022; Advanced proficiency with Google Suite, MS Word, and MS Excel</li>\n 	<li>&#x2022; Work experience in accounting/bookkeeping is an advantage.</li>\n 	<li>&#x2022; Willing to be trained.</li>\n</ul>\n\n<strong>Job Skills:</strong>\n<ul style=\"margin-left: 30px\" class=\"mb-4\">\n<li>&#x2022; Proficient in Data Entry skills</li>\n 	<li>&#x2022; Keen attention to detail and has reliable analytical skills</li>\n 	<li>&#x2022; Good communication skills (both written and oral)</li>\n 	<li>&#x2022; Computer literate</li>\n 	<li>&#x2022; Performs such other accounting related functions that may be assigned from time to time.</li>\n</ul>', 'FaAccessibleIcon', 'accounting-associate-300x198.png', '', '2024-11-28 14:34:28', '2024-11-29 09:41:20'),
(19, 'Senior Service Desk Engineer', 'Full-time', 'On-site', 'Closed', '<strong>Responsibilities:</strong>\n<ul style=\"margin-left: 30px\" class=\"mb-4\">\n<li>&#x2022; Responsible for the completion of long-term IT engineering projects on-time, pulling in necessary resources</li>\n 	<li>&#x2022; Implement and update network infrastructure, software, and hardware for new and existing clients</li>\n 	<li>&#x2022; Create and maintain documentation</li>\n 	<li>&#x2022; Provide new technology training to clients</li>\n 	<li>&#x2022; Troubleshoot technical issues as they arrive</li>\n 	<li>&#x2022; Resolve high-level help desk support requests as needed</li>\n 	<li>&#x2022; Engage in internal company projects as needed</li>\n 	<li>&#x2022; Contribute to team effort by accomplishing related results as needed</li>\n 	<li>&#x2022; Maintain safe and clean working environment by enforcing procedures, rules, and regulations</li>\n 	<li>&#x2022; Manage client communication and drive progress for assigned projects</li>\n 	<li>&#x2022; Provide clients with regular updates on project schedule and action items</li>\n 	<li>&#x2022; Work closely with Project Management Team on change of scope</li>\n</ul>\n\n<strong>Qualifications and requirements (or equivalent experience):</strong>\n<ul style=\"margin-left: 30px\" class=\"mb-4\">\n<li>&#x2022; 7+ years in IT with increasing responsibility</li>\n 	<li>&#x2022; Experience creating and managing a work-breakdown structure</li>\n 	<li>&#x2022; VCP6-DCV (VMware)</li>\n 	<li>&#x2022; CompTIA+ and/or Network+</li>\n 	<li>&#x2022; Extensive experience with Office365 doing email migrations from on-prem exchange</li>\n 	<li>&#x2022; Extensive experience implementing new backup solutions</li>\n 	<li>&#x2022; Virtualization experience</li>\n 	<li>&#x2022; SAN Storage experience</li>\n 	<li>&#x2022; NAS Storage experience</li>\n 	<li>&#x2022; Excellent communication and interpersonal skills</li>\n 	<li>&#x2022; Understands the importance of outstanding customer service</li>\n 	<li>&#x2022; Cool and collected under pressure</li>\n 	<li>&#x2022; Able to multitask efficiently</li>\n</ul>\n\n<strong>Additional Skills (optional):</strong>\n<ul style=\"margin-left: 30px\" class=\"mb-4\">\n<li>&#x2022;  ITIL v3 (even if expired)</li>\n 	<li>&#x2022; MCSE (Microsoft)</li>\n 	<li>&#x2022; CISSP</li>\n 	<li>&#x2022; Any other VCP6 or 7</li>\n 	<li>&#x2022; Firewall certifications</li>\n 	<li>&#x2022; Experience with Veeam</li>\n 	<li>&#x2022; Experience with SAN’s</li>\n</ul>', 'Fa500Px', 'senior-service-desk-engineer-300x189.png', '<strong>The Role:</strong>\n<p class=\"mb-4\">\nWe are looking for an accountable, proactive Senior Systems Engineer to be responsible for all engineering and technical disciplines required for executing on technical help desk issues.\n</p>\n', '2024-11-28 14:42:04', '2024-11-28 15:43:23'),
(20, 'IT Support Staff', 'Full-time', 'On-site', 'Closed', '', 'FaAccessibleIcon', 'fbs-ads-it-supp-300x189.png', '<strong>Qualifications:</strong>\n<ul style=\"margin-left: 30px\" class=\"mb-4\">\n<li>&#x2022; Candidate must possess at least Bachelor\'s/College Degree in Computer Science/Information Technology or equivalent.</li>\n 	<li>&#x2022; Preferably Experienced Employee specialized in IT/Computer - Network/System/Database Admin or equivalent.</li>\n 	<li>&#x2022; Maintenance, monitoring, and troubleshooting of computer networks, systems and all other IT related task.</li>\n 	<li>&#x2022; With strong knowledge in computer software programs for document generation.</li>\n 	<li>&#x2022; Management of company’s tools and equipment and property inventory using any database software application.</li>\n 	<li>&#x2022; Provide technical direction to co-workers on computer and network usage and offer comprehensive advice and instructions.</li>\n</ul>', '2024-11-28 14:49:42', '2024-11-28 15:43:36'),
(21, 'Mobile App Developer', 'Full-time', 'On-site', 'Closed', '<strong>Required Skills:</strong>\n<ul style=\"margin-left: 30px\" class=\"mb-4\">\n<li>&#x2022; Programming languages such as C#, Java, Objective-C, Swift, Python</li>\n 	<li>&#x2022; Can program mobile apps on both platforms (Android/iOS)</li>\n 	<li>&#x2022; Experience in developing apps using Xamarin, Android Studio, Xcode</li>\n 	<li>&#x2022; Have a good sense of utilizing mobile UI/UX design</li>\n 	<li>&#x2022; The ability to learn quickly and follow technical plans</li>\n 	<li>&#x2022; Problem-solving skills</li>\n 	<li>&#x2022; Strong communication skills</li>\n 	<li>&#x2022; Bachelor\'s degree in any IT related course</li>\n</ul>', 'FaAccessibleIcon', 'hiring-mobile-dev-300x198.png', '<strong>Responsibilities:</strong>\n<ul style=\"margin-left: 30px\" class=\"mb-4\">\n<li>&#x2022; Create, maintain and implement the source code to develop mobile apps and programs that meet the needs and requirements of the clients</li>\n 	<li>&#x2022; Discussing the client\'s requirements and proposed solutions with the team</li>\n 	<li>&#x2022; Developing application programming interfaces (APIs) for mobile apps</li>\n 	<li>&#x2022; Keeping up to date with the terminology, concepts, and best practices</li>\n 	<li>&#x2022; Using and adapting to existing web applications for apps</li>\n 	<li>&#x2022; Working closely with the team to innovate app functionality and design</li>\n</ul>', '2024-11-28 14:55:51', '2024-11-29 07:41:43'),
(22, 'WordPress Developer', 'Full-time', 'On-site', 'Closed', '<strong>Required Skills:</strong>\n<ul style=\"margin-left: 30px\" class=\"mb-4\">\n<li>&#x2022; Exceptional writing, communication, and organizational skills</li>\n 	<li>&#x2022; Knowledge of HTML, CSS, JavaScript, PHP &amp; MySQL Database and experience with WordPress</li>\n 	<li>&#x2022; Ability to manage multiple projects in a fast-paced, deadline-driven environment</li>\n 	<li>&#x2022; Basic Adobe Photoshop skills</li>\n 	<li>&#x2022; Proven ability to build consensus and work effectively within a cross-departmental team</li>\n 	<li>&#x2022; Bachelor\'s degree in any IT related course</li>\n</ul>', 'Fa500Px', 'hiring-wordpress-300x198.png', '<strong>Responsibilities:</strong>\n<ul style=\"margin-left: 30px\" class=\"mb-4\">\n<li>&#x2022; Create, develop and manage content for the organization\'s web presence</li>\n 	<li>&#x2022; Maintain a consistent look and feel throughout all web properties</li>\n 	<li>&#x2022; Proofread all web content and ensure accuracy of data</li>\n 	<li>&#x2022; Assure web-based information is archived for future needs and reference</li>\n 	<li>&#x2022; Track and report on relevant site metrics</li>\n 	<li>&#x2022; Work cooperatively with key team members, clients, and vendors</li>\n</ul>', '2024-11-28 15:01:30', '2024-12-02 08:10:56'),
(23, 'Test Job', 'Part-time', 'On-site', 'Ongoing', 'Test description', 'FaAccusoft', 'Array', 'Test Overview', '2025-02-20 10:22:07', '2025-02-20 10:22:07');

-- --------------------------------------------------------

--
-- Table structure for table `fbsv2_events_activities`
--

CREATE TABLE `fbsv2_events_activities` (
  `events_activities_aid` int(11) NOT NULL,
  `events_activities_is_active` tinyint(1) NOT NULL,
  `events_activities_img` varchar(100) NOT NULL,
  `events_activities_img_list` text NOT NULL,
  `events_activities_category` varchar(100) NOT NULL,
  `events_activities_title` varchar(200) NOT NULL,
  `events_activities_slug` varchar(100) NOT NULL,
  `events_activities_date` varchar(20) NOT NULL,
  `events_activities_description` text NOT NULL,
  `events_activities_created` datetime NOT NULL,
  `events_activities_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_events_activities`
--

INSERT INTO `fbsv2_events_activities` (`events_activities_aid`, `events_activities_is_active`, `events_activities_img`, `events_activities_img_list`, `events_activities_category`, `events_activities_title`, `events_activities_slug`, `events_activities_date`, `events_activities_description`, `events_activities_created`, `events_activities_datetime`) VALUES
(2, 1, 'img_3348-1080x550.jpg', '', 'Partnership', 'Annual Career Fest 2024 at STI College', 'annual-career-fest-2024-at-sti-college-cavite', '2024-10-03', '<p>We are thrilled to share our recent participation in the Annual Career Fest 2024 at STI College San Pablo, an event dedicated to connecting graduating students with potential career opportunities.</p>\n\n<div style=\"display: flex; align-items: center; justify-content: center; flex-wrap: wrap; margin-bottom: 30px\">\n<img src=\"../../newsite/img/sti-1.webp\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n<img src=\"../../newsite/img/sti-15.webp\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n<img src=\"../../newsite/img/sti-6.webp\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n<img src=\"../../newsite/img/sti-7.webp\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n<img src=\"../../newsite/img/sti-8.webp\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n<img src=\"../../newsite/img/sti-9.webp\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n<img src=\"../../newsite/img/sti-14.webp\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n<img src=\"../../newsite/img/sti-5.webp\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n</div>\n\n<p>Our company proudly offers aspiring young professionals in the field of IT a gateway to enter the industry of web development. Our booth attracted numerous applicants eager to become full-stack developers. We were fortunate to provide job opportunities to students from BS Information Technology, BS Computer Science, and BS Computer Engineering programs. This event also paved the way for us to build a strong partnership with STI College San Pablo, enhancing our efforts in talent acquisition and contributing to the field of Information Technology. We look forward to continuing our collaboration with STI College San Pablo and supporting the next generation of IT professionals.</p>', '0000-00-00 00:00:00', '2024-10-29 10:45:09'),
(3, 1, 'team-building-2024.jpg', '', 'Company Activitiess', 'Team Building 2024', 'team-building-2024', '2024-08-07', '<p style=\"margin-bottom: 30px\">\n  From May 15 to 17, our team gathered at La Luz Beach Resort for our 2024\n  Company Team Building. The event was packed with engaging activities aimed at\n  fostering camaraderie and teamwork.\n</p>\n\n<p style=\"margin-bottom: 30px\">\n  We kicked off with inspiring messages from our administrators and client\n  visitors, setting a positive tone. The retreat featured a variety of games,\n  including tug of war, beach volleyball, and a “Drum Whole” competition,\n  highlighting the importance of teamwork, synchronization, and creativity. The\n  lively “Family Feud” game and the spirited yell competition showcased our team\n  spirit and enthusiasm.\n</p>\n\n<p style=\"margin-bottom: 30px\">\n  The retreat concluded with reflections from our administrators and client\n  visitors, who emphasized the growth in our team dynamics over the past days.\n  As we departed from La Luz Beach Resort, we felt a renewed sense of unity and\n  commitment to supporting each other, ready to tackle future challenges\n  together with enhanced teamwork and shared purpose.\n</p>\n', '0000-00-00 00:00:00', '2025-01-08 13:37:56'),
(7, 1, '5th-year-thumb_3.jpg', 'grad.jpg, group.jpg', 'Events', 'Fifth Year Anniversary', 'fifth-year-anniversary', '2024-10-30', '<p style=\"margin-bottom: 30px\">\n  We’ve come a long way since then, adding new services like Virtual Office and\n  a Learning Center to support education and skill development. The pandemic\n  brought challenges, but we adapted by working remotely without letting go of\n  our team or clients. This difficult time showed our strength and the trust our\n  clients have in us, helping us grow and make a difference in our community.\n</p>\n\n<p style=\"margin-bottom: 30px\">\n  As we celebrate five years, we’re proud and grateful. Our goal has always been\n  more than just business – it’s about doing business for good. Looking forward,\n  we’re excited to keep making a positive impact on lives and businesses. Here’s\n  to five years of growth, strength, and service, and to many more years of\n  making a positive change. Cheers to Frontline Business Solutions, where every\n  day is a chance to make a difference.\n</p>\n<p style=\"text-align: center; display: flex; justify-content: center\">\n  <iframe\n    width=\"560\"\n    height=\"315\"\n    src=\"https://www.youtube.com/embed/gReHchZNERM?si=0VpXHIQzrF09WC_A\"\n    title=\"YouTube video player\"\n    frameborder=\"0\"\n    allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\"\n    referrerpolicy=\"strict-origin-when-cross-origin\"\n    allowfullscreen\n  ></iframe>\n</p>\n', '0000-00-00 00:00:00', '2024-12-13 13:20:06'),
(8, 1, 'The-Ideal-Team-Player-Seminar-3-scaled.jpg', '', 'Events', 'The Ideal Team Player Seminar', 'the-ideal-team-player-seminar', '2024-10-31', '<p style=\"margin-bottom: 30px\">In order to foster a thriving and harmonious work environment, the Learning Center Solutions team, led by Mr. Jhonny Jose Dichoso, conducted an engaging and insightful seminar on “The Ideal Team Player: Embracing Humble, Hungry, and Smart Virtues.” The seminar aimed to explore the significance of these three virtues and their application in building effective teams and achieving organizational success.</p>\n\n<p style=\"margin-bottom: 30px\">The seminar also identified the categories of employees who might lack or be deficient in these virtues, such as individuals who are overly self-centered, lack initiative, or struggle with interpersonal dynamics.</p>\n\n<p style=\"margin-bottom: 30px\">To deepen the understanding of these virtues and foster practical application, the seminar featured engaging group discussions and activities. Participants were encouraged to share experiences and scenarios where these virtues played pivotal roles in team dynamics and outcomes. Through group activities and exercises, attendees practiced being humble, hungry, and smart, honing their skills in communication, empathy, and collaboration.</p>\n\n<p style=\"margin-bottom: 30px\">Furthermore, the seminar emphasized the Four Primary Applications of the ideal team player framework: Hiring, Assessing, Developing and Embedding</p>\n\n<p style=\"margin-bottom: 30px\">In conclusion, the seminar on “The Ideal Team Player” by the Learning Center Solutions team provided invaluable insights into building strong, high-performing teams. By fostering a culture of humility, drive, and emotional intelligence, organizations can create a winning environment where team members complement each other’s strengths and work synergistically towards achieving shared goals.</p>\n', '0000-00-00 00:00:00', '2025-01-08 13:46:48'),
(9, 1, 'company-retreat-2024.jpg', 'company-retreat-2024.jpg', 'Events', 'Company Retreat 2024', 'company-retreat-2024', '2024-10-31', '<p>We took this time to deeply reflect on the significance of glorifying God through our work. Each daily task presents an opportunity to showcase His love and grace, reminding us that our efforts can touch lives in meaningful ways. We emphasized the importance of integrity in serving others, as it fosters trust within our team. Aligning our work with God\'s purpose brings a deeper meaning to our roles, inspiring us to make a positive impact not just within our team but in the communities we serve. We are reminded that our work is a calling, a chance to reflect His light in everything that we do.</p>\n\n<p>As a company of faith, we are committed to nurturing an environment where spiritual values guide our actions and decisions, promoting unity and a sense of family among us. Each moment shared strengthens our bonds and empowers us to pursue our mission with renewed passion.</p>\n\n<p>Let’s carry this spirit forward, recognizing that our collective efforts can create change in the world around us. Here’s to continuing our mission together and making a lasting difference!</p>', '0000-00-00 00:00:00', '2024-12-13 12:17:27'),
(10, 1, 'lcs-visits-5.jpg', '', 'Partnership', 'LCS School Visits', 'lcs-school-visits', '2024-10-31', '<p style=\"margin-bottom: 30px\">Our Learning Center Solutions Team embarked on an inspiring journey to visit several educational institutions, presenting the many opportunities our Learning Center Solutions Department has to offer. Our team introduced innovative programs for college on-the-job training and senior high school work immersion, with a focus on creating impactful partnerships that empower students through practical learning experiences.</p>\n\n<div style=\"display: flex; flex-wrap: wrap; margin-bottom: 30px align-items: center; justify-content: center;\">\n<img src=\"../../newsite/img/lcs-visits-1.jpg\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n<img src=\"../../newsite/img/lcs-visits-2.jpg\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n<img src=\"../../newsite/img/lcs-visits-3.jpg\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n<img src=\"../../newsite/img/lcs-visits-4.jpg\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n<img src=\"../../newsite/img/lcs-visits-6.jpg\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n<img src=\"../../newsite/img/lcs-visits-7.jpg\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n<img src=\"../../newsite/img/lcs-visits-8.jpg\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n</div>\n<p style=\"margin-bottom: 30px\">We are deeply grateful to the schools that welcomed us with open arms: Marcelino Fule Memorial College, St. Therese Montessori School of San Pablo, Inc., St. Nicolas Golden Field Academy Inc., LSPU-San Pablo City Campus, ACLC College of San Pablo City Campus, San Pablo Colleges, and Asian Institute of Technology and Education. Your trust and enthusiasm reinforce our mission to support students’ growth and development.</p>\n\n<p style=\"margin-bottom: 30px\">A heartfelt thank you goes to our dedicated team members—Mr. Ansbert Gregana, Ms. Herlyn Torres, and Ms. Thea Lyzette Consignado—whose passion and commitment, under the expert guidance of Mr. Jhonny Dichoso, drive the success of these partnerships. Together, we are shaping a brighter future for the next generation of professionals.</p>\n\n<p style=\"margin-bottom: 30px\">Our programs are designed to develop technical skills, professionalism, and ethical qualities—key competencies for students to excel in the industry. With these foundational qualities, we’re here to support students as they embark on their career journeys.</p>\n\n', '0000-00-00 00:00:00', '2025-01-02 08:48:37'),
(26, 0, 'Batch-61.jpg', 'Batch-61.jpg', 'Test', 'Test', 'test', '2024-09-29', 'test test...', '2025-01-03 07:17:45', '2025-01-06 15:13:23'),
(27, 0, 'Batch-61.jpg', 'Batch-61.jpg', 'Test 2', 'test2', 'test2', '2025-01-03', 'test', '2025-01-03 13:39:51', '2025-01-06 07:13:55');

-- --------------------------------------------------------

--
-- Table structure for table `fbsv2_home_banner`
--

CREATE TABLE `fbsv2_home_banner` (
  `home_banner_aid` int(11) NOT NULL,
  `home_banner_sub_title` varchar(100) NOT NULL,
  `home_banner_title` varchar(100) NOT NULL,
  `home_banner_description` varchar(500) NOT NULL,
  `home_banner_button_text` varchar(50) NOT NULL,
  `home_banner_img` text NOT NULL,
  `home_banner_created` datetime NOT NULL,
  `home_banner_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_home_banner`
--

INSERT INTO `fbsv2_home_banner` (`home_banner_aid`, `home_banner_sub_title`, `home_banner_title`, `home_banner_description`, `home_banner_button_text`, `home_banner_img`, `home_banner_created`, `home_banner_datetime`) VALUES
(1, 'In business for good.', 'Your Trusted Christian Partner in Managed Services', 'We deliver end-to-end solutions and professional expertise in web applications, websites, virtual assistants, and skills development. Rooted in Christian values, we are committed to integrity and excellence in helping you elevate your digital presence, streamline operations, and build a more skilled workforce. Our comprehensive services are designed to drive your success with a mission to serve with purpose and care.', 'GET STARTED', '[{\"name\":\"home-bg-new.jpg\",\"id\":\"1U8WGrvM-68u6raIdhUJ0rVLDP4httKeT\",\"datetime\":\"2025-02-19 10:40:48\"}]', '0000-00-00 00:00:00', '2025-02-19 10:40:44'),
(2, 'Custom Solutions, Lasting Growth', 'Empower your business with Custom Web Applications', 'We provide custom web application development services tailored to meet your business needs, combining robust functionality with user-friendly design. Our solutions aim to improve business efficiency and automate processes, helping you achieve your goals with modern, scalable technology.', 'GET STARTED', '[{\"name\":\"home-bg-webapp.jpg\",\"id\":\"1SHh7M-MWM0z-scXrDZaQUEI7ZJV_LhRf\",\"datetime\":\"2025-02-19 10:41:06\"}]', '2024-10-27 00:18:24', '2025-02-19 10:41:02'),
(3, 'Digital Design, Meaningful Engagement', 'Elevate your digital presence with responsive, user-friendly                     Websites', 'Our website services include design, development, and maintenance to ensure your digital presence is impactful and aligned with your brand. We create responsive, visually appealing, and SEO-friendly websites that enhance user experience and drive customer engagement.', 'GET STARTED', '[{\"name\":\"home-bg-website.jpg\",\"id\":\"1MR4dWB9P4LEAC7QkmKluTo4D7_BaX-5e\",\"datetime\":\"2025-02-19 10:41:23\"}]', '0000-00-00 00:00:00', '2025-02-19 10:41:19'),
(4, 'Virtual Support, Real Results', 'Streamline your operations with skilled Virtual Assistants.', 'Our skilled virtual assistants offer comprehensive support to help you manage tasks and optimize daily operations. From administrative duties to customer service, we provide reliable and efficient assistance, allowing you to focus on growing your business.', 'GET STARTED', '[{\"name\":\"home-bg-va.jpg\",\"id\":\"1ywFTFCOSshqVGXhJ8oHw_d3btCfhfYV9\",\"datetime\":\"2025-02-19 10:41:39\"}]', '0000-00-00 00:00:00', '2025-02-19 10:41:35'),
(5, 'Work-Related Training, Career Success', 'Hands-on training with actual industry experience.', 'We offer structured skills development programs that equip individuals with the technical and soft skills needed in today’s workforce. Our On-the-job training and work immersion program covers web development, IT, and accounting, bridging the gap between education and employment, and empowering participants for career success.', 'GET STARTED', '[{\"name\":\"home-bg-lcs.webp\",\"id\":\"1jmDOXF_yGsLgXw-55cRV2z4wxI7lqTqm\",\"datetime\":\"2025-02-19 10:41:53\"}]', '2024-10-27 00:22:58', '2025-02-19 10:41:49'),
(14, 'xcfg', 'xcfv', '', 'xffdg', '[{\"name\":\"home-bg-website.webp\",\"id\":\"1-31tWCJjuLES6cCNl_bKOGhvZDXoVUcs\",\"datetime\":\"2025-02-19 10:40:08\"}]', '2025-02-19 08:47:30', '2025-02-19 10:40:01');

-- --------------------------------------------------------

--
-- Table structure for table `fbsv2_home_insights`
--

CREATE TABLE `fbsv2_home_insights` (
  `home_insights_aid` int(11) NOT NULL,
  `home_insights_is_active` tinyint(1) NOT NULL,
  `home_insights_img` text NOT NULL,
  `home_insights_category` varchar(200) NOT NULL,
  `home_insights_title` varchar(200) NOT NULL,
  `home_insights_slug` varchar(100) NOT NULL,
  `home_insights_date` varchar(20) NOT NULL,
  `home_insights_paragraph_a` text NOT NULL,
  `home_insights_paragraph_b` varchar(500) NOT NULL,
  `home_insights_paragraph_c` varchar(500) NOT NULL,
  `home_insights_created` datetime NOT NULL,
  `home_insights_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_home_insights`
--

INSERT INTO `fbsv2_home_insights` (`home_insights_aid`, `home_insights_is_active`, `home_insights_img`, `home_insights_category`, `home_insights_title`, `home_insights_slug`, `home_insights_date`, `home_insights_paragraph_a`, `home_insights_paragraph_b`, `home_insights_paragraph_c`, `home_insights_created`, `home_insights_datetime`) VALUES
(4, 1, '[{\"name\":\"virtual-assistant.jpg\",\"id\":\"1LW_6KAmwswIzOIHbLz87A5ZCzQn9ZWjl\",\"datetime\":\"2025-02-19 14:17:10\"}]', 'Virtual Assistant', 'Maximizing Productivity with Virtual Assistant Services: Your Secret to Streamlining Success', 'maximizing-productivity-with-virtual-assistant-services', '2024-10-26', '<p>\n  In today’s fast-paced business world, time is very precious. The demand to\n  juggle multiple tasks can be overwhelming and can take so much of your time.\n  This relentless multitasking not only drains energy but also reduces overall\n  productivity.\n</p>\n\n<p>\n  Sarah Harris, who handles Customer Support Requests at Workast, shared eight\n  powerful ways a virtual assistant can significantly boost your productivity.\n  By delegating routine tasks to a skilled VA, you can reclaim your time and\n  focus on what truly matters—growing your business and enhancing your core\n  operations.\n</p>\n\n<p>\n  Let’s dive into those ways and explore how a virtual assistant can be the\n  game-changer you’ve been looking for!\n</p>\n\n<ul style=\"margin-left: 30px\">\n  <li>\n    <strong> 1. Enhanced Task Organization</strong>\n    <p>\n      Your company’s productivity depends on how well your tasks are organized.\n      When your tasks and schedules are structured properly, you’ll encounter\n      fewer problems and experience smoother operations.\n    </p>\n    <p>\n      Virtual assistants can help you stay on top of your tasks by keeping your\n      to-do list organized and ensuring business processes are streamlined. By\n      taking on responsibilities like answering customer queries, handling email\n      management, or handling social media posts, Virtual Assistants allow you\n      to focus on growing your business. With a Virtual Assistant, you’ll be\n      able to run your operations and set priorities without any distractions.\n    </p>\n  </li>\n  <li>\n    <strong>2. Better Time Management</strong>\n    <p>\n      Running a business often means juggling numerous tasks, and before you\n      know it, your entire day fills up quickly. It can be hard to remember\n      everything.\n    </p>\n    <p>\n      This is where Virtual Assistants would be beneficial to you. They can do\n      scheduling appointments, keep you on track for meetings, and ensure you\n      meet all your deadlines.\n    </p>\n  </li>\n  <li>\n    <strong>3. Avoiding Multitasking</strong>\n    <p>\n      Multitasking is often seen as a valuable skill, but studies show it can\n      lower productivity. We are not designed to juggle multiple tasks\n      simultaneously. Instead, focusing on one task at a time gives clearer\n      thinking and better solutions.\n    </p>\n    <p>\n      With the help of Virtual Assistant, they can reduce the pressure to\n      multitask, allowing you to focus on what truly matters. With their\n      support, you can prioritize important projects, avoid distractions, and\n      enhance your productivity.\n    </p>\n  </li>\n  <li>\n    <strong>4. Can take more breaks</strong>\n    <p>\n      Taking regular breaks can boost productivity. Continuously working without\n      breaks leads to burnout and decreased focus which can result in poor\n      productivity.\n    </p>\n    <p>\n      With a VA handling certain tasks for you, while you take a break, you\n      won’t have to worry about your deadlines. Whether it’s a quick coffee or\n      even a short meditation, breaks keep you mentally refreshed and ready to\n      tackle your work with renewed energy.\n    </p>\n  </li>\n  <li>\n    <strong>5. Reducing Distractions, Increasing Output</strong>\n    <p>\n      Common workplace distractions, can eat up valuable time and reduce\n      productivity. Once distracted, it’s often hard to get back on track, and\n      the \"restart\" process can lower the quality of your work.\n    </p>\n    <p>\n      Virtual assistants work in focused, distraction-free environments,\n      allowing them to complete tasks efficiently and effectively. With fewer\n      distractions in their work setting, VAs can manage their time better,\n      increasing their overall productivity without interruptions.\n    </p>\n  </li>\n  <li>\n    <strong>6. Specialized Expertise</strong>\n    <p>\n      As an entrepreneur, you might want to master every aspect of your\n      business, but that’s simply not feasible. Virtual assistants handle a\n      range of tasks with skill and efficiency.\n    </p>\n    <p>\n      From content creation to bookkeeping, VAs are equipped to take on\n      repetitive or specialized tasks, often completing them faster due to their\n      familiarity and experience. This allows your business to run more\n      smoothly, as tasks are handled by experts, freeing you up to focus on\n      areas where your skills shine.\n    </p>\n  </li>\n  <li>\n    <strong>7. Filtering Communication</strong>\n    <p>\n      Not every message or notification you receive requires your immediate\n      attention. Many messages can be quickly responded to or ignored. A virtual\n      assistant can help manage your inbox and communication channels, filtering\n      out unnecessary messages and ensuring that only the most important\n      messages reach you.\n    </p>\n    <p>\n      By having your VA handle the routine communications, you can focus on the\n      conversations that truly matter.\n    </p>\n  </li>\n  <li>\n    <strong>8. Focus on What You Do Best</strong>\n    <p>\n      Most business owners have a core area of expertise. However, in the early\n      stages of running a business, you may also need to tackle other tasks such\n      as customer support, bookkeeping, or managing social media, which might\n      not be your strengths.\n    </p>\n  </li>\n</ul>\n\n<p>\n  Outsourcing these tasks to a virtual assistant allows you to focus on what you\n  do best. You can rely on your VA to manage the tasks you find challenging or\n  time-consuming, ensuring they’re done expertly and efficiently.\n</p>\n', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit voluptatibus voluptatum provident, explicabo maxime officia odio nihil tempora vero quod esse mollitia architecto quam officiis quia a modi\n minima ullam corporis deserunt. Explicabo, ut est! Minima quia autem\nblanditiis vel consequuntur amet in voluptatibus nemo quas non esse vero ipsum repellat sed ea nobis nulla est corrupti animi vitae, repudiandae ut. Harum explicabo totam quia in, voluptatibus deserunt sit quod quis aliquam co', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit voluptatibus voluptatum provident, explicabo maxime officia odio nihil tempora vero quod esse mollitia architecto quam officiis quia a modi\n minima ullam corporis deserunt. Explicabo, ut est! Minima quia autem\nblanditiis vel consequuntur amet in voluptatibus nemo quas non esse vero ipsum repellat sed ea nobis nulla est corrupti animi vitae, repudiandae ut. Harum explicabo totam quia in, voluptatibus deserunt sit quod quis aliquam co', '0000-00-00 00:00:00', '2025-02-19 14:17:07'),
(8, 1, '[{\"name\":\"b6-2.webp\",\"id\":\"1y4OqO9p8LOKo_JzXOM_5VmXDeiecaTFW\",\"datetime\":\"2025-02-19 14:33:39\"}]', 'Web Development', 'Why Website Maintenance is Crucial for any Business', 'why-website-maintenance-is-crucial-for-any-business', '2024-10-25', '<p>\n  A website is one of the most important marketing tools\n  for any business. It is a powerful tool for engaging with customers and\n  driving growth. Website maintenance entails regularly updating a site’s\n  software, content, and security measures. Failing to maintain a website can\n  result in issues like slow load times, broken links, security risks, and\n  decreased search engine rankings.\n</p>\n\n<p>\n  Mirza Hadi Baig, a Full Stack Developer and Shopify Developer, shared her\n  insights on why website maintenance is crucial for any business. Let’s dive\n  into those reasons and uncover why consistent website maintenance is a must\n  for any business.\n</p>\n\n<ul style=\"margin-left: 30px\">\n  <li>\n    <strong> 1. Security</strong>\n    <p>\n      With the increasing number of cyber-attacks, website security is more\n      critical than ever. A website not regularly maintained is vulnerable to\n      hacking, malware, and other security breaches. Regular website\n      maintenance, such as updating software and security features, can help\n      prevent these attacks and protect your customers\' data.\n    </p>\n  </li>\n  <li>\n    <strong>2. Performance:</strong>\n    <p>\n      A slow-loading website can significantly impact the user experience,\n      leading to high bounce and decreased conversion rates. Regular website\n      maintenance can help to identify and fix issues that affect website\n      performance, such as broken links, outdated plugins, and unoptimized\n      images.\n    </p>\n    <p>\n      This is where Virtual Assistants would be beneficial to you. They can do\n      scheduling appointments, keep you on track for meetings, and ensure you\n      meet all your deadlines.\n    </p>\n  </li>\n  <li>\n    <strong>3. Search engine optimization (SEO):</strong>\n    <p>\n      Search engines regularly update their algorithms, and a website that is\n      not regularly maintained may be penalized in search engine rankings.\n      Regular website maintenance can help to keep the website up-to-date with\n      the latest SEO practices, ensuring that it ranks higher in search engine\n      results pages.\n    </p>\n  </li>\n  <li>\n    <strong>4. Brand image:</strong>\n    <p>\n      A well-maintained website creates a positive brand image for a business.\n      It shows that the business is professional, up-to-date, and cares about\n      its customers. On the other hand, a poorly maintained website can make a\n      business appear unprofessional and untrustworthy.\n    </p>\n  </li>\n  <li>\n    <strong>5. Cost-effective:</strong>\n    <p>\n      Regular website maintenance can prevent major issues from occurring, which\n      can be costly to fix. Investing in regular maintenance can save businesses\n      money in the long run by preventing major issues from occurring.\n    </p>\n  </li>\n  <li>\n    <strong>6. Regularly back up your website</strong>\n    <p>\n      Backing up your website regularly is an essential part of website\n      maintenance. It ensures that your website data is safe in case of any\n      unforeseen events, such as a server crash or hacking. You can use\n      automated backup tools or perform manual backups regularly.\n    </p>\n  </li>\n  <li>\n    <strong>7. Update website content:</strong>\n    <p>\n      Regularly updating your website content not only keeps your website fresh\n      but also helps with SEO. Add new blog posts, update product descriptions,\n      and add new images and videos to keep your website engaging and\n      up-to-date.\n    </p>\n  </li>\n  <li>\n    <strong>8. Monitor website analytics</strong>\n    <p>\n      Website analytics provide valuable insights into your website\'s\n      performance, such as traffic sources, user behavior, and conversion rates.\n      Regularly monitor your website analytics using tools such as Google\n      Analytics and use the data to optimize your website for better\n      performance.\n    </p>\n  </li>\n  <li>\n    <strong>9. Keep software up-to-date:</strong>\n    <p>\n      Keeping your website software up-to-date is crucial for security and\n      performance. Regularly update your content management system (CMS),\n      plugins, and themes to the latest version. However, be cautious when\n      updating and testing updates in a staging environment before applying them\n      to the live site.\n    </p>\n  </li>\n  <li>\n    <strong>10. Conduct regular security checks:</strong>\n    <p>\n      Regularly check your website for security vulnerabilities and malware\n      using tools such as Sucuri, Wordfence, or SiteLock. Set up security alerts\n      to be notified of any suspicious activity on your website.\n    </p>\n  </li>\n  <li>\n    <strong>11. Test website functionality:</strong>\n    <p>\n      Regularly test your website functionality to ensure that all links, forms,\n      and other features are working correctly. Fix any issues that may be\n      affecting user experience or lead to a drop in search engine rankings.\n    </p>\n  </li>\n</ul>\n\n<p>\n  Regular website maintenance is essential for any business that wants to stay\n  competitive, secure, and relevant in today’s digital landscape. A\n  well-maintained website not only protects your business and customers from\n  potential security risks but also enhances the user experience, improves\n  search engine rankings, and strengthens your brand image. Proactive\n  maintenance saves time and resources by preventing costly issues down the\n  line, ultimately leading to greater efficiency and customer satisfaction. By\n  investing in routine maintenance, businesses ensure that their websites remain\n  valuable assets, driving growth and engagement in a fast-paced online\n  environment.\n</p>\n', '', '', '0000-00-00 00:00:00', '2025-02-19 14:33:36'),
(10, 1, '[{\"name\":\"learning.jpg\",\"id\":\"1vd0HLRLRiDa_VQh-jIxXWr3GSuw9d9Y1\",\"datetime\":\"2025-02-19 14:55:17\"}]', 'test', 'test', 'testttt', '2025-01-08', 'test', '', '', '2025-01-08 14:03:50', '2025-02-19 15:19:30'),
(11, 1, '[{\"name\":\"january2025-newsletter-cover.jpg\",\"id\":\"14ADtWcjwxBFMs1Y6kcK5IV50TwV32P7n\",\"datetime\":\"2025-02-19 14:36:36\"}]', 'test2', 'test2', 'test2', '2025-01-08', 'test2', '', '', '2025-01-08 14:54:33', '2025-02-19 14:36:33'),
(13, 1, '[{\"name\":\"web-developer-2.jpg\",\"id\":\"1OHeu7jQnVcY4hZI_PvFoe73hCe9-IoPO\",\"datetime\":\"2025-02-19 14:44:49\"}]', 'Testingss', 'Testingss', 'test', '2025-02-19', '', '', '', '2025-02-19 14:44:45', '2025-02-19 14:51:34');

-- --------------------------------------------------------

--
-- Table structure for table `fbsv2_home_testimonial`
--

CREATE TABLE `fbsv2_home_testimonial` (
  `home_testimonial_aid` int(11) NOT NULL,
  `home_testimonial_message` text NOT NULL,
  `home_testimonial_name` varchar(100) NOT NULL,
  `home_testimonial_position` varchar(100) NOT NULL,
  `home_testimonial_client_img` text NOT NULL,
  `home_testimonial_logo_img` text NOT NULL,
  `home_testimonial_created` datetime NOT NULL,
  `home_testimonial_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_home_testimonial`
--

INSERT INTO `fbsv2_home_testimonial` (`home_testimonial_aid`, `home_testimonial_message`, `home_testimonial_name`, `home_testimonial_position`, `home_testimonial_client_img`, `home_testimonial_logo_img`, `home_testimonial_created`, `home_testimonial_datetime`) VALUES
(12, 'FBS is a true partner to our firm. They have helped form our vision and trajectory. We are immensely grateful for our partnership. Our expectation is for FBS to grow with us. They are an important part of our success. And beyond the business perspective, they are fantastic people. We are blessed to work with them.', 'Robert Han ', 'COO / Partner', '[{\"name\":\"testimonial-robert-han-2-img.png\",\"id\":\"1pdOUtx_4Zptx2q11fMkLclZ3x9DzBAmk\",\"datetime\":\"2025-02-21 09:42:17\"}]', '[{\"name\":\"tm_logo_white.png\",\"id\":\"1EQiqW1-cTHuc8dBKk4L3rT4LFg_iCnPZ\",\"datetime\":\"2025-02-21 09:42:20\"}]', '0000-00-00 00:00:00', '2025-02-21 09:42:14'),
(13, 'Frontline has been an incredible organization to work with.  They are friendly, accommodating, and professional, but what stands out most is how responsive they are.  When I have a problem or request, I don’t think there has been a single time that not only have I received a response within the day, but whatever it was that I needed, their team has met that need within the day as well. I would highly recommend working with them.', 'Duane Masters ', 'Executive Director', '[{\"name\":\"testi-duane-masters-2.png\",\"id\":\"1GHMiI8JLLrX3XUzfjDIt6TuKQnIOpmxW\",\"datetime\":\"2025-02-21 09:43:51\"}]', '[{\"name\":\"world-focus-home.png\",\"id\":\"1BS5abyJwniXcceskyc-_miRtVvdlp3iE\",\"datetime\":\"2025-02-21 09:43:54\"}]', '0000-00-00 00:00:00', '2025-02-21 09:43:48'),
(14, 'We love working with FBS because they go the extra mile in doing the work. It’s nice to work with people who have the heart to serve. A mutually respecting relationship.', 'Hiro Isogawa ', 'CEO, CPA, Partner', '[{\"name\":\"testimonial-hiro-isogawa-2.png\",\"id\":\"1wjRJzXSdEpetS_yxpBeT2Is5ThwHZOBV\",\"datetime\":\"2025-02-21 09:44:16\"}]', '[{\"name\":\"tm_logo_white.png\",\"id\":\"1jzhM69VgJojudoPoHjRjni2BHY9TVTVg\",\"datetime\":\"2025-02-21 09:44:19\"}]', '0000-00-00 00:00:00', '2025-02-21 09:44:13'),
(15, 'We couldn\'t be more pleased with the incredible work done by the team at Frontline Business Solutions on our latest book design. Their attention to detail, creativity, and dedication to capturing our vision truly exceeded our expectations. The final product is both visually stunning and highly professional. It\'s clear that they are passionate about their craft, and we are grateful for their partnership in bringing this project to life. Thank you for your hard work and excellence!', 'Jared Roberts', 'Partner ', '[{\"name\":\"testimonial-jared-roberts.png\",\"id\":\"1aBuCHvwIru2-Fzm8jQ-5G4dw8DZHQXjD\",\"datetime\":\"2025-02-21 09:44:42\"}]', '[{\"name\":\"sent-ones.png\",\"id\":\"18FwuRqrPklfY0lDIG0RAAb-umWAcp_PB\",\"datetime\":\"2025-02-21 09:44:45\"}]', '2024-10-30 09:33:24', '2025-02-21 09:44:38'),
(37, 'Test 3', 'Test 3', 'Test 3 sdsds', '[{\"name\":\"coffee-3.webp\",\"id\":\"1pk2-Ef1ueJnHwnb2O1bX789V3yq5sHtl\",\"datetime\":\"2025-02-21 09:28:12\"}]', '[{\"name\":\"coffee-menu-4.webp\",\"id\":\"1q7FHRSF_o1jrZjE5_nZNn8Pg_lMKs9-I\",\"datetime\":\"2025-02-21 09:27:51\"}]', '2025-02-21 09:27:44', '2025-02-21 09:28:09');

-- --------------------------------------------------------

--
-- Table structure for table `fbsv2_industry_testimonial`
--

CREATE TABLE `fbsv2_industry_testimonial` (
  `industry_testimonial_aid` int(11) NOT NULL,
  `industry_testimonial_img` text NOT NULL,
  `industry_testimonial_logo` text NOT NULL,
  `industry_testimonial_name` varchar(150) NOT NULL,
  `industry_testimonial_position` varchar(150) NOT NULL,
  `industry_testimonial_message` text NOT NULL,
  `industry_testimonial_category` varchar(100) NOT NULL,
  `industry_testimonial_company` varchar(150) NOT NULL,
  `industry_testimonial_created` datetime NOT NULL,
  `industry_testimonial_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_industry_testimonial`
--

INSERT INTO `fbsv2_industry_testimonial` (`industry_testimonial_aid`, `industry_testimonial_img`, `industry_testimonial_logo`, `industry_testimonial_name`, `industry_testimonial_position`, `industry_testimonial_message`, `industry_testimonial_category`, `industry_testimonial_company`, `industry_testimonial_created`, `industry_testimonial_datetime`) VALUES
(1, 'dennis-siano2.png', 'dtod-bpo.png', 'Dennis Ray Siano', 'Chief Excutive Officer Owner', 'Excellent HRIS Provider with Outstanding Support!\nI started working with Frontline Business Solutions Inc. earlier this year, and so far, I’m extremely satisfied with their HRIS solutions. Their platform has streamlined our HR processes, making tasks like employee management, payroll, and reporting much more efficient. What truly stands out is the level of support we’ve received from their team.\nOur account manager has been incredibly helpful and responsive throughout the entire process, ensuring that we’re getting the most out of the system. Anytime we have questions or need assistance, they are always there to provide guidance and solutions quickly.\nOverall, I highly recommend Frontline Business Solutions Inc. for anyone looking for a reliable and supportive HRIS provider. Their service has been excellent, and their team truly understands the needs of their clients.', 'HR Information System', '', '0000-00-00 00:00:00', '2024-11-04 12:26:05'),
(2, 'kimbell-reyes.png', 'aka-global.png', 'Kimbell John Reyes', 'Chief Executive Officer', 'Frontline Business Solutions is indeed a partner to innovative success of a company. A connection of employer and employee. ', 'HR Information System', '', '2024-11-04 12:32:13', '2024-11-04 12:32:13'),
(3, 'alexander-ubeda.png', 'fca-logo-horizontal.png', 'Alexander Ubeda', 'IT Department Head', 'Frontline Business Solutions not only tailored the online enrollment system to Frontline Christian Academy\'s specific needs but also provided exceptional support, ensuring they were always available for any adjustments we required.', 'School Enrollment System', '', '0000-00-00 00:00:00', '2024-11-04 12:34:14'),
(4, 'judea-delos-santos.png', 'ftc-logo.png', 'Judea Delos Santos', 'Asst. Managing Director / Comm. & Dev. Staff', 'FBS has been an incredible partner in helping us enhance the functionality and efficiency of our FTC website. They seamlessly upgraded our backend systems, greatly improving our ability to manage donations and streamlining other critical IT requests. Their team’s professionalism, attention to detail, and commitment to supporting our mission of serving abandoned, abused, and neglected children have been invaluable. Thanks to their expertise, we are now able to operate more smoothly and efficiently, allowing us to focus on making a bigger difference for the kids we serve. We highly recommend Frontline Business Solution for any organization in need of reliable and innovative IT solutions.', 'Online Donation System', '', '2024-11-04 12:35:33', '2024-11-04 12:35:33'),
(5, 'bethany-acoba.png', 'logo-pfm.png', 'Bethany P. Acoba', 'Donor Communications and Care Coordinator', 'The online donation platform that FBS developed has enhanced our website. The process is straightforward and user-friendly, making it easy for our partners and friends from around the world to support our mission. I couldn\'t be happier with the results! ', 'Online Donation System', '', '2024-11-04 12:37:24', '2024-11-04 12:37:24'),
(6, 'lara-yedra.png', 'stms.png', 'Lara Jane P. Yedra', 'Work Immersion Teacher', 'We extend our deepest gratitude to Frontline Business Solutions for being an outstanding partner in our Work Immersion program. Your organization provided our students with valuable, real-world experiences that greatly enhanced their skills and understanding of their chosen fields. The support and mentorship offered by your team created an ideal learning environment, fostering both professional and personal growth.                                                                                                                                                Your commitment to nurturing young talent and your willingness to involve them in meaningful projects have had a profound impact on their future careers. We truly appreciate the collaboration and look forward to more successful partnerships in the years to come.', 'High School Work Immersion', 'St. Therese Montessori School', '2024-11-04 13:13:22', '2024-11-04 13:13:22'),
(7, 'olivia-almarez.png', 'sti.png', 'Ms. Olivia Almarez', 'OJT Coordinator', 'Frontline Business Solution has been one of STI San Pablo\'s most trusted partners for several years. We at STI are truly grateful for the exceptional knowledge and experience FBS has provided to our On-the-Job trainee students in IT and Engineering, as well as for the kindness and support shown coming from the people of FBS.', 'College On-the-job- Training', 'STI San Pablo Campus', '2024-11-04 13:15:14', '2024-11-04 13:15:14'),
(8, 'angelou-almare-medina.png', 'sti.png', 'Mrs. Angelou Almare-Medina', '', 'FBS\' internship program provided great opportunity for students to experience actual industry-related tasks which greatly honed their skills. This also enhanced their professional capabilities and served as a valuable foundation for their future career.', 'College On-the-job- Training', 'STI San Pablo Campus', '2024-11-04 13:16:32', '2024-11-04 13:16:32'),
(9, 'ariel-ferrer.png', 'lspu.png', 'Ms. Ariel Angeni Ferrer', 'BS Computer Engineering Graduate', 'My experience at Frontline Business Solution has truly been a great journey. I gained a wealth of knowledge in front-end web design, equipping me with essential skills in HTML, CSS, and JavaScript. Most importantly, the people there are truly amazing and passionate about their work. To sum it up, my experience at FBS was fun!', 'Continuing Studies', '', '2024-11-04 13:17:24', '2024-11-04 13:17:24'),
(10, 'emilio-macaso.png', 'dlsl_official_logo.png', 'Emilio Manuel Macaso', 'IT Faculty, La Salle Lipa', 'A successful internship may be defined as one that provides the following: meaningful and relevant work, formal and informal training, social opportunities to build personal skills and relationships, and continuous connections even after the internship has ended.  The Information Technology program of De La Salle Lipa is fortunate to have found all these with the internship program of Frontline Business Solutions.  Our student interns had fulfilling internships with FBS, with their holistic approach in honing both their technical. leadership, and personal skills, and making them more ready to face the exciting world of IT.\nWe look forward to partnering with FBS to develop and nurture future-ready IT professionals.', 'College On-the-job- Training', '', '2024-11-04 13:18:31', '2024-11-04 13:18:31'),
(11, 'kevinroy-nativo.png', 'aclc.png', 'Mr. Kevin Roy N. Oreña', 'Freelancer', 'After graduating 5 years ago, I didn\'t have the chance to apply my programming skills in my career. So, I decided to further my studies at FBS. Through FBS, I was able to refresh my existing knowledge and acquire new skills in web development, including HTML/CSS, SASS, Tailwind, Figma, WordPress, and JavaScript, which I have already been using in my freelancing career.', 'Continuing Studies', '', '2024-11-04 13:20:11', '2024-11-04 13:20:11'),
(12, 'chelsea-lim.png', 'spc.png', 'Ms. Chelsea Lim', '', 'Frontline Business Solutions helped my students grow in every aspect. They were trained as part of the company and were really excited to tell me their stories. I saw how the company changed my students in facing problems, way of learning, discipline and understanding. I would recommend Frontline Business Solutions if you want exceptional training and experience.', 'High School Work Immersion', 'San Pablo Colleges', '2024-11-04 13:21:05', '2024-11-04 13:21:05'),
(13, 'jake-gamaro.webp', 'lspu.png', 'Jake Ansel Gamaro', 'Freelancer', 'The immersion program was incredibly beneficial for me. I loved diving into front-end web development, learning tools like Figma for prototyping and web designing, and exploring CSS with SASS and Tailwind. Getting hands-on experience with WordPress really boosted my confidence. I’m thankful for the supportive instructors and the skills I gained for my career!', 'Continuing Studies', '', '0000-00-00 00:00:00', '2024-11-04 13:22:35'),
(14, 'joesua-manzanero.png', 'lspu.png', 'Joesua R. Manzanero', 'Faculty, Program Coordinator, BS in Information Technology  OJT Coordinator, College of Computer Studies', 'Frontline Business Solutions has demonstrated a commendable commitment to fostering the professional growth of our students through their intensive Internship programs. The hands-on experience provided during the training is invaluable, allowing students to apply theoretical knowledge in real-world settings. This practical exposure significantly enhances their readiness for the workforce.\nMoreover, Frontline offers high-end facilities equipped with the latest technology, ensuring that interns are well-prepared to meet industry standards. The emphasis on developing industry-standard competencies further underscores their dedication to producing skilled professionals who can thrive in today’s competitive landscape.\nWe appreciate Frontline Business Solutions for their partnership and commitment to the development of our students. Such opportunities are crucial in shaping the next generation of innovators in the IT and CS sector.\nThank you for your continued support.', 'College On-the-job- Training', 'Laguna State Polytechnic University- San Pablo City Campus', '0000-00-00 00:00:00', '2024-11-04 13:24:29'),
(17, 'kimbell-reyes.png', 'aka-global.png', 'Kimbell John Reyes', 'Chief Executive Officer', 'Frontline Business Solutions is indeed a partner to innovative success of a company. A connection of employer and employee.', 'Online Payroll System', '', '0000-00-00 00:00:00', '2024-11-05 09:26:43'),
(18, 'dennis-siano2.png', 'dtod-bpo.png', 'Dennis Ray Siano', 'Chief Executive Officer Owner', 'Excellent HRIS Provider with Outstanding Support! Their platform has streamlined our HR processes, making tasks like employee management, payroll, and reporting much more efficient. What truly stands out is the level of support we’ve received from their team. I highly recommend Frontline Business Solutions Inc. for anyone looking for a reliable and supportive HRIS provider. Their service has been excellent, and their team truly understands the needs of their clients. ', 'Online Payroll System', 'D to D BPO Solutions', '0000-00-00 00:00:00', '2024-11-05 09:29:13'),
(19, 'jim-davison.png', 'logo-avant.png', 'James Davidson', 'Managing Director & President', 'Frontline Business Solutions is beyond an exceptional firm. Professional courtesy, responsiveness, competence, and client service are only a few of the many high level qualities that Frontline’s team exhibit. Frontline exemplifies the golden rule by treating its clients as it would like to be treated. Every Frontline team member with whom Avant Advisory Group has dealt has been a true blessing. Finally, based on Avant Advisory Group’s several years of working with Frontline personnel, I can say that they work heartily for their clients as if they are working for the Lord. (Colossians 3:23-24) Thank you for what you do, Frontline!', 'Administrative', 'Avant Advisory Group', '0000-00-00 00:00:00', '2024-11-05 09:39:13'),
(20, 'josh-howard.png', 'logo-ignite.png', 'Josh Howard', 'Chief Executive Officer', 'Our partnership with Frontline has been the best financial investment we’ve ever made. The team is absolutely amazing and always goes above and beyond in every area. I highly recommend them!!', 'Administrative', 'Ignite Investment Group', '0000-00-00 00:00:00', '2024-11-05 09:41:05'),
(21, 'teresa-heyne.png', 'jcceos-logo.png', 'Teresa Heyne', 'Overseer, Director of Operations', 'I am extremely impressed with Frontline Business Solution\'s dedication to excellence. Their team demonstrates outstanding professionalism and attention to detail with their Personal Assistant and Graphic Design Services.   When we transitioned our CRM over to HubSpot, they went above and beyond to learn and implement all of the marketing automation processes and reporting analytics.  The results have positively impacted our ministry, and we look forward to continuing our relationship with them.', 'Administrative', '', '2024-11-05 09:44:07', '2024-11-05 09:44:07'),
(22, 'josh-howard.png', 'logo-ignite.png', 'Josh Howard', 'Chief Executive Officer', 'Our partnership with Frontline has been the best financial investment we’ve ever made. The team is absolutely amazing and always goes above and beyond in every area. I highly recommend them!!', 'Business Support', 'Ignite Investment Group', '0000-00-00 00:00:00', '2024-11-05 09:48:28'),
(23, 'jim-davison.png', 'logo-avant.png', 'James Davidson', 'Managing Director & President', 'Frontline Business Solutions is beyond an exceptional firm. Professional courtesy, responsiveness, competence, and client service are only a few of the many high level qualities that Frontline’s team exhibit. Frontline exemplifies the golden rule by treating its clients as it would like to be treated. Every Frontline team member with whom Avant Advisory Group has dealt has been a true blessing. Finally, based on Avant Advisory Group’s several years of working with Frontline personnel, and especially Mike DeJesus, I can say that they work heartily for their clients as if they are working for the Lord. (Colossians 3:23-24) Thank you for what you do, Frontline!', 'Business Support', '', '2024-11-05 09:49:58', '2024-11-05 09:49:58'),
(24, 'teresa-heyne.png', 'jcceos-logo.png', 'Teresa Heyne', 'Overseer, Director of Operations', 'I am extremely impressed with Frontline Business Solution\'s dedication to excellence. Their team demonstrates outstanding professionalism and attention to detail with their Personal Assistant and Graphic Design Services.   When we transitioned our CRM over to HubSpot, they went above and beyond to learn and implement all of the marketing automation processes and reporting analytics.  The results have positively impacted our ministry, and we look forward to continuing our relationship with them.', 'Marketing', '', '2024-11-05 09:55:23', '2024-11-05 09:55:23'),
(25, 'jim-davison.png', 'logo-avant.png', 'James Davidson', 'Managing Director & President', 'Frontline Business Solutions is beyond an exceptional firm. Professional courtesy, responsiveness, competence, and client service are only a few of the many high level qualities that Frontline’s team exhibit. Frontline exemplifies the golden rule by treating its clients as it would like to be treated. Every Frontline team member with whom Avant Advisory Group has dealt has been a true blessing. Finally, based on Avant Advisory Group’s several years of working with Frontline personnel, and especially Mike DeJesus, I can say that they work heartily for their clients as if they are working for the Lord. (Colossians 3:23-24) Thank you for what you do, Frontline!', 'Marketing', '', '2024-11-05 09:56:28', '2024-11-05 09:56:28'),
(26, 'josh-howard.png', 'logo-ignite.png', 'Josh Howard', 'Chief Executive Officer', 'Our partnership with Frontline has been the best financial investment we’ve ever made. The team is absolutely amazing and always goes above and beyond in every area. I highly recommend them!!', 'Marketing', '', '2024-11-05 09:57:17', '2024-11-05 09:57:17'),
(27, 'james-sunderland.png', 'logo-ottm.png', 'James Sunderland', 'VP Creative', 'The team at Frontline is incredible. They genuinely care about our needs and share in our vision of success. We are proud to call them a business partner and appreciate all the hard work they do for us.', 'Web Design', '', '2024-11-05 12:05:37', '2024-11-05 12:05:37'),
(28, 'duane-masters.png', 'logo-world-focus.png', 'Pastor Duane Masters', 'Executive Director', 'Frontline has been an incredible organization to work with. They are friendly, accommodating, and professional, but what stands out to me the most is how responsive they are. Whenever I have a problem or request, not only have I always received a response within the day, but their team has also met my needs the same day. I’m not sure I have ever worked with an organization as responsive as they are. I would highly recommend working with them.', 'Web Design', '', '0000-00-00 00:00:00', '2024-11-05 12:06:22'),
(29, 'james-sunderland.png', 'logo-ottm.png', 'James Sunderland', 'VP Creative', 'The team at Frontline is incredible. They genuinely care about our needs and share in our vision of success. We are proud to call them a business partner and appreciate all the hard work they do for us.', 'WordPress CMS Website', '', '0000-00-00 00:00:00', '2024-11-05 12:07:37'),
(30, 'jeffrey-seitz.png', 'logo-phixgenomics.png', 'Jeffrey Seitz', 'Chief Executive Officer', 'I have worked with a number of different website developers, but none have been as responsive or as quick to turn the work around.', 'WordPress CMS Website', '', '2024-11-05 12:08:54', '2024-11-05 12:08:54'),
(31, 'rhodalynn-dayo.png', 'logo-fca.png', 'Rhoda Lynn Pessina-Dayo', 'School Directress', 'We enjoyed working together and meeting with the Frontline Business Solutions Staff when they built the website of Frontline Christian Academy.', 'WordPress CMS Website', '', '2024-11-05 12:10:14', '2024-11-05 12:10:14'),
(32, 'zymon-ramos.webp', 'lc.png', 'Jinuel Zymon Ramos', 'BSCS Magna Cum Laude Batch 2023', 'As a lifelong learner, the continuing study program at Frontline Business Solutions was truly beneficial for my own personal and professional growth. The Front-End development training was exceptional, covering HTML, CSS, and other frameworks, while also focusing on coding efficiency and dynamic web design. Grateful for the excellent trainers and well-structured training program—truly worth it.', 'Continuing Studies', '', '0000-00-00 00:00:00', '2024-11-05 12:12:32'),
(33, 'andrey-ilagan.webp', 'plsp.png', 'Andrey Ilagan', 'BSCpE Batch 2024 Pamantasan ng Lungsod ng San Pablo', 'I\'ve gained a wealth of knowledge in web development through my experience at Frontline Business Solutions, especially their Continuing Study Program. The program’s hands-on approach and structured tutorials deepened my understanding of both front-end and back-end development. This practical learning environment encouraged continuous improvement and allowed me to confidently apply my skills to real-world projects, significantly enhancing my technical abilities. Thanks to this program, I am more confident and better equipped to handle complex web development challenges.', 'Continuing Studies', '', '0000-00-00 00:00:00', '2024-11-05 12:13:53'),
(34, 'kurt-balanial.webp', 'plsp.png', 'Kurt Lui Balanial', 'BSCpE Batch 2024 Pamantasan ng Lungsod ng San Pablo', 'My training at Frontline Business Solutions was an invaluable experience that equipped me with essential skills in HTML, CSS, and Java. The supportive and professional environment made me feel empowered and ready to take on future challenges in the industry. This experience has truly prepared me for my career endeavors, leaving me more confident in my abilities.', 'Continuing Studies', '', '0000-00-00 00:00:00', '2024-11-05 12:14:58'),
(35, '[{\"name\":\"testi-duane-masters-2.png\",\"id\":\"1yODaxX8NNYvNU7IiL0j7W0FS2qshfOHr\",\"datetime\":\"2025-02-21 15:33:46\"}]', '[{\"name\":\"tm_logo_white.png\",\"id\":\"1eXCrxLXmODC6i_IQF1a7gQ3____ur8rC\",\"datetime\":\"2025-02-21 15:33:49\"}]', 'asdasd', 'asdasd', 'asdasdasd', 'HR Information System', 'dasdasd', '2025-02-21 15:33:43', '2025-02-21 15:33:43');

-- --------------------------------------------------------

--
-- Table structure for table `fbsv2_lcss_batch`
--

CREATE TABLE `fbsv2_lcss_batch` (
  `lcss_batch_aid` int(11) NOT NULL,
  `lcss_batch_name` varchar(100) NOT NULL,
  `lcss_batch_category` varchar(100) NOT NULL,
  `lcss_batch_school` varchar(100) NOT NULL,
  `lcss_batch_course` varchar(100) NOT NULL,
  `lcss_batch_img` varchar(1000) NOT NULL,
  `lcss_batch_created` datetime NOT NULL,
  `lcss_batch_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_lcss_batch`
--

INSERT INTO `fbsv2_lcss_batch` (`lcss_batch_aid`, `lcss_batch_name`, `lcss_batch_category`, `lcss_batch_school`, `lcss_batch_course`, `lcss_batch_img`, `lcss_batch_created`, `lcss_batch_datetime`) VALUES
(15, 'Batch 1', 'College On-the-job Training', 'Laguna College', 'BS Computer Science', '2016405112148.webp, dsc_0001-1.webp, dsc_0002-2.webp, dsc_0005-5.webp', '0000-00-00 00:00:00', '2024-11-04 12:15:15'),
(16, 'Batch 2', 'College On-the-job Training', 'Pamantasan ng Lungsod ng San Pablo', 'BS Computer Engineering', '13487284_1379426098750714_109717399_n.webp', '2024-11-04 12:19:08', '2024-11-04 12:19:08'),
(17, 'Batch 3', 'College On-the-job Training', 'San Pablo Colleges', 'BS Information Technology', 'college.webp, college-3.jpg, img_5234.webp, img_5345.webp, img_5389.webp, img_5391.webp, img_5393.webp, img_5396.webp, img_5398.webp, img_5401.webp', '2024-11-04 12:34:11', '2024-11-04 12:34:11'),
(18, 'Batch 4', 'High School Work Immersion', 'San Pablo Colleges', 'ICT', 'immersion-60.webp, immersion-61.webp, immersion-62.webp, immersion-63.webp, immersion-64.webp, immersion-65.webp, immersion-81.webp, immersion-83.webp', '2024-11-04 12:40:22', '2024-11-04 12:40:22'),
(19, 'Batch 5', 'High School Work Immersion', 'San Pablo Colleges', 'ICT', 'img_1450.webp, img_1451.webp, img_1452.webp, img_1453.webp, img_1454.webp, img_1455.webp, img_1456.webp, img_1457.webp', '2024-11-04 12:49:44', '2024-11-04 12:49:44'),
(20, 'Batch 6', 'High School Work Immersion', 'San Pablo Colleges', 'ICT', 'b6-1.webp, b6-2.webp, b6-3.webp, b6-4.webp, b6-5.webp, b6-6.webp, b6-7.webp, b6-8.webp, b6-9.webp', '0000-00-00 00:00:00', '2024-11-04 13:17:33'),
(21, 'Batch 7', 'High School Work Immersion', 'San Pablo Colleges & ACLC San Pablo', 'STEM', 'b7-1.webp, b7-2.webp, b7-3.webp, b7-4.webp, b7-5.webp, b7-6.webp, b7-7.webp, b7-8.webp', '0000-00-00 00:00:00', '2024-11-04 14:31:55'),
(22, 'Batch 8', 'College On-the-job Training', 'Laguna State Polytechnic Univ. - SPC Campus', 'BS Information Technology', 'image1.webp, image4.webp', '0000-00-00 00:00:00', '2024-11-04 14:55:46'),
(23, 'Batch 9', 'High School Work Immersion', 'San Pablo Colleges', 'ICT', 'b1.webp, b1-5.webp, b1-new-4.webp, b1-new-11.webp, b9-1.webp, b9-2.webp, image1.webp, image2.webp, img_0036.webp, img_0040.webp, img_0061.webp, img_0068.webp', '2024-11-04 15:07:16', '2024-11-04 15:07:16'),
(24, 'Batch 10', 'High School Work Immersion', 'San Pablo Colleges', 'ICT', 'b10-1.webp, b10-2.webp, b10-3.webp, b10-4.webp, b10-5.webp, b10-6.webp, b10-7.webp, b10-8.webp, b10-9.webp', '0000-00-00 00:00:00', '2024-11-04 15:14:38'),
(25, 'Batch 11', 'High School Work Immersion', 'San Pablo Colleges', 'ICT', 'b11-1.webp, b11-2.webp, b11-3.webp, b11-4.webp, b11-5.webp, b11-6.webp, b11-7.webp, b11-8.webp, b11-9.webp, b11-10.webp', '2024-11-04 15:29:25', '2024-11-04 15:29:25'),
(26, 'Batch 12', 'High School Work Immersion', 'San Pablo Colleges', 'ICT', 'batch-8.webp, batch-8-1.webp, batch-8-2.webp, batch-8-3.webp, batch-8-5.webp, batch-8-7.webp, batch-8-8.webp, batch-8-9.webp', '2024-11-04 15:34:25', '2024-11-04 15:34:25'),
(27, 'Batch 13', 'High School Work Immersion', 'Greenville Academy of Sta. Clara', 'ABM', 'gva1.webp, gva2.webp, gva3.webp, gva4.webp, gva5.webp, gva6.webp, gva7.webp', '2024-11-04 15:44:20', '2024-11-04 15:44:20'),
(28, 'Batch 14', 'High School Work Immersion', 'St. Therese Montessori School', 'ABM', 'st.therese.webp, st.therese-2.webp', '2024-11-04 15:49:15', '2024-11-04 15:49:15'),
(29, 'Batch 15', 'High School Work Immersion', 'San Pablo Colleges', 'ICT', 'batch15-1.webp, batch15-2.webp, batch15-3.webp, batch15-4.webp, batch15-5.webp, batch15-6.webp, batch15-7.webp', '2024-11-05 10:38:50', '2024-11-05 10:38:50'),
(30, 'Batch 16', 'High School Work Immersion', 'San Pablo Colleges', 'ICT', 'batch16-1.webp, batch16-2.webp, batch16-3.webp, batch16-4.webp, batch16-5.webp, batch16-6.webp, batch16-7.webp', '0000-00-00 00:00:00', '2024-11-05 10:46:17'),
(31, 'Batch 20', 'High School Work Immersion', 'San Pablo Colleges', 'ICT', 'b20-1.webp, b20-2.webp, b20-3.webp, b20-4.webp, b20-5.webp, b20-6.webp', '2024-11-05 11:18:57', '2024-11-05 11:18:57'),
(32, 'Batch 21', 'College On-the-job Training', 'Laguna State Polytechnic Univ. - SPC Campus', 'BS Information Technology', 'b21-1.webp, b21-2.webp', '2024-11-05 11:23:56', '2024-11-05 11:23:56'),
(33, 'Batch 22', 'College On-the-job Training', 'Laguna State Polytechnic Univ. - SPC Campus', 'BS Computer Engineering', 'b22-1.webp, b22-2.webp, b22-3.webp', '2024-11-05 11:27:36', '2024-11-05 11:27:36'),
(34, 'Batch 25', 'College On-the-job Training', 'Cavite State Univ., PLSP, and Mariano Marcos Univ.', 'BS Computer Engineering & BS Computer Science', 'b25-1.webp, b25-2.webp, b25-3.webp, b25-4.webp', '2024-11-05 11:43:53', '2024-11-05 11:43:53'),
(35, 'Batch 26', 'Continuing Studies', 'Laguna College', 'BS Computer Science', 'b26-1.webp, b26-2.webp', '2024-11-05 11:46:45', '2024-11-05 11:46:45'),
(36, 'Batch 27', 'College On-the-job Training', 'STI College San Pablo & Batangas', 'BS Information Technology', 'b27.webp', '2024-11-05 11:49:14', '2024-11-05 11:49:14'),
(37, 'Batch 28', 'College On-the-job Training', 'ACLC - San Pablo', 'BS Information Tecnhnology', 'b28-1.webp, b28-2.webp', '2024-11-05 11:51:58', '2024-11-05 11:51:58'),
(38, 'Batch 29', 'College On-the-job Training', 'Teodoro Luansing College, Batangas State Univ., and Laguna State Polytechnic Univ. - SPC Campus', 'BS Information Technology', 'b29-1.webp, b29-2.webp, b29-3.webp, b29-4.webp, b29-5.webp', '0000-00-00 00:00:00', '2024-11-05 11:58:31'),
(39, 'Batch 30', 'College On-the-job Training', 'LSPU, Letran Calamba, Univ. of Batangas', 'BS Information Technology and BS Computer Engineering', 'b30-1.webp, b30-2.webp, b30-3.webp, b30-4.webp, b30-5.webp, b30-6.webp, b30-7.webp, b30-8.webp, b30-9.webp, b30-10.webp', '0000-00-00 00:00:00', '2024-11-05 12:13:06'),
(40, 'Batch 31', 'College On-the-job Training', 'De La Salle Lipa', 'BS Accounting Information System', 'b31.webp', '0000-00-00 00:00:00', '2024-11-05 12:20:30'),
(41, 'Batch 32', 'High School Work Immersion', 'Marcelino Fule Memo. College and San Pablo Colleges', 'ICT', 'img-0435.webp, img-0442.webp, img-0444.webp, img-0448.webp, img-0452.webp, img-0468.webp, img-0472.webp', '2024-11-05 12:30:34', '2024-11-05 12:30:34'),
(42, 'Batch 33', 'High School Work Immersion', 'Marcelino Fule Memo. College and San Pablo Colleges', 'ICT', 'b33-1.webp, b33-2.webp, b33-3.webp, b33-4.webp, b33-5.webp', '2024-11-05 12:53:46', '2024-11-05 12:53:46'),
(43, 'Batch 34', 'College On-the-job Training', 'PUP - Sta. Mesa, and LPU - Manila', 'BS Management Accounting and BS Accountancy', 'b34-1.webp, b34-2.webp', '2024-11-05 13:03:52', '2024-11-05 13:03:52'),
(44, 'Batch 35', 'High School Work Immersion', 'Marcelino Fule Memo. College', 'HUMSS', 'b35-1.webp, b35-2.webp, b35-3.webp, b35-4.webp, b35-5.webp, b35-6.webp, b35-7.webp, b35-8.webp, b35-9.webp, b35-10.webp', '2024-11-05 13:10:18', '2024-11-05 13:10:18'),
(45, 'Batch 36', 'College On-the-job Training', 'PUP - Lopez Quezon and STI College San Pablo', 'BS Information Technology', 'b36-1.webp, b36-2.webp, b36-3.webp, b36-4.webp, b36-5.webp, b36-6.webp, b36-7.webp, b36-8.webp, b36-9.webp, b36-10.webp, b36-11.webp, b36-12.webp, b36-13.webp, b36-14.webp', '2024-11-05 13:20:33', '2024-11-05 13:20:33'),
(46, 'Batch 37', 'High School Work Immersion', 'ACLC San Pablo', 'ABM', 'b37-1.webp, b37-2.webp, b37-3.webp, b37-4.webp, b37-5.webp', '2024-11-05 13:23:42', '2024-11-05 13:23:42'),
(47, 'Batch 38A', 'Continuing Studies', 'Laguna College', 'BS Computer Science', 'b38-5.webp, b38-6.webp, b38-7.webp, b38-8.webp, b38-9.webp, b38-10.webp', '0000-00-00 00:00:00', '2024-11-05 13:37:32'),
(48, 'Batch 38B', 'College On-the-job Training', 'Manuel S. Enverga University', 'BS Computer Engineering', 'b38-1.webp, b38-2.webp, b38-3.webp, b38-4.webp', '2024-11-05 13:38:54', '2024-11-05 13:38:54'),
(49, 'Batch 40', 'College On-the-job Training', 'De La Salle - Lipa', 'BS Computer Engineering', 'b40-1.webp, b40-2.webp, b40-3.webp, b40-4.webp, b40-5.webp, b40-6.webp, b40-7.webp, b40-8.webp, b40-9.webp, b40-10.webp, b40-11.webp, b40-12.webp, b40-13.webp, b40-14.webp, b40-15.webp', '0000-00-00 00:00:00', '2024-11-05 14:48:52'),
(50, 'Batch 42', 'Continuing Studies', 'PLSP & Laguna College', 'BS Information Technology', 'b42-1.webp, b42-2.webp', '2024-11-05 14:51:30', '2024-11-05 14:51:30'),
(51, 'Batch 43', 'Continuing Studies', 'Pamantasan ng Lungsod ng San Pablo', 'BS Computer Engineering', 'b43-1.webp, b43-2.webp, b43-3.webp, b43-4.webp, b43-5.webp, b43-6.webp, b43-7.webp', '2024-11-05 14:57:28', '2024-11-05 14:57:28'),
(52, 'Batch 45', 'College On-the-job Training', 'ACLC San Pablo', 'BS Accounting Technology', 'b45.webp', '2024-11-05 15:54:33', '2024-11-05 15:54:33'),
(53, 'Batch 47 - Batch 50', 'High School Work Immersion', 'South Lakes Integrated School', 'STEM, HUMSS, and ABM', 'b47-0.webp, b47-1.webp, b47-2.webp, b47-3.webp, b47-4.webp, b47-5.webp, b47-6.webp, b47-6-2.webp, b47-7.webp, b47-8.webp, b47-9.webp, b47-10.webp', '2024-11-05 15:55:36', '2024-11-05 15:55:36'),
(54, 'Batch 51', 'College On-the-job Training', 'DLSU - Lipa, Letran Calamba , and STI San Pablo', 'BS Computer Science and BS Information Technology', 'b51-1.webp, b51-2.webp, b51-3.webp, b51-4.webp, b51-5.webp, b51-6.webp, b51-7.webp, b51-8.webp, b51-9.webp', '2024-11-05 15:57:35', '2024-11-05 15:57:35'),
(55, 'Batch 52', 'High School Work Immersion', 'Greenville Academy of Sta. Clara', 'STEM', 'b52-0.webp, b52-1.webp, b52-2.webp, b52-3.webp, b52-4.webp, b52-5.webp, b52-10.webp, b52-11.webp, b52-12.webp, b52-15.webp, b52-17.webp, b52-21.webp, b52-22.webp', '2024-11-06 08:10:03', '2024-11-06 08:10:03'),
(56, 'Batch 53', 'High School Work Immersion', 'Greenville Academy of Sta. Clara', 'STEM', 'b53-1.webp, b53-2.webp, b53-3.webp', '2024-11-06 08:38:02', '2024-11-06 08:38:02'),
(57, 'Batch 54', 'High School Work Immersion', 'St. Therese Montessori School', 'ABM', 'b54-1.webp, b54-2.webp, b54-3.webp, b54-4.webp', '2024-11-06 08:54:13', '2024-11-06 08:54:13'),
(58, 'Batch 55', 'High School Work Immersion', 'San Pablo Colleges', 'ICT', 'b55-0.webp, b55-1.webp, b55-2.webp, b55-3.webp, b55-4.webp, b55-5.webp, b55-6.webp, b55-7.webp', '2024-11-06 09:37:37', '2024-11-06 09:37:37'),
(59, 'Batch 56', 'High School Work Immersion', 'San Pablo Colleges', 'ICT', 'b56-1.webp, b56-2.webp, b56-3.webp, b56-4.webp, b56-5.webp, b56-6.webp, b56-7.webp, b56-8.webp, b56-9.webp, b56-10.webp, b56-11.webp', '2024-11-06 09:51:42', '2024-11-06 09:51:42'),
(60, 'Batch 57', 'High School Work Immersion', 'St. Therese Montessori School', 'ABM', 'b57-1.webp, b57-2.webp, b57-3.webp, b57-4.webp, b57-5.webp, b57-6.webp', '2024-11-06 09:59:17', '2024-11-06 09:59:17'),
(61, 'Batch 58', 'College On-the-job Training', 'Bicol University - Polangui', 'BS Computer Science', 'b58.webp', '2024-11-06 10:02:40', '2024-11-06 10:02:40'),
(62, 'Batch 59', 'College On-the-job Training', 'San Pablo Colleges', 'BS Psychology', 'b59.webp', '2024-11-06 10:14:28', '2024-11-06 10:14:28'),
(63, 'Batch 60', 'Continuing Studies', 'LSPU and ACLC', 'BS Information Technology', 'b60-1.webp, b60-2.webp, b60-3.webp', '0000-00-00 00:00:00', '2024-11-06 10:24:12'),
(64, 'Batch 61', 'Continuing Studies', 'Laguna College', 'BS Computer Science', 'b61-1.webp, b61-2.webp, b61-3.webp, b61-4.webp, b61-5.webp, b61-6.webp, b61-7.webp', '2024-11-06 10:25:01', '2024-11-06 10:25:01'),
(65, 'Batch 62', 'College On-the-job Training', 'South Luzon State University', 'BS Computer Engineering', 'b62-1.webp, b62-2.webp, b62-3.webp, b62-4.webp', '0000-00-00 00:00:00', '2024-11-06 10:30:01'),
(66, 'Batch 63', 'College On-the-job Training', 'Cavite State University', 'BS Computer Engineering', 'b63-1.webp, b63-2.webp, b63-3.webp, b63-4.webp, b63-5.webp, b63-6.webp', '2024-11-06 10:40:10', '2024-11-06 10:40:10'),
(67, 'Batch 65', 'College On-the-job Training', 'Laguna State Polytechnic Univ. - SPC Campus', 'BS Computer Science', 'b65-1.webp, b65-2.webp, b65-3.webp, b65-4.webp, b65-5.webp, b65-6.webp', '2024-11-06 11:48:05', '2024-11-06 11:48:05'),
(68, 'Batch 66', 'Continuing Studies', 'PLSP and Laguna College', 'BSCpE and BSCS', 'b66-1.webp, b66-2.webp, b66-3.webp, b66-4.webp, b66-5.webp, b66-6.webp', '2024-11-06 11:52:46', '2024-11-06 11:52:46');

-- --------------------------------------------------------

--
-- Table structure for table `fbsv2_notification`
--

CREATE TABLE `fbsv2_notification` (
  `notification_aid` int(11) NOT NULL,
  `notification_is_active` tinyint(1) NOT NULL,
  `notification_name` varchar(200) NOT NULL,
  `notification_email` varchar(200) NOT NULL,
  `notification_phone_no` varchar(20) NOT NULL,
  `notification_purpose` varchar(200) NOT NULL,
  `notification_created` datetime NOT NULL,
  `notification_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_notification`
--

INSERT INTO `fbsv2_notification` (`notification_aid`, `notification_is_active`, `notification_name`, `notification_email`, `notification_phone_no`, `notification_purpose`, `notification_created`, `notification_updated`) VALUES
(6, 1, 'Cyrene Lumabas', 'cyrenemlumabas@gmail.com', '', 'partner-with-us-lcs', '2024-12-04 08:35:13', '2024-12-06 08:24:40'),
(7, 1, 'Mark Bumagat', 'mark.bumagat@frontlinebusiness.com.ph', '', 'get-started-lcs', '2024-12-04 13:09:47', '2024-12-27 09:27:58'),
(8, 1, 'Louren Isobel Rubico', 'lourenisobel18@gmail.com', '09123456789', 'subscribers', '2024-12-18 09:49:54', '2024-12-27 15:16:56');

-- --------------------------------------------------------

--
-- Table structure for table `fbsv2_notification_log`
--

CREATE TABLE `fbsv2_notification_log` (
  `notification_log_aid` int(11) NOT NULL,
  `notification_log_name` varchar(100) NOT NULL,
  `notification_log_email` varchar(100) NOT NULL,
  `notification_log_phone` varchar(100) NOT NULL,
  `notification_log_purpose` varchar(100) NOT NULL,
  `notification_log_subject` varchar(200) NOT NULL,
  `notification_log_message` text NOT NULL,
  `notification_log_file` varchar(100) NOT NULL,
  `notification_log_receiver` text NOT NULL,
  `notification_log_email_subject` varchar(100) NOT NULL,
  `notification_log_created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_notification_log`
--

INSERT INTO `fbsv2_notification_log` (`notification_log_aid`, `notification_log_name`, `notification_log_email`, `notification_log_phone`, `notification_log_purpose`, `notification_log_subject`, `notification_log_message`, `notification_log_file`, `notification_log_receiver`, `notification_log_email_subject`, `notification_log_created`) VALUES
(16, 'Louren Isobel Rubico', 'louren@gmail.com', '09090909', 'default-receiver', 'test in home', 'test email in home get started', '', 'lourenisobel18@gmail.com', 'GET STARTED / HOME-  ', '2024-12-06 10:01:24'),
(17, 'Micha 1', 'micha18@gmail.com', '090909090909', 'default-receiver', 'Test email in hris', 'This is a test email in HRIS pricing', '', 'micha@gmail.com', 'CHOOSE PLAN / HR Information System (Foreign Clients) - ', '2024-12-09 12:53:58'),
(18, 'Louren Isobel Rubico', 'louren@gmail.com', '09090909', 'default-receiver', 'test in home', 'test email in home get started', '', 'lourenisobel18@gmail.com', 'GET STARTED / HOME-  ', '2024-12-18 10:01:24'),
(19, 'Micha Lopez', 'lourenisobel18@gmail.com', '090909090909', 'get-started-lcs', 'Test email in hris', 'This is a test email in HRIS pricing', '', 'lourenisobel18@gmail.com', 'CHOOSE PLAN / HR Information System (Foreign Clients) - ', '2024-12-23 12:53:58'),
(20, 'Luke', 'lourenisobel18@gmail.com', '090909090909', 'get-started-lcs', 'Test email in hris', 'This is a test email in HRIS pricing', '', 'lourenisobel18@gmail.com', 'CHOOSE PLAN / HR Information System (Foreign Clients) - ', '2024-12-25 12:53:58'),
(21, 'Luke', 'lourenisobel18@gmail.com', '090909090909', 'get-started-lcs', 'Test email in hris', 'This is a test email in HRIS pricing', '', 'lourenisobel18@gmail.com', 'CHOOSE PLAN / HR Information System (Foreign Clients) - ', '2024-12-06 12:53:58'),
(22, 'Louise', 'lourenisobel18@gmail.com', '090909090909', 'get-started-lcs', 'Test email in hris', 'This is a test email in HRIS pricing', '', 'lourenisobel18@gmail.com', 'CHOOSE PLAN / HR Information System (Foreign Clients) - ', '2024-12-23 12:53:58'),
(23, 'dsds', 'sdsdsd@g.com', '35435', 'default-receiver', 'drgdfg', 'fdgfdgfdg', '', 'lourenisobel18@gmail.com', 'GET STARTED  -  ', '2024-12-27 09:28:07');

-- --------------------------------------------------------

--
-- Table structure for table `fbsv2_pricing`
--

CREATE TABLE `fbsv2_pricing` (
  `pricing_aid` int(11) NOT NULL,
  `pricing_icon` varchar(100) NOT NULL,
  `pricing_title` varchar(100) NOT NULL,
  `pricing_rate` varchar(100) NOT NULL,
  `pricing_sub_title` varchar(100) NOT NULL,
  `pricing_button` varchar(50) NOT NULL,
  `pricing_active` tinyint(1) NOT NULL,
  `pricing_category` varchar(100) NOT NULL,
  `pricing_created` datetime NOT NULL,
  `pricing_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `fbsv2_pricing_services`
--

CREATE TABLE `fbsv2_pricing_services` (
  `pricing_services_aid` int(11) NOT NULL,
  `pricing_services_pricing_id` varchar(50) NOT NULL,
  `pricing_services_icon` varchar(100) NOT NULL,
  `pricing_services_list` varchar(100) NOT NULL,
  `pricing_services_sub_services` varchar(100) NOT NULL,
  `pricing_services_created` datetime NOT NULL,
  `pricing_services_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `fbsv2_role`
--

CREATE TABLE `fbsv2_role` (
  `role_aid` int(11) NOT NULL,
  `role_is_active` tinyint(1) NOT NULL,
  `role_name` varchar(20) NOT NULL,
  `role_code` varchar(100) NOT NULL,
  `role_description` text NOT NULL,
  `role_created` varchar(20) NOT NULL,
  `role_datetime` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_role`
--

INSERT INTO `fbsv2_role` (`role_aid`, `role_is_active`, `role_name`, `role_code`, `role_description`, `role_created`, `role_datetime`) VALUES
(7, 1, 'Admin', 'role_is_admin', 'Admin User', '2024-09-17 15:01:54', '2024-09-17 15:01:54'),
(8, 1, 'developer', 'role_is_developer', 'developer', '2024-09-17 15:01:54', '2024-09-17 15:01:54'),
(10, 1, 'Marketing', 'role_is_marketing', 'Marketing  user', '2024-12-16 10:28:55', '2024-12-16 14:14:32');

-- --------------------------------------------------------

--
-- Table structure for table `fbsv2_sending_email_log`
--

CREATE TABLE `fbsv2_sending_email_log` (
  `sending_email_log_aid` int(11) NOT NULL,
  `sending_email_log_is_active` tinyint(1) NOT NULL,
  `sending_email_log_audience_id` int(11) NOT NULL,
  `sending_email_log_email` varchar(255) NOT NULL,
  `sending_email_log_is_success` tinyint(1) NOT NULL,
  `sending_email_log_created` datetime NOT NULL,
  `sending_email_log_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `fbsv2_sending_email_log`
--

INSERT INTO `fbsv2_sending_email_log` (`sending_email_log_aid`, `sending_email_log_is_active`, `sending_email_log_audience_id`, `sending_email_log_email`, `sending_email_log_is_success`, `sending_email_log_created`, `sending_email_log_datetime`) VALUES
(1, 1, 10, 'lourenisobel18@gmail.com', 1, '2025-02-07 14:43:13', '0000-00-00 00:00:00'),
(2, 1, 9, 'lourenisobel18@gmail.com', 1, '2025-02-07 14:43:13', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `fbsv2_special_offers`
--

CREATE TABLE `fbsv2_special_offers` (
  `special_offers_aid` int(11) NOT NULL,
  `special_offers_icons` varchar(50) NOT NULL,
  `special_offers_services` varchar(100) NOT NULL,
  `special_offers_price` varchar(100) NOT NULL,
  `special_offers_link` varchar(100) NOT NULL,
  `special_offers_created` datetime NOT NULL,
  `special_offers_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_special_offers`
--

INSERT INTO `fbsv2_special_offers` (`special_offers_aid`, `special_offers_icons`, `special_offers_services`, `special_offers_price`, `special_offers_link`, `special_offers_created`, `special_offers_datetime`) VALUES
(3, 'FaAddressCard', 'Business Registration', 'Startup Package', '/accounting-business-registration', '0000-00-00 00:00:00', '2024-10-28 22:32:16'),
(4, 'FaBriefcase', 'Human Resource Information System', '₱40 / Employee / Mo.', '/webapp-hris', '0000-00-00 00:00:00', '2024-10-28 22:33:15'),
(5, 'FaCalculator', 'Online Payroll System', '₱40 / Employee / Mo.', '/webapp-payroll', '0000-00-00 00:00:00', '2024-10-29 07:41:35'),
(6, 'FaGlobe', 'One-Page Website', '30 Days Trial', '/web-singlepage', '2024-10-29 07:55:23', '2024-10-29 07:55:23'),
(7, 'FaHeadphones', 'Virtual Assistant Service', '$8 / 40 Hours / Week', '/va-administrative', '0000-00-00 00:00:00', '2024-10-29 08:22:11');

-- --------------------------------------------------------

--
-- Table structure for table `fbsv2_subscriber_list`
--

CREATE TABLE `fbsv2_subscriber_list` (
  `subscriber_aid` int(11) NOT NULL,
  `subscriber_email` varchar(100) NOT NULL,
  `subscriber_is_active` tinyint(1) NOT NULL,
  `subscriber_key` varchar(255) NOT NULL,
  `subscriber_audience_id` int(11) NOT NULL,
  `subscriber_feedback` text NOT NULL,
  `subscriber_is_agree` tinyint(1) NOT NULL,
  `subscriber_created` datetime NOT NULL,
  `subscriber_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_subscriber_list`
--

INSERT INTO `fbsv2_subscriber_list` (`subscriber_aid`, `subscriber_email`, `subscriber_is_active`, `subscriber_key`, `subscriber_audience_id`, `subscriber_feedback`, `subscriber_is_agree`, `subscriber_created`, `subscriber_datetime`) VALUES
(118, 'louren.rubico@frontlinebusiness.com.ph', 1, '47e26eaffab557f0aea866fb313e311a713431a378080cf9210c02ddce4776e0', 10, '', 1, '2025-02-03 15:14:17', '2025-02-04 14:06:08'),
(120, 'mark.bumagat@frontlinebusiness.com.ph', 1, '52adf5dd740065a7faf90c2fa6a84d6a2b30817b9e41bb05efab153675eeab76', 10, '', 1, '2025-02-04 07:15:16', '2025-02-04 14:06:13'),
(123, 'jhonny.dichoso@frontlinebusiness.com.ph', 1, 'b831f45853c7aff5b28b3290fe7cbe6eb711978cef525b54a181d22583eca46d', 10, '', 1, '2025-02-04 14:07:07', '2025-02-04 14:07:07'),
(124, 'ansbert.gregana@frontlinebusiness.com.ph', 1, '2b770893d5b9b3b829b34756af2048a2c3471a06cf1b71e150e82ef34941ffb5', 10, '', 1, '2025-02-04 14:07:22', '2025-02-04 14:07:22'),
(125, 'cyrene.lumabas@frontlinebusiness.com.ph', 1, 'dbb32e87535c3c9d48de9e1a006848dc35d9b2b0a82d095275d787aae274356e', 10, '', 1, '2025-02-04 14:07:33', '2025-02-04 14:07:33'),
(126, 'emmanuel.manalo@frontlinebusiness.com.ph', 1, '2bbaa5b1b0fe2c438ba3f9610a2ef9fb92e269639e903fead9a12392cc74c9d7', 10, '', 1, '2025-02-04 14:07:50', '2025-02-04 14:07:50'),
(127, 'herlyn.torres@frontlinebusiness.com.ph', 1, 'a94c250d7c4d584253cd949af2e54e7b4ff13f8c3a358d051327c9a2ab873ab3', 10, '', 1, '2025-02-04 14:08:03', '2025-02-04 14:08:03'),
(128, 'mark.merin@frontlinebusiness.com.ph', 1, '4ea6d09157d35e0087bc87134ca788f4307e0d4a4320ea1a88e6bc2efda01a3c', 10, '', 1, '2025-02-04 14:08:15', '2025-02-04 14:08:15'),
(129, 'patrick.reyes@frontlinebusiness.com.ph', 1, '5032c7c7949683e376eb392e9497626d65e2d404789b5cd52d468d1ed0b93034', 10, '', 1, '2025-02-04 14:08:27', '2025-02-04 14:08:27'),
(130, 'ramon.plaza@frontlinebusiness.com.ph', 1, '7d2af42d5e22de3d18858dcf3c675db6e2d7a857b4486439ca818d024cbc94ec', 10, '', 1, '2025-02-04 14:08:37', '2025-02-04 14:08:37'),
(131, 'roy.balaaldia@frontlinebusiness.com.ph', 1, 'a95da628dbcaca64d27a85c9a3adeb58e98727c1157c4587de66047b6916af6e', 10, '', 1, '2025-02-04 14:08:59', '2025-02-04 14:08:59'),
(132, 'thea.consignado@frontlinebusiness.com.ph', 1, 'b266a20d5602c105209910b3156afed0a785a41276f9982585c22ad8ffd47b38', 10, '', 1, '2025-02-04 14:09:13', '2025-02-04 14:09:13'),
(133, 'vincentcanonizadoramirez@gmail.com', 1, '4876976473d1505a1fe69f298aa95e5594fe424381ee08312cfc45a106f14a4c', 10, '', 1, '2025-02-04 14:09:26', '2025-02-04 14:09:26'),
(134, 'lourenisobel18@gmail.com', 0, '', 9, 'Emails are too frequent, I never signed up to receive this emails., Others: Test Feedback', 1, '2025-02-05 08:16:24', '2025-02-05 15:10:18');

-- --------------------------------------------------------

--
-- Table structure for table `fbsv2_user_developer`
--

CREATE TABLE `fbsv2_user_developer` (
  `user_developer_aid` int(11) NOT NULL,
  `user_developer_is_active` tinyint(1) NOT NULL,
  `user_developer_fname` varchar(50) NOT NULL,
  `user_developer_lname` varchar(50) NOT NULL,
  `user_developer_email` varchar(100) NOT NULL,
  `user_developer_email_new` varchar(100) NOT NULL,
  `user_developer_role_id` int(11) NOT NULL,
  `user_developer_key` varchar(255) NOT NULL,
  `user_developer_password` varchar(255) NOT NULL,
  `user_developer_datetime` varchar(20) NOT NULL,
  `user_developer_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_user_developer`
--

INSERT INTO `fbsv2_user_developer` (`user_developer_aid`, `user_developer_is_active`, `user_developer_fname`, `user_developer_lname`, `user_developer_email`, `user_developer_email_new`, `user_developer_role_id`, `user_developer_key`, `user_developer_password`, `user_developer_datetime`, `user_developer_created`) VALUES
(1, 1, 'Ramon', 'Plaza', 'ramon.plaza@frontlinebusiness.com.ph', 'cyrene.lumabas@frontlinebusiness.com.ph', 8, 'bc392118f3fa063536f05706f432e521dbff73e67ff41ffcb20ef0ee744c2aed', '$2y$10$kBR21Wbs.edc9GdV.lfHH.uI7p0bfQELCgyr8roR1NSmryWmmkSJ.', '2024-11-25 12:57:23', '2024-09-18 08:41:58'),
(2, 1, 'Cyrene', 'Lumabas', 'cyrenemlumabas@gmail.com', '', 8, '427b498ae4fefe83d5d0c6a52654200793db6f867838e04b9c3ac232da0bb355', '$2y$10$C0UfMAfFjt1VwuhUg4p1uurQJVG4/Tdl4eZ4uDbsuzy8ZarsLt21W', '', '2024-11-25 12:19:35'),
(6, 1, 'Mark', 'Bumagat', 'mark.bumagat@frontlinebusiness.com.ph', '', 8, '7b2b1ff4237e2bff0ab73406434997df329d4aaff313a9a757df672b6cf172c4', '', '2024-11-29 08:48:54', '2024-11-29 08:48:54'),
(8, 1, 'Louren Isobel', 'Rubico', 'lourenisobel18@gmail.com', '', 8, '', '$2y$10$b.uPLcXaIdrX3mEd04rGHOfGBrhNjyTlMJTRdp2PNrDQY4.SAqAj.', '2024-12-17 15:14:47', '2024-12-17 15:13:56');

-- --------------------------------------------------------

--
-- Table structure for table `fbsv2_user_other`
--

CREATE TABLE `fbsv2_user_other` (
  `user_other_aid` int(11) NOT NULL,
  `user_other_is_active` tinyint(1) NOT NULL,
  `user_other_fname` varchar(50) NOT NULL,
  `user_other_lname` varchar(50) NOT NULL,
  `user_other_email` varchar(100) NOT NULL,
  `user_other_email_new` varchar(100) NOT NULL,
  `user_other_role_id` int(11) NOT NULL,
  `user_other_key` varchar(255) NOT NULL,
  `user_other_password` varchar(255) NOT NULL,
  `user_other_datetime` varchar(20) NOT NULL,
  `user_other_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_user_other`
--

INSERT INTO `fbsv2_user_other` (`user_other_aid`, `user_other_is_active`, `user_other_fname`, `user_other_lname`, `user_other_email`, `user_other_email_new`, `user_other_role_id`, `user_other_key`, `user_other_password`, `user_other_datetime`, `user_other_created`) VALUES
(3, 1, 'Mon', 'Plaza', 'monmon.plaza@gmail.com', '', 7, '', '$2y$10$2YZDUvknvQ1TLXvPiI.cTOa2Nww4OdKdOP8m51PNmo3PtYKkl1sNG', '', '2024-09-20 12:35:49'),
(5, 1, 'Cyrene', 'Lumabas', 'cyrene.lumabas@frontlinebusiness.com.ph', '', 7, '', '$2y$10$0TIgsoeRCR86G2HigkqFa.fWMTBGEi53H66NCdWQ9FAitIAG9wsz.', '2024-11-22 13:56:24', '2024-11-22 13:33:05'),
(34, 1, 'Louren', 'Rubico', 'lourenisobel18@gmail.com', '', 7, 'c126beeb3069f7b523a3c1feaa296d832884272fa3642c2204a8a90edc957f2a', '', '2025-02-07 15:44:01', '2025-02-07 15:18:53');

-- --------------------------------------------------------

--
-- Table structure for table `fbsv2_vid_testimonial`
--

CREATE TABLE `fbsv2_vid_testimonial` (
  `vid_testimonial_aid` int(11) NOT NULL,
  `vid_testimonial_category` varchar(100) NOT NULL,
  `vid_testimonial_vid_link` varchar(100) NOT NULL,
  `vid_testimonial_logo_img` text NOT NULL,
  `vid_testimonial_name` varchar(100) NOT NULL,
  `vid_testimonial_course` varchar(100) NOT NULL,
  `vid_testimonial_school` varchar(100) NOT NULL,
  `vid_testimonial_message` text NOT NULL,
  `vid_testimonial_created` datetime NOT NULL,
  `vid_testimonial_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_vid_testimonial`
--

INSERT INTO `fbsv2_vid_testimonial` (`vid_testimonial_aid`, `vid_testimonial_category`, `vid_testimonial_vid_link`, `vid_testimonial_logo_img`, `vid_testimonial_name`, `vid_testimonial_course`, `vid_testimonial_school`, `vid_testimonial_message`, `vid_testimonial_created`, `vid_testimonial_datetime`) VALUES
(8, 'Continuing Studies', 'https://www.youtube.com/watch?v=xnHrbjA0WZY', '[{\"name\":\"lc.png\",\"id\":\"11P5k8VyGYeBwIAR7JvQ9POSnVvqI8adr\",\"datetime\":\"2025-02-19 15:56:27\"}]', 'Paul Reinier Vista', 'Upskill Trainee', '', 'It is fulfilling, especially learning tools like SASS, Tailwind, WordPress, and Figma. Aside from the technical skills, they taught us how to act professionally in a working environment.', '2024-11-07 10:52:17', '2025-02-19 15:56:24'),
(9, 'Continuing Studies', 'https://www.youtube.com/watch?v=PnBWVserVps', '[{\"name\":\"lc.png\",\"id\":\"1KKRFTv18gLGNJXlKq2Qy4uMIo7G5oA6A\",\"datetime\":\"2025-02-19 15:56:17\"}]', 'Jinuel Zymon I. Ramos', 'BSCS Graduate', '', 'To all college graduates, I encourage you to pursue your continuing studies and training here at FBS. This will help you prepare professionally to join the competitive tech industry.', '2024-11-07 10:53:25', '2025-02-19 15:56:14'),
(10, 'Continuing Studies', 'https://www.youtube.com/watch?v=u-XPdxpKosw', '[{\"name\":\"plsp.png\",\"id\":\"1nCnmoLHsHO2kiaJumyrFGr9ONx8a12L3\",\"datetime\":\"2025-02-19 15:56:00\"}]', 'Kurt Lui Juan Balanial', 'PLSP Graduate', '', 'My training here at FBS has been an invaluable experience that equipped me with essential skills in front-end and back-end development. Beyond that, the environment and professionalism at FBS have empowered me and prepared me to take on future challenges in the tech industry.', '2024-11-07 10:56:42', '2025-02-19 15:55:57'),
(11, 'High School Work Immersion', 'https://www.youtube.com/watch?v=MlBrBmufpy4', '[{\"name\":\"slis.png\",\"id\":\"1VyuRGOa1VDaUINUZIzxxeKssqC1FD4Vj\",\"datetime\":\"2025-02-19 15:55:47\"}]', 'Christian Jaekhob Dela Cruz', 'Grade 12 HUMSS', 'South Lakes Integrated School', 'The program was also very beneficial to me—I learned a lot about potential jobs I could take in the future, and it helped me become a better person thanks to their PLEs after almost every task we completed.', '0000-00-00 00:00:00', '2025-02-19 15:55:44'),
(12, 'High School Work Immersion', 'https://www.youtube.com/watch?v=-OI3L6mWmsA', '[{\"name\":\"spc.png\",\"id\":\"1Tsdv1KTwgTJVHf_UHa5HHR0Lm_R25hiw\",\"datetime\":\"2025-02-19 15:55:37\"}]', 'Justine Clein Gelindon', 'Grade 12 ICT', 'San Pablo Colleges', 'I had a very enjoyable experience here at FBS. Everything we did at FBS was truly enjoyable, from web designing using Figma to creating our own websites with HTML and CSS.', '0000-00-00 00:00:00', '2025-02-19 15:55:34'),
(13, 'High School Work Immersion', 'https://www.youtube.com/watch?v=GJNpd6naWUI', '[{\"name\":\"mfmc.png\",\"id\":\"1rIrRDyqlJsdLQnbmb25oohUKvgUa4TRw\",\"datetime\":\"2025-02-19 15:55:27\"}]', 'Althea Mae Lat', 'Grade 12 HUMSS', 'Marcelino Fule Memorial College', 'My experience was very fun, and all the trainers were kind and approachable. I highly recommend the FBS work immersion program because you will learn a lot here.', '0000-00-00 00:00:00', '2025-02-19 15:55:24'),
(14, 'College On-the-job Training', 'https://www.youtube.com/watch?v=w6_k-pnlaE0&t=1s', '[{\"name\":\"dlsl_official_logo.png\",\"id\":\"1_Z-mA9CGpDCRJm0PsMCWpVNzBX_5xi_P\",\"datetime\":\"2025-02-19 15:55:17\"}]', 'Thea Lyzette Consignado', '', 'De La Salle Lipa Trainee', 'I have learned a lot, and my overall experience will be very helpful not only in my future career, but also in building and shaping myself.', '0000-00-00 00:00:00', '2025-02-19 15:55:13'),
(15, 'College On-the-job Training', 'https://www.youtube.com/watch?v=rGtLB1x58ts', '[{\"name\":\"lspu.png\",\"id\":\"1-i_BkYqe6VsQIv9A0bpaZC4M4718CL4M\",\"datetime\":\"2025-02-19 15:55:07\"}]', 'Mark Ryan Merin', 'Laguna State Polytechnic Univ.', ' SPC Campus', 'I am grateful to Frontline Business Solutions for providing me with a training and the support I needed to become what I am today. Their programs are designed to help people like me to gain the skills and knowledge that is neccesary to success in this field.', '0000-00-00 00:00:00', '2025-02-19 15:55:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_audience`
--
ALTER TABLE `fbsv2_audience`
  ADD PRIMARY KEY (`audience_aid`);

--
-- Indexes for table `fbsv2_careers`
--
ALTER TABLE `fbsv2_careers`
  ADD PRIMARY KEY (`careers_aid`);

--
-- Indexes for table `fbsv2_events_activities`
--
ALTER TABLE `fbsv2_events_activities`
  ADD PRIMARY KEY (`events_activities_aid`);

--
-- Indexes for table `fbsv2_home_banner`
--
ALTER TABLE `fbsv2_home_banner`
  ADD PRIMARY KEY (`home_banner_aid`);

--
-- Indexes for table `fbsv2_home_insights`
--
ALTER TABLE `fbsv2_home_insights`
  ADD PRIMARY KEY (`home_insights_aid`);

--
-- Indexes for table `fbsv2_home_testimonial`
--
ALTER TABLE `fbsv2_home_testimonial`
  ADD PRIMARY KEY (`home_testimonial_aid`);

--
-- Indexes for table `fbsv2_industry_testimonial`
--
ALTER TABLE `fbsv2_industry_testimonial`
  ADD PRIMARY KEY (`industry_testimonial_aid`);

--
-- Indexes for table `fbsv2_lcss_batch`
--
ALTER TABLE `fbsv2_lcss_batch`
  ADD PRIMARY KEY (`lcss_batch_aid`);

--
-- Indexes for table `fbsv2_notification`
--
ALTER TABLE `fbsv2_notification`
  ADD PRIMARY KEY (`notification_aid`);

--
-- Indexes for table `fbsv2_notification_log`
--
ALTER TABLE `fbsv2_notification_log`
  ADD PRIMARY KEY (`notification_log_aid`);

--
-- Indexes for table `fbsv2_pricing`
--
ALTER TABLE `fbsv2_pricing`
  ADD PRIMARY KEY (`pricing_aid`);

--
-- Indexes for table `fbsv2_pricing_services`
--
ALTER TABLE `fbsv2_pricing_services`
  ADD PRIMARY KEY (`pricing_services_aid`);

--
-- Indexes for table `fbsv2_role`
--
ALTER TABLE `fbsv2_role`
  ADD PRIMARY KEY (`role_aid`);

--
-- Indexes for table `fbsv2_sending_email_log`
--
ALTER TABLE `fbsv2_sending_email_log`
  ADD PRIMARY KEY (`sending_email_log_aid`);

--
-- Indexes for table `fbsv2_special_offers`
--
ALTER TABLE `fbsv2_special_offers`
  ADD PRIMARY KEY (`special_offers_aid`);

--
-- Indexes for table `fbsv2_subscriber_list`
--
ALTER TABLE `fbsv2_subscriber_list`
  ADD PRIMARY KEY (`subscriber_aid`);

--
-- Indexes for table `fbsv2_user_developer`
--
ALTER TABLE `fbsv2_user_developer`
  ADD PRIMARY KEY (`user_developer_aid`);

--
-- Indexes for table `fbsv2_user_other`
--
ALTER TABLE `fbsv2_user_other`
  ADD PRIMARY KEY (`user_other_aid`);

--
-- Indexes for table `fbsv2_vid_testimonial`
--
ALTER TABLE `fbsv2_vid_testimonial`
  ADD PRIMARY KEY (`vid_testimonial_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_audience`
--
ALTER TABLE `fbsv2_audience`
  MODIFY `audience_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `fbsv2_careers`
--
ALTER TABLE `fbsv2_careers`
  MODIFY `careers_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `fbsv2_events_activities`
--
ALTER TABLE `fbsv2_events_activities`
  MODIFY `events_activities_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `fbsv2_home_banner`
--
ALTER TABLE `fbsv2_home_banner`
  MODIFY `home_banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `fbsv2_home_insights`
--
ALTER TABLE `fbsv2_home_insights`
  MODIFY `home_insights_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `fbsv2_home_testimonial`
--
ALTER TABLE `fbsv2_home_testimonial`
  MODIFY `home_testimonial_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `fbsv2_industry_testimonial`
--
ALTER TABLE `fbsv2_industry_testimonial`
  MODIFY `industry_testimonial_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `fbsv2_lcss_batch`
--
ALTER TABLE `fbsv2_lcss_batch`
  MODIFY `lcss_batch_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `fbsv2_notification`
--
ALTER TABLE `fbsv2_notification`
  MODIFY `notification_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `fbsv2_notification_log`
--
ALTER TABLE `fbsv2_notification_log`
  MODIFY `notification_log_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `fbsv2_pricing`
--
ALTER TABLE `fbsv2_pricing`
  MODIFY `pricing_aid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fbsv2_pricing_services`
--
ALTER TABLE `fbsv2_pricing_services`
  MODIFY `pricing_services_aid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `fbsv2_role`
--
ALTER TABLE `fbsv2_role`
  MODIFY `role_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `fbsv2_sending_email_log`
--
ALTER TABLE `fbsv2_sending_email_log`
  MODIFY `sending_email_log_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `fbsv2_special_offers`
--
ALTER TABLE `fbsv2_special_offers`
  MODIFY `special_offers_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `fbsv2_subscriber_list`
--
ALTER TABLE `fbsv2_subscriber_list`
  MODIFY `subscriber_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=140;

--
-- AUTO_INCREMENT for table `fbsv2_user_developer`
--
ALTER TABLE `fbsv2_user_developer`
  MODIFY `user_developer_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `fbsv2_user_other`
--
ALTER TABLE `fbsv2_user_other`
  MODIFY `user_other_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `fbsv2_vid_testimonial`
--
ALTER TABLE `fbsv2_vid_testimonial`
  MODIFY `vid_testimonial_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
