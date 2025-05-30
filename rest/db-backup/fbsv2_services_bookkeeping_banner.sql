-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 30, 2025 at 06:46 AM
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
-- Table structure for table `fbsv2_services_bookkeeping_banner`
--

CREATE TABLE `fbsv2_services_bookkeeping_banner` (
  `bookkeeping_banner_aid` int(11) NOT NULL,
  `bookkeeping_banner_title` varchar(100) NOT NULL,
  `bookkeeping_banner_title_bold` varchar(100) NOT NULL,
  `bookkeeping_banner_description` varchar(500) NOT NULL,
  `bookkeeping_banner_button_text` varchar(50) NOT NULL,
  `bookkeeping_banner_img` text NOT NULL,
  `bookkeeping_banner_created` datetime NOT NULL,
  `bookkeeping_banner_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_bookkeeping_banner`
--

INSERT INTO `fbsv2_services_bookkeeping_banner` (`bookkeeping_banner_aid`, `bookkeeping_banner_title`, `bookkeeping_banner_title_bold`, `bookkeeping_banner_description`, `bookkeeping_banner_button_text`, `bookkeeping_banner_img`, `bookkeeping_banner_created`, `bookkeeping_banner_datetime`) VALUES
(1, 'Keep Your Business', 'Compliant and Financially Organized', 'Our bookkeeping and business compliance services ensure hassle-free tax filings, accurate financial reporting, and adherence to government regulations. Choose from tailored packages designed to meet the needs of startups, small businesses, and corporations, and stay on top of your financial obligations with confidence.', 'Contact Us', '[{\"name\":\"bookkeeping-bg.webp\",\"id\":\"1fQ2g5CDDATbZlquKGsEXpKOZHzgs6_DI\",\"datetime\":\"2025-05-30 10:03:34\"}]', '2025-05-30 04:00:22', '2025-05-30 10:04:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_bookkeeping_banner`
--
ALTER TABLE `fbsv2_services_bookkeeping_banner`
  ADD PRIMARY KEY (`bookkeeping_banner_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_bookkeeping_banner`
--
ALTER TABLE `fbsv2_services_bookkeeping_banner`
  MODIFY `bookkeeping_banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
