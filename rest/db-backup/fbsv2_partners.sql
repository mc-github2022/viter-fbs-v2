-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2025 at 02:15 PM
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
-- Table structure for table `fbsv2_partners`
--

CREATE TABLE `fbsv2_partners` (
  `partners_aid` int(11) NOT NULL,
  `partners_page` varchar(100) NOT NULL,
  `partners_name` varchar(200) NOT NULL,
  `partners_img` text NOT NULL,
  `partners_created` datetime NOT NULL,
  `partners_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_partners`
--

INSERT INTO `fbsv2_partners` (`partners_aid`, `partners_page`, `partners_name`, `partners_img`, `partners_created`, `partners_datetime`) VALUES
(2, 'College On-the-job- Training', 'ACLC', '[{\"name\":\"aclc.png\",\"id\":\"1wtgaSBBfTGaOP2nCZglAwc8HelqANt5S\",\"datetime\":\"2025-03-23 21:06:33\"}]', '2025-03-23 21:06:29', '2025-03-23 21:06:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_partners`
--
ALTER TABLE `fbsv2_partners`
  ADD PRIMARY KEY (`partners_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_partners`
--
ALTER TABLE `fbsv2_partners`
  MODIFY `partners_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
