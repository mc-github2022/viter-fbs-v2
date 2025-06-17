-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 17, 2025 at 08:59 AM
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
-- Table structure for table `fbsv2_services_marketing_services_list`
--

CREATE TABLE `fbsv2_services_marketing_services_list` (
  `marketing_services_list_aid` int(11) NOT NULL,
  `marketing_services_list_title` varchar(100) NOT NULL,
  `marketing_services_list_icon` varchar(50) NOT NULL,
  `marketing_services_list_created` datetime NOT NULL,
  `marketing_services_list_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_marketing_services_list`
--

INSERT INTO `fbsv2_services_marketing_services_list` (`marketing_services_list_aid`, `marketing_services_list_title`, `marketing_services_list_icon`, `marketing_services_list_created`, `marketing_services_list_datetime`) VALUES
(1, 'Digital Marketing & Strategy', 'PiHeadsetBold', '2025-06-17 14:54:12', '2025-06-17 14:54:25'),
(3, 'Content Creation & Management', 'FaRegCommentDots', '2025-06-17 14:55:22', '2025-06-17 14:55:22'),
(4, 'Design & Visual Content', 'PiPaletteBold', '2025-06-17 14:57:16', '2025-06-17 14:57:27'),
(5, 'Media Production', 'LuFileAudio', '2025-06-17 14:58:34', '2025-06-17 14:58:34'),
(6, 'Writing, Editing, & Proofing', 'LuBookOpenCheck', '2025-06-17 14:59:14', '2025-06-17 14:59:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_marketing_services_list`
--
ALTER TABLE `fbsv2_services_marketing_services_list`
  ADD PRIMARY KEY (`marketing_services_list_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_marketing_services_list`
--
ALTER TABLE `fbsv2_services_marketing_services_list`
  MODIFY `marketing_services_list_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
