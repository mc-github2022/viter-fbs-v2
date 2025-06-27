-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 27, 2025 at 01:49 AM
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
-- Table structure for table `fbsv2_careers_title`
--

CREATE TABLE `fbsv2_careers_title` (
  `careers_title_aid` int(11) NOT NULL,
  `careers_title_title` varchar(100) NOT NULL,
  `careers_title_desc` varchar(500) NOT NULL,
  `careers_title_created` datetime NOT NULL,
  `careers_title_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_careers_title`
--

INSERT INTO `fbsv2_careers_title` (`careers_title_aid`, `careers_title_title`, `careers_title_desc`, `careers_title_created`, `careers_title_datetime`) VALUES
(1, 'Join our Team!', 'At Frontline Business Solution, Inc., we empower our people with holistic development, and opportunities to make a meaningful impact. Whether you\'re a seasoned professional or just starting out, you\'ll thrive in a supportive environment that fosters growth, collaboration, and excellence. Discover your potential with us!', '2025-06-27 07:34:00', '2025-06-27 07:34:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_careers_title`
--
ALTER TABLE `fbsv2_careers_title`
  ADD PRIMARY KEY (`careers_title_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_careers_title`
--
ALTER TABLE `fbsv2_careers_title`
  MODIFY `careers_title_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
