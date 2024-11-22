-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 22, 2024 at 06:04 AM
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
-- Table structure for table `fbsv2_role`
--

CREATE TABLE `fbsv2_role` (
  `user_other_role_aid` int(11) NOT NULL,
  `user_other_role_is_active` tinyint(1) NOT NULL,
  `user_other_role_name` varchar(100) NOT NULL,
  `user_other_role_description` varchar(200) NOT NULL,
  `user_other_role_code` varchar(100) NOT NULL,
  `user_other_role_created` datetime NOT NULL,
  `user_other_role_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_role`
--

INSERT INTO `fbsv2_role` (`user_other_role_aid`, `user_other_role_is_active`, `user_other_role_name`, `user_other_role_description`, `user_other_role_code`, `user_other_role_created`, `user_other_role_datetime`) VALUES
(2, 1, 'Admin C', 'dsdssd', 'role_is_Admin C', '2024-11-22 12:47:34', '2024-11-22 12:47:34'),
(3, 1, 'Louren R', 'sdsdsd', 'role_is_louren_r', '2024-11-22 13:01:52', '2024-11-22 13:01:52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_role`
--
ALTER TABLE `fbsv2_role`
  ADD PRIMARY KEY (`user_other_role_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_role`
--
ALTER TABLE `fbsv2_role`
  MODIFY `user_other_role_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
