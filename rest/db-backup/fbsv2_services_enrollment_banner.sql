-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 23, 2025 at 06:39 AM
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
-- Table structure for table `fbsv2_services_enrollment_banner`
--

CREATE TABLE `fbsv2_services_enrollment_banner` (
  `enrollment_banner_aid` int(11) NOT NULL,
  `enrollment_banner_title` varchar(100) NOT NULL,
  `enrollment_banner_title_bold` varchar(100) NOT NULL,
  `enrollment_banner_description` varchar(500) NOT NULL,
  `enrollment_banner_button_text` varchar(50) NOT NULL,
  `enrollment_banner_img` text NOT NULL,
  `enrollment_banner_created` datetime NOT NULL,
  `enrollment_banner_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_enrollment_banner`
--

INSERT INTO `fbsv2_services_enrollment_banner` (`enrollment_banner_aid`, `enrollment_banner_title`, `enrollment_banner_title_bold`, `enrollment_banner_description`, `enrollment_banner_button_text`, `enrollment_banner_img`, `enrollment_banner_created`, `enrollment_banner_datetime`) VALUES
(1, 'Simplify student enrollment and management with our', 'School Enrollment System', 'Designed for educational institutions, this system automates the enrollment process for students. It typically includes features for online registration, course selection, fee payment, document submission, and enrollment status tracking, simplifying administrative tasks for schools and improving the enrollment experience for students and parents.', 'Contact us', '[{\"name\":\"schoolenrollment.jpg\",\"id\":\"1dzbBlyRZNHadzDTgaA_ViPlJNHNyQvGx\",\"datetime\":\"2025-05-23 12:14:38\"}]', '2025-05-23 06:13:30', '2025-05-23 12:14:34');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_enrollment_banner`
--
ALTER TABLE `fbsv2_services_enrollment_banner`
  ADD PRIMARY KEY (`enrollment_banner_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_enrollment_banner`
--
ALTER TABLE `fbsv2_services_enrollment_banner`
  MODIFY `enrollment_banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
