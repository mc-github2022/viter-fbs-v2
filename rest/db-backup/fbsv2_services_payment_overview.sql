-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 27, 2025 at 03:33 AM
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
-- Table structure for table `fbsv2_services_payment_overview`
--

CREATE TABLE `fbsv2_services_payment_overview` (
  `payment_overview_aid` int(11) NOT NULL,
  `payment_overview_subtitle` varchar(100) NOT NULL,
  `payment_overview_title` varchar(100) NOT NULL,
  `payment_overview_img` text NOT NULL,
  `payment_overview_button_text` varchar(20) NOT NULL,
  `payment_overview_list_title_a` varchar(100) NOT NULL,
  `payment_overview_list_description_a` varchar(500) NOT NULL,
  `payment_overview_list_title_b` varchar(100) NOT NULL,
  `payment_overview_list_description_b` varchar(500) NOT NULL,
  `payment_overview_list_title_c` varchar(100) NOT NULL,
  `payment_overview_list_description_c` varchar(500) NOT NULL,
  `payment_overview_created` datetime NOT NULL,
  `payment_overview_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_payment_overview`
--

INSERT INTO `fbsv2_services_payment_overview` (`payment_overview_aid`, `payment_overview_subtitle`, `payment_overview_title`, `payment_overview_img`, `payment_overview_button_text`, `payment_overview_list_title_a`, `payment_overview_list_description_a`, `payment_overview_list_title_b`, `payment_overview_list_description_b`, `payment_overview_list_title_c`, `payment_overview_list_description_c`, `payment_overview_created`, `payment_overview_datetime`) VALUES
(1, 'Why Choose Our', 'Online Payment Integration ', '[{\"name\":\"online-payment-ss.png\",\"id\":\"1yw3b_JJ9keunAeLFdYNcVQnWhv57UMBH\",\"datetime\":\"2025-05-26 10:45:14\"}]', 'Learn More ', 'Payment Flexibility', 'By offering multiple credit/debit card payment options, businesses can provide a smoother checkout experience, catering to a broader range of customers and reducing barriers to completing transactions.', 'Local Market Adaptation', 'By integrating with GCash, a widely-used payment method in the Philippines, businesses can cater to local customer preferences, offering a more flexible and accessible payment option that enhances the user experience.', '', '', '2025-05-26 10:45:11', '2025-05-26 14:18:05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_payment_overview`
--
ALTER TABLE `fbsv2_services_payment_overview`
  ADD PRIMARY KEY (`payment_overview_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_payment_overview`
--
ALTER TABLE `fbsv2_services_payment_overview`
  MODIFY `payment_overview_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
