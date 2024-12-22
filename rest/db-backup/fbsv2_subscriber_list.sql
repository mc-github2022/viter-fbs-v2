-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 20, 2024 at 09:02 AM
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
  `subscriber_is_active` tinyint(1) NOT NULL,
  `subscriber_key` varchar(255) NOT NULL,
  `subscriber_email_new` varchar(200) NOT NULL,
  `subscriber_feedback` text NOT NULL,
  `subscriber_created` datetime NOT NULL,
  `subscriber_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_subscriber_list`
--

INSERT INTO `fbsv2_subscriber_list` (`subscriber_aid`, `subscriber_email`, `subscriber_is_active`, `subscriber_key`, `subscriber_email_new`, `subscriber_feedback`, `subscriber_created`, `subscriber_datetime`) VALUES
(20, 'mc@gmail.com', 1, '', '', '', '2024-12-16 15:46:13', '2024-12-16 15:46:13'),
(22, 'mbum@gmail.com', 1, '', '', '', '2024-12-16 15:47:53', '2024-12-16 15:47:53'),
(23, 'test@gmail.com', 1, '', '', '', '2024-12-16 15:48:23', '2024-12-16 15:48:23'),
(24, 'louren@gmail.com', 1, '', '', '', '2024-12-17 08:12:50', '2024-12-17 08:12:50'),
(25, 'isobel@gmail.com', 1, '', '', '', '2024-12-17 08:19:02', '2024-12-17 12:59:46'),
(27, 'lo@gmail.coms', 1, '', '', '', '2024-12-17 10:57:38', '2024-12-17 10:57:59'),
(34, 'markbumagat87@gmail.com', 1, '', '', '', '2024-12-17 14:13:58', '2024-12-17 14:13:58'),
(64, 'lourenisobel18@gmail.com', 1, 'fc5e4206a135fe197f40d205bbed7473ec73f7a196c9d3bba9587827182c2c5b', '', '', '2024-12-20 13:28:26', '2024-12-20 13:28:26');

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
  MODIFY `subscriber_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
