-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 27, 2025 at 03:35 AM
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
-- Table structure for table `fbsv2_services_donation_overview`
--

CREATE TABLE `fbsv2_services_donation_overview` (
  `donation_overview_aid` int(11) NOT NULL,
  `donation_overview_subtitle` varchar(100) NOT NULL,
  `donation_overview_title` varchar(100) NOT NULL,
  `donation_overview_img` text NOT NULL,
  `donation_overview_button_text` varchar(20) NOT NULL,
  `donation_overview_list_title_a` varchar(100) NOT NULL,
  `donation_overview_list_description_a` varchar(500) NOT NULL,
  `donation_overview_list_title_b` varchar(100) NOT NULL,
  `donation_overview_list_description_b` varchar(500) NOT NULL,
  `donation_overview_list_title_c` varchar(100) NOT NULL,
  `donation_overview_list_description_c` varchar(500) NOT NULL,
  `donation_overview_created` datetime NOT NULL,
  `donation_overview_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_donation_overview`
--

INSERT INTO `fbsv2_services_donation_overview` (`donation_overview_aid`, `donation_overview_subtitle`, `donation_overview_title`, `donation_overview_img`, `donation_overview_button_text`, `donation_overview_list_title_a`, `donation_overview_list_description_a`, `donation_overview_list_title_b`, `donation_overview_list_description_b`, `donation_overview_list_title_c`, `donation_overview_list_description_c`, `donation_overview_created`, `donation_overview_datetime`) VALUES
(1, 'Why Choose Our', 'Online Donation System', '[{\"name\":\"ftc-ss.png\",\"id\":\"1m2PHqtJ_cmFBPXAMQVd9a0WYa0XLcbHo\",\"datetime\":\"2025-05-26 15:31:23\"}]', 'Learn More', 'Enhanced Efficiency and Decision-Making', 'Streamline operations by managing donations on a single platform, reducing administrative tasks, and enabling data-driven decisions for better resource allocation and fundraising success.', 'Increased Donor Trust and Retention', 'Strengthen relationships with donors through a transparent transaction history and secure management, leading to long-term support and repeat donations.', 'Higher Donations and Optimized Fund Allocation', 'Encourage more contributions by allowing donors to see the direct impact of their support, resulting in increased donation amounts and more effective program funding.', '2025-05-26 15:31:20', '2025-05-27 09:13:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_donation_overview`
--
ALTER TABLE `fbsv2_services_donation_overview`
  ADD PRIMARY KEY (`donation_overview_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_donation_overview`
--
ALTER TABLE `fbsv2_services_donation_overview`
  MODIFY `donation_overview_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
