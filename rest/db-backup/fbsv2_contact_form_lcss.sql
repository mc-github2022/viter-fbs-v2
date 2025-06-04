-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 04, 2025 at 08:08 AM
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
-- Table structure for table `fbsv2_contact_form_lcss`
--

CREATE TABLE `fbsv2_contact_form_lcss` (
  `form_lcss_aid` int(11) NOT NULL,
  `form_lcss_subtitle` varchar(50) NOT NULL,
  `form_lcss_title` varchar(100) NOT NULL,
  `form_lcss_telephone` varchar(50) NOT NULL,
  `form_lcss_phone` varchar(50) NOT NULL,
  `form_lcss_file` text NOT NULL,
  `form_lcss_computer_title` varchar(100) NOT NULL,
  `form_lcss_computer_name` varchar(100) NOT NULL,
  `form_lcss_computer_email` varchar(100) NOT NULL,
  `form_lcss_accounting_title` varchar(100) NOT NULL,
  `form_lcss_accounting_name` varchar(100) NOT NULL,
  `form_lcss_accounting_email` varchar(100) NOT NULL,
  `form_lcss_created` datetime NOT NULL,
  `form_lcss_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_contact_form_lcss`
--

INSERT INTO `fbsv2_contact_form_lcss` (`form_lcss_aid`, `form_lcss_subtitle`, `form_lcss_title`, `form_lcss_telephone`, `form_lcss_phone`, `form_lcss_file`, `form_lcss_computer_title`, `form_lcss_computer_name`, `form_lcss_computer_email`, `form_lcss_accounting_title`, `form_lcss_accounting_name`, `form_lcss_accounting_email`, `form_lcss_created`, `form_lcss_datetime`) VALUES
(1, 'Discover your potential with us.', 'Join our Team!', '(049) 530-2112', '(+63) 927 168 6810', '[{\"name\":\"fbs-ojt-proposal-2024.pdf\",\"id\":\"1fnoMGRfGkzgTTeoWu8sNkXthifq5e4uQ\",\"datetime\":\"2025-06-04 09:20:30\"}]', 'Computer-Related Course', 'Ms. Herlyn Mae Torres', 'herlyn.torres@frontlinebusiness.com.ph', 'Accounting-Related Courses', 'Ms. Thea Lyzette Consignado', 'thea.consignado@frontlinebusiness.com.ph', '2025-06-04 09:14:38', '2025-06-04 09:59:41');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_contact_form_lcss`
--
ALTER TABLE `fbsv2_contact_form_lcss`
  ADD PRIMARY KEY (`form_lcss_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_contact_form_lcss`
--
ALTER TABLE `fbsv2_contact_form_lcss`
  MODIFY `form_lcss_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
