-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 04, 2025 at 10:00 AM
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
-- Table structure for table `fbsv2_services_social_scope`
--

CREATE TABLE `fbsv2_services_social_scope` (
  `social_scope_aid` int(11) NOT NULL,
  `social_scope_title` varchar(100) NOT NULL,
  `social_scope_desc` text NOT NULL,
  `social_scope_img` text NOT NULL,
  `social_scope_button_text` varchar(20) NOT NULL,
  `social_scope_created` datetime NOT NULL,
  `social_scope_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_social_scope`
--

INSERT INTO `fbsv2_services_social_scope` (`social_scope_aid`, `social_scope_title`, `social_scope_desc`, `social_scope_img`, `social_scope_button_text`, `social_scope_created`, `social_scope_datetime`) VALUES
(1, 'All-in-One Service', 'Not one person or app, but a Team — we handle graphics, captions, reels, ads, and reports in one seamless package.', '[{\"name\":\"all-in-one-service.webp\",\"id\":\"1UVKpQ1v8ebSjmerUUzQcVBTKe7OHQRf6\",\"datetime\":\"2025-09-04 15:53:43\"}]', 'Learn More', '2025-09-04 15:53:41', '2025-09-04 15:54:40'),
(2, 'Ease of Use & Hassle-Free Setup', 'Subscribing is as easy as ticking a box and setting up auto-payment. No long contracts, no hidden fees — just smooth onboarding.', '[{\"name\":\"ease-of-use.webp\",\"id\":\"15PwTDzUbSFPUCEtQLnrX-OkKoTWSAcEw\",\"datetime\":\"2025-09-04 15:55:21\"}]', 'Learn More', '2025-09-04 15:55:18', '2025-09-04 15:55:18'),
(3, 'Scalable to Your Needs', 'Whether you want 3 posts a week or full daily management, our plans are built to scale with your goals and budget.', '[{\"name\":\"scalable.webp\",\"id\":\"1qnxqJuPNEsM7uA8Go_EMvXTwrjSrgG_d\",\"datetime\":\"2025-09-04 15:56:11\"}]', 'Learn More', '2025-09-04 15:56:08', '2025-09-04 15:56:08'),
(4, 'Affordable & Flexible', 'Choose a plan that fits your budget, with options to upgrade anytime as your business grows.', '[{\"name\":\"affordable.webp\",\"id\":\"1GkOqObfMykOuLjBiQmKfPNVObIb9CVgB\",\"datetime\":\"2025-09-04 15:56:43\"}]', 'Learn More', '2025-09-04 15:56:40', '2025-09-04 15:56:40');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_social_scope`
--
ALTER TABLE `fbsv2_services_social_scope`
  ADD PRIMARY KEY (`social_scope_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_social_scope`
--
ALTER TABLE `fbsv2_services_social_scope`
  MODIFY `social_scope_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
