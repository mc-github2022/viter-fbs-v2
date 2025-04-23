-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 23, 2025 at 03:50 AM
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
-- Table structure for table `fbsv2_services_hris_banner`
--

CREATE TABLE `fbsv2_services_hris_banner` (
  `hris_banner_aid` int(11) NOT NULL,
  `hris_banner_title` varchar(100) NOT NULL,
  `hris_banner_title_bold` varchar(100) NOT NULL,
  `hris_banner_description` varchar(500) NOT NULL,
  `hris_banner_button_text` varchar(50) NOT NULL,
  `hris_banner_button_link` varchar(100) NOT NULL,
  `hris_banner_img` text NOT NULL,
  `hris_banner_created` datetime NOT NULL,
  `hris_banner_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_hris_banner`
--

INSERT INTO `fbsv2_services_hris_banner` (`hris_banner_aid`, `hris_banner_title`, `hris_banner_title_bold`, `hris_banner_description`, `hris_banner_button_text`, `hris_banner_button_link`, `hris_banner_img`, `hris_banner_created`, `hris_banner_datetime`) VALUES
(1, 'Smarter, Faster,\nand More Efficient', 'HR Information System', 'Experience seamless HR operations and make data-driven decisions that drive organizational success. Designed to centralize all HR data and workflows, our solution simplifies employee records management, leave and attendance tracking, performance evaluations, and HR analytics.', 'Schedule a demo', 'https://calendly.com/carlodm-fbs/demo-discovery-call', '[{\"name\":\"hrisbackground.webp\",\"id\":\"1FAYuEV90ZQ_V2CYi4CTdTxSxYUDiECbR\",\"datetime\":\"2025-04-23 09:26:37\"}]', '2025-04-23 09:26:29', '2025-04-23 09:50:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_hris_banner`
--
ALTER TABLE `fbsv2_services_hris_banner`
  ADD PRIMARY KEY (`hris_banner_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_hris_banner`
--
ALTER TABLE `fbsv2_services_hris_banner`
  MODIFY `hris_banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
