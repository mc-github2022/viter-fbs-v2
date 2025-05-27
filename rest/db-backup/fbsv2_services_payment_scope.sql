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
-- Table structure for table `fbsv2_services_payment_scope`
--

CREATE TABLE `fbsv2_services_payment_scope` (
  `payment_scope_aid` int(11) NOT NULL,
  `payment_scope_title` varchar(100) NOT NULL,
  `payment_scope_desc` text NOT NULL,
  `payment_scope_img` text NOT NULL,
  `payment_scope_button_text` varchar(20) NOT NULL,
  `payment_scope_created` datetime NOT NULL,
  `payment_scope_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_payment_scope`
--

INSERT INTO `fbsv2_services_payment_scope` (`payment_scope_aid`, `payment_scope_title`, `payment_scope_desc`, `payment_scope_img`, `payment_scope_button_text`, `payment_scope_created`, `payment_scope_datetime`) VALUES
(1, 'Credit/Debit Card Payment (Visa and Mastercard)', 'Enables secure payment processing through Visa and Mastercard, offering customers a trusted and convenient way to complete transactions.', '[{\"name\":\"online-payment-cc.png\",\"id\":\"1O5dba84YQSnJiya9zi9N5AU41IHpkVyG\",\"datetime\":\"2025-05-26 12:19:17\"}]', 'Learn More', '2025-05-26 12:19:14', '2025-05-26 12:19:31'),
(3, 'Gcash Payment', 'Supports Gcash payment integration, allowing customers to pay seamlessly using their e-wallet for a hassle-free experience.', '[{\"name\":\"online-payment-gcash.png\",\"id\":\"1vBcyxeDq2v-3_c4dv7AEEX_f1FgEGBpp\",\"datetime\":\"2025-05-26 12:20:17\"}]', 'Learn More', '2025-05-26 12:20:14', '2025-05-26 12:20:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_payment_scope`
--
ALTER TABLE `fbsv2_services_payment_scope`
  ADD PRIMARY KEY (`payment_scope_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_payment_scope`
--
ALTER TABLE `fbsv2_services_payment_scope`
  MODIFY `payment_scope_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
