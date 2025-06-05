-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 05, 2025 at 06:12 AM
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
-- Table structure for table `fbsv2_services_immersion_services`
--

CREATE TABLE `fbsv2_services_immersion_services` (
  `immersion_services_aid` int(11) NOT NULL,
  `immersion_services_subtitle_a` varchar(100) NOT NULL,
  `immersion_services_subtitle_b` varchar(100) NOT NULL,
  `immersion_services_title` varchar(100) NOT NULL,
  `immersion_services_list` text NOT NULL,
  `immersion_services_icon` varchar(50) NOT NULL,
  `immersion_services_created` datetime NOT NULL,
  `immersion_services_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_immersion_services`
--

INSERT INTO `fbsv2_services_immersion_services` (`immersion_services_aid`, `immersion_services_subtitle_a`, `immersion_services_subtitle_b`, `immersion_services_title`, `immersion_services_list`, `immersion_services_icon`, `immersion_services_created`, `immersion_services_datetime`) VALUES
(1, 'STEM and ICT students can learn', 'SHS Work Immersion ', 'Web Design & Development', 'Web Designing using Figma\nWebsite Mockup Designing\nFrontend Development\nMobile Responsive Designing\nHTML5 & CSS3 Programming\nBasic Scripting Languages\nBusiness Work Ethics', 'FaLaptop', '2025-06-05 10:52:35', '2025-06-05 10:52:51');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_immersion_services`
--
ALTER TABLE `fbsv2_services_immersion_services`
  ADD PRIMARY KEY (`immersion_services_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_immersion_services`
--
ALTER TABLE `fbsv2_services_immersion_services`
  MODIFY `immersion_services_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
