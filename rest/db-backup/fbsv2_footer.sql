-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 21, 2025 at 04:37 AM
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
-- Table structure for table `fbsv2_footer`
--

CREATE TABLE `fbsv2_footer` (
  `footer_aid` int(11) NOT NULL,
  `footer_quicklink_a` varchar(50) NOT NULL,
  `footer_quicklink_link_a` varchar(50) NOT NULL,
  `footer_quicklink_b` varchar(50) NOT NULL,
  `footer_quicklink_link_b` varchar(50) NOT NULL,
  `footer_quicklink_c` varchar(50) NOT NULL,
  `footer_quicklink_link_c` varchar(50) NOT NULL,
  `footer_quicklink_d` varchar(50) NOT NULL,
  `footer_quicklink_link_d` varchar(50) NOT NULL,
  `footer_quicklink_e` varchar(50) NOT NULL,
  `footer_quicklink_link_e` varchar(50) NOT NULL,
  `footer_copyright` varchar(100) NOT NULL,
  `footer_privacy_text` varchar(50) NOT NULL,
  `footer_privacy_link` varchar(50) NOT NULL,
  `footer_terms_text` varchar(50) NOT NULL,
  `footer_terms_link` varchar(50) NOT NULL,
  `footer_eula_text` varchar(50) NOT NULL,
  `footer_eula_link` varchar(50) NOT NULL,
  `footer_logo_img` text NOT NULL,
  `footer_phone_a` varchar(50) NOT NULL,
  `footer_phone_b` varchar(50) NOT NULL,
  `footer_phone_c` varchar(50) NOT NULL,
  `footer_email` varchar(100) NOT NULL,
  `footer_subscriber_text` varchar(50) NOT NULL,
  `footer_created` datetime NOT NULL,
  `footer_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_footer`
--

INSERT INTO `fbsv2_footer` (`footer_aid`, `footer_quicklink_a`, `footer_quicklink_link_a`, `footer_quicklink_b`, `footer_quicklink_link_b`, `footer_quicklink_c`, `footer_quicklink_link_c`, `footer_quicklink_d`, `footer_quicklink_link_d`, `footer_quicklink_e`, `footer_quicklink_link_e`, `footer_copyright`, `footer_privacy_text`, `footer_privacy_link`, `footer_terms_text`, `footer_terms_link`, `footer_eula_text`, `footer_eula_link`, `footer_logo_img`, `footer_phone_a`, `footer_phone_b`, `footer_phone_c`, `footer_email`, `footer_subscriber_text`, `footer_created`, `footer_datetime`) VALUES
(1, 'Web Solutions', '/webapp-hris', 'Virtual Assistant Solutions', '/va-administrative', 'Accounting Solutions', '/accounting-bookkeeping', 'Learning Center Solutions', '/college-ojt', 'Payment', 'https://frontlinebusiness.com.ph/payment/', 'Frontline Business Solutions, Inc. All rights reserved.', 'Privacy Policy', '/privacy-policy', 'Terms of Service', '/terms-of-service', 'EULA', '/eula', '[{\"name\":\"logo-fbs-white.png\",\"id\":\"1jKrmc-R12UuRe-AVSsl8Cq8JOKrO38bS\",\"datetime\":\"2025-05-21 10:22:22\"}]', 'Main & Accounting Office - (049) 501 3592', 'Company Phone No. - (+63) 927 168 6810', 'Web & LCS Office - (049) 530-2112', 'marketing@frontlinebusiness.com.ph', 'Subscribe to our newsletter', '2025-04-22 13:19:36', '2025-05-21 10:32:02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_footer`
--
ALTER TABLE `fbsv2_footer`
  ADD PRIMARY KEY (`footer_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_footer`
--
ALTER TABLE `fbsv2_footer`
  MODIFY `footer_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
