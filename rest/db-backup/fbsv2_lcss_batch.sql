-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 01, 2025 at 09:40 AM
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
-- Table structure for table `fbsv2_lcss_batch`
--

CREATE TABLE `fbsv2_lcss_batch` (
  `lcss_batch_aid` int(11) NOT NULL,
  `lcss_batch_name` varchar(100) NOT NULL,
  `lcss_batch_category` varchar(100) NOT NULL,
  `lcss_batch_school` varchar(100) NOT NULL,
  `lcss_batch_course` varchar(100) NOT NULL,
  `lcss_batch_img` text NOT NULL,
  `lcss_batch_created` datetime NOT NULL,
  `lcss_batch_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_lcss_batch`
--

INSERT INTO `fbsv2_lcss_batch` (`lcss_batch_aid`, `lcss_batch_name`, `lcss_batch_category`, `lcss_batch_school`, `lcss_batch_course`, `lcss_batch_img`, `lcss_batch_created`, `lcss_batch_datetime`) VALUES
(15, 'Batch 1', 'College On-the-job Training', 'Laguna College', 'BS Computer Science', '2016405112148.webp, dsc_0001-1.webp, dsc_0002-2.webp, dsc_0005-5.webp', '0000-00-00 00:00:00', '2024-11-04 12:15:15'),
(16, 'Batch 2', 'College On-the-job Training', 'Pamantasan ng Lungsod ng San Pablo', 'BS Computer Engineering', '13487284_1379426098750714_109717399_n.webp', '2024-11-04 12:19:08', '2024-11-04 12:19:08'),
(17, 'Batch 3', 'College On-the-job Training', 'San Pablo Colleges', 'BS Information Technology', 'college.webp, college-3.jpg, img_5234.webp, img_5345.webp, img_5389.webp, img_5391.webp, img_5393.webp, img_5396.webp, img_5398.webp, img_5401.webp', '2024-11-04 12:34:11', '2024-11-04 12:34:11'),
(18, 'Batch 4', 'High School Work Immersion', 'San Pablo Colleges', 'ICT', 'immersion-60.webp, immersion-61.webp, immersion-62.webp, immersion-63.webp, immersion-64.webp, immersion-65.webp, immersion-81.webp, immersion-83.webp', '2024-11-04 12:40:22', '2024-11-04 12:40:22'),
(19, 'Batch 5', 'High School Work Immersion', 'San Pablo Colleges', 'ICT', 'img_1450.webp, img_1451.webp, img_1452.webp, img_1453.webp, img_1454.webp, img_1455.webp, img_1456.webp, img_1457.webp', '2024-11-04 12:49:44', '2024-11-04 12:49:44'),
(20, 'Batch 6', 'High School Work Immersion', 'San Pablo Colleges', 'ICT', 'b6-1.webp, b6-2.webp, b6-3.webp, b6-4.webp, b6-5.webp, b6-6.webp, b6-7.webp, b6-8.webp, b6-9.webp', '0000-00-00 00:00:00', '2024-11-04 13:17:33'),
(21, 'Batch 7', 'High School Work Immersion', 'San Pablo Colleges & ACLC San Pablo', 'STEM', 'b7-1.webp, b7-2.webp, b7-3.webp, b7-4.webp, b7-5.webp, b7-6.webp, b7-7.webp, b7-8.webp', '0000-00-00 00:00:00', '2024-11-04 14:31:55'),
(22, 'Batch 8', 'College On-the-job Training', 'Laguna State Polytechnic Univ. - SPC Campus', 'BS Information Technology', 'image1.webp, image4.webp', '0000-00-00 00:00:00', '2024-11-04 14:55:46'),
(23, 'Batch 9', 'High School Work Immersion', 'San Pablo Colleges', 'ICT', 'b1.webp, b1-5.webp, b1-new-4.webp, b1-new-11.webp, b9-1.webp, b9-2.webp, image1.webp, image2.webp, img_0036.webp, img_0040.webp, img_0061.webp, img_0068.webp', '2024-11-04 15:07:16', '2024-11-04 15:07:16'),
(24, 'Batch 10', 'High School Work Immersion', 'San Pablo Colleges', 'ICT', 'b10-1.webp, b10-2.webp, b10-3.webp, b10-4.webp, b10-5.webp, b10-6.webp, b10-7.webp, b10-8.webp, b10-9.webp', '0000-00-00 00:00:00', '2024-11-04 15:14:38'),
(25, 'Batch 11', 'High School Work Immersion', 'San Pablo Colleges', 'ICT', 'b11-1.webp, b11-2.webp, b11-3.webp, b11-4.webp, b11-5.webp, b11-6.webp, b11-7.webp, b11-8.webp, b11-9.webp, b11-10.webp', '2024-11-04 15:29:25', '2024-11-04 15:29:25'),
(26, 'Batch 12', 'High School Work Immersion', 'San Pablo Colleges', 'ICT', 'batch-8.webp, batch-8-1.webp, batch-8-2.webp, batch-8-3.webp, batch-8-5.webp, batch-8-7.webp, batch-8-8.webp, batch-8-9.webp', '2024-11-04 15:34:25', '2024-11-04 15:34:25'),
(27, 'Batch 13', 'High School Work Immersion', 'Greenville Academy of Sta. Clara', 'ABM', 'gva1.webp, gva2.webp, gva3.webp, gva4.webp, gva5.webp, gva6.webp, gva7.webp', '2024-11-04 15:44:20', '2024-11-04 15:44:20'),
(28, 'Batch 14', 'High School Work Immersion', 'St. Therese Montessori School', 'ABM', 'st.therese.webp, st.therese-2.webp', '2024-11-04 15:49:15', '2024-11-04 15:49:15'),
(29, 'Batch 15', 'High School Work Immersion', 'San Pablo Colleges', 'ICT', 'batch15-1.webp, batch15-2.webp, batch15-3.webp, batch15-4.webp, batch15-5.webp, batch15-6.webp, batch15-7.webp', '2024-11-05 10:38:50', '2024-11-05 10:38:50'),
(30, 'Batch 16', 'High School Work Immersion', 'San Pablo Colleges', 'ICT', 'batch16-1.webp, batch16-2.webp, batch16-3.webp, batch16-4.webp, batch16-5.webp, batch16-6.webp, batch16-7.webp', '0000-00-00 00:00:00', '2024-11-05 10:46:17'),
(31, 'Batch 20', 'High School Work Immersion', 'San Pablo Colleges', 'ICT', 'b20-1.webp, b20-2.webp, b20-3.webp, b20-4.webp, b20-5.webp, b20-6.webp', '2024-11-05 11:18:57', '2024-11-05 11:18:57'),
(32, 'Batch 21', 'College On-the-job Training', 'Laguna State Polytechnic Univ. - SPC Campus', 'BS Information Technology', 'b21-1.webp, b21-2.webp', '2024-11-05 11:23:56', '2024-11-05 11:23:56'),
(33, 'Batch 22', 'College On-the-job Training', 'Laguna State Polytechnic Univ. - SPC Campus', 'BS Computer Engineering', 'b22-1.webp, b22-2.webp, b22-3.webp', '2024-11-05 11:27:36', '2024-11-05 11:27:36'),
(34, 'Batch 25', 'College On-the-job Training', 'Cavite State Univ., PLSP, and Mariano Marcos Univ.', 'BS Computer Engineering & BS Computer Science', 'b25-1.webp, b25-2.webp, b25-3.webp, b25-4.webp', '2024-11-05 11:43:53', '2024-11-05 11:43:53'),
(35, 'Batch 26', 'Continuing Studies', 'Laguna College', 'BS Computer Science', 'b26-1.webp, b26-2.webp', '2024-11-05 11:46:45', '2024-11-05 11:46:45'),
(36, 'Batch 27', 'College On-the-job Training', 'STI College San Pablo & Batangas', 'BS Information Technology', 'b27.webp', '2024-11-05 11:49:14', '2024-11-05 11:49:14'),
(37, 'Batch 28', 'College On-the-job Training', 'ACLC - San Pablo', 'BS Information Tecnhnology', 'b28-1.webp, b28-2.webp', '2024-11-05 11:51:58', '2024-11-05 11:51:58'),
(38, 'Batch 29', 'College On-the-job Training', 'Teodoro Luansing College, Batangas State Univ., and Laguna State Polytechnic Univ. - SPC Campus', 'BS Information Technology', 'b29-1.webp, b29-2.webp, b29-3.webp, b29-4.webp, b29-5.webp', '0000-00-00 00:00:00', '2024-11-05 11:58:31'),
(39, 'Batch 30', 'College On-the-job Training', 'LSPU, Letran Calamba, Univ. of Batangas', 'BS Information Technology and BS Computer Engineering', 'b30-1.webp, b30-2.webp, b30-3.webp, b30-4.webp, b30-5.webp, b30-6.webp, b30-7.webp, b30-8.webp, b30-9.webp, b30-10.webp', '0000-00-00 00:00:00', '2024-11-05 12:13:06'),
(40, 'Batch 31', 'College On-the-job Training', 'De La Salle Lipa', 'BS Accounting Information System', 'b31.webp', '0000-00-00 00:00:00', '2024-11-05 12:20:30'),
(41, 'Batch 32', 'High School Work Immersion', 'Marcelino Fule Memo. College and San Pablo Colleges', 'ICT', 'img-0435.webp, img-0442.webp, img-0444.webp, img-0448.webp, img-0452.webp, img-0468.webp, img-0472.webp', '2024-11-05 12:30:34', '2024-11-05 12:30:34'),
(42, 'Batch 33', 'High School Work Immersion', 'Marcelino Fule Memo. College and San Pablo Colleges', 'ICT', 'b33-1.webp, b33-2.webp, b33-3.webp, b33-4.webp, b33-5.webp', '2024-11-05 12:53:46', '2024-11-05 12:53:46'),
(43, 'Batch 34', 'College On-the-job Training', 'PUP - Sta. Mesa, and LPU - Manila', 'BS Management Accounting and BS Accountancy', 'b34-1.webp, b34-2.webp', '2024-11-05 13:03:52', '2024-11-05 13:03:52'),
(44, 'Batch 35', 'High School Work Immersion', 'Marcelino Fule Memo. College', 'HUMSS', 'b35-1.webp, b35-2.webp, b35-3.webp, b35-4.webp, b35-5.webp, b35-6.webp, b35-7.webp, b35-8.webp, b35-9.webp, b35-10.webp', '2024-11-05 13:10:18', '2024-11-05 13:10:18'),
(45, 'Batch 36', 'College On-the-job Training', 'PUP - Lopez Quezon and STI College San Pablo', 'BS Information Technology', 'b36-1.webp, b36-2.webp, b36-3.webp, b36-4.webp, b36-5.webp, b36-6.webp, b36-7.webp, b36-8.webp, b36-9.webp, b36-10.webp, b36-11.webp, b36-12.webp, b36-13.webp, b36-14.webp', '2024-11-05 13:20:33', '2024-11-05 13:20:33'),
(46, 'Batch 37', 'High School Work Immersion', 'ACLC San Pablo', 'ABM', 'b37-1.webp, b37-2.webp, b37-3.webp, b37-4.webp, b37-5.webp', '2024-11-05 13:23:42', '2024-11-05 13:23:42'),
(47, 'Batch 38A', 'Continuing Studies', 'Laguna College', 'BS Computer Science', 'b38-5.webp, b38-6.webp, b38-7.webp, b38-8.webp, b38-9.webp, b38-10.webp', '0000-00-00 00:00:00', '2024-11-05 13:37:32'),
(48, 'Batch 38B', 'College On-the-job Training', 'Manuel S. Enverga University', 'BS Computer Engineering', 'b38-1.webp, b38-2.webp, b38-3.webp, b38-4.webp', '2024-11-05 13:38:54', '2024-11-05 13:38:54'),
(49, 'Batch 40', 'College On-the-job Training', 'De La Salle - Lipa', 'BS Computer Engineering', 'b40-1.webp, b40-2.webp, b40-3.webp, b40-4.webp, b40-5.webp, b40-6.webp, b40-7.webp, b40-8.webp, b40-9.webp, b40-10.webp, b40-11.webp, b40-12.webp, b40-13.webp, b40-14.webp, b40-15.webp', '0000-00-00 00:00:00', '2024-11-05 14:48:52'),
(50, 'Batch 42', 'Continuing Studies', 'PLSP & Laguna College', 'BS Information Technology', 'b42-1.webp, b42-2.webp', '2024-11-05 14:51:30', '2024-11-05 14:51:30'),
(51, 'Batch 43', 'Continuing Studies', 'Pamantasan ng Lungsod ng San Pablo', 'BS Computer Engineering', 'b43-1.webp, b43-2.webp, b43-3.webp, b43-4.webp, b43-5.webp, b43-6.webp, b43-7.webp', '2024-11-05 14:57:28', '2024-11-05 14:57:28'),
(52, 'Batch 45', 'College On-the-job Training', 'ACLC San Pablo', 'BS Accounting Technology', 'b45.webp', '2024-11-05 15:54:33', '2024-11-05 15:54:33'),
(53, 'Batch 47 - Batch 50', 'High School Work Immersion', 'South Lakes Integrated School', 'STEM, HUMSS, and ABM', 'b47-0.webp, b47-1.webp, b47-2.webp, b47-3.webp, b47-4.webp, b47-5.webp, b47-6.webp, b47-6-2.webp, b47-7.webp, b47-8.webp, b47-9.webp, b47-10.webp', '2024-11-05 15:55:36', '2024-11-05 15:55:36'),
(54, 'Batch 51', 'College On-the-job Training', 'DLSU - Lipa, Letran Calamba , and STI San Pablo', 'BS Computer Science and BS Information Technology', 'b51-1.webp, b51-2.webp, b51-3.webp, b51-4.webp, b51-5.webp, b51-6.webp, b51-7.webp, b51-8.webp, b51-9.webp', '2024-11-05 15:57:35', '2024-11-05 15:57:35'),
(55, 'Batch 52', 'High School Work Immersion', 'Greenville Academy of Sta. Clara', 'STEM', 'b52-0.webp, b52-1.webp, b52-2.webp, b52-3.webp, b52-4.webp, b52-5.webp, b52-10.webp, b52-11.webp, b52-12.webp, b52-15.webp, b52-17.webp, b52-21.webp, b52-22.webp', '2024-11-06 08:10:03', '2024-11-06 08:10:03'),
(56, 'Batch 53', 'High School Work Immersion', 'Greenville Academy of Sta. Clara', 'STEM', 'b53-1.webp, b53-2.webp, b53-3.webp', '2024-11-06 08:38:02', '2024-11-06 08:38:02'),
(57, 'Batch 54', 'High School Work Immersion', 'St. Therese Montessori School', 'ABM', 'b54-1.webp, b54-2.webp, b54-3.webp, b54-4.webp', '2024-11-06 08:54:13', '2024-11-06 08:54:13'),
(58, 'Batch 55', 'High School Work Immersion', 'San Pablo Colleges', 'ICT', 'b55-0.webp, b55-1.webp, b55-2.webp, b55-3.webp, b55-4.webp, b55-5.webp, b55-6.webp, b55-7.webp', '2024-11-06 09:37:37', '2024-11-06 09:37:37'),
(59, 'Batch 56', 'High School Work Immersion', 'San Pablo Colleges', 'ICT', 'b56-1.webp, b56-2.webp, b56-3.webp, b56-4.webp, b56-5.webp, b56-6.webp, b56-7.webp, b56-8.webp, b56-9.webp, b56-10.webp, b56-11.webp', '2024-11-06 09:51:42', '2024-11-06 09:51:42'),
(60, 'Batch 57', 'High School Work Immersion', 'St. Therese Montessori School', 'ABM', '[{\"name\":\"b57-1.webp\",\"id\":\"1rOVfBVeEc9dBGhV_syt6uiTFF06g4sHq\",\"datetime\":\"2025-03-01 16:36:11\"},{\"name\":\"b57-2.webp\",\"id\":\"1wuwMKzbg7ueDjwJ1NOvo9JUEXglWx7s6\",\"datetime\":\"2025-03-01 16:36:14\"},{\"name\":\"b57-3.webp\",\"id\":\"1tYPuGiAxXuhKG9M3KFGTqQT5SF69cGvP\",\"datetime\":\"2025-03-01 16:36:18\"},{\"name\":\"b57-4.webp\",\"id\":\"1vPh42dGdhg9FEGDAwlOFJVa5LvJFJYY_\",\"datetime\":\"2025-03-01 16:36:21\"},{\"name\":\"b57-5.webp\",\"id\":\"14Ee07ezMv4zgRfr9NTxTvSgVAtPtdVvw\",\"datetime\":\"2025-03-01 16:36:25\"},{\"name\":\"b57-6.webp\",\"id\":\"1ZpIBGVFJN3BGtP4H3KETRcZFCpRmAqEp\",\"datetime\":\"2025-03-01 16:36:28\"}]', '2024-11-06 09:59:17', '2025-03-01 16:36:07'),
(61, 'Batch 58', 'College On-the-job Training', 'Bicol University - Polangui', 'BS Computer Science', 'b58.webp', '2024-11-06 10:02:40', '2024-11-06 10:02:40'),
(62, 'Batch 59', 'College On-the-job Training', 'San Pablo Colleges', 'BS Psychology', 'b59.webp', '2024-11-06 10:14:28', '2024-11-06 10:14:28'),
(63, 'Batch 60', 'Continuing Studies', 'LSPU and ACLC', 'BS Information Technology', 'b60-1.webp, b60-2.webp, b60-3.webp', '0000-00-00 00:00:00', '2024-11-06 10:24:12'),
(64, 'Batch 61', 'Continuing Studies', 'Laguna College', 'BS Computer Science', 'b61-1.webp, b61-2.webp, b61-3.webp, b61-4.webp, b61-5.webp, b61-6.webp, b61-7.webp', '2024-11-06 10:25:01', '2024-11-06 10:25:01'),
(65, 'Batch 62', 'College On-the-job Training', 'South Luzon State University', 'BS Computer Engineering', 'b62-1.webp, b62-2.webp, b62-3.webp, b62-4.webp', '0000-00-00 00:00:00', '2024-11-06 10:30:01'),
(66, 'Batch 63', 'College On-the-job Training', 'Cavite State University ', 'BS Computer Engineering', '[{\"name\":\"b63-3.webp\",\"id\":\"1pDvSvF8jPm_FM8S1F4tJVpgd1hprmFK5\",\"datetime\":\"2025-03-01 15:40:30\"},{\"name\":\"b63-4.webp\",\"id\":\"1G5z9F4OZkNDHPHkC3KgRvgurRnlOO-WW\",\"datetime\":\"2025-03-01 15:40:33\"},{\"name\":\"b63-5.webp\",\"id\":\"1lwetI4IfEZFSitcXuXaT5aBCzO2PE7BI\",\"datetime\":\"2025-03-01 15:40:36\"},{\"name\":\"b63-6.webp\",\"id\":\"1QowUEtzsV7PByUXJEDpPTa5TIv5hPNYe\",\"datetime\":\"2025-03-01 15:40:39\"},{\"name\":\"Rectangle 4.png\",\"id\":\"1AMPsiTDr3t7NEOqcR_X4bVMOGT-7mXan\",\"datetime\":\"2025-03-01 16:06:39\"}]', '2024-11-06 10:40:10', '2025-03-01 16:06:35'),
(67, 'Batch 65', 'College On-the-job Training', 'Laguna State Polytechnic Univ. - SPC Campus', 'BS Computer Science', 'b65-1.webp, b65-2.webp, b65-3.webp, b65-4.webp, b65-5.webp, b65-6.webp', '2024-11-06 11:48:05', '2024-11-06 11:48:05'),
(68, 'Batch 66', 'Continuing Studies', 'PLSP and Laguna College', 'BSCpE and BSCS', '[{\"name\":\"b66-1.webp\",\"id\":\"1oDNvvjIlmAF9gANIqcviBlqbE0ZEfP1C\",\"datetime\":\"2025-03-01 16:24:02\"},{\"name\":\"b66-2.webp\",\"id\":\"1-vRdViku2_dC_YP9ZpG1UF94WyAhEI25\",\"datetime\":\"2025-03-01 16:24:05\"},{\"name\":\"b66-3.webp\",\"id\":\"1GctP-XRdMvVlmIjNZEfhyxJ9sxawwB9W\",\"datetime\":\"2025-03-01 16:24:08\"},{\"name\":\"b66-4.webp\",\"id\":\"127JYFRUzULeN_38XLtXx9JvyaopA6UUR\",\"datetime\":\"2025-03-01 16:24:14\"},{\"name\":\"b66-5.webp\",\"id\":\"1t60jinFc3X9HL3seHapYX__kb0WwXcH1\",\"datetime\":\"2025-03-01 16:24:17\"},{\"name\":\"b66-6.webp\",\"id\":\"1FpAG6SCIHdw6g1PeiUM6Qc-iid2LaIi_\",\"datetime\":\"2025-03-01 16:24:21\"}]', '2024-11-06 11:52:46', '2025-03-01 16:23:58'),
(69, 'Test Batch', 'College On-the-job Training', 'Test', 'Test', '[{\"name\":\"b65-1.webp\",\"id\":\"1OiQEiPEWIsy_-qVtcDSQQM4YfI4HE6dP\",\"datetime\":\"2025-03-01 14:44:17\"},{\"name\":\"b65-2.webp\",\"id\":\"1r8AFDwcm61ky3dsRTK42mOcd3mD_aRda\",\"datetime\":\"2025-03-01 14:44:20\"},{\"name\":\"b65-3.webp\",\"id\":\"1RjtwtJ1Mgpk8VHiKC3MNgUDr5h3CVGco\",\"datetime\":\"2025-03-01 14:44:23\"},{\"name\":\"b65-4.webp\",\"id\":\"1y0az59ruLF2nS2KDjNXQe1hA6TIlH4rU\",\"datetime\":\"2025-03-01 14:44:26\"},{\"name\":\"b65-5.webp\",\"id\":\"1SRFGhgJa7CaS5HxNW76WdaGcKd9lQLun\",\"datetime\":\"2025-03-01 14:44:29\"},{\"name\":\"b65-6.webp\",\"id\":\"1iXtmU50msh-RmVUHnVLWQUsLoCsZ2pAn\",\"datetime\":\"2025-03-01 14:44:31\"},{\"name\":\"Rectangle 4.png\",\"id\":\"19WRane1_1xJTUnE_rSFgdQkTpn8E63em\",\"datetime\":\"2025-03-01 16:06:12\"}]', '2025-03-01 14:44:14', '2025-03-01 16:06:08');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_lcss_batch`
--
ALTER TABLE `fbsv2_lcss_batch`
  ADD PRIMARY KEY (`lcss_batch_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_lcss_batch`
--
ALTER TABLE `fbsv2_lcss_batch`
  MODIFY `lcss_batch_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
