-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 18, 2025 at 09:50 AM
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
-- Table structure for table `fbsv2_services_wordpress_scope`
--

CREATE TABLE `fbsv2_services_wordpress_scope` (
  `wordpress_scope_aid` int(11) NOT NULL,
  `wordpress_scope_title` varchar(100) NOT NULL,
  `wordpress_scope_desc` text NOT NULL,
  `wordpress_scope_img` text NOT NULL,
  `wordpress_scope_button_text` varchar(20) NOT NULL,
  `wordpress_scope_created` datetime NOT NULL,
  `wordpress_scope_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_wordpress_scope`
--

INSERT INTO `fbsv2_services_wordpress_scope` (`wordpress_scope_aid`, `wordpress_scope_title`, `wordpress_scope_desc`, `wordpress_scope_img`, `wordpress_scope_button_text`, `wordpress_scope_created`, `wordpress_scope_datetime`) VALUES
(2, 'Quick Deployment', 'Our website development service utilizes Agile methodology to ensure a Quick Deployment feature. This approach allows for rapid and iterative development, enabling us to deploy functional website components efficiently and adapt quickly to changes throughout the development process.', '[{\"name\":\"quick-deployment.png\",\"id\":\"11OpZAiiLpZKATzJijF34HzpHZiz7lpk7\",\"datetime\":\"2025-06-18 15:46:26\"}]', 'Contact Us', '2025-06-18 15:46:24', '2025-06-18 15:46:24'),
(3, 'Optimized Fast Load Time', 'Our website development service includes a Fast Load Time feature, where we optimize website performance to ensure that pages load quickly. This involves advanced coding practices, efficient asset management, and performance-enhancing technologies.', '[{\"name\":\"page-insights.png\",\"id\":\"1Ev_d9dapQT9EWe3Fulj9eKWaGW-mLQkB\",\"datetime\":\"2025-06-18 15:47:14\"}]', 'Contact Us', '2025-06-18 15:47:11', '2025-06-18 15:47:11'),
(4, 'Basic SEO', 'Our Basic SEO setup enhances your website’s visibility on search engines, helping potential customers find you more easily. With targeted keyword optimization, proper meta tags, and site indexing in place within the first week, you\'ll be better positioned to attract organic traffic right from the start.', '[{\"name\":\"seo.png\",\"id\":\"197IangnRyTHboCLbjJesU07Xk4xRJ8S6\",\"datetime\":\"2025-06-18 15:47:59\"}]', 'Contact Us', '2025-06-18 15:47:57', '2025-06-18 15:47:57'),
(5, 'Content Management System', 'With our Content Management System, you have complete control over your website content, allowing you to update pages, blog posts, and media without needing a developer. This gives you the flexibility to keep your website fresh and relevant, putting you in charge of your own digital presence.', '[{\"name\":\"wordpress-dashboard.webp\",\"id\":\"1QgUQ2ybHHEuOesZXfK5Ous1A-3bgbg_-\",\"datetime\":\"2025-06-18 15:48:32\"}]', 'Contact Us', '2025-06-18 15:48:30', '2025-06-18 15:48:30'),
(6, 'Mobile Compatibility', 'Our website development service includes Mobile Compatibility, ensuring that your website is fully optimized for various mobile devices. This feature involves responsive design techniques that adapt the website’s layout and content to different screen sizes and orientations.', '[{\"name\":\"mobile-compatability.webp\",\"id\":\"1FsRYT0MJ4PbOw3pgd2YSrJZLe0xC1kRa\",\"datetime\":\"2025-06-18 15:49:04\"}]', 'Contact Us', '2025-06-18 15:49:01', '2025-06-18 15:49:01'),
(7, 'Malware Protection', 'Our website development service includes a Malware Protection feature, implementing robust security measures to detect, prevent, and remove malicious software. This feature encompasses regular security scans, real-time threat detection, and automated updates to safeguard your website.', '[{\"name\":\"security.png\",\"id\":\"1i1y-ogOQl96mr4gYzsliXInDjTRV-arL\",\"datetime\":\"2025-06-18 15:49:37\"}]', 'Contact Us', '2025-06-18 15:49:34', '2025-06-18 15:49:34'),
(8, 'SSL Certificate', 'Every website we build includes an SSL Certificate, ensuring secure, encrypted communication between your site and its visitors. This not only protects sensitive data but also boosts your credibility with search engines and customers, giving your website the trust it needs to succeed.', '[{\"name\":\"ssl.png\",\"id\":\"1oEqQSySrOjn24qEt2aOpIekdJR0LJsdT\",\"datetime\":\"2025-06-18 15:50:15\"}]', 'Contact Us', '2025-06-18 15:50:12', '2025-06-18 15:50:12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_wordpress_scope`
--
ALTER TABLE `fbsv2_services_wordpress_scope`
  ADD PRIMARY KEY (`wordpress_scope_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_wordpress_scope`
--
ALTER TABLE `fbsv2_services_wordpress_scope`
  MODIFY `wordpress_scope_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
