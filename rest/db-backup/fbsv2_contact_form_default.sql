-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 21, 2025 at 09:36 AM
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
-- Table structure for table `fbsv2_contact_form_default`
--

CREATE TABLE `fbsv2_contact_form_default` (
  `form_default_aid` int(11) NOT NULL,
  `form_default_subtitle` varchar(50) NOT NULL,
  `form_default_title` varchar(100) NOT NULL,
  `form_default_address` varchar(100) NOT NULL,
  `form_default_telephone` varchar(50) NOT NULL,
  `form_default_phone` varchar(50) NOT NULL,
  `form_default_email` varchar(100) NOT NULL,
  `form_default_img` text NOT NULL,
  `form_default_file` text NOT NULL,
  `form_default_facebook_link` varchar(150) NOT NULL,
  `form_default_linkedin_link` varchar(150) NOT NULL,
  `form_default_youtube_link` varchar(150) NOT NULL,
  `form_default_instagram_link` varchar(150) NOT NULL,
  `form_default_tiktok_link` varchar(150) NOT NULL,
  `form_default_created` datetime NOT NULL,
  `form_default_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_contact_form_default`
--

INSERT INTO `fbsv2_contact_form_default` (`form_default_aid`, `form_default_subtitle`, `form_default_title`, `form_default_address`, `form_default_telephone`, `form_default_phone`, `form_default_email`, `form_default_img`, `form_default_file`, `form_default_facebook_link`, `form_default_linkedin_link`, `form_default_youtube_link`, `form_default_instagram_link`, `form_default_tiktok_link`, `form_default_created`, `form_default_datetime`) VALUES
(1, 'How can we help you?', 'Let\'s work together.', 'Baloc road, Brgy. San Ignacio,\nSan Pablo City, Laguna, 4000', '(049) 501 3592', '(+63) 927 168 6810', 'marketing@frontlinebusiness.com.ph', '[{\"name\":\"lets-talk.jpg\",\"id\":\"1DI9vjqloPacxGul9bqu2ZhnEuKAMlJ57\",\"datetime\":\"2025-04-21 12:03:45\"}]', '[{\"name\":\"fbs-brochure-2024.pdf\",\"id\":\"10ZeVvp2gSXvCimZsjxzkqDCxDCEZ8C7p\",\"datetime\":\"2025-04-21 12:03:50\"}]', 'https://www.facebook.com/frontline.business', 'https://www.linkedin.com/company/frontline-business-solutions-inc', 'https://www.youtube.com/@frontlinebusinesssolutions6578', 'https://www.instagram.com/frontline.business', 'https://www.tiktok.com/@frontlinebusinessinc', '2025-04-21 12:03:38', '2025-04-21 12:30:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_contact_form_default`
--
ALTER TABLE `fbsv2_contact_form_default`
  ADD PRIMARY KEY (`form_default_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_contact_form_default`
--
ALTER TABLE `fbsv2_contact_form_default`
  MODIFY `form_default_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
