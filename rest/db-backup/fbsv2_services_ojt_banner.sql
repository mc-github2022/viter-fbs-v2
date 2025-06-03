-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 03, 2025 at 09:50 AM
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
-- Table structure for table `fbsv2_services_ojt_banner`
--

CREATE TABLE `fbsv2_services_ojt_banner` (
  `ojt_banner_aid` int(11) NOT NULL,
  `ojt_banner_title` varchar(100) NOT NULL,
  `ojt_banner_title_bold` varchar(100) NOT NULL,
  `ojt_banner_description` varchar(500) NOT NULL,
  `ojt_banner_button_text` varchar(50) NOT NULL,
  `ojt_banner_button_link` varchar(100) NOT NULL,
  `ojt_banner_img` text NOT NULL,
  `ojt_banner_created` datetime NOT NULL,
  `ojt_banner_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_ojt_banner`
--

INSERT INTO `fbsv2_services_ojt_banner` (`ojt_banner_aid`, `ojt_banner_title`, `ojt_banner_title_bold`, `ojt_banner_description`, `ojt_banner_button_text`, `ojt_banner_button_link`, `ojt_banner_img`, `ojt_banner_created`, `ojt_banner_datetime`) VALUES
(1, 'with industry experience practical, work-related skills', 'College On-the-job', 'Partner with us for cutting-edge on-the-job training programs that equip aspiring IT and Accounting professionals with real-world skills, bridging academic learning with practical workplace experience. Our program can accommodate students with required internship hours ranging from 150 to 600, ensuring flexibility and comprehensive skills development.', 'Schedule A Meeting', 'https://calendly.com/herlyn-torres-frontlinebusiness/30min', '[{\"name\":\"college-ojt-bg.webp\",\"id\":\"19KFOiohRAb2K9b_E7AjCn-Xymwleq-SF\",\"datetime\":\"2025-06-03 13:05:33\"}]', '2025-06-03 06:53:21', '2025-06-03 13:05:26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_ojt_banner`
--
ALTER TABLE `fbsv2_services_ojt_banner`
  ADD PRIMARY KEY (`ojt_banner_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_ojt_banner`
--
ALTER TABLE `fbsv2_services_ojt_banner`
  MODIFY `ojt_banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
