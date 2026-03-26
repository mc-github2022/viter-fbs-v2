-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 26, 2026 at 04:53 AM
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
-- Table structure for table `fbsv2_services_wordpress_titles`
--

CREATE TABLE `fbsv2_services_wordpress_titles` (
  `wordpress_titles_aid` int(11) NOT NULL,
  `wordpress_titles_overview_subtitle` varchar(100) NOT NULL,
  `wordpress_titles_overview_title` varchar(100) NOT NULL,
  `wordpress_titles_packages_subtitle` varchar(100) NOT NULL,
  `wordpress_titles_packages_title` varchar(100) NOT NULL,
  `wordpress_titles_partners_subtitle` varchar(100) NOT NULL,
  `wordpress_titles_partners_title` varchar(100) NOT NULL,
  `wordpress_titles_testimonial_subtitle` varchar(100) NOT NULL,
  `wordpress_titles_testimonial_title` varchar(100) NOT NULL,
  `wordpress_titles_portfolio_title` varchar(100) NOT NULL,
  `wordpress_titles_portfolio_subtitle` varchar(100) NOT NULL,
  `wordpress_titles_created` datetime NOT NULL,
  `wordpress_titles_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_wordpress_titles`
--

INSERT INTO `fbsv2_services_wordpress_titles` (`wordpress_titles_aid`, `wordpress_titles_overview_subtitle`, `wordpress_titles_overview_title`, `wordpress_titles_packages_subtitle`, `wordpress_titles_packages_title`, `wordpress_titles_partners_subtitle`, `wordpress_titles_partners_title`, `wordpress_titles_testimonial_subtitle`, `wordpress_titles_testimonial_title`, `wordpress_titles_portfolio_title`, `wordpress_titles_portfolio_subtitle`, `wordpress_titles_created`, `wordpress_titles_datetime`) VALUES
(1, 'What Makes Our Website Development ', 'a Lifesaver?', 'CMS Website development for your online branding', 'Affordable Pricing Plan', 'Clients Who Trusted Their', 'Growth With Us.', 'What Our', 'Clients Say', 'Custom-built Website', 'Seamless Performance and Stunning Design', '2025-06-19 08:45:40', '2026-03-26 09:51:41');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_wordpress_titles`
--
ALTER TABLE `fbsv2_services_wordpress_titles`
  ADD PRIMARY KEY (`wordpress_titles_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_wordpress_titles`
--
ALTER TABLE `fbsv2_services_wordpress_titles`
  MODIFY `wordpress_titles_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
