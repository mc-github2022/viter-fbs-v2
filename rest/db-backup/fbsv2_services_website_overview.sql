-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 20, 2025 at 07:18 AM
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
-- Table structure for table `fbsv2_services_website_overview`
--

CREATE TABLE `fbsv2_services_website_overview` (
  `website_overview_aid` int(11) NOT NULL,
  `website_overview_subtitle` varchar(100) NOT NULL,
  `website_overview_title` varchar(100) NOT NULL,
  `website_overview_img` text NOT NULL,
  `website_overview_file` text NOT NULL,
  `website_overview_button_text` varchar(20) NOT NULL,
  `website_overview_list_title_a` varchar(100) NOT NULL,
  `website_overview_list_description_a` varchar(500) NOT NULL,
  `website_overview_list_title_b` varchar(100) NOT NULL,
  `website_overview_list_description_b` varchar(500) NOT NULL,
  `website_overview_list_title_c` varchar(100) NOT NULL,
  `website_overview_list_description_c` varchar(500) NOT NULL,
  `website_overview_created` datetime NOT NULL,
  `website_overview_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_website_overview`
--

INSERT INTO `fbsv2_services_website_overview` (`website_overview_aid`, `website_overview_subtitle`, `website_overview_title`, `website_overview_img`, `website_overview_file`, `website_overview_button_text`, `website_overview_list_title_a`, `website_overview_list_description_a`, `website_overview_list_title_b`, `website_overview_list_description_b`, `website_overview_list_title_c`, `website_overview_list_description_c`, `website_overview_created`, `website_overview_datetime`) VALUES
(1, 'Why Choose Our', 'Web Development Team', '[{\"name\":\"web-team.jpg\",\"id\":\"1HPS8NFfV6S7GP4_DCNLGwMT5PCoXxE8w\",\"datetime\":\"2025-06-20 13:14:44\"}]', '[{\"name\":\"website-design-and-development-portfolio-2022-v3.pdf\",\"id\":\"14p_CzMNfbRi0j1zBcxpn-WcDf10tzed3\",\"datetime\":\"2025-06-20 13:14:50\"}]', 'Learn More', 'Tailored Designs for Your Brand', 'We create customized website designs that align perfectly with your brand’s identity, ensuring your online presence is unique, visually appealing, and memorable to your audience.', 'Responsive and User-Friendly Experience', 'Our designs prioritize responsive layouts and user-friendly navigation, ensuring your website looks and performs flawlessly across all devices, leading to higher satisfaction and better engagement.', 'Fast Turnaround with Quality', 'We deliver high-quality website designs quickly, without compromising on performance or aesthetics, allowing you to launch your site on time while staying within your budget.', '2025-06-20 13:14:41', '2025-06-20 13:17:58');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_website_overview`
--
ALTER TABLE `fbsv2_services_website_overview`
  ADD PRIMARY KEY (`website_overview_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_website_overview`
--
ALTER TABLE `fbsv2_services_website_overview`
  MODIFY `website_overview_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
