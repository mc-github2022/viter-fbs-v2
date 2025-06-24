-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 24, 2025 at 06:39 AM
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
-- Table structure for table `fbsv2_work_titles`
--

CREATE TABLE `fbsv2_work_titles` (
  `work_titles_aid` int(11) NOT NULL,
  `work_titles_partners_subtitle` varchar(100) NOT NULL,
  `work_titles_partners_title` varchar(100) NOT NULL,
  `work_titles_teams_subtitle` varchar(100) NOT NULL,
  `work_titles_teams_title` varchar(100) NOT NULL,
  `work_titles_created` datetime NOT NULL,
  `work_titles_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_work_titles`
--

INSERT INTO `fbsv2_work_titles` (`work_titles_aid`, `work_titles_partners_subtitle`, `work_titles_partners_title`, `work_titles_teams_subtitle`, `work_titles_teams_title`, `work_titles_created`, `work_titles_datetime`) VALUES
(1, 'Our Ministry Partners', 'Who Help Support in Our Mission.', 'We Work With a', 'Great Team for Extraordinary Results.', '2025-06-24 12:35:41', '2025-06-24 12:36:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_work_titles`
--
ALTER TABLE `fbsv2_work_titles`
  ADD PRIMARY KEY (`work_titles_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_work_titles`
--
ALTER TABLE `fbsv2_work_titles`
  MODIFY `work_titles_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
