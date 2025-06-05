-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 05, 2025 at 09:52 AM
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
-- Table structure for table `fbsv2_services_immersion_apply_now`
--

CREATE TABLE `fbsv2_services_immersion_apply_now` (
  `immersion_apply_aid` int(11) NOT NULL,
  `immersion_apply_subtitle` varchar(100) NOT NULL,
  `immersion_apply_title` varchar(100) NOT NULL,
  `immersion_apply_requirement_list` text NOT NULL,
  `immersion_apply_button_text` varchar(50) NOT NULL,
  `immersion_apply_img` text NOT NULL,
  `immersion_apply_created` datetime NOT NULL,
  `immersion_apply_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_immersion_apply_now`
--

INSERT INTO `fbsv2_services_immersion_apply_now` (`immersion_apply_aid`, `immersion_apply_subtitle`, `immersion_apply_title`, `immersion_apply_requirement_list`, `immersion_apply_button_text`, `immersion_apply_img`, `immersion_apply_created`, `immersion_apply_datetime`) VALUES
(1, 'Join and experience the fun and learning with our team!', 'Join our team now!', 'Resume\nSchool Memorandum of Agreement\nEndorsement Letter\nTraining Waiver\nSchool Evaluation Form', 'Apply Now ', '[{\"name\":\"ojt-accepted.webp\",\"id\":\"1O-v0J3UyZI1iZjkDcMgMzDS26Yuvr4pR\",\"datetime\":\"2025-06-05 14:05:51\"}]', '2025-06-05 14:05:48', '2025-06-05 15:41:47');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_immersion_apply_now`
--
ALTER TABLE `fbsv2_services_immersion_apply_now`
  ADD PRIMARY KEY (`immersion_apply_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_immersion_apply_now`
--
ALTER TABLE `fbsv2_services_immersion_apply_now`
  MODIFY `immersion_apply_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
