-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 15, 2025 at 09:21 AM
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
-- Table structure for table `fbsv2_home_partner_with_us`
--

CREATE TABLE `fbsv2_home_partner_with_us` (
  `partner_with_us_aid` int(11) NOT NULL,
  `partner_with_us_subtitle` varchar(100) NOT NULL,
  `partner_with_us_title` varchar(100) NOT NULL,
  `partner_with_us_description` text NOT NULL,
  `partner_with_us_button_text` varchar(50) NOT NULL,
  `partner_with_us_img` text NOT NULL,
  `partner_with_us_created` datetime NOT NULL,
  `partner_with_us_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_home_partner_with_us`
--

INSERT INTO `fbsv2_home_partner_with_us` (`partner_with_us_aid`, `partner_with_us_subtitle`, `partner_with_us_title`, `partner_with_us_description`, `partner_with_us_button_text`, `partner_with_us_img`, `partner_with_us_created`, `partner_with_us_datetime`) VALUES
(1, 'Empowering Your Business With', 'Reliable, Cost-effective, and Expertly Managed Solutions.', 'Our talented professionals are carefully supervised by experienced management, ensuring high standards and consistent performance. Plus, we are dedicated to empowering local talent, and helping you support the community while benefiting from skilled expertise.', 'Partner with us', '[{\"name\":\"partnerWithUs.jpg\",\"id\":\"1RIaDSZqNhaVdzpCo7jxv-dqggNr-JPDx\",\"datetime\":\"2025-04-15 12:54:28\"}]', '2025-04-15 12:35:48', '2025-04-15 12:54:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_home_partner_with_us`
--
ALTER TABLE `fbsv2_home_partner_with_us`
  ADD PRIMARY KEY (`partner_with_us_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_home_partner_with_us`
--
ALTER TABLE `fbsv2_home_partner_with_us`
  MODIFY `partner_with_us_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
