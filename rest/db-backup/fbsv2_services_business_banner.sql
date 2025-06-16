-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 16, 2025 at 06:53 AM
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
-- Table structure for table `fbsv2_services_business_banner`
--

CREATE TABLE `fbsv2_services_business_banner` (
  `business_banner_aid` int(11) NOT NULL,
  `business_banner_title` varchar(100) NOT NULL,
  `business_banner_title_bold` varchar(100) NOT NULL,
  `business_banner_description` varchar(500) NOT NULL,
  `business_banner_button_text` varchar(50) NOT NULL,
  `business_banner_img` text NOT NULL,
  `business_banner_created` datetime NOT NULL,
  `business_banner_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_business_banner`
--

INSERT INTO `fbsv2_services_business_banner` (`business_banner_aid`, `business_banner_title`, `business_banner_title_bold`, `business_banner_description`, `business_banner_button_text`, `business_banner_img`, `business_banner_created`, `business_banner_datetime`) VALUES
(1, 'Streamline your Business Operations with our', 'Business Support', 'Our Virtual Assistance Services are designed to boost your business\'s efficiency and growth through expert support in lead management, customer communication, administrative tasks, and project management. From generating leads and handling customer inquiries to managing financials, data analysis, and operational processes, we provide the essential business support you need to focus on your core activities and achieve your goals.', 'Learn More', '[{\"name\":\"research-services-bg.webp\",\"id\":\"1xaGGWWvLHBNehm4KpW4QNUdqeDP0jPMQ\",\"datetime\":\"2025-06-16 12:53:00\"}]', '2025-06-16 12:52:55', '2025-06-16 12:52:55');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_business_banner`
--
ALTER TABLE `fbsv2_services_business_banner`
  ADD PRIMARY KEY (`business_banner_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_business_banner`
--
ALTER TABLE `fbsv2_services_business_banner`
  MODIFY `business_banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
