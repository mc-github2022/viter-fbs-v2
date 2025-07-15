-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 15, 2025 at 08:29 AM
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
-- Table structure for table `fbsv2_services_graphic_overview`
--

CREATE TABLE `fbsv2_services_graphic_overview` (
  `graphic_overview_aid` int(11) NOT NULL,
  `graphic_overview_subtitle_a` varchar(100) NOT NULL,
  `graphic_overview_subtitle_b` varchar(100) NOT NULL,
  `graphic_overview_title` varchar(100) NOT NULL,
  `graphic_overview_img` text NOT NULL,
  `graphic_overview_button_text` varchar(20) NOT NULL,
  `graphic_overview_list_title_a` varchar(100) NOT NULL,
  `graphic_overview_list_description_a` varchar(500) NOT NULL,
  `graphic_overview_list_title_b` varchar(100) NOT NULL,
  `graphic_overview_list_description_b` varchar(500) NOT NULL,
  `graphic_overview_list_title_c` varchar(100) NOT NULL,
  `graphic_overview_list_description_c` varchar(500) NOT NULL,
  `graphic_overview_created` datetime NOT NULL,
  `graphic_overview_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_graphic_overview`
--

INSERT INTO `fbsv2_services_graphic_overview` (`graphic_overview_aid`, `graphic_overview_subtitle_a`, `graphic_overview_subtitle_b`, `graphic_overview_title`, `graphic_overview_img`, `graphic_overview_button_text`, `graphic_overview_list_title_a`, `graphic_overview_list_description_a`, `graphic_overview_list_title_b`, `graphic_overview_list_description_b`, `graphic_overview_list_title_c`, `graphic_overview_list_description_c`, `graphic_overview_created`, `graphic_overview_datetime`) VALUES
(1, 'From digital assets to print-ready materials, we deliver', 'Why Choose Our Graphic Design Service?', 'Professionally Designed Visuals', '[{\"name\":\"graphic-overview.webp\",\"id\":\"1U7S6UjWTmm19dDLDrLtwEX0jkNPB_rRm\",\"datetime\":\"2025-07-15 14:23:01\"}]', 'Learn More', 'Brand-Centered Creativity', 'We design with your identity and audience in mind—ensuring every visual element reflects who you are and what you stand for.', 'Multi-Platform Ready Designs', 'Whether it’s for social media, website graphics, or print, our designs are optimized for various platforms and formats.', 'Fast Turnaround, High Quality', 'We combine speed and precision—meeting your deadlines without compromising design quality.', '2025-07-15 14:13:33', '2025-07-15 14:22:55');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_graphic_overview`
--
ALTER TABLE `fbsv2_services_graphic_overview`
  ADD PRIMARY KEY (`graphic_overview_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_graphic_overview`
--
ALTER TABLE `fbsv2_services_graphic_overview`
  MODIFY `graphic_overview_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
