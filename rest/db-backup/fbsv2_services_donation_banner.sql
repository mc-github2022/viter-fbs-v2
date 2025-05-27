-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 27, 2025 at 03:35 AM
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
-- Table structure for table `fbsv2_services_donation_banner`
--

CREATE TABLE `fbsv2_services_donation_banner` (
  `donation_banner_aid` int(11) NOT NULL,
  `donation_banner_title` varchar(100) NOT NULL,
  `donation_banner_title_bold` varchar(100) NOT NULL,
  `donation_banner_description` varchar(500) NOT NULL,
  `donation_banner_button_text` varchar(50) NOT NULL,
  `donation_banner_img` text NOT NULL,
  `donation_banner_created` datetime NOT NULL,
  `donation_banner_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_donation_banner`
--

INSERT INTO `fbsv2_services_donation_banner` (`donation_banner_aid`, `donation_banner_title`, `donation_banner_title_bold`, `donation_banner_description`, `donation_banner_button_text`, `donation_banner_img`, `donation_banner_created`, `donation_banner_datetime`) VALUES
(1, 'Streamline Donations Securely With Our', 'Online Donation System', 'The Online Donation System is a versatile and integrated platform designed to facilitate and manage donations across various client websites. This system supports both one-time and recurring donations for specific projects as well as general donation funds. It includes comprehensive management consoles for both administrators and donors, ensuring a seamless and efficient donation process.', 'Contact Us', '[{\"name\":\"onlinedonation.webp\",\"id\":\"1YVmRsExrt05_0xU74-itodkwMdMofYoz\",\"datetime\":\"2025-05-26 15:22:09\"}]', '2025-05-26 09:21:07', '2025-05-27 09:08:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_donation_banner`
--
ALTER TABLE `fbsv2_services_donation_banner`
  ADD PRIMARY KEY (`donation_banner_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_donation_banner`
--
ALTER TABLE `fbsv2_services_donation_banner`
  MODIFY `donation_banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
