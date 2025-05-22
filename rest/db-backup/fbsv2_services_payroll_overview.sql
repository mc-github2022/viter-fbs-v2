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
-- Table structure for table `fbsv2_services_payroll_overview`
--

CREATE TABLE `fbsv2_services_payroll_overview` (
  `payroll_overview_aid` int(11) NOT NULL,
  `payroll_overview_subtitle` varchar(100) NOT NULL,
  `payroll_overview_title` varchar(100) NOT NULL,
  `payroll_overview_img` text NOT NULL,
  `payroll_overview_list_title_a` varchar(100) NOT NULL,
  `payroll_overview_list_description_a` varchar(500) NOT NULL,
  `payroll_overview_list_title_b` varchar(100) NOT NULL,
  `payroll_overview_list_description_b` varchar(500) NOT NULL,
  `payroll_overview_list_title_c` varchar(100) NOT NULL,
  `payroll_overview_list_description_c` varchar(500) NOT NULL,
  `payroll_overview_created` datetime NOT NULL,
  `payroll_overview_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_payroll_overview`
--

INSERT INTO `fbsv2_services_payroll_overview` (`payroll_overview_aid`, `payroll_overview_subtitle`, `payroll_overview_title`, `payroll_overview_img`, `payroll_overview_list_title_a`, `payroll_overview_list_description_a`, `payroll_overview_list_title_b`, `payroll_overview_list_description_b`, `payroll_overview_list_title_c`, `payroll_overview_list_description_c`, `payroll_overview_created`, `payroll_overview_datetime`) VALUES
(1, 'Why Choose Our', 'Online Payroll System', '[{\"name\":\"payroll-ss.png\",\"id\":\"1JFiU11yjXDrC9ABTFdWIxSQ5aU0zJFsK\",\"datetime\":\"2025-05-22 17:02:07\"}]', 'Enhanced Accuracy and Reduced Errors', 'Our system automates payroll calculations, ensuring precise processing of hours worked, overtime, and deductions. This minimizes payroll disputes and errors, increasing employee satisfaction and reducing administrative workload.', 'Cost Efficiency and Compliance', 'Centralized payroll management reduces administrative costs and ensures compliance with local labor laws and tax regulations. This saves time, reduces potential penalties, and enhances trust among employees by ensuring accurate and timely compensation.', 'Secure and Transparent Payroll', 'With robust security features, our system protects sensitive employee and financial data while maintaining accurate, compliant payroll processes. This fosters trust among stakeholders by guaranteeing transparency and data protection.', '2025-05-22 17:02:04', '2025-05-22 17:03:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_payroll_overview`
--
ALTER TABLE `fbsv2_services_payroll_overview`
  ADD PRIMARY KEY (`payroll_overview_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_payroll_overview`
--
ALTER TABLE `fbsv2_services_payroll_overview`
  MODIFY `payroll_overview_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
