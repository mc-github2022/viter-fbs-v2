-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 05, 2025 at 02:46 AM
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
-- Table structure for table `fbsv2_services_social_services_title`
--

CREATE TABLE `fbsv2_services_social_services_title` (
  `social_services_title_aid` int(11) NOT NULL,
  `social_services_title_black_a` varchar(20) NOT NULL,
  `social_services_title_highlighted` varchar(20) NOT NULL,
  `social_services_title_black_b` varchar(20) NOT NULL,
  `social_services_title_description` varchar(300) NOT NULL,
  `social_services_title_button_text` varchar(20) NOT NULL,
  `social_services_title_created` datetime NOT NULL,
  `social_services_title_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_social_services_title`
--

INSERT INTO `fbsv2_services_social_services_title` (`social_services_title_aid`, `social_services_title_black_a`, `social_services_title_highlighted`, `social_services_title_black_b`, `social_services_title_description`, `social_services_title_button_text`, `social_services_title_created`, `social_services_title_datetime`) VALUES
(1, 'What', 'Social Media Managem', 'Can We Perform?', 'Our VA for Social Media Management offers comprehensive support to streamline your business operations.', 'Get Started', '2025-09-05 08:27:11', '2025-09-05 08:27:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_social_services_title`
--
ALTER TABLE `fbsv2_services_social_services_title`
  ADD PRIMARY KEY (`social_services_title_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_social_services_title`
--
ALTER TABLE `fbsv2_services_social_services_title`
  MODIFY `social_services_title_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
