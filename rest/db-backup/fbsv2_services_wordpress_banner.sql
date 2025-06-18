-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 18, 2025 at 08:52 AM
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
-- Table structure for table `fbsv2_services_wordpress_banner`
--

CREATE TABLE `fbsv2_services_wordpress_banner` (
  `wordpress_banner_aid` int(11) NOT NULL,
  `wordpress_banner_title` varchar(100) NOT NULL,
  `wordpress_banner_title_bold` varchar(100) NOT NULL,
  `wordpress_banner_description` varchar(500) NOT NULL,
  `wordpress_banner_button_text` varchar(50) NOT NULL,
  `wordpress_banner_img` text NOT NULL,
  `wordpress_banner_created` datetime NOT NULL,
  `wordpress_banner_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_wordpress_banner`
--

INSERT INTO `fbsv2_services_wordpress_banner` (`wordpress_banner_aid`, `wordpress_banner_title`, `wordpress_banner_title_bold`, `wordpress_banner_description`, `wordpress_banner_button_text`, `wordpress_banner_img`, `wordpress_banner_created`, `wordpress_banner_datetime`) VALUES
(1, 'Website to elevate your business brand through our', 'WordPress Website', 'Build a website that reflects your unique brand and drives results. Our WordPress development services offer custom designs, seamless functionality, and responsive performance to ensure your site stands out, engages users, and supports your business growth.', 'Learn More', '[{\"name\":\"wordpress-bg.webp\",\"id\":\"1o1Pxo6lmRvhNHxVqsAHMiNCVuvLTjNJg\",\"datetime\":\"2025-06-18 14:43:59\"}]', '2025-06-18 14:43:56', '2025-06-18 14:52:06');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_wordpress_banner`
--
ALTER TABLE `fbsv2_services_wordpress_banner`
  ADD PRIMARY KEY (`wordpress_banner_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_wordpress_banner`
--
ALTER TABLE `fbsv2_services_wordpress_banner`
  MODIFY `wordpress_banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
