-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 02, 2025 at 03:01 AM
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
(3, 1, 'team-building-2024.jpg', '', 'Company Activities', 'Team Building 2024', 'team-building-2024', '2024-08-07', '<p style=\"margin-bottom: 30px\">\n  From May 15 to 17, our team gathered at La Luz Beach Resort for our 2024\n  Company Team Building. The event was packed with engaging activities aimed at\n  fostering camaraderie and teamwork.\n</p>\n\n<p style=\"margin-bottom: 30px\">\n  We kicked off with inspiring messages from our administrators and client\n  visitors, setting a positive tone. The retreat featured a variety of games,\n  including tug of war, beach volleyball, and a “Drum Whole” competition,\n  highlighting the importance of teamwork, synchronization, and creativity. The\n  lively “Family Feud” game and the spirited yell competition showcased our team\n  spirit and enthusiasm.\n</p>\n\n<p style=\"margin-bottom: 30px\">\n  The retreat concluded with reflections from our administrators and client\n  visitors, who emphasized the growth in our team dynamics over the past days.\n  As we departed from La Luz Beach Resort, we felt a renewed sense of unity and\n  commitment to supporting each other, ready to tackle future challenges\n  together with enhanced teamwork and shared purpose.\n</p>\n', '0000-00-00 00:00:00', '2024-10-29 10:45:58'),
(7, 1, '5th-year-thumb_3.jpg', 'grad.jpg, group.jpg', 'Events', 'Fifth Year Anniversary', 'fifth-year-anniversary', '2024-10-30', '<p style=\"margin-bottom: 30px\">\n  We’ve come a long way since then, adding new services like Virtual Office and\n  a Learning Center to support education and skill development. The pandemic\n  brought challenges, but we adapted by working remotely without letting go of\n  our team or clients. This difficult time showed our strength and the trust our\n  clients have in us, helping us grow and make a difference in our community.\n</p>\n\n<p style=\"margin-bottom: 30px\">\n  As we celebrate five years, we’re proud and grateful. Our goal has always been\n  more than just business – it’s about doing business for good. Looking forward,\n  we’re excited to keep making a positive impact on lives and businesses. Here’s\n  to five years of growth, strength, and service, and to many more years of\n  making a positive change. Cheers to Frontline Business Solutions, where every\n  day is a chance to make a difference.\n</p>\n<p style=\"text-align: center; display: flex; justify-content: center\">\n  <iframe\n    width=\"560\"\n    height=\"315\"\n    src=\"https://www.youtube.com/embed/gReHchZNERM?si=0VpXHIQzrF09WC_A\"\n    title=\"YouTube video player\"\n    frameborder=\"0\"\n    allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\"\n    referrerpolicy=\"strict-origin-when-cross-origin\"\n    allowfullscreen\n  ></iframe>\n</p>\n', '0000-00-00 00:00:00', '2024-12-13 13:20:06'),
(8, 1, 'The-Ideal-Team-Player-Seminar-3-scaled.jpg', '', 'Events', 'The Ideal Team Player Seminar', 'the-ideal-team-player-seminar', '2024-10-31', '<p style=\"margin-bottom: 30px\">In order to foster a thriving and harmonious work environment, the Learning Center Solutions team, led by Mr. Jhonny Jose Dichoso, conducted an engaging and insightful seminar on “The Ideal Team Player: Embracing Humble, Hungry, and Smart Virtues.” The seminar aimed to explore the significance of these three virtues and their application in building effective teams and achieving organizational success.</p>\n\n<p style=\"margin-bottom: 30px\">The seminar also identified the categories of employees who might lack or be deficient in these virtues, such as individuals who are overly self-centered, lack initiative, or struggle with interpersonal dynamics.</p>\n\n<p style=\"margin-bottom: 30px\">To deepen the understanding of these virtues and foster practical application, the seminar featured engaging group discussions and activities. Participants were encouraged to share experiences and scenarios where these virtues played pivotal roles in team dynamics and outcomes. Through group activities and exercises, attendees practiced being humble, hungry, and smart, honing their skills in communication, empathy, and collaboration.</p>\n\n<p style=\"margin-bottom: 30px\">Furthermore, the seminar emphasized the Four Primary Applications of the ideal team player framework: Hiring, Assessing, Developing and Embedding</p>\n\n<p style=\"margin-bottom: 30px\">In conclusion, the seminar on “The Ideal Team Player” by the Learning Center Solutions team provided invaluable insights into building strong, high-performing teams. By fostering a culture of humility, drive, and emotional intelligence, organizations can create a winning environment where team members complement each other’s strengths and work synergistically towards achieving shared goals.</p>\n', '0000-00-00 00:00:00', '2024-10-29 13:47:17'),
(9, 1, 'company-retreat-2024.jpg', 'company-retreat-2024.jpg', 'Events', 'Company Retreat 2024', 'company-retreat-2024', '2024-10-31', '<p>We took this time to deeply reflect on the significance of glorifying God through our work. Each daily task presents an opportunity to showcase His love and grace, reminding us that our efforts can touch lives in meaningful ways. We emphasized the importance of integrity in serving others, as it fosters trust within our team. Aligning our work with God\'s purpose brings a deeper meaning to our roles, inspiring us to make a positive impact not just within our team but in the communities we serve. We are reminded that our work is a calling, a chance to reflect His light in everything that we do.</p>\n\n<p>As a company of faith, we are committed to nurturing an environment where spiritual values guide our actions and decisions, promoting unity and a sense of family among us. Each moment shared strengthens our bonds and empowers us to pursue our mission with renewed passion.</p>\n\n<p>Let’s carry this spirit forward, recognizing that our collective efforts can create change in the world around us. Here’s to continuing our mission together and making a lasting difference!</p>', '0000-00-00 00:00:00', '2024-12-13 12:17:27'),
(10, 1, 'lcs-visits-5.jpg', '', 'Partnership', 'LCS School Visits', 'lcs-school-visits', '2024-10-31', '<p style=\"margin-bottom: 30px\">Our Learning Center Solutions Team embarked on an inspiring journey to visit several educational institutions, presenting the many opportunities our Learning Center Solutions Department has to offer. Our team introduced innovative programs for college on-the-job training and senior high school work immersion, with a focus on creating impactful partnerships that empower students through practical learning experiences.</p>\n\n<div style=\"display: flex; flex-wrap: wrap; margin-bottom: 30px align-items: center; justify-content: center;\">\n<img src=\"../../newsite/img/lcs-visits-1.jpg\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n<img src=\"../../newsite/img/lcs-visits-2.jpg\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n<img src=\"../../newsite/img/lcs-visits-3.jpg\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n<img src=\"../../newsite/img/lcs-visits-4.jpg\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n<img src=\"../../newsite/img/lcs-visits-6.jpg\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n<img src=\"../../newsite/img/lcs-visits-7.jpg\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n<img src=\"../../newsite/img/lcs-visits-8.jpg\" style=\"object-fit: cover; width: 450px; height: 330px; object-position: center; margin: 10px\">\n</div>\n<p style=\"margin-bottom: 30px\">We are deeply grateful to the schools that welcomed us with open arms: Marcelino Fule Memorial College, St. Therese Montessori School of San Pablo, Inc., St. Nicolas Golden Field Academy Inc., LSPU-San Pablo City Campus, ACLC College of San Pablo City Campus, San Pablo Colleges, and Asian Institute of Technology and Education. Your trust and enthusiasm reinforce our mission to support students’ growth and development.</p>\n\n<p style=\"margin-bottom: 30px\">A heartfelt thank you goes to our dedicated team members—Mr. Ansbert Gregana, Ms. Herlyn Torres, and Ms. Thea Lyzette Consignado—whose passion and commitment, under the expert guidance of Mr. Jhonny Dichoso, drive the success of these partnerships. Together, we are shaping a brighter future for the next generation of professionals.</p>\n\n<p style=\"margin-bottom: 30px\">Our programs are designed to develop technical skills, professionalism, and ethical qualities—key competencies for students to excel in the industry. With these foundational qualities, we’re here to support students as they embark on their career journeys.</p>\n\n', '0000-00-00 00:00:00', '2025-01-02 08:48:37'),
(16, 0, 'Batch-61.jpg', 'Batch-61.jpg', 'Test 2', 'Test 2', 'test-2', '2025-01-02', 'test 2 description..', '2025-01-02 08:52:28', '2025-01-02 09:37:12'),
(17, 0, 'Batch-61.jpg', 'Batch-61.jpg', 'test 3', 'Test 3', 'test-3', '2025-01-03', 'test 3 description', '2025-01-02 08:53:38', '2025-01-02 09:37:09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_events_activities`
--
ALTER TABLE `fbsv2_events_activities`
  ADD PRIMARY KEY (`events_activities_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_events_activities`
--
ALTER TABLE `fbsv2_events_activities`
  MODIFY `events_activities_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
