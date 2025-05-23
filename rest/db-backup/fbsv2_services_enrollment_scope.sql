-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 23, 2025 at 07:55 AM
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
-- Table structure for table `fbsv2_services_enrollment_scope`
--

CREATE TABLE `fbsv2_services_enrollment_scope` (
  `enrollment_scope_aid` int(11) NOT NULL,
  `enrollment_scope_title` varchar(100) NOT NULL,
  `enrollment_scope_desc` text NOT NULL,
  `enrollment_scope_img` text NOT NULL,
  `enrollment_scope_button_text` varchar(20) NOT NULL,
  `enrollment_scope_created` datetime NOT NULL,
  `enrollment_scope_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_enrollment_scope`
--

INSERT INTO `fbsv2_services_enrollment_scope` (`enrollment_scope_aid`, `enrollment_scope_title`, `enrollment_scope_desc`, `enrollment_scope_img`, `enrollment_scope_button_text`, `enrollment_scope_created`, `enrollment_scope_datetime`) VALUES
(1, 'Registration and Enrollment', 'Automates the student registration and enrollment process, enabling easy online sign-ups and registration.', '[{\"name\":\"school-registration.png\",\"id\":\"1YiIL33WWzdLyjxKVBfQxnKKrflVWEZ-i\",\"datetime\":\"2025-05-23 13:14:37\"}]', 'Learn More', '2025-05-23 13:14:34', '2025-05-23 13:19:00'),
(2, 'Students Record Management', 'Maintains comprehensive student records, including personal details, enrollment status, and academic history.', '[{\"name\":\"school-student.png\",\"id\":\"1b39PsmtgUJTxUwUPedfNYUBkv_9bhfe6\",\"datetime\":\"2025-05-23 13:15:35\"}]', 'Learn More', '2025-05-23 13:15:32', '2025-05-23 13:15:32'),
(3, 'Parents Record Management', 'Maintains detailed records of parents, including contact information, student associations, and communication history, ensuring efficient parent engagement.', '[{\"name\":\"school-parent.png\",\"id\":\"1x_dEIRukBfRI1SoVOPfmdIeisnfBcrLR\",\"datetime\":\"2025-05-23 13:19:51\"}]', 'Learn More', '2025-05-23 13:19:48', '2025-05-23 13:19:48'),
(4, 'Notification of Enrollment Process', 'Notifies departments such as the registrar, principal, finance, parents, and students about the enrollment progress, including requirements and documentation for submission, ensuring smooth coordination.', '[{\"name\":\"school-notification.png\",\"id\":\"1nTv-r_9OJ_m-YTL3jAwNygdua9KyGDie\",\"datetime\":\"2025-05-23 13:20:38\"}]', 'Learn more', '2025-05-23 13:20:35', '2025-05-23 13:20:35'),
(5, 'Tuition Fee Schedule', 'Allows the admin to encode tuition details per grade level, along with discounts and payment schedules, providing easy reference for students and teachers.', '[{\"name\":\"school-tuition.png\",\"id\":\"1pudrfrZe0wG4lVaUS6cbgI_Ck7-qEkHO\",\"datetime\":\"2025-05-23 13:21:17\"}]', 'Learn More', '2025-05-23 13:21:14', '2025-05-23 13:21:14'),
(6, 'User Management', 'Manages user roles and permissions, ensuring secure access for administrators, teachers, students, and parents.', '[{\"name\":\"school-user.png\",\"id\":\"1j90ziFZQGzLN7naKscM5R8l3M_RDWQzb\",\"datetime\":\"2025-05-23 13:21:51\"}]', 'Learn More', '2025-05-23 13:21:48', '2025-05-23 13:21:48'),
(7, 'Customizable Settings', 'Provides customization options for system configuration to meet the specific needs of the institution.', '[{\"name\":\"school-setting.png\",\"id\":\"1JuboMJJce_LZtASSUvkRc4s9HDRFWZcG\",\"datetime\":\"2025-05-23 13:22:29\"}]', 'Learn More', '2025-05-23 13:22:27', '2025-05-23 13:22:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_enrollment_scope`
--
ALTER TABLE `fbsv2_services_enrollment_scope`
  ADD PRIMARY KEY (`enrollment_scope_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_enrollment_scope`
--
ALTER TABLE `fbsv2_services_enrollment_scope`
  MODIFY `enrollment_scope_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
