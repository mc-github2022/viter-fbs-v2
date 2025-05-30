-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 30, 2025 at 06:47 AM
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
-- Table structure for table `fbsv2_services_bookkeeping_pricing_title`
--

CREATE TABLE `fbsv2_services_bookkeeping_pricing_title` (
  `bookkeeping_title_aid` int(11) NOT NULL,
  `bookkeeping_title_packages_subtitle` varchar(100) NOT NULL,
  `bookkeeping_title_packages_title` varchar(100) NOT NULL,
  `bookkeeping_scope_title` varchar(20) NOT NULL,
  `bookkeeping_services_title_a` varchar(50) NOT NULL,
  `bookkeeping_services_list_a` varchar(500) NOT NULL,
  `bookkeeping_services_title_b` varchar(50) NOT NULL,
  `bookkeeping_services_list_b` varchar(500) NOT NULL,
  `bookkeeping_services_title_c` varchar(50) NOT NULL,
  `bookkeeping_services_list_c` varchar(500) NOT NULL,
  `bookkeeping_title_created` datetime NOT NULL,
  `bookkeeping_title_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_bookkeeping_pricing_title`
--

INSERT INTO `fbsv2_services_bookkeeping_pricing_title` (`bookkeeping_title_aid`, `bookkeeping_title_packages_subtitle`, `bookkeeping_title_packages_title`, `bookkeeping_scope_title`, `bookkeeping_services_title_a`, `bookkeeping_services_list_a`, `bookkeeping_services_title_b`, `bookkeeping_services_list_b`, `bookkeeping_services_title_c`, `bookkeeping_services_list_c`, `bookkeeping_title_created`, `bookkeeping_title_datetime`) VALUES
(1, 'Choose what\'s best for your needs', 'Suitable Pricing Plans', 'SCOPE OF SERVICES', 'MONTHLY SERVICE:', 'Bookkeeping\nMandatory Government Deductions & Contributions\nFinancial Reports\nFiling of BIR Tax Returns', 'QUARTERLY SERVICE:', 'BIR Compliance', 'ANNUAL SERVICE:', 'Renewals (Business Permit, BIR)', '2025-05-30 06:19:26', '2025-05-30 12:24:20');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_bookkeeping_pricing_title`
--
ALTER TABLE `fbsv2_services_bookkeeping_pricing_title`
  ADD PRIMARY KEY (`bookkeeping_title_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_bookkeeping_pricing_title`
--
ALTER TABLE `fbsv2_services_bookkeeping_pricing_title`
  MODIFY `bookkeeping_title_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
