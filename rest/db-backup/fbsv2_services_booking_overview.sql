-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2026 at 08:34 AM
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
-- Table structure for table `fbsv2_services_booking_overview`
--

CREATE TABLE `fbsv2_services_booking_overview` (
  `booking_overview_aid` int(11) NOT NULL,
  `booking_overview_subtitle` varchar(100) NOT NULL,
  `booking_overview_title` varchar(100) NOT NULL,
  `booking_overview_img` text NOT NULL,
  `booking_overview_button_text` varchar(20) NOT NULL,
  `booking_overview_list_title_a` varchar(100) NOT NULL,
  `booking_overview_list_description_a` varchar(500) NOT NULL,
  `booking_overview_list_title_b` varchar(100) NOT NULL,
  `booking_overview_list_description_b` varchar(500) NOT NULL,
  `booking_overview_list_title_c` varchar(100) NOT NULL,
  `booking_overview_list_description_c` varchar(500) NOT NULL,
  `booking_overview_created` datetime NOT NULL,
  `booking_overview_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_booking_overview`
--

INSERT INTO `fbsv2_services_booking_overview` (`booking_overview_aid`, `booking_overview_subtitle`, `booking_overview_title`, `booking_overview_img`, `booking_overview_button_text`, `booking_overview_list_title_a`, `booking_overview_list_description_a`, `booking_overview_list_title_b`, `booking_overview_list_description_b`, `booking_overview_list_title_c`, `booking_overview_list_description_c`, `booking_overview_created`, `booking_overview_datetime`) VALUES
(1, 'Why Choose Our', 'Online Booking Web App', '[{\"name\":\"booking (1).webp\",\"id\":\"1xSq0cjWhhm1lTcYu7kJYyPYqQ4kGKTbs\",\"datetime\":\"2026-03-23 14:43:32\"}]', 'Learn More', 'All-in-One Booking Management', 'Manage your entire booking process in one centralized system—from scheduling and customer management to reporting and notifications. With dedicated Admin, User, and Client portals, your team can work more efficiently while reducing manual tasks and errors.', 'Enhanced Customer Experience', 'Provide your clients with a fast, convenient, and professional booking experience anytime, anywhere. With real-time availability, instant confirmations, and automated reminders, you ensure higher customer satisfaction and increased booking conversions.', 'Scalable and Customizable', 'Our solution is built to adapt to your unique operations—whether you\'re a small business or growing enterprise. Easily customize features, integrate with your website, and scale your system as your business expands.', '2026-03-23 14:43:28', '2026-03-23 14:44:16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_booking_overview`
--
ALTER TABLE `fbsv2_services_booking_overview`
  ADD PRIMARY KEY (`booking_overview_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_booking_overview`
--
ALTER TABLE `fbsv2_services_booking_overview`
  MODIFY `booking_overview_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
