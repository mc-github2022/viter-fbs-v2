-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 25, 2024 at 06:35 AM
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
-- Table structure for table `fbsv2_user_developer`
--

CREATE TABLE `fbsv2_user_developer` (
  `user_developer_aid` int(11) NOT NULL,
  `user_developer_is_active` tinyint(1) NOT NULL,
  `user_developer_fname` varchar(50) NOT NULL,
  `user_developer_lname` varchar(50) NOT NULL,
  `user_developer_email` varchar(100) NOT NULL,
  `user_developer_email_new` varchar(100) NOT NULL,
  `user_developer_role_id` int(11) NOT NULL,
  `user_developer_key` varchar(255) NOT NULL,
  `user_developer_password` varchar(255) NOT NULL,
  `user_developer_datetime` varchar(20) NOT NULL,
  `user_developer_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_user_developer`
--

INSERT INTO `fbsv2_user_developer` (`user_developer_aid`, `user_developer_is_active`, `user_developer_fname`, `user_developer_lname`, `user_developer_email`, `user_developer_email_new`, `user_developer_role_id`, `user_developer_key`, `user_developer_password`, `user_developer_datetime`, `user_developer_created`) VALUES
(1, 1, 'Ramon', 'Plaza', 'ramon.plaza@frontlinebusiness.com.ph', 'cyrene.lumabas@frontlinebusiness.com.ph', 8, 'bc392118f3fa063536f05706f432e521dbff73e67ff41ffcb20ef0ee744c2aed', '$2y$10$kBR21Wbs.edc9GdV.lfHH.uI7p0bfQELCgyr8roR1NSmryWmmkSJ.', '2024-11-25 12:57:23', '2024-09-18 08:41:58'),
(2, 1, 'Cyrene', 'Lumabas', 'cyrenemlumabas@gmail.com', '', 8, '427b498ae4fefe83d5d0c6a52654200793db6f867838e04b9c3ac232da0bb355', '$2y$10$C0UfMAfFjt1VwuhUg4p1uurQJVG4/Tdl4eZ4uDbsuzy8ZarsLt21W', '', '2024-11-25 12:19:35');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_user_developer`
--
ALTER TABLE `fbsv2_user_developer`
  ADD PRIMARY KEY (`user_developer_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_user_developer`
--
ALTER TABLE `fbsv2_user_developer`
  MODIFY `user_developer_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
