-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 16, 2025 at 01:55 AM
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
-- Table structure for table `fbsv2_services_administrative_overview`
--

CREATE TABLE `fbsv2_services_administrative_overview` (
  `administrative_overview_aid` int(11) NOT NULL,
  `administrative_overview_subtitle` varchar(100) NOT NULL,
  `administrative_overview_title` varchar(100) NOT NULL,
  `administrative_overview_img` text NOT NULL,
  `administrative_overview_list_title_a` varchar(100) NOT NULL,
  `administrative_overview_list_description_a` varchar(500) NOT NULL,
  `administrative_overview_list_title_b` varchar(100) NOT NULL,
  `administrative_overview_list_description_b` varchar(500) NOT NULL,
  `administrative_overview_list_title_c` varchar(100) NOT NULL,
  `administrative_overview_list_description_c` varchar(500) NOT NULL,
  `administrative_overview_created` datetime NOT NULL,
  `administrative_overview_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_administrative_overview`
--

INSERT INTO `fbsv2_services_administrative_overview` (`administrative_overview_aid`, `administrative_overview_subtitle`, `administrative_overview_title`, `administrative_overview_img`, `administrative_overview_list_title_a`, `administrative_overview_list_description_a`, `administrative_overview_list_title_b`, `administrative_overview_list_description_b`, `administrative_overview_list_title_c`, `administrative_overview_list_description_c`, `administrative_overview_created`, `administrative_overview_datetime`) VALUES
(1, 'Here\'s Why We\'re The', 'Right Choice for Your VA Needs.', '[{\"name\":\"vaoverviewimage.jpg\",\"id\":\"1Z7dy_dqep1CLV4-k9dqzECxZjv2DVLPQ\",\"datetime\":\"2025-06-16 07:54:39\"}]', 'Enhanced Efficiency and Productivity', 'We handle routine tasks like data entry, calendar management, and email organization, freeing up your time to focus on core business activities.', 'Comprehensive Support Tailored to Your Needs', 'Our services cover everything from executive assistance and personal tasks to data management and event coordination, offering solutions that fit your specific needs.', 'Cost-Effective and Scalable Solutions', 'Enjoy flexible support without the costs of full-time staff. Our services can scale with your workload, ensuring you pay only for what you need.', '2025-06-16 07:54:35', '2025-06-16 07:55:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_administrative_overview`
--
ALTER TABLE `fbsv2_services_administrative_overview`
  ADD PRIMARY KEY (`administrative_overview_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_administrative_overview`
--
ALTER TABLE `fbsv2_services_administrative_overview`
  MODIFY `administrative_overview_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
