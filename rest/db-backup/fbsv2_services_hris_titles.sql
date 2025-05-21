-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 21, 2025 at 08:39 AM
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
-- Table structure for table `fbsv2_services_hris_titles`
--

CREATE TABLE `fbsv2_services_hris_titles` (
  `hris_titles_aid` int(11) NOT NULL,
  `hris_titles_overview_subtitle` varchar(100) NOT NULL,
  `hris_titles_overview_title` varchar(100) NOT NULL,
  `hris_titles_packages_subtitle` varchar(100) NOT NULL,
  `hris_titles_packages_title` varchar(100) NOT NULL,
  `hris_titles_partners_subtitle` varchar(100) NOT NULL,
  `hris_titles_partners_title` varchar(100) NOT NULL,
  `hris_titles_testimonial_subtitle` varchar(100) NOT NULL,
  `hris_titles_testimonial_title` varchar(100) NOT NULL,
  `hris_titles_created` datetime NOT NULL,
  `hris_titles_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_hris_titles`
--

INSERT INTO `fbsv2_services_hris_titles` (`hris_titles_aid`, `hris_titles_overview_subtitle`, `hris_titles_overview_title`, `hris_titles_packages_subtitle`, `hris_titles_packages_title`, `hris_titles_partners_subtitle`, `hris_titles_partners_title`, `hris_titles_testimonial_subtitle`, `hris_titles_testimonial_title`, `hris_titles_created`, `hris_titles_datetime`) VALUES
(1, 'What Makes This Web App', 'a Lifesaver?', 'Web application for your payroll processing needs', 'Affordable Pricing Plan', 'Clients Who Trusted Their', 'Growth With Us.', 'What Our', 'Clients Say', '2025-05-21 09:07:18', '2025-05-21 12:24:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_hris_titles`
--
ALTER TABLE `fbsv2_services_hris_titles`
  ADD PRIMARY KEY (`hris_titles_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_hris_titles`
--
ALTER TABLE `fbsv2_services_hris_titles`
  MODIFY `hris_titles_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
