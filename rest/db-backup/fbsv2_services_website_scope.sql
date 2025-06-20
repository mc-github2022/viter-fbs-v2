-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 20, 2025 at 07:35 AM
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
-- Table structure for table `fbsv2_services_website_scope`
--

CREATE TABLE `fbsv2_services_website_scope` (
  `website_scope_aid` int(11) NOT NULL,
  `website_scope_title` varchar(100) NOT NULL,
  `website_scope_desc` text NOT NULL,
  `website_scope_img` text NOT NULL,
  `website_scope_button_text` varchar(20) NOT NULL,
  `website_scope_created` datetime NOT NULL,
  `website_scope_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_website_scope`
--

INSERT INTO `fbsv2_services_website_scope` (`website_scope_aid`, `website_scope_title`, `website_scope_desc`, `website_scope_img`, `website_scope_button_text`, `website_scope_created`, `website_scope_datetime`) VALUES
(2, 'Responsive Design', 'We create websites that adapt seamlessly across all devices, ensuring optimal viewing and interaction on desktops, tablets, and smartphones.', '[{\"name\":\"mobile-compatability.webp\",\"id\":\"1l7gOiQ9KUXdbu04Bz5tJpPv1c333RcUx\",\"datetime\":\"2025-06-20 13:26:24\"}]', 'Contact Us', '2025-06-20 13:26:21', '2025-06-20 13:26:21'),
(3, 'User-Friendly Interface', 'We prioritize intuitive and easy-to-use interfaces, allowing visitors to find what they need quickly, enhancing the overall user experience.', '[{\"name\":\"user-friendly-interface.png\",\"id\":\"1q8i5falysuw3zttg2AMcxEAAwsLbEQ3_\",\"datetime\":\"2025-06-20 13:33:28\"}]', 'Contact Us', '2025-06-20 13:33:26', '2025-06-20 13:33:26'),
(4, 'Optimized for Fast Load Times', 'Our designs focus on content optimization, ensuring fast load times and smooth performance to keep users engaged and improve search engine rankings.', '[{\"name\":\"page-insights.png\",\"id\":\"1TA0KK7h-9oBwP9OGQJapbXSbWTalzAkx\",\"datetime\":\"2025-06-20 13:34:00\"}]', 'Contact Us', '2025-06-20 13:33:58', '2025-06-20 13:33:58'),
(5, 'SEO-Ready Design', 'We implement basic SEO practices to help your website rank higher on search engines, driving more organic traffic to your site.', '[{\"name\":\"seo.png\",\"id\":\"13hhKr70l52U1fUkIC2Lptf7Zb4yUkyFv\",\"datetime\":\"2025-06-20 13:34:29\"}]', 'Contact Us', '2025-06-20 13:34:26', '2025-06-20 13:34:26'),
(6, 'Custom Design Tailored to Your Brand', 'Each website is uniquely designed to reflect your brand’s identity, ensuring a cohesive and visually appealing online presence.', '[{\"name\":\"custom-design.webp\",\"id\":\"1tGQLlsAbbR6EONhlrnUlaDBChLBEAuEI\",\"datetime\":\"2025-06-20 13:35:03\"}]', 'Contact Us', '2025-06-20 13:35:01', '2025-06-20 13:35:01'),
(7, 'High-Quality Visuals', 'Our design service includes high-quality graphics and imagery, ensuring that your website is both engaging and professional.', '[{\"name\":\"high-quality-visuals.webp\",\"id\":\"1oe5lFfjZOY7lxVPdnuLKpp_05P4aRLNZ\",\"datetime\":\"2025-06-20 13:35:33\"}]', 'Contact Us', '2025-06-20 13:35:30', '2025-06-20 13:35:30');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_website_scope`
--
ALTER TABLE `fbsv2_services_website_scope`
  ADD PRIMARY KEY (`website_scope_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_website_scope`
--
ALTER TABLE `fbsv2_services_website_scope`
  MODIFY `website_scope_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
