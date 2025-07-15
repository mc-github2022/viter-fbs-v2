-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 15, 2025 at 09:01 AM
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
-- Table structure for table `fbsv2_services_graphic_scope`
--

CREATE TABLE `fbsv2_services_graphic_scope` (
  `graphic_scope_aid` int(11) NOT NULL,
  `graphic_scope_title` varchar(100) NOT NULL,
  `graphic_scope_desc` text NOT NULL,
  `graphic_scope_img` text NOT NULL,
  `graphic_scope_button_text` varchar(20) NOT NULL,
  `graphic_scope_created` datetime NOT NULL,
  `graphic_scope_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_graphic_scope`
--

INSERT INTO `fbsv2_services_graphic_scope` (`graphic_scope_aid`, `graphic_scope_title`, `graphic_scope_desc`, `graphic_scope_img`, `graphic_scope_button_text`, `graphic_scope_created`, `graphic_scope_datetime`) VALUES
(1, 'Logo Design & Brand Identity', 'Make your mark with a logo and branding system that stands out.', '[{\"name\":\"sample-logo.webp\",\"id\":\"1PJ83iuOBD25LNwbez6CP0ak9esKnmY4Q\",\"datetime\":\"2025-07-15 14:49:51\"}]', 'Contact Us', '2025-07-15 14:49:45', '2025-07-15 14:50:16'),
(2, 'Book Cover Design', 'Eye-catching covers for print books, eBooks, and digital publications—perfect for authors, educators, and marketers.', '[{\"name\":\"sample-book-covers.webp\",\"id\":\"1AmukUIElmdFLDOwuKcVznK4Ck9AfkMS3\",\"datetime\":\"2025-07-15 14:51:10\"}]', 'Contact Us', '2025-07-15 14:51:04', '2025-07-15 14:51:04'),
(3, 'Social Media Graphics', 'Catch your audience’s attention with scroll-stopping visual content.', '[{\"name\":\"social-media-postings.webp\",\"id\":\"1cYx4Pc0Jlyd-y5mPKjbVq5fcXJaHjI5t\",\"datetime\":\"2025-07-15 14:58:20\"}]', 'Contact Us', '2025-07-15 14:57:16', '2025-07-15 14:58:17'),
(4, 'Marketing Design Materials', 'Posters, brochures, flyers, business cards, and other promotional materials.', '[{\"name\":\"sample-brochures.webp\",\"id\":\"1v9b_EHhlV1OmEDvKB_CRa_tsDXPlWFFG\",\"datetime\":\"2025-07-15 14:59:08\"}]', 'Contact Us', '2025-07-15 14:59:05', '2025-07-15 14:59:05'),
(5, 'Infographics & Visual Content', 'Turn complex information into engaging visuals your audience will understand.', '[{\"name\":\"sample-infographics.webp\",\"id\":\"1cua7_o2IyZKDmrjdQnl9ruRAog1qo11v\",\"datetime\":\"2025-07-15 14:59:58\"}]', 'Contact Us', '2025-07-15 14:59:55', '2025-07-15 14:59:55'),
(6, 'Digital Advertisements', 'Professionally designed banners and creatives for your online ads.', '[{\"name\":\"sample-advertisements.webp\",\"id\":\"1grhzYVUNP0oE91nK4lAKRpX_pjNhvQdC\",\"datetime\":\"2025-07-15 15:00:48\"}]', 'Contact Us', '2025-07-15 15:00:44', '2025-07-15 15:00:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_graphic_scope`
--
ALTER TABLE `fbsv2_services_graphic_scope`
  ADD PRIMARY KEY (`graphic_scope_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_graphic_scope`
--
ALTER TABLE `fbsv2_services_graphic_scope`
  MODIFY `graphic_scope_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
