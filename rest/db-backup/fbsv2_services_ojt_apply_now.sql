-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 04, 2025 at 08:09 AM
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
-- Table structure for table `fbsv2_services_ojt_apply_now`
--

CREATE TABLE `fbsv2_services_ojt_apply_now` (
  `ojt_apply_aid` int(11) NOT NULL,
  `ojt_apply_subtitle` varchar(100) NOT NULL,
  `ojt_apply_title` varchar(100) NOT NULL,
  `ojt_apply_requirement_list` text NOT NULL,
  `ojt_apply_button_text` varchar(50) NOT NULL,
  `ojt_apply_img` text NOT NULL,
  `ojt_apply_created` datetime NOT NULL,
  `ojt_apply_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_ojt_apply_now`
--

INSERT INTO `fbsv2_services_ojt_apply_now` (`ojt_apply_aid`, `ojt_apply_subtitle`, `ojt_apply_title`, `ojt_apply_requirement_list`, `ojt_apply_button_text`, `ojt_apply_img`, `ojt_apply_created`, `ojt_apply_datetime`) VALUES
(1, 'Join and experience the fun and learning with our team!', 'Join our team now!', 'Resume\nSchool Memorandum of Agreement\nEndorsement Letter\nTraining Waiver\nSchool Evaluation Form', 'Apply Now', '[{\"name\":\"ojt-accepted.webp\",\"id\":\"16Z1cf0WUcix5WZXVQdOAMslggzKGIQdf\",\"datetime\":\"2025-06-04 09:59:23\"}]', '2025-06-04 09:53:28', '2025-06-04 09:59:20');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_ojt_apply_now`
--
ALTER TABLE `fbsv2_services_ojt_apply_now`
  ADD PRIMARY KEY (`ojt_apply_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_ojt_apply_now`
--
ALTER TABLE `fbsv2_services_ojt_apply_now`
  MODIFY `ojt_apply_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
