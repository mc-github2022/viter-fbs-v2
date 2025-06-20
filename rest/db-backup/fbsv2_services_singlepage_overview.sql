-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 20, 2025 at 03:01 AM
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
-- Table structure for table `fbsv2_services_singlepage_overview`
--

CREATE TABLE `fbsv2_services_singlepage_overview` (
  `singlepage_overview_aid` int(11) NOT NULL,
  `singlepage_overview_subtitle` varchar(100) NOT NULL,
  `singlepage_overview_title` varchar(100) NOT NULL,
  `singlepage_overview_img` text NOT NULL,
  `singlepage_overview_file` text NOT NULL,
  `singlepage_overview_button_text` varchar(20) NOT NULL,
  `singlepage_overview_list_title_a` varchar(100) NOT NULL,
  `singlepage_overview_list_description_a` varchar(500) NOT NULL,
  `singlepage_overview_list_title_b` varchar(100) NOT NULL,
  `singlepage_overview_list_description_b` varchar(500) NOT NULL,
  `singlepage_overview_list_title_c` varchar(100) NOT NULL,
  `singlepage_overview_list_description_c` varchar(500) NOT NULL,
  `singlepage_overview_created` datetime NOT NULL,
  `singlepage_overview_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_singlepage_overview`
--

INSERT INTO `fbsv2_services_singlepage_overview` (`singlepage_overview_aid`, `singlepage_overview_subtitle`, `singlepage_overview_title`, `singlepage_overview_img`, `singlepage_overview_file`, `singlepage_overview_button_text`, `singlepage_overview_list_title_a`, `singlepage_overview_list_description_a`, `singlepage_overview_list_title_b`, `singlepage_overview_list_description_b`, `singlepage_overview_list_title_c`, `singlepage_overview_list_description_c`, `singlepage_overview_created`, `singlepage_overview_datetime`) VALUES
(1, 'Why Choose Our', 'Web Development Team', '[{\"name\":\"web-team.jpg\",\"id\":\"1L8sMLxJdu4AOOZENAUB6psz5LRHm4k5q\",\"datetime\":\"2025-06-20 08:59:40\"}]', '[{\"name\":\"website-design-and-development-portfolio-2022-v3.pdf\",\"id\":\"1gInyEN09FUhUZm49mbZD1Mg6WUbsiR-6\",\"datetime\":\"2025-06-20 08:59:45\"}]', 'Learn More', 'Fast Deployment and Real-Time Updates', 'We ensure quick deployment, allowing clients to see progress in real-time and make updates on the fly. This provides you with full control over the project’s direction, ensuring your vision is met swiftly and efficiently.', 'Affordable High-Quality Solutions', 'Our Single Page Website Development offers high-quality websites at competitive rates, delivering sleek, functional, and optimized web solutions without the high costs associated with larger projects or global competitors.', 'Expert Design and Usability Guidance', 'We provide creative guidance throughout the development process, ensuring your website is not only visually appealing but also highly user-friendly. Our tailored support ensures your site stands out while offering a seamless user experience.', '2025-06-20 08:59:36', '2025-06-20 09:01:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_singlepage_overview`
--
ALTER TABLE `fbsv2_services_singlepage_overview`
  ADD PRIMARY KEY (`singlepage_overview_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_singlepage_overview`
--
ALTER TABLE `fbsv2_services_singlepage_overview`
  MODIFY `singlepage_overview_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
