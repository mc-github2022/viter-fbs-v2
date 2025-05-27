-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 27, 2025 at 08:04 AM
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
-- Table structure for table `fbsv2_services_asset_banner`
--

CREATE TABLE `fbsv2_services_asset_banner` (
  `asset_banner_aid` int(11) NOT NULL,
  `asset_banner_title` varchar(100) NOT NULL,
  `asset_banner_title_bold` varchar(100) NOT NULL,
  `asset_banner_description` varchar(500) NOT NULL,
  `asset_banner_button_text` varchar(50) NOT NULL,
  `asset_banner_button_link` varchar(100) NOT NULL,
  `asset_banner_img` text NOT NULL,
  `asset_banner_created` datetime NOT NULL,
  `asset_banner_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_asset_banner`
--

INSERT INTO `fbsv2_services_asset_banner` (`asset_banner_aid`, `asset_banner_title`, `asset_banner_title_bold`, `asset_banner_description`, `asset_banner_button_text`, `asset_banner_button_link`, `asset_banner_img`, `asset_banner_created`, `asset_banner_datetime`) VALUES
(1, 'Track And Manage\nAssets With Our ', 'Asset Inventory System ', 'Designed to track and manage an organization’s assets and inventory efficiently. It enables businesses to monitor stock levels, track asset locations, manage depreciation, schedule maintenance, and streamline procurement processes, optimizing resource utilization and reducing operational costs. ', 'Schedule a demo ', 'https://calendly.com/carlodm-fbs/demo-discovery-call', '[{\"name\":\"InventorySystem.webp\",\"id\":\"14sE6R9QNn9LB1v1J0ehcg2fkmwa5PfWz\",\"datetime\":\"2025-05-27 10:07:38\"}]', '2025-05-27 04:06:36', '2025-05-27 13:35:24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_asset_banner`
--
ALTER TABLE `fbsv2_services_asset_banner`
  ADD PRIMARY KEY (`asset_banner_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_asset_banner`
--
ALTER TABLE `fbsv2_services_asset_banner`
  MODIFY `asset_banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
