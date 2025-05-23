-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 23, 2025 at 07:54 AM
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
-- Table structure for table `fbsv2_services_enrollment_overview`
--

CREATE TABLE `fbsv2_services_enrollment_overview` (
  `enrollment_overview_aid` int(11) NOT NULL,
  `enrollment_overview_subtitle` varchar(100) NOT NULL,
  `enrollment_overview_title` varchar(100) NOT NULL,
  `enrollment_overview_img` text NOT NULL,
  `enrollment_overview_button_text` varchar(20) NOT NULL,
  `enrollment_overview_list_title_a` varchar(100) NOT NULL,
  `enrollment_overview_list_description_a` varchar(500) NOT NULL,
  `enrollment_overview_list_title_b` varchar(100) NOT NULL,
  `enrollment_overview_list_description_b` varchar(500) NOT NULL,
  `enrollment_overview_list_title_c` varchar(100) NOT NULL,
  `enrollment_overview_list_description_c` varchar(500) NOT NULL,
  `enrollment_overview_created` datetime NOT NULL,
  `enrollment_overview_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_enrollment_overview`
--

INSERT INTO `fbsv2_services_enrollment_overview` (`enrollment_overview_aid`, `enrollment_overview_subtitle`, `enrollment_overview_title`, `enrollment_overview_img`, `enrollment_overview_button_text`, `enrollment_overview_list_title_a`, `enrollment_overview_list_description_a`, `enrollment_overview_list_title_b`, `enrollment_overview_list_description_b`, `enrollment_overview_list_title_c`, `enrollment_overview_list_description_c`, `enrollment_overview_created`, `enrollment_overview_datetime`) VALUES
(1, 'Why Choose Our Online', 'School Enrollment System', '[{\"name\":\"enrollment-ss.webp\",\"id\":\"1s6_OyOpKeuWrxUQYg5sJG8lFCWQYoFul\",\"datetime\":\"2025-05-23 12:50:44\"}]', 'Learn More', 'Streamlined Registration and Enrollment', 'Automate the enrollment process with easy online sign-ups, reducing administrative burden and ensuring a smooth experience for students and staff.', 'Comprehensive Record Management', 'Maintain detailed and organized records for both students and parents, facilitating efficient engagement and communication while supporting better academic monitoring.', 'Effective Communication and Coordination', 'Enhance coordination among departments and stakeholders through timely notifications about enrollment progress and requirements, ensuring all parties are informed and aligned.', '2025-05-23 12:50:41', '2025-05-23 12:52:49');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_enrollment_overview`
--
ALTER TABLE `fbsv2_services_enrollment_overview`
  ADD PRIMARY KEY (`enrollment_overview_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_enrollment_overview`
--
ALTER TABLE `fbsv2_services_enrollment_overview`
  MODIFY `enrollment_overview_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
