-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 30, 2025 at 03:58 AM
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
-- Table structure for table `fbsv2_services_registration_pricing_title`
--

CREATE TABLE `fbsv2_services_registration_pricing_title` (
  `registration_title_aid` int(11) NOT NULL,
  `registration_title_packages_subtitle` varchar(100) NOT NULL,
  `registration_title_packages_title` varchar(100) NOT NULL,
  `registration_title_created` datetime NOT NULL,
  `registration_title_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_registration_pricing_title`
--

INSERT INTO `fbsv2_services_registration_pricing_title` (`registration_title_aid`, `registration_title_packages_subtitle`, `registration_title_packages_title`, `registration_title_created`, `registration_title_datetime`) VALUES
(1, 'Choose what\'s best for your needs', 'Suitable Pricing Plans', '2025-05-30 08:32:39', '2025-05-30 08:49:57');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_registration_pricing_title`
--
ALTER TABLE `fbsv2_services_registration_pricing_title`
  ADD PRIMARY KEY (`registration_title_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_registration_pricing_title`
--
ALTER TABLE `fbsv2_services_registration_pricing_title`
  MODIFY `registration_title_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
