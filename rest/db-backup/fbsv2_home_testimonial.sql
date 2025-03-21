-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 21, 2025 at 07:51 AM
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
-- Table structure for table `fbsv2_home_testimonial`
--

CREATE TABLE `fbsv2_home_testimonial` (
  `home_testimonial_aid` int(11) NOT NULL,
  `home_testimonial_message` text NOT NULL,
  `home_testimonial_name` varchar(100) NOT NULL,
  `home_testimonial_position` varchar(100) NOT NULL,
  `home_testimonial_client_img` text NOT NULL,
  `home_testimonial_logo_img` text NOT NULL,
  `home_testimonial_created` datetime NOT NULL,
  `home_testimonial_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_home_testimonial`
--

INSERT INTO `fbsv2_home_testimonial` (`home_testimonial_aid`, `home_testimonial_message`, `home_testimonial_name`, `home_testimonial_position`, `home_testimonial_client_img`, `home_testimonial_logo_img`, `home_testimonial_created`, `home_testimonial_datetime`) VALUES
(12, 'FBS is a true partner to our firm. They have helped form our vision and trajectory. We are immensely grateful for our partnership. Our expectation is for FBS to grow with us. They are an important part of our success. And beyond the business perspective, they are fantastic people. We are blessed to work with them.', 'Robert Han', 'COO / Partner', '[{\"name\":\"testimonial-robert-han-2-img.png\",\"id\":\"1ai56tMUFI82wACHw8igE09IZBvQjRs33\",\"datetime\":\"2025-03-21 13:00:43\"}]', '[{\"name\":\"tm_logo_white.png\",\"id\":\"1ipOeOpMZHME2PGJ3BY2XhMo4vZyN8SD1\",\"datetime\":\"2025-03-21 13:00:45\"}]', '0000-00-00 00:00:00', '2025-03-21 13:00:51'),
(13, 'Frontline has been an incredible organization to work with.  They are friendly, accommodating, and professional, but what stands out most is how responsive they are.  When I have a problem or request, I don’t think there has been a single time that not only have I received a response within the day, but whatever it was that I needed, their team has met that need within the day as well. I would highly recommend working with them.', 'Duane Masters', 'Executive Director', '[{\"name\":\"testi-duane-masters-2.png\",\"id\":\"1AaGgqkAQyxbsu_Th6GBp9KN_onXq9tbz\",\"datetime\":\"2025-03-21 13:02:19\"}]', '[{\"name\":\"world-focus-home.png\",\"id\":\"15LlagxMuavaUZLE-MzTlVNCe8nv50r6n\",\"datetime\":\"2025-03-21 13:02:21\"}]', '0000-00-00 00:00:00', '2025-03-21 13:02:27'),
(14, 'We love working with FBS because they go the extra mile in doing the work. It’s nice to work with people who have the heart to serve. A mutually respecting relationship.', 'Hiro Isogawa', 'CEO, CPA, Partner', '[{\"name\":\"testimonial-hiro-isogawa-2.png\",\"id\":\"1nauNFGpMs_WZ9XrmvmpnPyVw634qQmrN\",\"datetime\":\"2025-03-21 13:03:26\"}]', '[{\"name\":\"tm_logo_white.png\",\"id\":\"1oqQe16gbHDzlApQozXP9k3QHd353iOXs\",\"datetime\":\"2025-03-21 13:03:29\"}]', '0000-00-00 00:00:00', '2025-03-21 13:03:33'),
(15, 'We couldn\'t be more pleased with the incredible work done by the team at Frontline Business Solutions on our latest book design. Their attention to detail, creativity, and dedication to capturing our vision truly exceeded our expectations. The final product is both visually stunning and highly professional. It\'s clear that they are passionate about their craft, and we are grateful for their partnership in bringing this project to life. Thank you for your hard work and excellence!', 'Jared Roberts', 'Partner', '[{\"name\":\"testimonial-jared-roberts.png\",\"id\":\"17HjeNqHFPxTHa4TsrGd19nm686GPukIv\",\"datetime\":\"2025-03-21 13:04:46\"}]', '[{\"name\":\"sent-ones.png\",\"id\":\"1TC6zUFdecA884HVwpmoqMeRa-ZBenkni\",\"datetime\":\"2025-03-21 13:04:49\"}]', '2024-10-30 09:33:24', '2025-03-21 13:04:55');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_home_testimonial`
--
ALTER TABLE `fbsv2_home_testimonial`
  ADD PRIMARY KEY (`home_testimonial_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_home_testimonial`
--
ALTER TABLE `fbsv2_home_testimonial`
  MODIFY `home_testimonial_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
