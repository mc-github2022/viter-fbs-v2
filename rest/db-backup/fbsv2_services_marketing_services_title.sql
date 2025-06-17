-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 17, 2025 at 06:22 AM
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
-- Table structure for table `fbsv2_services_marketing_services_title`
--

CREATE TABLE `fbsv2_services_marketing_services_title` (
  `marketing_services_title_aid` int(11) NOT NULL,
  `marketing_services_title_black_a` varchar(20) NOT NULL,
  `marketing_services_title_highlighted` varchar(20) NOT NULL,
  `marketing_services_title_black_b` varchar(20) NOT NULL,
  `marketing_services_title_description` varchar(300) NOT NULL,
  `marketing_services_title_button_text` varchar(20) NOT NULL,
  `marketing_services_title_created` datetime NOT NULL,
  `marketing_services_title_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_marketing_services_title`
--

INSERT INTO `fbsv2_services_marketing_services_title` (`marketing_services_title_aid`, `marketing_services_title_black_a`, `marketing_services_title_highlighted`, `marketing_services_title_black_b`, `marketing_services_title_description`, `marketing_services_title_button_text`, `marketing_services_title_created`, `marketing_services_title_datetime`) VALUES
(1, 'What', 'Marketing Support', 'Can We Perform?', 'Our VA for Marketing Support offers comprehensive support to streamline your business operations.', 'Get Started', '2025-06-17 12:21:41', '2025-06-17 12:21:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_marketing_services_title`
--
ALTER TABLE `fbsv2_services_marketing_services_title`
  ADD PRIMARY KEY (`marketing_services_title_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_marketing_services_title`
--
ALTER TABLE `fbsv2_services_marketing_services_title`
  MODIFY `marketing_services_title_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
