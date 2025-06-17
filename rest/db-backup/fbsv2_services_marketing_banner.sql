-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 17, 2025 at 03:43 AM
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
-- Table structure for table `fbsv2_services_marketing_banner`
--

CREATE TABLE `fbsv2_services_marketing_banner` (
  `marketing_banner_aid` int(11) NOT NULL,
  `marketing_banner_title` varchar(100) NOT NULL,
  `marketing_banner_title_bold` varchar(100) NOT NULL,
  `marketing_banner_description` varchar(500) NOT NULL,
  `marketing_banner_button_text` varchar(50) NOT NULL,
  `marketing_banner_img` text NOT NULL,
  `marketing_banner_created` datetime NOT NULL,
  `marketing_banner_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_marketing_banner`
--

INSERT INTO `fbsv2_services_marketing_banner` (`marketing_banner_aid`, `marketing_banner_title`, `marketing_banner_title_bold`, `marketing_banner_description`, `marketing_banner_button_text`, `marketing_banner_img`, `marketing_banner_created`, `marketing_banner_datetime`) VALUES
(1, 'Boost your Online Presence Through Our', 'Marketing Support', 'Our Virtual Assistance Services cover all aspects of marketing, from crafting digital strategies and managing social media content to designing visually compelling materials and editing media. Let us help you enhance your brand’s presence with tailored solutions in digital marketing, content creation, design, media production, and writing.', 'Learn More', '[{\"name\":\"social-media-management.webp\",\"id\":\"1qLYc1iZc6WeuPp5jzjXXyUcaBJ8ObPai\",\"datetime\":\"2025-06-17 09:42:19\"}]', '2025-06-17 09:42:12', '2025-06-17 09:43:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_marketing_banner`
--
ALTER TABLE `fbsv2_services_marketing_banner`
  ADD PRIMARY KEY (`marketing_banner_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_marketing_banner`
--
ALTER TABLE `fbsv2_services_marketing_banner`
  MODIFY `marketing_banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
