-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 15, 2025 at 02:52 AM
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
  `packages_list_category_name` varchar(100) NOT NULL,
  `packages_list_is_active` tinyint(1) NOT NULL,
  `packages_list_created` datetime NOT NULL,
  `packages_list_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_packages_list`
--

INSERT INTO `fbsv2_packages_list` (`packages_list_aid`, `packages_list_title`, `packages_list_title_desc`, `packages_list_price`, `packages_list_price_desc`, `packages_list_foreign_price`, `packages_list_foreign_price_desc`, `packages_list_other_details`, `packages_list_button_text`, `packages_list_is_highlighted`, `packages_list_category_name_id`, `packages_list_category_name`, `packages_list_is_active`, `packages_list_created`, `packages_list_datetime`) VALUES
(7, 'Foreign Clients', '', 'Starts at $1', 'Per Employee Per Month', '', '', '', 'Choose Plan', 0, '2', 'HR Information System', 1, '2025-05-15 08:22:41', '2025-05-15 08:49:47'),
(8, 'Philippine Clients', '', 'Starts at ₱40', 'Per Employee Per Month', '', '', '', 'Choose Plan', 1, '2', 'HR Information System', 1, '2025-05-15 08:23:24', '2025-05-15 08:23:24');

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
  MODIFY `packages_list_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
