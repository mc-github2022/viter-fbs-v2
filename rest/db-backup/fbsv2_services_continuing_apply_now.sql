-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 13, 2025 at 04:03 AM
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
-- Table structure for table `fbsv2_services_continuing_apply_now`
--

CREATE TABLE `fbsv2_services_continuing_apply_now` (
  `continuing_apply_aid` int(11) NOT NULL,
  `continuing_apply_subtitle` varchar(100) NOT NULL,
  `continuing_apply_title` varchar(100) NOT NULL,
  `continuing_apply_requirement_list` text NOT NULL,
  `continuing_apply_other_details` varchar(500) NOT NULL,
  `continuing_apply_button_text` varchar(50) NOT NULL,
  `continuing_apply_img` text NOT NULL,
  `continuing_apply_created` datetime NOT NULL,
  `continuing_apply_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_continuing_apply_now`
--

INSERT INTO `fbsv2_services_continuing_apply_now` (`continuing_apply_aid`, `continuing_apply_subtitle`, `continuing_apply_title`, `continuing_apply_requirement_list`, `continuing_apply_other_details`, `continuing_apply_button_text`, `continuing_apply_img`, `continuing_apply_created`, `continuing_apply_datetime`) VALUES
(1, 'Join and experience the fun and learning with our team!', 'Join our team now!', 'Email of Application\nResume', 'Interested applicants can submit their resumes to our Learning Center Solutions Department at herlyn.torres@frontlinebusiness.com.ph, and you will be scheduled for an online initial interview.', 'Apply Now', '[{\"name\":\"ojt-accepted.webp\",\"id\":\"1WRNeeX5tai89V3JiiPdgzHx0-W9uAa4T\",\"datetime\":\"2025-06-13 10:02:24\"}]', '2025-06-13 10:02:21', '2025-06-13 10:02:41');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_continuing_apply_now`
--
ALTER TABLE `fbsv2_services_continuing_apply_now`
  ADD PRIMARY KEY (`continuing_apply_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_continuing_apply_now`
--
ALTER TABLE `fbsv2_services_continuing_apply_now`
  MODIFY `continuing_apply_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
