-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 16, 2025 at 01:40 AM
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
-- Table structure for table `fbsv2_services_administrative_banner`
--

CREATE TABLE `fbsv2_services_administrative_banner` (
  `administrative_banner_aid` int(11) NOT NULL,
  `administrative_banner_title` varchar(100) NOT NULL,
  `administrative_banner_title_bold` varchar(100) NOT NULL,
  `administrative_banner_description` varchar(500) NOT NULL,
  `administrative_banner_button_text` varchar(50) NOT NULL,
  `administrative_banner_img` text NOT NULL,
  `administrative_banner_created` datetime NOT NULL,
  `administrative_banner_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_administrative_banner`
--

INSERT INTO `fbsv2_services_administrative_banner` (`administrative_banner_aid`, `administrative_banner_title`, `administrative_banner_title_bold`, `administrative_banner_description`, `administrative_banner_button_text`, `administrative_banner_img`, `administrative_banner_created`, `administrative_banner_datetime`) VALUES
(1, 'Boost Your Business Efficiency With Our', 'Administrative Assistance', 'Our Virtual Assistance Services provide reliable and efficient administrative support tailored to your needs. From managing schedules and coordinating communication to handling data, organizing documents, and supporting financial tasks, we ensure your daily operations run smoothly. Whether you need secretarial assistance, executive support, or help with project coordination, our team is here to optimize your workflow and free up your time for what matters most.', 'Partner with us', '[{\"name\":\"vabg.webp\",\"id\":\"141bXQGl7bkhh-7HQB8SbXq44TS_zmu_O\",\"datetime\":\"2025-06-16 07:39:11\"}]', '2025-06-16 07:39:05', '2025-06-16 07:39:05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_administrative_banner`
--
ALTER TABLE `fbsv2_services_administrative_banner`
  ADD PRIMARY KEY (`administrative_banner_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_administrative_banner`
--
ALTER TABLE `fbsv2_services_administrative_banner`
  MODIFY `administrative_banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
