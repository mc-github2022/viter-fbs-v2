-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 22, 2024 at 07:15 AM
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
-- Table structure for table `fbsv2_user_other`
--

CREATE TABLE `fbsv2_user_other` (
  `user_other_aid` int(11) NOT NULL,
  `user_other_is_active` tinyint(1) NOT NULL,
  `user_other_fname` varchar(50) NOT NULL,
  `user_other_lname` varchar(50) NOT NULL,
  `user_other_email` varchar(100) NOT NULL,
  `user_other_email_new` varchar(100) NOT NULL,
  `user_other_role_id` int(11) NOT NULL,
  `user_other_key` varchar(255) NOT NULL,
  `user_other_password` varchar(255) NOT NULL,
  `user_other_datetime` varchar(20) NOT NULL,
  `user_other_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_user_other`
--

INSERT INTO `fbsv2_user_other` (`user_other_aid`, `user_other_is_active`, `user_other_fname`, `user_other_lname`, `user_other_email`, `user_other_email_new`, `user_other_role_id`, `user_other_key`, `user_other_password`, `user_other_datetime`, `user_other_created`) VALUES
(3, 1, 'Mon', 'Plaza', 'monmon.plaza@gmail.com', '', 7, '', '$2y$10$2YZDUvknvQ1TLXvPiI.cTOa2Nww4OdKdOP8m51PNmo3PtYKkl1sNG', '', '2024-09-20 12:35:49'),
(5, 1, 'Cyrene', 'Lumabas', 'cyrene.lumabas@frontlinebusiness.com.ph', '', 7, '', '$2y$10$0TIgsoeRCR86G2HigkqFa.fWMTBGEi53H66NCdWQ9FAitIAG9wsz.', '2024-11-22 13:56:24', '2024-11-22 13:33:05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_user_other`
--
ALTER TABLE `fbsv2_user_other`
  ADD PRIMARY KEY (`user_other_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_user_other`
--
ALTER TABLE `fbsv2_user_other`
  MODIFY `user_other_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
