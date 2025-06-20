-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 20, 2025 at 07:07 AM
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
-- Table structure for table `fbsv2_services_website_banner`
--

CREATE TABLE `fbsv2_services_website_banner` (
  `website_banner_aid` int(11) NOT NULL,
  `website_banner_title` varchar(100) NOT NULL,
  `website_banner_title_bold` varchar(100) NOT NULL,
  `website_banner_description` varchar(500) NOT NULL,
  `website_banner_button_text` varchar(50) NOT NULL,
  `website_banner_img` text NOT NULL,
  `website_banner_created` datetime NOT NULL,
  `website_banner_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_website_banner`
--

INSERT INTO `fbsv2_services_website_banner` (`website_banner_aid`, `website_banner_title`, `website_banner_title_bold`, `website_banner_description`, `website_banner_button_text`, `website_banner_img`, `website_banner_created`, `website_banner_datetime`) VALUES
(1, 'Visually Stunning and\nUser-Friendly', 'Website Design', 'Our Website Designing Service offers custom, high-quality designs that reflect your brand’s identity. With expert guidance, fast delivery, and a focus on seamless user experience, we ensure your site not only looks great but also performs flawlessly across all devices.', 'Learn More', '[{\"name\":\"webdesign-bg.webp\",\"id\":\"1t9VhbHaDVroOnDKhAecKu5ugisVS8Ex2\",\"datetime\":\"2025-06-20 13:06:48\"}]', '2025-06-20 13:06:40', '2025-06-20 13:06:40');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_website_banner`
--
ALTER TABLE `fbsv2_services_website_banner`
  ADD PRIMARY KEY (`website_banner_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_website_banner`
--
ALTER TABLE `fbsv2_services_website_banner`
  MODIFY `website_banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
