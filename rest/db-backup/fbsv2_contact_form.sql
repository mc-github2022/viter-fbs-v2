-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 08, 2025 at 09:20 AM
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
-- Table structure for table `fbsv2_contact_form`
--

CREATE TABLE `fbsv2_contact_form` (
  `form_aid` int(11) NOT NULL,
  `form_name` varchar(50) NOT NULL,
  `form_title` varchar(100) NOT NULL,
  `form_subtitle` varchar(100) NOT NULL,
  `form_address` varchar(100) NOT NULL,
  `form_accounting_no` varchar(50) NOT NULL,
  `form_company_no` varchar(50) NOT NULL,
  `form_web_no` varchar(50) NOT NULL,
  `form_services` varchar(50) NOT NULL,
  `form_img` text NOT NULL,
  `form_portfolio` text NOT NULL,
  `form_facebook_link` varchar(150) NOT NULL,
  `form_linkedin_link` varchar(150) NOT NULL,
  `form_youtube_link` varchar(150) NOT NULL,
  `form_instagram_link` varchar(150) NOT NULL,
  `form_tiktok_link` varchar(150) NOT NULL,
  `form_is_upload_file` tinyint(1) NOT NULL,
  `form_is_upload_input` tinyint(1) NOT NULL,
  `form_default_email` varchar(100) NOT NULL,
  `form_web_role` varchar(100) NOT NULL,
  `form_web_name` varchar(100) NOT NULL,
  `form_web_email` varchar(100) NOT NULL,
  `form_computer_role` varchar(100) NOT NULL,
  `form_computer_name` varchar(100) NOT NULL,
  `form_computer_email` varchar(100) NOT NULL,
  `form_accounting_role` varchar(100) NOT NULL,
  `form_accounting_name` varchar(100) NOT NULL,
  `form_accounting_email` varchar(100) NOT NULL,
  `form_hr_manager_role` varchar(100) NOT NULL,
  `form_hr_manager_name` varchar(100) NOT NULL,
  `form_hr_manager_email` varchar(100) NOT NULL,
  `form_hr_staff_role` varchar(100) NOT NULL,
  `form_hr_staff_name` varchar(100) NOT NULL,
  `form_hr_staff_email` varchar(100) NOT NULL,
  `form_created` datetime NOT NULL,
  `form_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_contact_form`
--

INSERT INTO `fbsv2_contact_form` (`form_aid`, `form_name`, `form_title`, `form_subtitle`, `form_address`, `form_accounting_no`, `form_company_no`, `form_web_no`, `form_services`, `form_img`, `form_portfolio`, `form_facebook_link`, `form_linkedin_link`, `form_youtube_link`, `form_instagram_link`, `form_tiktok_link`, `form_is_upload_file`, `form_is_upload_input`, `form_default_email`, `form_web_role`, `form_web_name`, `form_web_email`, `form_computer_role`, `form_computer_name`, `form_computer_email`, `form_accounting_role`, `form_accounting_name`, `form_accounting_email`, `form_hr_manager_role`, `form_hr_manager_name`, `form_hr_manager_email`, `form_hr_staff_role`, `form_hr_staff_name`, `form_hr_staff_email`, `form_created`, `form_updated`) VALUES
(1, '', '', '', 'Baloc road, Brgy. San Ignacio, San Pablo City, Laguna, 4000', '', '', '', '', '[{\"name\":\"lets-talk2.jpg\",\"id\":\"1DuBgsd4_WXGvzQ-DkxMZpe_QmH7tgGy7\",\"datetime\":\"2025-08-07 14:42:39\"}]', '', 'https://www.facebook.com/frontline.business', 'https://www.linkedin.com/company/frontline-business-solutions-inc', 'https://www.youtube.com/@frontlinebusinesssolutions6578', 'https://www.instagram.com/frontline.business', 'https://www.tiktok.com/@frontlinebusinessinc', 0, 0, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '2025-08-07 14:42:32', '2025-08-08 07:40:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_contact_form`
--
ALTER TABLE `fbsv2_contact_form`
  ADD PRIMARY KEY (`form_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_contact_form`
--
ALTER TABLE `fbsv2_contact_form`
  MODIFY `form_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
