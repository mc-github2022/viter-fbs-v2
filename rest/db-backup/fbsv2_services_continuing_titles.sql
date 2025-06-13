-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 13, 2025 at 04:14 AM
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
-- Table structure for table `fbsv2_services_continuing_titles`
--

CREATE TABLE `fbsv2_services_continuing_titles` (
  `continuing_titles_aid` int(11) NOT NULL,
  `continuing_titles_batches_subtitle` varchar(100) NOT NULL,
  `continuing_titles_batches_title` varchar(100) NOT NULL,
  `continuing_titles_vid_testimonial_subtitle` varchar(100) NOT NULL,
  `continuing_titles_vid_testimonial_title` varchar(100) NOT NULL,
  `continuing_titles_partnersays_subtitle` varchar(100) NOT NULL,
  `continuing_titles_partnersays_title` varchar(100) NOT NULL,
  `continuing_titles_created` datetime NOT NULL,
  `continuing_titles_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_continuing_titles`
--

INSERT INTO `fbsv2_services_continuing_titles` (`continuing_titles_aid`, `continuing_titles_batches_subtitle`, `continuing_titles_batches_title`, `continuing_titles_vid_testimonial_subtitle`, `continuing_titles_vid_testimonial_title`, `continuing_titles_partnersays_subtitle`, `continuing_titles_partnersays_title`, `continuing_titles_created`, `continuing_titles_datetime`) VALUES
(1, 'Professional Journey of Our', 'Successful, Industry-ready Batches', 'Here are our', 'Trainees Work Experience', 'What Our School and University', 'Partners Say', '2025-06-13 10:12:55', '2025-06-13 10:13:41');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_continuing_titles`
--
ALTER TABLE `fbsv2_services_continuing_titles`
  ADD PRIMARY KEY (`continuing_titles_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_continuing_titles`
--
ALTER TABLE `fbsv2_services_continuing_titles`
  MODIFY `continuing_titles_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
