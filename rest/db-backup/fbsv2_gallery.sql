-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 25, 2025 at 08:51 AM
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
-- Table structure for table `fbsv2_gallery`
--

CREATE TABLE `fbsv2_gallery` (
  `gallery_aid` int(11) NOT NULL,
  `gallery_img` text NOT NULL,
  `gallery_created` datetime NOT NULL,
  `gallery_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_gallery`
--

INSERT INTO `fbsv2_gallery` (`gallery_aid`, `gallery_img`, `gallery_created`, `gallery_datetime`) VALUES
(2, '[{\"name\":\"20221125-DSC_5840.jpg\",\"id\":\"1FLXGqsjNt1IC7c2s8qj05ZnctO7r1iZG\",\"datetime\":\"2025-03-25 14:39:30\"}]', '2025-03-25 14:39:25', '2025-03-25 14:39:25'),
(3, '[{\"name\":\"20221125-DSC_5382.jpg\",\"id\":\"1pMOOf8rY8eUMGayq5BuPrhpxf_Jn35Uu\",\"datetime\":\"2025-03-25 14:39:45\"}]', '2025-03-25 14:39:41', '2025-03-25 14:39:41'),
(4, '[{\"name\":\"20221126-DSC_5988.jpg\",\"id\":\"1uKbDYxK5BwQ5AxPIvlNYdPRVqzPdnDK4\",\"datetime\":\"2025-03-25 14:40:01\"}]', '2025-03-25 14:39:54', '2025-03-25 14:39:54'),
(5, '[{\"name\":\"20230107-DSC_7372.jpg\",\"id\":\"16FBm83XSJNyQo42JyfFaLdguexxop_Zg\",\"datetime\":\"2025-03-25 14:40:31\"}]', '2025-03-25 14:40:26', '2025-03-25 14:40:26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_gallery`
--
ALTER TABLE `fbsv2_gallery`
  ADD PRIMARY KEY (`gallery_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_gallery`
--
ALTER TABLE `fbsv2_gallery`
  MODIFY `gallery_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
