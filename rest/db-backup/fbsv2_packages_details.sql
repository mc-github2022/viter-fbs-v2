-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 19, 2025 at 08:43 AM
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
-- Table structure for table `fbsv2_packages_details`
--

CREATE TABLE `fbsv2_packages_details` (
  `packages_details_aid` int(11) NOT NULL,
  `packages_details_is_active` tinyint(1) NOT NULL,
  `packages_details_list_id` varchar(20) NOT NULL,
  `packages_details_title` varchar(200) NOT NULL,
  `packages_details_list` text NOT NULL,
  `packages_details_is_highlighted` tinyint(1) NOT NULL,
  `packages_details_created` datetime NOT NULL,
  `packages_details_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_packages_details`
--

INSERT INTO `fbsv2_packages_details` (`packages_details_aid`, `packages_details_is_active`, `packages_details_list_id`, `packages_details_title`, `packages_details_list`, `packages_details_is_highlighted`, `packages_details_created`, `packages_details_datetime`) VALUES
(2, 1, '7', 'Employee 201', '', 1, '2025-05-15 08:29:18', '2025-05-15 10:13:18'),
(3, 1, '7', 'Leave Management', '', 1, '2025-05-15 08:29:33', '2025-05-15 08:29:33'),
(4, 1, '7', 'Overtime Management', '', 1, '2025-05-15 08:29:46', '2025-05-15 08:40:30'),
(5, 1, '7', 'Task Management', '', 1, '2025-05-15 08:40:46', '2025-05-15 08:40:46'),
(6, 1, '7', 'Client Management', '', 1, '2025-05-15 08:41:02', '2025-05-15 08:41:02'),
(7, 1, '7', 'Announcement', '', 1, '2025-05-15 08:41:14', '2025-05-15 08:41:14'),
(8, 1, '8', 'Employee 201', '', 1, '2025-05-15 08:41:38', '2025-05-15 08:41:38'),
(9, 1, '8', 'Leave Management', '', 1, '2025-05-15 08:41:50', '2025-05-15 08:41:50'),
(10, 1, '8', 'Overtime Management', '', 1, '2025-05-15 08:42:14', '2025-05-15 08:42:14'),
(11, 1, '8', 'Task Management', '', 1, '2025-05-15 08:42:24', '2025-05-15 08:42:24'),
(12, 1, '8', 'Client Management', '', 1, '2025-05-15 08:42:36', '2025-05-15 08:42:36'),
(13, 1, '8', 'Announcement', '', 1, '2025-05-15 08:42:46', '2025-05-15 11:04:04'),
(19, 1, '20', 'Biometric Data Import', '', 1, '2025-05-15 14:44:43', '2025-05-15 14:44:43'),
(20, 1, '20', 'Record Management', '', 1, '2025-05-15 14:45:07', '2025-05-15 14:45:07'),
(21, 1, '20', 'Earnings Recording', '', 1, '2025-05-15 14:45:20', '2025-05-15 14:45:20'),
(22, 1, '20', 'Deduction Recording', '', 1, '2025-05-15 14:45:36', '2025-05-15 14:45:36'),
(23, 1, '20', 'Holidays Recording', '', 1, '2025-05-15 14:45:47', '2025-05-15 14:45:47'),
(24, 1, '20', 'Access and Role Management', '', 1, '2025-05-15 14:46:01', '2025-05-15 14:46:01'),
(25, 1, '20', 'Reporting', '', 1, '2025-05-15 14:46:13', '2025-05-15 15:17:00'),
(26, 1, '23', 'Online Registration', '', 1, '2025-05-15 15:21:08', '2025-05-15 15:21:08'),
(27, 1, '23', 'Student Record', '', 1, '2025-05-15 15:21:20', '2025-05-15 15:21:20'),
(28, 1, '23', 'Client/Parent Record', '', 1, '2025-05-15 15:21:29', '2025-05-15 15:21:29'),
(29, 1, '23', 'Enrollment Notification', '', 1, '2025-05-15 15:21:39', '2025-05-15 15:21:39'),
(30, 1, '23', 'Tuition Fee Schedule', '', 1, '2025-05-15 15:21:49', '2025-05-15 15:21:49'),
(31, 1, '23', 'User Management', '', 1, '2025-05-15 15:21:59', '2025-05-15 15:21:59'),
(32, 1, '23', 'Customizable Settings', '', 1, '2025-05-15 15:22:07', '2025-05-15 15:22:07'),
(33, 1, '24', 'Credit/Debit Card Payment', '', 1, '2025-05-15 15:26:48', '2025-05-15 15:26:48'),
(34, 1, '24', 'Gcash Payment', '', 1, '2025-05-15 15:27:01', '2025-05-15 15:27:01'),
(35, 1, '25', 'Admin Console', '', 1, '2025-05-15 15:41:01', '2025-05-15 15:41:01'),
(36, 1, '25', 'Donor Console', '', 1, '2025-05-15 15:41:17', '2025-05-15 15:41:17'),
(37, 1, '25', 'Donors Record Management', '', 1, '2025-05-15 15:41:44', '2025-05-15 15:41:44'),
(38, 1, '25', 'Payment Method Management', '', 1, '2025-05-15 15:41:56', '2025-05-15 15:41:56'),
(39, 1, '25', 'Donations Record', '', 1, '2025-05-15 15:42:09', '2025-05-15 15:42:09'),
(40, 1, '25', 'Donation Frequency', '', 1, '2025-05-15 15:42:20', '2025-05-15 15:42:20'),
(41, 1, '26', 'Admin Console', '', 1, '2025-05-15 15:42:41', '2025-05-15 15:42:41'),
(42, 1, '26', 'Donor Console', '', 1, '2025-05-15 15:43:15', '2025-05-15 15:43:15'),
(43, 1, '26', 'Donors Record Management', '', 1, '2025-05-15 15:43:31', '2025-05-15 15:43:31'),
(44, 1, '26', 'Payment Method Management', '', 1, '2025-05-15 15:43:41', '2025-05-15 15:43:41'),
(45, 1, '26', 'Donations Record', '', 1, '2025-05-15 15:43:56', '2025-05-15 15:43:56'),
(46, 1, '26', 'Donation Frequency', '', 1, '2025-05-15 15:44:07', '2025-05-15 15:44:07'),
(47, 1, '27', 'Asset Management', '', 1, '2025-05-15 15:47:31', '2025-05-15 15:47:31'),
(48, 1, '27', 'Assignment of Asset', '', 1, '2025-05-15 15:47:46', '2025-05-15 15:47:46'),
(49, 1, '27', 'Customizable Settings', '', 1, '2025-05-15 15:48:04', '2025-05-15 15:48:04'),
(50, 1, '28', 'Asset Management', '', 1, '2025-05-15 15:48:27', '2025-05-15 15:48:27'),
(51, 1, '28', 'Assignment of Asset', '', 1, '2025-05-15 15:48:41', '2025-05-15 15:48:41'),
(52, 1, '28', 'Customizable Settings', '', 1, '2025-05-15 15:48:53', '2025-05-15 15:48:53'),
(53, 1, '29', 'Up to 6 Web Pages', '', 1, '2025-05-15 15:58:42', '2025-05-15 15:58:42'),
(54, 1, '29', 'Responsive Web Design', '', 1, '2025-05-15 15:58:53', '2025-05-15 15:58:53'),
(55, 1, '29', 'Basic Search Engine Optimization', '', 1, '2025-05-15 15:59:15', '2025-05-15 15:59:15'),
(56, 1, '29', 'SSL Certificate', '', 1, '2025-05-15 15:59:26', '2025-05-15 15:59:26'),
(57, 1, '29', 'One (1) Year Hosting Space', '', 1, '2025-05-15 15:59:37', '2025-05-15 15:59:37'),
(58, 1, '29', 'One (1) Year Domain Name Registration', '', 1, '2025-05-15 15:59:47', '2025-05-15 15:59:47'),
(59, 1, '29', 'Two (2) Hours / Month Technical Support', '', 1, '2025-05-15 15:59:56', '2025-05-15 15:59:56'),
(60, 1, '30', 'Up to 6 Web Pages', '', 1, '2025-05-15 16:00:09', '2025-05-15 16:00:09'),
(61, 1, '30', 'Responsive Web Design', '', 1, '2025-05-15 16:00:19', '2025-05-15 16:00:19'),
(62, 1, '30', 'Basic Search Engine Optimization', '', 1, '2025-05-15 16:00:32', '2025-05-15 16:00:32'),
(63, 1, '30', 'SSL Certificate', '', 1, '2025-05-15 16:00:44', '2025-05-15 16:00:44'),
(64, 1, '30', 'One (1) Year Hosting Space', '', 1, '2025-05-15 16:00:54', '2025-05-15 16:00:54'),
(65, 1, '30', 'One (1) Year Domain Name Registration', '', 1, '2025-05-15 16:01:04', '2025-05-15 16:01:04'),
(66, 1, '30', 'Two (2) Hours / Month Technical Support', '', 1, '2025-05-15 16:01:14', '2025-05-15 16:07:42'),
(67, 1, '31', 'Up to 6 Page Sections', '', 1, '2025-05-15 16:16:03', '2025-05-15 16:16:03'),
(68, 1, '31', 'Responsive Web Design', '', 1, '2025-05-15 16:18:46', '2025-05-15 16:18:46'),
(69, 1, '31', 'Basic Search Engine Optimization', '', 1, '2025-05-15 16:19:41', '2025-05-15 16:19:41'),
(70, 1, '31', 'SSL Certificate', '', 1, '2025-05-15 16:19:51', '2025-05-15 16:19:51'),
(71, 1, '31', 'One (1) Year Hosting Space', '', 1, '2025-05-15 16:20:03', '2025-05-15 16:20:03'),
(72, 1, '31', 'One (1) Year Domain Name Registration', '', 1, '2025-05-15 16:20:13', '2025-05-15 16:20:13'),
(73, 1, '31', 'Two (2) Hours / Month Technical Support', '', 1, '2025-05-15 16:20:23', '2025-05-15 16:20:23'),
(74, 1, '32', 'Up to 6 Page Sections', '', 1, '2025-05-15 16:20:42', '2025-05-15 16:20:42'),
(75, 1, '32', 'Responsive Web Design', '', 1, '2025-05-15 16:20:53', '2025-05-15 16:20:53'),
(76, 1, '32', 'Basic Search Engine Optimization', '', 1, '2025-05-15 16:21:04', '2025-05-15 16:21:04'),
(77, 1, '32', 'SSL Certificate', '', 1, '2025-05-15 16:21:13', '2025-05-15 16:21:13'),
(78, 1, '32', 'One (1) Year Hosting Space', '', 1, '2025-05-15 16:21:24', '2025-05-15 16:21:24'),
(79, 1, '32', 'One (1) Year Domain Name Registration', '', 1, '2025-05-15 16:21:34', '2025-05-15 16:21:34'),
(80, 1, '32', 'Two (2) Hours / Month Technical Support', '', 1, '2025-05-15 16:21:54', '2025-05-15 16:21:54'),
(81, 1, '33', 'Responsive Web Design', '', 1, '2025-05-15 16:29:34', '2025-05-19 14:40:31'),
(83, 1, '33', 'Optimized Content', '', 1, '2025-05-15 16:31:43', '2025-05-15 16:31:43'),
(84, 1, '33', 'SEO Ready Design', '', 1, '2025-05-15 16:31:59', '2025-05-15 16:31:59'),
(85, 1, '33', 'Custom Design for your Branding', '', 1, '2025-05-15 16:32:06', '2025-05-15 16:32:06'),
(86, 1, '33', 'High-Quality Professional Visuals', '', 1, '2025-05-15 16:32:14', '2025-05-15 16:32:14'),
(87, 1, '34', 'Responsive Web Design', '', 1, '2025-05-15 16:32:22', '2025-05-15 16:32:22'),
(88, 1, '34', 'Shareable Figma Design', '', 1, '2025-05-15 16:32:33', '2025-05-15 16:32:33'),
(89, 1, '34', 'Optimized Content', '', 1, '2025-05-15 16:32:40', '2025-05-15 16:32:40'),
(90, 1, '34', 'SEO Ready Design', '', 1, '2025-05-15 16:32:47', '2025-05-15 16:32:47'),
(91, 1, '34', 'Custom Design for your Branding', '', 1, '2025-05-15 16:32:59', '2025-05-15 16:32:59'),
(92, 1, '34', 'High-Quality Professional Visuals', '', 1, '2025-05-15 16:33:07', '2025-05-15 16:33:07'),
(93, 1, '33', 'Shareable Figma Design', '', 1, '2025-05-15 16:35:08', '2025-05-15 16:35:08'),
(94, 1, '35', 'DTI Registration', '', 1, '2025-05-15 21:05:33', '2025-05-15 21:05:33'),
(95, 1, '35', 'BIR Registration', 'Application for \'Authority to Print\'\nBooks of Accounts\nAnnual Registration (0605)', 1, '2025-05-15 21:06:09', '2025-05-15 21:06:09'),
(96, 1, '35', 'LGU Registration', 'Barangay Permit\nMayor\'s Permit\nFire and Safety\nZoning Permit\nLocation Clearance', 1, '2025-05-15 21:11:16', '2025-05-15 21:11:16'),
(97, 1, '36', 'SEC Registration', '', 1, '2025-05-15 21:13:25', '2025-05-15 21:13:25'),
(98, 1, '36', 'BIR Registration', 'Application for \'Authority to Print\'\nBooks of Accounts\nAnnual Registration (0605)\nDST Doc Stamp for Subscribed Capital', 1, '2025-05-15 21:14:24', '2025-05-15 21:14:24'),
(99, 1, '36', 'LGU Registration', 'Barangay Permit\nMayor\'s Permit\nFire and Safety\nZoning Permit\nLocation Clearance\nInsurance (CGL)', 1, '2025-05-15 21:16:00', '2025-05-15 21:16:00'),
(100, 1, '37', 'SEC Registration', '', 1, '2025-05-15 21:18:48', '2025-05-15 21:18:48'),
(101, 1, '37', 'BIR Registration', 'Application for \'Authority to Print\'\nBooks of Accounts\nAnnual Registration (0605)', 0, '2025-05-15 21:19:24', '2025-05-15 21:19:24'),
(102, 1, '37', 'LGU Registration', 'Barangay Permit\nMayor\'s Permit\nFire and Safety\nZoning Permit\nLocation Clearance', 0, '2025-05-15 21:20:34', '2025-05-15 21:20:34'),
(103, 1, '38', 'BIR Registration', 'Application for \'Authority to Print\'\nBooks of Accounts\nAnnual Registration (0605)\nDST Doc Stamp for Subscribed Capital', 1, '2025-05-15 21:23:11', '2025-05-15 21:23:11'),
(104, 1, '38', 'LGU Registration', 'Barangay Permit\nMayor\'s Permit\nFire and Safety\nZoning Permit\nLocation Clearance\nInsurance (CGL)', 1, '2025-05-15 21:30:22', '2025-05-15 21:30:22'),
(105, 1, '39', 'SEC Registration', '', 1, '2025-05-15 21:32:24', '2025-05-15 21:32:24'),
(106, 1, '39', 'BIR Registration', 'Application for \'Authority to Print\'\nBooks of Accounts\nAnnual Registration (0605)\nDST Doc Stamp for Subscribed Capital', 1, '2025-05-15 21:33:04', '2025-05-15 21:33:04'),
(107, 1, '39', 'LGU Registration', 'Barangay Permit\nMayor\'s Permit\nFire and Safety\nZoning Permit\nLocation Clearance\nInsurance (CGL)', 1, '2025-05-15 21:33:59', '2025-05-15 21:33:59'),
(108, 1, '40', 'Up to 50 Invoices or Official Receipts (ORs) Issued (Income/Expenses)', '', 1, '2025-05-15 21:46:26', '2025-05-15 21:46:26'),
(109, 1, '40', 'Annual Revenue of up to P3,000,000', '', 1, '2025-05-15 21:46:51', '2025-05-15 21:46:51'),
(110, 1, '41', 'Up to 100 Invoices or Official Receipts (ORs) Issued (Income/Expenses)', '', 1, '2025-05-15 21:48:49', '2025-05-15 21:48:49'),
(111, 1, '41', 'Annual Revenue of up to P3,000,000', '', 1, '2025-05-15 21:49:21', '2025-05-15 21:49:21'),
(112, 1, '41', 'Filing of Tax Returns', '', 1, '2025-05-15 21:49:35', '2025-05-15 21:49:35'),
(113, 1, '41', 'Monthly Financial Reports', '', 1, '2025-05-15 21:49:50', '2025-05-15 21:49:50'),
(114, 1, '42', 'Up to 150 Invoices or Official Receipts (ORs) Issued (Income/Expenses)', '', 1, '2025-05-15 21:51:46', '2025-05-15 21:51:46'),
(115, 1, '42', 'Annual Revenue of up to P3,000,000', '', 1, '2025-05-15 21:52:04', '2025-05-15 21:52:04'),
(116, 1, '42', 'Filing of Tax Returns', '', 1, '2025-05-15 21:52:14', '2025-05-15 21:52:14'),
(117, 1, '42', 'Monthly Financial Reports', '', 1, '2025-05-15 21:52:29', '2025-05-15 21:52:29'),
(118, 1, '43', 'Up to 200 Invoices or Official Receipts (ORs) Issued (Income/Expenses)', '', 1, '2025-05-15 21:56:43', '2025-05-15 21:56:43'),
(119, 1, '43', 'Annual Revenue of up to P3,000,000', '', 1, '2025-05-15 21:57:01', '2025-05-15 21:57:01'),
(120, 1, '43', 'Filing of Tax Returns', '', 1, '2025-05-15 21:57:14', '2025-05-15 21:57:14'),
(121, 1, '43', 'Monthly Financial Reports', '', 1, '2025-05-15 21:57:29', '2025-05-15 21:57:29'),
(122, 1, '44', 'Up to 300 Invoices or Official Receipts (ORs) Issued (Income/Expenses)', '', 1, '2025-05-15 22:04:25', '2025-05-15 22:04:25'),
(123, 1, '44', 'Annual Revenue of up to P3,000,000', '', 1, '2025-05-15 22:04:35', '2025-05-15 22:04:35'),
(124, 1, '44', 'Filing of Tax Returns', '', 1, '2025-05-15 22:04:48', '2025-05-15 22:04:48'),
(125, 1, '44', 'Monthly Financial Reports', '', 1, '2025-05-15 22:05:03', '2025-05-15 22:05:03'),
(126, 1, '45', 'More than 300 Invoices or Official Receipts (ORs) Issued (Income/Expenses)', '', 1, '2025-05-15 22:09:06', '2025-05-15 22:09:06'),
(127, 1, '45', 'Annual Revenue of up to P3,000,000', '', 1, '2025-05-15 22:09:16', '2025-05-15 22:09:16'),
(128, 1, '45', 'Filing of Tax Returns', '', 1, '2025-05-15 22:09:27', '2025-05-15 22:09:27'),
(129, 1, '45', 'Monthly Financial Reports', '', 1, '2025-05-15 22:09:35', '2025-05-15 22:09:35'),
(130, 1, '46', 'Employee Records', '', 1, '2025-05-16 09:45:54', '2025-05-16 09:45:54'),
(131, 1, '46', 'Task Timer', '', 1, '2025-05-16 09:46:03', '2025-05-16 09:46:03'),
(132, 1, '46', 'Announcement', '', 1, '2025-05-16 09:46:12', '2025-05-16 09:46:12'),
(133, 1, '47', 'Employee Records', '', 1, '2025-05-16 09:46:22', '2025-05-16 09:46:22'),
(134, 1, '47', 'Task Timer', '', 1, '2025-05-16 09:46:31', '2025-05-16 09:46:31'),
(135, 1, '47', 'Announcement', '', 1, '2025-05-16 09:46:41', '2025-05-16 09:46:41'),
(136, 1, '48', 'Lead Management', '', 1, '2025-05-16 09:53:38', '2025-05-16 09:53:38'),
(137, 1, '48', 'Administrative & Financial Management', '', 1, '2025-05-16 09:53:48', '2025-05-16 09:53:48'),
(138, 1, '48', 'Operations & Project Management', '', 1, '2025-05-16 09:53:59', '2025-05-16 09:53:59'),
(139, 1, '48', 'Customer Engagement & Relationship Building', '', 1, '2025-05-16 09:54:10', '2025-05-16 09:54:10'),
(140, 1, '48', 'Customer Support & Communication', '', 1, '2025-05-16 09:54:19', '2025-05-16 09:54:19'),
(141, 1, '48', 'Data & Reporting', '', 1, '2025-05-16 09:54:27', '2025-05-16 09:54:27'),
(142, 1, '48', 'Document & Communication Management', '', 1, '2025-05-16 09:54:36', '2025-05-16 09:54:36'),
(143, 1, '49', 'Lead Management', '', 1, '2025-05-16 09:55:22', '2025-05-16 09:55:22'),
(144, 1, '49', 'Administrative & Financial Management', '', 1, '2025-05-16 09:55:32', '2025-05-16 09:55:32'),
(145, 1, '49', 'Operations & Project Management', '', 1, '2025-05-16 09:55:44', '2025-05-16 09:55:44'),
(146, 1, '49', 'Customer Engagement & Relationship Building', '', 1, '2025-05-16 09:55:53', '2025-05-16 09:55:53'),
(147, 1, '49', 'Customer Support & Communication', '', 1, '2025-05-16 09:56:02', '2025-05-16 09:56:02'),
(148, 1, '49', 'Data & Reporting', '', 1, '2025-05-16 09:56:16', '2025-05-16 09:56:16'),
(149, 1, '49', 'Document & Communication Management', '', 1, '2025-05-16 09:56:25', '2025-05-16 09:56:25'),
(150, 1, '50', 'Digital Marketing & Strategy', '', 1, '2025-05-16 10:02:43', '2025-05-16 10:02:43'),
(151, 1, '50', 'Design & Visual Content', '', 1, '2025-05-16 10:02:52', '2025-05-16 10:02:52'),
(152, 1, '50', 'Writing, Editing, & Proofing', '', 1, '2025-05-16 10:03:03', '2025-05-16 10:03:03'),
(153, 1, '50', 'Content Creation & Management', '', 1, '2025-05-16 10:03:12', '2025-05-16 10:03:12'),
(154, 1, '50', 'Media Production', '', 1, '2025-05-16 10:03:22', '2025-05-16 10:03:22'),
(155, 1, '51', 'Digital Marketing & Strategy', '', 1, '2025-05-16 10:03:34', '2025-05-16 10:03:34'),
(156, 1, '51', 'Design & Visual Content', '', 1, '2025-05-16 10:03:43', '2025-05-16 10:03:43'),
(157, 1, '51', 'Writing, Editing, & Proofing', '', 1, '2025-05-16 10:03:51', '2025-05-16 10:03:51'),
(158, 1, '51', 'Content Creation & Management', '', 1, '2025-05-16 10:04:01', '2025-05-16 10:04:01'),
(159, 1, '51', 'Media Production', '', 1, '2025-05-16 10:04:10', '2025-05-16 10:04:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_packages_details`
--
ALTER TABLE `fbsv2_packages_details`
  ADD PRIMARY KEY (`packages_details_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_packages_details`
--
ALTER TABLE `fbsv2_packages_details`
  MODIFY `packages_details_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=160;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
