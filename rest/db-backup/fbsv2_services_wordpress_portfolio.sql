-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 26, 2026 at 04:53 AM
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
  `wordpress_portfolio_url` varchar(100) NOT NULL,
  `wordpress_portfolio_website` varchar(100) NOT NULL,
  `wordpress_portfolio_img` text NOT NULL,
  `wordpress_portfolio_created` datetime NOT NULL,
  `wordpress_portfolio_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_wordpress_portfolio`
--

INSERT INTO `fbsv2_services_wordpress_portfolio` (`wordpress_portfolio_aid`, `wordpress_portfolio_url`, `wordpress_portfolio_website`, `wordpress_portfolio_img`, `wordpress_portfolio_created`, `wordpress_portfolio_datetime`) VALUES
(1, 'https://www.gomissiontrip.com/', 'gomissiontrip.com', '[{\"name\":\"portfolio-gomission.png\",\"id\":\"1MSF_qKl5RXV2OGViJ8GqjITNY7LoVPwd\",\"datetime\":\"2025-06-19 09:42:50\"}]', '2025-06-19 09:39:23', '2026-03-26 10:07:42'),
(2, 'https://tazamiacoffee.com/', 'tazamiacoffee.com', '[{\"name\":\"portfolio-tazamia.png\",\"id\":\"1rq3HdwbMnVJvfmyZaAd2E3YhVxh8ykQA\",\"datetime\":\"2026-03-26 10:34:34\"}]', '2026-03-26 10:13:33', '2026-03-26 10:34:29'),
(3, 'https://www.overthetop.com/', 'overthetop.com', '[{\"name\":\"www.overthetop.com-short.webp\",\"id\":\"1e1wq0W63pfjgd8zUE193Xsz3hYnRwvCK\",\"datetime\":\"2026-03-26 10:59:04\"}]', '2026-03-26 10:35:14', '2026-03-26 10:59:00'),
(4, 'https://facethechildren.org/', 'facethechildren.org', '[{\"name\":\"portfolio-ftc.png\",\"id\":\"1sL0MSSnUKEL0cG-LVVktggsTSLoXUDQ3\",\"datetime\":\"2026-03-26 10:35:44\"}]', '2026-03-26 10:35:41', '2026-03-26 10:35:41'),
(5, 'https://worldfocusinc.com/wf2025/', 'worldfocusinc.com/wf2025/', '[{\"name\":\"worldfocus.webp\",\"id\":\"1YGUaB87mIQa9iRBsbGpMhLACOQMKKV_R\",\"datetime\":\"2026-03-26 11:30:14\"}]', '2026-03-26 10:36:12', '2026-03-26 11:30:00'),
(6, 'https://fca.edu.ph/', 'fca.edu.ph', '[{\"name\":\"portfolio-fca.png\",\"id\":\"1H7d8pvU9-3tc4S1jdomuUFbYFYCcddFc\",\"datetime\":\"2026-03-26 10:39:06\"}]', '2026-03-26 10:37:26', '2026-03-26 10:39:03'),
(7, 'https://hiroisogawa.com/', 'hiroisogawa.com', '[{\"name\":\"portfolio-hiroisogawa.jpg\",\"id\":\"1Vkxa1VBp_JmGMTH8oIkq33vgSWtwUzrY\",\"datetime\":\"2026-03-26 10:38:02\"}]', '2026-03-26 10:37:59', '2026-03-26 10:37:59'),
(8, 'https://frontlineworshipcenter.org/', 'frontlineworshipcenter.org', '[{\"name\":\"portfolio-fwc.png\",\"id\":\"1-0AWUgqGvF_jl6DUzEopfFsEvWF1duW_\",\"datetime\":\"2026-03-26 10:39:34\"}]', '2026-03-26 10:38:38', '2026-03-26 10:39:31'),
(11, 'https://awhai.org/', 'awhai.org', '[{\"name\":\"awhai (1).webp\",\"id\":\"1Ej5EghfuK9VP6oeL5nLn9KtR_5YMT5oW\",\"datetime\":\"2026-03-26 11:48:56\"}]', '2026-03-26 11:06:03', '2026-03-26 11:48:44'),
(12, 'https://gmicph.com/', 'gmicph.com', '[{\"name\":\"gmic-2.webp\",\"id\":\"1O5mgYdEd99Ss7i5CKKSK4Fo71240gjjx\",\"datetime\":\"2026-03-26 11:47:13\"}]', '2026-03-26 11:08:11', '2026-03-26 11:47:10'),
(13, 'https://malarayatruralbankinc.com/', 'malarayatruralbankinc.com', '[{\"name\":\"Malarayat-2.webp\",\"id\":\"1Wrw3UDCjzeI7kHHkWO1BR9RBatI_IS-h\",\"datetime\":\"2026-03-26 11:44:08\"}]', '2026-03-26 11:14:36', '2026-03-26 11:44:05'),
(14, 'https://latricciasresort.com/', 'latricciasresort.com', '[{\"name\":\"latriccia.webp\",\"id\":\"16A0ok7Td7JgrlnXDmshrv5DKKLOzVFWY\",\"datetime\":\"2026-03-26 11:42:22\"}]', '2026-03-26 11:27:32', '2026-03-26 11:42:19');

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
  MODIFY `wordpress_portfolio_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
