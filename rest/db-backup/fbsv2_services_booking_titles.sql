-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2026 at 08:33 AM
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
-- Table structure for table `fbsv2_services_booking_titles`
--

CREATE TABLE `fbsv2_services_booking_titles` (
  `booking_titles_aid` int(11) NOT NULL,
  `booking_titles_overview_subtitle` varchar(100) NOT NULL,
  `booking_titles_overview_title` varchar(100) NOT NULL,
  `booking_titles_packages_subtitle` varchar(100) NOT NULL,
  `booking_titles_packages_title` varchar(100) NOT NULL,
  `booking_titles_created` datetime NOT NULL,
  `booking_titles_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_booking_titles`
--

INSERT INTO `fbsv2_services_booking_titles` (`booking_titles_aid`, `booking_titles_overview_subtitle`, `booking_titles_overview_title`, `booking_titles_packages_subtitle`, `booking_titles_packages_title`, `booking_titles_created`, `booking_titles_datetime`) VALUES
(1, 'What Makes This Web App', 'a Lifesaver?', 'Web application for your asset inventory needs', 'Affordable Pricing Plan', '2026-03-23 14:44:38', '2026-03-23 15:22:49');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_booking_titles`
--
ALTER TABLE `fbsv2_services_booking_titles`
  ADD PRIMARY KEY (`booking_titles_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_booking_titles`
--
ALTER TABLE `fbsv2_services_booking_titles`
  MODIFY `booking_titles_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
