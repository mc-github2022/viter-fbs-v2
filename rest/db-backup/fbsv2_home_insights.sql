-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 06, 2026 at 05:12 AM
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
-- Table structure for table `fbsv2_home_insights`
--

CREATE TABLE `fbsv2_home_insights` (
  `home_insights_aid` int(11) NOT NULL,
  `home_insights_is_active` tinyint(1) NOT NULL,
  `home_insights_img` text NOT NULL,
  `home_insights_img_list` text NOT NULL,
  `home_insights_thumbnail` text NOT NULL,
  `home_insights_category` varchar(200) NOT NULL,
  `home_insights_title` varchar(200) NOT NULL,
  `home_insights_slug` varchar(100) NOT NULL,
  `home_insights_date` varchar(20) NOT NULL,
  `home_insights_paragraph_a` text NOT NULL,
  `home_insights_cta_is_active` tinyint(1) NOT NULL,
  `home_insights_cta_text` varchar(50) NOT NULL,
  `home_insights_form_selected` varchar(50) NOT NULL,
  `home_insights_meta_description` varchar(180) NOT NULL,
  `home_insights_created` datetime NOT NULL,
  `home_insights_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_home_insights`
--

INSERT INTO `fbsv2_home_insights` (`home_insights_aid`, `home_insights_is_active`, `home_insights_img`, `home_insights_img_list`, `home_insights_thumbnail`, `home_insights_category`, `home_insights_title`, `home_insights_slug`, `home_insights_date`, `home_insights_paragraph_a`, `home_insights_cta_is_active`, `home_insights_cta_text`, `home_insights_form_selected`, `home_insights_meta_description`, `home_insights_created`, `home_insights_datetime`) VALUES
(22, 1, 'Academy-for-Wholistic-Healing-Arts-Inc.-2 (1).png', '[{\"name\":\"Avant-Advisory-Group-Opus-Los-Angeles-Deal-Connect-December-10-2020JD-1.webp\",\"id\":\"1lMKKRMXByYrMX-fvk4xusEwLEh4w8VqU\",\"datetime\":\"2026-04-06 10:27:41\"}]', '[{\"name\":\"image.png\",\"id\":\"1gwriwb2CnzVv_m5DJllPsqWsEXpxScw8\",\"datetime\":\"2025-11-21 10:39:50\"}]', 'Test nov. 21', 'Test nov. 21ss', 'test-nov-21', '2025-11-21', 'This is test description as of november 21', 0, '', 'default-receiver', 'This is test meta description on Nov. 21', '2025-11-21 09:18:20', '2026-04-06 10:45:59'),
(23, 1, '2018-05.webp', '[{\"name\":\"Avant-Advisory-Group-2017-Year-In-Review-Featured-Image.webp\",\"id\":\"1aDl81lhbWMbK_0xkG4qboxkxJZQgqzRf\",\"datetime\":\"2026-04-06 10:53:19\"},{\"name\":\"Avant-Advisory-Group-Distressed-Turnarounds_-Restructuring-5-15-2021JD-1.webp\",\"id\":\"1D00aUqE8lTo4SP6Xz_PMTtvH-E_0NSW2\",\"datetime\":\"2026-04-06 10:53:23\"}]', '[{\"name\":\"AvantAdvisoryGroup-smoke-fraud.webp\",\"id\":\"1ku5vIYIZtdnxTA4lymZpo2NMiRMw-4dX\",\"datetime\":\"2026-04-06 10:53:26\"}]', 'Avant test', 'Avant ', 'avant', '2026-04-06', 'This is sample avant', 0, '', 'default-receiver', '', '2026-04-06 10:53:16', '2026-04-06 11:08:17'),
(24, 1, 'avant-testimonial-13 (1).webp', '', '[{\"name\":\"avant-testimonial-6 (1).webp\",\"id\":\"1zLAUmurAWo4LPw8Bj48-9NSRyUk7fuAk\",\"datetime\":\"2026-04-06 11:11:39\"}]', 'Avant', 'Avant Video', 'avant-video', '2026-04-07', 'This is avant video', 0, '', 'default-receiver', '', '2026-04-06 11:11:36', '2026-04-06 11:11:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_home_insights`
--
ALTER TABLE `fbsv2_home_insights`
  ADD PRIMARY KEY (`home_insights_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_home_insights`
--
ALTER TABLE `fbsv2_home_insights`
  MODIFY `home_insights_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
