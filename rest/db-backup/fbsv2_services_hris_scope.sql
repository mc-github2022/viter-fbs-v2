-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2025 at 10:16 AM
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
-- Table structure for table `fbsv2_services_hris_scope`
--

CREATE TABLE `fbsv2_services_hris_scope` (
  `hris_scope_aid` int(11) NOT NULL,
  `hris_scope_title` varchar(100) NOT NULL,
  `hris_scope_desc` text NOT NULL,
  `hris_scope_img` text NOT NULL,
  `hris_scope_created` datetime NOT NULL,
  `hris_scope_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_hris_scope`
--

INSERT INTO `fbsv2_services_hris_scope` (`hris_scope_aid`, `hris_scope_title`, `hris_scope_desc`, `hris_scope_img`, `hris_scope_created`, `hris_scope_datetime`) VALUES
(5, 'Intuitive Dashboard', 'The system offers a user-friendly dashboard that provides admins and employees with key information at a glance, including leave statuses, announcements, celebrations, team details, and new employee notifications for quick access and improved communication.', '[{\"name\":\"hris-dashboard.png\",\"id\":\"1cRCE3qcCG-Mi0oaQCkAKgvTdL4UpBszC\",\"datetime\":\"2025-05-22 14:39:06\"}]', '2025-05-22 14:39:03', '2025-05-22 15:07:02'),
(6, 'Employee 201 File', 'This allows HR teams to manage and maintain comprehensive 201 files for all employees, storing personal information, employment history, performance records, and other relevant documents in one secure and accessible location.', '[{\"name\":\"hris-employee-list.png\",\"id\":\"1bPBhibeLxmE76qxtPLVlw9uf04m9gRwJ\",\"datetime\":\"2025-05-22 14:39:51\"}]', '2025-05-22 14:39:47', '2025-05-22 14:39:47'),
(7, 'Leave Management', 'It includes a Leave Application and Approval feature that enables employees to request leaves and managers to approve or reject them through an intuitive and automated platform, streamlining the entire leave process.', '[{\"name\":\"hris-leave.png\",\"id\":\"1wPbdgW31VqHIJacEL5vlHiJPSnsyR3t2\",\"datetime\":\"2025-05-22 14:45:38\"}]', '2025-05-22 14:45:36', '2025-05-22 14:45:36'),
(8, 'Overtime Management', 'This feature tracks employee overtime hours, allowing for easy submission, approval, and monitoring of overtime requests. It ensures accurate compensation and compliance with company policies.', '[{\"name\":\"hris-overtime.png\",\"id\":\"1jK4eMALPk3uuoMTN1SufEKHh4UX6Ccb_\",\"datetime\":\"2025-05-22 14:48:57\"}]', '2025-05-22 14:48:55', '2025-05-22 14:48:55'),
(9, 'Task Management with a Timer', 'It enables employees to track time spent on various tasks and projects within the application, offering a detailed breakdown of work hours for better project management and productivity analysis.', '[{\"name\":\"hris-task-management.png\",\"id\":\"1kcl3fC-I5gmA-M-NZZ3cXM06DLQ0-tTT\",\"datetime\":\"2025-05-22 14:49:29\"}]', '2025-05-22 14:49:25', '2025-05-22 14:49:25'),
(10, 'Client Management', 'This feature helps manage and track records of clients, including maintaining client information and ensuring a smooth and organized client relationship process.', '[{\"name\":\"hris-client.png\",\"id\":\"1TdEZpYzLyPY4u3H3S29pPcfMaj6-ls2H\",\"datetime\":\"2025-05-22 14:50:25\"}]', '2025-05-22 14:50:21', '2025-05-22 14:50:21'),
(11, 'Announcement Management', 'This allows organizations to share important news, updates, and upcoming activities with employees through a centralized platform, ensuring everyone stays informed and connected across the company.', '[{\"name\":\"hris-announcement.png\",\"id\":\"10d3EpATw9qVNg4B_x_m5Cnh8AlsLWv4g\",\"datetime\":\"2025-05-22 14:50:52\"}]', '2025-05-22 14:50:49', '2025-05-22 14:50:49');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_hris_scope`
--
ALTER TABLE `fbsv2_services_hris_scope`
  ADD PRIMARY KEY (`hris_scope_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_hris_scope`
--
ALTER TABLE `fbsv2_services_hris_scope`
  MODIFY `hris_scope_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
