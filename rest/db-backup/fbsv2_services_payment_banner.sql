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
-- Table structure for table `fbsv2_services_payment_banner`
--

CREATE TABLE `fbsv2_services_payment_banner` (
  `payment_banner_aid` int(11) NOT NULL,
  `payment_banner_title` varchar(100) NOT NULL,
  `payment_banner_title_bold` varchar(100) NOT NULL,
  `payment_banner_description` varchar(500) NOT NULL,
  `payment_banner_button_text` varchar(50) NOT NULL,
  `payment_banner_img` text NOT NULL,
  `payment_banner_created` datetime NOT NULL,
  `payment_banner_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_services_payment_banner`
--

INSERT INTO `fbsv2_services_payment_banner` (`payment_banner_aid`, `payment_banner_title`, `payment_banner_title_bold`, `payment_banner_description`, `payment_banner_button_text`, `payment_banner_img`, `payment_banner_created`, `payment_banner_datetime`) VALUES
(1, 'Integrate Into Your Website\nA Hassle-free', 'Online Payment Transaction', 'A component that seamlessly integrates with existing systems to enable secured online payment processing. It allows businesses to accept payments securely via various channels such as credit/debit cards, e-wallets, or bank transfers, enhancing customer convenience and expanding revenue streams.', 'Contact Us', '[{\"name\":\"onlinepayment.webp\",\"id\":\"1b3FWK3yvNplbvssbV2PRBDqZgfroA6du\",\"datetime\":\"2025-05-26 10:36:01\"}]', '2025-05-26 04:34:46', '2025-05-26 14:06:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_services_payment_banner`
--
ALTER TABLE `fbsv2_services_payment_banner`
  ADD PRIMARY KEY (`payment_banner_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_services_payment_banner`
--
ALTER TABLE `fbsv2_services_payment_banner`
  MODIFY `payment_banner_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
