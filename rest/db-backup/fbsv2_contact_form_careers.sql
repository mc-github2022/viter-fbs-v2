-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 30, 2025 at 12:44 AM
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
-- Table structure for table `fbsv2_contact_form_careers`
--

CREATE TABLE `fbsv2_contact_form_careers` (
  `form_careers_aid` int(11) NOT NULL,
  `form_careers_subtitle` varchar(100) NOT NULL,
  `form_careers_title` varchar(50) NOT NULL,
  `form_careers_telephone` varchar(20) NOT NULL,
  `form_careers_phone` varchar(20) NOT NULL,
  `form_careers_position_a` varchar(100) NOT NULL,
  `form_careers_name_a` varchar(100) NOT NULL,
  `form_careers_email_a` varchar(100) NOT NULL,
  `form_careers_position_b` varchar(100) NOT NULL,
  `form_careers_name_b` varchar(100) NOT NULL,
  `form_careers_email_b` varchar(100) NOT NULL,
  `form_careers_created` datetime NOT NULL,
  `form_careers_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_contact_form_careers`
--

INSERT INTO `fbsv2_contact_form_careers` (`form_careers_aid`, `form_careers_subtitle`, `form_careers_title`, `form_careers_telephone`, `form_careers_phone`, `form_careers_position_a`, `form_careers_name_a`, `form_careers_email_a`, `form_careers_position_b`, `form_careers_name_b`, `form_careers_email_b`, `form_careers_created`, `form_careers_datetime`) VALUES
(1, 'Discover your potential with us.', 'Join our Team!', '(049) 501 3592', '(+63) 927 168 6810', 'Human Resource Manager', 'Mrs. Rhoda Beloso', 'rhoda.beloso@frontlinebusiness.com.ph', 'Human Resource Staff', 'Mrs. Kennie Deriquito', 'kennie.deriquito@frontlinebusiness.com.ph', '2025-06-27 08:02:13', '2025-06-27 08:17:47');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_contact_form_careers`
--
ALTER TABLE `fbsv2_contact_form_careers`
  ADD PRIMARY KEY (`form_careers_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_contact_form_careers`
--
ALTER TABLE `fbsv2_contact_form_careers`
  MODIFY `form_careers_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
