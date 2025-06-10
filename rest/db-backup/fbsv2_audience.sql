-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 10, 2025 at 07:32 AM
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
  `audience_notification_email_id` varchar(10) NOT NULL,
  `audience_notification_email` varchar(100) NOT NULL,
  `audience_description` text NOT NULL,
  `audience_created` datetime NOT NULL,
  `audience_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_audience`
--

INSERT INTO `fbsv2_audience` (`audience_aid`, `audience_is_active`, `audience_name`, `audience_code`, `audience_notification_email_id`, `audience_notification_email`, `audience_description`, `audience_created`, `audience_datetime`) VALUES
(8, 1, 'Employee', 'audience_is_employees', '', '', '', '2025-02-04 08:19:11', '2025-02-04 08:19:21'),
(9, 0, 'Client', 'audience_is_client', '', '', 'Client subscribers', '2025-02-04 08:21:53', '2025-02-05 13:52:44'),
(10, 1, 'Web-LCS', 'audience_is_web-lcs', '', '', '', '2025-02-04 14:05:26', '2025-05-27 14:47:44'),
(13, 1, 'Test', 'audience_is_test', '', '', '', '2025-05-28 09:49:35', '2025-05-28 09:49:35'),
(16, 1, 'Marketing', 'audience_is_marketing', '8', 'lourenisobel18@gmail.com', '', '2025-06-10 12:58:10', '2025-06-10 13:31:41'),
(17, 1, 'Client', 'audience_is_client', '8', 'lourenisobel18@gmail.com', '', '2025-06-10 13:27:05', '2025-06-10 13:27:05');

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
  MODIFY `audience_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
