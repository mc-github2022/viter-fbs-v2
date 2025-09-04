-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 04, 2025 at 10:00 AM
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
-- Table structure for table `fbsv2_services_social_overview`
--

CREATE TABLE `fbsv2_services_social_overview` (
  `social_overview_aid` int(11) NOT NULL,
  `social_overview_subtitle` varchar(100) NOT NULL,
  `social_overview_title` varchar(100) NOT NULL,
  `social_overview_img` text NOT NULL,
  `social_overview_list_title_a` varchar(100) NOT NULL,
  `social_overview_list_description_a` varchar(500) NOT NULL,
  `social_overview_list_title_b` varchar(100) NOT NULL,
  `social_overview_list_description_b` varchar(500) NOT NULL,
  `social_overview_list_title_c` varchar(100) NOT NULL,
  `social_overview_list_description_c` varchar(500) NOT NULL,
  `social_overview_list_title_d` varchar(100) NOT NULL,
  `social_overview_list_description_d` varchar(500) NOT NULL,
  `social_overview_created` datetime NOT NULL,
  `social_overview_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_social_overview`
--

INSERT INTO `fbsv2_services_social_overview` (`social_overview_aid`, `social_overview_subtitle`, `social_overview_title`, `social_overview_img`, `social_overview_list_title_a`, `social_overview_list_description_a`, `social_overview_list_title_b`, `social_overview_list_description_b`, `social_overview_list_title_c`, `social_overview_list_description_c`, `social_overview_list_title_d`, `social_overview_list_description_d`, `social_overview_created`, `social_overview_datetime`) VALUES
(1, 'Why Choose Our Social Media Management Service?', 'Your Social Media Struggles — Solved.', '[{\"name\":\"social-media-struggle-solved.webp\",\"id\":\"1nadpP_3Zpj94XVFixGxk2M75sfDaPp6I\",\"datetime\":\"2025-09-04 15:42:05\"}]', '“I don’t have time to manage my social media.”', 'We take the daily posting and engagement off your plate so you can focus on running your business.', '“My posts don’t get likes, comments, or results.”', 'We create engaging, scroll-stopping content that connects with your target audience and drives meaningful interactions.', '“I’m not sure how to grow my followers or reach more people.”', 'Our growth strategies help you reach the right audience, boost visibility, and steadily build your brand online.', '“Hiring an in-house team is too expensive.”', 'With our flexible and cost-effective packages, you get the benefits of a full social media team at a fraction of the cost.', '2025-09-04 15:42:03', '2025-09-04 15:43:26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_social_overview`
--
ALTER TABLE `fbsv2_services_social_overview`
  ADD PRIMARY KEY (`social_overview_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_social_overview`
--
ALTER TABLE `fbsv2_services_social_overview`
  MODIFY `social_overview_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
