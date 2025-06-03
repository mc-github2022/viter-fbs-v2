-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 03, 2025 at 09:50 AM
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
-- Table structure for table `fbsv2_services_ojt_services`
--

CREATE TABLE `fbsv2_services_ojt_services` (
  `ojt_services_aid` int(11) NOT NULL,
  `ojt_services_subtitle_a` varchar(100) NOT NULL,
  `ojt_services_subtitle_b` varchar(100) NOT NULL,
  `ojt_services_title` varchar(100) NOT NULL,
  `ojt_services_list` text NOT NULL,
  `ojt_services_icon` varchar(50) NOT NULL,
  `ojt_services_created` datetime NOT NULL,
  `ojt_services_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_ojt_services`
--

INSERT INTO `fbsv2_services_ojt_services` (`ojt_services_aid`, `ojt_services_subtitle_a`, `ojt_services_subtitle_b`, `ojt_services_title`, `ojt_services_list`, `ojt_services_icon`, `ojt_services_created`, `ojt_services_datetime`) VALUES
(1, 'Here is what you can learn in our', 'On-the-job training.', 'Web Design & Development', 'Web Designing using Figma\nWebsite Mockup Designing\nMobile Responsive Designing\nCSS & HTML Programming\nSASS Preprocessor\nScripting Languages\nTailwind CSS\nWordPress Development\nBusiness Work Ethics', 'FaLaptop', '2025-06-03 15:27:12', '2025-06-03 15:27:12'),
(5, 'Here is what you can learn in our', 'On-the-job training.', 'Accounting Processes', 'Basic Accounting\nExcel Advanced Functions\nAccounting Source Documents\nBusiness Registration\nPH & US Taxation\nPH & US Payroll\nQuickBooks\nXero\nBudget Monitoring\nFinancial Reports & Projections\nNon-Profit Accounting', 'BsCalculator', '2025-06-03 15:35:39', '2025-06-03 15:40:47');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_ojt_services`
--
ALTER TABLE `fbsv2_services_ojt_services`
  ADD PRIMARY KEY (`ojt_services_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_ojt_services`
--
ALTER TABLE `fbsv2_services_ojt_services`
  MODIFY `ojt_services_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
