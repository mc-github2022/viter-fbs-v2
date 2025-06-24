-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 24, 2025 at 06:17 AM
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
-- Table structure for table `fbsv2_work_teams`
--

CREATE TABLE `fbsv2_work_teams` (
  `work_teams_aid` int(11) NOT NULL,
  `work_teams_ceo_img` text NOT NULL,
  `work_teams_ceo_name` varchar(100) NOT NULL,
  `work_teams_ceo_position` varchar(50) NOT NULL,
  `work_teams_om_img` text NOT NULL,
  `work_teams_om_name` varchar(100) NOT NULL,
  `work_teams_om_position` varchar(50) NOT NULL,
  `work_teams_hr_img` text NOT NULL,
  `work_teams_hr_name` varchar(100) NOT NULL,
  `work_teams_hr_position` varchar(50) NOT NULL,
  `work_teams_finance_img` text NOT NULL,
  `work_teams_finance_name` varchar(100) NOT NULL,
  `work_teams_finance_position` varchar(50) NOT NULL,
  `work_teams_lcs_img` text NOT NULL,
  `work_teams_lcs_name` varchar(100) NOT NULL,
  `work_teams_lcs_position` varchar(50) NOT NULL,
  `work_teams_web_img` text NOT NULL,
  `work_teams_web_name` varchar(100) NOT NULL,
  `work_teams_web_position` varchar(50) NOT NULL,
  `work_teams_marketing_img` text NOT NULL,
  `work_teams_marketing_name` varchar(100) NOT NULL,
  `work_teams_marketing_position` varchar(50) NOT NULL,
  `work_teams_va_img` text NOT NULL,
  `work_teams_va_name` varchar(100) NOT NULL,
  `work_teams_va_position` varchar(50) NOT NULL,
  `work_teams_created` datetime NOT NULL,
  `work_teams_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_work_teams`
--

INSERT INTO `fbsv2_work_teams` (`work_teams_aid`, `work_teams_ceo_img`, `work_teams_ceo_name`, `work_teams_ceo_position`, `work_teams_om_img`, `work_teams_om_name`, `work_teams_om_position`, `work_teams_hr_img`, `work_teams_hr_name`, `work_teams_hr_position`, `work_teams_finance_img`, `work_teams_finance_name`, `work_teams_finance_position`, `work_teams_lcs_img`, `work_teams_lcs_name`, `work_teams_lcs_position`, `work_teams_web_img`, `work_teams_web_name`, `work_teams_web_position`, `work_teams_marketing_img`, `work_teams_marketing_name`, `work_teams_marketing_position`, `work_teams_va_img`, `work_teams_va_name`, `work_teams_va_position`, `work_teams_created`, `work_teams_datetime`) VALUES
(4, '[{\"name\":\"team-jeff.webp\",\"id\":\"1p71sYDN4gA1Q2suk8Ivz39TOZjLMUJRF\",\"datetime\":\"2025-06-24 10:33:47\"}]', 'Jeffrey Pessina', 'CEO', '[{\"name\":\"teamralph.webp\",\"id\":\"1UWpZ8oetC-XM7ImBvKOS9poRtrEqGI20\",\"datetime\":\"2025-06-24 10:35:36\"}]', 'Ralph Acoba', 'Operations Manager', '[{\"name\":\"team-ada.webp\",\"id\":\"15LN3lKaFIjpu7Y9iS6vfUkwn3jcFFymy\",\"datetime\":\"2025-06-24 10:36:07\"}]', 'Rhoda Beloso', 'HR Manager', '[{\"name\":\"team-bea.webp\",\"id\":\"1iVHpZV0uKsrnKwKhgkvzKnzL7q9qLoOc\",\"datetime\":\"2025-06-24 10:36:29\"}]', 'Bhea Del Monte', 'Finance Head', '[{\"name\":\"teamjhonny.webp\",\"id\":\"1dGlS_JEpg_1Wo3d2w7np2ctAazkWCE8F\",\"datetime\":\"2025-06-24 10:36:55\"}]', 'Jhonny Dichoso', 'Web & LCS Supervisor', '[{\"name\":\"teampat.webp\",\"id\":\"1ZqMVyxa-zysjUNo11pxNlLwoeikFf9v5\",\"datetime\":\"2025-06-24 10:37:24\"}]', 'Patrick Reyes', 'Web Supervisor', '[{\"name\":\"sir-carlo.webp\",\"id\":\"1tJXCIKwXf94Qett7rx30SWd6G43Ez8DQ\",\"datetime\":\"2025-06-24 10:37:50\"}]', 'Carlo Del Monte', 'Marketing Head', '[{\"name\":\"sirmyk.webp\",\"id\":\"1nWaagTVibLeyiw9m2szjsESmboNpMVOo\",\"datetime\":\"2025-06-24 10:38:31\"}]', 'Michael De Jesus', 'VA Supervisor', '2025-06-24 10:33:44', '2025-06-24 10:39:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_work_teams`
--
ALTER TABLE `fbsv2_work_teams`
  ADD PRIMARY KEY (`work_teams_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_work_teams`
--
ALTER TABLE `fbsv2_work_teams`
  MODIFY `work_teams_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
