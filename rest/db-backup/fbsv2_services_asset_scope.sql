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
-- Table structure for table `fbsv2_services_asset_scope`
--

CREATE TABLE `fbsv2_services_asset_scope` (
  `asset_scope_aid` int(11) NOT NULL,
  `asset_scope_title` varchar(100) NOT NULL,
  `asset_scope_desc` text NOT NULL,
  `asset_scope_img` text NOT NULL,
  `asset_scope_button_text` varchar(20) NOT NULL,
  `asset_scope_created` datetime NOT NULL,
  `asset_scope_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_asset_scope`
--

INSERT INTO `fbsv2_services_asset_scope` (`asset_scope_aid`, `asset_scope_title`, `asset_scope_desc`, `asset_scope_img`, `asset_scope_button_text`, `asset_scope_created`, `asset_scope_datetime`) VALUES
(1, 'Asset Management ', 'Facilitates the tracking and management of organizational assets, including their details, locations, and status, to ensure effective utilization.', '[{\"name\":\"asset-inventory.png\",\"id\":\"1eGvRaaVwCpZjmnng09k95JV2JeYaxNng\",\"datetime\":\"2025-05-27 12:04:50\"}]', 'Contact us', '2025-05-27 12:04:46', '2025-05-27 13:43:58'),
(2, 'Asset Assignment', 'Allows for the assignment of assets to employees or departments, maintaining a clear record of asset ownership and accountability.', '[{\"name\":\"asset-assignment.png\",\"id\":\"1VXTlpI8mXiIv8kv53uln9wKX06x0BE8o\",\"datetime\":\"2025-05-27 12:05:37\"}]', 'Contact Us', '2025-05-27 12:05:34', '2025-05-27 12:05:34'),
(3, 'Settings', 'Provides customization options for system configuration to meet the specific needs of the organization and enhance the user experience.', '[{\"name\":\"asset-settings.png\",\"id\":\"13QTddegYnuhn2sXRnE_jR06Cgk9Iv0jl\",\"datetime\":\"2025-05-27 12:06:37\"}]', 'Contact Us', '2025-05-27 12:06:34', '2025-05-27 12:06:34');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_asset_scope`
--
ALTER TABLE `fbsv2_services_asset_scope`
  ADD PRIMARY KEY (`asset_scope_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_asset_scope`
--
ALTER TABLE `fbsv2_services_asset_scope`
  MODIFY `asset_scope_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
