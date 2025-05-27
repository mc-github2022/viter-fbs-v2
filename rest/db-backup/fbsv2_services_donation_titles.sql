-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 27, 2025 at 03:36 AM
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
-- Table structure for table `fbsv2_services_donation_titles`
--

CREATE TABLE `fbsv2_services_donation_titles` (
  `donation_titles_aid` int(11) NOT NULL,
  `donation_titles_overview_subtitle` varchar(100) NOT NULL,
  `donation_titles_overview_title` varchar(100) NOT NULL,
  `donation_titles_packages_subtitle` varchar(100) NOT NULL,
  `donation_titles_packages_title` varchar(100) NOT NULL,
  `donation_titles_partners_subtitle` varchar(100) NOT NULL,
  `donation_titles_partners_title` varchar(100) NOT NULL,
  `donation_titles_testimonial_subtitle` varchar(100) NOT NULL,
  `donation_titles_testimonial_title` varchar(100) NOT NULL,
  `donation_titles_created` datetime NOT NULL,
  `donation_titles_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_donation_titles`
--

INSERT INTO `fbsv2_services_donation_titles` (`donation_titles_aid`, `donation_titles_overview_subtitle`, `donation_titles_overview_title`, `donation_titles_packages_subtitle`, `donation_titles_packages_title`, `donation_titles_partners_subtitle`, `donation_titles_partners_title`, `donation_titles_testimonial_subtitle`, `donation_titles_testimonial_title`, `donation_titles_created`, `donation_titles_datetime`) VALUES
(1, 'What Makes This Web App', 'a Lifesaver?', 'Web application for your online donation needs', 'Affordable Pricing Plan', '', '', 'What Our', 'Clients Say', '2025-05-27 09:00:27', '2025-05-27 09:22:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_donation_titles`
--
ALTER TABLE `fbsv2_services_donation_titles`
  ADD PRIMARY KEY (`donation_titles_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_donation_titles`
--
ALTER TABLE `fbsv2_services_donation_titles`
  MODIFY `donation_titles_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
