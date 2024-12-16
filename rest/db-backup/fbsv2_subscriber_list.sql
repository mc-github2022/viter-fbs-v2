-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 16, 2024 at 08:49 AM
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
  `subscriber_is_active` varchar(50) NOT NULL,
  `subscriber_created` datetime NOT NULL,
  `subscriber_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_subscriber_list`
--

INSERT INTO `fbsv2_subscriber_list` (`subscriber_aid`, `subscriber_email`, `subscriber_is_active`, `subscriber_created`, `subscriber_datetime`) VALUES
(19, 'markbumagat87@gmail.com', '1', '2024-12-16 15:45:26', '2024-12-16 15:45:26'),
(20, 'mc@gmail.com', '1', '2024-12-16 15:46:13', '2024-12-16 15:46:13'),
(21, 'mcbum@gmail.com', '1', '2024-12-16 15:46:47', '2024-12-16 15:46:47'),
(22, 'mbum@gmail.com', '1', '2024-12-16 15:47:53', '2024-12-16 15:47:53'),
(23, 'test@gmail.com', '1', '2024-12-16 15:48:23', '2024-12-16 15:48:23');

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
  MODIFY `subscriber_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
