-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 19, 2025 at 08:56 AM
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
-- Table structure for table `fbsv2_vid_testimonial`
--

CREATE TABLE `fbsv2_vid_testimonial` (
  `vid_testimonial_aid` int(11) NOT NULL,
  `vid_testimonial_category` varchar(100) NOT NULL,
  `vid_testimonial_vid_link` varchar(100) NOT NULL,
  `vid_testimonial_logo_img` text NOT NULL,
  `vid_testimonial_name` varchar(100) NOT NULL,
  `vid_testimonial_course` varchar(100) NOT NULL,
  `vid_testimonial_school` varchar(100) NOT NULL,
  `vid_testimonial_message` text NOT NULL,
  `vid_testimonial_created` datetime NOT NULL,
  `vid_testimonial_datetime` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `fbsv2_vid_testimonial`
--

INSERT INTO `fbsv2_vid_testimonial` (`vid_testimonial_aid`, `vid_testimonial_category`, `vid_testimonial_vid_link`, `vid_testimonial_logo_img`, `vid_testimonial_name`, `vid_testimonial_course`, `vid_testimonial_school`, `vid_testimonial_message`, `vid_testimonial_created`, `vid_testimonial_datetime`) VALUES
(8, 'Continuing Studies', 'https://www.youtube.com/watch?v=xnHrbjA0WZY', '[{\"name\":\"lc.png\",\"id\":\"11P5k8VyGYeBwIAR7JvQ9POSnVvqI8adr\",\"datetime\":\"2025-02-19 15:56:27\"}]', 'Paul Reinier Vista', 'Upskill Trainee', '', 'It is fulfilling, especially learning tools like SASS, Tailwind, WordPress, and Figma. Aside from the technical skills, they taught us how to act professionally in a working environment.', '2024-11-07 10:52:17', '2025-02-19 15:56:24'),
(9, 'Continuing Studies', 'https://www.youtube.com/watch?v=PnBWVserVps', '[{\"name\":\"lc.png\",\"id\":\"1KKRFTv18gLGNJXlKq2Qy4uMIo7G5oA6A\",\"datetime\":\"2025-02-19 15:56:17\"}]', 'Jinuel Zymon I. Ramos', 'BSCS Graduate', '', 'To all college graduates, I encourage you to pursue your continuing studies and training here at FBS. This will help you prepare professionally to join the competitive tech industry.', '2024-11-07 10:53:25', '2025-02-19 15:56:14'),
(10, 'Continuing Studies', 'https://www.youtube.com/watch?v=u-XPdxpKosw', '[{\"name\":\"plsp.png\",\"id\":\"1nCnmoLHsHO2kiaJumyrFGr9ONx8a12L3\",\"datetime\":\"2025-02-19 15:56:00\"}]', 'Kurt Lui Juan Balanial', 'PLSP Graduate', '', 'My training here at FBS has been an invaluable experience that equipped me with essential skills in front-end and back-end development. Beyond that, the environment and professionalism at FBS have empowered me and prepared me to take on future challenges in the tech industry.', '2024-11-07 10:56:42', '2025-02-19 15:55:57'),
(11, 'High School Work Immersion', 'https://www.youtube.com/watch?v=MlBrBmufpy4', '[{\"name\":\"slis.png\",\"id\":\"1VyuRGOa1VDaUINUZIzxxeKssqC1FD4Vj\",\"datetime\":\"2025-02-19 15:55:47\"}]', 'Christian Jaekhob Dela Cruz', 'Grade 12 HUMSS', 'South Lakes Integrated School', 'The program was also very beneficial to me—I learned a lot about potential jobs I could take in the future, and it helped me become a better person thanks to their PLEs after almost every task we completed.', '0000-00-00 00:00:00', '2025-02-19 15:55:44'),
(12, 'High School Work Immersion', 'https://www.youtube.com/watch?v=-OI3L6mWmsA', '[{\"name\":\"spc.png\",\"id\":\"1Tsdv1KTwgTJVHf_UHa5HHR0Lm_R25hiw\",\"datetime\":\"2025-02-19 15:55:37\"}]', 'Justine Clein Gelindon', 'Grade 12 ICT', 'San Pablo Colleges', 'I had a very enjoyable experience here at FBS. Everything we did at FBS was truly enjoyable, from web designing using Figma to creating our own websites with HTML and CSS.', '0000-00-00 00:00:00', '2025-02-19 15:55:34'),
(13, 'High School Work Immersion', 'https://www.youtube.com/watch?v=GJNpd6naWUI', '[{\"name\":\"mfmc.png\",\"id\":\"1rIrRDyqlJsdLQnbmb25oohUKvgUa4TRw\",\"datetime\":\"2025-02-19 15:55:27\"}]', 'Althea Mae Lat', 'Grade 12 HUMSS', 'Marcelino Fule Memorial College', 'My experience was very fun, and all the trainers were kind and approachable. I highly recommend the FBS work immersion program because you will learn a lot here.', '0000-00-00 00:00:00', '2025-02-19 15:55:24'),
(14, 'College On-the-job Training', 'https://www.youtube.com/watch?v=w6_k-pnlaE0&t=1s', '[{\"name\":\"dlsl_official_logo.png\",\"id\":\"1_Z-mA9CGpDCRJm0PsMCWpVNzBX_5xi_P\",\"datetime\":\"2025-02-19 15:55:17\"}]', 'Thea Lyzette Consignado', '', 'De La Salle Lipa Trainee', 'I have learned a lot, and my overall experience will be very helpful not only in my future career, but also in building and shaping myself.', '0000-00-00 00:00:00', '2025-02-19 15:55:13'),
(15, 'College On-the-job Training', 'https://www.youtube.com/watch?v=rGtLB1x58ts', '[{\"name\":\"lspu.png\",\"id\":\"1-i_BkYqe6VsQIv9A0bpaZC4M4718CL4M\",\"datetime\":\"2025-02-19 15:55:07\"}]', 'Mark Ryan Merin', 'Laguna State Polytechnic Univ.', ' SPC Campus', 'I am grateful to Frontline Business Solutions for providing me with a training and the support I needed to become what I am today. Their programs are designed to help people like me to gain the skills and knowledge that is neccesary to success in this field.', '0000-00-00 00:00:00', '2025-02-19 15:55:03'),
(16, 'College On-the-job Training', 'https://www.youtube.com/watch?v=7fGYHbtnCQk', '[{\"name\":\"lc.png\",\"id\":\"1_4H6DgvipkWPqwOhhxNJ_F21vkHElZgb\",\"datetime\":\"2025-02-19 15:54:07\"}]', 'Aileah Marie Lozada', 'Laguna College Trainee', '', 'They did not just help me improve my web designing skills, but they also gave me strength and advises regarding personality and values that I can adopt from them to the IT industry.', '2024-11-07 11:06:16', '2025-02-19 15:54:03');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `fbsv2_vid_testimonial`
--
ALTER TABLE `fbsv2_vid_testimonial`
  ADD PRIMARY KEY (`vid_testimonial_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `fbsv2_vid_testimonial`
--
ALTER TABLE `fbsv2_vid_testimonial`
  MODIFY `vid_testimonial_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
