-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 18, 2025 at 09:36 AM
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
-- Table structure for table `fbsv2_contact_form_wordpress`
--

CREATE TABLE `fbsv2_contact_form_wordpress` (
  `form_wordpress_aid` int(11) NOT NULL,
  `form_wordpress_file` text NOT NULL,
  `form_wordpress_created` datetime NOT NULL,
  `form_wordpress_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_contact_form_wordpress`
--

INSERT INTO `fbsv2_contact_form_wordpress` (`form_wordpress_aid`, `form_wordpress_file`, `form_wordpress_created`, `form_wordpress_datetime`) VALUES
(1, '[{\"name\":\"website-design-and-development-portfolio-2022-v3.pdf\",\"id\":\"1M4UcY8dPCfNmqF-iFbPW22gbpieFc1_f\",\"datetime\":\"2025-06-18 15:35:40\"}]', '2025-06-18 15:35:35', '2025-06-18 15:35:35');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_contact_form_wordpress`
--
ALTER TABLE `fbsv2_contact_form_wordpress`
  ADD PRIMARY KEY (`form_wordpress_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_contact_form_wordpress`
--
ALTER TABLE `fbsv2_contact_form_wordpress`
  MODIFY `form_wordpress_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
