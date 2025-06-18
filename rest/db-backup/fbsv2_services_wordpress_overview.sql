-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 18, 2025 at 09:03 AM
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
-- Table structure for table `fbsv2_services_wordpress_overview`
--

CREATE TABLE `fbsv2_services_wordpress_overview` (
  `wordpress_overview_aid` int(11) NOT NULL,
  `wordpress_overview_subtitle` varchar(100) NOT NULL,
  `wordpress_overview_title` varchar(100) NOT NULL,
  `wordpress_overview_img` text NOT NULL,
  `wordpress_overview_button_text` varchar(20) NOT NULL,
  `wordpress_overview_list_title_a` varchar(100) NOT NULL,
  `wordpress_overview_list_description_a` varchar(500) NOT NULL,
  `wordpress_overview_list_title_b` varchar(100) NOT NULL,
  `wordpress_overview_list_description_b` varchar(500) NOT NULL,
  `wordpress_overview_list_title_c` varchar(100) NOT NULL,
  `wordpress_overview_list_description_c` varchar(500) NOT NULL,
  `wordpress_overview_created` datetime NOT NULL,
  `wordpress_overview_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_wordpress_overview`
--

INSERT INTO `fbsv2_services_wordpress_overview` (`wordpress_overview_aid`, `wordpress_overview_subtitle`, `wordpress_overview_title`, `wordpress_overview_img`, `wordpress_overview_button_text`, `wordpress_overview_list_title_a`, `wordpress_overview_list_description_a`, `wordpress_overview_list_title_b`, `wordpress_overview_list_description_b`, `wordpress_overview_list_title_c`, `wordpress_overview_list_description_c`, `wordpress_overview_created`, `wordpress_overview_datetime`) VALUES
(1, 'Why Choose Our ', 'Web Development Team', '[{\"name\":\"web-team.jpg\",\"id\":\"1nCwYiuLuVEnqOTdL3Wo-HNpkaU7gBBSr\",\"datetime\":\"2025-06-18 15:02:37\"}]', 'Learn More', 'Fast Turnaround Time', 'Clients can see progress in real-time, make changes on the go, and have greater control over the project’s direction.', 'High-Quality at Lower Costs', 'Clients receive high-quality websites at lower costs compared to global competitors, without compromising on functionality, performance, or support.', 'Creative Guidance', 'We offer tailored customer support and creative inputs to enhance your online presence, ensuring your website not only functions optimally but also stands out in the digital landscape.', '2025-06-18 15:02:34', '2025-06-18 15:03:28');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_wordpress_overview`
--
ALTER TABLE `fbsv2_services_wordpress_overview`
  ADD PRIMARY KEY (`wordpress_overview_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_wordpress_overview`
--
ALTER TABLE `fbsv2_services_wordpress_overview`
  MODIFY `wordpress_overview_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
