-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 20, 2025 at 08:38 AM
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
-- Table structure for table `fbsv2_services_website_titles`
--

CREATE TABLE `fbsv2_services_website_titles` (
  `website_titles_aid` int(11) NOT NULL,
  `website_titles_overview_subtitle` varchar(100) NOT NULL,
  `website_titles_overview_title` varchar(100) NOT NULL,
  `website_titles_packages_subtitle` varchar(100) NOT NULL,
  `website_titles_packages_title` varchar(100) NOT NULL,
  `website_titles_partners_subtitle` varchar(100) NOT NULL,
  `website_titles_partners_title` varchar(100) NOT NULL,
  `website_titles_testimonial_subtitle` varchar(100) NOT NULL,
  `website_titles_testimonial_title` varchar(100) NOT NULL,
  `website_titles_created` datetime NOT NULL,
  `website_titles_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_website_titles`
--

INSERT INTO `fbsv2_services_website_titles` (`website_titles_aid`, `website_titles_overview_subtitle`, `website_titles_overview_title`, `website_titles_packages_subtitle`, `website_titles_packages_title`, `website_titles_partners_subtitle`, `website_titles_partners_title`, `website_titles_testimonial_subtitle`, `website_titles_testimonial_title`, `website_titles_created`, `website_titles_datetime`) VALUES
(1, 'What Makes This Web App', 'a Lifesaver?', 'Website designing for your online branding', 'Affordable Pricing Plan', 'Clients Who Trusted Their', 'Growth With Us.', 'What Our', 'Clients Say', '2025-06-20 14:37:17', '2025-06-20 14:38:12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_website_titles`
--
ALTER TABLE `fbsv2_services_website_titles`
  ADD PRIMARY KEY (`website_titles_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_website_titles`
--
ALTER TABLE `fbsv2_services_website_titles`
  MODIFY `website_titles_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
