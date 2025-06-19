-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 19, 2025 at 04:01 AM
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
-- Table structure for table `fbsv2_services_wordpress_portfolio`
--

CREATE TABLE `fbsv2_services_wordpress_portfolio` (
  `wordpress_portfolio_aid` int(11) NOT NULL,
  `wordpress_portfolio_subtitle` varchar(100) NOT NULL,
  `wordpress_portfolio_title` varchar(100) NOT NULL,
  `wordpress_portfolio_url_a` varchar(100) NOT NULL,
  `wordpress_portfolio_website_a` varchar(100) NOT NULL,
  `wordpress_portfolio_img_a` text NOT NULL,
  `wordpress_portfolio_url_b` varchar(100) NOT NULL,
  `wordpress_portfolio_website_b` varchar(100) NOT NULL,
  `wordpress_portfolio_img_b` text NOT NULL,
  `wordpress_portfolio_url_c` varchar(100) NOT NULL,
  `wordpress_portfolio_website_c` varchar(100) NOT NULL,
  `wordpress_portfolio_img_c` text NOT NULL,
  `wordpress_portfolio_url_d` varchar(100) NOT NULL,
  `wordpress_portfolio_website_d` varchar(100) NOT NULL,
  `wordpress_portfolio_img_d` text NOT NULL,
  `wordpress_portfolio_url_e` varchar(100) NOT NULL,
  `wordpress_portfolio_website_e` varchar(100) NOT NULL,
  `wordpress_portfolio_img_e` text NOT NULL,
  `wordpress_portfolio_url_f` varchar(100) NOT NULL,
  `wordpress_portfolio_website_f` varchar(100) NOT NULL,
  `wordpress_portfolio_img_f` text NOT NULL,
  `wordpress_portfolio_url_g` varchar(100) NOT NULL,
  `wordpress_portfolio_website_g` varchar(100) NOT NULL,
  `wordpress_portfolio_img_g` text NOT NULL,
  `wordpress_portfolio_url_h` varchar(100) NOT NULL,
  `wordpress_portfolio_website_h` varchar(100) NOT NULL,
  `wordpress_portfolio_img_h` text NOT NULL,
  `wordpress_portfolio_created` datetime NOT NULL,
  `wordpress_portfolio_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_wordpress_portfolio`
--

INSERT INTO `fbsv2_services_wordpress_portfolio` (`wordpress_portfolio_aid`, `wordpress_portfolio_subtitle`, `wordpress_portfolio_title`, `wordpress_portfolio_url_a`, `wordpress_portfolio_website_a`, `wordpress_portfolio_img_a`, `wordpress_portfolio_url_b`, `wordpress_portfolio_website_b`, `wordpress_portfolio_img_b`, `wordpress_portfolio_url_c`, `wordpress_portfolio_website_c`, `wordpress_portfolio_img_c`, `wordpress_portfolio_url_d`, `wordpress_portfolio_website_d`, `wordpress_portfolio_img_d`, `wordpress_portfolio_url_e`, `wordpress_portfolio_website_e`, `wordpress_portfolio_img_e`, `wordpress_portfolio_url_f`, `wordpress_portfolio_website_f`, `wordpress_portfolio_img_f`, `wordpress_portfolio_url_g`, `wordpress_portfolio_website_g`, `wordpress_portfolio_img_g`, `wordpress_portfolio_url_h`, `wordpress_portfolio_website_h`, `wordpress_portfolio_img_h`, `wordpress_portfolio_created`, `wordpress_portfolio_datetime`) VALUES
(1, 'Seamless Performance and Stunning Design', 'Custom-built Website', 'https://www.gomissiontrip.com/', 'gomissiontrip.com', '[{\"name\":\"portfolio-gomission.png\",\"id\":\"1MSF_qKl5RXV2OGViJ8GqjITNY7LoVPwd\",\"datetime\":\"2025-06-19 09:42:50\"}]', 'https://tazamiacoffee.com/', 'tazamiacoffee.com', '[{\"name\":\"portfolio-tazamia.png\",\"id\":\"196PCD1CRrN2doqDggtIsLb7oqiMnXa6l\",\"datetime\":\"2025-06-19 09:43:45\"}]', 'https://www.overthetop.com/', 'overthetop.com', '[{\"name\":\"portfolio-ottm.png\",\"id\":\"1IPKfULiUCwadXPQ2ZjzSRQVqcVwKesSr\",\"datetime\":\"2025-06-19 09:44:29\"}]', 'https://facethechildren.org/', 'facethechildren.org', '[{\"name\":\"portfolio-ftc.png\",\"id\":\"1sTa-s_6FeRKfAZAvpxTH6o4HUGBwCbS2\",\"datetime\":\"2025-06-19 09:45:00\"}]', 'https://www.worldfocusinc.com/', 'worldfocusinc.com', '[{\"name\":\"portfolio-worldfocus.png\",\"id\":\"1tQpDr_55Fg6Pw90usuHxOuvKMXWMdbSp\",\"datetime\":\"2025-06-19 09:45:50\"}]', 'https://fca.edu.ph/', 'fca.edu.ph', '[{\"name\":\"portfolio-fca.png\",\"id\":\"187A7y80rBBo2tscc-OglIJJvkTaIdlER\",\"datetime\":\"2025-06-19 09:48:13\"}]', 'https://hiroisogawa.com/', 'hiroisogawa.com', '[{\"name\":\"portfolio-hiroisogawa.webp\",\"id\":\"1yV0KbgJeYPxn15n4P_SjwdVjziTbJgf2\",\"datetime\":\"2025-06-19 09:47:03\"}]', 'https://frontlineworshipcenter.org/', 'frontlineworshipcenter.org', '[{\"name\":\"portfolio-fwc.png\",\"id\":\"1g3TodyNDDxiigQyP5SlvWeeFi2Dc3TD0\",\"datetime\":\"2025-06-19 09:56:03\"}]', '2025-06-19 09:39:23', '2025-06-19 09:56:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_wordpress_portfolio`
--
ALTER TABLE `fbsv2_services_wordpress_portfolio`
  ADD PRIMARY KEY (`wordpress_portfolio_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_wordpress_portfolio`
--
ALTER TABLE `fbsv2_services_wordpress_portfolio`
  MODIFY `wordpress_portfolio_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
