-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 15, 2025 at 09:49 AM
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
-- Table structure for table `fbsv2_services_graphic_titles`
--

CREATE TABLE `fbsv2_services_graphic_titles` (
  `graphic_titles_aid` int(11) NOT NULL,
  `graphic_titles_overview_title` varchar(100) NOT NULL,
  `graphic_titles_testimonial_subtitle` varchar(100) NOT NULL,
  `graphic_titles_testimonial_title` varchar(100) NOT NULL,
  `graphic_titles_created` datetime NOT NULL,
  `graphic_titles_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_graphic_titles`
--

INSERT INTO `fbsv2_services_graphic_titles` (`graphic_titles_aid`, `graphic_titles_overview_title`, `graphic_titles_testimonial_subtitle`, `graphic_titles_testimonial_title`, `graphic_titles_created`, `graphic_titles_datetime`) VALUES
(1, 'Our Graphic Design Service Includes', 'What Our', 'Clients Say', '2025-07-15 15:19:54', '2025-07-15 15:21:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_graphic_titles`
--
ALTER TABLE `fbsv2_services_graphic_titles`
  ADD PRIMARY KEY (`graphic_titles_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_graphic_titles`
--
ALTER TABLE `fbsv2_services_graphic_titles`
  MODIFY `graphic_titles_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
