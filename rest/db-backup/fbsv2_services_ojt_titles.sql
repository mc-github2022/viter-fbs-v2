-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 04, 2025 at 08:10 AM
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
-- Table structure for table `fbsv2_services_ojt_titles`
--

CREATE TABLE `fbsv2_services_ojt_titles` (
  `ojt_titles_aid` int(11) NOT NULL,
  `ojt_titles_partners_subtitle` varchar(100) NOT NULL,
  `ojt_titles_partners_title` varchar(100) NOT NULL,
  `ojt_titles_batches_subtitle` varchar(100) NOT NULL,
  `ojt_titles_batches_title` varchar(100) NOT NULL,
  `ojt_titles_vid_testimonial_subtitle` varchar(100) NOT NULL,
  `ojt_titles_vid_testimonial_title` varchar(100) NOT NULL,
  `ojt_titles_partnersays_subtitle` varchar(100) NOT NULL,
  `ojt_titles_partnersays_title` varchar(100) NOT NULL,
  `ojt_titles_created` datetime NOT NULL,
  `ojt_titles_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_ojt_titles`
--

INSERT INTO `fbsv2_services_ojt_titles` (`ojt_titles_aid`, `ojt_titles_partners_subtitle`, `ojt_titles_partners_title`, `ojt_titles_batches_subtitle`, `ojt_titles_batches_title`, `ojt_titles_vid_testimonial_subtitle`, `ojt_titles_vid_testimonial_title`, `ojt_titles_partnersays_subtitle`, `ojt_titles_partnersays_title`, `ojt_titles_created`, `ojt_titles_datetime`) VALUES
(1, 'Our Partner', 'Schools and Universities. ', 'Professional Journey of Our', 'Successful, Industry-Ready Batches.', 'Here are our', 'Trainees Work Experience', 'What Our School and University', 'Partners Say', '2025-06-04 14:04:16', '2025-06-04 14:07:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_ojt_titles`
--
ALTER TABLE `fbsv2_services_ojt_titles`
  ADD PRIMARY KEY (`ojt_titles_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_ojt_titles`
--
ALTER TABLE `fbsv2_services_ojt_titles`
  MODIFY `ojt_titles_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
