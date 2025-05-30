-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 30, 2025 at 03:57 AM
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
-- Table structure for table `fbsv2_services_registration_banner`
--

CREATE TABLE `fbsv2_services_registration_banner` (
  `registration_banner_aid` int(11) NOT NULL,
  `registration_banner_title` varchar(100) NOT NULL,
  `registration_banner_title_bold` varchar(100) NOT NULL,
  `registration_banner_description` varchar(500) NOT NULL,
  `registration_banner_button_text` varchar(50) NOT NULL,
  `registration_banner_img` text NOT NULL,
  `registration_banner_created` datetime NOT NULL,
  `registration_banner_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_registration_banner`
--

INSERT INTO `fbsv2_services_registration_banner` (`registration_banner_aid`, `registration_banner_title`, `registration_banner_title_bold`, `registration_banner_description`, `registration_banner_button_text`, `registration_banner_img`, `registration_banner_created`, `registration_banner_datetime`) VALUES
(1, 'Start Your Business Hassle-Free with Our', 'Registration Services', 'Choose from our comprehensive packages that simplify the registration process for any business type. We handle everything—from essential permits to compliance documents—so you can focus on growing your business.', 'Partner with us', '[{\"name\":\"business-reg-bg.webp\",\"id\":\"1n_U2cpTFRF2DPB2oGvtYx05E0bJ31zsd\",\"datetime\":\"2025-05-30 07:55:19\"}]', '2025-05-30 07:55:10', '2025-05-30 08:41:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_registration_banner`
--
ALTER TABLE `fbsv2_services_registration_banner`
  ADD PRIMARY KEY (`registration_banner_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_registration_banner`
--
ALTER TABLE `fbsv2_services_registration_banner`
  MODIFY `registration_banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
