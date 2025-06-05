-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 05, 2025 at 06:10 AM
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
-- Table structure for table `fbsv2_services_immersion_banner`
--

CREATE TABLE `fbsv2_services_immersion_banner` (
  `immersion_banner_aid` int(11) NOT NULL,
  `immersion_banner_title` varchar(100) NOT NULL,
  `immersion_banner_title_bold` varchar(100) NOT NULL,
  `immersion_banner_description` varchar(500) NOT NULL,
  `immersion_banner_button_text` varchar(50) NOT NULL,
  `immersion_banner_button_link` varchar(100) NOT NULL,
  `immersion_banner_img` text NOT NULL,
  `immersion_banner_created` datetime NOT NULL,
  `immersion_banner_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_immersion_banner`
--

INSERT INTO `fbsv2_services_immersion_banner` (`immersion_banner_aid`, `immersion_banner_title`, `immersion_banner_title_bold`, `immersion_banner_description`, `immersion_banner_button_text`, `immersion_banner_button_link`, `immersion_banner_img`, `immersion_banner_created`, `immersion_banner_datetime`) VALUES
(1, 'with industry experience practical, work-related skills', 'Senior High School Work Immersion', 'Join us for an innovative Senior High School Work Immersion program designed for students from the STEM, ABM, HUMSS, and GAS strands, equipping them with real-world skills. This 80-hour (10-day) program bridges classroom learning with practical workplace expertise. With a focus on flexibility and comprehensive skills development, we prepare future professionals for success in IT, Accounting, Administration, and beyond.', 'Schedule a meeting', 'https://calendly.com/herlyn-torres-frontlinebusiness/30min', '[{\"name\":\"workimmersion-bg.webp\",\"id\":\"1YXEWx18MeUSD52EGHu487B7cT0b-dx9r\",\"datetime\":\"2025-06-05 10:01:29\"}]', '2025-06-05 10:01:24', '2025-06-05 10:11:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_immersion_banner`
--
ALTER TABLE `fbsv2_services_immersion_banner`
  ADD PRIMARY KEY (`immersion_banner_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_immersion_banner`
--
ALTER TABLE `fbsv2_services_immersion_banner`
  MODIFY `immersion_banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
