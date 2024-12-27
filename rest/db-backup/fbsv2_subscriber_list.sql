-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 27, 2024 at 06:59 AM
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
  `subscriber_feedback` text NOT NULL,
  `subscriber_is_agree` tinyint(1) NOT NULL,
  `subscriber_created` datetime NOT NULL,
  `subscriber_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_subscriber_list`
--

INSERT INTO `fbsv2_subscriber_list` (`subscriber_aid`, `subscriber_email`, `subscriber_is_active`, `subscriber_key`, `subscriber_feedback`, `subscriber_is_agree`, `subscriber_created`, `subscriber_datetime`) VALUES
(34, 'markbumagat87@gmail.com', 1, '', '', 0, '2024-12-17 14:13:58', '2024-12-17 14:13:58'),
(93, 'lourenisobel18@gmail.com', 1, 'e5946db11518a3683af557d676c065c34f66d148c5585ab3c54cfac98cf2c0a6', '', 1, '2024-12-27 09:30:15', '2024-12-27 09:30:15');

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
  MODIFY `subscriber_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
