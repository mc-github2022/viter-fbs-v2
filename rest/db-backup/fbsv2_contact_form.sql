-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 11, 2025 at 09:55 AM
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
  `form_name` varchar(50) NOT NULL,
  `form_title` varchar(100) NOT NULL,
  `form_subtitle` varchar(100) NOT NULL,
  `form_address` varchar(100) NOT NULL,
  `form_accounting_no` varchar(50) NOT NULL,
  `form_company_no` varchar(50) NOT NULL,
  `form_web_no` varchar(50) NOT NULL,
  `form_services` varchar(50) NOT NULL,
  `form_img` text NOT NULL,
  `form_portfolio` text NOT NULL,
  `form_facebook_link` varchar(150) NOT NULL,
  `form_linkedin_link` varchar(150) NOT NULL,
  `form_youtube_link` varchar(150) NOT NULL,
  `form_instagram_link` varchar(150) NOT NULL,
  `form_tiktok_link` varchar(150) NOT NULL,
  `form_is_upload_file` tinyint(1) NOT NULL,
  `form_is_upload_input` tinyint(1) NOT NULL,
  `form_default_email` varchar(100) NOT NULL,
  `form_web_role` varchar(100) NOT NULL,
  `form_web_name` varchar(100) NOT NULL,
  `form_web_email` varchar(100) NOT NULL,
  `form_computer_role` varchar(100) NOT NULL,
  `form_computer_name` varchar(100) NOT NULL,
  `form_computer_email` varchar(100) NOT NULL,
  `form_accounting_role` varchar(100) NOT NULL,
  `form_accounting_name` varchar(100) NOT NULL,
  `form_accounting_email` varchar(100) NOT NULL,
  `form_hr_manager_role` varchar(100) NOT NULL,
  `form_hr_manager_name` varchar(100) NOT NULL,
  `form_hr_manager_email` varchar(100) NOT NULL,
  `form_hr_staff_role` varchar(100) NOT NULL,
  `form_hr_staff_name` varchar(100) NOT NULL,
  `form_hr_staff_email` varchar(100) NOT NULL,
  `form_page_id` varchar(20) NOT NULL,
  `form_created` datetime NOT NULL,
  `form_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_contact_form`
--

INSERT INTO `fbsv2_contact_form` (`form_aid`, `form_name`, `form_title`, `form_subtitle`, `form_address`, `form_accounting_no`, `form_company_no`, `form_web_no`, `form_services`, `form_img`, `form_portfolio`, `form_facebook_link`, `form_linkedin_link`, `form_youtube_link`, `form_instagram_link`, `form_tiktok_link`, `form_is_upload_file`, `form_is_upload_input`, `form_default_email`, `form_web_role`, `form_web_name`, `form_web_email`, `form_computer_role`, `form_computer_name`, `form_computer_email`, `form_accounting_role`, `form_accounting_name`, `form_accounting_email`, `form_hr_manager_role`, `form_hr_manager_name`, `form_hr_manager_email`, `form_hr_staff_role`, `form_hr_staff_name`, `form_hr_staff_email`, `form_page_id`, `form_created`, `form_updated`) VALUES
(3, 'Default', 'Let\'s work together. DEFAULT', 'How can we help you? ', 'Baloc road, Brgy. San Ignacio, San Pablo City, Laguna, 4000', 'Main & Accounting Office - (049) 501 3592', 'Company Phone No. - (+63) 927 168 6810', 'Web Office - (049) 530-2112', 'default', '[{\"name\":\"lets-talk2.jpg\",\"id\":\"1JGbjSoy85CKl31vu6KkOMVk_1L5P2GB8\",\"datetime\":\"2025-08-11 12:22:20\"}]', '[{\"name\":\"fbs-brochure-2024 (1).pdf\",\"id\":\"1XclLaIaz03ftEzX_upaOYCyFf-UXrbTt\",\"datetime\":\"2025-08-11 12:22:17\"}]', 'https://www.facebook.com/frontline.business', 'https://www.linkedin.com/company/frontline-business-solutions-inc', 'https://www.youtube.com/@frontlinebusinesssolutions6578', 'https://www.instagram.com/frontline.business', 'https://www.tiktok.com/@frontlinebusinessinc', 1, 0, 'marketing@frontlinebusiness.com.ph', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '22', '2025-08-11 12:22:12', '2025-08-11 13:53:18'),
(11, 'LCSS (College OJT)', 'Join our Team! COLLEGE OJT', 'Discover your potential with us.', 'Baloc road, Brgy. San Ignacio, San Pablo City, Laguna, 4000', 'Main & Accounting Office - (049) 501 3592', 'Company Phone No. - (+63) 927 168 6810', 'Web Office - (049) 530-2112', 'lcss services', '[{\"name\":\"lets-talk2.jpg\",\"id\":\"1TxTRGBa66t8mIqP5He3jFQH4GIOiJI27\",\"datetime\":\"2025-08-11 12:50:55\"}]', '[{\"name\":\"fbs-ojt-proposal-2024.pdf\",\"id\":\"1gaeel80RSPIAsXKXaqXDQFXXJwFU1mOA\",\"datetime\":\"2025-08-11 12:50:52\"}]', 'https://www.facebook.com/frontline.business', 'https://www.linkedin.com/company/frontline-business-solutions-inc', 'https://www.youtube.com/@frontlinebusinesssolutions6578', 'https://www.instagram.com/frontline.business', 'https://www.tiktok.com/@frontlinebusinessinc', 1, 1, '', '', '', '', 'Computer-Related Course', 'Ms. Herlyn Mae Torres', 'herlyn.torres@frontlinebusiness.com.ph', 'Accounting-Related Courses', 'Ms. Thea Lyzette Consignado', 'thea.consignado@frontlinebusiness.com.ph', '', '', '', '', '', '', '8', '2025-08-11 12:50:44', '2025-08-11 15:08:43'),
(12, 'LCSS (Immersion)', 'Join our Team!', 'Discover your potential with us.', 'Baloc road, Brgy. San Ignacio, San Pablo City, Laguna, 4000', 'Main & Accounting Office - (049) 501 3592', 'Company Phone No. - (+63) 927 168 6810', 'Web Office - (049) 530-2112', 'lcss services', '[{\"name\":\"lets-talk2.jpg\",\"id\":\"1lpVbWjBLpsVtXQe9As9nyqAYQSSioE0F\",\"datetime\":\"2025-08-11 13:00:40\"}]', '[{\"name\":\"FBS-Work-Immersion-Program-Proposal-2025.pdf\",\"id\":\"1ghQCViP-cBbUO4ih4g5c5lsdHR6OS-EM\",\"datetime\":\"2025-08-11 13:00:37\"}]', 'https://www.facebook.com/frontline.business', 'https://www.facebook.com/frontline.business', 'https://www.facebook.com/frontline.business', 'https://www.instagram.com/frontline.business', 'https://www.tiktok.com/@frontlinebusinessinc', 1, 1, '', '', '', '', 'Computer-Related Course', 'Ms. Herlyn Mae Torres', 'herlyn.torres@frontlinebusiness.com.ph', 'Accounting-Related Courses', 'Ms. Thea Lyzette Consignado', 'thea.consignado@frontlinebusiness.com.ph', '', '', '', '', '', '', '9', '2025-08-11 13:00:30', '2025-08-11 13:03:20'),
(13, 'Web Services', 'Let\'s work together. WEB SERVICES', 'How can we help you?', 'Baloc road, Brgy. San Ignacio, San Pablo City, Laguna, 4000', 'Main & Accounting Office - (049) 501 3592', 'Company Phone No. - (+63) 927 168 6810', 'Web Office - (049) 530-2112', 'web services', '[{\"name\":\"lets-talk2.jpg\",\"id\":\"1oizYKUx01-N2TsJ_MdsmrTWqDzaJ7qI9\",\"datetime\":\"2025-08-11 13:07:26\"}]', '[{\"name\":\"website-design-and-development-portfolio-2022-v3.pdf\",\"id\":\"1AvvNL0DdLYK5LXdB4htHlvfrv22lCKp7\",\"datetime\":\"2025-08-11 13:07:23\"}]', 'https://www.facebook.com/frontline.business', 'https://www.linkedin.com/company/frontline-business-solutions-inc', 'https://www.youtube.com/@frontlinebusinesssolutions6578', 'https://www.instagram.com/frontline.business', 'https://www.tiktok.com/@frontlinebusinessinc', 1, 0, '', 'Web Solutions Specialist', 'Jinuel Zymon Ramos', 'jinuel.ramos@frontlinebusiness.com.ph', '', '', '', '', '', '', '', '', '', '', '', '', '16', '2025-08-11 13:07:17', '2025-08-11 15:38:34'),
(14, 'Career', 'Join our Team! CAREER', 'Discover your potential with us.', 'Baloc road, Brgy. San Ignacio, San Pablo City, Laguna, 4000', 'Main & Accounting Office - (049) 501 3592', 'Company Phone No. - (+63) 927 168 6810', 'Web Office - (049) 530-2112', 'career', '[{\"name\":\"lets-talk2.jpg\",\"id\":\"1Ayr9bpAso1-P_LLdEXxYIz_uK0OGpowO\",\"datetime\":\"2025-08-11 13:10:52\"}]', '', 'https://www.facebook.com/frontline.business', 'https://www.linkedin.com/company/frontline-business-solutions-inc', 'https://www.youtube.com/@frontlinebusinesssolutions6578', 'https://www.instagram.com/frontline.business', 'https://www.tiktok.com/@frontlinebusinessinc', 0, 1, '', '', '', '', '', '', '', '', '', '', 'Human Resource Manager', 'Mrs. Rhoda Beloso', 'rhoda.beloso@frontlinebusiness.com.ph', 'Human Resource Staff', 'Mrs. Kennie Deriquito', 'kennie.deriquito@frontlinebusiness.com.ph', '25', '2025-08-11 13:10:49', '2025-08-11 15:30:44');

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
  MODIFY `form_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
