-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 13, 2025 at 03:16 AM
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
-- Table structure for table `fbsv2_services_continuing_banner`
--

CREATE TABLE `fbsv2_services_continuing_banner` (
  `continuing_banner_aid` int(11) NOT NULL,
  `continuing_banner_title` varchar(100) NOT NULL,
  `continuing_banner_title_bold` varchar(100) NOT NULL,
  `continuing_banner_description` varchar(500) NOT NULL,
  `continuing_banner_button_text` varchar(50) NOT NULL,
  `continuing_banner_button_link` varchar(100) NOT NULL,
  `continuing_banner_img` text NOT NULL,
  `continuing_banner_created` datetime NOT NULL,
  `continuing_banner_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_continuing_banner`
--

INSERT INTO `fbsv2_services_continuing_banner` (`continuing_banner_aid`, `continuing_banner_title`, `continuing_banner_title_bold`, `continuing_banner_description`, `continuing_banner_button_text`, `continuing_banner_button_link`, `continuing_banner_img`, `continuing_banner_created`, `continuing_banner_datetime`) VALUES
(1, 'Unlock Your Potential\nwith our', 'Continuing Study Program', 'Empowering young professionals, fresh graduates, and career shifters with essential technical skills in frontend development, backend development, and accounting through hands-on training and real-world experience.', 'Schedule a meeting', 'https://calendly.com/herlyn-torres-frontlinebusiness/30min', '[{\"name\":\"continuing-studies-bg.webp\",\"id\":\"1qgF28BOt5de9_k9pO5NvV_HIVa3c2-2c\",\"datetime\":\"2025-06-13 09:13:55\"}]', '2025-06-13 09:13:49', '2025-06-13 09:15:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_continuing_banner`
--
ALTER TABLE `fbsv2_services_continuing_banner`
  ADD PRIMARY KEY (`continuing_banner_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_continuing_banner`
--
ALTER TABLE `fbsv2_services_continuing_banner`
  MODIFY `continuing_banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
