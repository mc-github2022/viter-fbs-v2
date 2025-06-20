-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 20, 2025 at 03:13 AM
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
-- Table structure for table `fbsv2_services_singlepage_scope`
--

CREATE TABLE `fbsv2_services_singlepage_scope` (
  `singlepage_scope_aid` int(11) NOT NULL,
  `singlepage_scope_title` varchar(100) NOT NULL,
  `singlepage_scope_desc` text NOT NULL,
  `singlepage_scope_img` text NOT NULL,
  `singlepage_scope_button_text` varchar(20) NOT NULL,
  `singlepage_scope_created` datetime NOT NULL,
  `singlepage_scope_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_singlepage_scope`
--

INSERT INTO `fbsv2_services_singlepage_scope` (`singlepage_scope_aid`, `singlepage_scope_title`, `singlepage_scope_desc`, `singlepage_scope_img`, `singlepage_scope_button_text`, `singlepage_scope_created`, `singlepage_scope_datetime`) VALUES
(2, 'Quick Deployment', 'Our website development service utilizes Agile methodology to ensure a Quick Deployment feature. This approach allows for rapid and iterative development, enabling us to deploy functional website components efficiently and adapt quickly to changes throughout the development process.', '[{\"name\":\"quick-deployment.png\",\"id\":\"1ivXXBrEDMk9-AVjLAhjlv7Y4Qrm59lNe\",\"datetime\":\"2025-06-20 09:09:23\"}]', 'Contact Us', '2025-06-20 09:09:20', '2025-06-20 09:09:20'),
(3, 'Optimized Fast Load Time', 'Our website development service includes a Fast Load Time feature, where we optimize website performance to ensure that pages load quickly. This involves advanced coding practices, efficient asset management, and performance-enhancing technologies.', '[{\"name\":\"page-insights.png\",\"id\":\"19LmxpSJ-Kd1FLGqgHMCiQO8qdzdEwvL8\",\"datetime\":\"2025-06-20 09:11:21\"}]', 'Contact Us', '2025-06-20 09:11:18', '2025-06-20 09:11:18'),
(4, 'Basic SEO', 'Our Basic SEO setup enhances your website’s visibility on search engines, helping potential customers find you more easily. With targeted keyword optimization, proper meta tags, and site indexing in place within the first week, you\'ll be better positioned to attract organic traffic right from the start.', '[{\"name\":\"seo.png\",\"id\":\"1d8VgWJXfXCv2bVv4tn5CiseERKxbJ3bK\",\"datetime\":\"2025-06-20 09:11:53\"}]', 'Contact Us', '2025-06-20 09:11:50', '2025-06-20 09:11:50'),
(5, 'Mobile Compatibility', 'Our website development service includes Mobile Compatibility, ensuring that your website is fully optimized for various mobile devices. This feature involves responsive design techniques that adapt the website’s layout and content to different screen sizes and orientations.', '[{\"name\":\"mobile-compatability.webp\",\"id\":\"1Zk94CIoolxBwASQZ4HFYaxrWmYWMAbYc\",\"datetime\":\"2025-06-20 09:12:27\"}]', 'Contact Us', '2025-06-20 09:12:24', '2025-06-20 09:12:24'),
(6, 'Malware Protection', 'Our website development service includes a Malware Protection feature, implementing robust security measures to detect, prevent, and remove malicious software. This feature encompasses regular security scans, real-time threat detection, and automated updates to safeguard your website.', '[{\"name\":\"security.png\",\"id\":\"1iF5EZ5i32btgDLLGBaZeAzZ5o0ITIMR-\",\"datetime\":\"2025-06-20 09:13:03\"}]', 'Contact Us', '2025-06-20 09:13:01', '2025-06-20 09:13:01'),
(7, 'SSL Certificate', 'Every website we build includes an SSL Certificate, ensuring secure, encrypted communication between your site and its visitors. This not only protects sensitive data but also boosts your credibility with search engines and customers, giving your website the trust it needs to succeed.', '[{\"name\":\"ssl.png\",\"id\":\"1RLQNQyuq3siVgLXI175moYRRqQgrOpaY\",\"datetime\":\"2025-06-20 09:13:36\"}]', 'Contact Us', '2025-06-20 09:13:33', '2025-06-20 09:13:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_singlepage_scope`
--
ALTER TABLE `fbsv2_services_singlepage_scope`
  ADD PRIMARY KEY (`singlepage_scope_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_singlepage_scope`
--
ALTER TABLE `fbsv2_services_singlepage_scope`
  MODIFY `singlepage_scope_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
