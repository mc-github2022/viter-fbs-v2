-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 27, 2025 at 08:05 AM
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
-- Table structure for table `fbsv2_services_asset_overview`
--

CREATE TABLE `fbsv2_services_asset_overview` (
  `asset_overview_aid` int(11) NOT NULL,
  `asset_overview_subtitle` varchar(100) NOT NULL,
  `asset_overview_title` varchar(100) NOT NULL,
  `asset_overview_img` text NOT NULL,
  `asset_overview_button_text` varchar(20) NOT NULL,
  `asset_overview_list_title_a` varchar(100) NOT NULL,
  `asset_overview_list_description_a` varchar(500) NOT NULL,
  `asset_overview_list_title_b` varchar(100) NOT NULL,
  `asset_overview_list_description_b` varchar(500) NOT NULL,
  `asset_overview_list_title_c` varchar(100) NOT NULL,
  `asset_overview_list_description_c` varchar(500) NOT NULL,
  `asset_overview_created` datetime NOT NULL,
  `asset_overview_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_asset_overview`
--

INSERT INTO `fbsv2_services_asset_overview` (`asset_overview_aid`, `asset_overview_subtitle`, `asset_overview_title`, `asset_overview_img`, `asset_overview_button_text`, `asset_overview_list_title_a`, `asset_overview_list_description_a`, `asset_overview_list_title_b`, `asset_overview_list_description_b`, `asset_overview_list_title_c`, `asset_overview_list_description_c`, `asset_overview_created`, `asset_overview_datetime`) VALUES
(1, 'Why Choose Our', 'Asset Inventory System ', '[{\"name\":\"asset-inventory-ss.webp\",\"id\":\"1CS_QRL78fJUURRWOy28He3ygkIfSOvXE\",\"datetime\":\"2025-05-27 10:17:13\"}]', 'Learn More ', 'Improved Asset Visibility and Control', 'By maintaining detailed and organized asset records, organizations enhance visibility, streamline asset management processes, and ensure efficient utilization and maintenance of their resources.', 'Enhanced Accountability and Tracking ', 'By clearly defining asset assignments, organizations improve accountability, streamline asset tracking, and reduce loss or mismanagement of resources. ', 'Improved Decision-Making and Management ', 'By generating accurate and detailed asset reports, organizations enhance their ability to make informed decisions, optimize asset usage, and manage resources more effectively. ', '2025-05-27 10:17:10', '2025-05-27 13:40:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_asset_overview`
--
ALTER TABLE `fbsv2_services_asset_overview`
  ADD PRIMARY KEY (`asset_overview_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_asset_overview`
--
ALTER TABLE `fbsv2_services_asset_overview`
  MODIFY `asset_overview_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
