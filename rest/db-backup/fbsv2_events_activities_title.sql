-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 24, 2025 at 09:32 AM
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
-- Table structure for table `fbsv2_events_activities_title`
--

CREATE TABLE `fbsv2_events_activities_title` (
  `events_title_aid` int(11) NOT NULL,
  `events_title_subtitle_a` varchar(100) NOT NULL,
  `events_title_title` varchar(100) NOT NULL,
  `events_title_subtitle_b` varchar(100) NOT NULL,
  `events_title_created` datetime NOT NULL,
  `events_title_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_events_activities_title`
--

INSERT INTO `fbsv2_events_activities_title` (`events_title_aid`, `events_title_subtitle_a`, `events_title_title`, `events_title_subtitle_b`, `events_title_created`, `events_title_datetime`) VALUES
(1, 'Through Our', 'Events and Activities', 'We Engage, Inspire, and Empower Our Partners, Clients, and Team Members.', '2025-06-24 14:27:34', '2025-06-24 14:30:09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_events_activities_title`
--
ALTER TABLE `fbsv2_events_activities_title`
  ADD PRIMARY KEY (`events_title_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_events_activities_title`
--
ALTER TABLE `fbsv2_events_activities_title`
  MODIFY `events_title_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
