-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 24, 2025 at 02:37 AM
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
-- Table structure for table `fbsv2_partners`
--

CREATE TABLE `fbsv2_partners` (
  `partners_aid` int(11) NOT NULL,
  `partners_page` varchar(100) NOT NULL,
  `partners_name` varchar(200) NOT NULL,
  `partners_img` text NOT NULL,
  `partners_created` datetime NOT NULL,
  `partners_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_partners`
--

INSERT INTO `fbsv2_partners` (`partners_aid`, `partners_page`, `partners_name`, `partners_img`, `partners_created`, `partners_datetime`) VALUES
(2, 'College On-the-job- Training', 'ACLC', '[{\"name\":\"aclc.png\",\"id\":\"1wtgaSBBfTGaOP2nCZglAwc8HelqANt5S\",\"datetime\":\"2025-03-23 21:06:33\"}]', '2025-03-23 21:06:29', '2025-03-23 21:06:29'),
(3, 'College On-the-job- Training', 'DLSL', '[{\"name\":\"dlsl_official_logo.png\",\"id\":\"1jRUvjK2-Qaz05ftLey7PTSrRnp-G2xPD\",\"datetime\":\"2025-03-24 07:40:05\"}]', '2025-03-24 07:40:00', '2025-03-24 07:40:00'),
(4, 'College On-the-job- Training', 'CSU', '[{\"name\":\"csu.png\",\"id\":\"1qCaQqW4eOtESEVFiaNqy_Y58RLVA1HF0\",\"datetime\":\"2025-03-24 07:40:53\"}]', '2025-03-24 07:40:50', '2025-03-24 07:40:50'),
(5, 'College On-the-job- Training', 'Batangas State University', '[{\"name\":\"bsu.png\",\"id\":\"1nYBlzi3VqfX887s1qhC3Q-R7UiKHoELw\",\"datetime\":\"2025-03-24 07:41:23\"}]', '2025-03-24 07:41:19', '2025-03-24 07:41:19'),
(6, 'College On-the-job- Training', 'Letran', '[{\"name\":\"Letran.png\",\"id\":\"1Nsh97IIEGHJ0wGTrAV2g9Pi6QtrEgkvM\",\"datetime\":\"2025-03-24 07:41:56\"}]', '2025-03-24 07:41:49', '2025-03-24 07:41:49'),
(7, 'College On-the-job- Training', 'LPU', '[{\"name\":\"lpu.png\",\"id\":\"1uHkZy3uE4x6aMcNX5lZG2L84w1kNjbl_\",\"datetime\":\"2025-03-24 07:42:18\"}]', '2025-03-24 07:42:12', '2025-03-24 07:42:12'),
(8, 'College On-the-job- Training', 'Bicol University', '[{\"name\":\"bicol-univ.png\",\"id\":\"1ZwlIJ9EibAGfpftXc0iWonslpJCu37UH\",\"datetime\":\"2025-03-24 07:42:53\"}]', '2025-03-24 07:42:50', '2025-03-24 07:42:50'),
(9, 'College On-the-job- Training', 'LSPU', '[{\"name\":\"lspu.png\",\"id\":\"10_mGn2A1UlL8XDjZD3ss0dRZzbUHopYY\",\"datetime\":\"2025-03-24 07:43:13\"}]', '2025-03-24 07:43:10', '2025-03-24 07:43:10'),
(10, 'College On-the-job- Training', 'PUP', '[{\"name\":\"pup.png\",\"id\":\"1_k4mRM7k3c5ZvqTtJoDCPWgA2CivdkFm\",\"datetime\":\"2025-03-24 07:43:34\"}]', '2025-03-24 07:43:31', '2025-03-24 07:43:31'),
(11, 'College On-the-job- Training', 'SPC', '[{\"name\":\"spc.png\",\"id\":\"15SMeQ9o6sQRaSQV_MjZOwKpu2lWyL9kA\",\"datetime\":\"2025-03-24 07:43:49\"}]', '2025-03-24 07:43:47', '2025-03-24 07:43:47'),
(12, 'College On-the-job- Training', 'STI', '[{\"name\":\"sti.png\",\"id\":\"1O8OZtK7Ui8SX9UDCRZTV3aIMCSvNxuD-\",\"datetime\":\"2025-03-24 07:44:08\"}]', '2025-03-24 07:44:04', '2025-03-24 07:44:04'),
(13, 'College On-the-job- Training', 'TIP', '[{\"name\":\"tip.png\",\"id\":\"1fjvG0mSyY6XCgBl_v5NXnSPp4-32VYxa\",\"datetime\":\"2025-03-24 07:44:32\"}]', '2025-03-24 07:44:29', '2025-03-24 07:44:29'),
(14, 'College On-the-job- Training', 'TMLC', '[{\"name\":\"tmlc.png\",\"id\":\"1h4z0Nzjkp_dnRCInCoSXckro2dMibkyz\",\"datetime\":\"2025-03-24 07:44:52\"}]', '2025-03-24 07:44:49', '2025-03-24 07:44:49'),
(15, 'College On-the-job- Training', 'University of Batangas', '[{\"name\":\"ub.png\",\"id\":\"1R0dLrYqE_E85rWYHbEU_gDRY6uVjfQHG\",\"datetime\":\"2025-03-24 07:45:17\"}]', '2025-03-24 07:45:14', '2025-03-24 07:45:14'),
(16, 'High School Work Immersion', 'ACLC', '[{\"name\":\"aclc (1).png\",\"id\":\"1ddiR-anv64XyNqf1saopCYmbiiKt01nm\",\"datetime\":\"2025-03-24 07:48:07\"}]', '2025-03-24 07:48:04', '2025-03-24 07:48:04'),
(17, 'High School Work Immersion', 'Greenville Academy', '[{\"name\":\"gva.png\",\"id\":\"1gFaHffTz19MkUEA1wUAuyM8RcnftznFL\",\"datetime\":\"2025-03-24 07:49:08\"}]', '2025-03-24 07:49:05', '2025-03-24 07:49:05'),
(18, 'High School Work Immersion', 'Marcelino Fule Memorial College', '[{\"name\":\"mfmc.png\",\"id\":\"1D69D5G7hNWkX3rSkUah7bHaRykd8WMCk\",\"datetime\":\"2025-03-24 07:49:57\"}]', '2025-03-24 07:49:54', '2025-03-24 07:49:54'),
(19, 'High School Work Immersion', 'South Lakes', '[{\"name\":\"slis.png\",\"id\":\"1v1zHmNLqEUTnUhc5G0RfDPT0ZVwSX9px\",\"datetime\":\"2025-03-24 07:50:25\"}]', '2025-03-24 07:50:22', '2025-03-24 07:50:22'),
(20, 'High School Work Immersion', 'SPC', '[{\"name\":\"spc.png\",\"id\":\"1IxCjjHpRIX9y8ivdS_JqSJkR8gm1NjCN\",\"datetime\":\"2025-03-24 07:50:40\"}]', '2025-03-24 07:50:37', '2025-03-24 07:50:37'),
(21, 'High School Work Immersion', 'STMS', '[{\"name\":\"stms.png\",\"id\":\"1sWIzeomRjrTw0nQ3TNP-qyddg1yM01X5\",\"datetime\":\"2025-03-24 07:50:57\"}]', '2025-03-24 07:50:54', '2025-03-24 07:50:54'),
(22, 'Home Page', 'Avant', '[{\"name\":\"logo-avant-white.png\",\"id\":\"1hQ-e64nLKlrSAUtQ12Wc9HC5MfdQvt_o\",\"datetime\":\"2025-03-24 07:54:50\"}]', '2025-03-24 07:54:47', '2025-03-24 07:54:47'),
(23, 'Home Page', 'Face the Children', '[{\"name\":\"ftc-e1716532807623.png\",\"id\":\"1S5IMmu15hvaPsxq7RvkqXpIsbFw4ZOcT\",\"datetime\":\"2025-03-24 07:55:35\"}]', '2025-03-24 07:55:32', '2025-03-24 07:55:32'),
(24, 'Home Page', 'Go Mission Trip', '[{\"name\":\"logo-go-mission-trip.png\",\"id\":\"14yUAmE4cI7_oWYkPyH_bnGY3ioR3ypJh\",\"datetime\":\"2025-03-24 07:56:01\"}]', '2025-03-24 07:55:58', '2025-03-24 07:55:58'),
(25, 'Home Page', 'Jesus Christ\'s CEO\'s', '[{\"name\":\"jcceos-logo.png\",\"id\":\"137u9nAEA164SSyC-dTj4etD7XWEbwZaz\",\"datetime\":\"2025-03-24 07:56:46\"}]', '2025-03-24 07:56:43', '2025-03-24 07:56:43'),
(26, 'Home Page', 'Light Up', '[{\"name\":\"lightuptoy.png\",\"id\":\"1u-S9Ztkh45DpxrtTb7SGSjggl_7Idsap\",\"datetime\":\"2025-03-24 07:57:02\"}]', '2025-03-24 07:56:59', '2025-03-24 07:56:59'),
(27, 'Home Page', 'Rebekah Nicole', '[{\"name\":\"rebekah.png\",\"id\":\"1pFTLq30tEWy5oxcryfkToyacdxLcIrjR\",\"datetime\":\"2025-03-24 07:57:31\"}]', '2025-03-24 07:57:25', '2025-03-24 07:57:25'),
(28, 'Home Page', 'World Focus', '[{\"name\":\"logo-world-focus.png\",\"id\":\"1NbAoSePcqdzmEhVUXPk5o6ZZ2pdv3a7R\",\"datetime\":\"2025-03-24 07:58:08\"}]', '2025-03-24 07:58:05', '2025-03-24 07:58:05'),
(29, 'Home Page', 'Twomiles', '[{\"name\":\"tm_logo_dark.png\",\"id\":\"1n_CYptjvcaJ31HynL5-hW3sfQyl3uxBL\",\"datetime\":\"2025-03-24 07:58:28\"}]', '2025-03-24 07:58:24', '2025-03-24 07:58:24'),
(30, 'Home Page', 'GC Foundation', '[{\"name\":\"gc-foundation.png\",\"id\":\"1DA6xuEfInw_Ou1ySA5uDExZOJOQRTd_j\",\"datetime\":\"2025-03-24 07:58:47\"}]', '2025-03-24 07:58:43', '2025-03-24 07:58:43'),
(31, 'Home Page', 'GC Friends', '[{\"name\":\"gc-friends.png\",\"id\":\"1asH8M9LobbSLOCTGji6OaEU1yLcEYk9P\",\"datetime\":\"2025-03-24 07:59:03\"}]', '2025-03-24 07:59:00', '2025-03-24 07:59:00'),
(32, 'HR Information System', 'Ben\'s Halo-halo', '[{\"name\":\"benshalo.png\",\"id\":\"1mZDiNWmrDNWgQ3TOqM6sVIvDesytZJdW\",\"datetime\":\"2025-03-24 08:07:53\"}]', '2025-03-24 08:07:50', '2025-03-24 08:07:50'),
(33, 'HR Information System', 'D to D BPO Solutions', '[{\"name\":\"dtod-bpo.png\",\"id\":\"1F5Ux9fa_91-dS3c_ODVXzhtAiRK4-bJM\",\"datetime\":\"2025-03-24 08:08:22\"}]', '2025-03-24 08:08:19', '2025-03-24 08:08:19'),
(34, 'HR Information System', 'OBIC', '[{\"name\":\"web-obich.png\",\"id\":\"11aWtt82Ycwz51fybSHGlbim_EVldFcul\",\"datetime\":\"2025-03-24 08:08:38\"}]', '2025-03-24 08:08:35', '2025-03-24 08:08:35'),
(35, 'HR Information System', 'Victories Business Support Services', '[{\"name\":\"web-victorious-virtual-hub.png\",\"id\":\"1E6de7ZMO1c1m0nfBv7chYO0hFuLexXmd\",\"datetime\":\"2025-03-24 08:09:08\"}]', '2025-03-24 08:09:05', '2025-03-24 08:09:05'),
(36, 'Online Payroll System', 'AKA Global', '[{\"name\":\"aka-global.png\",\"id\":\"1i1m2aH6SOyo1Rm8qfC3Bg32XZPEBREb8\",\"datetime\":\"2025-03-24 08:13:42\"}]', '2025-03-24 08:13:39', '2025-03-24 08:13:39'),
(37, 'Online Payroll System', 'Ben\'s Halo-halo', '[{\"name\":\"benshalo.png\",\"id\":\"1O1NhV0RAo8yzJU-HkviVi9QuJjlzCK_X\",\"datetime\":\"2025-03-24 08:14:03\"}]', '2025-03-24 08:14:00', '2025-03-24 08:14:00'),
(38, 'Online Payroll System', 'D to D BPO Solutions', '[{\"name\":\"dtod-bpo.png\",\"id\":\"1aMa9oZpkh0r_XH0ziknAojttNlRAl7u9\",\"datetime\":\"2025-03-24 08:14:29\"}]', '2025-03-24 08:14:26', '2025-03-24 08:14:26'),
(39, 'Administrative', 'Jesus Christ\'s CEO\'s', '[{\"name\":\"jcceos-logo.png\",\"id\":\"1E88OphRDWa5tM1LQyRNRMmOb2GMw7OBq\",\"datetime\":\"2025-03-24 08:23:37\"}]', '2025-03-24 08:23:34', '2025-03-24 08:23:34'),
(40, 'Administrative', 'Avant', '[{\"name\":\"logo-avant-white.png\",\"id\":\"158LYlXuxr5oW5hkeCMTGvwvHq8HwGDy8\",\"datetime\":\"2025-03-24 08:24:10\"}]', '2025-03-24 08:24:06', '2025-03-24 08:24:06'),
(41, 'Administrative', 'Ignite', '[{\"name\":\"logo-ignite.png\",\"id\":\"1yrGjhZBlyM-w-EbFA6mn8LcX_j4Sr84n\",\"datetime\":\"2025-03-24 08:24:24\"}]', '2025-03-24 08:24:21', '2025-03-24 08:24:21'),
(42, 'Business Support', 'Jesus Christ\'s CEO\'s', '[{\"name\":\"jcceos-logo.png\",\"id\":\"1781SVlu2KxFMlG0sqkYJK009yuqGjoXq\",\"datetime\":\"2025-03-24 08:26:35\"}]', '2025-03-24 08:26:32', '2025-03-24 08:26:32'),
(43, 'Business Support', 'Avant', '[{\"name\":\"logo-avant-white.png\",\"id\":\"1iiaLZ83VSh-qjrS5kpUWcCRH-UXdnU0Y\",\"datetime\":\"2025-03-24 08:26:52\"}]', '2025-03-24 08:26:49', '2025-03-24 08:26:49'),
(44, 'Business Support', 'Ignite', '[{\"name\":\"logo-ignite.png\",\"id\":\"1us8mV-Qs5npC_NDrxi0bl5c_1WpHeM3N\",\"datetime\":\"2025-03-24 08:27:06\"}]', '2025-03-24 08:27:02', '2025-03-24 08:27:02'),
(45, 'Marketing', 'Jesus Christ\'s CEO\'s', '[{\"name\":\"jcceos-logo.png\",\"id\":\"1rnCjX7JIbwe26yzvDE80tSwJP3TNXwTW\",\"datetime\":\"2025-03-24 09:07:54\"}]', '2025-03-24 09:07:50', '2025-03-24 09:07:50'),
(46, 'Marketing', 'Avant', '[{\"name\":\"logo-avant-white.png\",\"id\":\"13TPxRFHVqyerTvDrzMbNykXSwGp0Lc9d\",\"datetime\":\"2025-03-24 09:08:22\"}]', '2025-03-24 09:08:19', '2025-03-24 09:08:19'),
(47, 'Marketing', 'Ignite', '[{\"name\":\"logo-ignite.png\",\"id\":\"1_lHZmjzku4jbAIg3D6D01UrXD4mDQu2G\",\"datetime\":\"2025-03-24 09:08:48\"}]', '2025-03-24 09:08:45', '2025-03-24 09:08:45'),
(48, 'WordPress CMS Website', 'Frontline Christian Academy', '[{\"name\":\"fca-logo-horizontal.png\",\"id\":\"13mKiXjLzVQeghqTndkER2PINYsXNpSYr\",\"datetime\":\"2025-03-24 09:12:08\"}]', '2025-03-24 09:12:05', '2025-03-24 09:12:05'),
(49, 'WordPress CMS Website', 'Frontline Worship Center', '[{\"name\":\"logo-fwc.png\",\"id\":\"1DwCcNzlTtK8zgYtEYX5zg-3N78ehuXZM\",\"datetime\":\"2025-03-24 09:12:55\"}]', '2025-03-24 09:12:53', '2025-03-24 09:12:53'),
(50, 'WordPress CMS Website', 'Go Mission Trip', '[{\"name\":\"logo-go-mission-trip.png\",\"id\":\"1fGAC0Tsetibe3cnVwzmt6Y9KcCv4xNIx\",\"datetime\":\"2025-03-24 09:13:15\"}]', '2025-03-24 09:13:12', '2025-03-24 09:13:12'),
(51, 'WordPress CMS Website', 'Hiro Isogawa Blog', '[{\"name\":\"logo-hiro-isogawa.png\",\"id\":\"1gy9A0dMXPxK-Bl6YZ1FLQ2iOA1sxy4vj\",\"datetime\":\"2025-03-24 09:13:39\"}]', '2025-03-24 09:13:36', '2025-03-24 09:13:36'),
(52, 'WordPress CMS Website', 'PHIX', '[{\"name\":\"logo-phixgenomics.png\",\"id\":\"148hU3Z4vj1oTdt1j4JOOcUh_VbvOjwGe\",\"datetime\":\"2025-03-24 09:14:00\"}]', '2025-03-24 09:13:57', '2025-03-24 09:13:57'),
(53, 'WordPress CMS Website', 'World Focus', '[{\"name\":\"logo-world-focus.png\",\"id\":\"1i8pDhJRBTsEsnqb799NSVdYbkVlezGu_\",\"datetime\":\"2025-03-24 09:14:16\"}]', '2025-03-24 09:14:13', '2025-03-24 09:14:13'),
(54, 'WordPress CMS Website', 'Twomiles', '[{\"name\":\"tm_logo_dark.png\",\"id\":\"12BTlrpa1Nd8NBdkUXnChvnA7ZusCApWB\",\"datetime\":\"2025-03-24 09:14:29\"}]', '2025-03-24 09:14:27', '2025-03-24 09:14:27'),
(55, 'Single Page Website', 'Rebekah Nicole', '[{\"name\":\"logo-rebekah.png\",\"id\":\"1miI4jBoH6_bkR5K8t_DDMJnYFosZdne3\",\"datetime\":\"2025-03-24 09:17:52\"}]', '2025-03-24 09:17:48', '2025-03-24 09:17:48'),
(56, 'Single Page Website', 'Resound', '[{\"name\":\"logo-resound.png\",\"id\":\"13vbyYzrLuQN6EmLwSC3GJjv8OkZEP7Tq\",\"datetime\":\"2025-03-24 09:18:18\"}]', '2025-03-24 09:18:15', '2025-03-24 09:18:15'),
(57, 'Single Page Website', 'Taza Mia', '[{\"name\":\"logo-tazaMia.png\",\"id\":\"1NxQQ5cgwYRcr52Vk0TfohzB4c38ymb6E\",\"datetime\":\"2025-03-24 09:18:34\"}]', '2025-03-24 09:18:31', '2025-03-24 09:18:31'),
(58, 'Single Page Website', 'Frontline Threadworks', '[{\"name\":\"logo-threadworks.png\",\"id\":\"1oABikFKW7fYgM50y51DW4lrPwMefygM7\",\"datetime\":\"2025-03-24 09:18:55\"}]', '2025-03-24 09:18:51', '2025-03-24 09:18:51'),
(59, 'Web Design', 'Frontline Christian Academy', '[{\"name\":\"fca-logo-horizontal.png\",\"id\":\"1ifoY4CR-ogiiQCGJpLE_RS8TWvarVkYY\",\"datetime\":\"2025-03-24 09:21:22\"}]', '2025-03-24 09:21:19', '2025-03-24 09:21:19'),
(60, 'Web Design', 'Frontline Worship Center', '[{\"name\":\"logo-fwc.png\",\"id\":\"1QyiNu5AJHEwMJxGUVlu2w7sGD4RKv-1f\",\"datetime\":\"2025-03-24 09:22:04\"}]', '2025-03-24 09:22:01', '2025-03-24 09:22:01'),
(61, 'Web Design', 'Go Mission Trip', '[{\"name\":\"logo-go-mission-trip.png\",\"id\":\"1ELobgWbHNbRMFJxzhp06FK9DqZUqr6IG\",\"datetime\":\"2025-03-24 09:22:20\"}]', '2025-03-24 09:22:17', '2025-03-24 09:22:17'),
(62, 'Web Design', 'Rebekah Nicole', '[{\"name\":\"logo-rebekah.png\",\"id\":\"1r361XuRjuqPEJwkbOBJDpdtfVIntwiq2\",\"datetime\":\"2025-03-24 09:22:40\"}]', '2025-03-24 09:22:37', '2025-03-24 09:22:37'),
(63, 'Web Design', 'Resound', '[{\"name\":\"logo-resound.png\",\"id\":\"1Uel0IjEUZ0b13UMPp5_ZIei2h3tqbYO0\",\"datetime\":\"2025-03-24 09:22:55\"}]', '2025-03-24 09:22:53', '2025-03-24 09:22:53'),
(64, 'Web Design', 'Taza Mia', '[{\"name\":\"logo-tazaMia.png\",\"id\":\"1B6ycDTyfXf17KFu4wZcOlVgIOmav5Fae\",\"datetime\":\"2025-03-24 09:23:10\"}]', '2025-03-24 09:23:08', '2025-03-24 09:23:08'),
(65, 'Web Design', 'Frontline Threadworks', '[{\"name\":\"logo-threadworks.png\",\"id\":\"1Nj20v7rlgS83OT9i2yI-CCtcjb2_XXcE\",\"datetime\":\"2025-03-24 09:23:33\"}]', '2025-03-24 09:23:29', '2025-03-24 09:23:29'),
(66, 'Web Design', 'World Focus', '[{\"name\":\"logo-world-focus.png\",\"id\":\"1cBF6tgvMMyT2oU4oSVoeIPVVGMyNfxws\",\"datetime\":\"2025-03-24 09:23:52\"}]', '2025-03-24 09:23:49', '2025-03-24 09:23:49');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_partners`
--
ALTER TABLE `fbsv2_partners`
  ADD PRIMARY KEY (`partners_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_partners`
--
ALTER TABLE `fbsv2_partners`
  MODIFY `partners_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
