-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 07, 2025 at 10:06 AM
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
  `form_address` varchar(100) NOT NULL,
  `form_contacts` text NOT NULL,
  `form_img` text NOT NULL,
  `form_facebook_link` varchar(150) NOT NULL,
  `form_linkedin_link` varchar(150) NOT NULL,
  `form_youtube_link` varchar(150) NOT NULL,
  `form_instagram_link` varchar(150) NOT NULL,
  `form_tiktok_link` varchar(150) NOT NULL,
  `form_created` datetime NOT NULL,
  `form_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_contact_form`
--

INSERT INTO `fbsv2_contact_form` (`form_aid`, `form_address`, `form_contacts`, `form_img`, `form_facebook_link`, `form_linkedin_link`, `form_youtube_link`, `form_instagram_link`, `form_tiktok_link`, `form_created`, `form_updated`) VALUES
(1, 'Baloc road, Brgy. San Ignacio, San Pablo City, Laguna, 4000', '<ul className=\"[&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:mb-4 mb-6 md:mb-12 leading-[1.2] text-xs md:text-sm\">\n                <li className=\"!items-start\">\n                  <MdOutlinePhoneIphone />\n                  <p className=\"md:w-[50%]\">\n                    Main & Accounting Office - (049) 501 3592\n                  </p>\n                </li>\n                <li>\n                  <FaPhone />\n                  <p>\n                    Company Phone No. - (+63) 927 168 6810\n                  </p>\n                </li>\n                <li>\n                  <MdOutlinePhoneIphone />\n                  <p>\n                    Web Office - (049) 530-2112\n                  </p>\n                </li>\n                \n              </ul>', '[{\"name\":\"lets-talk2.jpg\",\"id\":\"1DuBgsd4_WXGvzQ-DkxMZpe_QmH7tgGy7\",\"datetime\":\"2025-08-07 14:42:39\"}]', 'https://www.facebook.com/frontline.business', 'https://www.linkedin.com/company/frontline-business-solutions-inc', 'https://www.youtube.com/@frontlinebusinesssolutions6578', 'https://www.instagram.com/frontline.business', 'https://www.tiktok.com/@frontlinebusinessinc', '2025-08-07 14:42:32', '2025-08-07 14:42:32');

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
