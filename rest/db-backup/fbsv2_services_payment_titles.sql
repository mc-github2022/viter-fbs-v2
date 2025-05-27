-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 27, 2025 at 03:34 AM
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
-- Table structure for table `fbsv2_services_payment_titles`
--

CREATE TABLE `fbsv2_services_payment_titles` (
  `payment_titles_aid` int(11) NOT NULL,
  `payment_titles_overview_subtitle` varchar(100) NOT NULL,
  `payment_titles_overview_title` varchar(100) NOT NULL,
  `payment_titles_packages_subtitle` varchar(100) NOT NULL,
  `payment_titles_packages_title` varchar(100) NOT NULL,
  `payment_titles_partners_subtitle` varchar(100) NOT NULL,
  `payment_titles_partners_title` varchar(100) NOT NULL,
  `payment_titles_testimonial_subtitle` varchar(100) NOT NULL,
  `payment_titles_testimonial_title` varchar(100) NOT NULL,
  `payment_titles_created` datetime NOT NULL,
  `payment_titles_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_payment_titles`
--

INSERT INTO `fbsv2_services_payment_titles` (`payment_titles_aid`, `payment_titles_overview_subtitle`, `payment_titles_overview_title`, `payment_titles_packages_subtitle`, `payment_titles_packages_title`, `payment_titles_partners_subtitle`, `payment_titles_partners_title`, `payment_titles_testimonial_subtitle`, `payment_titles_testimonial_title`, `payment_titles_created`, `payment_titles_datetime`) VALUES
(1, 'What Makes This Web App', 'a Lifesaver?', 'Web application for your online payment integration needs', 'Affordable Pricing Plan', '', '', '', '', '2025-05-26 12:49:07', '2025-05-26 14:28:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_payment_titles`
--
ALTER TABLE `fbsv2_services_payment_titles`
  ADD PRIMARY KEY (`payment_titles_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_payment_titles`
--
ALTER TABLE `fbsv2_services_payment_titles`
  MODIFY `payment_titles_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
