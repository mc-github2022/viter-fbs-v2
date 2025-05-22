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
-- Table structure for table `fbsv2_services_payroll_scope`
--

CREATE TABLE `fbsv2_services_payroll_scope` (
  `payroll_scope_aid` int(11) NOT NULL,
  `payroll_scope_title` varchar(100) NOT NULL,
  `payroll_scope_desc` text NOT NULL,
  `payroll_scope_img` text NOT NULL,
  `payroll_scope_created` datetime NOT NULL,
  `payroll_scope_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_payroll_scope`
--

INSERT INTO `fbsv2_services_payroll_scope` (`payroll_scope_aid`, `payroll_scope_title`, `payroll_scope_desc`, `payroll_scope_img`, `payroll_scope_created`, `payroll_scope_datetime`) VALUES
(1, 'Biometric Data Import Capability', 'Our Payroll System offers a capability feature that allows seamless importing of time-in and time-out data directly from biometric systems, ensuring accurate and automated attendance tracking for payroll processing.', '[{\"name\":\"payroll-biometrics.png\",\"id\":\"1sc-xirxN1JwwUClfbk_myk6YcpFpbcPt\",\"datetime\":\"2025-05-22 17:04:41\"}]', '2025-05-22 17:04:38', '2025-05-22 17:05:02'),
(2, 'Employee Record Management', 'Our Payroll System includes an Employee Record Management feature that centralizes all essential employee information, including personal details, salary data, tax information, benefits, and employment history, within a secure digital platform.', '[{\"name\":\"payroll-employee-record.png\",\"id\":\"1ogXVF8Znh2Ldy5azTlZRGEZqm80hwiPh\",\"datetime\":\"2025-05-22 17:05:42\"}]', '2025-05-22 17:05:36', '2025-05-22 17:05:36'),
(3, 'Employee Earnings Recording', 'Our Payroll System includes an Earnings Recording feature that allows for the detailed encoding of all types of employee earnings, including regular salary, overtime, bonuses, allowances, commissions, and other compensations needed for accurate payroll computation.', '[{\"name\":\"payroll-earnings.png\",\"id\":\"1ZyFUyeJpdKch6p4_Jc1F643FxCBkVJ-l\",\"datetime\":\"2025-05-22 17:15:32\"}]', '2025-05-22 17:15:29', '2025-05-22 17:15:29'),
(4, 'Deductions Recording', 'Our Payroll System includes a Deductions Recording feature that enables the encoding of all mandatory government deductions (such as taxes, SSS, PhilHealth, and Pag-IBIG) as well as optional deductions (such as loans, benefits, and company-specific charges) required for accurate payroll computation.', '[{\"name\":\"payroll-deductions.png\",\"id\":\"1nJknRAfo_kCLfGq42wCANQ5rl3TruyCp\",\"datetime\":\"2025-05-22 17:16:01\"}]', '2025-05-22 17:15:58', '2025-05-22 17:15:58'),
(5, 'Holidays Recording', 'Our Payroll System includes a holiday recording feature that allows for the encoding of all regular and special non-working holidays, ensuring that holiday pay computations are accurate and aligned with company policies and labor regulations.', '[{\"name\":\"payroll-holiday.png\",\"id\":\"1z5pnjRuhmdRcn-FPAVLBv9x-AuIIcivd\",\"datetime\":\"2025-05-22 17:16:35\"}]', '2025-05-22 17:16:30', '2025-05-22 17:16:30'),
(6, 'User Access and Role Management', 'Our Payroll System includes a user recording feature that provides secure access control, allowing only authorized users—such as payroll officers, HR managers, and finance staff—to access and manage payroll data, ensuring data security and confidentiality.', '[{\"name\":\"payroll-user-access.png\",\"id\":\"12S6CnlXJWlpaaDqkCUgM1bltWGIpjPKk\",\"datetime\":\"2025-05-22 17:17:04\"}]', '2025-05-22 17:17:01', '2025-05-22 17:17:01'),
(7, 'Compliance Reporting Capability', 'Our Payroll System includes a Reporting feature that generates accurate and detailed reports needed for easy compliance with the requirements of government agencies such as SSS, BIR, Pag-IBIG, and PhilHealth.', '[{\"name\":\"payroll-report.png\",\"id\":\"1lsewklLWPXruXYlujST3QKrvhOmAIByS\",\"datetime\":\"2025-05-22 17:17:34\"}]', '2025-05-22 17:17:30', '2025-05-22 17:17:30');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_payroll_scope`
--
ALTER TABLE `fbsv2_services_payroll_scope`
  ADD PRIMARY KEY (`payroll_scope_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_payroll_scope`
--
ALTER TABLE `fbsv2_services_payroll_scope`
  MODIFY `payroll_scope_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
