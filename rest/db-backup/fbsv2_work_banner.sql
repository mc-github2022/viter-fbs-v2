-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 23, 2025 at 09:00 AM
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
-- Table structure for table `fbsv2_work_banner`
--

CREATE TABLE `fbsv2_work_banner` (
  `work_banner_aid` int(11) NOT NULL,
  `work_banner_title` varchar(100) NOT NULL,
  `work_banner_title_bold` varchar(100) NOT NULL,
  `work_banner_description` varchar(500) NOT NULL,
  `work_banner_button_text` varchar(50) NOT NULL,
  `work_banner_img` text NOT NULL,
  `work_banner_created` datetime NOT NULL,
  `work_banner_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_work_banner`
--

INSERT INTO `fbsv2_work_banner` (`work_banner_aid`, `work_banner_title`, `work_banner_title_bold`, `work_banner_description`, `work_banner_button_text`, `work_banner_img`, `work_banner_created`, `work_banner_datetime`) VALUES
(1, 'We Are More Than Just A', 'Managed Services Provider', 'As a Christian company with faith-driven leadership and a commitment to purposeful service, we aim to be your trusted partner in driving growth, efficiency, and innovation.', 'Get Started', '[{\"name\":\"whyfbsbanner.webp\",\"id\":\"1yGjAhSY-gphGjBIyjzlfYHLTEB-2zMfO\",\"datetime\":\"2025-06-23 14:47:35\"}]', '2025-06-23 14:47:28', '2025-06-23 14:59:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_work_banner`
--
ALTER TABLE `fbsv2_work_banner`
  ADD PRIMARY KEY (`work_banner_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_work_banner`
--
ALTER TABLE `fbsv2_work_banner`
  MODIFY `work_banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
