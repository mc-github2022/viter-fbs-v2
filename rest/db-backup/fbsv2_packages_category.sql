-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 14, 2025 at 07:09 AM
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
-- Table structure for table `fbsv2_packages_category`
--

CREATE TABLE `fbsv2_packages_category` (
  `packages_category_aid` int(11) NOT NULL,
  `packages_category_list_name` varchar(100) NOT NULL,
  `packages_category_name` varchar(100) NOT NULL,
  `packages_category_url` varchar(100) NOT NULL,
  `packages_category_is_active` tinyint(1) NOT NULL,
  `packages_category_created` datetime NOT NULL,
  `packages_category_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_packages_category`
--

INSERT INTO `fbsv2_packages_category` (`packages_category_aid`, `packages_category_list_name`, `packages_category_name`, `packages_category_url`, `packages_category_is_active`, `packages_category_created`, `packages_category_datetime`) VALUES
(2, 'WEB APPLICATIONS', 'HR Information System', 'webapp-hris', 1, '2025-05-14 10:28:38', '2025-05-14 10:28:38'),
(3, 'WEB APPLICATIONS', 'Online Payroll System', 'webapp-payroll', 1, '2025-05-14 10:28:53', '2025-05-14 10:28:53'),
(4, 'WEB APPLICATIONS', 'School Enrollment System', 'webapp-enrollment', 1, '2025-05-14 10:29:37', '2025-05-14 10:31:02'),
(5, 'WEB APPLICATIONS', 'Online Payment Integration', 'webapp-onlinepayment', 1, '2025-05-14 10:31:28', '2025-05-14 10:31:28'),
(6, 'WEB APPLICATIONS', 'Online Donation System', 'webapp-onlinedonation', 1, '2025-05-14 10:31:48', '2025-05-14 10:31:48'),
(7, 'WEB APPLICATIONS', 'Asset Inventory System', 'webapp-asset-inventory', 1, '2025-05-14 10:32:12', '2025-05-14 10:32:12'),
(8, 'LEARNING CENTER SOLUTIONS', 'College On-The-Job Training', 'college-ojt', 1, '2025-05-14 10:32:35', '2025-05-14 10:32:35'),
(9, 'LEARNING CENTER SOLUTIONS', 'High School Work Immersion', 'work-immersion', 1, '2025-05-14 10:32:54', '2025-05-14 10:32:54'),
(10, 'LEARNING CENTER SOLUTIONS', 'Continuing Studies', 'continuing-studies', 1, '2025-05-14 10:33:13', '2025-05-14 10:33:13'),
(11, 'ACCOUNTING SOLUTIONS', 'Business Registration', 'accounting-business-registration', 1, '2025-05-14 10:35:18', '2025-05-14 10:35:18'),
(12, 'ACCOUNTING SOLUTIONS', 'Bookkeeping / Compliance', 'accounting-bookkeeping', 1, '2025-05-14 10:35:41', '2025-05-14 10:35:41'),
(13, 'VIRTUAL ASSISTANT SOLUTIONS', 'Administrative', 'va-administrative', 1, '2025-05-14 10:36:07', '2025-05-14 10:36:07'),
(14, 'VIRTUAL ASSISTANT SOLUTIONS', 'Business Support', 'va-business-support', 1, '2025-05-14 10:36:25', '2025-05-14 10:36:25'),
(15, 'VIRTUAL ASSISTANT SOLUTIONS', 'Marketing', 'va-marketing', 1, '2025-05-14 10:36:45', '2025-05-14 10:36:45'),
(16, 'WEB DESIGN AND DEVELOPMENT', 'WordPress CMS Website', 'web-wordpress', 1, '2025-05-14 10:37:07', '2025-05-14 10:37:07'),
(17, 'WEB DESIGN AND DEVELOPMENT', 'Single Page Website', 'web-singlepage', 1, '2025-05-14 10:37:25', '2025-05-14 10:37:25'),
(18, 'WEB DESIGN AND DEVELOPMENT', 'Web Design', 'web-design', 1, '2025-05-14 10:37:45', '2025-05-14 10:37:45');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_packages_category`
--
ALTER TABLE `fbsv2_packages_category`
  ADD PRIMARY KEY (`packages_category_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_packages_category`
--
ALTER TABLE `fbsv2_packages_category`
  MODIFY `packages_category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
