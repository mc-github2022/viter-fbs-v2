-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 31, 2024 at 03:54 AM
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
(2, 'IMG_3348-1080x550.jpg', 'Skills Development', 'Annual Career Fest 2024 at STI College San Pablo', 'annual-career-fest-2024-at-sti-college-san-pablo', '2024-10-03', '<p>We are thrilled to share our recent participation in the Annual Career Fest 2024 at STI College San Pablo, an event dedicated to connecting graduating students with potential career opportunities.</p>\n\n<p>Our company proudly offers aspiring young professionals in the field of IT a gateway to enter the industry of web development. Our booth attracted numerous applicants eager to become full-stack developers. We were fortunate to provide job opportunities to students from BS Information Technology, BS Computer Science, and BS Computer Engineering programs. This event also paved the way for us to build a strong partnership with STI College San Pablo, enhancing our efforts in talent acquisition and contributing to the field of Information Technology. We look forward to continuing our collaboration with STI College San Pablo and supporting the next generation of IT professionals.</p>', '0000-00-00 00:00:00', '2024-10-29 10:45:09'),
(3, 'team-building-2024.jpg', 'Virtual Office', 'Team Building 2024', 'team-building-2024', '2024-08-07', '<p style=\"margin-bottom: 30px\">\n  From May 15 to 17, our team gathered at La Luz Beach Resort for our 2024\n  Company Team Building. The event was packed with engaging activities aimed at\n  fostering camaraderie and teamwork.\n</p>\n\n<p style=\"margin-bottom: 30px\">\n  We kicked off with inspiring messages from our administrators and client\n  visitors, setting a positive tone. The retreat featured a variety of games,\n  including tug of war, beach volleyball, and a “Drum Whole” competition,\n  highlighting the importance of teamwork, synchronization, and creativity. The\n  lively “Family Feud” game and the spirited yell competition showcased our team\n  spirit and enthusiasm.\n</p>\n\n<p style=\"margin-bottom: 30px\">\n  The retreat concluded with reflections from our administrators and client\n  visitors, who emphasized the growth in our team dynamics over the past days.\n  As we departed from La Luz Beach Resort, we felt a renewed sense of unity and\n  commitment to supporting each other, ready to tackle future challenges\n  together with enhanced teamwork and shared purpose.\n</p>\n', '0000-00-00 00:00:00', '2024-10-29 10:45:58'),
(7, '5th-year-thumb_3.jpg', 'Events', 'Fifth Year Anniversary', 'fifth-year-anniversary', '2024-10-30', '<p style=\"margin-bottom: 30px\">\n  We’ve come a long way since then, adding new services like Virtual Office and\n  a Learning Center to support education and skill development. The pandemic\n  brought challenges, but we adapted by working remotely without letting go of\n  our team or clients. This difficult time showed our strength and the trust our\n  clients have in us, helping us grow and make a difference in our community.\n</p>\n\n<p style=\"margin-bottom: 30px\">\n  As we celebrate five years, we’re proud and grateful. Our goal has always been\n  more than just business – it’s about doing business for good. Looking forward,\n  we’re excited to keep making a positive impact on lives and businesses. Here’s\n  to five years of growth, strength, and service, and to many more years of\n  making a positive change. Cheers to Frontline Business Solutions, where every\n  day is a chance to make a difference.\n</p>\n<p style=\"text-align: center; display: flex; justify-content: center\">\n  <iframe\n    width=\"560\"\n    height=\"315\"\n    src=\"https://www.youtube.com/embed/gReHchZNERM?si=0VpXHIQzrF09WC_A\"\n    title=\"YouTube video player\"\n    frameborder=\"0\"\n    allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\"\n    referrerpolicy=\"strict-origin-when-cross-origin\"\n    allowfullscreen\n  ></iframe>\n</p>\n', '0000-00-00 00:00:00', '2024-10-29 13:47:03');

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
(12, 'FBS is a true partner to our firm. They have helped form our vision and trajectory. We are immensely grateful for our partnership. Our expectation is for FBS to grow with us. They are an important part of our success. And beyond the business perspective, they are fantastic people. We are blessed to work with them.', 'Robert Han', 'COO / Partner', 'testimonial-robert-han-2.png', 'tm_logo.png', '2024-10-30 09:15:52', '2024-10-30 09:15:52'),
(13, 'Frontline has been an incredible organization to work with.  They are friendly, accommodating, and professional, but what stands out most is how responsive they are.  When I have a problem or request, I don’t think there has been a single time that not only have I received a response within the day, but whatever it was that I needed, their team has met that need within the day as well. I would highly recommend working with them.', 'Duane Masters', 'Executive Director', 'testi-duane-masters-2.png', 'logo-world-focus.png', '2024-10-30 09:17:31', '2024-10-30 09:17:31'),
(14, 'We love working with FBS because they go the extra mile in doing the work. It’s nice to work with people who have the heart to serve. A mutually respecting relationship.', 'Hiro Isogawa', 'CEO, CPA, Partner', 'testimonial-hiro-isogawa-2.png', 'tm_logo.png', '2024-10-30 09:22:15', '2024-10-30 09:22:15'),
(15, 'We couldn\'t be more pleased with the incredible work done by the team at Frontline Business Solutions on our latest book design. Their attention to detail, creativity, and dedication to capturing our vision truly exceeded our expectations. The final product is both visually stunning and highly professional. It\'s clear that they are passionate about their craft, and we are grateful for their partnership in bringing this project to life. Thank you for your hard work and excellence!', 'Jared Roberts', 'Partner', 'testimonial-jared-roberts.png', 'sent-ones.png', '2024-10-30 09:33:24', '2024-10-30 09:33:24');

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
  `lcss_batch_img` varchar(100) NOT NULL,
  `lcss_batch_created` datetime NOT NULL,
  `lcss_batch_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lcss_batch`
--

INSERT INTO `lcss_batch` (`lcss_batch_aid`, `lcss_batch_name`, `lcss_batch_category`, `lcss_batch_school`, `lcss_batch_course`, `lcss_batch_img`, `lcss_batch_created`, `lcss_batch_datetime`) VALUES
(1, 'Batch-41', 'College On-the-job Training', 'Laguna Sate Polytechnic Univ.', 'BS Information Technology', 'Batch-61.jpg', '2024-10-31 09:33:58', '2024-10-31 09:33:58'),
(2, 'Batch-42', 'High School Work Immersion', 'Southern Luzon State University', 'BS Computer Science', 'Batch-62.jpg', '0000-00-00 00:00:00', '2024-10-31 09:34:38');

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
(3, 'FaAddressCard', 'Business Registration', 'Startup Package', '/business-registration', '0000-00-00 00:00:00', '2024-10-28 22:32:16'),
(4, 'FaBriefcase', 'Human Resource Information System', '₱40 / Employee / Mo.', '/webapp-hris', '0000-00-00 00:00:00', '2024-10-28 22:33:15'),
(5, 'FaCalculator', 'Online Payroll System', '₱40 / Employee / Mo.', '/webapp-payroll', '0000-00-00 00:00:00', '2024-10-29 07:41:35'),
(6, 'FaGlobe', 'One-Page Website', '30 Days Trial', '/web-singlepage', '2024-10-29 07:55:23', '2024-10-29 07:55:23'),
(7, 'FaHeadphones', 'Virtual Assistant Service', '$8 / 40 Hours / Week', '/adminSolution', '2024-10-29 08:22:11', '2024-10-29 08:22:11');

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
-- Indexes for table `lcss_batch`
--
ALTER TABLE `lcss_batch`
  ADD PRIMARY KEY (`lcss_batch_aid`);

--
-- Indexes for table `special_offers`
--
ALTER TABLE `special_offers`
  ADD PRIMARY KEY (`special_offers_aid`);

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
  MODIFY `events_activities_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `home_banner`
--
ALTER TABLE `home_banner`
  MODIFY `home_banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `home_insights`
--
ALTER TABLE `home_insights`
  MODIFY `home_insights_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `home_testimonial`
--
ALTER TABLE `home_testimonial`
  MODIFY `home_testimonial_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `lcss_batch`
--
ALTER TABLE `lcss_batch`
  MODIFY `lcss_batch_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `special_offers`
--
ALTER TABLE `special_offers`
  MODIFY `special_offers_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
