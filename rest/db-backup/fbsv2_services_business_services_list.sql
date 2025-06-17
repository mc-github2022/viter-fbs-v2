-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 17, 2025 at 02:26 AM
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
-- Table structure for table `fbsv2_services_business_services_list`
--

CREATE TABLE `fbsv2_services_business_services_list` (
  `business_services_list_aid` int(11) NOT NULL,
  `business_services_list_title` varchar(100) NOT NULL,
  `business_services_list_icon` varchar(50) NOT NULL,
  `business_services_list_created` datetime NOT NULL,
  `business_services_list_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_business_services_list`
--

INSERT INTO `fbsv2_services_business_services_list` (`business_services_list_aid`, `business_services_list_title`, `business_services_list_icon`, `business_services_list_created`, `business_services_list_datetime`) VALUES
(1, 'Lead Management', 'PiListMagnifyingGlassBold', '2025-06-17 08:13:14', '2025-06-17 08:19:29'),
(3, 'Customer Support & Communication', 'PiHeadsetBold', '2025-06-17 08:19:14', '2025-06-17 08:19:24'),
(4, 'Administrative & Financial Management', 'LuWalletCards', '2025-06-17 08:21:04', '2025-06-17 08:21:04'),
(5, 'Data & Reporting', 'LuPresentation', '2025-06-17 08:21:48', '2025-06-17 08:21:48'),
(6, 'Operations & Project Management', 'PiNotebookBold', '2025-06-17 08:22:50', '2025-06-17 08:23:09'),
(7, 'Document & Communication Management', 'PiFolderUserBold', '2025-06-17 08:25:25', '2025-06-17 08:25:25'),
(8, 'Customer Engagement & Relationship Building', 'FaRegHandshake', '2025-06-17 08:26:10', '2025-06-17 08:26:24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_business_services_list`
--
ALTER TABLE `fbsv2_services_business_services_list`
  ADD PRIMARY KEY (`business_services_list_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_business_services_list`
--
ALTER TABLE `fbsv2_services_business_services_list`
  MODIFY `business_services_list_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
