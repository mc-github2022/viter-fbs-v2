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
-- Table structure for table `fbsv2_services_bookkeeping_overview`
--

CREATE TABLE `fbsv2_services_bookkeeping_overview` (
  `bookkeeping_overview_aid` int(11) NOT NULL,
  `bookkeeping_overview_subtitle` varchar(100) NOT NULL,
  `bookkeeping_overview_title` varchar(100) NOT NULL,
  `bookkeeping_overview_img` text NOT NULL,
  `bookkeeping_overview_list_title_a` varchar(100) NOT NULL,
  `bookkeeping_overview_list_description_a` varchar(500) NOT NULL,
  `bookkeeping_overview_list_title_b` varchar(100) NOT NULL,
  `bookkeeping_overview_list_description_b` varchar(500) NOT NULL,
  `bookkeeping_overview_list_title_c` varchar(100) NOT NULL,
  `bookkeeping_overview_list_description_c` varchar(500) NOT NULL,
  `bookkeeping_overview_created` datetime NOT NULL,
  `bookkeeping_overview_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_bookkeeping_overview`
--

INSERT INTO `fbsv2_services_bookkeeping_overview` (`bookkeeping_overview_aid`, `bookkeeping_overview_subtitle`, `bookkeeping_overview_title`, `bookkeeping_overview_img`, `bookkeeping_overview_list_title_a`, `bookkeeping_overview_list_description_a`, `bookkeeping_overview_list_title_b`, `bookkeeping_overview_list_description_b`, `bookkeeping_overview_list_title_c`, `bookkeeping_overview_list_description_c`, `bookkeeping_overview_created`, `bookkeeping_overview_datetime`) VALUES
(1, 'Here\'s Why We\'re The', 'Right Choice for Your Bookkeeping & Business Compliance needs.', '[{\"name\":\"bookkeeping-img.jpg\",\"id\":\"1xIgFH02EV5LMfyl2xPinZ2P3C8nEg4YA\",\"datetime\":\"2025-05-30 10:10:51\"}]', 'Comprehensive Compliance Management', 'Our services ensure compliance with all regulatory requirements, including BIR tax filings, government-mandated contributions (SSS, Pag-IBIG, PhilHealth), and business permit renewals.', 'Flexible Packages for All Business Sizes', 'We offer tailored packages for startups, small businesses, and corporations, with pricing based on your invoice volume and revenue. Choose the level of support that fits your needs, from basic bookkeeping to premium compliance services.', 'Accurate Financial Reporting', 'Receive regular, detailed financial reports that provide a clear overview of your business\'s financial health, helping you make informed decisions and stay up-to-date with tax obligations.', '2025-05-30 10:10:48', '2025-05-30 10:12:23');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_bookkeeping_overview`
--
ALTER TABLE `fbsv2_services_bookkeeping_overview`
  ADD PRIMARY KEY (`bookkeeping_overview_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_bookkeeping_overview`
--
ALTER TABLE `fbsv2_services_bookkeeping_overview`
  MODIFY `bookkeeping_overview_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
