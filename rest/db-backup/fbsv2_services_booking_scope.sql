-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2026 at 08:33 AM
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
-- Table structure for table `fbsv2_services_booking_scope`
--

CREATE TABLE `fbsv2_services_booking_scope` (
  `booking_scope_aid` int(11) NOT NULL,
  `booking_scope_title` varchar(100) NOT NULL,
  `booking_scope_desc` text NOT NULL,
  `booking_scope_img` text NOT NULL,
  `booking_scope_button_text` varchar(20) NOT NULL,
  `booking_scope_created` datetime NOT NULL,
  `booking_scope_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_booking_scope`
--

INSERT INTO `fbsv2_services_booking_scope` (`booking_scope_aid`, `booking_scope_title`, `booking_scope_desc`, `booking_scope_img`, `booking_scope_button_text`, `booking_scope_created`, `booking_scope_datetime`) VALUES
(1, 'Online Booking & Reservation System', '- Real-time booking and appointment scheduling\n- Calendar-based availability management\n- Instant confirmation and notifications\n- Automated booking workflows\n', '[{\"name\":\"booking (1).webp\",\"id\":\"1pbZC5wneD2o1GsrquiWekOjEHrlXRIVS\",\"datetime\":\"2026-03-23 14:45:38\"}]', 'Contact Us', '2026-03-23 14:45:34', '2026-03-23 14:48:16'),
(2, 'Admin Portal', '- Centralized dashboard for full system control\n- Manage bookings, schedules, and availability\n- Monitor transactions and booking history\n- Generate reports and analytics\n- User and role management with access control', '', 'Contact Us', '2026-03-23 14:48:55', '2026-03-23 14:48:55'),
(3, 'User Portal (Staff / Internal Team)', '- View and manage assigned bookings\n- Update booking status (Pending, Confirmed, Completed, Cancelled)\n- Access customer details and schedules\n- Real-time coordination with admin and clients\n', '', 'Contact Us', '2026-03-23 14:49:27', '2026-03-23 14:49:55'),
(4, 'Client Portal (Customer Interface)', '- Easy account registration and login\n- Book services anytime, anywhere\n- View booking history and status\n- Receive automated reminders and updates\n- Manage personal profiles', '', 'Contact Us', '2026-03-23 14:50:32', '2026-03-23 14:50:32'),
(5, 'Notifications & Alerts', '- Email and SMS notifications for bookings\n- Reminders for upcoming schedules\n- Alerts for admins and staff on new bookings\n', '', 'Contact Us', '2026-03-23 14:50:59', '2026-03-23 14:50:59'),
(6, 'Reports & Analytics', '- Booking trends and performance insights\n- Revenue and transaction reports\n- Customer activity tracking\n- Exportable reports for business analysis', '', 'Contact Us', '2026-03-23 14:51:27', '2026-03-23 14:51:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_booking_scope`
--
ALTER TABLE `fbsv2_services_booking_scope`
  ADD PRIMARY KEY (`booking_scope_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_booking_scope`
--
ALTER TABLE `fbsv2_services_booking_scope`
  MODIFY `booking_scope_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
