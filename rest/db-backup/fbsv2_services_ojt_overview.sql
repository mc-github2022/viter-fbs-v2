-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 03, 2025 at 09:50 AM
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
-- Table structure for table `fbsv2_services_ojt_overview`
--

CREATE TABLE `fbsv2_services_ojt_overview` (
  `ojt_overview_aid` int(11) NOT NULL,
  `ojt_overview_subtitle` varchar(100) NOT NULL,
  `ojt_overview_title` varchar(100) NOT NULL,
  `ojt_overview_img` text NOT NULL,
  `ojt_overview_file` text NOT NULL,
  `ojt_overview_button_text` varchar(20) NOT NULL,
  `ojt_overview_list_title_a` varchar(100) NOT NULL,
  `ojt_overview_list_description_a` varchar(500) NOT NULL,
  `ojt_overview_list_title_b` varchar(100) NOT NULL,
  `ojt_overview_list_description_b` varchar(500) NOT NULL,
  `ojt_overview_list_title_c` varchar(100) NOT NULL,
  `ojt_overview_list_description_c` varchar(500) NOT NULL,
  `ojt_overview_created` datetime NOT NULL,
  `ojt_overview_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_ojt_overview`
--

INSERT INTO `fbsv2_services_ojt_overview` (`ojt_overview_aid`, `ojt_overview_subtitle`, `ojt_overview_title`, `ojt_overview_img`, `ojt_overview_file`, `ojt_overview_button_text`, `ojt_overview_list_title_a`, `ojt_overview_list_description_a`, `ojt_overview_list_title_b`, `ojt_overview_list_description_b`, `ojt_overview_list_title_c`, `ojt_overview_list_description_c`, `ojt_overview_created`, `ojt_overview_datetime`) VALUES
(1, 'We Offer On-the-job Training for', 'Effective Skills Acquisitions.', '[{\"name\":\"lcssBannerImg.jpg\",\"id\":\"1_oc9zwyB6LSpRBSC47QbnSaVYHj_-wg8\",\"datetime\":\"2025-06-03 13:21:10\"}]', '[{\"name\":\"fbs-ojt-proposal-2024.pdf\",\"id\":\"1tqbl2mm7p413VV3zlU47q9516HTjdjSW\",\"datetime\":\"2025-06-03 13:21:14\"}]', 'Partner with us', 'Work-Related Experience', 'Students get hands-on, real-world experience, allowing them to apply knowledge in practical settings, preparing them for the demands of their future careers.', 'Expert-Led Training', 'Receive guidance and mentorship from industry experts who provide valuable insights, technical skills, and personalized support to help you excel in your chosen field.', 'Higher Employability', 'By gaining industry-aligned experience and expert training, students enhance their employability, making them more competitive in the job market and ready for career opportunities.', '2025-06-03 13:21:07', '2025-06-03 13:22:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_ojt_overview`
--
ALTER TABLE `fbsv2_services_ojt_overview`
  ADD PRIMARY KEY (`ojt_overview_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_ojt_overview`
--
ALTER TABLE `fbsv2_services_ojt_overview`
  MODIFY `ojt_overview_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
