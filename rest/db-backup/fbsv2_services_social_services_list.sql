-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 05, 2025 at 02:46 AM
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
-- Table structure for table `fbsv2_services_social_services_list`
--

CREATE TABLE `fbsv2_services_social_services_list` (
  `social_services_list_aid` int(11) NOT NULL,
  `social_services_list_title` varchar(100) NOT NULL,
  `social_services_list_icon` varchar(50) NOT NULL,
  `social_services_list_created` datetime NOT NULL,
  `social_services_list_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_social_services_list`
--

INSERT INTO `fbsv2_services_social_services_list` (`social_services_list_aid`, `social_services_list_title`, `social_services_list_icon`, `social_services_list_created`, `social_services_list_datetime`) VALUES
(2, 'All-in-One Service', 'PiListMagnifyingGlassBold', '2025-09-05 08:38:58', '2025-09-05 08:38:58'),
(3, 'Ease of Use & Hassle-Free Setup', 'FaRegHandshake', '2025-09-05 08:39:24', '2025-09-05 08:39:24'),
(4, 'Scalable to Your Needs', 'LuGoal', '2025-09-05 08:40:30', '2025-09-05 08:40:30'),
(5, 'Affordable & Flexible', 'PiHandCoinsBold', '2025-09-05 08:40:55', '2025-09-05 08:40:55');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_social_services_list`
--
ALTER TABLE `fbsv2_services_social_services_list`
  ADD PRIMARY KEY (`social_services_list_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_social_services_list`
--
ALTER TABLE `fbsv2_services_social_services_list`
  MODIFY `social_services_list_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
