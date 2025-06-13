-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 13, 2025 at 03:30 AM
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
-- Table structure for table `fbsv2_services_continuing_overview`
--

CREATE TABLE `fbsv2_services_continuing_overview` (
  `continuing_overview_aid` int(11) NOT NULL,
  `continuing_overview_subtitle` varchar(100) NOT NULL,
  `continuing_overview_title` varchar(100) NOT NULL,
  `continuing_overview_img` text NOT NULL,
  `continuing_overview_button_text` varchar(20) NOT NULL,
  `continuing_overview_list_title_a` varchar(100) NOT NULL,
  `continuing_overview_list_description_a` varchar(500) NOT NULL,
  `continuing_overview_list_title_b` varchar(100) NOT NULL,
  `continuing_overview_list_description_b` varchar(500) NOT NULL,
  `continuing_overview_list_title_c` varchar(100) NOT NULL,
  `continuing_overview_list_description_c` varchar(500) NOT NULL,
  `continuing_overview_created` datetime NOT NULL,
  `continuing_overview_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_continuing_overview`
--

INSERT INTO `fbsv2_services_continuing_overview` (`continuing_overview_aid`, `continuing_overview_subtitle`, `continuing_overview_title`, `continuing_overview_img`, `continuing_overview_button_text`, `continuing_overview_list_title_a`, `continuing_overview_list_description_a`, `continuing_overview_list_title_b`, `continuing_overview_list_description_b`, `continuing_overview_list_title_c`, `continuing_overview_list_description_c`, `continuing_overview_created`, `continuing_overview_datetime`) VALUES
(1, 'We Offer Training for', 'Effective Skills Acquisitions.', '[{\"name\":\"continuing-studies-img.jpg\",\"id\":\"1koh2sOfzcDFbPXLluWiB5ktiINQa-IZ0\",\"datetime\":\"2025-06-13 09:25:31\"}]', 'Partner with us', 'Work-Related Experience', 'Trainees get hands-on, real-world experience, allowing them to apply knowledge in practical settings, preparing them for the demands of their future careers.', 'Expert-Led Training', 'Receive guidance and mentorship from industry experts who provide valuable insights, technical skills, and personalized support to help you excel in your chosen field.', 'Higher Employability', 'By gaining industry-aligned experience and expert training, trainees enhance their employability, making them more competitive in the job market and ready for career opportunities.', '2025-06-13 09:25:28', '2025-06-13 09:26:47');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_continuing_overview`
--
ALTER TABLE `fbsv2_services_continuing_overview`
  ADD PRIMARY KEY (`continuing_overview_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_continuing_overview`
--
ALTER TABLE `fbsv2_services_continuing_overview`
  MODIFY `continuing_overview_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
