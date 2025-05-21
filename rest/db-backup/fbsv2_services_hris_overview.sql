-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 21, 2025 at 02:03 AM
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
-- Table structure for table `fbsv2_services_hris_overview`
--

CREATE TABLE `fbsv2_services_hris_overview` (
  `hris_overview_aid` int(11) NOT NULL,
  `hris_overview_subtitle` varchar(100) NOT NULL,
  `hris_overview_title` varchar(100) NOT NULL,
  `hris_overview_img` text NOT NULL,
  `hris_overview_list_title_a` varchar(100) NOT NULL,
  `hris_overview_list_description_a` varchar(500) NOT NULL,
  `hris_overview_list_title_b` varchar(100) NOT NULL,
  `hris_overview_list_description_b` varchar(500) NOT NULL,
  `hris_overview_list_title_c` varchar(100) NOT NULL,
  `hris_overview_list_description_c` varchar(500) NOT NULL,
  `hris_overview_created` datetime NOT NULL,
  `hris_overview_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_hris_overview`
--

INSERT INTO `fbsv2_services_hris_overview` (`hris_overview_aid`, `hris_overview_subtitle`, `hris_overview_title`, `hris_overview_img`, `hris_overview_list_title_a`, `hris_overview_list_description_a`, `hris_overview_list_title_b`, `hris_overview_list_description_b`, `hris_overview_list_title_c`, `hris_overview_list_description_c`, `hris_overview_created`, `hris_overview_datetime`) VALUES
(1, 'Our Web Application Is Perfect', 'for Your HR Specific Needs.', '[{\"name\":\"hrisscreenshot-overview.png\",\"id\":\"13Ri0v-s6bN1vL1vvNQZdwL9TG1jp8w7g\",\"datetime\":\"2025-05-20 15:09:48\"}]', 'Compatibility', 'Compatible with various timekeeping tools and terminals, both biometric and non-biometric, for easy customization for importing and extracting employee time data.', 'Flexibility', 'Accessible anytime and anywhere, and fully mobile-ready to accommodate the dynamic needs of your organization.', 'Customizable', 'Tailored to meet the specific requirements and unique needs of your organization.', '2025-05-20 14:44:18', '2025-05-21 08:02:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_hris_overview`
--
ALTER TABLE `fbsv2_services_hris_overview`
  ADD PRIMARY KEY (`hris_overview_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_hris_overview`
--
ALTER TABLE `fbsv2_services_hris_overview`
  MODIFY `hris_overview_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
