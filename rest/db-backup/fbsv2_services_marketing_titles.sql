-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 17, 2025 at 09:34 AM
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
-- Table structure for table `fbsv2_services_marketing_titles`
--

CREATE TABLE `fbsv2_services_marketing_titles` (
  `marketing_titles_aid` int(11) NOT NULL,
  `marketing_titles_packages_subtitle` varchar(100) NOT NULL,
  `marketing_titles_packages_title` varchar(100) NOT NULL,
  `marketing_titles_partners_subtitle` varchar(100) NOT NULL,
  `marketing_titles_partners_title` varchar(100) NOT NULL,
  `marketing_titles_testimonial_subtitle` varchar(100) NOT NULL,
  `marketing_titles_testimonial_title` varchar(100) NOT NULL,
  `marketing_titles_created` datetime NOT NULL,
  `marketing_titles_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_marketing_titles`
--

INSERT INTO `fbsv2_services_marketing_titles` (`marketing_titles_aid`, `marketing_titles_packages_subtitle`, `marketing_titles_packages_title`, `marketing_titles_partners_subtitle`, `marketing_titles_partners_title`, `marketing_titles_testimonial_subtitle`, `marketing_titles_testimonial_title`, `marketing_titles_created`, `marketing_titles_datetime`) VALUES
(0, 'Choose what\'s best for your needs', 'Suitable Pricing Plans', 'Clients Who Trusted Their', 'Growth With Us.', 'What Our', 'Clients Say', '2025-06-17 15:33:35', '2025-06-17 15:34:15');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
