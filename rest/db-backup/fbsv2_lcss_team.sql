-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 04, 2025 at 08:09 AM
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
-- Table structure for table `fbsv2_lcss_team`
--

CREATE TABLE `fbsv2_lcss_team` (
  `lcss_teams_aid` int(11) NOT NULL,
  `lcss_teams_img` text NOT NULL,
  `lcss_teams_name` varchar(100) NOT NULL,
  `lcss_teams_role` varchar(100) NOT NULL,
  `lcss_teams_position` varchar(100) NOT NULL,
  `lcss_teams_email` varchar(100) NOT NULL,
  `lcss_teams_created` datetime NOT NULL,
  `lcss_teams_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_lcss_team`
--

INSERT INTO `fbsv2_lcss_team` (`lcss_teams_aid`, `lcss_teams_img`, `lcss_teams_name`, `lcss_teams_role`, `lcss_teams_position`, `lcss_teams_email`, `lcss_teams_created`, `lcss_teams_datetime`) VALUES
(1, '[{\"name\":\"jhonny.png\",\"id\":\"11fa3n4c9aCAaWisaYNKXUOnwFTraK_Wr\",\"datetime\":\"2025-06-04 10:40:14\"}]', 'Mr. Jhonny Dichoso, MIT', 'Head, Learning Center Solutions', 'Supervisor, Web Development', 'jhonny.dichoso@frontlinebusiness.com.ph', '2025-06-04 10:40:11', '2025-06-04 10:42:56'),
(3, '[{\"name\":\"thea.png\",\"id\":\"1AqYY1P8FcrBvbm3ln71zVloaU6TUBhoM\",\"datetime\":\"2025-06-04 10:46:18\"}]', 'Ms. Thea Lyzette Consignado', 'Accounting Trainer', 'Accounting Associate', 'thea.consignado@frontlinebusiness.com.ph', '2025-06-04 10:46:15', '2025-06-04 10:46:15'),
(4, '[{\"name\":\"roy.png\",\"id\":\"1_UlORz-q1gBK5zPwE5LIBKOIva4jMDlF\",\"datetime\":\"2025-06-04 10:46:58\"}]', 'Mr. Roy Balaaldia', 'Graphics and Web Designing Trainer', '', 'roy.balaaldia@frontlinebusiness.com.ph', '2025-06-04 10:46:55', '2025-06-04 10:46:55'),
(5, '[{\"name\":\"ms.-herlyn.png\",\"id\":\"1YlPDE1qM8fD3b5swU05xeYFS1UFsQU97\",\"datetime\":\"2025-06-04 10:47:35\"}]', 'Ms. Herlyn Mae Torres', 'Frontend Development Trainer', '', 'herlyn.torres@frontlinebusiness.com.ph', '2025-06-04 10:47:32', '2025-06-04 10:47:32'),
(6, '[{\"name\":\"sir-mon-1.png\",\"id\":\"1vhBmRWL8aiYs_SrRlDdV4Y-7hFKUdv-d\",\"datetime\":\"2025-06-04 10:48:07\"}]', 'Mr. Ramon Plaza', 'Backend/WordPress Development Trainer', '', 'ramon.plaza@frontlinebusiness.com.ph', '2025-06-04 10:48:04', '2025-06-04 10:48:04'),
(7, '[{\"name\":\"emman.png\",\"id\":\"1iyWJ0jzW7TXVX7ZI_7SsNdgETq0iLGyt\",\"datetime\":\"2025-06-04 10:48:38\"}]', 'Mr. Emmanuel Manalo', 'Frontend & Backend Development Trainer', '', 'emmanuel.manalo@frontlinebusiness.com.ph', '2025-06-04 10:48:35', '2025-06-04 10:48:35');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_lcss_team`
--
ALTER TABLE `fbsv2_lcss_team`
  ADD PRIMARY KEY (`lcss_teams_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_lcss_team`
--
ALTER TABLE `fbsv2_lcss_team`
  MODIFY `lcss_teams_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
