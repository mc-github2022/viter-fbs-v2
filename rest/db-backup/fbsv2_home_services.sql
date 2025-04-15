-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 15, 2025 at 03:30 AM
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
-- Table structure for table `fbsv2_home_services`
--

CREATE TABLE `fbsv2_home_services` (
  `services_aid` int(11) NOT NULL,
  `services_sub_title_a` varchar(100) NOT NULL,
  `services_title` varchar(100) NOT NULL,
  `services_sub_title_b` varchar(100) NOT NULL,
  `services_title_a` varchar(100) NOT NULL,
  `services_title_b` varchar(100) NOT NULL,
  `services_title_c` varchar(100) NOT NULL,
  `services_title_d` varchar(100) NOT NULL,
  `services_description_a` text NOT NULL,
  `services_description_b` text NOT NULL,
  `services_description_c` text NOT NULL,
  `services_description_d` text NOT NULL,
  `services_button_text_a` varchar(20) NOT NULL,
  `services_button_text_b` varchar(20) NOT NULL,
  `services_button_text_c` varchar(20) NOT NULL,
  `services_button_text_d` varchar(20) NOT NULL,
  `services_button_link_a` varchar(50) NOT NULL,
  `services_button_link_b` varchar(50) NOT NULL,
  `services_button_link_c` varchar(50) NOT NULL,
  `services_button_link_d` varchar(50) NOT NULL,
  `services_created` datetime NOT NULL,
  `services_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_home_services`
--

INSERT INTO `fbsv2_home_services` (`services_aid`, `services_sub_title_a`, `services_title`, `services_sub_title_b`, `services_title_a`, `services_title_b`, `services_title_c`, `services_title_d`, `services_description_a`, `services_description_b`, `services_description_c`, `services_description_d`, `services_button_text_a`, `services_button_text_b`, `services_button_text_c`, `services_button_text_d`, `services_button_link_a`, `services_button_link_b`, `services_button_link_c`, `services_button_link_d`, `services_created`, `services_datetime`) VALUES
(1, 'Here Are', 'Our Specialized Services', 'to Help Grow Your Business', 'Web App & Website Development', 'Virtual Assistant Solutions', 'Accounting Solutions', 'Skills Development', 'We deliver cutting-edge web development and custom applications to enhance user experience, boost engagement, and drive conversions.', 'Our Virtual Assistant offers professional, flexible, and reliable support, freeing you to focus on growing your business.', 'We partner with Twomiles Corp for foreign clients accounting needs and support local startups with business registration and compliance for sustainable growth.', 'Our College OJT and Senior High School Immersion programs provide real-world skills development, preparing students for employment and aligning them with industry.', 'Learn More', 'Learn More', 'Learn More', 'Learn More', '/webapp-hris', '/va-administrative', '/accounting-bookkeeping', '/college-ojt', '2025-04-15 08:11:09', '2025-04-15 09:01:49');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_home_services`
--
ALTER TABLE `fbsv2_home_services`
  ADD PRIMARY KEY (`services_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_home_services`
--
ALTER TABLE `fbsv2_home_services`
  MODIFY `services_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
