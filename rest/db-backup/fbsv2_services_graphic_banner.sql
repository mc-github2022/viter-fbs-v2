-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 15, 2025 at 08:28 AM
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
-- Table structure for table `fbsv2_services_graphic_banner`
--

CREATE TABLE `fbsv2_services_graphic_banner` (
  `graphic_banner_aid` int(11) NOT NULL,
  `graphic_banner_title` varchar(100) NOT NULL,
  `graphic_banner_title_bold` varchar(100) NOT NULL,
  `graphic_banner_description` varchar(500) NOT NULL,
  `graphic_banner_button_text` varchar(50) NOT NULL,
  `graphic_banner_img` text NOT NULL,
  `graphic_banner_created` datetime NOT NULL,
  `graphic_banner_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_graphic_banner`
--

INSERT INTO `fbsv2_services_graphic_banner` (`graphic_banner_aid`, `graphic_banner_title`, `graphic_banner_title_bold`, `graphic_banner_description`, `graphic_banner_button_text`, `graphic_banner_img`, `graphic_banner_created`, `graphic_banner_datetime`) VALUES
(1, 'Craft Visually Stunning Designs', 'That Speak for Your Brand', 'At Frontline Business Solutions, we believe great design is more than just looking good—it’s about communicating your message effectively. Our Graphic Design Service helps you visually tell your story, build brand recognition, and leave a lasting impression on your audience.', 'Learn More', '[{\"name\":\"graphic-banner.webp\",\"id\":\"1x04LLcpH9zMXLIhcvtZISIaT0QhEPP7i\",\"datetime\":\"2025-07-15 14:26:08\"}]', '2025-07-15 13:19:27', '2025-07-15 14:26:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_graphic_banner`
--
ALTER TABLE `fbsv2_services_graphic_banner`
  ADD PRIMARY KEY (`graphic_banner_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_graphic_banner`
--
ALTER TABLE `fbsv2_services_graphic_banner`
  MODIFY `graphic_banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
