-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 27, 2026 at 05:33 AM
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
  `notification_log_email_subject` varchar(100) NOT NULL,
  `notification_log_course` varchar(100) NOT NULL,
  `notification_log_school` varchar(100) NOT NULL,
  `notification_log_number_of_hours` varchar(50) NOT NULL,
  `notification_log_created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_notification_log`
--

INSERT INTO `fbsv2_notification_log` (`notification_log_aid`, `notification_log_name`, `notification_log_email`, `notification_log_phone`, `notification_log_purpose`, `notification_log_subject`, `notification_log_message`, `notification_log_file`, `notification_log_receiver`, `notification_log_email_subject`, `notification_log_course`, `notification_log_school`, `notification_log_number_of_hours`, `notification_log_created`) VALUES
(16, 'Louren Isobel Rubico', 'louren@gmail.com', '09090909', 'default-receiver', 'test in home', 'test email in home get started', '', 'lourenisobel18@gmail.com', 'GET STARTED / HOME-  ', '', '', '', '2024-12-06 10:01:24'),
(17, 'Micha 1', 'micha18@gmail.com', '090909090909', 'default-receiver', 'Test email in hris', 'This is a test email in HRIS pricing', '', 'micha@gmail.com', 'CHOOSE PLAN / HR Information System (Foreign Clients) - ', '', '', '', '2024-12-09 12:53:58'),
(18, 'Louren Isobel Rubico', 'louren@gmail.com', '09090909', 'default-receiver', 'test in home', 'test email in home get started', '', 'lourenisobel18@gmail.com', 'GET STARTED / HOME-  ', '', '', '', '2024-12-18 10:01:24'),
(19, 'Micha Lopez', 'lourenisobel18@gmail.com', '090909090909', 'get-started-lcs', 'Test email in hris', 'This is a test email in HRIS pricing', '', 'lourenisobel18@gmail.com', 'CHOOSE PLAN / HR Information System (Foreign Clients) - ', '', '', '', '2024-12-23 12:53:58'),
(20, 'Luke', 'lourenisobel18@gmail.com', '090909090909', 'get-started-lcs', 'Test email in hris', 'This is a test email in HRIS pricing', '', 'lourenisobel18@gmail.com', 'CHOOSE PLAN / HR Information System (Foreign Clients) - ', '', '', '', '2024-12-25 12:53:58'),
(58, 'Louren', 'louren@gmail.com', '09090909', 'learn-more-web-design-and-development', 'Test from Asset', 'This email is from Asset Inventory', '', 'louren.rubico@frontlinebusiness.com.ph', 'LEARN MORE / Asset Inventory System - ', '', '', '', '2026-03-27 10:45:32'),
(59, 'Louren Isobel Rubico', 'lourenisobel18@gmail.com', '09090909', 'apply-now-lcs', '', 'This is sample email from College OJT Page', 'Recommendation.pdf', 'louren.rubico@frontlinebusiness.com.ph', 'APPLY NOW - College OJT Application', 'BSIT', 'STI Colleges', '200', '2026-03-27 12:18:35'),
(60, 'Louren Isobel', 'louren@gmail.com', '09232323', 'learn-more-web-design-and-development', 'Sample Email from Online Booking', 'This is online booking system sample email', '', 'louren.rubico@frontlinebusiness.com.ph', 'undefined / Online Booking System - ', '', '', '', '2026-03-27 12:20:31'),
(61, 'Louren Rubico', 'rubicolouren@gmail.com', '0909090909', 'default-receiver', 'Sample email for default', 'This is a sample email for default contact from', '', 'lourenisobel18@gmail.com', 'GET STARTED  -  ', '', '', '', '2026-03-27 12:23:13');

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
  MODIFY `notification_log_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
