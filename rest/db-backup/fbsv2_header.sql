-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 21, 2025 at 08:38 AM
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
-- Table structure for table `fbsv2_header`
--

CREATE TABLE `fbsv2_header` (
  `header_aid` int(11) NOT NULL,
  `header_logo_img` text NOT NULL,
  `header_nav_a` varchar(20) NOT NULL,
  `header_nav_b` varchar(20) NOT NULL,
  `header_nav_c` varchar(20) NOT NULL,
  `header_nav_d` varchar(20) NOT NULL,
  `header_payment_link` varchar(100) NOT NULL,
  `header_button_text` varchar(20) NOT NULL,
  `header_created` datetime NOT NULL,
  `header_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_header`
--

INSERT INTO `fbsv2_header` (`header_aid`, `header_logo_img`, `header_nav_a`, `header_nav_b`, `header_nav_c`, `header_nav_d`, `header_payment_link`, `header_button_text`, `header_created`, `header_datetime`) VALUES
(1, '[{\"name\":\"logo-black.png\",\"id\":\"1RWFZKAWAA8bCQlsTsiD2Q1zDY-TYFQT9\",\"datetime\":\"2025-05-21 13:55:25\"}]', 'Home', 'Services', 'Why FBS?', 'Payment', 'https://frontlinebusiness.com.ph/payment/', 'Get started', '2025-05-21 13:55:20', '2025-05-21 14:04:40');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_header`
--
ALTER TABLE `fbsv2_header`
  ADD PRIMARY KEY (`header_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_header`
--
ALTER TABLE `fbsv2_header`
  MODIFY `header_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
