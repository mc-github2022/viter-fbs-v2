-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 24, 2025 at 03:09 AM
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
-- Table structure for table `fbsv2_work_profile`
--

CREATE TABLE `fbsv2_work_profile` (
  `work_profile_aid` int(11) NOT NULL,
  `work_profile_desc` varchar(500) NOT NULL,
  `work_profile_subtitle` varchar(100) NOT NULL,
  `work_profile_title` varchar(100) NOT NULL,
  `work_profile_img` text NOT NULL,
  `work_profile_file` text NOT NULL,
  `work_profile_button_text` varchar(20) NOT NULL,
  `work_profile_list_title_bold_a` varchar(100) NOT NULL,
  `work_profile_list_title_a` varchar(100) NOT NULL,
  `work_profile_list_description_a` varchar(500) NOT NULL,
  `work_profile_list_title_bold_b` varchar(100) NOT NULL,
  `work_profile_list_title_b` varchar(100) NOT NULL,
  `work_profile_list_description_b` varchar(500) NOT NULL,
  `work_profile_list_title_bold_c` varchar(100) NOT NULL,
  `work_profile_list_title_c` varchar(100) NOT NULL,
  `work_profile_list_description_c` varchar(500) NOT NULL,
  `work_profile_list_title_bold_d` varchar(100) NOT NULL,
  `work_profile_list_title_d` varchar(100) NOT NULL,
  `work_profile_list_description_d` varchar(500) NOT NULL,
  `work_profile_created` datetime NOT NULL,
  `work_profile_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_work_profile`
--

INSERT INTO `fbsv2_work_profile` (`work_profile_aid`, `work_profile_desc`, `work_profile_subtitle`, `work_profile_title`, `work_profile_img`, `work_profile_file`, `work_profile_button_text`, `work_profile_list_title_bold_a`, `work_profile_list_title_a`, `work_profile_list_description_a`, `work_profile_list_title_bold_b`, `work_profile_list_title_b`, `work_profile_list_description_b`, `work_profile_list_title_bold_c`, `work_profile_list_title_c`, `work_profile_list_description_c`, `work_profile_list_title_bold_d`, `work_profile_list_title_d`, `work_profile_list_description_d`, `work_profile_created`, `work_profile_datetime`) VALUES
(1, 'By choosing Frontline Business Solutions, you align your business with a purpose-driven organization that combines business excellence with Christian values.', 'Here Are the', 'Major Areas of Our Impact', '[{\"name\":\"ftc-children.jpg\",\"id\":\"1MnXDNlWgsgV3oMq1aHco5r0fEA1zKpNC\",\"datetime\":\"2025-06-23 15:40:42\"}]', '[{\"name\":\"FBS-Brochure-2024.pdf\",\"id\":\"1BVS_58RW5ftEVzdDtQIRf6-iQCITPWLU\",\"datetime\":\"2025-06-23 15:40:45\"}]', 'Partner with us', 'CARING', 'for Abandoned Children', 'In partnership with Face the Children, we provide love, care, and hope for vulnerable children at the Frontline orphanage.', 'CREATING', 'Jobs and Supporting Local Families', 'We generate new employment opportunities yearly, empowering families and supporting thriving local communities.', 'PROVIDING', 'Christian Education', 'Through Frontline Christian Academy, we support the development of future leaders grounded in academic excellence and Christian values.', 'SUPPORTING', 'Ministry Work', 'We partner with Frontline Worship Center to plant churches and spread faith, helping build strong spiritual communities.', '2025-06-23 15:37:49', '2025-06-24 08:54:07');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_work_profile`
--
ALTER TABLE `fbsv2_work_profile`
  ADD PRIMARY KEY (`work_profile_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_work_profile`
--
ALTER TABLE `fbsv2_work_profile`
  MODIFY `work_profile_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
