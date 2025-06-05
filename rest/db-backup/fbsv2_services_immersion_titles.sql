-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 05, 2025 at 09:52 AM
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
-- Table structure for table `fbsv2_services_immersion_titles`
--

CREATE TABLE `fbsv2_services_immersion_titles` (
  `immersion_titles_aid` int(11) NOT NULL,
  `immersion_titles_partners_subtitle` varchar(100) NOT NULL,
  `immersion_titles_partners_title` varchar(100) NOT NULL,
  `immersion_titles_batches_subtitle` varchar(100) NOT NULL,
  `immersion_titles_batches_title` varchar(100) NOT NULL,
  `immersion_titles_vid_testimonial_subtitle` varchar(100) NOT NULL,
  `immersion_titles_vid_testimonial_title` varchar(100) NOT NULL,
  `immersion_titles_partnersays_subtitle` varchar(100) NOT NULL,
  `immersion_titles_partnersays_title` varchar(100) NOT NULL,
  `immersion_titles_created` datetime NOT NULL,
  `immersion_titles_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_immersion_titles`
--

INSERT INTO `fbsv2_services_immersion_titles` (`immersion_titles_aid`, `immersion_titles_partners_subtitle`, `immersion_titles_partners_title`, `immersion_titles_batches_subtitle`, `immersion_titles_batches_title`, `immersion_titles_vid_testimonial_subtitle`, `immersion_titles_vid_testimonial_title`, `immersion_titles_partnersays_subtitle`, `immersion_titles_partnersays_title`, `immersion_titles_created`, `immersion_titles_datetime`) VALUES
(1, 'Our Partner', 'Educational Institutions', 'Professional Journey of Our ', 'Successful, Industry-ready Batches', 'Here are our', 'Trainees Work Experience', 'What Our School and University', 'Partners Say', '2025-06-05 14:15:18', '2025-06-05 15:49:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_immersion_titles`
--
ALTER TABLE `fbsv2_services_immersion_titles`
  ADD PRIMARY KEY (`immersion_titles_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_immersion_titles`
--
ALTER TABLE `fbsv2_services_immersion_titles`
  MODIFY `immersion_titles_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
