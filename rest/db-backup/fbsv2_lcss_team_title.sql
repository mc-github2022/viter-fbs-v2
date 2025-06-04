-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 04, 2025 at 08:10 AM
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
-- Table structure for table `fbsv2_lcss_team_title`
--

CREATE TABLE `fbsv2_lcss_team_title` (
  `teams_title_aid` int(11) NOT NULL,
  `teams_title_substitle_a` varchar(100) NOT NULL,
  `teams_title_title` varchar(100) NOT NULL,
  `teams_title_substitle_b` varchar(100) NOT NULL,
  `teams_title_created` datetime NOT NULL,
  `teams_title_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_lcss_team_title`
--

INSERT INTO `fbsv2_lcss_team_title` (`teams_title_aid`, `teams_title_substitle_a`, `teams_title_title`, `teams_title_substitle_b`, `teams_title_created`, `teams_title_datetime`) VALUES
(1, 'Here are the', 'Industry Professional', 'who will provide you with real-world experience and insights.', '2025-06-04 12:47:52', '2025-06-04 12:48:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_lcss_team_title`
--
ALTER TABLE `fbsv2_lcss_team_title`
  ADD PRIMARY KEY (`teams_title_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_lcss_team_title`
--
ALTER TABLE `fbsv2_lcss_team_title`
  MODIFY `teams_title_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
