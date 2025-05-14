-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 14, 2025 at 08:17 AM
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
-- Table structure for table `fbsv2_packages_list`
--

CREATE TABLE `fbsv2_packages_list` (
  `packages_list_aid` int(11) NOT NULL,
  `packages_list_title` varchar(100) NOT NULL,
  `packages_list_title_desc` varchar(100) NOT NULL,
  `packages_list_price` varchar(20) NOT NULL,
  `packages_list_price_desc` varchar(100) NOT NULL,
  `packages_list_foreign_price` varchar(20) NOT NULL,
  `packages_list_foreign_price_desc` varchar(100) NOT NULL,
  `packages_list_other_details` varchar(300) NOT NULL,
  `packages_list_button_text` varchar(20) NOT NULL,
  `packages_list_is_highlighted` tinyint(1) NOT NULL,
  `packages_list_category_name_id` varchar(20) NOT NULL,
  `packages_list_is_active` tinyint(1) NOT NULL,
  `packages_list_created` datetime NOT NULL,
  `packages_list_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_packages_list`
--
ALTER TABLE `fbsv2_packages_list`
  ADD PRIMARY KEY (`packages_list_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_packages_list`
--
ALTER TABLE `fbsv2_packages_list`
  MODIFY `packages_list_aid` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
