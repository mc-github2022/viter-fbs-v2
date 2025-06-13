-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 13, 2025 at 03:50 AM
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
-- Table structure for table `fbsv2_services_continuing_services`
--

CREATE TABLE `fbsv2_services_continuing_services` (
  `continuing_services_aid` int(11) NOT NULL,
  `continuing_services_subtitle_a` varchar(100) NOT NULL,
  `continuing_services_subtitle_b` varchar(100) NOT NULL,
  `continuing_services_title` varchar(100) NOT NULL,
  `continuing_services_prerequisite` varchar(100) NOT NULL,
  `continuing_services_list` text NOT NULL,
  `continuing_services_icon` varchar(50) NOT NULL,
  `continuing_services_created` datetime NOT NULL,
  `continuing_services_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_continuing_services`
--

INSERT INTO `fbsv2_services_continuing_services` (`continuing_services_aid`, `continuing_services_subtitle_a`, `continuing_services_subtitle_b`, `continuing_services_title`, `continuing_services_prerequisite`, `continuing_services_list`, `continuing_services_icon`, `continuing_services_created`, `continuing_services_datetime`) VALUES
(1, 'Here is what you can learn in our', 'Minimum of 80 Hours', 'Website Designing Training', 'Prerequisite: None', 'Figma Introduction and UI\nLayers\nColors, Images, Icons, and Typography\nComponents\nPlugins & Grids\nCollaborations\nPrototyping', 'BsPalette', '2025-06-13 09:41:23', '2025-06-13 09:41:34'),
(3, 'Here is what you can learn in our', 'Minimum of 240 Hours', 'Frontend Development Training', 'Prerequisite: None', 'Web Designing using Figma\nWebsite Mockup Designing\nMobile Responsive Designing\nCSS & HTML Programming\nSASS Preprocessor\nScripting Languages\nTailwind CSS\nWordPress Development\n', 'FaLaptop', '2025-06-13 09:44:47', '2025-06-13 09:44:47'),
(4, 'Here is what you can learn in our', 'Minimum of 160 Hours', 'Backend Development Training', 'Prerequisite: Frontend Dev.', 'ReactJs Frontend\nProps, State, and Store Context\nMySQL, CRUD, CORS, and API\nReactJS Project Development', 'FaLaptop', '2025-06-13 09:45:58', '2025-06-13 09:45:58'),
(5, 'Here is what you can learn in our', 'Minimum of 80 Hours', 'Online Accounting System', 'Prerequisite: Basic Accounting', 'QuickBooks Online\nXero Accounting Software\nProAdvisor Certification Reviewer\n', 'LuCalculator', '2025-06-13 09:47:46', '2025-06-13 09:47:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_continuing_services`
--
ALTER TABLE `fbsv2_services_continuing_services`
  ADD PRIMARY KEY (`continuing_services_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_continuing_services`
--
ALTER TABLE `fbsv2_services_continuing_services`
  MODIFY `continuing_services_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
