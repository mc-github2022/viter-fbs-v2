-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 27, 2025 at 03:36 AM
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
-- Table structure for table `fbsv2_services_donation_scope`
--

CREATE TABLE `fbsv2_services_donation_scope` (
  `donation_scope_aid` int(11) NOT NULL,
  `donation_scope_title` varchar(100) NOT NULL,
  `donation_scope_desc` text NOT NULL,
  `donation_scope_img` text NOT NULL,
  `donation_scope_button_text` varchar(20) NOT NULL,
  `donation_scope_created` datetime NOT NULL,
  `donation_scope_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_donation_scope`
--

INSERT INTO `fbsv2_services_donation_scope` (`donation_scope_aid`, `donation_scope_title`, `donation_scope_desc`, `donation_scope_img`, `donation_scope_button_text`, `donation_scope_created`, `donation_scope_datetime`) VALUES
(1, 'Admin Console', 'Allows administrators to manage donations, track funds, and oversee donor activities through an intuitive interface.', '[{\"name\":\"donation-admin-console.png\",\"id\":\"1Mw3B9sP1hhBpbFalpXaRdzN7eTwTqZas\",\"datetime\":\"2025-05-26 15:40:59\"}]', 'Learn More', '2025-05-26 15:40:56', '2025-05-27 09:19:32'),
(2, 'Donor Console', 'Provides donors with a user-friendly platform to make and manage their donations, view history, and update preferences.', '[{\"name\":\"donation-donor-console.png\",\"id\":\"1GZICVY1fU97yJzIL0AAVOu11WMCmvAYq\",\"datetime\":\"2025-05-26 15:41:43\"}]', 'Learn More', '2025-05-26 15:41:40', '2025-05-26 15:41:40'),
(3, 'Donation Designations', 'Enables donations to be directed to specific projects or general funds, offering flexibility for donors.', '[{\"name\":\"donation-designation.png\",\"id\":\"1fL1iatau2R9LFVqSlloYiLGx2rmsgNjL\",\"datetime\":\"2025-05-26 15:42:18\"}]', 'Learn More', '2025-05-26 15:42:15', '2025-05-26 15:42:15'),
(4, 'Donor Record Management', 'Maintains detailed records of donors, including contact information, donation history, and engagement data.', '[{\"name\":\"donation-donors-record.png\",\"id\":\"1tq9q8-ixOZGj-LpQ4ItY_sBGO2WycExY\",\"datetime\":\"2025-05-26 15:43:01\"}]', 'Learn More', '2025-05-26 15:42:58', '2025-05-26 15:42:58'),
(5, 'Payment Method Management', 'Manages donors\' credit card and payment details, ensuring secure and efficient handling of transactions for seamless donation processing.', '[{\"name\":\"donation-payment-method.png\",\"id\":\"1qmq39b_EbsxFSDMED6HlBy6MgICiAghp\",\"datetime\":\"2025-05-27 08:49:00\"}]', 'Learn More', '2025-05-27 08:48:54', '2025-05-27 08:48:54'),
(6, 'Donation Record', 'Keeps a comprehensive log of all donations, tracking amounts, donors, and designated funds.', '[{\"name\":\"donation-record.png\",\"id\":\"1c9EmyVMaukEKcvKxU4VxL2RxbSoNvHiP\",\"datetime\":\"2025-05-27 08:49:40\"}]', 'Learn More', '2025-05-27 08:49:37', '2025-05-27 08:49:37'),
(7, 'Donation Frequency (One-time, Recurring, Manual)', 'Allows donors to choose between one-time, recurring, or manual donation schedules for flexibility.', '[{\"name\":\"donation-frequency.png\",\"id\":\"1C3tp_R419FxPQaCWLw2LQRYiyJtCyUPr\",\"datetime\":\"2025-05-27 08:50:19\"}]', 'Learn More', '2025-05-27 08:50:16', '2025-05-27 08:50:16'),
(8, 'User Settings', 'Enables donors and admins to manage account settings, preferences, and personal information securely.', '[{\"name\":\"donation-setting.png\",\"id\":\"1a8o556yCJWW8GP1Kw_bI7snrLuxr3ACX\",\"datetime\":\"2025-05-27 08:50:59\"}]', 'Learn More', '2025-05-27 08:50:56', '2025-05-27 08:50:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_donation_scope`
--
ALTER TABLE `fbsv2_services_donation_scope`
  ADD PRIMARY KEY (`donation_scope_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_donation_scope`
--
ALTER TABLE `fbsv2_services_donation_scope`
  MODIFY `donation_scope_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
