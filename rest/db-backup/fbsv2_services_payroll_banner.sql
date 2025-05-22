-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2025 at 11:20 AM
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
-- Table structure for table `fbsv2_services_payroll_banner`
--

CREATE TABLE `fbsv2_services_payroll_banner` (
  `payroll_banner_aid` int(11) NOT NULL,
  `payroll_banner_title` varchar(100) NOT NULL,
  `payroll_banner_title_bold` varchar(100) NOT NULL,
  `payroll_banner_description` varchar(500) NOT NULL,
  `payroll_banner_button_text` varchar(50) NOT NULL,
  `payroll_banner_button_link` varchar(100) NOT NULL,
  `payroll_banner_img` text NOT NULL,
  `payroll_banner_created` datetime NOT NULL,
  `payroll_banner_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_payroll_banner`
--

INSERT INTO `fbsv2_services_payroll_banner` (`payroll_banner_aid`, `payroll_banner_title`, `payroll_banner_title_bold`, `payroll_banner_description`, `payroll_banner_button_text`, `payroll_banner_button_link`, `payroll_banner_img`, `payroll_banner_created`, `payroll_banner_datetime`) VALUES
(1, 'Simplify Your Payroll Processing With Our', 'Online Payroll System', 'Our Online Payroll System simplifies payroll management for Philippine businesses by automating salary calculations, tax compliance, and government contributions, ensuring accuracy and timely payouts. With real-time reporting and employee self-service access to payslips, it reduces HR workload and boosts efficiency.', 'Schedule a demo', 'https://calendly.com/carlodm-fbs/demo-discovery-call', '[{\"name\":\"servicesbanner.webp\",\"id\":\"1o9HIJsu2UNt1_pp6uO9RmFxH1ivNaSZn\",\"datetime\":\"2025-05-22 17:00:13\"}]', '2025-05-22 10:40:01', '2025-05-22 17:00:09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_payroll_banner`
--
ALTER TABLE `fbsv2_services_payroll_banner`
  ADD PRIMARY KEY (`payroll_banner_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_payroll_banner`
--
ALTER TABLE `fbsv2_services_payroll_banner`
  MODIFY `payroll_banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
