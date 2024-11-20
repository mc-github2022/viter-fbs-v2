-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 20, 2024 at 08:08 AM
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
-- Database: `viter-fbs`
--

-- --------------------------------------------------------

--
-- Table structure for table `careers`
--

CREATE TABLE `careers` (
  `careers_aid` int(11) NOT NULL,
  `careers_job_title` varchar(100) NOT NULL,
  `careers_job_classification` varchar(50) NOT NULL,
  `careers_job_mode` varchar(50) NOT NULL,
  `careers_job_status` varchar(50) NOT NULL,
  `careers_job_description` text NOT NULL,
  `careers_icon` varchar(50) NOT NULL,
  `careers_created` datetime NOT NULL,
  `careers_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `careers`
--

INSERT INTO `careers` (`careers_aid`, `careers_job_title`, `careers_job_classification`, `careers_job_mode`, `careers_job_status`, `careers_job_description`, `careers_icon`, `careers_created`, `careers_datetime`) VALUES
(1, 'GRAPHICS DESIGNER', 'Full-time', 'On-site', 'Closed', '<strong style=\"margin-bottom: 30px\">Job Qualifications</strong>\n<ul>\n  <li>\n    <ol>\n      <li>\n        Fluency in written and spoken English\n        <ul style=\"margin-left: 30px\">\n          <li>&#x2022; Good spelling and grammar</li>\n          <li>&#x2022; Good communication skills</li>\n          <li>&#x2022; Ability to proofread work</li>\n        </ul>\n      </li>\n      <li>\n        Proficiency in Adobe Creative Cloud: InDesign, Illustrator, Photoshop,\n        and Acrobat\n        <ul style=\"margin-left: 30px\">\n          <li>&#x2022; InDesign tabs & tables</li>\n          <li>&#x2022; Master template pages</li>\n          <li>&#x2022; Photo editing</li>\n          <li>&#x2022; Creating fillable forms in Acrobat</li>\n          <li>&#x2022; Creating vector graphics</li>\n          <li>\n            &#x2022; Creating vector graphics from raster images, such as logos\n          </li>\n        </ul>\n      </li>\n      <li>\n        Deep knowledge of pre-press for print\n        <ul style=\"margin-left: 30px\">\n          <li>&#x2022; Differences between RGB, CMYK, Pantone, and HEX</li>\n          <li>&#x2022; Differences between raster and vector graphics</li>\n          <li>&#x2022; Bleed, margins, and safe space</li>\n          <li>&#x2022; Fonts and links</li>\n          <li>&#x2022; Resolution</li>\n          <li>&#x2022; File size and structure</li>\n          <li>&#x2022; Following customer supplied brand guidelines</li>\n          <li>&#x2022; Part of the job is fixing customer supplied artwork</li>\n        </ul>\n      </li>\n      <li>\n        An organized individual\n        <ul style=\"margin-left: 30px\">\n          <li>&#x2022; Detail oriented</li>\n          <li>\n            &#x2022; Learn and adhere to naming conventions and file storage\n          </li>\n          <li>&#x2022; Ability to keep track of time while working</li>\n          <li>&#x2022; Keeping good notes about projects and revisions</li>\n          <li>&#x2022; Must be able to work quickly with accuracy</li>\n          <li>\n            &#x2022; Takes initiative since we will be working opposite hours\n          </li>\n          <li>&#x2022; Is not afraid to ask questions</li>\n        </ul>\n      </li>\n      <li>\n        Solid portfolio with examples of designs for many different types of\n        industries, clients, and projects\n        <ul style=\"margin-left: 30px\">\n          <li>\n            &#x2022; Demonstrated knowledge of graphic design principles and\n            color theory\n          </li>\n          <li>\n            &#x2022; A variety of designs – BC, logos, brochures, posters, trade\n            show backdrops, t-shirts, car wraps, etc.\n          </li>\n        </ul>\n      </li>\n    </ol>\n  </li>\n</ul>\n', 'FaPalette', '0000-00-00 00:00:00', '2024-10-30 09:28:35'),
(2, 'ACCOUNTS PAYABLE CLERK', 'Full-time', 'On-site', 'Ongoing', '<p style=\"margin-bottom: 30px\">\n  As the Accounts Payable Clerk , you will be a key member of the team, leading\n  the day-to-day operations of the Accounts Payable function and ensuring\n  accurate recording of Alp, grants, and transfers. In partnership with the\n  Director of Operations, you will serve in a supporting role with a wide\n  variety of accounting responsibilities. In this role, you will handle\n  administrative tasks relating to these areas to ensure effective and efficient\n  operations. You will also handle highly confidential material to be handled in\n  the utmost professional manner.\n</p>\n\n<p style=\"margin-bottom: 30px\">\n  Mirza Hadi Baig, a Full Stack Developer and Shopify Developer, shared her\n  insights on why website maintenance is crucial for any business. Let’s dive\n  into those reasons and uncover why consistent website maintenance is a must\n  for any business.\n</p>\n\n<strong>Skills & Competencies</strong>\n<ul style=\"margin-bottom: 30px; margin-left: 30px\">\n  <li>&#x2022; High level of accuracy and attention to detail is essential.</li>\n  <li>\n    &#x2022; Initiative-taker capable of working independently with minimal\n    supervision.\n  </li>\n  <li>\n    &#x2022; Organized with ability to manage multiple priorities to meet\n    deadlines.\n  </li>\n  <li>\n    &#x2022; Effective problem solver and team player who enjoys learning and\n    contributing to team goals.\n  </li>\n  <li>\n    &#x2022; Proficient in relevant computer applications such as MS Office\n    including Excel.\n  </li>\n  <li>&#x2022; Accurate keyboard skills and ability to enter data quickly.</li>\n  <li>&#x2022; Good verbal and written communication skills.</li>\n  <li>&#x2022; Information collection, recording, and management skills.</li>\n</ul>\n\n<strong>Prefered Qualifications</strong>\n<ul style=\"margin-bottom: 30px; margin-left: 30px\">\n  <li>\n    &#x2022; Post secondary education in Bookkeeping, Accounting, or a related\n    field (or the equivalent in experience) Blackbaud knowledge or database\n    experience is an asset Familiarity with nonprofit accounting, GAAP, and\n    grant management Three years experience in Alp and/or bookkeeping Experience\n    with international payments and exchange rates (highly preferred)\n  </li>\n</ul>\n', 'IoMdCalculator', '0000-00-00 00:00:00', '2024-10-30 09:29:14'),
(3, 'DONATIONS ADMINISTRATOR', 'Full-time', 'On-site', 'Ongoing', '<strong>Job Overview</strong>\n<p style=\"margin-bottom: 30px\">\n  The Donations Administrator is a key member of the team, leading the\n  day-to-day operations of the Donations function and ensuring accurate and\n  timely recording of various types of gifts (checks, wires, online, etc.). This\n  role is responsible to maintain clean donor data, communicate with donors, and\n  send donor acknowledgements, receipts, and consolidated annual statements. In\n  this role, you will handle administrative tasks relating to these areas to\n  ensure effective and efficient operations. You will also handle highly\n  confidential material to be handled in the utmost professional manner.\n</p>\n\n<strong>Skills & Competencies</strong>\n<ul style=\"margin-left: 30px\">\n  <li>\n    <ol>\n      <li>&#x2022; Post-Secondary education preferred.</li>\n      <li>&#x2022; Blackbaud knowledge or database experience is an asset.</li>\n      <li>&#x2022; Problem solving skills are essential.</li>\n      <li>\n        &#x2022; Strong Microsoft Office skills are required with superior\n        proficiency in accuracy.\n      </li>\n      <li>\n        &#x2022; Ability to manage multiple projects in a fast-paced environment\n        is required.\n      </li>\n      <li>\n        &#x2022; Enthusiastic individual with excellent organizational and time\n        management skills.\n      </li>\n      <li>\n        &#x2022; High level of accuracy and attention to detail is essential.\n      </li>\n      <li>\n        &#x2022; Self-starter capable of working independently with minimal\n        supervision.\n      </li>\n      <li>\n        &#x2022; Team player who enjoys learning and contributing to team goals.\n      </li>\n    </ol>\n  </li>\n</ul>\n', 'IoMdCalculator', '0000-00-00 00:00:00', '2024-10-30 09:29:49'),
(4, 'QA ENGINEER', 'Full-time', 'On-site', 'Ongoing', '<strong>Job Overview</strong>\n<p  style=\"margin-bottom: 30px\">\n    We are looking for a talented and detail-oriented QA Engineer to join our agile software development team. You will be responsible for ensuring the quality of a corporate CRM intranet website developed in ReactJS, MySQL and Vite with Python. This role is critical as the application will be used by a CPA firm to manage sensitive financial and client data. As the first dedicated QA professional in our team, you will have the opportunity to define and establish our testing processes, working closely with developers and product owners to ensure software quality.\n</p>\n\n<strong>Job Qualifications</strong>\n<ul style=\"margin-left: 30px\">\n  <li>\n    <ol>\n      <li>&#x2022; Bachelor’s degree in Computer Science, Information Technology, or a related field, or equivalent experience.</li>\n      <li>&#x2022; Proven experience as a QA Engineer, Test Engineer, or similar role in software testing.</li>\n        <li>&#x2022; Strong knowledge of software QA methodologies, tools, and processes.</li>\n        <li>&#x2022; Proficiency in testing web applications, particularly those built with ReactJS, MySQL and Vite.</li>\n        <li>&#x2022; Experience with PHP and MySQL.</li>\n        <li>&#x2022; Familiarity with agile frameworks and regression testing practices.</li>\n        <li>&#x2022; Experience working with version control systems such as Git.</li>\n        <li>&#x2022; Familiarity with continuous integration and deployment pipelines.</li>\n        <li>&#x2022; Strong communication skills and the ability to work effectively within a collaborative team environment.</li>\n        <li>&#x2022; Detail-oriented with a passion for delivering high-quality software.</li>\n        <li>&#x2022; Experience in testing CRM systems or applications in the financial domain.</li>\n        <li>&#x2022; Experience with performance testing tools.</li>\n        <li>&#x2022; Familiarity with cloud platforms such as Siteground.</li>\n        <li>&#x2022; Experience working in a CPA or finance-related environment.</li>\n        </li>\n    </ol>\n  </li>\n</ul>\n', 'FaCode', '0000-00-00 00:00:00', '2024-10-30 09:30:42');

-- --------------------------------------------------------

--
-- Table structure for table `events_activities`
--

CREATE TABLE `events_activities` (
  `events_activities_aid` int(11) NOT NULL,
  `events_activities_img` varchar(100) NOT NULL,
  `events_activities_category` varchar(100) NOT NULL,
  `events_activities_title` varchar(200) NOT NULL,
  `events_activities_slug` varchar(100) NOT NULL,
  `events_activities_date` varchar(20) NOT NULL,
  `events_activities_description` text NOT NULL,
  `events_activities_created` datetime NOT NULL,
  `events_activities_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `events_activities`
--

INSERT INTO `events_activities` (`events_activities_aid`, `events_activities_img`, `events_activities_category`, `events_activities_title`, `events_activities_slug`, `events_activities_date`, `events_activities_description`, `events_activities_created`, `events_activities_datetime`) VALUES
(2, 'img_3348-1080x550.jpg', 'Partnership', 'Annual Career Fest 2024 at STI College', 'annual-career-fest-2024-at-sti-college-cavite', '2024-10-03', '<p>We are thrilled to share our recent participation in the Annual Career Fest 2024 at STI College San Pablo, an event dedicated to connecting graduating students with potential career opportunities.</p>\n\n<div style=\"display: flex; align-items: center; justify-content: center; flex-wrap: wrap; margin-bottom: 30px\">\n<img src=\"../../newsite/img/sti-1.webp\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n<img src=\"../../newsite/img/sti-15.webp\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n<img src=\"../../newsite/img/sti-6.webp\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n<img src=\"../../newsite/img/sti-7.webp\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n<img src=\"../../newsite/img/sti-8.webp\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n<img src=\"../../newsite/img/sti-9.webp\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n<img src=\"../../newsite/img/sti-14.webp\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n<img src=\"../../newsite/img/sti-5.webp\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n</div>\n\n<p>Our company proudly offers aspiring young professionals in the field of IT a gateway to enter the industry of web development. Our booth attracted numerous applicants eager to become full-stack developers. We were fortunate to provide job opportunities to students from BS Information Technology, BS Computer Science, and BS Computer Engineering programs. This event also paved the way for us to build a strong partnership with STI College San Pablo, enhancing our efforts in talent acquisition and contributing to the field of Information Technology. We look forward to continuing our collaboration with STI College San Pablo and supporting the next generation of IT professionals.</p>', '0000-00-00 00:00:00', '2024-10-29 10:45:09'),
(3, 'team-building-2024.jpg', 'Company Activities', 'Team Building 2024', 'team-building-2024', '2024-08-07', '<p style=\"margin-bottom: 30px\">\n  From May 15 to 17, our team gathered at La Luz Beach Resort for our 2024\n  Company Team Building. The event was packed with engaging activities aimed at\n  fostering camaraderie and teamwork.\n</p>\n\n<p style=\"margin-bottom: 30px\">\n  We kicked off with inspiring messages from our administrators and client\n  visitors, setting a positive tone. The retreat featured a variety of games,\n  including tug of war, beach volleyball, and a “Drum Whole” competition,\n  highlighting the importance of teamwork, synchronization, and creativity. The\n  lively “Family Feud” game and the spirited yell competition showcased our team\n  spirit and enthusiasm.\n</p>\n\n<p style=\"margin-bottom: 30px\">\n  The retreat concluded with reflections from our administrators and client\n  visitors, who emphasized the growth in our team dynamics over the past days.\n  As we departed from La Luz Beach Resort, we felt a renewed sense of unity and\n  commitment to supporting each other, ready to tackle future challenges\n  together with enhanced teamwork and shared purpose.\n</p>\n', '0000-00-00 00:00:00', '2024-10-29 10:45:58'),
(7, '5th-year-thumb_3.jpg', 'Events', 'Fifth Year Anniversary', 'fifth-year-anniversary', '2024-10-30', '<p style=\"margin-bottom: 30px\">\n  We’ve come a long way since then, adding new services like Virtual Office and\n  a Learning Center to support education and skill development. The pandemic\n  brought challenges, but we adapted by working remotely without letting go of\n  our team or clients. This difficult time showed our strength and the trust our\n  clients have in us, helping us grow and make a difference in our community.\n</p>\n\n<p style=\"margin-bottom: 30px\">\n  As we celebrate five years, we’re proud and grateful. Our goal has always been\n  more than just business – it’s about doing business for good. Looking forward,\n  we’re excited to keep making a positive impact on lives and businesses. Here’s\n  to five years of growth, strength, and service, and to many more years of\n  making a positive change. Cheers to Frontline Business Solutions, where every\n  day is a chance to make a difference.\n</p>\n<p style=\"text-align: center; display: flex; justify-content: center\">\n  <iframe\n    width=\"560\"\n    height=\"315\"\n    src=\"https://www.youtube.com/embed/gReHchZNERM?si=0VpXHIQzrF09WC_A\"\n    title=\"YouTube video player\"\n    frameborder=\"0\"\n    allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\"\n    referrerpolicy=\"strict-origin-when-cross-origin\"\n    allowfullscreen\n  ></iframe>\n</p>\n', '0000-00-00 00:00:00', '2024-10-29 13:47:03'),
(8, 'The-Ideal-Team-Player-Seminar-3-scaled.jpg', 'Events', 'The Ideal Team Player Seminar', 'the-ideal-team-player-seminar', '2024-10-31', '<p style=\"margin-bottom: 30px\">In order to foster a thriving and harmonious work environment, the Learning Center Solutions team, led by Mr. Jhonny Jose Dichoso, conducted an engaging and insightful seminar on “The Ideal Team Player: Embracing Humble, Hungry, and Smart Virtues.” The seminar aimed to explore the significance of these three virtues and their application in building effective teams and achieving organizational success.</p>\n\n<p style=\"margin-bottom: 30px\">The seminar also identified the categories of employees who might lack or be deficient in these virtues, such as individuals who are overly self-centered, lack initiative, or struggle with interpersonal dynamics.</p>\n\n<p style=\"margin-bottom: 30px\">To deepen the understanding of these virtues and foster practical application, the seminar featured engaging group discussions and activities. Participants were encouraged to share experiences and scenarios where these virtues played pivotal roles in team dynamics and outcomes. Through group activities and exercises, attendees practiced being humble, hungry, and smart, honing their skills in communication, empathy, and collaboration.</p>\n\n<p style=\"margin-bottom: 30px\">Furthermore, the seminar emphasized the Four Primary Applications of the ideal team player framework: Hiring, Assessing, Developing and Embedding</p>\n\n<p style=\"margin-bottom: 30px\">In conclusion, the seminar on “The Ideal Team Player” by the Learning Center Solutions team provided invaluable insights into building strong, high-performing teams. By fostering a culture of humility, drive, and emotional intelligence, organizations can create a winning environment where team members complement each other’s strengths and work synergistically towards achieving shared goals.</p>\n', '0000-00-00 00:00:00', '2024-10-29 13:47:17'),
(9, 'company-retreat-2024.jpg', 'Events', 'Company Retreat 2024', 'company-retreat-2024', '2024-10-31', '<p>We took this time to deeply reflect on the significance of glorifying God through our work. Each daily task presents an opportunity to showcase His love and grace, reminding us that our efforts can touch lives in meaningful ways. We emphasized the importance of integrity in serving others, as it fosters trust within our team. Aligning our work with God\'s purpose brings a deeper meaning to our roles, inspiring us to make a positive impact not just within our team but in the communities we serve. We are reminded that our work is a calling, a chance to reflect His light in everything that we do.</p>\n\n<p>As a company of faith, we are committed to nurturing an environment where spiritual values guide our actions and decisions, promoting unity and a sense of family among us. Each moment shared strengthens our bonds and empowers us to pursue our mission with renewed passion.</p>\n\n<p>Let’s carry this spirit forward, recognizing that our collective efforts can create change in the world around us. Here’s to continuing our mission together and making a lasting difference!</p>', '0000-00-00 00:00:00', '2024-10-29 20:26:33'),
(10, 'lcs-visits-5.jpg', 'Partnership', 'LCS School Visits', 'lcs-school-visits', '2024-10-31', '<p style=\"margin-bottom: 30px\">Our Learning Center Solutions Team embarked on an inspiring journey to visit several educational institutions, presenting the many opportunities our Learning Center Solutions Department has to offer. Our team introduced innovative programs for college on-the-job training and senior high school work immersion, with a focus on creating impactful partnerships that empower students through practical learning experiences.</p>\n\n<div style=\"display: flex; flex-wrap: wrap; margin-bottom: 30px align-items: center; justify-content: center;\">\n<img src=\"../../newsite/img/lcs-visits-1.jpg\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n<img src=\"../../newsite/img/lcs-visits-2.jpg\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n<img src=\"../../newsite/img/lcs-visits-3.jpg\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n<img src=\"../../newsite/img/lcs-visits-4.jpg\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n<img src=\"../../newsite/img/lcs-visits-6.jpg\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n<img src=\"../../newsite/img/lcs-visits-7.jpg\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n<img src=\"../../newsite/img/lcs-visits-8.jpg\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n</div>\n<p style=\"margin-bottom: 30px\">We are deeply grateful to the schools that welcomed us with open arms: Marcelino Fule Memorial College, St. Therese Montessori School of San Pablo, Inc., St. Nicolas Golden Field Academy Inc., LSPU-San Pablo City Campus, ACLC College of San Pablo City Campus, San Pablo Colleges, and Asian Institute of Technology and Education. Your trust and enthusiasm reinforce our mission to support students’ growth and development.</p>\n\n<p style=\"margin-bottom: 30px\">A heartfelt thank you goes to our dedicated team members—Mr. Ansbert Gregana, Ms. Herlyn Torres, and Ms. Thea Lyzette Consignado—whose passion and commitment, under the expert guidance of Mr. Jhonny Dichoso, drive the success of these partnerships. Together, we are shaping a brighter future for the next generation of professionals.</p>\n\n<p style=\"margin-bottom: 30px\">Our programs are designed to develop technical skills, professionalism, and ethical qualities—key competencies for students to excel in the industry. With these foundational qualities, we’re here to support students as they embark on their career journeys.</p>\n\n', '0000-00-00 00:00:00', '2024-10-29 20:27:44');

-- --------------------------------------------------------

--
-- Table structure for table `home_banner`
--

CREATE TABLE `home_banner` (
  `home_banner_aid` int(11) NOT NULL,
  `home_banner_sub_title` varchar(100) NOT NULL,
  `home_banner_title` varchar(100) NOT NULL,
  `home_banner_description` varchar(500) NOT NULL,
  `home_banner_button_text` varchar(50) NOT NULL,
  `home_banner_img` varchar(100) NOT NULL,
  `home_banner_created` datetime NOT NULL,
  `home_banner_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `home_banner`
--

INSERT INTO `home_banner` (`home_banner_aid`, `home_banner_sub_title`, `home_banner_title`, `home_banner_description`, `home_banner_button_text`, `home_banner_img`, `home_banner_created`, `home_banner_datetime`) VALUES
(1, 'In business for good.', 'Your Trusted Christian Partner in Managed Services', 'We deliver end-to-end solutions and professional expertise in web applications, websites, virtual assistants, and skills development. Rooted in Christian values, we are committed to integrity and excellence in helping you elevate your digital presence, streamline operations, and build a more skilled workforce. Our comprehensive services are designed to drive your success with a mission to serve with purpose and care.', 'GET STARTED', 'home-bg-new.webp', '0000-00-00 00:00:00', '2024-10-26 23:49:18'),
(2, 'Custom Solutions, Lasting Growth', 'Empower your business with Custom Web Applications', 'We provide custom web application development services tailored to meet your business needs, combining robust functionality with user-friendly design. Our solutions aim to improve business efficiency and automate processes, helping you achieve your goals with modern, scalable technology.', 'GET STARTED', 'home-bg-webapp.webp', '2024-10-27 00:18:24', '2024-10-27 00:18:24'),
(3, 'Digital Design, Meaningful Engagement', 'Elevate your digital presence with responsive, user-friendly                     Websites', 'Our website services include design, development, and maintenance to ensure your digital presence is impactful and aligned with your brand. We create responsive, visually appealing, and SEO-friendly websites that enhance user experience and drive customer engagement.', 'GET STARTED', 'home-bg-website.webp', '0000-00-00 00:00:00', '2024-10-27 00:19:49'),
(4, 'Virtual Support, Real Results', 'Streamline your operations with skilled Virtual Assistants.', 'Our skilled virtual assistants offer comprehensive support to help you manage tasks and optimize daily operations. From administrative duties to customer service, we provide reliable and efficient assistance, allowing you to focus on growing your business.', 'GET STARTED', 'home-bg-va.webp', '0000-00-00 00:00:00', '2024-10-27 00:21:24'),
(5, 'Work-Related Training, Career Success', 'Hands-on training with actual industry experience.', 'We offer structured skills development programs that equip individuals with the technical and soft skills needed in today’s workforce. Our On-the-job training and work immersion program covers web development, IT, and accounting, bridging the gap between education and employment, and empowering participants for career success.', 'GET STARTED', 'home-bg-lcs.webp', '2024-10-27 00:22:58', '2024-10-27 00:22:58');

-- --------------------------------------------------------

--
-- Table structure for table `home_insights`
--

CREATE TABLE `home_insights` (
  `home_insights_aid` int(11) NOT NULL,
  `home_insights_img` varchar(100) NOT NULL,
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
-- Dumping data for table `home_insights`
--

INSERT INTO `home_insights` (`home_insights_aid`, `home_insights_img`, `home_insights_category`, `home_insights_title`, `home_insights_slug`, `home_insights_date`, `home_insights_paragraph_a`, `home_insights_paragraph_b`, `home_insights_paragraph_c`, `home_insights_created`, `home_insights_datetime`) VALUES
(4, 'virtual-assistant.jpg', 'Virtual Assistant', 'Maximizing Productivity with Virtual Assistant Services: Your Secret to Streamlining Success', 'maximizing-productivity-with-virtual-assistant-services', '2024-10-26', '<p>\n  In today’s fast-paced business world, time is very precious. The demand to\n  juggle multiple tasks can be overwhelming and can take so much of your time.\n  This relentless multitasking not only drains energy but also reduces overall\n  productivity.\n</p>\n\n<p>\n  Sarah Harris, who handles Customer Support Requests at Workast, shared eight\n  powerful ways a virtual assistant can significantly boost your productivity.\n  By delegating routine tasks to a skilled VA, you can reclaim your time and\n  focus on what truly matters—growing your business and enhancing your core\n  operations.\n</p>\n\n<p>\n  Let’s dive into those ways and explore how a virtual assistant can be the\n  game-changer you’ve been looking for!\n</p>\n\n<ul style=\"margin-left: 30px\">\n  <li>\n    <strong> 1. Enhanced Task Organization</strong>\n    <p>\n      Your company’s productivity depends on how well your tasks are organized.\n      When your tasks and schedules are structured properly, you’ll encounter\n      fewer problems and experience smoother operations.\n    </p>\n    <p>\n      Virtual assistants can help you stay on top of your tasks by keeping your\n      to-do list organized and ensuring business processes are streamlined. By\n      taking on responsibilities like answering customer queries, handling email\n      management, or handling social media posts, Virtual Assistants allow you\n      to focus on growing your business. With a Virtual Assistant, you’ll be\n      able to run your operations and set priorities without any distractions.\n    </p>\n  </li>\n  <li>\n    <strong>2. Better Time Management</strong>\n    <p>\n      Running a business often means juggling numerous tasks, and before you\n      know it, your entire day fills up quickly. It can be hard to remember\n      everything.\n    </p>\n    <p>\n      This is where Virtual Assistants would be beneficial to you. They can do\n      scheduling appointments, keep you on track for meetings, and ensure you\n      meet all your deadlines.\n    </p>\n  </li>\n  <li>\n    <strong>3. Avoiding Multitasking</strong>\n    <p>\n      Multitasking is often seen as a valuable skill, but studies show it can\n      lower productivity. We are not designed to juggle multiple tasks\n      simultaneously. Instead, focusing on one task at a time gives clearer\n      thinking and better solutions.\n    </p>\n    <p>\n      With the help of Virtual Assistant, they can reduce the pressure to\n      multitask, allowing you to focus on what truly matters. With their\n      support, you can prioritize important projects, avoid distractions, and\n      enhance your productivity.\n    </p>\n  </li>\n  <li>\n    <strong>4. Can take more breaks</strong>\n    <p>\n      Taking regular breaks can boost productivity. Continuously working without\n      breaks leads to burnout and decreased focus which can result in poor\n      productivity.\n    </p>\n    <p>\n      With a VA handling certain tasks for you, while you take a break, you\n      won’t have to worry about your deadlines. Whether it’s a quick coffee or\n      even a short meditation, breaks keep you mentally refreshed and ready to\n      tackle your work with renewed energy.\n    </p>\n  </li>\n  <li>\n    <strong>5. Reducing Distractions, Increasing Output</strong>\n    <p>\n      Common workplace distractions, can eat up valuable time and reduce\n      productivity. Once distracted, it’s often hard to get back on track, and\n      the \"restart\" process can lower the quality of your work.\n    </p>\n    <p>\n      Virtual assistants work in focused, distraction-free environments,\n      allowing them to complete tasks efficiently and effectively. With fewer\n      distractions in their work setting, VAs can manage their time better,\n      increasing their overall productivity without interruptions.\n    </p>\n  </li>\n  <li>\n    <strong>6. Specialized Expertise</strong>\n    <p>\n      As an entrepreneur, you might want to master every aspect of your\n      business, but that’s simply not feasible. Virtual assistants handle a\n      range of tasks with skill and efficiency.\n    </p>\n    <p>\n      From content creation to bookkeeping, VAs are equipped to take on\n      repetitive or specialized tasks, often completing them faster due to their\n      familiarity and experience. This allows your business to run more\n      smoothly, as tasks are handled by experts, freeing you up to focus on\n      areas where your skills shine.\n    </p>\n  </li>\n  <li>\n    <strong>7. Filtering Communication</strong>\n    <p>\n      Not every message or notification you receive requires your immediate\n      attention. Many messages can be quickly responded to or ignored. A virtual\n      assistant can help manage your inbox and communication channels, filtering\n      out unnecessary messages and ensuring that only the most important\n      messages reach you.\n    </p>\n    <p>\n      By having your VA handle the routine communications, you can focus on the\n      conversations that truly matter.\n    </p>\n  </li>\n  <li>\n    <strong>8. Focus on What You Do Best</strong>\n    <p>\n      Most business owners have a core area of expertise. However, in the early\n      stages of running a business, you may also need to tackle other tasks such\n      as customer support, bookkeeping, or managing social media, which might\n      not be your strengths.\n    </p>\n  </li>\n</ul>\n\n<p>\n  Outsourcing these tasks to a virtual assistant allows you to focus on what you\n  do best. You can rely on your VA to manage the tasks you find challenging or\n  time-consuming, ensuring they’re done expertly and efficiently.\n</p>\n', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit voluptatibus voluptatum provident, explicabo maxime officia odio nihil tempora vero quod esse mollitia architecto quam officiis quia a modi\n minima ullam corporis deserunt. Explicabo, ut est! Minima quia autem\nblanditiis vel consequuntur amet in voluptatibus nemo quas non esse vero ipsum repellat sed ea nobis nulla est corrupti animi vitae, repudiandae ut. Harum explicabo totam quia in, voluptatibus deserunt sit quod quis aliquam co', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit voluptatibus voluptatum provident, explicabo maxime officia odio nihil tempora vero quod esse mollitia architecto quam officiis quia a modi\n minima ullam corporis deserunt. Explicabo, ut est! Minima quia autem\nblanditiis vel consequuntur amet in voluptatibus nemo quas non esse vero ipsum repellat sed ea nobis nulla est corrupti animi vitae, repudiandae ut. Harum explicabo totam quia in, voluptatibus deserunt sit quod quis aliquam co', '0000-00-00 00:00:00', '2024-10-26 21:09:22'),
(8, 'web-developer-2.jpg', 'Web Development', 'Why website maintenance is crucial for any business', 'why-website-maintenance-is-crucial-for-any-business', '2024-10-25', '<p>\n  A website is one of the most important marketing tools\n  for any business. It is a powerful tool for engaging with customers and\n  driving growth. Website maintenance entails regularly updating a site’s\n  software, content, and security measures. Failing to maintain a website can\n  result in issues like slow load times, broken links, security risks, and\n  decreased search engine rankings.\n</p>\n\n<p>\n  Mirza Hadi Baig, a Full Stack Developer and Shopify Developer, shared her\n  insights on why website maintenance is crucial for any business. Let’s dive\n  into those reasons and uncover why consistent website maintenance is a must\n  for any business.\n</p>\n\n<ul style=\"margin-left: 30px\">\n  <li>\n    <strong> 1. Security</strong>\n    <p>\n      With the increasing number of cyber-attacks, website security is more\n      critical than ever. A website not regularly maintained is vulnerable to\n      hacking, malware, and other security breaches. Regular website\n      maintenance, such as updating software and security features, can help\n      prevent these attacks and protect your customers\' data.\n    </p>\n  </li>\n  <li>\n    <strong>2. Performance:</strong>\n    <p>\n      A slow-loading website can significantly impact the user experience,\n      leading to high bounce and decreased conversion rates. Regular website\n      maintenance can help to identify and fix issues that affect website\n      performance, such as broken links, outdated plugins, and unoptimized\n      images.\n    </p>\n    <p>\n      This is where Virtual Assistants would be beneficial to you. They can do\n      scheduling appointments, keep you on track for meetings, and ensure you\n      meet all your deadlines.\n    </p>\n  </li>\n  <li>\n    <strong>3. Search engine optimization (SEO):</strong>\n    <p>\n      Search engines regularly update their algorithms, and a website that is\n      not regularly maintained may be penalized in search engine rankings.\n      Regular website maintenance can help to keep the website up-to-date with\n      the latest SEO practices, ensuring that it ranks higher in search engine\n      results pages.\n    </p>\n  </li>\n  <li>\n    <strong>4. Brand image:</strong>\n    <p>\n      A well-maintained website creates a positive brand image for a business.\n      It shows that the business is professional, up-to-date, and cares about\n      its customers. On the other hand, a poorly maintained website can make a\n      business appear unprofessional and untrustworthy.\n    </p>\n  </li>\n  <li>\n    <strong>5. Cost-effective:</strong>\n    <p>\n      Regular website maintenance can prevent major issues from occurring, which\n      can be costly to fix. Investing in regular maintenance can save businesses\n      money in the long run by preventing major issues from occurring.\n    </p>\n  </li>\n  <li>\n    <strong>6. Regularly back up your website</strong>\n    <p>\n      Backing up your website regularly is an essential part of website\n      maintenance. It ensures that your website data is safe in case of any\n      unforeseen events, such as a server crash or hacking. You can use\n      automated backup tools or perform manual backups regularly.\n    </p>\n  </li>\n  <li>\n    <strong>7. Update website content:</strong>\n    <p>\n      Regularly updating your website content not only keeps your website fresh\n      but also helps with SEO. Add new blog posts, update product descriptions,\n      and add new images and videos to keep your website engaging and\n      up-to-date.\n    </p>\n  </li>\n  <li>\n    <strong>8. Monitor website analytics</strong>\n    <p>\n      Website analytics provide valuable insights into your website\'s\n      performance, such as traffic sources, user behavior, and conversion rates.\n      Regularly monitor your website analytics using tools such as Google\n      Analytics and use the data to optimize your website for better\n      performance.\n    </p>\n  </li>\n  <li>\n    <strong>9. Keep software up-to-date:</strong>\n    <p>\n      Keeping your website software up-to-date is crucial for security and\n      performance. Regularly update your content management system (CMS),\n      plugins, and themes to the latest version. However, be cautious when\n      updating and testing updates in a staging environment before applying them\n      to the live site.\n    </p>\n  </li>\n  <li>\n    <strong>10. Conduct regular security checks:</strong>\n    <p>\n      Regularly check your website for security vulnerabilities and malware\n      using tools such as Sucuri, Wordfence, or SiteLock. Set up security alerts\n      to be notified of any suspicious activity on your website.\n    </p>\n  </li>\n  <li>\n    <strong>11. Test website functionality:</strong>\n    <p>\n      Regularly test your website functionality to ensure that all links, forms,\n      and other features are working correctly. Fix any issues that may be\n      affecting user experience or lead to a drop in search engine rankings.\n    </p>\n  </li>\n</ul>\n\n<p>\n  Regular website maintenance is essential for any business that wants to stay\n  competitive, secure, and relevant in today’s digital landscape. A\n  well-maintained website not only protects your business and customers from\n  potential security risks but also enhances the user experience, improves\n  search engine rankings, and strengthens your brand image. Proactive\n  maintenance saves time and resources by preventing costly issues down the\n  line, ultimately leading to greater efficiency and customer satisfaction. By\n  investing in routine maintenance, businesses ensure that their websites remain\n  valuable assets, driving growth and engagement in a fast-paced online\n  environment.\n</p>\n', '', '', '0000-00-00 00:00:00', '2024-10-28 21:10:09'),
(9, 'learning.jpg', 'Skills Development', 'Soft Skills that Set Students Apart', 'soft-skills-thats-set-students-apart', '2024-10-25', '<p>\n  Technical skills are essential for students, enabling individuals and\n  businesses to adapt to evolving technological advancements. However, technical\n  skills alone are not enough. A balance of technical and soft skills is crucial\n  for the long-term success and growth of both individuals and businesses.\n</p>\n\n<p>\n  In a blog written by ESEI Barcelona, they discuss the importance of soft\n  skills in today’s job market, emphasizing that technical skills alone are\n  insufficient for career success.\n</p>\n\n<ul style=\"margin-left: 30px\">\n  <li>\n    <strong> 1. Communication Skills</strong>\n    <p>\n      Effective communication is the cornerstone of success in any field. It\n      involves listening attentively, articulating ideas clearly, and adapting\n      communication styles to different audiences. Strong communication skills\n      foster better teamwork, collaboration, and customer relations. Enhancing\n      your verbal and written communication abilities will enable you to convey\n      your thoughts concisely and influence others positively.\n    </p>\n  </li>\n  <li>\n    <strong>2. Emotional Intelligence</strong>\n    <p>\n      Emotional intelligence (EI) refers to the capacity to recognize and manage\n      emotions, both in oneself and others. It involves empathy, self-awareness,\n      and the ability to handle interpersonal relationships with tact and\n      sensitivity. High EI enables you to navigate conflicts, handle pressure,\n      and build strong connections with colleagues, clients, and superiors.\n      Developing emotional intelligence allows you to become an effective leader\n      and fosters a positive work environment. This is a very important skill to\n      have when it comes to project-based learning, as you are working with\n      people with different characteristics than you!\n    </p>\n  </li>\n  <li>\n    <strong>3. Adaptability</strong>\n    <p>\n      In today’s dynamic workplaces, adaptability is crucial. It is the ability\n      to respond positively to changing circumstances, learn new skills, and\n      embrace innovation. Those who can quickly adapt to new technologies,\n      procedures, and work environments are highly valued. Being adaptable\n      demonstrates your willingness to embrace challenges, think creatively, and\n      continuously improve. By staying flexible, you position yourself as a\n      valuable asset to your organization.\n    </p>\n  </li>\n  <li>\n    <strong>4. Problem-Solving Skills</strong>\n    <p>\n      Problem-solving skills involve the ability to analyze complex situations,\n      identify solutions, and make sound decisions. Effective problem solvers\n      are resourceful, logical, and proactive. They can think critically,\n      evaluate options, and implement strategies to overcome obstacles.\n      Enhancing your problem-solving abilities allows you to approach challenges\n      with confidence and contribute innovative ideas to your organization.\n    </p>\n  </li>\n  <li>\n    <strong>5. Leadership Skills</strong>\n    <p>\n      Leadership skills extend beyond managerial roles. Leadership involves\n      motivating, inspiring, and influencing others to achieve common goals.\n      Whether you’re leading a team or taking initiative within a project,\n      strong leadership skills are essential. Effective leaders demonstrate\n      strong communication, decision-making, and problem-solving skills while\n      fostering collaboration and trust. Developing leadership abilities helps\n      you stand out and paves the way for career advancement.\n    </p>\n  </li>\n  <li>\n    <strong>6. Teamwork and Collaboration</strong>\n    <p>\n      In today’s interconnected workplaces, the ability to work well with others\n      is vital. Collaboration entails actively engaging with team members,\n      respecting diverse perspectives, and contributing to collective success.\n      It involves effective communication, empathy, and the willingness to\n      compromise. Being a team player demonstrates your commitment to\n      organizational goals and your ability to create harmonious working\n      relationships.\n    </p>\n  </li>\n  <li>\n    <strong>7. Time Management and Organization</strong>\n    <p>\n      Time management and organizational skills are fundamental for productivity\n      and success. Effectively managing your time allows you to prioritize\n      tasks, meet deadlines, and maintain a healthy work-life balance. Being\n      organized involves maintaining a tidy workspace, managing information\n      efficiently, and planning ahead. By honing your time management and\n      organizational abilities, you can increase your efficiency, reduce stress,\n      and improve your overall performance.\n    </p>\n  </li>\n</ul>\n\n<p>\n  Mastering these seven soft skills—communication, emotional intelligence,\n  adaptability, problem-solving, leadership, teamwork, and time management—will\n  undoubtedly accelerate your career growth. While technical expertise is\n  crucial, these skills differentiate outstanding professionals from the rest.\n  Cultivating these abilities enhances your effectiveness, strengthens\n  professional relationships, and positions you as an invaluable asset within\n  your organization. Embrace the opportunity to develop these soft skills, and\n  you’ll be well on your way to achieving long-term career success\n</p>\n', '', '', '0000-00-00 00:00:00', '2024-10-28 21:14:03');

-- --------------------------------------------------------

--
-- Table structure for table `home_testimonial`
--

CREATE TABLE `home_testimonial` (
  `home_testimonial_aid` int(11) NOT NULL,
  `home_testimonial_message` text NOT NULL,
  `home_testimonial_name` varchar(100) NOT NULL,
  `home_testimonial_position` varchar(100) NOT NULL,
  `home_testimonial_client_img` varchar(100) NOT NULL,
  `home_testimonial_logo_img` varchar(100) NOT NULL,
  `home_testimonial_created` datetime NOT NULL,
  `home_testimonial_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `home_testimonial`
--

INSERT INTO `home_testimonial` (`home_testimonial_aid`, `home_testimonial_message`, `home_testimonial_name`, `home_testimonial_position`, `home_testimonial_client_img`, `home_testimonial_logo_img`, `home_testimonial_created`, `home_testimonial_datetime`) VALUES
(12, 'FBS is a true partner to our firm. They have helped form our vision and trajectory. We are immensely grateful for our partnership. Our expectation is for FBS to grow with us. They are an important part of our success. And beyond the business perspective, they are fantastic people. We are blessed to work with them.', 'Robert Han', 'COO / Partner', 'testimonial-robert-han-2-img.png', 'tm_logo_white.png', '0000-00-00 00:00:00', '2024-10-30 09:15:52'),
(13, 'Frontline has been an incredible organization to work with.  They are friendly, accommodating, and professional, but what stands out most is how responsive they are.  When I have a problem or request, I don’t think there has been a single time that not only have I received a response within the day, but whatever it was that I needed, their team has met that need within the day as well. I would highly recommend working with them.', 'Duane Masters', 'Executive Director', 'testi-duane-masters-2.png', 'world-focus-home.png', '0000-00-00 00:00:00', '2024-10-30 09:17:31'),
(14, 'We love working with FBS because they go the extra mile in doing the work. It’s nice to work with people who have the heart to serve. A mutually respecting relationship.', 'Hiro Isogawa', 'CEO, CPA, Partner', 'testimonial-hiro-isogawa-2.png', 'tm_logo_white.png', '0000-00-00 00:00:00', '2024-10-30 09:22:15'),
(15, 'We couldn\'t be more pleased with the incredible work done by the team at Frontline Business Solutions on our latest book design. Their attention to detail, creativity, and dedication to capturing our vision truly exceeded our expectations. The final product is both visually stunning and highly professional. It\'s clear that they are passionate about their craft, and we are grateful for their partnership in bringing this project to life. Thank you for your hard work and excellence!', 'Jared Roberts', 'Partner', 'testimonial-jared-roberts.png', 'sent-ones.png', '2024-10-30 09:33:24', '2024-10-30 09:33:24');

-- --------------------------------------------------------

--
-- Table structure for table `industry_testimonial`
--

CREATE TABLE `industry_testimonial` (
  `industry_testimonial_aid` int(11) NOT NULL,
  `industry_testimonial_img` varchar(100) NOT NULL,
  `industry_testimonial_logo` varchar(100) NOT NULL,
  `industry_testimonial_name` varchar(150) NOT NULL,
  `industry_testimonial_position` varchar(150) NOT NULL,
  `industry_testimonial_message` text NOT NULL,
  `industry_testimonial_category` varchar(100) NOT NULL,
  `industry_testimonial_company` varchar(150) NOT NULL,
  `industry_testimonial_created` datetime NOT NULL,
  `industry_testimonial_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `industry_testimonial`
--

INSERT INTO `industry_testimonial` (`industry_testimonial_aid`, `industry_testimonial_img`, `industry_testimonial_logo`, `industry_testimonial_name`, `industry_testimonial_position`, `industry_testimonial_message`, `industry_testimonial_category`, `industry_testimonial_company`, `industry_testimonial_created`, `industry_testimonial_datetime`) VALUES
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
(34, 'kurt-balanial.webp', 'plsp.png', 'Kurt Lui Balanial', 'BSCpE Batch 2024 Pamantasan ng Lungsod ng San Pablo', 'My training at Frontline Business Solutions was an invaluable experience that equipped me with essential skills in HTML, CSS, and Java. The supportive and professional environment made me feel empowered and ready to take on future challenges in the industry. This experience has truly prepared me for my career endeavors, leaving me more confident in my abilities.', 'Continuing Studies', '', '0000-00-00 00:00:00', '2024-11-05 12:14:58');

-- --------------------------------------------------------

--
-- Table structure for table `lcss_batch`
--

CREATE TABLE `lcss_batch` (
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
-- Dumping data for table `lcss_batch`
--

INSERT INTO `lcss_batch` (`lcss_batch_aid`, `lcss_batch_name`, `lcss_batch_category`, `lcss_batch_school`, `lcss_batch_course`, `lcss_batch_img`, `lcss_batch_created`, `lcss_batch_datetime`) VALUES
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
-- Table structure for table `pricing`
--

CREATE TABLE `pricing` (
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
-- Table structure for table `pricing_services`
--

CREATE TABLE `pricing_services` (
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
-- Table structure for table `special_offers`
--

CREATE TABLE `special_offers` (
  `special_offers_aid` int(11) NOT NULL,
  `special_offers_icons` varchar(50) NOT NULL,
  `special_offers_services` varchar(100) NOT NULL,
  `special_offers_price` varchar(100) NOT NULL,
  `special_offers_link` varchar(100) NOT NULL,
  `special_offers_created` datetime NOT NULL,
  `special_offers_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `special_offers`
--

INSERT INTO `special_offers` (`special_offers_aid`, `special_offers_icons`, `special_offers_services`, `special_offers_price`, `special_offers_link`, `special_offers_created`, `special_offers_datetime`) VALUES
(3, 'FaAddressCard', 'Business Registration', 'Startup Package', '/accounting-business-registration', '0000-00-00 00:00:00', '2024-10-28 22:32:16'),
(4, 'FaBriefcase', 'Human Resource Information System', '₱40 / Employee / Mo.', '/webapp-hris', '0000-00-00 00:00:00', '2024-10-28 22:33:15'),
(5, 'FaCalculator', 'Online Payroll System', '₱40 / Employee / Mo.', '/webapp-payroll', '0000-00-00 00:00:00', '2024-10-29 07:41:35'),
(6, 'FaGlobe', 'One-Page Website', '30 Days Trial', '/web-singlepage', '2024-10-29 07:55:23', '2024-10-29 07:55:23'),
(7, 'FaHeadphones', 'Virtual Assistant Service', '$8 / 40 Hours / Week', '/va-administrative', '0000-00-00 00:00:00', '2024-10-29 08:22:11');

-- --------------------------------------------------------

--
-- Table structure for table `vid_testimonial`
--

CREATE TABLE `vid_testimonial` (
  `vid_testimonial_aid` int(11) NOT NULL,
  `vid_testimonial_category` varchar(100) NOT NULL,
  `vid_testimonial_vid_link` varchar(100) NOT NULL,
  `vid_testimonial_logo_img` varchar(100) NOT NULL,
  `vid_testimonial_name` varchar(100) NOT NULL,
  `vid_testimonial_course` varchar(100) NOT NULL,
  `vid_testimonial_school` varchar(100) NOT NULL,
  `vid_testimonial_message` text NOT NULL,
  `vid_testimonial_created` datetime NOT NULL,
  `vid_testimonial_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vid_testimonial`
--

INSERT INTO `vid_testimonial` (`vid_testimonial_aid`, `vid_testimonial_category`, `vid_testimonial_vid_link`, `vid_testimonial_logo_img`, `vid_testimonial_name`, `vid_testimonial_course`, `vid_testimonial_school`, `vid_testimonial_message`, `vid_testimonial_created`, `vid_testimonial_datetime`) VALUES
(8, 'Continuing Studies', 'https://www.youtube.com/watch?v=xnHrbjA0WZY', 'lc.png', 'Paul Reinier Vista', 'Upskill Trainee', '', 'It is fulfilling, especially learning tools like SASS, Tailwind, WordPress, and Figma. Aside from the technical skills, they taught us how to act professionally in a working environment.', '2024-11-07 10:52:17', '2024-11-07 10:52:17'),
(9, 'Continuing Studies', 'https://www.youtube.com/watch?v=PnBWVserVps', 'lc.png', 'Jinuel Zymon I. Ramos', 'BSCS Graduate', '', 'To all college graduates, I encourage you to pursue your continuing studies and training here at FBS. This will help you prepare professionally to join the competitive tech industry.', '2024-11-07 10:53:25', '2024-11-07 10:53:25'),
(10, 'Continuing Studies', 'https://www.youtube.com/watch?v=u-XPdxpKosw', 'plsp.png', 'Kurt Lui Juan Balanial', 'PLSP Graduate', '', 'My training here at FBS has been an invaluable experience that equipped me with essential skills in front-end and back-end development. Beyond that, the environment and professionalism at FBS have empowered me and prepared me to take on future challenges in the tech industry.', '2024-11-07 10:56:42', '2024-11-07 10:56:42'),
(11, 'High School Work Immersion', 'https://www.youtube.com/watch?v=MlBrBmufpy4', 'slis.png', 'Christian Jaekhob Dela Cruz', 'Grade 12 HUMSS', 'South Lakes Integrated School', 'The program was also very beneficial to me—I learned a lot about potential jobs I could take in the future, and it helped me become a better person thanks to their PLEs after almost every task we completed.', '0000-00-00 00:00:00', '2024-11-07 10:59:15'),
(12, 'High School Work Immersion', 'https://www.youtube.com/watch?v=-OI3L6mWmsA', 'spc.png', 'Justine Clein Gelindon', 'Grade 12 ICT', 'San Pablo Colleges', 'I had a very enjoyable experience here at FBS. Everything we did at FBS was truly enjoyable, from web designing using Figma to creating our own websites with HTML and CSS.', '0000-00-00 00:00:00', '2024-11-07 11:00:35'),
(13, 'High School Work Immersion', 'https://www.youtube.com/watch?v=GJNpd6naWUI', 'mfmc.png', 'Althea Mae Lat', 'Grade 12 HUMSS', 'Marcelino Fule Memorial College', 'My experience was very fun, and all the trainers were kind and approachable. I highly recommend the FBS work immersion program because you will learn a lot here.', '0000-00-00 00:00:00', '2024-11-07 11:01:32'),
(14, 'College On-the-job Training', 'https://www.youtube.com/watch?v=w6_k-pnlaE0&t=1s', 'dlsl_official_logo.png', 'Thea Lyzette Consignado', '', 'De La Salle Lipa Trainee', 'I have learned a lot, and my overall experience will be very helpful not only in my future career, but also in building and shaping myself.', '0000-00-00 00:00:00', '2024-11-07 11:03:48'),
(15, 'College On-the-job Training', 'https://www.youtube.com/watch?v=rGtLB1x58ts', 'lspu.png', 'Mark Ryan Merin', 'Laguna State Polytechnic Univ.', ' SPC Campus', 'I am grateful to Frontline Business Solutions for providing me with a training and the support I needed to become what I am today. Their programs are designed to help people like me to gain the skills and knowledge that is neccesary to success in this field.', '0000-00-00 00:00:00', '2024-11-07 11:05:12'),
(16, 'College On-the-job Training', 'https://www.youtube.com/watch?v=7fGYHbtnCQk', 'lc.png', 'Aileah Marie Lozada', 'Laguna College Trainee', '', 'They did not just help me improve my web designing skills, but they also gave me strength and advises regarding personality and values that I can adopt from them to the IT industry.', '2024-11-07 11:06:16', '2024-11-07 11:06:16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `careers`
--
ALTER TABLE `careers`
  ADD PRIMARY KEY (`careers_aid`);

--
-- Indexes for table `events_activities`
--
ALTER TABLE `events_activities`
  ADD PRIMARY KEY (`events_activities_aid`);

--
-- Indexes for table `home_banner`
--
ALTER TABLE `home_banner`
  ADD PRIMARY KEY (`home_banner_aid`);

--
-- Indexes for table `home_insights`
--
ALTER TABLE `home_insights`
  ADD PRIMARY KEY (`home_insights_aid`);

--
-- Indexes for table `home_testimonial`
--
ALTER TABLE `home_testimonial`
  ADD PRIMARY KEY (`home_testimonial_aid`);

--
-- Indexes for table `industry_testimonial`
--
ALTER TABLE `industry_testimonial`
  ADD PRIMARY KEY (`industry_testimonial_aid`);

--
-- Indexes for table `lcss_batch`
--
ALTER TABLE `lcss_batch`
  ADD PRIMARY KEY (`lcss_batch_aid`);

--
-- Indexes for table `pricing`
--
ALTER TABLE `pricing`
  ADD PRIMARY KEY (`pricing_aid`);

--
-- Indexes for table `pricing_services`
--
ALTER TABLE `pricing_services`
  ADD PRIMARY KEY (`pricing_services_aid`);

--
-- Indexes for table `special_offers`
--
ALTER TABLE `special_offers`
  ADD PRIMARY KEY (`special_offers_aid`);

--
-- Indexes for table `vid_testimonial`
--
ALTER TABLE `vid_testimonial`
  ADD PRIMARY KEY (`vid_testimonial_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `careers`
--
ALTER TABLE `careers`
  MODIFY `careers_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `events_activities`
--
ALTER TABLE `events_activities`
  MODIFY `events_activities_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `home_banner`
--
ALTER TABLE `home_banner`
  MODIFY `home_banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `home_insights`
--
ALTER TABLE `home_insights`
  MODIFY `home_insights_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `home_testimonial`
--
ALTER TABLE `home_testimonial`
  MODIFY `home_testimonial_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `industry_testimonial`
--
ALTER TABLE `industry_testimonial`
  MODIFY `industry_testimonial_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `lcss_batch`
--
ALTER TABLE `lcss_batch`
  MODIFY `lcss_batch_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `pricing`
--
ALTER TABLE `pricing`
  MODIFY `pricing_aid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pricing_services`
--
ALTER TABLE `pricing_services`
  MODIFY `pricing_services_aid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `special_offers`
--
ALTER TABLE `special_offers`
  MODIFY `special_offers_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `vid_testimonial`
--
ALTER TABLE `vid_testimonial`
  MODIFY `vid_testimonial_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
