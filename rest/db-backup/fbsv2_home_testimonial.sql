-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 20, 2025 at 08:44 AM
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
(12, 'FBS is a true partner to our firm. They have helped form our vision and trajectory. We are immensely grateful for our partnership. Our expectation is for FBS to grow with us. They are an important part of our success. And beyond the business perspective, they are fantastic people. We are blessed to work with them.', 'Robert Han', 'COO / Partner', 'testimonial-robert-han-2-img.png', 'tm_logo_white.png', '0000-00-00 00:00:00', '2024-10-30 09:15:52'),
(13, 'Frontline has been an incredible organization to work with.  They are friendly, accommodating, and professional, but what stands out most is how responsive they are.  When I have a problem or request, I don’t think there has been a single time that not only have I received a response within the day, but whatever it was that I needed, their team has met that need within the day as well. I would highly recommend working with them.', 'Duane Masters', 'Executive Director', 'testi-duane-masters-2.png', 'world-focus-home.png', '0000-00-00 00:00:00', '2024-10-30 09:17:31'),
(14, 'We love working with FBS because they go the extra mile in doing the work. It’s nice to work with people who have the heart to serve. A mutually respecting relationship.', 'Hiro Isogawa', 'CEO, CPA, Partner', 'testimonial-hiro-isogawa-2.png', 'tm_logo_white.png', '0000-00-00 00:00:00', '2024-10-30 09:22:15'),
(15, 'We couldn\'t be more pleased with the incredible work done by the team at Frontline Business Solutions on our latest book design. Their attention to detail, creativity, and dedication to capturing our vision truly exceeded our expectations. The final product is both visually stunning and highly professional. It\'s clear that they are passionate about their craft, and we are grateful for their partnership in bringing this project to life. Thank you for your hard work and excellence!', 'Jared Roberts', 'Partner', 'testimonial-jared-roberts.png', 'sent-ones.png', '2024-10-30 09:33:24', '2024-10-30 09:33:24'),
(32, 'TEst', 'Test', 'Test', 'testimonial-jared-roberts.png', '[{\"name\":\"coffee-3.webp\",\"id\":\"1by5xrcIZm9JPHujStDtamGZ7Np-Bmzoc\",\"datetime\":\"2025-02-20 08:56:23\"}]', '2025-02-20 08:56:17', '2025-02-20 08:56:17'),
(33, 'Test Message', 'Test Name', 'Test Position', '[{\"name\":\"coffee-2.webp\",\"id\":\"1NSBjYKMwLc2M_kh_ErUDyQUJkX0P65o-\",\"datetime\":\"2025-02-20 15:44:02\"}]', '[{\"name\":\"salon-2.webp\",\"id\":\"1b0HqTs-dBkCHEMN7_MNA2CkJNuottK95\",\"datetime\":\"2025-02-20 15:44:05\"}]', '2025-02-20 15:43:59', '2025-02-20 15:43:59');

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
