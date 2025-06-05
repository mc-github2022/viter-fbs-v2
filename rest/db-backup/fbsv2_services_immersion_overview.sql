-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 05, 2025 at 06:10 AM
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
-- Table structure for table `fbsv2_services_immersion_overview`
--

CREATE TABLE `fbsv2_services_immersion_overview` (
  `immersion_overview_aid` int(11) NOT NULL,
  `immersion_overview_subtitle` varchar(100) NOT NULL,
  `immersion_overview_title` varchar(100) NOT NULL,
  `immersion_overview_img` text NOT NULL,
  `immersion_overview_file` text NOT NULL,
  `immersion_overview_button_text` varchar(20) NOT NULL,
  `immersion_overview_list_title_a` varchar(100) NOT NULL,
  `immersion_overview_list_description_a` varchar(500) NOT NULL,
  `immersion_overview_list_title_b` varchar(100) NOT NULL,
  `immersion_overview_list_description_b` varchar(500) NOT NULL,
  `immersion_overview_list_title_c` varchar(100) NOT NULL,
  `immersion_overview_list_description_c` varchar(500) NOT NULL,
  `immersion_overview_created` datetime NOT NULL,
  `immersion_overview_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_immersion_overview`
--

INSERT INTO `fbsv2_services_immersion_overview` (`immersion_overview_aid`, `immersion_overview_subtitle`, `immersion_overview_title`, `immersion_overview_img`, `immersion_overview_file`, `immersion_overview_button_text`, `immersion_overview_list_title_a`, `immersion_overview_list_description_a`, `immersion_overview_list_title_b`, `immersion_overview_list_description_b`, `immersion_overview_list_title_c`, `immersion_overview_list_description_c`, `immersion_overview_created`, `immersion_overview_datetime`) VALUES
(0, 'We Offer Senior High School Work Immersion With', 'Actual Work-Related Experience.', '[{\"name\":\"workimmersion-sige-img.jpg\",\"id\":\"1SaMOHqPx4L0x0Cdm8ZBNz_BEINzo-OXG\",\"datetime\":\"2025-06-05 10:31:06\"}]', '[{\"name\":\"FBS-Work-Immersion-Program-Proposal-2025.pdf\",\"id\":\"1BwqfxsY-uz847Ap7jyoXHn3z_RNaZA-M\",\"datetime\":\"2025-06-05 10:31:11\"}]', 'Partner with us', 'Work-Related Experience', 'Students get hands-on, real-world experience, allowing them to apply knowledge in practical settings, preparing them for the demands of their future careers.', 'Expert-Led Training', 'Receive guidance and mentorship from industry experts who provide valuable insights, technical skills, and personalized support to help you excel in your chosen field.', 'Higher Employability', 'By gaining industry-aligned experience and expert training, students enhance their employability, making them more competitive in the job market and ready for career opportunities.', '2025-06-05 10:31:03', '2025-06-05 10:35:27');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
