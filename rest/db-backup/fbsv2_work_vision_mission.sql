-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 02, 2025 at 09:10 AM
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
-- Table structure for table `fbsv2_work_vision_mission`
--

CREATE TABLE `fbsv2_work_vision_mission` (
  `work_vision_aid` int(11) NOT NULL,
  `work_vision_subtitle` varchar(100) NOT NULL,
  `work_vision_title` varchar(100) NOT NULL,
  `work_vision_vision_title` varchar(100) NOT NULL,
  `work_vision_vision_desc` varchar(500) NOT NULL,
  `work_vision_mission_title` varchar(100) NOT NULL,
  `work_vision_mission_desc` varchar(500) NOT NULL,
  `work_vision_core_title` varchar(100) NOT NULL,
  `work_vision_core_list` varchar(500) NOT NULL,
  `work_vision_created` datetime NOT NULL,
  `work_vision_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_work_vision_mission`
--

INSERT INTO `fbsv2_work_vision_mission` (`work_vision_aid`, `work_vision_subtitle`, `work_vision_title`, `work_vision_vision_title`, `work_vision_vision_desc`, `work_vision_mission_title`, `work_vision_mission_desc`, `work_vision_core_title`, `work_vision_core_list`, `work_vision_created`, `work_vision_datetime`) VALUES
(1, 'Our Mission, Vision, and Core Values Are the Driving Forces Behind the', 'Exceptional Web, Virtual, Accounting, and Learning Solutions.', 'Vision', 'To be a globally competitive, premier provider of excellent business solutions, while sustaining a business model that will create positive social impact and make the Philippines an outstanding place to live and work.', 'Mission', 'FBS is a Godly, caring company, committed to holistically equipping its people, developing local talents, providing high client satisfaction and positively impacting the communities in which it exists.', 'Core Values', 'Godly Stewardship\nExcellence\nProfessionalism\nIntegrity\nGenerosity\nTeamwork\nLoving People\nFun', '2025-06-24 09:27:49', '2025-06-24 13:04:23');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_work_vision_mission`
--
ALTER TABLE `fbsv2_work_vision_mission`
  ADD PRIMARY KEY (`work_vision_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_work_vision_mission`
--
ALTER TABLE `fbsv2_work_vision_mission`
  MODIFY `work_vision_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
