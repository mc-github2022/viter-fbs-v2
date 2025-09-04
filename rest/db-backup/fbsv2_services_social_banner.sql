-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 04, 2025 at 10:00 AM
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
-- Table structure for table `fbsv2_services_social_banner`
--

CREATE TABLE `fbsv2_services_social_banner` (
  `social_banner_aid` int(11) NOT NULL,
  `social_banner_title` varchar(100) NOT NULL,
  `social_banner_title_bold` varchar(100) NOT NULL,
  `social_banner_description` varchar(500) NOT NULL,
  `social_banner_button_text` varchar(50) NOT NULL,
  `social_banner_img` text NOT NULL,
  `social_banner_created` datetime NOT NULL,
  `social_banner_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_social_banner`
--

INSERT INTO `fbsv2_services_social_banner` (`social_banner_aid`, `social_banner_title`, `social_banner_title_bold`, `social_banner_description`, `social_banner_button_text`, `social_banner_img`, `social_banner_created`, `social_banner_datetime`) VALUES
(1, 'Amplify Your Brand. Engage Your Audience. Grow Your Business.', 'Social Media Management', 'Our Social Media Services help you stand out in a crowded digital world. From crafting engaging content to managing your accounts with precision, we turn your social platforms into powerful tools that attract, engage, and convert your audience.', 'Get Started', '[{\"name\":\"smm-banner-tinted.webp\",\"id\":\"19sdygfYqn9crBT4lfdp-_pF0xenJGZOU\",\"datetime\":\"2025-09-04 15:29:07\"}]', '2025-09-04 15:29:04', '2025-09-04 15:29:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_social_banner`
--
ALTER TABLE `fbsv2_services_social_banner`
  ADD PRIMARY KEY (`social_banner_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_social_banner`
--
ALTER TABLE `fbsv2_services_social_banner`
  MODIFY `social_banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
