-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 04, 2025 at 09:59 AM
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
-- Table structure for table `fbsv2_packages_list`
--

CREATE TABLE `fbsv2_packages_list` (
  `packages_list_aid` int(11) NOT NULL,
  `packages_list_title` varchar(100) NOT NULL,
  `packages_list_title_desc` varchar(100) NOT NULL,
  `packages_list_price` varchar(20) NOT NULL,
  `packages_list_price_desc` varchar(100) NOT NULL,
  `packages_list_foreign_price` varchar(20) NOT NULL,
  `packages_list_foreign_price_desc` varchar(100) NOT NULL,
  `packages_list_other_details` varchar(300) NOT NULL,
  `packages_list_button_text` varchar(20) NOT NULL,
  `packages_list_button_link` varchar(100) NOT NULL,
  `packages_list_is_highlighted` tinyint(1) NOT NULL,
  `packages_list_category_name_id` varchar(20) NOT NULL,
  `packages_list_category_name` varchar(100) NOT NULL,
  `packages_list_is_active` tinyint(1) NOT NULL,
  `packages_list_created` datetime NOT NULL,
  `packages_list_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_packages_list`
--

INSERT INTO `fbsv2_packages_list` (`packages_list_aid`, `packages_list_title`, `packages_list_title_desc`, `packages_list_price`, `packages_list_price_desc`, `packages_list_foreign_price`, `packages_list_foreign_price_desc`, `packages_list_other_details`, `packages_list_button_text`, `packages_list_button_link`, `packages_list_is_highlighted`, `packages_list_category_name_id`, `packages_list_category_name`, `packages_list_is_active`, `packages_list_created`, `packages_list_datetime`) VALUES
(7, 'Foreign Clients', '', 'Starts at $1', 'Per Employee Per Month', '', '', '', 'Choose Plan', '', 0, '2', 'HR Information System', 1, '2025-05-15 08:22:41', '2025-05-15 12:11:50'),
(8, 'Philippine Clients', '', 'Starts at ₱40', 'Per Employee Per Month', '', '', '', 'Choose Plan', '', 1, '2', 'HR Information System', 0, '2025-05-15 08:23:24', '2025-07-16 19:57:32'),
(20, 'Online Payroll System', '', 'Starts at ₱40', 'Per Employee Per Month', '', '', '', 'Learn More', '', 0, '3', 'Online Payroll System', 1, '2025-05-15 14:44:21', '2025-05-15 15:16:21'),
(23, 'Online School Enrollment System', '', 'Starts at ₱80K', 'price varies based on system scope', '', '', '', 'Contact Us', '', 0, '4', 'School Enrollment System', 1, '2025-05-15 15:19:27', '2025-05-15 15:19:27'),
(24, 'Online Payment Integration', '', 'Starts at ₱80K', 'price varies based on system scope', '', '', '', 'Contact Us', '', 0, '5', 'Online Payment Integration', 1, '2025-05-15 15:26:34', '2025-05-15 15:26:34'),
(25, 'International Clients', '', 'Starts at $1500', 'price varies based on system scope', '', '', '', 'Contact Us', '', 0, '6', 'Online Donation System', 0, '2025-05-15 15:39:49', '2025-07-16 20:15:01'),
(26, 'Philippine Clients', '', 'Starts at ₱80K', 'price varies based on system scope', '', '', '', 'Contact Us', '', 1, '6', 'Online Donation System', 1, '2025-05-15 15:40:22', '2025-05-15 15:40:22'),
(27, 'International Clients', '', 'Starts at $1500', 'price varies based on system scope', '', '', '', 'Contact Us', '', 0, '7', 'Asset Inventory System', 1, '2025-05-15 15:46:42', '2025-05-15 15:46:42'),
(28, 'Philippine Clients', '', 'Starts at ₱80K', 'price varies based on system scope', '', '', '', 'Contact Us', '', 1, '7', 'Asset Inventory System', 1, '2025-05-15 15:47:09', '2025-05-15 15:47:09'),
(29, 'International Clients', '', 'Starts at $750', 'WordPress CMS Website', '', '', '', 'Contact Us', '', 0, '16', 'WordPress CMS Website', 1, '2025-05-15 15:57:54', '2025-05-15 15:57:54'),
(30, 'Philippine Clients', '', 'Starts at ₱25K', 'WordPress CMS Website', '', '', '', 'Contact Us', '', 1, '16', 'WordPress CMS Website', 1, '2025-05-15 15:58:20', '2025-05-15 15:58:20'),
(31, 'International Clients', '', 'Starts at $300', 'Single Page Website', '', '', '', 'Contact Us', '', 0, '17', 'Single Page Website', 1, '2025-05-15 16:15:06', '2025-05-15 16:15:06'),
(32, 'Philippine Clients', '', 'Starts at ₱12K', 'Single Page Website', '', '', '', 'Contact Us', '', 1, '17', 'Single Page Website', 1, '2025-05-15 16:15:32', '2025-05-15 16:15:32'),
(33, 'International Clients', '', 'Starts at $400', 'Website Designing', '', '', '', 'Contact Us', '', 0, '18', 'Web Design', 1, '2025-05-15 16:28:56', '2025-05-15 16:28:56'),
(34, 'Philippine Clients', '', 'Starts at ₱20K', 'Website Designing', '', '', '', 'Contact Us', '', 1, '18', 'Web Design', 1, '2025-05-15 16:29:17', '2025-05-15 16:29:17'),
(35, 'Sole Proprietor', '', 'Local: ₱15,000', '', '', '', '', 'Choose Plan', '', 0, '11', 'Business Registration', 1, '2025-05-15 21:05:09', '2025-05-15 21:05:09'),
(36, 'One Person Corporation (OPC)', '', 'Local: ₱40,000', '', 'Foreign: ₱50,000', '', '', 'Choose Plan', '', 0, '11', 'Business Registration', 1, '2025-05-15 21:13:01', '2025-05-15 21:13:01'),
(37, 'Company Incorporation SEC Registration Only', '', 'Local: ₱25,000', '', 'Foreign: ₱30,000', '', '', 'Choose Plan', '', 0, '11', 'Business Registration', 1, '2025-05-15 21:17:49', '2025-05-15 21:17:49'),
(38, 'Company Incorporation No SEC', '', 'Local: ₱25,000', '', 'Foreign: ₱25,000', '', '', 'Choose Plan', '', 0, '11', 'Business Registration', 1, '2025-05-15 21:22:26', '2025-05-15 21:22:26'),
(39, 'Company Incorporation', '', 'Local: ₱60,000', '', 'Foreign: ₱75,000', '', '', 'Choose Plan', '', 0, '11', 'Business Registration', 1, '2025-05-15 21:32:08', '2025-05-15 21:32:08'),
(40, 'Sole Proprietor', 'Starter', '₱6,500 / Month', '', '', '', '', 'Choose Plan', '', 0, '12', 'Bookkeeping / Compliance', 1, '2025-05-15 21:45:53', '2025-05-15 21:45:53'),
(41, 'Introductory Offer for Corporations', 'Essentials', '₱12,000 / Month', '', '', '', '', 'Choose Plan', '', 1, '12', 'Bookkeeping / Compliance', 1, '2025-05-15 21:48:03', '2025-05-15 21:48:03'),
(42, 'Corporations', 'Small Business', '₱20,000 / Month', '', '', '', '', 'Choose Plan', '', 0, '12', 'Bookkeeping / Compliance', 1, '2025-05-15 21:51:14', '2025-05-15 21:51:14'),
(43, 'Corporations', 'Medium Business', '₱35,000 / Month', '', '', '', '', 'Choose Plan', '', 0, '12', 'Bookkeeping / Compliance', 1, '2025-05-15 21:55:01', '2025-05-15 22:07:02'),
(44, 'Corporations', 'Plus', '₱60,000 / Month', '', '', '', '', 'Choose Plan', '', 0, '12', 'Bookkeeping / Compliance', 1, '2025-05-15 21:59:09', '2025-05-15 22:07:13'),
(45, 'Corporations', 'Premium', '₱85,000 / Month', '', '', '', '', 'Choose Plan', '', 0, '12', 'Bookkeeping / Compliance', 1, '2025-05-15 22:08:33', '2025-05-15 22:08:33'),
(46, 'Part-Time', '', '$10 / Hour', '(20 hours per week)', '', '', 'Get dedicated virtual assistant support for half the week, perfect for business needing flexible help with task and projects without the commitment of full-time hours.', 'Choose Plan', '', 0, '13', 'Administrative', 1, '2025-05-16 09:45:06', '2025-05-16 09:45:06'),
(47, 'Full-Time', '', '$8 / Hour', '(40 hours per week)', '', '', 'Enjoy full-time virtual assistance, providing your business with consistent, reliable support to manage tasks, streamline operations, and increase productivity throughout the week at a more cost-effective rate.', 'Choose Plan', '', 1, '13', 'Administrative', 1, '2025-05-16 09:45:39', '2025-05-16 09:45:39'),
(48, 'Part-Time', '', '$10 / Hour', '(20 hours per week)', '', '', 'Get dedicated virtual assistant support for half the week, perfect for business needing flexible help with task and projects without the commitment of full-time hours.', 'Choose Plan', '', 0, '14', 'Business Support', 1, '2025-05-16 09:52:47', '2025-05-16 09:52:47'),
(49, 'Full-Time', '', '$8 / Hour', '(40 hours per week)', '', '', 'Enjoy full-time virtual assistance, providing your business with consistent, reliable support to manage tasks, streamline operations, and increase productivity throughout the week at a more cost-effective rate.', 'Choose Plan', '', 1, '14', 'Business Support', 1, '2025-05-16 09:53:23', '2025-05-16 09:53:23'),
(50, 'Part-Time', '', '$10 / Hour', '(20 hours per week)', '', '', 'Get dedicated virtual assistant support for half the week, perfect for business needing flexible help with task and projects without the commitment of full-time hours.', 'Choose Plan', '', 0, '15', 'Marketing', 1, '2025-05-16 10:01:47', '2025-05-16 10:01:47'),
(51, 'Full-Time', '', '$8 / Hour', '(40 hours per week)', '', '', 'Enjoy full-time virtual assistance, providing your business with consistent, reliable support to manage tasks, streamline operations, and increase productivity throughout the week at a more cost-effective rate.', 'Choose Plan', '', 1, '15', 'Marketing', 1, '2025-05-16 10:02:27', '2025-05-16 10:02:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_packages_list`
--
ALTER TABLE `fbsv2_packages_list`
  ADD PRIMARY KEY (`packages_list_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_packages_list`
--
ALTER TABLE `fbsv2_packages_list`
  MODIFY `packages_list_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
