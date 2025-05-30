-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 30, 2025 at 03:58 AM
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
-- Table structure for table `fbsv2_services_registration_overview`
--

CREATE TABLE `fbsv2_services_registration_overview` (
  `registration_overview_aid` int(11) NOT NULL,
  `registration_overview_subtitle` varchar(100) NOT NULL,
  `registration_overview_title` varchar(100) NOT NULL,
  `registration_overview_img` text NOT NULL,
  `registration_overview_list_title_a` varchar(100) NOT NULL,
  `registration_overview_list_description_a` varchar(500) NOT NULL,
  `registration_overview_list_title_b` varchar(100) NOT NULL,
  `registration_overview_list_description_b` varchar(500) NOT NULL,
  `registration_overview_list_title_c` varchar(100) NOT NULL,
  `registration_overview_list_description_c` varchar(500) NOT NULL,
  `registration_overview_created` datetime NOT NULL,
  `registration_overview_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_registration_overview`
--

INSERT INTO `fbsv2_services_registration_overview` (`registration_overview_aid`, `registration_overview_subtitle`, `registration_overview_title`, `registration_overview_img`, `registration_overview_list_title_a`, `registration_overview_list_description_a`, `registration_overview_list_title_b`, `registration_overview_list_description_b`, `registration_overview_list_title_c`, `registration_overview_list_description_c`, `registration_overview_created`, `registration_overview_datetime`) VALUES
(1, 'Here\'s Why We\'re The', 'Right Choice for Your Business Registration Needs.', '[{\"name\":\"business-reg-img.jpg\",\"id\":\"1T_iYZo3r9YMfK8gdhdA_oQhpJnnCROCB\",\"datetime\":\"2025-05-30 08:08:42\"}]', 'Comprehensive Registration', 'We offer tailored packages for various business types, covering essential registrations like DTI, SEC, BIR, and LGU to simplify the process.', 'Full Compliance Support', 'Our services handle key documents like the Authority to Print, Books of Accounts, and DST Doc Stamps, ensuring all compliance needs are met.', 'Affordable and Flexible Packages', 'Our packages cater to different budgets, making registration accessible for businesses of all sizes.', '2025-05-30 08:08:40', '2025-05-30 08:46:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_registration_overview`
--
ALTER TABLE `fbsv2_services_registration_overview`
  ADD PRIMARY KEY (`registration_overview_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_registration_overview`
--
ALTER TABLE `fbsv2_services_registration_overview`
  MODIFY `registration_overview_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
