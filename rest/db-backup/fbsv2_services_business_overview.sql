-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 16, 2025 at 07:03 AM
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
-- Table structure for table `fbsv2_services_business_overview`
--

CREATE TABLE `fbsv2_services_business_overview` (
  `business_overview_aid` int(11) NOT NULL,
  `business_overview_subtitle` varchar(100) NOT NULL,
  `business_overview_title` varchar(100) NOT NULL,
  `business_overview_img` text NOT NULL,
  `business_overview_list_title_a` varchar(100) NOT NULL,
  `business_overview_list_description_a` varchar(500) NOT NULL,
  `business_overview_list_title_b` varchar(100) NOT NULL,
  `business_overview_list_description_b` varchar(500) NOT NULL,
  `business_overview_list_title_c` varchar(100) NOT NULL,
  `business_overview_list_description_c` varchar(500) NOT NULL,
  `business_overview_created` datetime NOT NULL,
  `business_overview_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_business_overview`
--

INSERT INTO `fbsv2_services_business_overview` (`business_overview_aid`, `business_overview_subtitle`, `business_overview_title`, `business_overview_img`, `business_overview_list_title_a`, `business_overview_list_description_a`, `business_overview_list_title_b`, `business_overview_list_description_b`, `business_overview_list_title_c`, `business_overview_list_description_c`, `business_overview_created`, `business_overview_datetime`) VALUES
(1, 'Here\'s Why We\'re The', 'Right Choice for Your VA Needs.', '[{\"name\":\"varesearch.jpg\",\"id\":\"1_ZebvhSeSfbRNSt39u3EM12mFULBDay0\",\"datetime\":\"2025-06-16 13:02:04\"}]', 'Proactive Lead Management', 'Our services enhance your sales process by identifying potential customers, converting leads, and nurturing relationships, ensuring a steady flow of business opportunities.', 'Comprehensive Customer Support', 'We offer multi-channel customer support, from phone and email to live chat, ensuring that inquiries are managed efficiently, which improves customer satisfaction and retention.', 'Streamlined Operations and Reporting', 'Our expertise in operations management, data analysis, and reporting helps you optimize processes, make informed decisions, and track performance metrics effectively, driving business growth.', '2025-06-16 13:02:01', '2025-06-16 13:02:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_business_overview`
--
ALTER TABLE `fbsv2_services_business_overview`
  ADD PRIMARY KEY (`business_overview_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_business_overview`
--
ALTER TABLE `fbsv2_services_business_overview`
  MODIFY `business_overview_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
