-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 03, 2025 at 08:28 AM
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
-- Table structure for table `fbsv2_subscriber_list`
--

CREATE TABLE `fbsv2_subscriber_list` (
  `subscriber_aid` int(11) NOT NULL,
  `subscriber_email` varchar(100) NOT NULL,
  `subscriber_is_active` tinyint(1) NOT NULL,
  `subscriber_key` varchar(255) NOT NULL,
  `subscriber_audience_id` int(11) NOT NULL,
  `subscriber_feedback` text NOT NULL,
  `subscriber_is_agree` tinyint(1) NOT NULL,
  `subscriber_created` datetime NOT NULL,
  `subscriber_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_subscriber_list`
--

INSERT INTO `fbsv2_subscriber_list` (`subscriber_aid`, `subscriber_email`, `subscriber_is_active`, `subscriber_key`, `subscriber_audience_id`, `subscriber_feedback`, `subscriber_is_agree`, `subscriber_created`, `subscriber_datetime`) VALUES
(116, 'lourenisobel18@gmail.com', 1, '6dea1b95d8f2c83945708833fce3cb37dce729554d09e48b045daaa4235ed4e7', 7, '', 1, '2025-02-03 15:12:28', '2025-02-03 15:21:17'),
(118, 'louren.rubico@frontlinebusiness.com.ph', 1, '6322524ad4f2821f994ae65713407d8e9bc4282584d0474faab67dcea004f67a', 5, '', 1, '2025-02-03 15:14:17', '2025-02-03 15:14:17'),
(119, 'mark@gmail.com', 1, '08da2412d8cca42e4e80fd97702a2ebb39059dd85c299e64f62b694b4aceb6cb', 5, '', 1, '2025-02-03 15:20:37', '2025-02-03 15:20:37');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_subscriber_list`
--
ALTER TABLE `fbsv2_subscriber_list`
  ADD PRIMARY KEY (`subscriber_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_subscriber_list`
--
ALTER TABLE `fbsv2_subscriber_list`
  MODIFY `subscriber_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
