-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 03, 2025 at 08:26 AM
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
-- Table structure for table `fbsv2_audience`
--

CREATE TABLE `fbsv2_audience` (
  `audience_aid` int(11) NOT NULL,
  `audience_is_active` tinyint(1) NOT NULL,
  `audience_name` varchar(100) NOT NULL,
  `audience_code` varchar(100) NOT NULL,
  `audience_description` text NOT NULL,
  `audience_created` datetime NOT NULL,
  `audience_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_audience`
--

INSERT INTO `fbsv2_audience` (`audience_aid`, `audience_is_active`, `audience_name`, `audience_code`, `audience_description`, `audience_created`, `audience_datetime`) VALUES
(5, 1, 'Client', 'audience_is_client', 'This is for client', '2025-02-03 15:02:05', '2025-02-03 15:21:07'),
(6, 1, 'Web', 'audience_is_web', '', '2025-02-03 15:02:35', '2025-02-03 15:02:35'),
(7, 1, 'Test', 'audience_is_test', '', '2025-02-03 15:02:49', '2025-02-03 15:02:49');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_audience`
--
ALTER TABLE `fbsv2_audience`
  ADD PRIMARY KEY (`audience_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_audience`
--
ALTER TABLE `fbsv2_audience`
  MODIFY `audience_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
