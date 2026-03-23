-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2026 at 08:32 AM
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
-- Table structure for table `fbsv2_services_booking_banner`
--

CREATE TABLE `fbsv2_services_booking_banner` (
  `booking_banner_aid` int(11) NOT NULL,
  `booking_banner_title` varchar(100) NOT NULL,
  `booking_banner_title_bold` varchar(100) NOT NULL,
  `booking_banner_description` varchar(500) NOT NULL,
  `booking_banner_button_text` varchar(50) NOT NULL,
  `booking_banner_button_link` varchar(100) NOT NULL,
  `booking_banner_img` text NOT NULL,
  `booking_banner_created` datetime NOT NULL,
  `booking_banner_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_booking_banner`
--

INSERT INTO `fbsv2_services_booking_banner` (`booking_banner_aid`, `booking_banner_title`, `booking_banner_title_bold`, `booking_banner_description`, `booking_banner_button_text`, `booking_banner_button_link`, `booking_banner_img`, `booking_banner_created`, `booking_banner_datetime`) VALUES
(1, 'Track And Manage\nBooking With Our\n', 'Online Booking System', 'Modern booking systems help businesses reduce manual processes, improve tracking, and provide real-time visibility into schedules and availability.', 'Schedule a Demo', '', '[{\"name\":\"InventorySystem.jpg\",\"id\":\"15rWtaKiKrhjLsdxdQNhgK-a5AeZ0cgZO\",\"datetime\":\"2026-03-23 14:41:44\"}]', '2026-03-23 07:35:53', '2026-03-23 14:56:17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_booking_banner`
--
ALTER TABLE `fbsv2_services_booking_banner`
  ADD PRIMARY KEY (`booking_banner_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_booking_banner`
--
ALTER TABLE `fbsv2_services_booking_banner`
  MODIFY `booking_banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
