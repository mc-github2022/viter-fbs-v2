-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 22, 2025 at 03:46 AM
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
-- Table structure for table `fbsv2_home_titles`
--

CREATE TABLE `fbsv2_home_titles` (
  `title_aid` int(11) NOT NULL,
  `title_testimonial_a` varchar(100) NOT NULL,
  `title_testimonial_b` varchar(100) NOT NULL,
  `title_description` varchar(200) NOT NULL,
  `title_partners_a` varchar(100) NOT NULL,
  `title_partners_b` varchar(100) NOT NULL,
  `title_partners_description` varchar(200) NOT NULL,
  `title_subtitle_insights_a` varchar(100) NOT NULL,
  `title_subtitle_insights_b` varchar(100) NOT NULL,
  `title_insights` varchar(100) NOT NULL,
  `title_created` datetime NOT NULL,
  `title_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_home_titles`
--

INSERT INTO `fbsv2_home_titles` (`title_aid`, `title_testimonial_a`, `title_testimonial_b`, `title_description`, `title_partners_a`, `title_partners_b`, `title_partners_description`, `title_subtitle_insights_a`, `title_subtitle_insights_b`, `title_insights`, `title_created`, `title_datetime`) VALUES
(1, 'Our Clients\'', 'Experience', 'See what our clients say about our services and how we\'ve helped them achieve their goals.', 'They Love', 'Working With Us.', 'Explore the diverse range of clients and partners who trust us to deliver exceptional solution and services.', 'When share valuable tips and expect advice in our', 'section to help you grow your business and stay ahead.', 'Industry Insights', '2025-04-22 09:29:08', '2025-04-22 09:40:51');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_home_titles`
--
ALTER TABLE `fbsv2_home_titles`
  ADD PRIMARY KEY (`title_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_home_titles`
--
ALTER TABLE `fbsv2_home_titles`
  MODIFY `title_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
