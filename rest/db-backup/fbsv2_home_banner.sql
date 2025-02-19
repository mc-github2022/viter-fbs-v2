-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 19, 2025 at 05:20 AM
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

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_home_banner`
--
ALTER TABLE `fbsv2_home_banner`
  ADD PRIMARY KEY (`home_banner_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_home_banner`
--
ALTER TABLE `fbsv2_home_banner`
  MODIFY `home_banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
