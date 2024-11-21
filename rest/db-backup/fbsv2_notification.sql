-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 21, 2024 at 11:28 AM
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
-- Table structure for table `fbsv2_notification`
--

CREATE TABLE `fbsv2_notification` (
  `notification_aid` int(11) NOT NULL,
  `notification_is_active` tinyint(1) NOT NULL,
  `notification_name` varchar(200) NOT NULL,
  `notification_email` varchar(200) NOT NULL,
  `notification_phone_no` varchar(20) NOT NULL,
  `notification_purpose` varchar(200) NOT NULL,
  `notification_created` datetime NOT NULL,
  `notification_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_notification`
--

INSERT INTO `fbsv2_notification` (`notification_aid`, `notification_is_active`, `notification_name`, `notification_email`, `notification_phone_no`, `notification_purpose`, `notification_created`, `notification_updated`) VALUES
(2, 1, 'Zaicy Lumabas', 'cyrenemlumabas@gmail.com', '', 'get-started-home', '2024-11-21 17:07:31', '2024-11-21 17:07:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_notification`
--
ALTER TABLE `fbsv2_notification`
  ADD PRIMARY KEY (`notification_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_notification`
--
ALTER TABLE `fbsv2_notification`
  MODIFY `notification_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
