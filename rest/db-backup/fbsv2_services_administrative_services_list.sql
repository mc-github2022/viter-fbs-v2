-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 16, 2025 at 03:44 AM
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
-- Table structure for table `fbsv2_services_administrative_services_list`
--

CREATE TABLE `fbsv2_services_administrative_services_list` (
  `administrative_services_list_aid` int(11) NOT NULL,
  `administrative_services_list_title` varchar(100) NOT NULL,
  `administrative_services_list_icon` varchar(20) NOT NULL,
  `administrative_services_list_created` datetime NOT NULL,
  `administrative_services_list_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_administrative_services_list`
--

INSERT INTO `fbsv2_services_administrative_services_list` (`administrative_services_list_aid`, `administrative_services_list_title`, `administrative_services_list_icon`, `administrative_services_list_created`, `administrative_services_list_datetime`) VALUES
(1, 'Administrative Support', 'PiBriefcase', '2025-06-16 09:26:34', '2025-06-16 09:26:34'),
(3, 'Data Management and Organization', 'BsDatabaseCheck', '2025-06-16 09:37:49', '2025-06-16 09:37:49'),
(4, 'Communication and Coordination', 'LuHeadphones', '2025-06-16 09:38:57', '2025-06-16 09:38:57'),
(5, 'Financial and Billing Tasks', 'PiHandCoins', '2025-06-16 09:39:42', '2025-06-16 09:39:42'),
(6, 'Project and Research Support', 'LuFolderSearch', '2025-06-16 09:40:47', '2025-06-16 09:40:47'),
(7, 'Specialized Document Handling', 'PiStackSimple', '2025-06-16 09:43:34', '2025-06-16 09:43:34');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_administrative_services_list`
--
ALTER TABLE `fbsv2_services_administrative_services_list`
  ADD PRIMARY KEY (`administrative_services_list_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_administrative_services_list`
--
ALTER TABLE `fbsv2_services_administrative_services_list`
  MODIFY `administrative_services_list_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
