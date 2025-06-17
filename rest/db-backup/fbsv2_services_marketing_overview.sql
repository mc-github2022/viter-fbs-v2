-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 17, 2025 at 04:41 AM
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
-- Table structure for table `fbsv2_services_marketing_overview`
--

CREATE TABLE `fbsv2_services_marketing_overview` (
  `marketing_overview_aid` int(11) NOT NULL,
  `marketing_overview_subtitle` varchar(100) NOT NULL,
  `marketing_overview_title` varchar(100) NOT NULL,
  `marketing_overview_img` text NOT NULL,
  `marketing_overview_list_title_a` varchar(100) NOT NULL,
  `marketing_overview_list_description_a` varchar(500) NOT NULL,
  `marketing_overview_list_title_b` varchar(100) NOT NULL,
  `marketing_overview_list_description_b` varchar(500) NOT NULL,
  `marketing_overview_list_title_c` varchar(100) NOT NULL,
  `marketing_overview_list_description_c` varchar(500) NOT NULL,
  `marketing_overview_created` datetime NOT NULL,
  `marketing_overview_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_marketing_overview`
--

INSERT INTO `fbsv2_services_marketing_overview` (`marketing_overview_aid`, `marketing_overview_subtitle`, `marketing_overview_title`, `marketing_overview_img`, `marketing_overview_list_title_a`, `marketing_overview_list_description_a`, `marketing_overview_list_title_b`, `marketing_overview_list_description_b`, `marketing_overview_list_title_c`, `marketing_overview_list_description_c`, `marketing_overview_created`, `marketing_overview_datetime`) VALUES
(1, 'Here\'s Why We\'re The', 'Right Choice for Your VA Needs.', '[{\"name\":\"vamarketing.jpg\",\"id\":\"1akvQJugvd6gxqXDJ8EJl9eOVv668buPY\",\"datetime\":\"2025-06-17 09:55:05\"}]', 'Strategic Marketing Expertise', 'Our team specializes in developing and executing effective online marketing strategies, ensuring your brand gains visibility and engages with your target audience through tailored promotions and brand management.', 'Creative Content Creation', 'We offer comprehensive content services, including social media management, newsletter creation, and graphic design. This ensures your brand\'s messaging is consistent, engaging, and visually appealing across all platforms.', 'Professional Media Production', 'From video and audio editing to image enhancement and email marketing, our media production services help you create high-quality promotional materials that resonate with your audience and drive conversions.', '2025-06-17 09:55:02', '2025-06-17 09:55:51');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_marketing_overview`
--
ALTER TABLE `fbsv2_services_marketing_overview`
  ADD PRIMARY KEY (`marketing_overview_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_marketing_overview`
--
ALTER TABLE `fbsv2_services_marketing_overview`
  MODIFY `marketing_overview_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
