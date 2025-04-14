-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 14, 2025 at 09:42 AM
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
-- Table structure for table `fbsv2_home_process`
--

CREATE TABLE `fbsv2_home_process` (
  `process_aid` int(11) NOT NULL,
  `process_subtitle` varchar(100) NOT NULL,
  `process_title` varchar(100) NOT NULL,
  `process_title_a` varchar(50) NOT NULL,
  `process_title_b` varchar(50) NOT NULL,
  `process_title_c` varchar(50) NOT NULL,
  `process_title_d` varchar(50) NOT NULL,
  `process_description_a` text NOT NULL,
  `process_description_b` text NOT NULL,
  `process_description_c` text NOT NULL,
  `process_description_d` text NOT NULL,
  `process_created` datetime NOT NULL,
  `process_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_home_process`
--

INSERT INTO `fbsv2_home_process` (`process_aid`, `process_subtitle`, `process_title`, `process_title_a`, `process_title_b`, `process_title_c`, `process_title_d`, `process_description_a`, `process_description_b`, `process_description_c`, `process_description_d`, `process_created`, `process_datetime`) VALUES
(1, 'Key Stages', 'How our Process Works', 'We Collaborate', 'We Deliver', 'We Manage', 'We Give back', 'with our clients to understand their specific talent needs and project requirements.', 'skilled professionals tailored to meet the client\'s demands, ensuring the right fit for their business.', 'the ongoing performance and development of the provided talents, ensuring seamless integration and success.', 'to the ministry and work for the Kingdom of God, aligning our business practices with our faith and commitment to a higher purpose.', '2025-04-14 15:08:02', '2025-04-14 15:40:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_home_process`
--
ALTER TABLE `fbsv2_home_process`
  ADD PRIMARY KEY (`process_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_home_process`
--
ALTER TABLE `fbsv2_home_process`
  MODIFY `process_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
