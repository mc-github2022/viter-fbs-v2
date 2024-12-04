-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 04, 2024 at 06:13 AM
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
-- Table structure for table `fbsv2_notification_log`
--

CREATE TABLE `fbsv2_notification_log` (
  `notification_log_aid` int(11) NOT NULL,
  `notification_log_name` varchar(100) NOT NULL,
  `notification_log_email` varchar(100) NOT NULL,
  `notification_log_phone` varchar(100) NOT NULL,
  `notification_log_purpose` varchar(100) NOT NULL,
  `notification_log_subject` varchar(200) NOT NULL,
  `notification_log_message` text NOT NULL,
  `notification_log_file` varchar(100) NOT NULL,
  `notification_log_receiver` text NOT NULL,
  `notification_log_created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_notification_log`
--

INSERT INTO `fbsv2_notification_log` (`notification_log_aid`, `notification_log_name`, `notification_log_email`, `notification_log_phone`, `notification_log_purpose`, `notification_log_subject`, `notification_log_message`, `notification_log_file`, `notification_log_receiver`, `notification_log_created`) VALUES
(5, 'Mark', 'mark@gmail.com', '0990909', 'default-receiver', 'test email', 'test email', '', '{cyrenemlumabas@gmail.com, lourenisobel18@gmail.com}', '2024-12-04 10:42:37'),
(6, 'Luke', 'luke@gmail.com', '09090909', 'default-receiver', 'test', 'test', '', 'cyrenemlumabas@gmail.com, lourenisobel18@gmail.com', '2024-12-04 10:43:48'),
(7, 'Louren Isobel Rubico', 'louren@gmail.com', '909090909', 'default-receiver', 'Test Email', 'test email in get started home.', '', 'cyrenemlumabas@gmail.com, lourenisobel18@gmail.com, mark.bumagat@frontlinebusiness.com.ph', '2024-12-04 13:10:57');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_notification_log`
--
ALTER TABLE `fbsv2_notification_log`
  ADD PRIMARY KEY (`notification_log_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_notification_log`
--
ALTER TABLE `fbsv2_notification_log`
  MODIFY `notification_log_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
