-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 05, 2025 at 02:45 AM
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
-- Table structure for table `fbsv2_services_social_titles`
--

CREATE TABLE `fbsv2_services_social_titles` (
  `social_titles_aid` int(11) NOT NULL,
  `social_titles_packages_subtitle` varchar(100) NOT NULL,
  `social_titles_packages_title` varchar(100) NOT NULL,
  `social_titles_partners_subtitle` varchar(100) NOT NULL,
  `social_titles_partners_title` varchar(100) NOT NULL,
  `social_titles_testimonial_subtitle` varchar(100) NOT NULL,
  `social_titles_testimonial_title` varchar(100) NOT NULL,
  `social_titles_created` datetime NOT NULL,
  `social_titles_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_social_titles`
--

INSERT INTO `fbsv2_services_social_titles` (`social_titles_aid`, `social_titles_packages_subtitle`, `social_titles_packages_title`, `social_titles_partners_subtitle`, `social_titles_partners_title`, `social_titles_testimonial_subtitle`, `social_titles_testimonial_title`, `social_titles_created`, `social_titles_datetime`) VALUES
(1, 'Choose what\'s best for your needs', 'Our Packages', 'Clients Who Trusted Their', 'Growth With Us.', 'What Our', 'Clients Say', '2025-09-04 16:34:55', '2025-09-05 08:45:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_social_titles`
--
ALTER TABLE `fbsv2_services_social_titles`
  ADD PRIMARY KEY (`social_titles_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_social_titles`
--
ALTER TABLE `fbsv2_services_social_titles`
  MODIFY `social_titles_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
