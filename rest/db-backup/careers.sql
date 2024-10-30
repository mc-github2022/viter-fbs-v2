-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 30, 2024 at 05:20 AM
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
-- Database: `viter-fbs`
--

-- --------------------------------------------------------

--
-- Table structure for table `careers`
--

CREATE TABLE `careers` (
  `careers_aid` int(11) NOT NULL,
  `careers_job_title` varchar(100) NOT NULL,
  `careers_job_classification` varchar(50) NOT NULL,
  `careers_job_mode` varchar(50) NOT NULL,
  `careers_job_status` varchar(50) NOT NULL,
  `careers_job_description` text NOT NULL,
  `careers_icon` varchar(50) NOT NULL,
  `careers_created` datetime NOT NULL,
  `careers_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `careers`
--

INSERT INTO `careers` (`careers_aid`, `careers_job_title`, `careers_job_classification`, `careers_job_mode`, `careers_job_status`, `careers_job_description`, `careers_icon`, `careers_created`, `careers_datetime`) VALUES
(1, 'WORDPRESS DEVELOPER', 'Full-time', 'On-site', 'On going', '<div>\n        <p style=\"margin-bottom: 4px font-bold text-dark\">Job Qualifications</p>\n        <div>\n          <p \">Fluency in writer and spoken English</p>\n          <ul>\n            <li>- Good spelling and grammar</li>\n            <li>- Good communication skills</li>\n            <li>- Ability to proofread work</li>\n          </ul>\n        </div>\n      </div>', 'LuCode2', '2024-10-30 09:28:35', '2024-10-30 09:28:35'),
(2, 'ACCOUNTING ASSOCIATE', 'Full-time', 'On-site', 'On going', '<div className=\"desc\">\n        <p className=\"mb-4 font-bold text-dark\">Job Qualifitations</p>\n        <div>\n          <p className=\"\">Fluency in writter and spoken English</p>\n          <ul>\n            <li>- Good spelling and grammar</li>\n            <li>- Good communication skills</li>\n            <li>- Ability to proofread work</li>\n          </ul>\n        </div>\n      </div>', 'IoMdCalculator', '2024-10-30 09:29:14', '2024-10-30 09:29:14'),
(3, 'GRAPHIC DESIGNER', 'Full-time', 'On-site', 'On going', '<div className=\"desc\">\n        <p className=\"mb-4 font-bold text-dark\">Job Qualifitations</p>\n        <div>\n          <p className=\"\">Fluency in writter and spoken English</p>\n          <ul>\n            <li>- Good spelling and grammar</li>\n            <li>- Good communication skills</li>\n            <li>- Ability to proofread work</li>\n          </ul>\n        </div>\n      </div>', 'IoMdColorPalette', '2024-10-30 09:29:49', '2024-10-30 09:29:49'),
(4, 'GRAPHIC DESIGNER', 'Full-time', 'On-site', 'On going', '<div className=\"desc\">\n        <p className=\"mb-4 font-bold text-dark\">Job Qualifitations</p>\n        <div>\n          <p className=\"\">Fluency in writter and spoken English</p>\n          <ul>\n            <li>- Good spelling and grammar</li>\n            <li>- Good communication skills</li>\n            <li>- Ability to proofread work</li>\n          </ul>\n        </div>\n      </div>', 'PiHeadsetBold', '2024-10-30 09:30:42', '2024-10-30 09:30:42');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `careers`
--
ALTER TABLE `careers`
  ADD PRIMARY KEY (`careers_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `careers`
--
ALTER TABLE `careers`
  MODIFY `careers_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
